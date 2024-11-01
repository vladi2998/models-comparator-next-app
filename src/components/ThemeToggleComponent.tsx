"use client";

import { useTheme } from "next-themes";
import { useState } from "react";

export default function ThemeToggleComponent() {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(theme === "dark");

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setTheme(newTheme);
    setIsDark(!isDark);
  };

  return (
    <div className="theme-toggle">
      <button onClick={toggleTheme}>{isDark ? "🌞" : "🌚"}</button>
    </div>
  );
}
