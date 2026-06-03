import { Product } from '@/types/product'

interface StorytellingBlockProps {
  product: Product
}

export function StorytellingBlock({ product }: StorytellingBlockProps) {
  return (
    <section className="bg-neutral-950 text-white py-16 sm:py-24 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section label */}
        <p className="font-body text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-6">
          Cerita di Balik Aroma
        </p>

        {/* Product name as large heading */}
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light leading-[0.9] mb-8">
          {product.name}
        </h2>

        {/* Tagline */}
        <p className="font-heading text-xl sm:text-2xl font-light text-neutral-400 mb-10 max-w-xl italic">
          &ldquo;{product.tagline}&rdquo;
        </p>

        {/* Story description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <p className="font-body text-sm sm:text-base leading-relaxed text-neutral-300">
              {product.description}
            </p>
          </div>

          {/* Quick facts */}
          <div className="space-y-6">
            <div className="border-l-2 border-neutral-700 pl-4">
              <p className="font-body text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-1">
                Scent Family
              </p>
              <p className="font-body text-sm text-neutral-200">
                {product.scentFamily.join(' · ')}
              </p>
            </div>

            <div className="border-l-2 border-neutral-700 pl-4">
              <p className="font-body text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-1">
                Cocok Untuk
              </p>
              <p className="font-body text-sm text-neutral-200">
                {product.occasions.join(' · ')}
              </p>
            </div>

            <div className="border-l-2 border-neutral-700 pl-4">
              <p className="font-body text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-1">
                Karakter Dominan
              </p>
              <p className="font-body text-sm text-neutral-200">
                {product.notes
                  .filter(n => n.layer === 'middle')
                  .map(n => n.name)
                  .join(' · ')}
              </p>
            </div>

            <div className="border-l-2 border-neutral-700 pl-4">
              <p className="font-body text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-1">
                Ketahanan
              </p>
              <p className="font-body text-sm text-neutral-200">
                6–10 jam (Eau de Parfum)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
