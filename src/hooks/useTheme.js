import { useCallback, useEffect, useState } from "react";

// The initial value is already on <html> — an inline script in index.html sets
// it before first paint so the page never flashes the wrong theme. This hook
// just reads it back and keeps React in sync.
function readTheme() {
  if (typeof document === "undefined") return "light";
  return document.documentElement.getAttribute("data-theme") === "dark"
    ? "dark"
    : "light";
}

export default function useTheme() {
  const [theme, setTheme] = useState(readTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    try {
      localStorage.setItem("theme", theme);
    } catch {
      // Private browsing, or site data blocked. The toggle still works for
      // this visit; it just will not be remembered.
    }
  }, [theme]);

  // Follow the OS while the visitor has not made an explicit choice.
  useEffect(() => {
    const query = window.matchMedia("(prefers-color-scheme: dark)");

    const onChange = (event) => {
      let saved = null;
      try {
        saved = localStorage.getItem("theme");
      } catch {
        // Treated as "no choice recorded".
      }

      if (saved !== "light" && saved !== "dark") {
        setTheme(event.matches ? "dark" : "light");
      }
    };

    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const toggle = useCallback(
    () => setTheme((prev) => (prev === "dark" ? "light" : "dark")),
    []
  );

  return { theme, toggle };
}
