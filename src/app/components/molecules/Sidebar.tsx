"use client";

import { ReactNode } from "react";
import { SidebarButton } from "../atoms/SidebarButton";
import { useState } from "react";

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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        fixed top-[64px] left-0 h-[calc(100vh-64px)]
        bg-white dark:bg-gray-900
        border-r border-gray-200 dark:border-gray-800
        transition-all duration-300 ease-in-out z-40
        ${isHovered ? "w-64" : "w-16"}
        ${className}
      `}
    >
      <nav className="flex flex-col gap-2 p-4">
        {items.map((item) => (
          <SidebarButton
            key={item.id}
            icon={item.icon}
            label={item.label}
            isActive={item.id === activeItemId}
            onClick={() => onItemClick?.(item.id)}
            isExpanded={isHovered}
          />
        ))}
      </nav>
    </div>
  );
}
