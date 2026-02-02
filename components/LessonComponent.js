import { useState, useEffect } from "react";

const LessonComponent = ({ lesson, onLessonComplete, onNavigate }) => {
  const [isCompleted, setIsCompleted] = useState(lesson?.completed || false);

  useEffect(() => {
    setIsCompleted(lesson?.completed || false);
  }, [lesson?.completed, lesson?.lesson_code]);

  const handleComplete = () => {
    if (!lesson) return;
    const newState = !isCompleted;
    setIsCompleted(newState);
    onLessonComplete(lesson.lesson_code, newState);
  };

  if (!lesson) {
    return (
      <section className="bg-base-100 rounded-2xl shadow-sm border border-base-300 overflow-hidden">
        <div className="p-6 text-center">
          <p className="text-lg font-semibold text-base-content/70">
            Select a lesson to view its content.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-base-100 rounded-2xl shadow-sm border border-base-300 overflow-hidden">
      <div className="p-6 border-b border-base-300 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold tracking-tight">
          {lesson.title}
        </h1>
        <button
          className={`btn ${isCompleted ? "btn-success" : "btn-primary-content"}`}
          onClick={handleComplete}
        >
          {isCompleted ? "Completed" : "Complete"}
        </button>
      </div>

      <div className="p-6 space-y-6 text-base-content/80 leading-relaxed">
        <div dangerouslySetInnerHTML={{ __html: lesson.content }} />
      </div>

      <div className="p-6 border-t border-base-300 flex justify-between gap-4">
        <button
          className="btn btn-outline flex items-center gap-2"
          onClick={() => onNavigate && onNavigate("prev")}
          aria-label="Previous lesson"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          <span className="hidden sm:inline">Back</span>
        </button>

        <div className="flex-1" />

        <button
          className="btn btn-outline"
          onClick={() => onNavigate && onNavigate("next")}
          aria-label="Next lesson"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
          <span className="hidden sm:inline">Next</span>
        </button>
      </div>
    </section>
  );
};

export default LessonComponent;
