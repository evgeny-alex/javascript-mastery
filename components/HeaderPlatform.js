import config from "@/config";

const HeaderPlatform = ({ userName }) => {
  return (
    <div className="border-b border-base-300 bg-base-100">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center gap-6">
        
        {/* Logo + App name */}
        <div className="flex items-center gap-3">
          <img
            src="/icon.png" // путь к логотипу
            alt="Logo"
            className="w-10 h-10"
          />
          <div className="text-base font-bold">
            {config.appName}
          </div>
        </div>

        {/* Progress block */}
        <div className="w-[260px]">
          <div className="text-xs text-base-content/70 mb-1">
            221 / 221 lessons completed (100%)
          </div>
          <progress
            className="progress progress-success w-full"
            value={100}
            max={100}
          />
        </div>

        {/* Last lesson */}
        <div className="hidden md:block text-sm text-base-content/70">
          Your last lesson:{" "}
          <span className="font-semibold text-base-content">
            Private dashboard
          </span>
        </div>

        {/* User */}
        <div className="ml-auto flex items-center gap-2">
          <div className="hidden sm:block text-sm font-semibold">
            {userName}
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeaderPlatform;
