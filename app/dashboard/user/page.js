import config from "@/config";
import { auth } from "@/libs/auth";
import UserInfoForm from "@/components/UserInfoForm";

export default async function UserInfoPage() {
  const session = await auth();

  return (
    <main className="min-h-screen bg-base-200 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-base-100 rounded-lg p-10 shadow-md">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-base-content">
            JavaScript Mastery
          </h1>
          <p className="text-lg leading-relaxed text-base-content/80">
            Unlock the full program: lessons, projects, and assignments. Your
            access activates automatically after purchase.
          </p>
        </div>

        <UserInfoForm session={session} />

        <div className="mt-8 text-sm">
          <ol className="list-decimal list-inside space-y-2 text-base-content/90 leading-relaxed">
            <li>Choose a plan and complete checkout</li>
            <li>Access is activated automatically</li>
            <li>Start learning in your Dashboard</li>
          </ol>
        </div>

        <div className="mt-6 text-center text-sm text-base-content/60">
          {config.appName} — {config.appDescription}
        </div>
      </div>
    </main>
  );
}
