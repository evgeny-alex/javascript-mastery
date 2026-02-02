"use client";

import { useEffect, useState } from "react";
import modulesData from "@/libs/modules";
import HeaderPlatform from "@/components/HeaderPlatform";
import ModuleList from "@/components/ModuleList";
import LessonComponent from "@/components/LessonComponent";
import apiClient from "@/libs/api";

const getTotalLessons = (mods) =>
  mods.reduce((acc, m) => acc + (m.lessons?.length || 0), 0);

const findLessonTitleByCode = (mods, code) => {
  for (const m of mods) {
    const l = m.lessons.find((x) => x.lesson_code === code);
    if (l) return l.title;
  }
  return "";
};

const findLessonByCode = (mods, code) => {
  for (const m of mods) {
    const l = m.lessons.find((x) => x.lesson_code === code);
    if (l) return l;
  }
  return null;
};

const getFlatLessons = (mods) =>
  mods.flatMap((m) => m.lessons.map((l) => ({ ...l, moduleTitle: m.title })));

const TrainingPlatformShell = ({ session }) => {
  const userName = session?.user?.name || session?.user?.email || "Student";
  const userId = session?.user?.email || session?.user?.id || "anon";
  const [modules, setModules] = useState(modulesData);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [lastLessonCode, setLastLessonCode] = useState(null);

  // Fetch completed lessons for the user and update modules state
  useEffect(() => {
    async function fetchProgress() {
      try {
        const res = await apiClient.get("/user/progress");
        const {
          completedLessons = [],
          progress: p = 0,
          lastLessonCode: last = null,
        } = res || {};

        setProgress(p);
        setLastLessonCode(last);

        // Map completed lessons to modules
        const updatedModules = modulesData.map((module) => ({
          ...module,
          lessons: module.lessons.map((lesson) => ({
            ...lesson,
            completed: completedLessons.includes(lesson.lesson_code),
          })),
        }));

        setModules(updatedModules);

        // If there's a last completed lesson, pre-load its content and select it
        if (last) {
          const lessonObj = findLessonByCode(updatedModules, last);
          if (lessonObj) {
            try {
              const lessonContent = await import(
                `@/lessons/${lessonObj.lesson_code}.js`
              );
              setSelectedLesson({
                ...lessonObj,
                content: lessonContent.default.content,
                completed: true,
              });
            } catch (e) {
              // ignore import error, leave selectedLesson null
              console.error("Failed to load last lesson content:", e);
            }
          }
        }
      } catch (e) {
        // fallback: show all as not completed
        console.error("Failed to fetch progress:", e);
      } finally {
        setLoading(false);
      }
    }
    fetchProgress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLessonSelect = async (lesson) => {
    // load lesson content
    const lessonContent = await import(`@/lessons/${lesson.lesson_code}.js`);

    // get latest completed lessons from server (to read isCompleted from DB)
    let completed = lesson.completed || false;
    try {
      const res = await apiClient.get("/user/progress");
      const completedLessons = res?.completedLessons || [];
      completed = completedLessons.includes(lesson.lesson_code);
    } catch (e) {
      // fallback to local value if request fails
    }

    setSelectedLesson({
      ...lesson,
      content: lessonContent.default.content,
      completed,
    });
  };

  const syncProgressFromServer = async () => {
    try {
      const res = await apiClient.get("/user/progress");
      const {
        completedLessons = [],
        progress: p = 0,
        lastLessonCode: last = null,
      } = res || {};
      setProgress(p);
      setLastLessonCode(last);
      const updatedModules = modulesData.map((module) => ({
        ...module,
        lessons: module.lessons.map((lesson) => ({
          ...lesson,
          completed: completedLessons.includes(lesson.lesson_code),
        })),
      }));
      setModules(updatedModules);

      // if last changed, update selectedLesson to reflect it
      if (last) {
        const lessonObj = findLessonByCode(updatedModules, last);
        if (lessonObj) {
          try {
            const lessonContent = await import(
              `@/lessons/${lessonObj.lesson_code}.js`
            );
            setSelectedLesson({
              ...lessonObj,
              content: lessonContent.default.content,
              completed: true,
            });
          } catch (e) {
            console.error("Failed to load last lesson content:", e);
          }
        }
      }
    } catch (e) {
      console.error("Failed to sync progress:", e);
    }
  };

  const handleLessonComplete = async (lessonCode, isCompleted) => {
    // Optimistic UI update
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

    if (selectedLesson?.lesson_code === lessonCode) {
      setSelectedLesson((prevLesson) => ({
        ...prevLesson,
        completed: isCompleted,
      }));
    }

    try {
      await apiClient.post("/user/progress", { lessonCode, isCompleted });
      // re-fetch progress to get authoritative counts/lastLessonCode
      await syncProgressFromServer();
    } catch (error) {
      console.error("Failed to update lesson progress:", error);
      // optionally rollback optimistic update (not implemented)
    }
  };

  const handleNavigate = async (direction) => {
    if (!selectedLesson) return;
    const flat = getFlatLessons(modules);
    const idx = flat.findIndex(
      (l) => l.lesson_code === selectedLesson.lesson_code,
    );
    if (idx === -1) return;

    const targetIdx = direction === "prev" ? idx - 1 : idx + 1;
    if (targetIdx < 0 || targetIdx >= flat.length) return;

    const target = flat[targetIdx];
    // reuse existing selection logic
    await handleLessonSelect(target);
  };

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-base-200">
        <span className="loading loading-spinner loading-lg"></span>
      </main>
    );
  }

  const totalLessons = getTotalLessons(modules);
  const lastLessonTitle = lastLessonCode
    ? findLessonTitleByCode(modules, lastLessonCode)
    : "";

  return (
    <main className="min-h-screen bg-base-200">
      <HeaderPlatform
        userName={userName}
        progress={progress}
        total={totalLessons}
        lastLessonTitle={lastLessonTitle}
      />
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6">
          <aside className="bg-base-100 rounded-2xl shadow-sm border border-base-300 overflow-hidden">
            <div className="p-5 border-b border-base-300">
              <div className="text-lg font-bold">Course navigation</div>
            </div>
            <ModuleList
              modules={modules}
              onLessonSelect={handleLessonSelect}
              userId={userId}
            />
          </aside>
          <LessonComponent
            lesson={selectedLesson}
            onLessonComplete={handleLessonComplete}
            onNavigate={handleNavigate} // <- new prop
          />
        </div>
      </div>
    </main>
  );
};

export default TrainingPlatformShell;
