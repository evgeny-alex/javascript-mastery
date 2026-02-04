import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `Upgrade — ${config.appName}`,
  description: "Upgrade to Pro or Bootcamp to unlock all modules and projects.",
  canonicalUrlRelative: "/upgrade",
});

export default function UpgradePage({ searchParams }) {
  const returnTo = searchParams?.returnTo || "/dashboard";

  return (
    <main className="min-h-screen flex items-center justify-center bg-base-200 p-6">
      <div className="max-w-3xl w-full bg-base-100 rounded-xl shadow-md p-8 space-y-6">
        <h1 className="text-2xl font-bold">Upgrade your access</h1>
        <p className="text-base-content/80">
          Choose Pro or Bootcamp to unlock all modules, projects and interview
          prep. After purchase you will be redirected back to{" "}
          <span className="font-medium">{returnTo}</span>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold text-lg">Pro</h3>
            <p className="text-sm text-base-content/80 mb-4">
              Full course (Modules 1–7) + interview roadmap.
            </p>
            <Link
              href={`/pricing?returnTo=${encodeURIComponent(returnTo)}#pro`}
              className="btn btn-accent w-full"
            >
              View Pro
            </Link>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold text-lg">Bootcamp</h3>
            <p className="text-sm text-base-content/80 mb-4">
              Cohort-based Bootcamp with mock interviews and extra support.
            </p>
            <Link
              href={`/pricing?returnTo=${encodeURIComponent(returnTo)}#bootcamp`}
              className="btn btn-primary w-full"
            >
              View Bootcamp
            </Link>
          </div>
        </div>

        <div className="text-center text-sm text-base-content/70">
          Or go back to{" "}
          <Link href={returnTo} className="link">
            your dashboard
          </Link>
          .
        </div>
      </div>
    </main>
  );
}
