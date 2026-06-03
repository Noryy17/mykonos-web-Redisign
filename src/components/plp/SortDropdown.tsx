'use client'

import { SortOption } from '@/types/product'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface SortDropdownProps {
  value: SortOption
  onChange: (value: SortOption) => void
}

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'popular', label: 'Paling Populer' },
  { value: 'new', label: 'Terbaru' },
  { value: 'price-asc', label: 'Harga: Rendah → Tinggi' },
  { value: 'price-desc', label: 'Harga: Tinggi → Rendah' },
]

export function SortDropdown({ value, onChange }: SortDropdownProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="font-body text-xs text-neutral-500 uppercase tracking-wider hidden sm:block">
        Urutkan
      </span>
      <Select value={value} onValueChange={v => onChange(v as SortOption)}>
        <SelectTrigger
          id="sort-dropdown"
          className="w-[200px] font-body text-sm rounded-none border-neutral-300 focus:ring-0 bg-white"
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="rounded-none bg-white">
          {sortOptions.map(option => (
            <SelectItem
              key={option.value}
              value={option.value}
              className="font-body text-sm rounded-none"
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
