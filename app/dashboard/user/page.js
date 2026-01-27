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
            Connect GitHub
          </h1>
          <p className="text-lg leading-relaxed text-base-content/80">
            Enter your GitHub username to get access to the AI Code Reviewer
            repo. You&apos;ll receive an email from GitHub to confirm your
            access.
          </p>
        </div>

        <UserInfoForm session={session} />

        <div className="mt-8 text-sm">
          <ol className="list-decimal list-inside space-y-2 text-base-content/90 leading-relaxed">
            <li>Request Github access</li>
            <li>Accept invitation in emails</li>
            <li>
              Start with the{" "}
              <a
                href="https://github.com/evgeny-alex/ai-code-reviewer-agent/blob/main/README.md"
                target="_blank"
                rel="noopener noreferrer"
                className="link link-primary"
              >
                README
              </a>
            </li>
          </ol>
        </div>

        <div className="mt-6 text-center text-sm text-base-content/60">
          {config.appName} — {config.appDescription}
        </div>
      </div>
    </main>
  );
}
