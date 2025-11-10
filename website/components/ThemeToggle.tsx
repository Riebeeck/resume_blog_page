'use client'

import { useTheme } from './ThemeProvider'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Only show toggle after component mounts to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-10 h-6" /> // Placeholder to prevent layout shift
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-6 w-10 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark"
      style={{
        backgroundColor: theme === 'dark' ? 'rgb(59 130 246)' : 'rgb(229 231 235)',
      }}
      aria-label="Toggle dark mode"
      aria-pressed={theme === 'dark'}
    >
      <span
        className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform"
        style={{
          transform: theme === 'dark' ? 'translateX(22px)' : 'translateX(4px)',
        }}
      />
    </button>
  )
}
