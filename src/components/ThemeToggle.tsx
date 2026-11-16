"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* storage unavailable */
    }
    setIsDark(next);
  };

  const label = isDark === false ? "Switch to dark theme" : "Switch to light theme";

  return (
    <button
      id="theme-toggle"
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="grid h-8 w-8 place-items-center rounded-lg border border-teal-500/25 bg-[#0b1219] text-teal-300 transition hover:border-teal-400 hover:text-white hover:shadow-[0_0_12px_rgba(45,212,191,0.25)]"
    >
      {/* Sun shown in dark mode, moon in light mode */}
      <svg className="hidden h-4 w-4 dark:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
      <svg className="h-4 w-4 dark:hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
    </button>
  );
}
