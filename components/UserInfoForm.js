"use client";

import ButtonCheckout from "@/components/ButtonCheckout";

export default function UserInfoForm({ session }) {
  const hasPaidAccess =
    !!session?.user &&
    (session.user.hasAccess === true || session.user.hasAccess === "true") &&
    (session.user.status || "").toString().toLowerCase() === "paid";

  if (!session) {
    return (
      <div className="max-w-md mx-auto text-center">
        <p className="mb-4 text-lg text-base-content/80 leading-relaxed">
          Please log in to purchase access and continue.
        </p>
        <a href="/login" className="btn btn-secondary-content w-full">
          Log in
        </a>
      </div>
    );
  }

  if (!hasPaidAccess) {
    return (
      <div className="max-w-md mx-auto text-center">
        <p className="mb-4 text-lg text-base-content/80 leading-relaxed">
          You don&apos;t have an active subscription yet. Purchase access to
          unlock JavaScript Mastery.
        </p>

        <ButtonCheckout priceId="price_49" variantCode="pro" />

        <p className="mt-3 text-sm text-base-content/60">
          After payment, your dashboard will unlock automatically.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto text-center">
      <p className="text-lg font-semibold text-green-600">
        Your access is active. Welcome to JavaScript Mastery!
      </p>
      <a href="/dashboard" className="btn btn-accent w-full mt-4">
        Go to Dashboard
      </a>
    </div>
  );
}
