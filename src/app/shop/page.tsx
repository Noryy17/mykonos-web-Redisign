'use client'

import { useState, useMemo } from 'react'
import { FilterState, SortOption, Occasion, ScentFamily } from '@/types/product'
import { products } from '@/data/products'
import { filterProducts, sortProducts, initialFilterState } from '@/lib/filters'
import { DesktopFilterSidebar, MobileFilterSheet } from '@/components/plp/FilterPanel'
import { FilterChips } from '@/components/plp/FilterChips'
import { SortDropdown } from '@/components/plp/SortDropdown'
import { ProductCard } from '@/components/plp/ProductCard'
import { PackageSearch } from 'lucide-react'

export default function ShopPage() {
  const [filters, setFilters] = useState<FilterState>(initialFilterState)
  const [sortOption, setSortOption] = useState<SortOption>('popular')

  const filteredProducts = useMemo(() => {
    const filtered = filterProducts(products, filters)
    return sortProducts(filtered, sortOption)
  }, [filters, sortOption])

  const handleRemoveNote = (note: string) => {
    setFilters(prev => ({
      ...prev,
      notes: prev.notes.filter(n => n !== note),
    }))
  }

  const handleRemoveOccasion = (occasion: Occasion) => {
    setFilters(prev => ({
      ...prev,
      occasions: prev.occasions.filter(o => o !== occasion),
    }))
  }

  const handleRemoveFamily = (family: ScentFamily) => {
    setFilters(prev => ({
      ...prev,
      scentFamilies: prev.scentFamilies.filter(f => f !== family),
    }))
  }

  const handleToggleInStock = () => {
    setFilters(prev => ({ ...prev, inStockOnly: !prev.inStockOnly }))
  }

  const handleClearAll = () => {
    setFilters(initialFilterState)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Page header */}
      <div className="bg-black text-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-light tracking-wide">
            Koleksi
          </h1>
          <p className="mt-3 font-body text-sm text-neutral-400 max-w-md">
            Temukan parfum yang sempurna untuk setiap momen. Filter berdasarkan aroma, occasion, atau scent family favoritmu.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Top bar: sort + mobile filter */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <MobileFilterSheet filters={filters} onFilterChange={setFilters} />
            <span className="font-body text-xs text-neutral-500 hidden sm:block">
              {filteredProducts.length} produk
            </span>
          </div>
          <SortDropdown value={sortOption} onChange={setSortOption} />
        </div>

        {/* Filter chips */}
        <FilterChips
          filters={filters}
          onRemoveNote={handleRemoveNote}
          onRemoveOccasion={handleRemoveOccasion}
          onRemoveFamily={handleRemoveFamily}
          onToggleInStock={handleToggleInStock}
          onClearAll={handleClearAll}
          resultCount={filteredProducts.length}
        />

        {/* Products layout */}
        <div className="flex gap-8 mt-6">
          {/* Desktop filter sidebar */}
          <DesktopFilterSidebar filters={filters} onFilterChange={setFilters} />

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              /* Empty state */
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <PackageSearch className="h-12 w-12 text-neutral-300 mb-4" />
                <h3 className="font-heading text-xl font-normal text-neutral-900 mb-2">
                  Tidak ada produk ditemukan
                </h3>
                <p className="font-body text-sm text-neutral-500 mb-6 max-w-sm">
                  Coba ubah filter atau hapus beberapa kriteria untuk melihat lebih banyak produk.
                </p>
                <button
                  onClick={handleClearAll}
                  className="font-body text-sm text-black underline underline-offset-4 hover:text-neutral-600 transition-colors"
                >
                  Hapus semua filter
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
