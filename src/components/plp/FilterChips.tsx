'use client'

import { X } from 'lucide-react'
import { FilterState, Occasion, ScentFamily } from '@/types/product'

interface FilterChipsProps {
  filters: FilterState
  onRemoveNote: (note: string) => void
  onRemoveOccasion: (occasion: Occasion) => void
  onRemoveFamily: (family: ScentFamily) => void
  onToggleInStock: () => void
  onClearAll: () => void
  resultCount: number
}

export function FilterChips({
  filters,
  onRemoveNote,
  onRemoveOccasion,
  onRemoveFamily,
  onToggleInStock,
  onClearAll,
  resultCount,
}: FilterChipsProps) {
  const hasFilters =
    filters.notes.length > 0 ||
    filters.occasions.length > 0 ||
    filters.scentFamilies.length > 0 ||
    filters.inStockOnly

  if (!hasFilters) return null

  return (
    <div className="flex flex-wrap items-center gap-2 py-4 border-b border-neutral-200">
      <span className="font-body text-xs text-neutral-500 mr-1">Filter aktif:</span>

      {filters.notes.map(note => (
        <button
          key={`note-${note}`}
          onClick={() => onRemoveNote(note)}
          className="inline-flex items-center gap-1 px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 transition-colors font-body text-xs text-neutral-700"
        >
          {note}
          <X className="h-3 w-3" />
        </button>
      ))}

      {filters.occasions.map(occ => (
        <button
          key={`occ-${occ}`}
          onClick={() => onRemoveOccasion(occ)}
          className="inline-flex items-center gap-1 px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 transition-colors font-body text-xs text-neutral-700"
        >
          {occ}
          <X className="h-3 w-3" />
        </button>
      ))}

      {filters.scentFamilies.map(family => (
        <button
          key={`family-${family}`}
          onClick={() => onRemoveFamily(family)}
          className="inline-flex items-center gap-1 px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 transition-colors font-body text-xs text-neutral-700"
        >
          {family}
          <X className="h-3 w-3" />
        </button>
      ))}

      {filters.inStockOnly && (
        <button
          onClick={onToggleInStock}
          className="inline-flex items-center gap-1 px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 transition-colors font-body text-xs text-neutral-700"
        >
          Tersedia
          <X className="h-3 w-3" />
        </button>
      )}

      <button
        onClick={onClearAll}
        className="font-body text-xs text-neutral-500 hover:text-neutral-900 underline underline-offset-2 transition-colors ml-2"
        id="clear-all-filters"
      >
        Hapus semua
      </button>

      <span className="ml-auto font-body text-xs text-neutral-500">
        {resultCount} produk
      </span>
    </div>
  )
}
