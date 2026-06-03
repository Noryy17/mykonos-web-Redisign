import { Product } from '../types/product'

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Baby Love',
    slug: 'baby-love',
    tagline: 'Wangi khas Baby Love yang memikat.',
    description: 'Parfum Mykonos Baby Love menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '/images/products/baby_love.png',
    scentFamily: ['Oriental', 'Woody'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['Office', 'Casual'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: false,
    isBestSeller: true,
    inStock: true
  },
  {
    id: 'p2',
    name: 'Black Opera',
    slug: 'black-opera',
    tagline: 'Wangi khas Black Opera yang memikat.',
    description: 'Parfum Mykonos Black Opera menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '/images/products/black_opera.png',
    scentFamily: ['Citrus', 'Fresh'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['Special', 'Date Night'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: false,
    isBestSeller: true,
    inStock: true
  },
  {
    id: 'p3',
    name: 'California',
    slug: 'california',
    tagline: 'Wangi khas California yang memikat.',
    description: 'Parfum Mykonos California menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '/images/products/california.png',
    scentFamily: ['Woody', 'Oriental'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['Everyday', 'Date Night'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: true,
    isBestSeller: true,
    inStock: true
  },
  {
    id: 'p4',
    name: 'Enchanted',
    slug: 'enchanted',
    tagline: 'Wangi khas Enchanted yang memikat.',
    description: 'Parfum Mykonos Enchanted menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '/images/products/enchanted.png',
    scentFamily: ['Fruity', 'Floral'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['Date Night', 'Date Night'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: true,
    isBestSeller: false,
    inStock: true
  },
  {
    id: 'p5',
    name: 'Ivory',
    slug: 'ivory',
    tagline: 'Wangi khas Ivory yang memikat.',
    description: 'Parfum Mykonos Ivory menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '/images/products/ivory.png',
    scentFamily: ['Gourmand', 'Woody'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['Office', 'Everyday'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: false,
    isBestSeller: true,
    inStock: true
  },
  {
    id: 'p6',
    name: 'Moroccan Vanilla',
    slug: 'moroccan-vanilla',
    tagline: 'Wangi khas Moroccan Vanilla yang memikat.',
    description: 'Parfum Mykonos Moroccan Vanilla menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '/images/products/moroccan_vanilla.png',
    scentFamily: ['Floral', 'Citrus'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['Office', 'Date Night'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: false,
    isBestSeller: true,
    inStock: true
  },
  {
    id: 'p7',
    name: 'Pink Beach',
    slug: 'pink-beach',
    tagline: 'Wangi khas Pink Beach yang memikat.',
    description: 'Parfum Mykonos Pink Beach menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '/images/products/pink_beach.png',
    scentFamily: ['Floral', 'Fresh'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['Office', 'Date Night'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: false,
    isBestSeller: false,
    inStock: true
  },
  {
    id: 'p8',
    name: 'Vanilla Clouds',
    slug: 'vanilla-clouds',
    tagline: 'Wangi khas Vanilla Clouds yang memikat.',
    description: 'Parfum Mykonos Vanilla Clouds menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '/images/products/vanilla_clouds.png',
    scentFamily: ['Oriental', 'Fruity'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['Special', 'Everyday'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: false,
    isBestSeller: true,
    inStock: true
  },
  {
    id: 'p9',
    name: 'Matcha Latte',
    slug: 'matcha-latte',
    tagline: 'Wangi khas Matcha Latte yang memikat.',
    description: 'Parfum Mykonos Matcha Latte menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '/images/products/matcha_latte.png',
    scentFamily: ['Fresh', 'Floral'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['Special', 'Special'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: true,
    isBestSeller: false,
    inStock: true
  },
  {
    id: 'p10',
    name: 'Berry Caramel Pancake',
    slug: 'berry-caramel-pancake',
    tagline: 'Wangi khas Berry Caramel Pancake yang memikat.',
    description: 'Parfum Mykonos Berry Caramel Pancake menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '/images/products/berry_caramel_pancake.png',
    scentFamily: ['Woody', 'Gourmand'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['Date Night', 'Casual'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: true,
    isBestSeller: false,
    inStock: true
  },
  {
    id: 'p11',
    name: 'Aphrodite',
    slug: 'aphrodite',
    tagline: 'Wangi khas Aphrodite yang memikat.',
    description: 'Parfum Mykonos Aphrodite menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '/images/products/aphrodite.png',
    scentFamily: ['Oriental', 'Gourmand'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['Special', 'Formal'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: false,
    isBestSeller: false,
    inStock: true
  },
  {
    id: 'p12',
    name: 'Jinx',
    slug: 'jinx',
    tagline: 'Wangi khas Jinx yang memikat.',
    description: 'Parfum Mykonos Jinx menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '/images/products/jinx.png',
    scentFamily: ['Gourmand', 'Fresh'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['Casual', 'Office'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: false,
    isBestSeller: true,
    inStock: true
  },
  {
    id: 'p13',
    name: 'Xoxo Rosy',
    slug: 'xoxo-rosy',
    tagline: 'Wangi khas Xoxo Rosy yang memikat.',
    description: 'Parfum Mykonos Xoxo Rosy menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '/images/products/placeholder.jpg',
    scentFamily: ['Citrus', 'Fruity'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['Formal', 'Date Night'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: false,
    isBestSeller: false,
    inStock: true
  },
  {
    id: 'p14',
    name: 'Dolce Cherry',
    slug: 'dolce-cherry',
    tagline: 'Wangi khas Dolce Cherry yang memikat.',
    description: 'Parfum Mykonos Dolce Cherry menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '/images/products/placeholder.jpg',
    scentFamily: ['Citrus', 'Floral'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['Formal', 'Date Night'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: false,
    isBestSeller: true,
    inStock: true
  },
  {
    id: 'p15',
    name: 'Slow Living',
    slug: 'slow-living',
    tagline: 'Wangi khas Slow Living yang memikat.',
    description: 'Parfum Mykonos Slow Living menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '/images/products/placeholder.jpg',
    scentFamily: ['Fruity', 'Fresh'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['Special', 'Special'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: false,
    isBestSeller: false,
    inStock: true
  },
  {
    id: 'p16',
    name: 'Coconut Dreams',
    slug: 'coconut-dreams',
    tagline: 'Wangi khas Coconut Dreams yang memikat.',
    description: 'Parfum Mykonos Coconut Dreams menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '/images/products/placeholder.jpg',
    scentFamily: ['Fruity', 'Oriental'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['Casual', 'Office'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: false,
    isBestSeller: false,
    inStock: true
  },
  {
    id: 'p17',
    name: 'Senja',
    slug: 'senja',
    tagline: 'Wangi khas Senja yang memikat.',
    description: 'Parfum Mykonos Senja menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '/images/products/placeholder.jpg',
    scentFamily: ['Floral', 'Woody'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['Special', 'Formal'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: false,
    isBestSeller: false,
    inStock: true
  },
  {
    id: 'p18',
    name: 'Blossom',
    slug: 'blossom',
    tagline: 'Wangi khas Blossom yang memikat.',
    description: 'Parfum Mykonos Blossom menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '/images/products/placeholder.jpg',
    scentFamily: ['Citrus', 'Fruity'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['Office', 'Office'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: false,
    isBestSeller: true,
    inStock: true
  },
  {
    id: 'p19',
    name: 'Verve',
    slug: 'verve',
    tagline: 'Wangi khas Verve yang memikat.',
    description: 'Parfum Mykonos Verve menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '/images/products/placeholder.jpg',
    scentFamily: ['Woody', 'Fresh'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['Date Night', 'Casual'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: false,
    isBestSeller: false,
    inStock: true
  },
  {
    id: 'p20',
    name: 'Illusion',
    slug: 'illusion',
    tagline: 'Wangi khas Illusion yang memikat.',
    description: 'Parfum Mykonos Illusion menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '/images/products/placeholder.jpg',
    scentFamily: ['Oriental', 'Fruity'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['Special', 'Formal'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: false,
    isBestSeller: true,
    inStock: true
  },
  {
    id: 'p21',
    name: 'Zora',
    slug: 'zora',
    tagline: 'Wangi khas Zora yang memikat.',
    description: 'Parfum Mykonos Zora menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '/images/products/placeholder.jpg',
    scentFamily: ['Floral', 'Fruity'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['Casual', 'Formal'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: false,
    isBestSeller: true,
    inStock: true
  },
  {
    id: 'p22',
    name: 'Lychee Breeze',
    slug: 'lychee-breeze',
    tagline: 'Wangi khas Lychee Breeze yang memikat.',
    description: 'Parfum Mykonos Lychee Breeze menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '/images/products/placeholder.jpg',
    scentFamily: ['Gourmand', 'Citrus'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['Formal', 'Date Night'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: false,
    isBestSeller: false,
    inStock: true
  },
  {
    id: 'p23',
    name: 'Bonfire Vanilla',
    slug: 'bonfire-vanilla',
    tagline: 'Wangi khas Bonfire Vanilla yang memikat.',
    description: 'Parfum Mykonos Bonfire Vanilla menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '/images/products/placeholder.jpg',
    scentFamily: ['Oriental', 'Gourmand'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['Casual', 'Special'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: true,
    isBestSeller: false,
    inStock: true
  },
  {
    id: 'p24',
    name: 'Caramel Fudge',
    slug: 'caramel-fudge',
    tagline: 'Wangi khas Caramel Fudge yang memikat.',
    description: 'Parfum Mykonos Caramel Fudge menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '/images/products/placeholder.jpg',
    scentFamily: ['Gourmand', 'Fresh'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['Date Night', 'Formal'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: false,
    isBestSeller: true,
    inStock: true
  },
  {
    id: 'p25',
    name: 'Pistachio Cream',
    slug: 'pistachio-cream',
    tagline: 'Wangi khas Pistachio Cream yang memikat.',
    description: 'Parfum Mykonos Pistachio Cream menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '/images/products/placeholder.jpg',
    scentFamily: ['Gourmand', 'Woody'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['Everyday', 'Formal'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: true,
    isBestSeller: false,
    inStock: true
  },
  {
    id: 'p26',
    name: 'Saffron & Leather',
    slug: 'saffron-and-leather',
    tagline: 'Wangi khas Saffron & Leather yang memikat.',
    description: 'Parfum Mykonos Saffron & Leather menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '/images/products/placeholder.jpg',
    scentFamily: ['Citrus', 'Woody'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['Formal', 'Formal'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: true,
    isBestSeller: false,
    inStock: true
  },
  {
    id: 'p27',
    name: 'Tea Time',
    slug: 'tea-time',
    tagline: 'Wangi khas Tea Time yang memikat.',
    description: 'Parfum Mykonos Tea Time menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '/images/products/placeholder.jpg',
    scentFamily: ['Floral', 'Oriental'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['Office', 'Everyday'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: false,
    isBestSeller: true,
    inStock: true
  },
  {
    id: 'p28',
    name: 'Sparkling Rose',
    slug: 'sparkling-rose',
    tagline: 'Wangi khas Sparkling Rose yang memikat.',
    description: 'Parfum Mykonos Sparkling Rose menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '/images/products/placeholder.jpg',
    scentFamily: ['Woody', 'Fruity'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['Everyday', 'Office'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: true,
    isBestSeller: true,
    inStock: true
  },
  {
    id: 'p29',
    name: 'Crystal Clear',
    slug: 'crystal-clear',
    tagline: 'Wangi khas Crystal Clear yang memikat.',
    description: 'Parfum Mykonos Crystal Clear menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '/images/products/placeholder.jpg',
    scentFamily: ['Fruity', 'Fresh'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['Casual', 'Office'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: false,
    isBestSeller: true,
    inStock: true
  },
  {
    id: 'p30',
    name: 'Down To Earth',
    slug: 'down-to-earth',
    tagline: 'Wangi khas Down To Earth yang memikat.',
    description: 'Parfum Mykonos Down To Earth menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '/images/products/placeholder.jpg',
    scentFamily: ['Woody', 'Gourmand'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['Office', 'Special'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: false,
    isBestSeller: false,
    inStock: true
  },
  {
    id: 'p31',
    name: 'When in Paris',
    slug: 'when-in-paris',
    tagline: 'Wangi khas When in Paris yang memikat.',
    description: 'Parfum Mykonos When in Paris menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '/images/products/placeholder.jpg',
    scentFamily: ['Floral', 'Fruity'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['Everyday', 'Everyday'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: false,
    isBestSeller: true,
    inStock: true
  },
  {
    id: 'p32',
    name: 'Atlantis',
    slug: 'atlantis',
    tagline: 'Wangi khas Atlantis yang memikat.',
    description: 'Parfum Mykonos Atlantis menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '/images/products/placeholder.jpg',
    scentFamily: ['Fruity', 'Woody'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['Office', 'Special'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: false,
    isBestSeller: false,
    inStock: true
  },
  {
    id: 'p33',
    name: 'Seven Roses',
    slug: 'seven-roses',
    tagline: 'Wangi khas Seven Roses yang memikat.',
    description: 'Parfum Mykonos Seven Roses menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '/images/products/placeholder.jpg',
    scentFamily: ['Woody', 'Oriental'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['Everyday', 'Special'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: false,
    isBestSeller: true,
    inStock: true
  },
  {
    id: 'p34',
    name: 'Sensi',
    slug: 'sensi',
    tagline: 'Wangi khas Sensi yang memikat.',
    description: 'Parfum Mykonos Sensi menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '/images/products/placeholder.jpg',
    scentFamily: ['Citrus', 'Gourmand'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['Formal', 'Everyday'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: false,
    isBestSeller: true,
    inStock: true
  },
  {
    id: 'p35',
    name: 'Eclipse',
    slug: 'eclipse',
    tagline: 'Wangi khas Eclipse yang memikat.',
    description: 'Parfum Mykonos Eclipse menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '/images/products/placeholder.jpg',
    scentFamily: ['Fresh', 'Woody'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['Formal', 'Special'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: false,
    isBestSeller: false,
    inStock: true
  },
  {
    id: 'p36',
    name: 'Sansa',
    slug: 'sansa',
    tagline: 'Wangi khas Sansa yang memikat.',
    description: 'Parfum Mykonos Sansa menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '/images/products/placeholder.jpg',
    scentFamily: ['Fresh', 'Citrus'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['Formal', 'Everyday'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: false,
    isBestSeller: false,
    inStock: true
  },
  {
    id: 'p37',
    name: 'Blue Lagoon',
    slug: 'blue-lagoon',
    tagline: 'Wangi khas Blue Lagoon yang memikat.',
    description: 'Parfum Mykonos Blue Lagoon menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '/images/products/placeholder.jpg',
    scentFamily: ['Oriental', 'Citrus'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['Casual', 'Special'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: false,
    isBestSeller: false,
    inStock: true
  },
  {
    id: 'p38',
    name: 'Blood Moon',
    slug: 'blood-moon',
    tagline: 'Wangi khas Blood Moon yang memikat.',
    description: 'Parfum Mykonos Blood Moon menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '/images/products/placeholder.jpg',
    scentFamily: ['Gourmand', 'Fresh'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['Formal', 'Date Night'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: false,
    isBestSeller: false,
    inStock: true
  },
  {
    id: 'p39',
    name: 'Violette',
    slug: 'violette',
    tagline: 'Wangi khas Violette yang memikat.',
    description: 'Parfum Mykonos Violette menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '/images/products/placeholder.jpg',
    scentFamily: ['Gourmand', 'Oriental'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['Office', 'Formal'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: true,
    isBestSeller: true,
    inStock: true
  },
  {
    id: 'p40',
    name: 'Dark Secret',
    slug: 'dark-secret',
    tagline: 'Wangi khas Dark Secret yang memikat.',
    description: 'Parfum Mykonos Dark Secret menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '/images/products/placeholder.jpg',
    scentFamily: ['Gourmand', 'Floral'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['Everyday', 'Date Night'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: true,
    isBestSeller: true,
    inStock: true
  },
  {
    id: 'p41',
    name: 'Voodoo',
    slug: 'voodoo',
    tagline: 'Wangi khas Voodoo yang memikat.',
    description: 'Parfum Mykonos Voodoo menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '/images/products/placeholder.jpg',
    scentFamily: ['Oriental', 'Fresh'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['Casual', 'Office'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: true,
    isBestSeller: false,
    inStock: true
  },
  {
    id: 'p42',
    name: 'Love Letter',
    slug: 'love-letter',
    tagline: 'Wangi khas Love Letter yang memikat.',
    description: 'Parfum Mykonos Love Letter menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '/images/products/placeholder.jpg',
    scentFamily: ['Fresh', 'Citrus'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['Office', 'Special'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: true,
    isBestSeller: true,
    inStock: true
  },
  {
    id: 'p43',
    name: 'Secret Garden',
    slug: 'secret-garden',
    tagline: 'Wangi khas Secret Garden yang memikat.',
    description: 'Parfum Mykonos Secret Garden menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '/images/products/placeholder.jpg',
    scentFamily: ['Woody', 'Citrus'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['Casual', 'Formal'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: false,
    isBestSeller: true,
    inStock: true
  },
  {
    id: 'p44',
    name: 'Velvet',
    slug: 'velvet',
    tagline: 'Wangi khas Velvet yang memikat.',
    description: 'Parfum Mykonos Velvet menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '/images/products/placeholder.jpg',
    scentFamily: ['Oriental', 'Floral'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['Date Night', 'Special'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: false,
    isBestSeller: true,
    inStock: true
  },
  {
    id: 'p45',
    name: 'Potion',
    slug: 'potion',
    tagline: 'Wangi khas Potion yang memikat.',
    description: 'Parfum Mykonos Potion menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '/images/products/placeholder.jpg',
    scentFamily: ['Woody', 'Fresh'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['Special', 'Everyday'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: true,
    isBestSeller: false,
    inStock: true
  },
  {
    id: 'p46',
    name: 'Aura',
    slug: 'aura',
    tagline: 'Wangi khas Aura yang memikat.',
    description: 'Parfum Mykonos Aura menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '/images/products/placeholder.jpg',
    scentFamily: ['Fresh', 'Fruity'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['Everyday', 'Special'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: false,
    isBestSeller: false,
    inStock: true
  },
  {
    id: 'p47',
    name: 'Cashmere',
    slug: 'cashmere',
    tagline: 'Wangi khas Cashmere yang memikat.',
    description: 'Parfum Mykonos Cashmere menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '/images/products/placeholder.jpg',
    scentFamily: ['Fruity', 'Gourmand'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['Special', 'Casual'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: false,
    isBestSeller: true,
    inStock: true
  },
  {
    id: 'p48',
    name: 'Sunkissed',
    slug: 'sunkissed',
    tagline: 'Wangi khas Sunkissed yang memikat.',
    description: 'Parfum Mykonos Sunkissed menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '/images/products/placeholder.jpg',
    scentFamily: ['Floral', 'Fruity'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['Everyday', 'Office'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: false,
    isBestSeller: false,
    inStock: true
  },
  {
    id: 'p49',
    name: 'Moonlight',
    slug: 'moonlight',
    tagline: 'Wangi khas Moonlight yang memikat.',
    description: 'Parfum Mykonos Moonlight menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '/images/products/placeholder.jpg',
    scentFamily: ['Fresh', 'Woody'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['Date Night', 'Everyday'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: false,
    isBestSeller: true,
    inStock: true
  },
  {
    id: 'p50',
    name: 'Stardust',
    slug: 'stardust',
    tagline: 'Wangi khas Stardust yang memikat.',
    description: 'Parfum Mykonos Stardust menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '/images/products/placeholder.jpg',
    scentFamily: ['Oriental', 'Citrus'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['Special', 'Casual'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: false,
    isBestSeller: false,
    inStock: true
  },
  {
    id: 'p51',
    name: 'Utopia',
    slug: 'utopia',
    tagline: 'Wangi khas Utopia yang memikat.',
    description: 'Parfum Mykonos Utopia menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '/images/products/placeholder.jpg',
    scentFamily: ['Citrus', 'Oriental'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['Special', 'Casual'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: false,
    isBestSeller: false,
    inStock: true
  },
  {
    id: 'p52',
    name: 'Enigma',
    slug: 'enigma',
    tagline: 'Wangi khas Enigma yang memikat.',
    description: 'Parfum Mykonos Enigma menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '/images/products/placeholder.jpg',
    scentFamily: ['Oriental', 'Woody'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['Formal', 'Everyday'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: false,
    isBestSeller: false,
    inStock: true
  },
  {
    id: 'p53',
    name: 'Mystique',
    slug: 'mystique',
    tagline: 'Wangi khas Mystique yang memikat.',
    description: 'Parfum Mykonos Mystique menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '/images/products/placeholder.jpg',
    scentFamily: ['Floral', 'Gourmand'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['Special', 'Everyday'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: true,
    isBestSeller: false,
    inStock: true
  },
  {
    id: 'p54',
    name: 'Zephyr',
    slug: 'zephyr',
    tagline: 'Wangi khas Zephyr yang memikat.',
    description: 'Parfum Mykonos Zephyr menghadirkan perpaduan aroma istimewa yang dirancang khusus untuk memancarkan aura dan kepribadianmu. Diformulasikan dengan bahan-bahan premium pilihan untuk ketahanan maksimal sepanjang hari.',
    imageUrl: '/images/products/placeholder.jpg',
    scentFamily: ['Fruity', 'Floral'] as any,
    notes: [
      { name: 'Bergamot', icon: 'Citrus', layer: 'top' },
      { name: 'Mandarin', icon: 'Citrus', layer: 'top' },
      { name: 'Jasmine', icon: 'Flower', layer: 'middle' },
      { name: 'Rose', icon: 'Flower', layer: 'middle' },
      { name: 'Vanilla', icon: 'Bean', layer: 'base' },
      { name: 'Musk', icon: 'Wood', layer: 'base' }
    ],
    occasions: ['Special', 'Office'] as any,
    variants: [
      { size: '50ml', price: 199000, inStock: true },
      { size: '100ml', price: 299000, inStock: true }
    ],
    isNewArrival: false,
    isBestSeller: true,
    inStock: true
  }
];

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
