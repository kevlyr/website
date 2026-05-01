"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type ThemePreference = "system" | "light" | "dark";

const themeCycle: ThemePreference[] = ["system", "light", "dark"];

function getStoredTheme(): ThemePreference {
  if (typeof window === "undefined") return "system";
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "light" || storedTheme === "dark" || storedTheme === "system") {
    return storedTheme;
  }
  return "system";
}

function systemPrefersDark() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function applyTheme(preference: ThemePreference) {
  const shouldUseDark = preference === "dark" || (preference === "system" && systemPrefersDark());
  document.documentElement.classList.toggle("dark", shouldUseDark);
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemePreference>("system");

  useEffect(() => {
    const storedTheme = getStoredTheme();
    setTheme(storedTheme);
    applyTheme(storedTheme);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    function handleSystemThemeChange() {
      if (getStoredTheme() === "system") {
        applyTheme("system");
      }
    }

    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () => mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, []);

  function toggleTheme() {
    const nextTheme = themeCycle[(themeCycle.indexOf(theme) + 1) % themeCycle.length];
    localStorage.setItem("theme", nextTheme);
    applyTheme(nextTheme);
    setTheme(nextTheme);
  }

  const themeLabels: Record<ThemePreference, string> = {
    system: "System theme",
    light: "Light theme",
    dark: "Dark theme"
  };

  const nextTheme = themeCycle[(themeCycle.indexOf(theme) + 1) % themeCycle.length];

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
      aria-label={`${themeLabels[theme]}. Switch to ${themeLabels[nextTheme].toLowerCase()}.`}
      title={`${themeLabels[theme]}: click for ${themeLabels[nextTheme].toLowerCase()}`}
    >
      {theme === "system" ? <Monitor aria-hidden size={18} /> : null}
      {theme === "light" ? <Sun aria-hidden size={18} /> : null}
      {theme === "dark" ? <Moon aria-hidden size={18} /> : null}
    </button>
  );
}
