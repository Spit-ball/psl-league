import React from "react";

export interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownMenuProps {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function DropdownMenu({
  options,
  value,
  onChange,
  placeholder,
  className = "",
}: DropdownMenuProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`
        w-full
        px-3
        py-2
        text-base
        rounded-lg
        border
        border-gray-200
        dark:border-gray-700
        bg-white
        dark:bg-gray-800
        focus:border-blue-500
        focus:ring-2
        focus:ring-blue-500/25
        outline-none
        cursor-pointer
        ${className}
      `}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
