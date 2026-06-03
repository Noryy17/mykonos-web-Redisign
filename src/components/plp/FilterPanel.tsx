'use client'

import { FilterState, Occasion, ScentFamily } from '@/types/product'
import { Checkbox } from '@/components/ui/checkbox'
import { Separator } from '@/components/ui/separator'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import { SlidersHorizontal, Info } from 'lucide-react'
import { noteCategories, scentFamilyDescriptions, occasionDescriptions } from '@/data/scent-notes'

interface FilterPanelProps {
  filters: FilterState
  onFilterChange: (filters: FilterState) => void
}

const occasions: Occasion[] = ['Casual', 'Everyday', 'Formal', 'Special']
const scentFamilies: ScentFamily[] = ['Floral', 'Woody', 'Fresh', 'Oriental']

// Selected note categories for the filter (most relevant ones)
const filterNoteCategories = noteCategories.slice(0, 6)

function FilterContent({ filters, onFilterChange }: FilterPanelProps) {
  const toggleNote = (note: string) => {
    const newNotes = filters.notes.includes(note)
      ? filters.notes.filter(n => n !== note)
      : [...filters.notes, note]
    onFilterChange({ ...filters, notes: newNotes })
  }

  const toggleOccasion = (occasion: Occasion) => {
    const newOccasions = filters.occasions.includes(occasion)
      ? filters.occasions.filter(o => o !== occasion)
      : [...filters.occasions, occasion]
    onFilterChange({ ...filters, occasions: newOccasions })
  }

  const toggleFamily = (family: ScentFamily) => {
    const newFamilies = filters.scentFamilies.includes(family)
      ? filters.scentFamilies.filter(f => f !== family)
      : [...filters.scentFamilies, family]
    onFilterChange({ ...filters, scentFamilies: newFamilies })
  }

  const toggleInStock = () => {
    onFilterChange({ ...filters, inStockOnly: !filters.inStockOnly })
  }

  return (
    <div className="space-y-6">
      {/* Availability */}
      <div>
        <h4 className="font-body text-xs uppercase tracking-[0.15em] text-neutral-500 mb-3">
          Ketersediaan
        </h4>
        <label className="flex items-center gap-2.5 cursor-pointer group">
          <Checkbox
            id="filter-in-stock"
            checked={filters.inStockOnly}
            onCheckedChange={toggleInStock}
            className="rounded-none border-neutral-400 data-[state=checked]:bg-black data-[state=checked]:border-black"
          />
          <span className="font-body text-sm text-neutral-700 group-hover:text-neutral-900 transition-colors">
            Hanya yang tersedia
          </span>
        </label>
      </div>

      <Separator className="bg-neutral-200" />

      {/* Scent Family */}
      <div>
        <div className="flex items-center gap-1.5 mb-3">
          <h4 className="font-body text-xs uppercase tracking-[0.15em] text-neutral-500">
            Scent Family
          </h4>
          <Tooltip>
            <TooltipTrigger render={<Info className="h-3 w-3 text-neutral-400" />} />
            <TooltipContent className="font-body text-xs max-w-xs">
              Kategori besar yang mengelompokkan parfum berdasarkan karakter aroma dominan
            </TooltipContent>
          </Tooltip>
        </div>
        <div className="space-y-2">
          {scentFamilies.map(family => (
            <label key={family} className="flex items-center gap-2.5 cursor-pointer group">
              <Checkbox
                id={`filter-family-${family.toLowerCase()}`}
                checked={filters.scentFamilies.includes(family)}
                onCheckedChange={() => toggleFamily(family)}
                className="rounded-none border-neutral-400 data-[state=checked]:bg-black data-[state=checked]:border-black"
              />
              <div className="flex-1 flex items-center justify-between">
                <span className="font-body text-sm text-neutral-700 group-hover:text-neutral-900 transition-colors">
                  {family}
                </span>
                <Tooltip>
                  <TooltipTrigger render={<span className="font-body text-[10px] text-neutral-400 cursor-help">?</span>} />
                  <TooltipContent className="font-body text-xs max-w-xs">
                    {scentFamilyDescriptions[family]}
                  </TooltipContent>
                </Tooltip>
              </div>
            </label>
          ))}
        </div>
      </div>

      <Separator className="bg-neutral-200" />

      {/* Occasion */}
      <div>
        <div className="flex items-center gap-1.5 mb-3">
          <h4 className="font-body text-xs uppercase tracking-[0.15em] text-neutral-500">
            Occasion
          </h4>
        </div>
        <div className="space-y-2">
          {occasions.map(occ => (
            <label key={occ} className="flex items-center gap-2.5 cursor-pointer group">
              <Checkbox
                id={`filter-occasion-${occ.toLowerCase()}`}
                checked={filters.occasions.includes(occ)}
                onCheckedChange={() => toggleOccasion(occ)}
                className="rounded-none border-neutral-400 data-[state=checked]:bg-black data-[state=checked]:border-black"
              />
              <div className="flex-1 flex items-center justify-between">
                <span className="font-body text-sm text-neutral-700 group-hover:text-neutral-900 transition-colors">
                  {occ}
                </span>
                <Tooltip>
                  <TooltipTrigger render={<span className="font-body text-[10px] text-neutral-400 cursor-help">?</span>} />
                  <TooltipContent className="font-body text-xs max-w-xs">
                    {occasionDescriptions[occ]}
                  </TooltipContent>
                </Tooltip>
              </div>
            </label>
          ))}
        </div>
      </div>

      <Separator className="bg-neutral-200" />

      {/* Head Notes */}
      <div>
        <h4 className="font-body text-xs uppercase tracking-[0.15em] text-neutral-500 mb-3">
          Notes
        </h4>
        <div className="space-y-4">
          {filterNoteCategories.map(category => (
            <div key={category.label}>
              <p className="font-body text-xs text-neutral-400 mb-2">{category.label}</p>
              <div className="flex flex-wrap gap-1.5">
                {category.notes.map(note => {
                  const isActive = filters.notes.includes(note)
                  return (
                    <button
                      key={note}
                      onClick={() => toggleNote(note)}
                      className={`px-2.5 py-1 font-body text-xs transition-all ${
                        isActive
                          ? 'bg-black text-white'
                          : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                      }`}
                    >
                      {note}
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function DesktopFilterSidebar({ filters, onFilterChange }: FilterPanelProps) {
  return (
    <aside className="hidden lg:block w-64 shrink-0">
      <div className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pr-4 pb-8 -mr-4">
        <h3 className="font-heading text-lg font-normal mb-6">Filter</h3>
        <FilterContent filters={filters} onFilterChange={onFilterChange} />
      </div>
    </aside>
  )
}

export function MobileFilterSheet({ filters, onFilterChange }: FilterPanelProps) {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger render={
          <button
            id="mobile-filter-trigger"
            className="inline-flex items-center gap-2 px-4 py-2.5 border border-neutral-300 font-body text-sm hover:bg-neutral-50 transition-colors"
          />
        }>
          <SlidersHorizontal className="h-4 w-4" />
          Filter
        </SheetTrigger>
        <SheetContent side="bottom" className="h-[80vh] overflow-y-auto bg-white rounded-t-xl">
          <SheetTitle className="font-heading text-lg font-normal mb-6">Filter</SheetTitle>
          <FilterContent filters={filters} onFilterChange={onFilterChange} />
        </SheetContent>
      </Sheet>
    </div>
  )
}
