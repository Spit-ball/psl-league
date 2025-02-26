import React from "react";
import Image from "next/image";

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
    sm: 32, // 8 * 4
    md: 48, // 12 * 4
    lg: 64, // 16 * 4
  };

  const getFallbackInitials = () => {
    return defaultFallback?.charAt(0).toUpperCase();
  };

  return (
    <div
      className="rounded-full overflow-hidden"
      style={{ width: sizes[size], height: sizes[size] }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={sizes[size]}
          height={sizes[size]}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
          {getFallbackInitials()}
        </div>
      )}
    </div>
  );
};
