import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import products from '../data/products.json'

export default function ProductDetail() {
  const { slug } = useParams()
  const { t, i18n } = useTranslation()
  const lang = i18n.language?.startsWith('ka') ? 'ka' : 'en'

  const product = products.find((p) => p.slug === slug)
  const [activeImage, setActiveImage] = useState(0)

  if (!product) {
    return (
      <div>
        <Link to="/" className="text-sm text-accent hover:underline">
          &larr; {t('product.back')}
        </Link>
        <p className="mt-4 text-[var(--color-text-muted)]">{t('product.notFound')}</p>
      </div>
    )
  }

  return (
    <div>
      <Link to="/" className="text-sm text-accent hover:underline">
        &larr; {t('product.back')}
      </Link>

      <div className="mt-4 grid gap-8 sm:grid-cols-2">
        <div>
          <div className="aspect-square w-full overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)]">
            <img
              src={product.images[activeImage]}
              alt={product.name[lang]}
              className="h-full w-full object-cover"
            />
          </div>

          {product.images.length > 1 && (
            <div className="mt-3 flex gap-2">
              {product.images.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setActiveImage(i)}
                  className={`h-16 w-16 overflow-hidden rounded-md border ${
                    i === activeImage ? 'border-accent' : 'border-[var(--color-border)]'
                  }`}
                >
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div>
          <h1 className="text-2xl font-semibold text-[var(--color-text)]">{product.name[lang]}</h1>

          <p className="mt-2 text-lg text-[var(--color-text)]">
            {product.price} {product.currency === 'GEL' ? '₾' : product.currency}
          </p>

          <p className="mt-1 text-sm text-[var(--color-text-muted)]">
            {product.inStock ? t('product.inStock') : t('product.outOfStock')}
          </p>

          <p className="mt-4 text-sm leading-relaxed text-[var(--color-text)]">
            {product.description[lang]}
          </p>

          <p className="mt-4 text-xs tracking-wide text-[var(--color-text-muted)]">
            {t('product.category')}: {t(`categories.${product.category}`, product.category)}
          </p>
        </div>
      </div>
    </div>
  )
}
