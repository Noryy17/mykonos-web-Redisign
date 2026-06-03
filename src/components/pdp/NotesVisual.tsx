'use client'

import { Note } from '@/types/product'
import * as LucideIcons from 'lucide-react'
import { LucideProps } from 'lucide-react'
import { ComponentType } from 'react'

interface NotesVisualProps {
  notes: Note[]
}

function NoteIcon({ iconName, ...props }: { iconName: string } & LucideProps) {
  const Icon = (LucideIcons as unknown as Record<string, ComponentType<LucideProps>>)[iconName]
  if (!Icon) {
    const Fallback = LucideIcons.Droplets
    return <Fallback {...props} />
  }
  return <Icon {...props} />
}

export function NotesVisual({ notes }: NotesVisualProps) {
  const topNotes = notes.filter(n => n.layer === 'top')
  const middleNotes = notes.filter(n => n.layer === 'middle')
  const baseNotes = notes.filter(n => n.layer === 'base')

  const layers = [
    { label: 'Top Notes', sublabel: 'Kesan pertama · 15–30 menit', notes: topNotes, opacity: 'opacity-100' },
    { label: 'Middle Notes', sublabel: 'Karakter utama · 30 menit – 2 jam', notes: middleNotes, opacity: 'opacity-90' },
    { label: 'Base Notes', sublabel: 'Kesan terakhir · 2–8 jam', notes: baseNotes, opacity: 'opacity-80' },
  ]

  return (
    <div className="space-y-0">
      {layers.map((layer, index) => (
        <div
          key={layer.label}
          className={`relative border-b border-neutral-200 last:border-b-0 py-6 ${layer.opacity}`}
        >
          {/* Layer label */}
          <div className="flex items-baseline justify-between mb-4">
            <div>
              <p className="font-body text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h4 className="font-heading text-lg font-normal text-neutral-900 mt-0.5">
                {layer.label}
              </h4>
            </div>
            <p className="font-body text-[10px] text-neutral-400">
              {layer.sublabel}
            </p>
          </div>

          {/* Notes chips */}
          <div className="flex flex-wrap gap-2">
            {layer.notes.map(note => (
              <div
                key={note.name}
                className="inline-flex items-center gap-2 px-3 py-2 bg-neutral-50 border border-neutral-200 hover:border-neutral-400 transition-colors group"
              >
                <NoteIcon
                  iconName={note.icon}
                  className="h-3.5 w-3.5 text-neutral-400 group-hover:text-neutral-700 transition-colors"
                />
                <span className="font-body text-xs text-neutral-700">
                  {note.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
