interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "elevated" | "outlined";
  padding?: "none" | "sm" | "md" | "lg";
  className?: string;
}

export function Card({
  children,
  variant = "default",
  padding = "md",
  className = "",
}: CardProps) {
  const variants = {
    default: "bg-white dark:bg-gray-800",
    elevated:
      "bg-white dark:bg-gray-900 shadow-lg shadow-gray-200/50 dark:shadow-black/30",
    outlined: "border border-gray-200 dark:border-gray-700",
  };

  const paddings = {
    none: "",
    sm: "p-3",
    md: "p-4",
    lg: "p-6",
  };

  return (
    <div
      className={`
      rounded-lg
      ${variants[variant]}
      ${paddings[padding]}
      ${className}
    `}
    >
      {children}
    </div>
  );
}
