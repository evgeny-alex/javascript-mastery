import config from "@/config";

const HeaderPlatform = ({ userName }) => {
  return (
    <div className="border-b border-base-300 bg-base-100">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="btn btn-ghost btn-sm normal-case text-base font-bold">
            {config.appName}
          </div>
        </div>

        <div className="flex-1">
          <div className="text-xs text-base-content/70 mb-1">
            221 / 221 lessons completed (100%)
          </div>
          <progress
            className="progress progress-success w-full"
            value={100}
            max={100}
          />
        </div>

        <div className="hidden md:block text-sm text-base-content/70">
          Your last lesson:{" "}
          <span className="font-semibold text-base-content">
            Private dashboard
          </span>
        </div>

        <div className="ml-auto flex items-center gap-3">
          <div className="badge badge-neutral badge-lg">Completed</div>
          <div className="flex items-center gap-2">
            <div className="avatar placeholder">
              <div className="bg-base-300 text-base-content rounded-full w-9">
                <span className="text-sm">
                  {(userName || "U").toString().slice(0, 1).toUpperCase()}
                </span>
              </div>
            </div>
            <div className="hidden sm:block text-sm font-semibold">
              {userName}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderPlatform;
