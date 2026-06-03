import { Metadata } from 'next'
import Link from 'next/link'
import { faqData } from '@/data/faq'
import { FaqAccordion } from '@/components/faq/FaqAccordion'
import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'FAQ — Mykonos',
  description: 'Punya pertanyaan? Temukan jawaban seputar pengiriman, pembayaran, produk, dan penukaran di sini.',
}

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-black text-white py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-light tracking-wide">
            Punya Pertanyaan?
          </h1>
          <p className="mt-3 font-body text-sm text-neutral-400 max-w-md mx-auto">
            Temukan jawaban seputar pengiriman, pembayaran, produk, dan lainnya. Jika belum menemukan jawabanmu, hubungi tim CS kami.
          </p>
        </div>
      </div>

      {/* FAQ content */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-16">
        {/* Quick nav */}
        <div className="flex flex-wrap gap-2 mb-10 pb-6 border-b border-neutral-200">
          {faqData.map(category => (
            <a
              key={category.title}
              href={`#${category.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="font-body text-xs px-3 py-1.5 border border-neutral-200 text-neutral-600 hover:border-black hover:text-black transition-colors"
            >
              {category.title}
            </a>
          ))}
        </div>

        {/* FAQ accordion */}
        <FaqAccordion categories={faqData} />

        {/* Contact CTA */}
        <div className="mt-16 p-8 bg-neutral-50 border border-neutral-200 text-center" id="kontak">
          <MessageCircle className="h-8 w-8 text-neutral-300 mx-auto mb-4" />
          <h3 className="font-heading text-xl font-normal mb-2">
            Belum menemukan jawabanmu?
          </h3>
          <p className="font-body text-sm text-neutral-500 mb-6 max-w-sm mx-auto">
            Tim CS Mykonos siap membantu. Hubungi kami via WhatsApp untuk respon tercepat.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/62812XXXXXXXX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-none bg-black text-white hover:bg-neutral-800 font-body text-xs uppercase tracking-[0.15em] h-11 px-6 transition-colors"
            >
              Hubungi via WhatsApp
            </a>
            <a
              href="mailto:cs@mykonos.id"
              className="inline-flex items-center justify-center rounded-none border border-black bg-transparent text-black hover:bg-black hover:text-white font-body text-xs uppercase tracking-[0.15em] h-11 px-6 transition-colors"
            >
              Email: cs@mykonos.id
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
