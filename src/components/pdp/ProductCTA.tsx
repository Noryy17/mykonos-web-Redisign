'use client'

import { useState } from 'react'
import { Product, ProductVariant } from '@/types/product'
import { formatPrice } from '@/data/products'
import { Button } from '@/components/ui/button'
import { ShoppingBag } from 'lucide-react'
import { NotifyMeForm } from './NotifyMeForm'

interface ProductCTAProps {
  product: Product
}

export function ProductCTA({ product }: ProductCTAProps) {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
    product.variants.find(v => v.inStock) || product.variants[0]
  )
  const [showNotifyMe, setShowNotifyMe] = useState(false)

  const isSelectedInStock = selectedVariant.inStock
  const allSoldOut = product.variants.every(v => !v.inStock)

  return (
    <div className="space-y-5">
      {/* Variant selector */}
      <div>
        <p className="font-body text-xs uppercase tracking-[0.15em] text-neutral-500 mb-3">
          Ukuran
        </p>
        <div className="flex gap-2">
          {product.variants.map(variant => {
            const isSelected = selectedVariant.size === variant.size
            return (
              <button
                key={variant.size}
                id={`variant-${variant.size}`}
                onClick={() => {
                  setSelectedVariant(variant)
                  setShowNotifyMe(false)
                }}
                className={`relative px-4 py-3 border font-body text-sm transition-all ${
                  isSelected
                    ? 'border-black bg-black text-white'
                    : variant.inStock
                    ? 'border-neutral-300 hover:border-black text-neutral-900'
                    : 'border-neutral-200 text-neutral-400 bg-neutral-50'
                }`}
              >
                {variant.size}
                {!variant.inStock && (
                  <span className="absolute -top-px -right-px w-full h-full">
                    <span className="absolute top-0 right-0 bottom-0 left-0">
                      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <line x1="0" y1="100" x2="100" y2="0" stroke="currentColor" strokeWidth="1" className="text-neutral-300" />
                      </svg>
                    </span>
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Price */}
      <div>
        <p className="font-heading text-2xl font-normal">
          {formatPrice(selectedVariant.price)}
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="space-y-3">
        {isSelectedInStock ? (
          <Button
            id="buy-now-btn"
            size="lg"
            className="w-full rounded-none bg-black text-white hover:bg-neutral-800 font-body text-sm uppercase tracking-[0.15em] h-14"
          >
            <ShoppingBag className="h-4 w-4 mr-2" />
            Beli Sekarang
          </Button>
        ) : (
          <>
            <Button
              id="sold-out-btn"
              size="lg"
              disabled
              className="w-full rounded-none bg-neutral-200 text-neutral-500 font-body text-sm uppercase tracking-[0.15em] h-14 cursor-not-allowed"
            >
              Stok Habis
            </Button>
            {!showNotifyMe ? (
              <Button
                id="notify-me-trigger"
                variant="outline"
                size="lg"
                onClick={() => setShowNotifyMe(true)}
                className="w-full rounded-none border-black text-black hover:bg-black hover:text-white font-body text-sm uppercase tracking-[0.15em] h-12 transition-colors"
              >
                Beritahu Saya Saat Tersedia
              </Button>
            ) : (
              <NotifyMeForm productName={product.name} variantSize={selectedVariant.size} />
            )}
          </>
        )}
      </div>

      {/* Availability info */}
      {!allSoldOut && !isSelectedInStock && (
        <p className="font-body text-xs text-neutral-500">
          Ukuran lain yang tersedia:{' '}
          {product.variants
            .filter(v => v.inStock)
            .map(v => v.size)
            .join(', ')}
        </p>
      )}
    </div>
  )
}
