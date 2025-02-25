import React from "react";

export interface LoaderProps {
  size?: "sm" | "md" | "lg";
  mode?: "light" | "dark";
}

export const Loader = ({ size = "md", mode = "light" }: LoaderProps) => {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  const borderColor = mode === "dark" ? "border-gray-100" : "border-gray-900";

  return (
    <div
      className={`${sizes[size]} animate-spin rounded-full border-t-2 border-b-2 ${borderColor}`}
    ></div>
  );
};
