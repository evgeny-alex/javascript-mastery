"use client";

import { useEffect, useMemo, useState } from "react";
import config from "@/config";

const PADDLE_TOKEN = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN; // важно: NEXT_PUBLIC_
const PADDLE_ENV = process.env.NEXT_PUBLIC_PADDLE_ENV ?? "sandbox"; // "sandbox" | "production"

function loadPaddleScript() {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined") return reject(new Error("No window"));

    if (window.Paddle) return resolve(window.Paddle);

    const existing = document.getElementById("paddle-js-v2");
    if (existing) {
      existing.addEventListener("load", () => resolve(window.Paddle));
      existing.addEventListener("error", reject);
      return;
    }

    const script = document.createElement("script");
    script.id = "paddle-js-v2";
    script.src = "https://cdn.paddle.com/paddle/v2/paddle.js";
    script.async = true;
    script.onload = () => resolve(window.Paddle);
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

export default function ButtonUpgrade({
  priceId,
  quantity = 1,
  email,
  customerAuthToken,
  customData,
  planName,
  variantCode,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const items = useMemo(() => [{ priceId, quantity }], [priceId, quantity]);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        if (!PADDLE_TOKEN) {
          console.error("Missing NEXT_PUBLIC_PADDLE_CLIENT_TOKEN");
          return;
        }

        const Paddle = await loadPaddleScript();

        if (Paddle?.Environment?.set) {
          Paddle.Environment.set(PADDLE_ENV);
        }

        if (!window.__paddleInitialized) {
          Paddle.Initialize({
            token: PADDLE_TOKEN,
            pwCustomer: {},
            eventCallback: function (event) {
              if (event.name === "checkout.closed") {
                window.__activeCheckoutReset?.();
                setIsLoading(false);
              }
              if (event.name === "checkout.completed") {
                // Notify other parts of the app about the upgrade
                try {
                  const level = variantCode || "pro";
                  const payload = { level, ts: Date.now() };
                  localStorage.setItem("jmastery_upgrade", JSON.stringify(payload));
                  window.dispatchEvent(new CustomEvent("jmastery:upgrade", { detail: payload }));
                } catch (e) {
                  console.error("Failed to broadcast upgrade:", e);
                }
                // Redirect after successful payment
                window.location.href = `/dashboard/success-page`;
              }
            },
          });

          window.__paddleInitialized = true;
        }

        if (!cancelled) setIsReady(true);
      } catch (e) {
        console.error("Failed to init Paddle:", e);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const handlePayment = () => {
    setIsLoading(true);

    try {
      if (!window.Paddle) throw new Error("Paddle is not loaded yet");
      if (!isReady) throw new Error("Paddle is not ready yet");
      if (!priceId) throw new Error("Missing priceId");

      window.__activeCheckoutReset = () => setIsLoading(false);

      window.Paddle.Checkout.open({
        items,
        customer: email ? { email } : undefined,
        customerAuthToken: customerAuthToken || undefined,
        customData: customData || undefined,
        settings: {
          displayMode: "overlay",
          theme: "light",
          locale: "en",
        },
        successCallback: (data) => {
          console.log("Payment successful:", data);
          setIsLoading(false);
          // Notify other parts of the app about the upgrade
          try {
            const level = variantCode || "pro";
            const payload = { level, ts: Date.now() };
            localStorage.setItem("jmastery_upgrade", JSON.stringify(payload));
            window.dispatchEvent(new CustomEvent("jmastery:upgrade", { detail: payload }));
          } catch (e) {
            console.error("Failed to broadcast upgrade:", e);
          }
          // Redirect after successful payment
          window.location.href = `/dashboard/success-page`;
        },
        closeCallback: () => {
          console.log("Payment canceled");
          setIsLoading(false);
        },
      });
    } catch (error) {
      console.error("Error opening Paddle checkout:", error);
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={isLoading || !isReady}
      type="button"
      className="btn btn-primary w-full group border-0 text-white"
    >
      {isLoading ? (
        <span className="loading loading-spinner loading-xs"></span>
      ) : planName ? (
        `Choose ${planName}`
      ) : (
        `Get ${config?.appName}`
      )}
    </button>
  );
}
