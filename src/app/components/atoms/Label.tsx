import React from "react";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  fullWidth?: boolean;
  variant?: "light" | "dark";
  labelSize?: "sm" | "md" | "lg";
  tooltip?: string;
  disabled?: boolean;
}

export const Label: React.FC<LabelProps> = ({
  variant = "light",
  labelSize = "md",
  fullWidth = false,
  className = "",
  disabled,
  tooltip,
  ...props
}) => {
  const baseStyles = "block font-semibold transition-colors relative group";
  const variants = {
    light: "text-gray-700",
    dark: "text-gray-200",
  };
  const sizes = {
    sm: "text-sm mb-1",
    md: "text-base mb-1.5",
    lg: "text-lg mb-2",
  };

  const classes = [
    baseStyles,
    variants[variant],
    sizes[labelSize],
    fullWidth ? "w-full" : "",
    disabled ? "opacity-50" : "",
    className,
  ].join(" ");

  return (
    <label className={classes} {...props}>
      {props.children}
      {tooltip && (
        <span className="invisible group-hover:visible absolute bottom-[calc(100%+5px)] left-0 px-2 py-1 bg-gray-800 text-white text-sm rounded whitespace-nowrap after:content-[''] after:absolute after:top-full after:left-4 after:border-4 after:border-transparent after:border-t-gray-800">
          {" "}
          {/* this is how the tooltip functions */}
          {tooltip}
        </span>
      )}
    </label>
  );
};
