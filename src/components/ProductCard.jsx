import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function ProductCard({ product }) {
  const { i18n, t } = useTranslation()
  const lang = i18n.language?.startsWith('ka') ? 'ka' : 'en'

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] transition-colors hover:border-accent"
    >
      <div className="aspect-square w-full overflow-hidden bg-[var(--color-bg)]">
        <img
          src={product.images?.[0]}
          alt={product.name?.[lang]}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-3">
        <p className="text-sm font-medium text-[var(--color-text)]">{product.name?.[lang]}</p>
        <div className="mt-1 flex items-center justify-between">
          <span className="text-sm text-[var(--color-text-muted)]">
            {product.price} {product.currency === 'GEL' ? '₾' : product.currency}
          </span>
          {!product.inStock && (
            <span className="text-xs text-[var(--color-text-muted)]">{t('product.outOfStock')}</span>
          )}
        </div>
      </div>
    </Link>
  )
}
