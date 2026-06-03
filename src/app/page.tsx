'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'
import { bestSellers, newArrivals } from '@/data/products'
import { ArrowRight, Sparkles } from 'lucide-react'
import { ProductCard } from '@/components/plp/ProductCard'
import { ZoomParallax } from '@/components/ui/zoom-parallax'
import { TextRotate } from '@/components/ui/text-rotate'
import FlowArt, { FlowSection } from '@/components/ui/story-scroll'
import { IngredientReveal } from '@/components/homepage/IngredientReveal'
import { TrustPillars } from '@/components/homepage/TrustPillars'
import { Testimonials } from '@/components/homepage/Testimonials'

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.1 } },
}

export default function HomePage() {
  const featuredProducts = [...bestSellers.filter(p => p.inStock), ...newArrivals].slice(0, 6)

  return (
    <div className="min-h-screen bg-white">

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 1 — HERO (ZoomParallax + TextRotate)
          Background: Gelap | Kesan pertama dramatis
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-black">
        {/* ZoomParallax: 7 foto produk/mood sebagai background hero */}
        <div className="relative">
          <ZoomParallax images={[
            { src: '/images/products/hero_composition.png', alt: 'Koleksi Mykonos' },
            { src: '/images/ingredients/vanilla.jpg', alt: 'Madagascar Vanilla' },
            { src: '/images/ingredients/oud.jpg', alt: 'Oud' },
            { src: '/images/ingredients/citrus.jpg', alt: 'Fresh Citrus' },
            { src: '/images/mood/element_glass.jpg', alt: 'Detail botol' },
            { src: '/images/ingredients/rose.jpg', alt: 'Bulgarian Rose' },
            { src: '/images/mood/element_water.jpg', alt: 'Lifestyle Mykonos' },
          ]} />

          {/* TextRotate overlay — radial gradient: dark center for text, transparent edges for parallax visibility */}
          <div className="absolute inset-0 z-30 h-screen sticky top-0 pointer-events-none flex items-center justify-center">
            {/* Radial vignette — only dark behind text, edges stay transparent for parallax */}
            <div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(ellipse 50% 55% at 50% 48%, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.1) 80%, transparent 100%)',
              }}
            />
            {/* Subtle top/bottom edge fade for polish */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30" />

            {/* Content */}
            <div className="relative z-10 text-center px-4">
              <p className="font-body text-white text-[10px] uppercase tracking-[0.35em] mb-4">
                Mykonos Parfum
              </p>
              <TextRotate
                texts={['Citrus', 'Woody', 'Floral', 'Oriental', 'Fresh']}
                mainClassName="font-heading text-5xl sm:text-6xl lg:text-8xl text-white justify-center"
                rotationInterval={2500}
                staggerFrom="first"
                staggerDuration={0.04}
                initial={{ y: '100%', opacity: 0, filter: 'blur(4px)' }}
                animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                exit={{ y: '-100%', opacity: 0, filter: 'blur(4px)' }}
              />
              <p className="font-body text-white/80 text-sm sm:text-base mt-6 max-w-md mx-auto drop-shadow-md">
                Temukan aroma yang menceritakan siapa dirimu
              </p>
              <div className="mt-10 flex flex-wrap gap-4 justify-center pointer-events-auto">
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center rounded-none bg-white text-black hover:bg-neutral-200 font-body text-xs uppercase tracking-[0.15em] h-12 px-8 transition-colors"
                >
                  Lihat Koleksi
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
                <Link
                  href="/find-your-scent"
                  className="inline-flex items-center justify-center rounded-none border border-white/50 bg-white/10 text-white hover:bg-white hover:text-black font-body text-xs uppercase tracking-[0.15em] h-12 px-8 transition-colors backdrop-blur-sm"
                >
                  Find Your Scent
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          SECTION 2 — BRAND STORY SINGKAT
          Background: #000000 | Teks: #ffffff
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-32 bg-black text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            <motion.div variants={fadeInUp}>
              <p className="font-body text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-4">
                Tentang Mykonos
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light leading-tight mb-6">
                Lahir dari Kenangan,
                <br />
                <span className="italic text-neutral-400">Diciptakan untuk Masa Depan</span>
              </h2>
              <p className="font-body text-sm sm:text-base text-neutral-400 leading-relaxed mb-6 max-w-lg">
                Mykonos lahir dari keyakinan bahwa parfum lokal bisa setara dengan dunia. 
                Setiap botol adalah cerita — dari bahan baku pilihan hingga kulit yang memakainya.
              </p>
              <p className="font-body text-sm text-neutral-500 leading-relaxed max-w-lg">
                Setiap parfum Mykonos bukan sekadar wangi. Ia adalah pernyataan siapa dirimu, 
                ke mana kamu pergi, dan cerita apa yang ingin kamu sampaikan.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative bg-neutral-100 aspect-[3/4] overflow-hidden group rounded-2xl">
                  <Image src="/images/mood/element_floral.jpg" alt="Floral Element" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 50vw, 25vw" />
                </div>
                <div className="relative bg-neutral-950 aspect-[3/4] overflow-hidden group rounded-2xl">
                  <Image src="/images/mood/element_glass.jpg" alt="Glass Refraction" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 50vw, 25vw" />
                </div>
              </div>
              <div className="relative bg-neutral-100 aspect-[2/1] overflow-hidden group rounded-2xl">
                <Image src="/images/mood/element_water.jpg" alt="Water Ripples" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          SECTION 3 — PARALLAX INGREDIENT REVEAL
          Background: #000000 | Teks: #ffffff
          3 reveal berurutan: Buah Tropis → Bunga Mekar → Air Jernih
      ═══════════════════════════════════════════════════════════════ */}
      <IngredientReveal />


      {/* ═══════════════════════════════════════════════════════════════
          SECTION 4 — TRUST PILLARS / USPs
          Background: #1a1a1a | Teks: #ffffff
      ═══════════════════════════════════════════════════════════════ */}
      <TrustPillars />


      {/* ═══════════════════════════════════════════════════════════════
          SECTION 5 — FEATURED PRODUCTS (Best Sellers)
          Background: #ffffff | Teks: #000000
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="flex items-end justify-between mb-10">
              <div>
                <p className="font-body text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-2">
                  Pilihan Terbaik
                </p>
                <h2 className="font-heading text-3xl sm:text-4xl font-light text-neutral-900">
                  Best Sellers &amp; Terbaru
                </h2>
              </div>
              <Link
                href="/shop"
                className="hidden sm:flex items-center gap-2 font-body text-xs uppercase tracking-wider text-neutral-500 hover:text-black transition-colors"
              >
                Lihat Semua
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>

            <motion.div
              variants={stagger}
              className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10"
            >
              {featuredProducts.map(product => (
                <motion.div key={product.id} variants={fadeInUp}>
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-8 text-center sm:hidden">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-wider text-neutral-500 hover:text-black transition-colors"
              >
                Lihat Semua Koleksi
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          SECTION 6 — SOCIAL PROOF / TESTIMONI
          Background: #000000 | Teks: #ffffff
      ═══════════════════════════════════════════════════════════════ */}
      <Testimonials />


      {/* ═══════════════════════════════════════════════════════════════
          SECTION 7 — STORYSCROLL (FlowArt) — JOURNAL / EDITORIAL
          Background: Bergantian hitam / putih
      ═══════════════════════════════════════════════════════════════ */}
      <FlowArt aria-label="Cerita di Balik Mykonos">
        {/* Section 1 — Origin */}
        <FlowSection aria-label="Asal usul" style={{ backgroundColor: '#000000', color: '#fff' }}>
          <p className="font-body text-xs font-bold uppercase tracking-[0.2em]">01 — Asal Usul</p>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          <div>
            <h2 className="font-heading text-[clamp(3.5rem,12vw,14rem)] font-light leading-[0.85] uppercase tracking-tight">
              Dari
              <br />
              Bumi
              <br />
              Indonesia
            </h2>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          <p className="mt-auto max-w-[50ch] font-body text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
            Mykonos lahir dari keyakinan sederhana: parfum lokal bisa setara dunia.
            Dari Oud Kalimantan hingga Vanilla Madagaskar — kami memilih yang terbaik
            untuk kulit Indonesia.
          </p>
        </FlowSection>

        {/* Section 2 — Philosophy */}
        <FlowSection aria-label="Filosofi" style={{ backgroundColor: '#F5F0E8', color: '#000' }}>
          <p className="font-body text-xs font-bold uppercase tracking-[0.2em]">02 — Filosofi</p>
          <hr className="my-[2vw] border-none border-t border-black/20" />
          <div>
            <h2 className="font-heading text-[clamp(3.5rem,12vw,14rem)] font-light leading-[0.85] uppercase tracking-tight">
              Dibuat
              <br />
              Dengan
              <br />
              Niat
            </h2>
          </div>
          <hr className="my-[2vw] border-none border-t border-black/20" />
          <p className="max-w-[50ch] font-body text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
            Setiap botol Mykonos bukan sekadar wangi. Ia adalah pernyataan — siapa dirimu,
            ke mana kamu pergi, dan cerita apa yang ingin kamu sampaikan.
          </p>
          <hr className="my-[2vw] border-none border-t border-black/20" />
          <div className="flex flex-wrap gap-[3vw]">
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 font-body text-sm font-bold uppercase tracking-wider">Bahan Baku</p>
              <p className="font-body text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Ingredients premium dari 6 negara. Dipilih langsung dari sumbernya tanpa perantara.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 font-body text-sm font-bold uppercase tracking-wider">Formulasi</p>
              <p className="font-body text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Setiap formula melewati 200+ iterasi oleh perfumer berpengalaman sebelum disetujui.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 font-body text-sm font-bold uppercase tracking-wider">Standar</p>
              <p className="font-body text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                BPOM approved, cruelty-free, dan konsentrasi Extrait de Parfum untuk ketahanan maksimal.
              </p>
            </div>
          </div>
        </FlowSection>

        {/* Section 3 — Process */}
        <FlowSection aria-label="Proses" style={{ backgroundColor: '#1a1a1a', color: '#fff' }}>
          <p className="font-body text-xs font-bold uppercase tracking-[0.2em]">03 — Proses</p>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          <div>
            <h2 className="font-heading text-[clamp(3.5rem,12vw,14rem)] font-light leading-[0.85] uppercase tracking-tight">
              Dari
              <br />
              Lab
              <br />
              Ke Kulit
            </h2>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          <div className="flex flex-wrap gap-[3vw]">
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 font-body text-sm font-bold uppercase tracking-wider">01 — Riset</p>
              <p className="font-body text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Studi tren global dan kebiasaan scent di iklim tropis Indonesia. Setiap aroma didesain untuk cuaca kita.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 font-body text-sm font-bold uppercase tracking-wider">02 — Komposisi</p>
              <p className="font-body text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Perfumer kami menyusun piramida aroma: top, middle, base. Setiap lapisan diformulasikan untuk berinteraksi sempurna dengan kulit.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 font-body text-sm font-bold uppercase tracking-wider">03 — Uji</p>
              <p className="font-body text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Pengujian ketahanan 8–12 jam di berbagai kondisi. Hanya formula yang lolos standar ketat kami yang diproduksi.
              </p>
            </div>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          <div className="flex flex-wrap gap-[3vw]">
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 font-body text-sm font-bold uppercase tracking-wider">54+</p>
              <p className="font-body text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Varian parfum yang sudah diciptakan dan dikurasi untuk berbagai kepribadian.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 font-body text-sm font-bold uppercase tracking-wider">8–12 Jam</p>
              <p className="font-body text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Rata-rata ketahanan di kulit. Konsentrasi Extrait de Parfum menjamin longevity premium.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 font-body text-sm font-bold uppercase tracking-wider">6 Negara</p>
              <p className="font-body text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Sumber bahan baku terbaik: Indonesia, Prancis, Madagaskar, Bulgaria, Haiti, Italia.
              </p>
            </div>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          <p className="mt-auto ml-auto max-w-[50ch] text-right font-body text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
            Setiap tetes Mykonos adalah hasil perjalanan panjang — dari riset hingga botol di tangan kamu.
          </p>
        </FlowSection>

        {/* Section 4 — CTA */}
        <FlowSection aria-label="Temukan milikmu" style={{ backgroundColor: '#000000', color: '#fff' }}>
          <p className="font-body text-xs font-bold uppercase tracking-[0.2em]">04 — Temukan Milikmu</p>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          <div>
            <h2 className="font-heading text-[clamp(3.5rem,12vw,14rem)] font-light leading-[0.85] uppercase tracking-tight">
              Cerita
              <br />
              Kamu
              <br />
              Dimulai
            </h2>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          <p className="max-w-[50ch] font-body text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
            Parfum yang tepat bukan soal tren. Ini soal siapa kamu.
            Temukan aroma yang menjadi signature-mu.
          </p>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          <div className="mt-auto flex flex-wrap gap-4">
            <Link
              href="/find-your-scent"
              className="inline-flex items-center justify-center rounded-none bg-white text-black hover:bg-neutral-200 font-body text-xs uppercase tracking-[0.15em] h-12 px-8 transition-colors"
            >
              Coba Find Your Scent
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
            <Link
              href="/shop"
              className="inline-flex items-center justify-center rounded-none border border-white/40 bg-transparent text-white hover:bg-white hover:text-black font-body text-xs uppercase tracking-[0.15em] h-12 px-8 transition-colors"
            >
              Lihat Koleksi
            </Link>
          </div>
        </FlowSection>
      </FlowArt>


      {/* ═══════════════════════════════════════════════════════════════
          SECTION 8 — FIND YOUR SCENT CTA BANNER
          Background: #ffffff | Teks: #000000
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
            className="text-center"
          >
            <motion.div variants={fadeInUp}>
              <Sparkles className="h-8 w-8 text-neutral-300 mx-auto mb-6" />
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light leading-tight text-neutral-900"
            >
              Belum Tahu
              <br />
              <span className="italic text-neutral-400">Harus Mulai dari Mana?</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-6 font-body text-sm text-neutral-500 max-w-md mx-auto"
            >
              Jawab 6 pertanyaan singkat dan temukan parfum yang paling cocok dengan kepribadianmu. Butuh kurang dari 2 menit.
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-8">
              <Link
                href="/find-your-scent"
                className="inline-flex items-center justify-center rounded-none bg-black text-white hover:bg-neutral-800 font-body text-xs uppercase tracking-[0.15em] h-12 px-10 transition-colors"
              >
                Mulai Find Your Scent
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
