import { useTranslation } from 'react-i18next'

export default function FilterPanel({ categories, value, onChange }) {
  const { t } = useTranslation()

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-sm text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-accent"
    >
      <option value="all">{t('catalog.filterAll')}</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {t(`categories.${category}`, category)}
        </option>
      ))}
    </select>
  )
}
