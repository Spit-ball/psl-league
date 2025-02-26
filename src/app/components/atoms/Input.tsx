import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
  variant?: "light" | "dark";
  inputSize?: "sm" | "md" | "lg";
}

export const Input: React.FC<InputProps> = ({
  variant = "light",
  inputSize = "md",
  fullWidth = false,
  className = "",
  disabled,
  ...props
}) => {
  const baseStyles = "rounded font-semibold transition-colors";
  const variants = {
    light: "bg-white text-black border border-gray-300 focus:border-blue-500",
    dark: "bg-gray-800 text-white border border-gray-700 focus:border-blue-500",
  };
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const classes = [
    baseStyles,
    variants[variant],
    sizes[inputSize],
    fullWidth ? "w-full" : "",
    disabled ? "opacity-50 cursor-not-allowed" : "",
    className,
  ].join(" ");

  return <input className={classes} disabled={disabled} {...props} />;
};
