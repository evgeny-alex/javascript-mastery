"use client";

import { useState } from "react";
import UserDropdown from "./UserDropdown";

const UserMenu = ({ userName }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-sm font-semibold hover:opacity-80"
      >
        <span>{userName}</span>

        {/* Arrow */}
        <svg
          className={`w-4 h-4 transition-transform ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && <UserDropdown />}
    </div>
  );
};

export default UserMenu;
