'use client'

import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

const footerLinks = {
  shop: [
    { label: 'Semua Produk', href: '/shop' },
    { label: 'Best Seller', href: '/shop?sort=popular' },
    { label: 'New Arrivals', href: '/shop?sort=new' },
    { label: 'Find Your Scent', href: '/find-your-scent' },
  ],
  bantuan: [
    { label: 'FAQ', href: '/faq' },
    { label: 'Pengiriman', href: '/faq#pengiriman' },
    { label: 'Penukaran & Retur', href: '/faq#retur' },
    { label: 'Hubungi Kami', href: '/faq#kontak' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="font-heading text-2xl font-light tracking-[0.15em]">
              MYKONOS
            </Link>
            <p className="mt-4 font-body text-sm leading-relaxed text-neutral-400 max-w-xs">
              Temukan parfum yang menceritakan kisahmu. Koleksi parfum berkualitas tinggi dari Indonesia.
            </p>
          </div>

          {/* Shop links */}
          <div>
            <h3 className="font-body text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4">
              Shop
            </h3>
            <ul className="space-y-3">
              {footerLinks.shop.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help links */}
          <div>
            <h3 className="font-body text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4">
              Bantuan
            </h3>
            <ul className="space-y-3">
              {footerLinks.bantuan.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-body text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4">
              Newsletter
            </h3>
            <p className="font-body text-sm text-neutral-400 mb-4">
              Dapatkan info koleksi terbaru dan promo eksklusif.
            </p>
            <form onSubmit={e => e.preventDefault()} className="flex" suppressHydrationWarning>
              <input
                type="email"
                placeholder="Email kamu"
                className="flex-1 bg-neutral-900 border border-neutral-700 px-4 py-2.5 font-body text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-500 transition-colors"
                id="footer-newsletter-email"
                suppressHydrationWarning
              />
              <button
                type="submit"
                className="bg-white text-black px-4 py-2.5 font-body text-sm font-medium hover:bg-neutral-200 transition-colors"
                id="footer-newsletter-submit"
                suppressHydrationWarning
              >
                Daftar
              </button>
            </form>
          </div>
        </div>

        <Separator className="bg-neutral-800" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between py-6 gap-4">
          <p className="font-body text-xs text-neutral-500">
            © {new Date().getFullYear()} Mykonos. Semua hak dilindungi.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="font-body text-xs text-neutral-500 hover:text-white transition-colors">
              Kebijakan Privasi
            </Link>
            <Link href="#" className="font-body text-xs text-neutral-500 hover:text-white transition-colors">
              Syarat & Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
