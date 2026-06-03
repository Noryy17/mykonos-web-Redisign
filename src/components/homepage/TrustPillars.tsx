'use client'

import { motion, Variants } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import { LucideProps } from 'lucide-react'
import { ComponentType } from 'react'

function PillarIcon({ iconName, ...props }: { iconName: string } & LucideProps) {
  const Icon = (LucideIcons as unknown as Record<string, ComponentType<LucideProps>>)[iconName]
  if (!Icon) {
    const Fallback = LucideIcons.Star
    return <Fallback {...props} />
  }
  return <Icon {...props} />
}

const trustPillars = [
  {
    icon: 'ShieldCheck',
    title: 'BPOM Approved',
    description: 'Semua produk telah terdaftar dan aman digunakan',
  },
  {
    icon: 'Heart',
    title: 'Cruelty-Free',
    description: 'Tidak diuji pada hewan, formulasi etis',
  },
  {
    icon: 'Sparkles',
    title: 'Extrait de Parfum',
    description: 'Konsentrasi tinggi, tahan 8–12 jam di kulit',
  },
  {
    icon: 'MapPin',
    title: 'Proudly Local',
    description: 'Brand Indonesia, dibuat dengan standar internasional',
  },
]

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.1 } },
}

export function TrustPillars() {
  return (
    <section className="py-16 sm:py-24 bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <p className="font-body text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-2">
              Mengapa Mykonos
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-light">
              Komitmen Kami
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {trustPillars.map((pillar) => (
              <motion.div
                key={pillar.title}
                variants={fadeInUp}
                className="p-6 sm:p-8 border border-neutral-800 hover:border-neutral-600 transition-colors group"
              >
                <PillarIcon
                  iconName={pillar.icon}
                  className="h-6 w-6 text-neutral-500 group-hover:text-white transition-colors mb-5"
                />
                <h3 className="font-heading text-xl sm:text-2xl font-light text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="font-body text-xs text-neutral-400 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
