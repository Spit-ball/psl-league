"use client";

import { useState } from "react";
import { DropdownMenu, DropdownOption } from "./components/atoms/DropdownMenu";

export default function Home() {
  const [selectedValue, setSelectedValue] = useState("");

  const options: DropdownOption[] = [
    { value: "option1", label: "Rocket League" },
    { value: "option2", label: "Marvel Rivals" },
    { value: "option3", label: "REMATCH" },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold justify-center text-center">
        Welcome to Primordial Soccar League
      </h1>
      <div className="w-64">
        <DropdownMenu
          options={options}
          value={selectedValue}
          onChange={setSelectedValue}
          placeholder="Select an option"
        />
      </div>
    </main>
  );
}
