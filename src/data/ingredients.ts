export interface Ingredient {
  name: string
  origin: string
  icon: string
  image: string
  description: string
}

export const featuredIngredients: Ingredient[] = [
  {
    name: 'Madagascar Vanilla',
    origin: 'Madagaskar',
    icon: 'Flower',
    image: '/images/ingredients/vanilla.jpg',
    description: 'Manis, hangat, ikonik',
  },
  {
    name: 'Oud Kalimantan',
    origin: 'Indonesia',
    icon: 'TreePine',
    image: '/images/ingredients/oud.jpg',
    description: 'Dalam, resinous, berkarakter',
  },
  {
    name: 'Fresh Citrus',
    origin: 'Italia Selatan',
    icon: 'Sun',
    image: '/images/ingredients/citrus.jpg',
    description: 'Segar, tajam, energik',
  },
  {
    name: 'White Musk',
    origin: 'Prancis',
    icon: 'Wind',
    image: '/images/ingredients/musk.jpg',
    description: 'Bersih, lembut, tahan lama',
  },
  {
    name: 'Bulgarian Rose',
    origin: 'Bulgaria',
    icon: 'Flower2',
    image: '/images/ingredients/rose.jpg',
    description: 'Feminin, kaya, romantis',
  },
  {
    name: 'Vetiver',
    origin: 'Haiti',
    icon: 'Leaf',
    image: '/images/ingredients/vetiver.jpg',
    description: 'Earthy, smoky, maskulin',
  },
]
