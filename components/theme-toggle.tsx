"use client"

import { Moon, Sun } from "lucide-react"
import { motion } from "motion/react"
import { useTheme } from "@/components/theme-provider"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.94 }}
      className="relative flex h-10 w-10 items-center justify-center rounded-2xl border border-border bg-card text-foreground shadow-sm transition-colors hover:bg-muted"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </motion.button>
  )
}
