import React, { useEffect } from "react";

export interface ToggleProps {
  size?: "sm" | "md" | "lg";
  checked?: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
}

export const Toggle = ({
  checked = false,
  disabled = false,
  onChange = () => {},
}: ToggleProps) => {
  useEffect(() => {
    if (disabled && checked) {
      onChange(false);
    }
  }, [disabled, checked, onChange]);

  return (
    <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
      <input
        type="checkbox"
        id="toggle"
        checked={disabled ? false : checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
        className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer transition-transform duration-200 ease-in-out"
        style={{ transform: checked ? "translateX(1.25rem)" : "translateX(0)" }}
      />
      <label
        htmlFor="toggle"
        className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer transition-colors duration-100 delay-50 ${
          checked ? (disabled ? "bg-green-300" : "bg-green-500") : "bg-gray-300"
        }`}
      ></label>
    </div>
  );
};
