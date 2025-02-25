import React from "react";

export interface AvatarProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  defaultFallback?: string;
}

export const Avatar = ({
  src,
  alt = "",
  size = "md",
  defaultFallback = "",
}: AvatarProps) => {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  const getFallbackInitials = () => {
    return defaultFallback?.charAt(0).toUpperCase();
  };

  return (
    <div className={`${sizes[size]} rounded-full overflow-hidden`}>
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
          {getFallbackInitials()}
        </div>
      )}
    </div>
  );
};
