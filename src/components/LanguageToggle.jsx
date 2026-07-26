import { useTranslation } from 'react-i18next'

export default function LanguageToggle() {
  const { i18n } = useTranslation()
  const isGeorgian = i18n.language?.startsWith('ka')

  const toggle = () => {
    const next = isGeorgian ? 'en' : 'ka'
    i18n.changeLanguage(next)
    localStorage.setItem('geeko-lang', next)
  }

  return (
    <button
      onClick={toggle}
      className="rounded-md border border-[var(--color-border)] px-3 py-1.5 text-sm font-medium text-[var(--color-text)] transition-colors hover:border-accent hover:text-accent"
      aria-label="Toggle language"
    >
      {isGeorgian ? '🇬🇧' : '🇬🇪'}
    </button>
  )
}
