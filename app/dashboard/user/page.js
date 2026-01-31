import config from "@/config";
import { auth } from "@/libs/auth";
import UserInfoForm from "@/components/UserInfoForm";
import HeaderPlatform from "@/components/HeaderPlatform";
import ModuleList from "@/components/ModuleList";

// Main page component
function TrainingPlatformShell({ session }) {
  const userName = session?.user?.name || session?.user?.email || "Student";

  const modules = [
    {
      title: "The mindset",
      lessons: [
        { title: "WHY?", duration: "3:27", completed: true },
        { title: "HOW TO…", duration: "5:22", completed: true },
        { title: "Ship fast", duration: "3:27", completed: false },
        { title: "Make money", duration: "5:22", completed: false },
        { title: "Find motivation", duration: "4:52", completed: false },
      ],
    },
    { title: "Explain me internet", lessons: [] },
    { title: "Your 1st SaaS", lessons: [] },
    { title: "Outro", lessons: [] },
  ];

  return (
    <main className="min-h-screen bg-base-200">
      {/* Header */}
      <HeaderPlatform userName={userName} />

      {/* Layout */}
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6">
          {/* Sidebar */}
          <aside className="bg-base-100 rounded-2xl shadow-sm border border-base-300 overflow-hidden">
            <div className="p-5 border-b border-base-300">
              <div className="text-lg font-bold">{config.appName}</div>
              <div className="text-sm text-base-content/70">
                Course navigation
              </div>
            </div>

            <ModuleList modules={modules} />
          </aside>

          {/* Content */}
          <section className="bg-base-100 rounded-2xl shadow-sm border border-base-300 overflow-hidden">
            <div className="p-6 border-b border-base-300">
              <h1 className="text-3xl font-extrabold tracking-tight">
                JavaScript Mastery
              </h1>
            </div>

            <div className="p-6 space-y-6">
              {/* Video */}
              <div className="rounded-2xl border border-base-300 overflow-hidden">
                <div className="aspect-video bg-base-200 relative">
                  {/* Placeholder for video player */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="btn btn-circle btn-primary">▶</button>
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
                    JavaScript Mastery is a hands-on course for mastering
                    JavaScript and React.
                  </li>
                  <li>
                    Learn modern JavaScript, async patterns, and clean code
                    practices.
                  </li>
                  <li>
                    Build real-world projects and prepare for technical
                    interviews.
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
