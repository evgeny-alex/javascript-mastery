"use client";

export const dynamic = "force-dynamic";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const messages = {
  Verification:
    "This magic link is invalid or already used. Please request a new one.",
  AccessDenied: "Access denied.",
  Configuration: "Auth configuration error.",
};

function AuthErrorContent() {
  const searchParams = useSearchParams();
  const code = searchParams.get("error") || "Unknown";
  const message = messages[code] || "Something went wrong. Please try again.";

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-md w-full rounded-2xl border border-slate-200 p-6 space-y-4">
        <h1 className="text-2xl font-semibold">Login link problem</h1>
        <p className="text-sm opacity-80">{message}</p>

        <div className="flex gap-4">
          <Link
            href="/api/auth/signin"
            className="btn btn-info"
            title="Back to login"
          >
            Back to login page
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function AuthErrorPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <AuthErrorContent />
    </Suspense>
  );
}
