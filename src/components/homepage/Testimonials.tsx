'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { testimonials } from '@/data/testimonials'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.1 } },
}

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goTo = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  const goPrev = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
    }),
  }

  const current = testimonials[currentIndex]

  return (
    <section className="py-16 sm:py-24 bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12 sm:mb-16">
            <p className="font-body text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-2">
              Kata Mereka
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-light">
              Testimoni
            </h2>
          </motion.div>

          <motion.div variants={fadeInUp} className="max-w-3xl mx-auto">
            {/* Quote icon */}
            <div className="flex justify-center mb-8">
              <Quote className="h-8 w-8 text-neutral-700" />
            </div>

            {/* Testimonial slider */}
            <div className="relative min-h-[180px] sm:min-h-[160px] flex items-center justify-center">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="text-center w-full"
                >
                  <blockquote className="font-heading text-xl sm:text-2xl lg:text-3xl font-light leading-relaxed italic mb-6">
                    &ldquo;{current.quote}&rdquo;
                  </blockquote>
                  <div>
                    <p className="font-body text-sm text-neutral-300">
                      {current.name}
                    </p>
                    <p className="font-body text-xs text-neutral-500 mt-0.5">
                      {current.location}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-10">
              <button
                onClick={goPrev}
                className="p-2 text-neutral-600 hover:text-white transition-colors"
                aria-label="Testimoni sebelumnya"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`h-1.5 transition-all duration-300 ${
                      i === currentIndex
                        ? 'w-6 bg-white'
                        : 'w-1.5 bg-neutral-700 hover:bg-neutral-500'
                    }`}
                    aria-label={`Testimoni ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={goNext}
                className="p-2 text-neutral-600 hover:text-white transition-colors"
                aria-label="Testimoni selanjutnya"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
