export type ScentFamily = 'Floral' | 'Woody' | 'Fresh' | 'Oriental'
export type Occasion = 'Casual' | 'Everyday' | 'Formal' | 'Special'
export type NoteLayer = 'top' | 'middle' | 'base'
export type SortOption = 'popular' | 'new' | 'price-asc' | 'price-desc'

export interface Note {
  name: string
  icon: string
  layer: NoteLayer
}

export interface ProductVariant {
  size: string
  price: number
  inStock: boolean
}

export interface Product {
  id: string
  slug: string
  name: string
  tagline: string
  description: string
  imageUrl: string
  moodImageUrl?: string
  scentFamily: ScentFamily[]
  occasions: Occasion[]
  notes: Note[]
  variants: ProductVariant[]
  isBestSeller: boolean
  isNewArrival: boolean
  inStock: boolean
}

export interface FilterState {
  notes: string[]
  occasions: Occasion[]
  scentFamilies: ScentFamily[]
  inStockOnly: boolean
  priceRange?: [number, number]
}

export interface QuizAnswer {
  questionId: string
  answerId: string
}
