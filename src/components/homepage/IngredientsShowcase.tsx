'use client'

import { motion, Variants } from 'framer-motion'
import { featuredIngredients } from '@/data/ingredients'
import * as LucideIcons from 'lucide-react'
import { LucideProps } from 'lucide-react'
import { ComponentType } from 'react'

function IngredientIcon({ iconName, ...props }: { iconName: string } & LucideProps) {
  const Icon = (LucideIcons as unknown as Record<string, ComponentType<LucideProps>>)[iconName]
  if (!Icon) {
    const Fallback = LucideIcons.Droplets
    return <Fallback {...props} />
  }
  return <Icon {...props} />
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.1 } },
}

export function IngredientsShowcase() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12 sm:mb-16">
            <p className="font-body text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-2">
              Bahan Pilihan
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-light text-neutral-900">
              Ingredients
            </h2>
            <p className="mt-3 font-body text-sm text-neutral-500 max-w-md mx-auto">
              Setiap parfum Mykonos diformulasikan dari bahan baku terbaik yang dipilih langsung dari sumbernya.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6"
          >
            {featuredIngredients.map((ingredient) => (
              <motion.div
                key={ingredient.name}
                variants={fadeInUp}
                className="group text-center"
              >
                {/* Ingredient visual card */}
                <div className="relative aspect-[3/4] bg-neutral-100 overflow-hidden mb-4 rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 z-10" />
                  <img
                    src={ingredient.image}
                    alt={ingredient.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Icon overlay */}
                  <div className="absolute top-3 right-3 z-20">
                    <IngredientIcon
                      iconName={ingredient.icon}
                      className="h-4 w-4 text-white/70"
                    />
                  </div>
                  {/* Origin label at bottom */}
                  <div className="absolute bottom-3 left-3 z-20">
                    <p className="font-body text-[9px] uppercase tracking-[0.15em] text-white/80">
                      {ingredient.origin}
                    </p>
                  </div>
                </div>

                {/* Text info */}
                <h3 className="font-heading text-base font-normal text-neutral-900 leading-tight">
                  {ingredient.name}
                </h3>
                <p className="font-body text-xs text-neutral-500 mt-1">
                  {ingredient.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
