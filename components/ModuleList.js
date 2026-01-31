import { useState } from "react";
import LessonItem from "./LessonItem";

const ModuleList = ({ modules, onLessonSelect }) => {
  const [expandedModuleIndex, setExpandedModuleIndex] = useState(null);

  const toggleModule = (index) => {
    setExpandedModuleIndex(expandedModuleIndex === index ? null : index);
  };

  return (
    <div className="p-4 space-y-4">
      {modules.map((module, index) => (
        <div key={index} className="space-y-2">
          {/* Module Header */}
          <div
            className="font-semibold text-base-content/80 cursor-pointer flex items-center justify-between"
            onClick={() => toggleModule(index)}
          >
            <span>
              {index + 1}. {module.title}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className={`w-5 h-5 transition-transform ${
                expandedModuleIndex === index ? "rotate-180" : ""
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
          {expandedModuleIndex === index && (
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
      ))}
    </div>
  );
};

export default ModuleList;
