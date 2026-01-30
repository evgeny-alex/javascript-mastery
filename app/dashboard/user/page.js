import config from "@/config";
import { auth } from "@/libs/auth";
import UserInfoForm from "@/components/UserInfoForm";

function TrainingPlatformShell({ session }) {
  const userName =
    session?.user?.name || session?.user?.email || "Student";

  return (
    <main className="min-h-screen bg-base-200">
      {/* Top bar */}
      <div className="border-b border-base-300 bg-base-100">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="btn btn-ghost btn-sm normal-case text-base font-bold">
              CodeFast
            </div>
          </div>

          <div className="flex-1">
            <div className="text-xs text-base-content/70 mb-1">
              221 / 221 lessons completed (100%)
            </div>
            <progress
              className="progress progress-success w-full"
              value={100}
              max={100}
            />
          </div>

          <div className="hidden md:block text-sm text-base-content/70">
            Your last lesson:{" "}
            <span className="font-semibold text-base-content">
              Private dashboard
            </span>
          </div>

          <div className="ml-auto flex items-center gap-3">
            <div className="badge badge-neutral badge-lg">Completed</div>
            <div className="flex items-center gap-2">
              <div className="avatar placeholder">
                <div className="bg-base-300 text-base-content rounded-full w-9">
                  <span className="text-sm">
                    {(userName || "U").toString().slice(0, 1).toUpperCase()}
                  </span>
                </div>
              </div>
              <div className="hidden sm:block text-sm font-semibold">
                {userName}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Layout */}
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6">
          {/* Sidebar */}
          <aside className="bg-base-100 rounded-2xl shadow-sm border border-base-300 overflow-hidden">
            <div className="p-5 border-b border-base-300">
              <div className="text-lg font-bold">JavaScript Mastery</div>
              <div className="text-sm text-base-content/70">
                Course navigation
              </div>
            </div>

            <div className="p-4 space-y-4">
              <div className="space-y-2">
                <div className="font-semibold text-base-content/80">
                  1. The mindset
                </div>

                <div className="ml-1 space-y-2">
                  <div className="flex items-center justify-between rounded-lg bg-base-200 px-3 py-2">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="checkbox checkbox-sm checkbox-success"
                        defaultChecked
                      />
                      <span className="text-sm">WHY?</span>
                    </div>
                    <span className="text-xs text-base-content/60">3:27</span>
                  </div>

                  <div className="flex items-center justify-between rounded-lg bg-base-200 px-3 py-2">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="checkbox checkbox-sm checkbox-success"
                        defaultChecked
                      />
                      <span className="text-sm">HOW TO…</span>
                    </div>
                    <span className="text-xs text-base-content/60">5:22</span>
                  </div>

                  <div className="flex items-center justify-between rounded-lg bg-base-200 px-3 py-2 opacity-60">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="checkbox checkbox-sm"
                        disabled
                      />
                      <span className="text-sm">Ship fast</span>
                    </div>
                    <span className="text-xs text-base-content/60">3:27</span>
                  </div>

                  <div className="flex items-center justify-between rounded-lg bg-base-200 px-3 py-2 opacity-60">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="checkbox checkbox-sm"
                        disabled
                      />
                      <span className="text-sm">Make money</span>
                    </div>
                    <span className="text-xs text-base-content/60">5:22</span>
                  </div>

                  <div className="flex items-center justify-between rounded-lg bg-base-200 px-3 py-2 opacity-60">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="checkbox checkbox-sm"
                        disabled
                      />
                      <span className="text-sm">Find motivation</span>
                    </div>
                    <span className="text-xs text-base-content/60">4:52</span>
                  </div>
                </div>
              </div>

              <div className="divider my-0" />

              {["2. Explain me internet", "3. Your 1st SaaS", "4. Outro"].map(
                (t) => (
                  <div
                    key={t}
                    className="rounded-xl border border-base-300 bg-base-100 px-4 py-3"
                  >
                    <div className="font-semibold">{t}</div>
                  </div>
                )
              )}
            </div>
          </aside>

          {/* Content */}
          <section className="bg-base-100 rounded-2xl shadow-sm border border-base-300 overflow-hidden">
            <div className="p-6 border-b border-base-300">
              <h1 className="text-3xl font-extrabold tracking-tight">
                daisyUI components
              </h1>
            </div>

            <div className="p-6 space-y-6">
              {/* Video */}
              <div className="rounded-2xl border border-base-300 overflow-hidden">
                <div className="aspect-video bg-base-200 relative">
                  {/* Заглушка под плеер */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="btn btn-circle btn-primary">
                      ▶
                    </button>
                  </div>

                  <div className="absolute left-4 bottom-4 text-xs text-base-content/70">
                    0:02 / 2:34
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div>
                <div className="text-lg font-bold mb-3">Summary</div>
                <ul className="list-disc list-inside space-y-2 text-base-content/90 leading-relaxed">
                  <li>
                    daisyUI is used for user interface elements like buttons,
                    toggles, cards
                  </li>
                  <li>
                    Classes like{" "}
                    <span className="badge badge-ghost font-mono">btn</span> and{" "}
                    <span className="badge badge-ghost font-mono">
                      btn-primary
                    </span>{" "}
                    are used to style buttons in daisyUI
                  </li>
                  <li>
                    daisyUI is a collection of Tailwind CSS classes, simplifying
                    the code needed
                  </li>
                  <li>
                    To install daisyUI, stop the server (press{" "}
                    <span className="badge badge-ghost font-mono">Ctrl + C</span>
                    ), and run{" "}
                    <span className="badge badge-ghost font-mono">
                      npm i -D daisyui@4.11.1
                    </span>
                  </li>
                  <li>
                    Then inside the{" "}
                    <span className="badge badge-ghost font-mono">
                      tailwind.config.js
                    </span>{" "}
                    add this under plugins array:{" "}
                    <span className="badge badge-ghost font-mono">
                      require(&apos;daisyui&apos;)
                    </span>
                  </li>
                </ul>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between pt-2">
                <button className="btn btn-outline rounded-full px-8">
                  ← Previous
                </button>
                <button className="btn btn-outline rounded-full px-8">
                  Next →
                </button>
              </div>

              <div className="text-center text-xs text-base-content/50 pt-2">
                {config.appName} — {config.appDescription}
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default async function UserInfoPage() {
  const session = await auth();

  const hasPaidAccess =
    !!session?.user &&
    (session.user.hasAccess === true || session.user.hasAccess === "true") &&
    (session.user.status || "").toString().toLowerCase() === "paid";

  if (hasPaidAccess) {
    return <TrainingPlatformShell session={session} />;
  }

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
