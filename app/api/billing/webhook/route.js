import { NextResponse } from "next/server";
import crypto from "crypto";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";

function safeJsonParse(raw) {
  try {
    return JSON.parse(raw || "{}");
  } catch {
    return {};
  }
}

async function getCustomerById(customerId) {
  const apiKey = process.env.PADDLE_API_KEY;
  const apiBase = process.env.PADDLE_API || "sandbox-api.paddle.com";
  if (!apiKey) {
    console.error("Missing PADDLE_API_KEY env");
    return null;
  }
  if (!customerId) return null;

  try {
    const res = await fetch(`https://${apiBase}/customers/${customerId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      // важно: webhook route на сервере, кеш не нужен
      cache: "no-store",
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error("Paddle get customer failed:", res.status, text);
      return null;
    }

    const json = await res.json().catch(() => null);
    return json?.data ?? null; // { id, email, name, ... }
  } catch (e) {
    console.error("Paddle get customer error:", e);
    return null;
  }
}

export async function POST(req) {
  try {
    const raw = await req.text(); // важно: сырой body
    const signatureHeader =
      req.headers.get("paddle-signature") ||
      req.headers.get("Paddle-Signature");

    const webhookSecret = process.env.PADDLE_WEBHOOK_SECRET;
    if (!webhookSecret) {
      // без секрета просто принимаем (или логируем ошибку конфигурации)
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    if (!signatureHeader) {
      return NextResponse.json(
        { ok: false, error: "Missing Paddle-Signature header" },
        { status: 400 },
      );
    }

    // 1. Парсим ts и h1
    const parts = signatureHeader.split(";").reduce((acc, part) => {
      const [k, v] = part.split("=");
      if (k && v) acc[k.trim()] = v.trim();
      return acc;
    }, {});

    const ts = parts["ts"];
    const h1 = parts["h1"];

    if (!ts || !h1) {
      return NextResponse.json(
        { ok: false, error: "Invalid Paddle-Signature format" },
        { status: 400 },
      );
    }

    // 2. Собираем signed payload
    const signedPayload = `${ts}:${raw}`;

    // 3. Считаем HMAC-SHA256
    const expected = crypto
      .createHmac("sha256", webhookSecret)
      .update(signedPayload)
      .digest("hex");

    // 4. Сравниваем с h1
    if (expected !== h1) {
      return NextResponse.json(
        { ok: false, error: "Invalid signature" },
        { status: 400 },
      );
    }

    const body = safeJsonParse(raw);

    // интересует только оплата
    if (body?.event_type !== "transaction.paid") {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const data = body?.data || {};
    const status = (data?.status || "").toString().toLowerCase();
    if (status !== "paid") {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const customerId = data?.customer_id || "";
    if (!customerId) {
      console.error("Webhook: missing customer_id", {
        event_id: body?.event_id,
      });
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    // priceId / variantName
    const priceId =
      data?.items?.[0]?.price_id ||
      data?.items?.[0]?.price?.id ||
      data?.details?.line_items?.[0]?.price_id ||
      "";

    const variantName =
      data?.items?.[0]?.price?.name ||
      data?.details?.line_items?.[0]?.product?.name ||
      "";

    const order_purchased =
      data?.billed_at || data?.created_at || body?.occurred_at || null;

    // ✅ получаем customer по customer_id
    const customer = await getCustomerById(customerId);
    const email = (customer?.email || "").trim();
    const name =
      (customer?.name || "").trim() ||
      data?.payments?.[0]?.method_details?.card?.cardholder_name ||
      "";

    if (!email) {
      console.error("Webhook: customer has no email", {
        customerId,
        transactionId: data?.id,
        event_id: body?.event_id,
      });
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    await connectMongo();

    const github_username = "";
    const hasAccess = true;

    try {
      const existingUser = await User.findOne({ email });

      const update = {
        name,
        github_username,
        customerId,
        priceId,
        hasAccess,
        order_purchased,
        status,
        variantName,
      };

      if (existingUser) {
        await User.updateOne({ email }, { $set: update });
      } else {
        await User.create({ email, ...update });
      }
    } catch (e) {
      console.error("MongoDB operation error:", e);
      return NextResponse.json(
        { error: "Failed to save or update user" },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("Webhook handler error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
