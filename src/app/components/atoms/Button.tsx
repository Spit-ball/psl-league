import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "discord" | "sign-in" | "sign-out";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  mode?: "light" | "dark";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  mode = "light",
  className = "",
  disabled,
  ...props
}) => {
  const baseStyles = "rounded font-semibold transition-colors";
  const variants = {
    primary: {
      light: "bg-blue-600 text-white hover:bg-blue-700",
      dark: "bg-blue-300 text-black hover:bg-blue-400",
    },
    secondary: {
      light: "bg-gray-600 text-white hover:bg-gray-700",
      dark: "bg-gray-300 text-black hover:bg-gray-400",
    },
    discord: {
      light: "bg-purple-600 text-white hover:bg-purple-700",
      dark: "bg-purple-300 text-black hover:bg-purple-400",
    },
    "sign-in": {
      light: "bg-green-600 text-white hover:bg-green-700",
      dark: "bg-green-300 text-black hover:bg-green-400",
    },
    "sign-out": {
      light: "bg-yellow-600 text-white hover:bg-yellow-700",
      dark: "bg-yellow-300 text-black hover:bg-yellow-400",
    },
  };
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const classes = [
    baseStyles,
    variants[variant][mode],
    sizes[size],
    fullWidth ? "w-full" : "",
    disabled ? "opacity-50 cursor-not-allowed" : "",
    className,
  ].join(" ");

  return (
    <button className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
};
