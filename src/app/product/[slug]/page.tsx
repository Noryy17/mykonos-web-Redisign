import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { products, getProductBySlug } from '@/data/products'
import { ProductCTA } from '@/components/pdp/ProductCTA'
import { NotesVisual } from '@/components/pdp/NotesVisual'
import { StorytellingBlock } from '@/components/pdp/StorytellingBlock'
import { SimilarScents } from '@/components/pdp/SimilarScents'
import { ChevronRight } from 'lucide-react'
import { Metadata } from 'next'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return products.map(product => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return {}
  return {
    title: `${product.name} — Mykonos`,
    description: product.tagline,
  }
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-1.5 font-body text-xs text-neutral-500">
          <Link href="/" className="hover:text-neutral-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/shop" className="hover:text-neutral-900 transition-colors">
            Shop
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-neutral-900">{product.name}</span>
        </nav>
      </div>

      {/* Product main section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Product image */}
          <div className="relative aspect-[3/4] bg-neutral-100 flex items-center justify-center overflow-hidden rounded-2xl">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            <div className="space-y-6">
              {/* Title & tagline */}
              <div>
                <h1 className="font-heading text-3xl sm:text-4xl font-light tracking-wide">
                  {product.name}
                </h1>
                <p className="mt-2 font-body text-sm text-neutral-500">
                  {product.tagline}
                </p>
              </div>

              {/* Scent family & occasion badges */}
              <div className="flex flex-wrap gap-2">
                {product.scentFamily.map(family => (
                  <span
                    key={family}
                    className="font-body text-[10px] uppercase tracking-wider border border-neutral-300 px-3 py-1 text-neutral-600"
                  >
                    {family}
                  </span>
                ))}
                {product.occasions.map(occ => (
                  <span
                    key={occ}
                    className="font-body text-[10px] uppercase tracking-wider bg-neutral-100 px-3 py-1 text-neutral-500"
                  >
                    {occ}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <ProductCTA product={product} />

              {/* Notes visualization */}
              <div className="pt-4">
                <p className="font-body text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-4">
                  Piramida Aroma
                </p>
                <NotesVisual notes={product.notes} />
              </div>
            </div>
          </div>
        </div>

        {/* Storytelling block */}
        <div className="mt-16 sm:mt-24">
          <StorytellingBlock product={product} />
        </div>

        {/* Similar scents */}
        <div className="mt-16 sm:mt-24">
          <SimilarScents product={product} />
        </div>
      </div>
    </div>
  )
}
