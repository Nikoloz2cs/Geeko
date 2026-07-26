import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="rounded-md border border-[var(--color-border)] p-2 text-[var(--color-text)] transition-colors hover:border-accent hover:text-accent"
      aria-label="Toggle dark mode"
    >
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}
