"use client"

import { motion } from "framer-motion"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check if dark mode is enabled
    const isDarkMode = document.documentElement.classList.contains("dark")
    setIsDark(isDarkMode)
  }, [])

  const toggleTheme = () => {
    const html = document.documentElement
    html.classList.toggle("dark")
    const newIsDark = html.classList.contains("dark")
    setIsDark(newIsDark)
    // Persist theme preference
    localStorage.setItem("theme", newIsDark ? "dark" : "light")
  }

  if (!mounted) return null

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="p-2 rounded-lg border border-border dark:border-slate-700/30 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md hover:bg-white/70 dark:hover:bg-slate-900/70 transition-colors"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center"
      >
        {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
      </motion.div>
    </motion.button>
  )
}
