import { Link } from 'react-router-dom'
import LanguageToggle from './LanguageToggle'
import DarkModeToggle from './DarkModeToggle'

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          to="/"
          className="text-lg font-semibold tracking-tight text-[var(--color-text)]"
        >
          Geeko
        </Link>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <DarkModeToggle />
        </div>
      </div>
    </header>
  )
}
