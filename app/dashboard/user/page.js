import config from "@/config";
import { auth } from "@/libs/auth";
import UserInfoForm from "@/components/UserInfoForm";
import HeaderPlatform from "@/components/HeaderPlatform";
import ModuleList from "@/components/ModuleList";
import LessonComponent from "@/components/LessonComponent";

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

          <LessonComponent />
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
