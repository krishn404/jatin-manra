export function ThemeScript() {
  const script = `(() => {
    try {
      const stored = localStorage.getItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const theme = stored === "light" || stored === "dark" ? stored : prefersDark ? "dark" : "light";
      const root = document.documentElement;
      root.classList.toggle("dark", theme === "dark");
      root.classList.toggle("light", theme === "light");
      root.style.colorScheme = theme;
    } catch {}
  })()`

  return <script dangerouslySetInnerHTML={{ __html: script }} />
}
