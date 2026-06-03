'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ShoppingBag, ChevronDown } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'

const shopLinks = [
  { label: 'Semua Produk', href: '/shop' },
  { label: 'Best Seller', href: '/shop?sort=popular' },
  { label: 'New Arrivals', href: '/shop?sort=new' },
  { label: 'By Scent Family', href: '/shop?view=family' },
  { label: 'By Occasion', href: '/shop?view=occasion' },
]

const navLinks = [
  { label: 'Find Your Scent', href: '/find-your-scent' },
  { label: 'FAQ', href: '/faq' },
]

export function Navbar() {
  const [shopOpen, setShopOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-black text-white">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Mobile menu trigger */}
        <div className="flex items-center lg:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger render={
              <button
                id="mobile-menu-trigger"
                className="p-2 -ml-2 hover:opacity-70 transition-opacity"
                aria-label="Buka menu"
              />
            }>
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="left" className="w-80 bg-black text-white border-neutral-800 p-0">
              <SheetTitle className="sr-only">Menu Navigasi</SheetTitle>
              <div className="flex flex-col h-full">
                {/* Mobile logo */}
                <div className="p-6 pb-4">
                  <Link
                    href="/"
                    className="font-heading text-2xl font-light tracking-wider"
                    onClick={() => setMobileOpen(false)}
                  >
                    MYKONOS
                  </Link>
                </div>
                <Separator className="bg-neutral-800" />

                {/* Mobile nav links */}
                <div className="flex-1 overflow-y-auto py-4">
                  <div className="px-6">
                    <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-3">
                      Shop
                    </p>
                    {shopLinks.map(link => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block py-2.5 font-body text-sm text-neutral-300 hover:text-white transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>

                  <Separator className="bg-neutral-800 my-4" />

                  <div className="px-6">
                    {navLinks.map(link => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block py-2.5 font-body text-sm text-neutral-300 hover:text-white transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        <Link
          href="/"
          className="font-heading text-xl sm:text-2xl font-light tracking-[0.15em] hover:opacity-80 transition-opacity"
        >
          MYKONOS
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {/* Shop dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShopOpen(true)}
            onMouseLeave={() => setShopOpen(false)}
          >
            <button
              id="shop-dropdown-trigger"
              className="flex items-center gap-1 font-body text-sm tracking-wide hover:opacity-70 transition-opacity py-5"
            >
              Shop
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  shopOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Dropdown */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 w-48 bg-black border border-neutral-800 py-2 transition-all duration-200 ${
                shopOpen
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
            >
              {shopLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2 font-body text-sm text-neutral-300 hover:text-white hover:bg-neutral-900 transition-colors"
                  onClick={() => setShopOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm tracking-wide hover:opacity-70 transition-opacity"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-3">
          <Link
            href="/shop"
            className="p-2 hover:opacity-70 transition-opacity"
            aria-label="Keranjang belanja"
          >
            <ShoppingBag className="h-4.5 w-4.5" />
          </Link>
        </div>
      </nav>
    </header>
  )
}
