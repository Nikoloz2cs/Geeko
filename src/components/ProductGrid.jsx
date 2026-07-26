import { useTranslation } from 'react-i18next'
import ProductCard from './ProductCard'

export default function ProductGrid({ products }) {
  const { t } = useTranslation()

  if (products.length === 0) {
    return (
      <p className="mt-8 text-center text-sm text-[var(--color-text-muted)]">
        {t('catalog.noResults')}
      </p>
    )
  }

  return (
    <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  )
}
