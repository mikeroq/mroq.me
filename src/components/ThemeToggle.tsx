import { Moon, Sun } from "lucide-react"

import { useTheme } from "@/components/theme-provider"
import { Switch } from "@/components/ui/switch"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === "dark" || theme === "system"

  return (
    <div className="inline-flex items-center gap-2">
      <Sun
        className="size-3.5 text-muted-foreground"
        aria-hidden="true"
      />
      <Switch
        checked={isDark}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        aria-label="Toggle dark mode"
        title="Toggle color theme"
      />
      <Moon
        className="size-3.5 text-muted-foreground"
        aria-hidden="true"
      />
    </div>
  )
}
