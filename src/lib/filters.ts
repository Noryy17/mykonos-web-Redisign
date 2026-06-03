import { Product, FilterState, SortOption } from '@/types/product'

export function filterProducts(products: Product[], filters: FilterState): Product[] {
  return products.filter(product => {
    // Filter by availability
    if (filters.inStockOnly && !product.inStock) {
      return false
    }

    // Filter by notes
    if (filters.notes.length > 0) {
      const productNoteNames = product.notes.map(n => n.name)
      const hasMatchingNote = filters.notes.some(note => productNoteNames.includes(note))
      if (!hasMatchingNote) return false
    }

    // Filter by occasion
    if (filters.occasions.length > 0) {
      const hasMatchingOccasion = filters.occasions.some(occ => product.occasions.includes(occ))
      if (!hasMatchingOccasion) return false
    }

    // Filter by scent family
    if (filters.scentFamilies.length > 0) {
      const hasMatchingFamily = filters.scentFamilies.some(sf => product.scentFamily.includes(sf))
      if (!hasMatchingFamily) return false
    }

    // Filter by price range
    if (filters.priceRange) {
      const lowestPrice = Math.min(...product.variants.map(v => v.price))
      if (lowestPrice < filters.priceRange[0] || lowestPrice > filters.priceRange[1]) {
        return false
      }
    }

    return true
  })
}

export function sortProducts(products: Product[], sortOption: SortOption): Product[] {
  const sorted = [...products]

  switch (sortOption) {
    case 'popular':
      // Best sellers first, then in-stock, then by name
      return sorted.sort((a, b) => {
        if (a.isBestSeller && !b.isBestSeller) return -1
        if (!a.isBestSeller && b.isBestSeller) return 1
        if (a.inStock && !b.inStock) return -1
        if (!a.inStock && b.inStock) return 1
        return a.name.localeCompare(b.name)
      })

    case 'new':
      // New arrivals first, then by name
      return sorted.sort((a, b) => {
        if (a.isNewArrival && !b.isNewArrival) return -1
        if (!a.isNewArrival && b.isNewArrival) return 1
        return a.name.localeCompare(b.name)
      })

    case 'price-asc':
      return sorted.sort((a, b) => {
        const priceA = Math.min(...a.variants.map(v => v.price))
        const priceB = Math.min(...b.variants.map(v => v.price))
        return priceA - priceB
      })

    case 'price-desc':
      return sorted.sort((a, b) => {
        const priceA = Math.min(...a.variants.map(v => v.price))
        const priceB = Math.min(...b.variants.map(v => v.price))
        return priceB - priceA
      })

    default:
      return sorted
  }
}

export const initialFilterState: FilterState = {
  notes: [],
  occasions: [],
  scentFamilies: [],
  inStockOnly: false,
}

export function getActiveFilterCount(filters: FilterState): number {
  let count = 0
  count += filters.notes.length
  count += filters.occasions.length
  count += filters.scentFamilies.length
  if (filters.inStockOnly) count += 1
  if (filters.priceRange) count += 1
  return count
}

export function hasActiveFilters(filters: FilterState): boolean {
  return getActiveFilterCount(filters) > 0
}

// Get all unique notes from products for filter options
export function getAllNotes(products: Product[]): string[] {
  const noteSet = new Set<string>()
  products.forEach(p => p.notes.forEach(n => noteSet.add(n.name)))
  return Array.from(noteSet).sort()
}
