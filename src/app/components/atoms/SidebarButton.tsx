"use client";

import { ReactNode } from "react";

interface SidebarButtonProps {
  icon?: ReactNode;
  label: string;
  isActive?: boolean;
  isExpanded?: boolean;
  onClick?: () => void;
}

export function SidebarButton({
  icon,
  label,
  isActive = false,
  isExpanded = false,
  onClick,
}: SidebarButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full
        flex
        items-center
        gap-3
        px-3
        py-2
        rounded-lg
        transition-all
        duration-300
        overflow-hidden
        ${
          isActive
            ? "bg-blue-500 text-white"
            : "hover:bg-gray-100 dark:hover:bg-gray-800"
        }
      `}
    >
      <span className="min-w-[20px] flex justify-center">
        {icon || <div className="w-5 h-5 rounded-full bg-gray-300" />}
      </span>
      <span
        className={`
          text-sm 
          font-medium 
          whitespace-nowrap 
          transition-opacity 
          duration-300
          ${isExpanded ? "opacity-100" : "opacity-0"}
        `}
      >
        {label}
      </span>
    </button>
  );
}
