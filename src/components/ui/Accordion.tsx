import { useId, useState } from 'react'
import { AnimatePresence, m } from 'motion/react'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

type Item = { q: string; a: string }

export function Accordion({ items, defaultOpen = 0 }: { items: Item[]; defaultOpen?: number }) {
  const [open, setOpen] = useState(defaultOpen)
  const baseId = useId()

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.q}>
            <button
              id={`${baseId}-h-${i}`}
              aria-expanded={isOpen}
              aria-controls={`${baseId}-p-${i}`}
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="group flex w-full items-center justify-between gap-6 py-5 text-left md:py-6"
            >
              <span className={cn('font-heading text-base font-semibold transition-colors md:text-lg', isOpen ? 'text-brand-700' : 'group-hover:text-brand-700')}>
                {item.q}
              </span>
              <span
                className={cn(
                  'grid size-9 shrink-0 place-items-center rounded-full border transition-all duration-500 ease-out-expo',
                  isOpen ? 'rotate-45 border-brand-600 bg-brand-600 text-white' : 'border-line text-ink-soft group-hover:border-brand-300',
                )}
              >
                <Plus className="size-4" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <m.div
                  id={`${baseId}-p-${i}`}
                  role="region"
                  aria-labelledby={`${baseId}-h-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pr-12 pb-6 text-ink-soft">{item.a}</p>
                </m.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
