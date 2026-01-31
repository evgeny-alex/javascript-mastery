const LessonComponent = ({ lesson }) => {
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
      <div className="p-6 border-b border-base-300">
        <h1 className="text-3xl font-extrabold tracking-tight">
          {lesson.title}
        </h1>
      </div>

      <div className="p-6 space-y-6">
        {/* Placeholder for lesson content */}
        <p className="text-base-content/80 leading-relaxed">
          Duration: {lesson.duration}
        </p>
        <p className="text-base-content/70">
          {lesson.completed
            ? "You have completed this lesson."
            : "This lesson is not yet completed."}
        </p>
      </div>
    </section>
  );
};

export default LessonComponent;
