"use client";

import { useState } from "react";
import ButtonCheckout from "@/components/ButtonCheckout";

const BRAND_START = "#eb538a";
const BRAND_END = "#ff930f";

export default function UserInfoForm({ session }) {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false); // Track success state

  const hasPaidAccess =
    !!session?.user &&
    (session.user.hasAccess === true || session.user.hasAccess === "true") &&
    (session.user.status || "").toString().toLowerCase() === "paid";

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false); // Reset success state
    if (!username) return setError("Please enter your GitHub username.");
    setLoading(true);

    try {
      const res = await fetch("/api/github/invite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          github_username: username,
          variantName: session?.user?.variantName || "",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data?.error || "Failed to request access");
      } else {
        setSuccess(true); // Show success message
      }
    } catch {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  };

  if (!session) {
    return (
      <div className="max-w-md mx-auto text-center">
        <p className="text-lg font-semibold text-green-600">
          Great! Invitation sent, please check your email.
        </p>
      </div>
    );
  }

  if (!hasPaidAccess) {
    return (
      <div className="max-w-md mx-auto text-center">
        <p className="mb-4 text-lg text-base-content/80 leading-relaxed">
          It looks like you don&apos;t have an active purchase. Please buy
          access to connect your GitHub account.
        </p>
        <ButtonCheckout priceId="price_49" variantCode="pro" />
      </div>
    );
  }

  if (success) {
    return (
      <div className="max-w-md mx-auto text-center">
        <p className="text-lg font-semibold text-green-600">
          Great! Invitation sent, please check your email.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="max-w-2xl mx-auto w-full">
      <label className="block mb-2 text-sm font-medium text-base-content">
        GitHub username
      </label>
      <input
        className="input input-bordered w-full mb-3"
        placeholder="your-github-username"
        value={username}
        onChange={(e) => setUsername(e.target.value.trim())}
      />
      {error && <p className="text-sm text-red-500 mb-3">{error}</p>}
      <button
        type="submit"
        className="btn w-full py-5 font-semibold"
        style={{
          background: `linear-gradient(90deg, ${BRAND_START}, ${BRAND_END})`,
          color: "#fff",
          border: "none",
        }}
        disabled={loading || !username}
      >
        {loading ? "Requesting..." : "Request Access"}
      </button>
    </form>
  );
}
