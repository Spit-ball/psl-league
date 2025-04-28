import { ReactNode } from "react";
import { SidebarButton } from "../atoms/SidebarButton";

export interface SidebarItem {
  icon?: ReactNode;
  label: string;
  id: string;
}

interface SidebarProps {
  items: SidebarItem[];
  activeItemId?: string;
  onItemClick?: (id: string) => void;
  className?: string;
}

export function Sidebar({
  items,
  activeItemId,
  onItemClick,
  className = "",
}: SidebarProps) {
  return (
    <div
      className={`w-64 h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 p-4 ${className}`}
    >
      <nav className="flex flex-col gap-2">
        {items.map((item) => (
          <SidebarButton
            key={item.id}
            icon={item.icon}
            label={item.label}
            isActive={item.id === activeItemId}
            onClick={() => onItemClick?.(item.id)}
          />
        ))}
      </nav>
    </div>
  );
}
