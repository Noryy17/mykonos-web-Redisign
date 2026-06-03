'use client'

import Link from 'next/link'
import Image from 'next/image'
import { formatPrice, getLowestPrice } from '@/data/products'
import { Product } from '@/types/product'
import { Badge } from '@/components/ui/badge'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const lowestPrice = getLowestPrice(product)
  const hasMultipleVariants = product.variants.length > 1

  return (
    <Link
      href={`/product/${product.slug}`}
      id={`product-card-${product.slug}`}
      className="group block"
    >
      <div className="relative overflow-hidden bg-neutral-100 aspect-[3/4] rounded-2xl">
        {/* Product Image */}
        <div className={`absolute inset-0 transition-transform duration-500 group-hover:scale-105 ${!product.inStock ? 'opacity-50 grayscale' : ''}`}>
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          />
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {!product.inStock && (
            <Badge
              variant="secondary"
              className="bg-neutral-900 text-white font-body text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-none hover:bg-neutral-900"
            >
              Habis
            </Badge>
          )}
          {product.isBestSeller && product.inStock && (
            <Badge
              variant="secondary"
              className="bg-white text-black font-body text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-none hover:bg-white"
            >
              Best Seller
            </Badge>
          )}
          {product.isNewArrival && product.inStock && (
            <Badge
              variant="secondary"
              className="bg-white text-black font-body text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-none hover:bg-white"
            >
              Baru
            </Badge>
          )}
        </div>

        {/* Hover overlay for in-stock */}
        {product.inStock && (
          <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 p-4">
            <div className="bg-black text-white text-center py-3 font-body text-xs uppercase tracking-[0.15em]">
              Lihat Detail
            </div>
          </div>
        )}
      </div>

      {/* Product info */}
      <div className="mt-3 space-y-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-heading text-lg font-normal text-neutral-900 group-hover:text-neutral-600 transition-colors leading-tight">
            {product.name}
          </h3>
        </div>

        <p className="font-body text-xs text-neutral-500 line-clamp-1">
          {product.tagline}
        </p>

        <div className="flex items-center gap-2 pt-0.5">
          <p className={`font-body text-sm ${product.inStock ? 'text-neutral-900' : 'text-neutral-400'}`}>
            {hasMultipleVariants ? `Mulai dari ` : ''}
            {formatPrice(lowestPrice)}
          </p>
        </div>

        {/* Scent family tags */}
        <div className="flex flex-wrap gap-1 pt-1">
          {product.scentFamily.map(family => (
            <span
              key={family}
              className="font-body text-[10px] uppercase tracking-wider text-neutral-400 border border-neutral-200 px-2 py-0.5"
            >
              {family}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
