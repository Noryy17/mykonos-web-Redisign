'use client'

interface QuizProgressProps {
  current: number
  total: number
}

export function QuizProgress({ current, total }: QuizProgressProps) {
  const percentage = (current / total) * 100

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <p className="font-body text-xs text-neutral-500">
          Pertanyaan {current} dari {total}
        </p>
        <p className="font-body text-xs text-neutral-400">
          {Math.round(percentage)}%
        </p>
      </div>
      <div className="h-0.5 bg-neutral-200 w-full overflow-hidden">
        <div
          className="h-full bg-black transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
