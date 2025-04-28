import { ReactNode } from "react";

interface SidebarButtonProps {
  icon?: ReactNode;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export function SidebarButton({
  icon,
  label,
  isActive = false,
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
        px-4
        py-2
        rounded-lg
        transition-colors
        ${
          isActive
            ? "bg-blue-500 text-white"
            : "hover:bg-gray-100 dark:hover:bg-gray-800"
        }
      `}
    >
      {icon && <span className="w-5 h-5">{icon}</span>}
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}
