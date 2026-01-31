const LessonItem = ({ lesson, onClick }) => {
  return (
    <div
      className={`flex items-center justify-between rounded-lg bg-base-200 px-3 py-2 cursor-pointer ${
        lesson.completed ? "" : "opacity-60"
      }`}
      onClick={onClick}
    >
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          className={`checkbox checkbox-sm ${
            lesson.completed ? "checkbox-success" : ""
          }`}
          defaultChecked={lesson.completed}
          disabled={!lesson.completed}
        />
        <span className="text-sm">{lesson.title}</span>
      </div>
      <span className="text-xs text-base-content/60">{lesson.duration}</span>
    </div>
  );
};

export default LessonItem;
