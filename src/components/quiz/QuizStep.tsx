'use client'

interface QuizOption {
  id: string
  label: string
  description?: string
}

interface QuizStepProps {
  questionNumber: number
  question: string
  subtitle?: string
  options: QuizOption[]
  selectedId?: string
  onSelect: (id: string) => void
}

export function QuizStep({
  questionNumber,
  question,
  subtitle,
  options,
  selectedId,
  onSelect,
}: QuizStepProps) {
  return (
    <div className="space-y-8">
      {/* Question */}
      <div>
        <p className="font-body text-[10px] uppercase tracking-[0.25em] text-neutral-400 mb-3">
          {String(questionNumber).padStart(2, '0')}
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl font-light leading-tight">
          {question}
        </h2>
        {subtitle && (
          <p className="mt-2 font-body text-sm text-neutral-500">{subtitle}</p>
        )}
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {options.map(option => {
          const isSelected = selectedId === option.id
          return (
            <button
              key={option.id}
              id={`quiz-option-${option.id}`}
              onClick={() => onSelect(option.id)}
              className={`text-left p-5 border transition-all duration-200 group ${
                isSelected
                  ? 'border-black bg-black text-white'
                  : 'border-neutral-200 hover:border-neutral-400 bg-white text-neutral-900'
              }`}
            >
              <p className={`font-body text-sm font-medium ${
                isSelected ? 'text-white' : 'text-neutral-900'
              }`}>
                {option.label}
              </p>
              {option.description && (
                <p className={`mt-1 font-body text-xs ${
                  isSelected ? 'text-neutral-300' : 'text-neutral-500'
                }`}>
                  {option.description}
                </p>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
