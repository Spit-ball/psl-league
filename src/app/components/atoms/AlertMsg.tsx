import React from "react";

export interface AlertMsgProps {
  type?: "info" | "success" | "warning" | "error";
  message: string;
  mode?: "light" | "dark"; // Make mode optional
}

export const AlertMsg = ({
  type = "info",
  message,
  mode = "light",
}: AlertMsgProps) => {
  const alertTypes = {
    light: {
      info: "bg-blue-100 text-blue-800",
      success: "bg-green-100 text-green-800",
      warning: "bg-yellow-100 text-yellow-800",
      error: "bg-red-100 text-red-800",
    },
    dark: {
      info: "bg-blue-900 text-blue-200",
      success: "bg-green-900 text-green-200",
      warning: "bg-yellow-900 text-yellow-200",
      error: "bg-red-900 text-red-200",
    },
  };

  return (
    <div className={`p-4 mb-4 rounded-md ${alertTypes[mode][type]}`}>
      {message}
    </div>
  );
};
