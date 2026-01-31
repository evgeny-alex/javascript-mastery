"use client";

import { useState } from "react";
import modulesData from "@/libs/modules";
import HeaderPlatform from "@/components/HeaderPlatform";
import ModuleList from "@/components/ModuleList";
import LessonComponent from "@/components/LessonComponent";

const TrainingPlatformShell = ({ session }) => {
  const userName = session?.user?.name || session?.user?.email || "Student";
  const [modules, setModules] = useState(modulesData);
  const [selectedLesson, setSelectedLesson] = useState(null);

  const handleLessonSelect = async (lesson) => {
    const lessonContent = await import(`@/lessons/${lesson.lesson_code}.js`);
    setSelectedLesson({ ...lesson, content: lessonContent.default.content });
  };

  const handleLessonComplete = (lessonCode, isCompleted) => {
    // Update the lesson's completion state in the modules list
    setModules((prevModules) =>
      prevModules.map((module) => ({
        ...module,
        lessons: module.lessons.map((lesson) =>
          lesson.lesson_code === lessonCode
            ? { ...lesson, completed: isCompleted }
            : lesson,
        ),
      })),
    );

    // Update the selected lesson's completion state
    if (selectedLesson?.lesson_code === lessonCode) {
      setSelectedLesson((prevLesson) => ({
        ...prevLesson,
        completed: isCompleted,
      }));
    }
  };

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
              <div className="text-lg font-bold">Course navigation</div>
            </div>

            <ModuleList modules={modules} onLessonSelect={handleLessonSelect} />
          </aside>

          {/* Lesson Content */}
          <LessonComponent
            lesson={selectedLesson}
            onLessonComplete={handleLessonComplete}
          />
        </div>
      </div>
    </main>
  );
};

export default TrainingPlatformShell;
