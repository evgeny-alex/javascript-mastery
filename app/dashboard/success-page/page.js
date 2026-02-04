import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="max-w-lg bg-base-100 p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">
          Congratulations on
        </h1>
        <h1 className="text-3xl font-bold text-primary mb-4">
          upgrading 🎉
        </h1>
        <p className="text-base-content/70 mb-6">
          Your plan has been successfully upgraded. You now have access to all
          the premium features and modules. Start exploring your new content!
        </p>
        <Link href="/dashboard/user">
          <button className="btn btn-primary w-full">Go to Dashboard</button>
        </Link>
      </div>
    </main>
  );
}
