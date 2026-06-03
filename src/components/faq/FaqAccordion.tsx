'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { FaqCategory } from '@/data/faq'

interface FaqAccordionProps {
  categories: FaqCategory[]
}

export function FaqAccordion({ categories }: FaqAccordionProps) {
  return (
    <div className="space-y-10">
      {categories.map((category, catIndex) => (
        <div key={category.title} id={category.title.toLowerCase().replace(/\s+/g, '-')}>
          {/* Category title */}
          <div className="flex items-baseline gap-3 mb-4">
            <p className="font-body text-[10px] uppercase tracking-[0.2em] text-neutral-400">
              {String(catIndex + 1).padStart(2, '0')}
            </p>
            <h2 className="font-heading text-2xl font-light">{category.title}</h2>
          </div>

          {/* Accordion */}
          <Accordion className="w-full">
            {category.items.map((item, itemIndex) => (
              <AccordionItem
                key={itemIndex}
                value={`${category.title}-${itemIndex}`}
                className="border-b border-neutral-200"
              >
                <AccordionTrigger className="font-body text-sm text-neutral-900 hover:no-underline py-5 text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <div
                    className="font-body text-sm text-neutral-600 leading-relaxed prose prose-sm max-w-none
                      prose-strong:text-neutral-900 prose-strong:font-medium
                      prose-ul:list-disc prose-ul:pl-4 prose-ul:space-y-1
                      prose-ol:list-decimal prose-ol:pl-4 prose-ol:space-y-1"
                    dangerouslySetInnerHTML={{
                      __html: item.answer
                        .replace(/\n\n/g, '<br/><br/>')
                        .replace(/\n•/g, '<br/>•')
                        .replace(/\n(\d+\.)/g, '<br/>$1')
                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    }}
                  />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      ))}
    </div>
  )
}
