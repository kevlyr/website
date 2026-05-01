export function ThemeScript() {
  const script = `
    const theme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (theme === "dark" || ((!theme || theme === "system") && prefersDark)) {
      document.documentElement.classList.add("dark");
    }
  `;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
