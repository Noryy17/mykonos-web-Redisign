'use client'

import { useState, useMemo } from 'react'
import { QuizStep } from '@/components/quiz/QuizStep'
import { QuizProgress } from '@/components/quiz/QuizProgress'
import { QuizResult } from '@/components/quiz/QuizResult'
import { products } from '@/data/products'
import { Product, ScentFamily, Occasion } from '@/types/product'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const quizQuestions = [
  {
    id: 'occasion',
    question: 'Kapan kamu paling sering memakai parfum?',
    subtitle: 'Pilih yang paling sesuai dengan kebiasaanmu',
    options: [
      { id: 'casual', label: 'Santai & Weekend', description: 'Nongkrong, jalan-jalan, hangout santai' },
      { id: 'everyday', label: 'Sehari-hari', description: 'Ngantor, kuliah, aktivitas harian' },
      { id: 'formal', label: 'Acara Formal', description: 'Meeting penting, dinner, gathering profesional' },
      { id: 'special', label: 'Momen Spesial', description: 'Date night, anniversary, pesta besar' },
    ],
  },
  {
    id: 'vibe',
    question: 'Vibe apa yang ingin kamu pancarkan?',
    subtitle: 'Kesan pertama yang ingin orang lain rasakan',
    options: [
      { id: 'fresh', label: 'Segar & Bersih', description: 'Clean, ringan, seperti baru mandi' },
      { id: 'warm', label: 'Hangat & Nyaman', description: 'Cozy, inviting, seperti pelukan' },
      { id: 'mysterious', label: 'Misterius & Bold', description: 'Intens, memikat, meninggalkan jejak' },
      { id: 'romantic', label: 'Romantis & Anggun', description: 'Feminin, elegan, penuh pesona' },
    ],
  },
  {
    id: 'temperature',
    question: 'Kamu lebih suka aroma yang...',
    subtitle: 'Ini membantu kami menentukan karakter dasar parfummu',
    options: [
      { id: 'cool', label: 'Sejuk & Segar', description: 'Citrus, aquatic, green — bikin melek' },
      { id: 'warm', label: 'Hangat & Dalam', description: 'Amber, vanilla, wood — bikin tenang' },
      { id: 'balanced', label: 'Seimbang', description: 'Mix keduanya — tidak terlalu segar, tidak terlalu berat' },
    ],
  },
  {
    id: 'intensity',
    question: 'Seberapa kuat parfum yang kamu inginkan?',
    subtitle: 'Projection menentukan seberapa jauh aroma tercium',
    options: [
      { id: 'light', label: 'Ringan & Subtle', description: 'Hanya tercium saat orang mendekat' },
      { id: 'moderate', label: 'Sedang', description: 'Tercium di sekitar area personal' },
      { id: 'strong', label: 'Kuat & Bold', description: 'Meninggalkan jejak di mana pun kamu pergi' },
    ],
  },
  {
    id: 'likes',
    question: 'Aroma apa yang paling kamu suka?',
    subtitle: 'Pilih kategori yang paling menarik',
    options: [
      { id: 'floral', label: 'Bunga-bungaan', description: 'Mawar, melati, peony, lily' },
      { id: 'woody', label: 'Kayu & Earthy', description: 'Cedar, sandalwood, vetiver, oud' },
      { id: 'citrus', label: 'Citrus & Fruity', description: 'Lemon, bergamot, grapefruit, peach' },
      { id: 'spicy', label: 'Rempah & Oriental', description: 'Saffron, cardamom, vanilla, amber' },
    ],
  },
  {
    id: 'dislikes',
    question: 'Aroma apa yang ingin kamu hindari?',
    subtitle: 'Opsional — bantu kami filter yang tidak cocok',
    options: [
      { id: 'sweet', label: 'Terlalu Manis', description: 'Vanilla, caramel yang berlebihan' },
      { id: 'heavy', label: 'Terlalu Berat', description: 'Oud, leather, incense yang intens' },
      { id: 'floral', label: 'Terlalu Floral', description: 'Bunga yang kuat dan overwhelming' },
      { id: 'none', label: 'Tidak Ada', description: 'Aku terbuka dengan semua aroma' },
    ],
  },
]

