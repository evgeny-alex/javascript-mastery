import { useState } from "react";

const LessonComponent = ({ lesson }) => {
  const [isCompleted, setIsCompleted] = useState(lesson?.completed || false);

  const handleComplete = () => {
    setIsCompleted((prevState) => !prevState); // Toggle the state
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
          className={`btn ${
            isCompleted ? "btn-success" : "btn-primary-content"
          }`}
          onClick={handleComplete}
        >
          {isCompleted ? "Completed" : "Complete"}
        </button>
      </div>

      <div
        className="p-6 space-y-6 text-base-content/80 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: lesson.content }}
      />
    </section>
  );
};

export default LessonComponent;
