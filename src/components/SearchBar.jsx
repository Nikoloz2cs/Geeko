import { Search } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function SearchBar({ value, onChange }) {
  const { t } = useTranslation()

  return (
    <div className="relative flex-1">
      <Search
        size={16}
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]"
      />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={t('catalog.searchPlaceholder')}
        className="w-full rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] py-2 pl-9 pr-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-accent"
      />
    </div>
  )
}
