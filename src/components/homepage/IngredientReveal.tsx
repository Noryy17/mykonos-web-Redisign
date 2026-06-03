'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, Variants } from 'framer-motion'

interface RevealItemProps {
  index: number
  tagline: string
  title: string
  description: string
  ingredientImage: string
  reverse: boolean
}

const reveals: Omit<RevealItemProps, 'index'>[] = [
  {
    tagline: 'Fresh & Citrus',
    title: 'Buah Tropis',
    description:
      'Kesegaran buah tropis yang meledak di udara. Citrus dari Italia Selatan, jeruk Kalamansi, dan sentuhan zesty yang membuat hari terasa lebih hidup.',
    ingredientImage: '/images/reveal/tropical-fruit.png',
    reverse: false,
  },
  {
    tagline: 'Floral',
    title: 'Bunga Mekar',
    description:
      'Dari kebun Bulgarian Rose hingga melati Jawa. Setiap kelopak membawa karakter yang berbeda — lembut, kaya, dan tak terlupakan.',
    ingredientImage: '/images/reveal/blooming-flower.png',
    reverse: true,
  },
  {
    tagline: 'Aquatic & Fresh',
    title: 'Air Jernih',
    description:
      'Seperti parfum yang jatuh ke permukaan air jernih. Bersih, ringan, dan membawa ketenangan laut yang dalam.',
    ingredientImage: '/images/reveal/aquatic-water.png',
    reverse: false,
  },
]

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

function RevealItem({
  index,
  tagline,
  title,
  description,
  ingredientImage,
  reverse,
}: RevealItemProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Efek Parallax
  const textY = useTransform(scrollYProgress, [0, 1], [60, -60])
  const imageY = useTransform(scrollYProgress, [0, 1], [-80, 80])

  return (
    <div
      ref={ref}
      className={`
        flex flex-col md:flex-row items-center justify-between
        gap-12 md:gap-24 py-16 md:py-32 px-6 md:px-16 lg:px-24
        ${reverse ? 'md:flex-row-reverse' : ''}
      `}
    >
      {/* ── Teks ── */}
      <motion.div
        style={{ y: textY }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
        className="max-w-md shrink-0 w-full"
      >
        <p className="font-body text-[11px] uppercase tracking-[0.25em] text-neutral-500 mb-5">
          {String(index + 1).padStart(2, '0')} — {tagline}
        </p>
        <h3 className="font-heading font-light text-5xl md:text-6xl text-white leading-tight mb-6">
          {title}
        </h3>
        <p className="font-body text-base md:text-lg text-neutral-400 leading-relaxed">
          {description}
        </p>
      </motion.div>

      {/* ── Gambar ── */}
      <motion.div
        style={{ y: imageY }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
        className="relative w-full max-w-[550px] aspect-square shrink-0 flex items-center justify-center"
      >
        <div 
          className="w-full h-full absolute inset-0 pointer-events-none"
          style={{
            WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 70%)',
            maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 70%)'
          }}
        >
          <img
            src={ingredientImage}
            alt={title}
            className="w-full h-full object-cover scale-110"
          />
        </div>
      </motion.div>
    </div>
  )
}

export function IngredientReveal() {
  return (
    <section className="bg-black py-20">
      {/* Header section */}
      <div className="text-center pt-10 pb-16 px-6 md:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.p
            variants={fadeInUp}
            className="font-body text-[11px] uppercase tracking-[0.25em] text-neutral-500 mb-5"
          >
            Bahan Baku Kami
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-heading font-light text-5xl md:text-7xl text-white"
          >
            Dari Alam,
            <br />
            <span className="italic text-neutral-400">Untuk Kamu</span>
          </motion.h2>
        </motion.div>
      </div>

      {/* 3 reveal items */}
      <div className="flex flex-col">
        {reveals.map((item, i) => (
          <RevealItem key={i} index={i} {...item} />
        ))}
      </div>
    </section>
  )
}
