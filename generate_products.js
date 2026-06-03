const fs = require('fs');

const mykonosNames = [
  "Baby Love", "Black Opera", "California", "Enchanted", "Ivory",
  "Moroccan Vanilla", "Pink Beach", "Vanilla Clouds", "Matcha Latte", "Berry Caramel Pancake",
  "Aphrodite", "Jinx", "Xoxo Rosy", "Dolce Cherry", "Slow Living",
  "Coconut Dreams", "Senja", "Blossom", "Verve", "Illusion",
  "Zora", "Lychee Breeze", "Bonfire Vanilla", "Caramel Fudge", "Pistachio Cream",
  "Saffron & Leather", "Tea Time", "Sparkling Rose", "Crystal Clear", "Down To Earth",
  "When in Paris", "Atlantis", "Seven Roses", "Sensi", "Eclipse",
  "Sansa", "Blue Lagoon", "Blood Moon", "Violette", "Dark Secret",
  "Voodoo", "Love Letter", "Secret Garden", "Velvet", "Potion",
  "Aura", "Cashmere", "Sunkissed", "Moonlight", "Stardust",
  "Utopia", "Enigma", "Mystique", "Zephyr"
];

const families = ['Floral', 'Fruity', 'Woody', 'Fresh', 'Oriental', 'Gourmand', 'Citrus'];
const occasions = ['Everyday', 'Special', 'Casual', 'Formal', 'Date Night', 'Office'];

function generateProduct(name, id) {
  const slug = name.toLowerCase().replace(/ /g, '-').replace(/&/g, 'and');
  const family1 = families[Math.floor(Math.random() * families.length)];
  let family2 = families[Math.floor(Math.random() * families.length)];
  if(family1 === family2) family2 = families[(families.indexOf(family1) + 1) % families.length];
  
  const isExistingImage = ["baby love", "black opera", "california", "enchanted", "ivory", "moroccan vanilla", "pink beach", "vanilla clouds", "matcha latte", "berry caramel pancake", "aphrodite", "jinx"].includes(name.toLowerCase());
  const imageUrl = isExistingImage ? `/images/products/${slug.replace(/-/g, '_')}.png` : '/images/products/placeholder.jpg';

  return `  {
    id: '${id}',
    name: '${name}',
    slug: '${slug}',
    tagline: 'Wangi khas ${name} yang memikat.',
    description: 'Parfum Mykonos ${name} menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '${imageUrl}',
    scentFamily: ['${family1}', '${family2}'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['${occasions[Math.floor(Math.random() * occasions.length)]}', '${occasions[Math.floor(Math.random() * occasions.length)]}'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: ${Math.random() > 0.7},
    isBestSeller: ${Math.random() > 0.7},
    inStock: true
  }`;
}

let output = `import { Product } from '../types/product'

export const products: Product[] = [
`;

for(let i=0; i<54; i++) {
  const name = mykonosNames[i] || `Mykonos Signature ${i+1}`;
  output += generateProduct(name, `p${i+1}`) + (i < 53 ? ',\n' : '\n');
}

output += `];

export function getLowestPrice(product: Product): number {
  return Math.min(...product.variants.map((v) => v.price))
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

export const bestSellers = products.filter(p => p.isBestSeller)
export const newArrivals = products.filter(p => p.isNewArrival)

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug)
}

export function getSimilarProducts(product: Product, limit: number = 4): Product[] {
  return products
    .filter(p => p.id !== product.id)
    .sort((a, b) => {
      const aFamilyMatch = a.scentFamily.some(f => product.scentFamily.includes(f)) ? 1 : 0
      const bFamilyMatch = b.scentFamily.some(f => product.scentFamily.includes(f)) ? 1 : 0
      if (aFamilyMatch !== bFamilyMatch) return bFamilyMatch - aFamilyMatch
      if (a.inStock !== b.inStock) return a.inStock ? -1 : 1
      return 0
    })
    .slice(0, limit)
}
`;

fs.writeFileSync('src/data/products.ts', output);
