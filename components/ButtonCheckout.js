"use client";

import { useEffect, useMemo, useState } from "react";
import config from "@/config";

const PADDLE_TOKEN = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN; // важно: NEXT_PUBLIC_
const PADDLE_ENV = process.env.NEXT_PUBLIC_PADDLE_ENV ?? "sandbox"; // "sandbox" | "production"

function loadPaddleScript() {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined") return reject(new Error("No window"));

    // уже загружен
    if (window.Paddle) return resolve(window.Paddle);

    // уже добавляли скрипт
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

export default function ButtonCheckout({
  priceId, // Paddle priceId (pri_...)
  quantity = 1,
  email,
  customerAuthToken,
  customData,
  brandStart = "#eb538a",
  brandEnd = "#ff930f",
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

        // среда (sandbox/production) — рекомендуют выставлять до Initialize в примерах интеграций
        if (Paddle?.Environment?.set) {
          Paddle.Environment.set(PADDLE_ENV);
        }

        // Initialize можно вызывать только один раз на странице :contentReference[oaicite:3]{index=3}
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
                window.location.href = `/api/auth/signin`;
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

        // Prefill (опционально)
        customer: email ? { email } : undefined,

        // Если хочешь показывать сохранённые методы оплаты — нужен customerAuthToken :contentReference[oaicite:4]{index=4}
        customerAuthToken: customerAuthToken || undefined,

        // Твои метаданные (UTM, userId и т.п.) :contentReference[oaicite:5]{index=5}
        customData: customData || undefined,

        // ВАЖНО: overlay settings :contentReference[oaicite:6]{index=6}
        settings: {
          displayMode: "overlay",
          theme: "light",
          locale: "en",
          // опционально:
          // variant: "one-page",
        },

        successCallback: (data) => {
          console.log("Payment successful:", data);
          setIsLoading(false);
          window.location.href = "/api/auth/signin";
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
      ) : (
        <svg
          className="w-5 h-5 fill-primary-content group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200"
          viewBox="0 0 375 509"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M249.685 14.125C249.685 11.5046 248.913 8.94218 247.465 6.75675C246.017 4.57133 243.957 2.85951 241.542 1.83453C239.126 0.809546 236.463 0.516683 233.882 0.992419C231.301 1.46815 228.917 2.69147 227.028 4.50999L179.466 50.1812C108.664 118.158 48.8369 196.677 2.11373 282.944C0.964078 284.975 0.367442 287.272 0.38324 289.605C0.399039 291.938 1.02672 294.226 2.20377 296.241C3.38082 298.257 5.06616 299.929 7.09195 301.092C9.11775 302.255 11.4133 302.867 13.75 302.869H129.042V494.875C129.039 497.466 129.791 500.001 131.205 502.173C132.62 504.345 134.637 506.059 137.01 507.106C139.383 508.153 142.01 508.489 144.571 508.072C147.131 507.655 149.516 506.503 151.432 504.757L172.698 485.394C247.19 417.643 310.406 338.487 359.975 250.894L373.136 227.658C374.292 225.626 374.894 223.327 374.882 220.99C374.87 218.653 374.243 216.361 373.065 214.341C371.887 212.322 370.199 210.646 368.17 209.482C366.141 208.318 363.841 207.706 361.5 207.707H249.685V14.125Z" />
        </svg>
      )}
      Get {config?.appName}
    </button>
  );
}