function getRecommendations(answers: Record<string, string>): { products: Product[]; reasons: Record<string, string> } {
  const scored = products.map(product => {
    let score = 0
    const reasonParts: string[] = []

    // Occasion matching
    const occasionMap: Record<string, Occasion> = { casual: 'Casual', everyday: 'Everyday', formal: 'Formal', special: 'Special' }
    const targetOccasion = occasionMap[answers.occasion]
    if (targetOccasion && product.occasions.includes(targetOccasion)) {
      score += 3
      reasonParts.push(`Cocok untuk ${targetOccasion.toLowerCase()}`)
    }

    // Vibe matching
    const vibeToFamily: Record<string, ScentFamily[]> = {
      fresh: ['Fresh'],
      warm: ['Woody', 'Oriental'],
      mysterious: ['Oriental', 'Woody'],
      romantic: ['Floral'],
    }
    const targetFamilies = vibeToFamily[answers.vibe] || []
    if (targetFamilies.some(f => product.scentFamily.includes(f))) {
      score += 3
      reasonParts.push(`Vibe yang sesuai dengan seleramu`)
    }

    // Temperature matching
    if (answers.temperature === 'cool' && product.scentFamily.includes('Fresh')) {
      score += 2
      reasonParts.push(`Karakter segar dan clean`)
    } else if (answers.temperature === 'warm' && (product.scentFamily.includes('Oriental') || product.scentFamily.includes('Woody'))) {
      score += 2
      reasonParts.push(`Karakter hangat dan dalam`)
    } else if (answers.temperature === 'balanced') {
      score += 1
    }

    // Likes matching
    const likesToNotes: Record<string, string[]> = {
      floral: ['Rose', 'Jasmine', 'Peony', 'Lily', 'Magnolia'],
      woody: ['Cedar', 'Sandalwood', 'Vetiver', 'Oud', 'Patchouli'],
      citrus: ['Bergamot', 'Lemon', 'Grapefruit', 'Orange', 'Lime'],
      spicy: ['Saffron', 'Cardamom', 'Cinnamon', 'Black Pepper', 'Vanilla'],
    }
    const likedNotes = likesToNotes[answers.likes] || []
    const matchingNotes = product.notes.filter(n => likedNotes.includes(n.name)).map(n => n.name)
    if (matchingNotes.length > 0) {
      score += matchingNotes.length
      reasonParts.push(`Mengandung ${matchingNotes.slice(0, 2).join(' dan ')} yang kamu suka`)
    }

    // Dislikes filtering
    const dislikeNoteMap: Record<string, string[]> = {
      sweet: ['Vanilla', 'Caramel', 'Honey', 'Tonka Bean'],
      heavy: ['Oud', 'Leather', 'Incense', 'Tobacco'],
      floral: ['Rose', 'Jasmine', 'Tuberose', 'Ylang-Ylang'],
    }
    const dislikedNotes = dislikeNoteMap[answers.dislikes] || []
    const hasDisliked = product.notes.some(n => dislikedNotes.includes(n.name))
    if (hasDisliked && answers.dislikes !== 'none') {
      score -= 2
    }

    // In-stock bonus
    if (product.inStock) score += 1
    // Best seller bonus
    if (product.isBestSeller) score += 1

    return {
      product,
      score,
      reason: reasonParts.join('. ') + (reasonParts.length > 0 ? '.' : product.tagline),
    }
  })

  scored.sort((a, b) => b.score - a.score)
  const top = scored.slice(0, 5)
  const reasons: Record<string, string> = {}
  top.forEach(item => { reasons[item.product.id] = item.reason })

  return { products: top.map(t => t.product), reasons }
}

export default function FindYourScentPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showResults, setShowResults] = useState(false)

  const totalSteps = quizQuestions.length
  const currentQuestion = quizQuestions[currentStep]
  const isLastStep = currentStep === totalSteps - 1
  const hasCurrentAnswer = currentQuestion ? !!answers[currentQuestion.id] : false

  const results = useMemo(() => {
    if (!showResults) return null
    return getRecommendations(answers)
  }, [showResults, answers])

  const handleSelect = (optionId: string) => {
    if (!currentQuestion) return
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: optionId }))
  }

  const handleNext = () => {
    if (isLastStep) {
      setShowResults(true)
    } else {
      setCurrentStep(prev => prev + 1)
    }
  }

  const handleBack = () => {
    if (showResults) {
      setShowResults(false)
    } else {
      setCurrentStep(prev => Math.max(0, prev - 1))
    }
  }

  const handleRestart = () => {
    setCurrentStep(0)
    setAnswers({})
    setShowResults(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-black text-white py-12 sm:py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 text-center">
          <p className="font-body text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-3">
            Guided Discovery
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl font-light tracking-wide">
            Find Your Scent
          </h1>
          <p className="mt-3 font-body text-sm text-neutral-400 max-w-md mx-auto">
            Jawab {totalSteps} pertanyaan singkat dan temukan parfum yang paling cocok dengan kepribadianmu.
          </p>
        </div>
      </div>

      {/* Quiz content */}
      <div className="mx-auto max-w-2xl px-4 sm:px-6 py-10 sm:py-16">
        {!showResults ? (
          <>
            {/* Progress */}
            <QuizProgress current={currentStep + 1} total={totalSteps} />

            {/* Question */}
            <div className="mt-10">
              <QuizStep
                questionNumber={currentStep + 1}
                question={currentQuestion.question}
                subtitle={currentQuestion.subtitle}
                options={currentQuestion.options}
                selectedId={answers[currentQuestion.id]}
                onSelect={handleSelect}
              />
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-10 pt-6 border-t border-neutral-200">
              <button
                onClick={handleBack}
                disabled={currentStep === 0}
                className="inline-flex items-center gap-2 font-body text-sm text-neutral-500 hover:text-neutral-900 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ArrowLeft className="h-4 w-4" />
                Kembali
              </button>

              <Button
                onClick={handleNext}
                disabled={!hasCurrentAnswer}
                className="rounded-none bg-black text-white hover:bg-neutral-800 font-body text-xs uppercase tracking-[0.15em] h-11 px-6 disabled:opacity-30"
              >
                {isLastStep ? 'Lihat Hasil' : 'Lanjut'}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </>
        ) : (
          results && (
            <>
              <QuizResult products={results.products} reasons={results.reasons} />
              <div className="mt-6 text-center">
                <button
                  onClick={handleRestart}
                  className="font-body text-xs text-neutral-500 underline underline-offset-4 hover:text-neutral-900 transition-colors"
                >
                  Mulai dari awal
                </button>
              </div>
            </>
          )
        )}
      </div>
    </div>
  )
}
