"use client";
import { signOut } from "next-auth/react";

const UserDropdown = () => {
  const handleLogout = async () => {
    try {
      await signOut({ callbackUrl: "/" });
    } catch (e) {
      console.error("Logout failed:", e);
    }
  };

  return (
    <div className="absolute right-0 mt-3 w-56 rounded-xl border border-base-300 bg-base-100 shadow-lg z-50">
      <div className="p-2 space-y-1">
        {/* Discord */}
        <a
          href="https://discord.com"
          target="_blank"
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-base-200"
        >
          <span className="text-indigo-500">Discord</span>
        </a>

        {/* Theme */}
        <button className="flex w-full items-center gap-3 px-3 py-2 rounded-lg hover:bg-base-200">
          Theme
        </button>

        <div className="my-1 h-px bg-base-300" />

        {/* Upgrade */}
        <a
          href="/dashboard/upgrade"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-accent hover:bg-accent/10"
        >
          Upgrade
        </a>

        <div className="my-1 h-px bg-base-300" />

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 px-3 py-2 rounded-lg text-error hover:bg-error/10"
        >
          Logout
        </button>
      </div>
    </div>
  );
};
export default UserDropdown;
