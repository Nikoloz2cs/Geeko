import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import products from '../data/products.json'
import SearchBar from '../components/SearchBar'
import FilterPanel from '../components/FilterPanel'
import ProductGrid from '../components/ProductGrid'

export default function Home() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language?.startsWith('ka') ? 'ka' : 'en'

  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')

  const categories = useMemo(
    () => [...new Set(products.map((p) => p.category))],
    []
  )

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase()
    return products.filter((product) => {
      const matchesSearch =
        term === '' ||
        product.name?.ka?.toLowerCase().includes(term) ||
        product.name?.en?.toLowerCase().includes(term)
      const matchesCategory = category === 'all' || product.category === category
      return matchesSearch && matchesCategory
    })
  }, [search, category])

  return (
    <div>
      <h1 className="text-2xl font-semibold">{t('home.title')}</h1>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
        <SearchBar value={search} onChange={setSearch} />
        <FilterPanel categories={categories} value={category} onChange={setCategory} />
      </div>

      <ProductGrid products={filtered} lang={lang} />
    </div>
  )
}
