import config from "@/config";
import UserMenu from "./UserMenu";

const HeaderPlatform = ({
  userName,
  progress = 0,
  total = 0,
  lastLessonTitle = "",
}) => {
  const percent = total > 0 ? Math.round((progress / total) * 100) : 0;

  return (
    <div className="border-b border-base-300 bg-base-100">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center gap-6">
        {/* Logo + App name */}
        <div className="flex items-center gap-3">
          <img src="/icon.png" alt="Logo" className="w-10 h-10" />
          <div className="text-base font-bold">{config.appName}</div>
        </div>

        {/* Progress block */}
        <div className="w-[260px]">
          <div className="text-xs text-base-content/70 mb-1">
            {progress} / {total} lessons completed ({percent}%)
          </div>
          <progress
            className="progress progress-success w-full"
            value={percent}
            max={100}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={percent}
          />
        </div>

        {/* Last lesson */}
        <div className="hidden md:block text-sm text-base-content/70">
          Your last lesson:{" "}
          <span className="font-semibold text-base-content">
            {lastLessonTitle || "—"}
          </span>
        </div>

        {/* User */}
        <div className="ml-auto">
          <UserMenu userName={userName} />
        </div>
      </div>
    </div>
  );
};

export default HeaderPlatform;
