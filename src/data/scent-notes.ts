// Scent note icon mapping to Lucide React icon names
// Each note is mapped to the most appropriate Lucide icon

export const noteIconMap: Record<string, string> = {
  // Citrus
  'Bergamot': 'Citrus',
  'Lemon': 'Citrus',
  'Orange': 'Citrus',
  'Grapefruit': 'Citrus',
  'Mandarin': 'Citrus',
  'Lime': 'Citrus',
  'Yuzu': 'Citrus',

  // Floral
  'Rose': 'Flower2',
  'Jasmine': 'Flower',
  'Lily': 'Flower',
  'Peony': 'Flower2',
  'Iris': 'Flower2',
  'Violet': 'Flower',
  'Tuberose': 'Flower2',
  'Magnolia': 'Flower',
  'Ylang-Ylang': 'Flower2',
  'Lavender': 'Flower',
  'Neroli': 'Flower',
  'Gardenia': 'Flower2',
  'Frangipani': 'Flower',

  // Fresh / Green
  'Green Tea': 'Leaf',
  'Mint': 'Leaf',
  'Basil': 'Leaf',
  'Eucalyptus': 'TreePine',
  'Sea Salt': 'Waves',
  'Ocean Breeze': 'Waves',
  'Aquatic': 'Droplets',
  'Rain': 'CloudRain',
  'Fresh Air': 'Wind',
  'Cucumber': 'Leaf',
  'Bamboo': 'Leaf',
  'Fig Leaf': 'Leaf',

  // Woody
  'Sandalwood': 'TreeDeciduous',
  'Cedar': 'TreePine',
  'Cedarwood': 'TreePine',
  'Oud': 'TreeDeciduous',
  'Vetiver': 'TreeDeciduous',
  'Patchouli': 'TreeDeciduous',
  'Teak': 'TreePine',
  'Birch': 'TreePine',
  'Pine': 'TreePine',
  'Driftwood': 'TreeDeciduous',
  'Rosewood': 'TreeDeciduous',

  // Spicy
  'Pepper': 'Flame',
  'Black Pepper': 'Flame',
  'Pink Pepper': 'Flame',
  'Saffron': 'Flame',
  'Cardamom': 'Flame',
  'Cinnamon': 'Flame',
  'Clove': 'Flame',
  'Ginger': 'Flame',
  'Nutmeg': 'Flame',

  // Sweet / Gourmand
  'Vanilla': 'Cookie',
  'Caramel': 'Cookie',
  'Cocoa': 'Coffee',
  'Honey': 'Droplets',
  'Tonka Bean': 'Bean',
  'Praline': 'Cookie',
  'Coffee': 'Coffee',

  // Musky / Amber
  'Musk': 'Sparkles',
  'White Musk': 'Sparkles',
  'Amber': 'Gem',
  'Ambergris': 'Gem',
  'Incense': 'Flame',
  'Frankincense': 'Flame',
  'Myrrh': 'Gem',
  'Benzoin': 'Gem',
  'Resin': 'Gem',

  // Fruity
  'Apple': 'Apple',
  'Peach': 'Cherry',
  'Pear': 'Apple',
  'Raspberry': 'Cherry',
  'Blackberry': 'Cherry',
  'Plum': 'Cherry',
  'Lychee': 'Cherry',
  'Coconut': 'TreePalm',
  'Mango': 'Cherry',
  'Passionfruit': 'Cherry',

  // Leather / Animalic
  'Leather': 'Briefcase',
  'Suede': 'Briefcase',
  'Tobacco': 'Wind',

  // Powdery / Clean
  'Powder': 'Sparkles',
  'Cotton': 'Cloud',
  'Clean Linen': 'Cloud',
}

// Get icon name for a note, with fallback
export function getNoteIcon(noteName: string): string {
  return noteIconMap[noteName] || 'Droplets'
}

// Scent family descriptions for tooltips
export const scentFamilyDescriptions: Record<string, string> = {
  'Floral': 'Aroma bunga-bungaan yang feminin dan romantis — mawar, melati, peony',
  'Woody': 'Karakter kayu yang hangat dan maskulin — sandalwood, cedar, oud',
  'Fresh': 'Kesan segar dan bersih — citrus, aquatic, green tea',
  'Oriental': 'Aroma eksotis yang kaya dan hangat — vanilla, amber, rempah',
}

// Occasion descriptions for tooltips
export const occasionDescriptions: Record<string, string> = {
  'Casual': 'Santai sehari-hari — nongkrong, jalan-jalan, weekend',
  'Everyday': 'Aktivitas harian — ngantor, kuliah, meeting ringan',
  'Formal': 'Acara resmi — meeting penting, dinner, gala',
  'Special': 'Momen istimewa — date night, anniversary, pesta',
}

// Note categories for filter grouping
export const noteCategories = [
  { label: 'Citrus', notes: ['Bergamot', 'Lemon', 'Orange', 'Grapefruit', 'Mandarin', 'Lime'] },
  { label: 'Floral', notes: ['Rose', 'Jasmine', 'Lily', 'Peony', 'Iris', 'Lavender', 'Neroli'] },
  { label: 'Woody', notes: ['Sandalwood', 'Cedar', 'Oud', 'Vetiver', 'Patchouli'] },
  { label: 'Fresh', notes: ['Green Tea', 'Mint', 'Sea Salt', 'Aquatic', 'Bamboo'] },
  { label: 'Spicy', notes: ['Black Pepper', 'Cardamom', 'Cinnamon', 'Saffron', 'Ginger'] },
  { label: 'Sweet', notes: ['Vanilla', 'Caramel', 'Honey', 'Tonka Bean'] },
  { label: 'Fruity', notes: ['Apple', 'Peach', 'Raspberry', 'Lychee', 'Coconut'] },
  { label: 'Musky', notes: ['Musk', 'White Musk', 'Amber', 'Incense'] },
]
