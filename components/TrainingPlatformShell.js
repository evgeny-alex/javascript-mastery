"use client";

import { useState } from "react";
import config from "@/config";
import HeaderPlatform from "@/components/HeaderPlatform";
import ModuleList from "@/components/ModuleList";
import LessonComponent from "@/components/LessonComponent";

const TrainingPlatformShell = ({ session }) => {
  const userName = session?.user?.name || session?.user?.email || "Student";
  const [selectedLesson, setSelectedLesson] = useState(null);

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

            <ModuleList modules={modules} onLessonSelect={setSelectedLesson} />
          </aside>

          {/* Lesson Content */}
          <LessonComponent lesson={selectedLesson} />
        </div>
      </div>
    </main>
  );
};

export default TrainingPlatformShell;
