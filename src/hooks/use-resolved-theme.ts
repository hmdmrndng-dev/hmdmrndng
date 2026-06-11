import { useTheme } from "@/components/theme-provider"

export function useResolvedTheme(): "light" | "dark" {
  const { theme } = useTheme()
  if (theme === "system") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  }
  return theme
}
