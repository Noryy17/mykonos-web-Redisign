'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/types/product'
import { formatPrice, getLowestPrice } from '@/data/products'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface QuizResultProps {
  products: Product[]
  reasons: Record<string, string>
}

export function QuizResult({ products, reasons }: QuizResultProps) {
  return (
    <div className="space-y-10">
      {/* Result header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 mb-4">
          <Sparkles className="h-5 w-5 text-neutral-400" />
          <p className="font-body text-xs uppercase tracking-[0.25em] text-neutral-500">
            Hasil Rekomendasi
          </p>
          <Sparkles className="h-5 w-5 text-neutral-400" />
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl font-light">
          Parfum Untukmu
        </h2>
        <p className="mt-3 font-body text-sm text-neutral-500 max-w-md mx-auto">
          Berdasarkan preferensimu, berikut parfum yang paling cocok. Setiap rekomendasi punya alasan kenapa kami memilihkannya untukmu.
        </p>
      </div>

      {/* Recommended products */}
      <div className="space-y-6">
        {products.map((product, index) => (
          <Link
            key={product.id}
            href={`/product/${product.slug}`}
            id={`quiz-result-${product.slug}`}
            className="block group"
          >
            <div className="flex gap-5 sm:gap-8 p-5 sm:p-6 border border-neutral-200 hover:border-neutral-400 transition-colors">
              {/* Number & image */}
              <div className="w-20 sm:w-28 shrink-0">
                <p className="font-heading text-3xl font-light text-neutral-200 mb-2">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <div className="relative aspect-square bg-neutral-100 overflow-hidden">
                  <Image src={product.imageUrl} alt={product.name} fill className="object-cover" sizes="(max-width: 640px) 80px, 112px" />
                </div>
              </div>

              {/* Product info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-heading text-xl sm:text-2xl font-normal group-hover:text-neutral-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="font-body text-xs text-neutral-500 mt-0.5">
                      {product.scentFamily.join(' · ')} · {formatPrice(getLowestPrice(product))}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-neutral-400 group-hover:translate-x-1 transition-transform shrink-0 mt-2" />
                </div>

                {/* Reason */}
                <div className="mt-3 p-3 bg-neutral-50 border-l-2 border-neutral-300">
                  <p className="font-body text-[10px] uppercase tracking-[0.15em] text-neutral-400 mb-1">
                    Kenapa kami rekomendasikan
                  </p>
                  <p className="font-body text-xs text-neutral-600 leading-relaxed">
                    {reasons[product.id] || product.tagline}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {product.occasions.map(occ => (
                    <span
                      key={occ}
                      className="font-body text-[10px] uppercase tracking-wider bg-neutral-100 px-2 py-0.5 text-neutral-500"
                    >
                      {occ}
                    </span>
                  ))}
                  {!product.inStock && (
                    <span className="font-body text-[10px] uppercase tracking-wider bg-neutral-900 text-white px-2 py-0.5">
                      Habis
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/shop"
          className="inline-flex items-center justify-center rounded-none bg-black text-white hover:bg-neutral-800 font-body text-xs uppercase tracking-[0.15em] h-12 px-8 transition-colors"
        >
          Lihat Semua Koleksi
        </Link>
        <Link
          href="/find-your-scent"
          className="inline-flex items-center justify-center rounded-none border border-black bg-transparent text-black hover:bg-black hover:text-white font-body text-xs uppercase tracking-[0.15em] h-12 px-8 transition-colors"
        >
          Coba Lagi
        </Link>
      </div>
    </div>
  )
}
