const LessonComponent = () => {
  return (
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
              JavaScript Mastery is a hands-on course for mastering JavaScript
              and React.
            </li>
            <li>
              Learn modern JavaScript, async patterns, and clean code practices.
            </li>
            <li>
              Build real-world projects and prepare for technical interviews.
            </li>
          </ul>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between pt-2">
          <button className="btn btn-outline rounded-full px-8">
            ← Previous
          </button>
          <button className="btn btn-outline rounded-full px-8">Next →</button>
        </div>

        <div className="text-center text-xs text-base-content/50 pt-2">
          JavaScript Mastery — Learn JavaScript and React
        </div>
      </div>
    </section>
  );
};

export default LessonComponent;
