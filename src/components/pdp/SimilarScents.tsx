import { Product } from '@/types/product'
import { getSimilarProducts } from '@/data/products'
import { ProductCard } from '@/components/plp/ProductCard'

interface SimilarScentsProps {
  product: Product
}

export function SimilarScents({ product }: SimilarScentsProps) {
  const similar = getSimilarProducts(product, 4)

  if (similar.length === 0) return null

  return (
    <section>
      <div className="flex items-baseline justify-between mb-6">
        <div>
          <p className="font-body text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-2">
            {product.inStock ? 'Kamu Mungkin Suka' : 'Alternatif Serupa'}
          </p>
          <h3 className="font-heading text-2xl sm:text-3xl font-light">
            Similar Scents
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6">
        {similar.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}
