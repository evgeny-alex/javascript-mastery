import { useState, useEffect } from "react";
import LessonItem from "./LessonItem";

const ModuleList = ({
  modules,
  onLessonSelect,
  userId,
  userLevel,
  lastLessonCode,
}) => {
  const [expandedModules, setExpandedModules] = useState([]);

  // Determine if a module is locked based on user level
  const isModuleLocked = (index) => {
    if (userLevel === "Basic" && index >= 4) {
      return true; // Lock modules 5 and above for Basic users
    }
    return false; // Pro and Bootcamp users have access to all modules
  };

  // Load saved expanded state for user from localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;
    const key = `jmastery_expanded_${userId || "anon"}`;
    try {
      const saved = localStorage.getItem(key);
      let indices = [];
      if (saved) {
        const titles = JSON.parse(saved);
        indices = titles
          .map((t) => modules.findIndex((m) => m.title === t))
          .filter((i) => i !== -1);
      }

      // If we have a lastLessonCode from DB, ensure its module is included (override/add)
      if (lastLessonCode) {
        const moduleIndex = modules.findIndex((m) =>
          m.lessons.some((l) => l.lesson_code === lastLessonCode),
        );
        if (moduleIndex !== -1 && !isModuleLocked(moduleIndex)) {
          if (!indices.includes(moduleIndex))
            indices = [...indices, moduleIndex];
        }
      }

      if (indices.length > 0) {
        setExpandedModules(indices);
      }
    } catch (error) {
      console.error(error);
      // Ignore parse errors
    }
  }, [modules, userId, lastLessonCode]);

  const toggleModule = (index) => {
    if (isModuleLocked(index)) return; // Prevent expanding locked modules

    setExpandedModules((prev) => {
      const next = prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index];

      // Persist as module titles (safer across reorders)
      if (typeof window !== "undefined") {
        const key = `jmastery_expanded_${userId || "anon"}`;
        const titles = next.map((i) => modules[i]?.title).filter(Boolean);
        try {
          localStorage.setItem(key, JSON.stringify(titles));
        } catch (error) {
          console.error(error);
          // Ignore storage errors
        }
      }

      return next;
    });
  };

  return (
    <div className="p-4 space-y-4">
      {modules.map((module, index) => {
        const locked = isModuleLocked(index);
        return (
          <div key={index} className="space-y-2">
            {/* Module Header */}
            <div
              className={`font-semibold text-base-content/80 cursor-pointer flex items-center justify-between ${
                locked ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={() => toggleModule(index)}
            >
              <span className="flex items-center gap-2">
                {locked && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 shrink-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                    />
                  </svg>
                )}
                {index + 1}. {module.title}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`w-5 h-5 transition-transform ${
                  expandedModules.includes(index) ? "rotate-180" : ""
                }`}
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            {/* Lessons */}
            {expandedModules.includes(index) && !locked && (
              <div className="ml-1 space-y-2">
                {module.lessons.map((lesson, i) => (
                  <LessonItem
                    key={i}
                    lesson={lesson}
                    onClick={() => onLessonSelect(lesson)}
                  />
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ModuleList;
