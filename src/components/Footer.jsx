import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-[var(--color-text-muted)] sm:px-6">
        <p className="font-medium text-[var(--color-text)]">Geeko</p>
        <p className="mt-1">{t('footer.address')}</p>
        <p>{t('footer.hours')}</p>
        <p>{t('footer.contact')}</p>
        <p className="mt-3">&copy; {new Date().getFullYear()} Geeko</p>
      </div>
    </footer>
  )
}
