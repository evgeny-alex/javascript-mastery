import LessonItem from "./LessonItem";

const ModuleList = ({ modules }) => {
  return (
    <div className="p-4 space-y-4">
      {modules.map((module, index) => (
        <div key={index} className="space-y-2">
          <div className="font-semibold text-base-content/80">
            {index + 1}. {module.title}
          </div>
          <div className="ml-1 space-y-2">
            {module.lessons.map((lesson, i) => (
              <LessonItem key={i} lesson={lesson} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ModuleList;
