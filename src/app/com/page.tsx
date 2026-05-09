"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(null);

  // تحميل الثيم
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setDark(savedTheme === "dark");
    } else {
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDark(systemDark);
    }
  }, []);

  // حفظ الثيم + إضافة class على html (أفضل مع Tailwind)
  useEffect(() => {
    if (dark !== null) {
      localStorage.setItem("theme", dark ? "dark" : "light");

      const root = document.documentElement;

      if (dark) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    }
  }, [dark]);

  if (dark === null) return null;

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

// hook جاهز
export function useTheme() {
  return useContext(ThemeContext);
}