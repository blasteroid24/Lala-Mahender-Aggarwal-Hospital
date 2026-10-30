import { useEffect, useRef } from 'react'
import { AnimatePresence, m } from 'motion/react'
import { ShieldCheck, X } from 'lucide-react'
import { BookingForm } from './BookingForm'
import type { BookingPreset } from './BookingProvider'

type BookingDialogProps = {
  open: boolean
  preset: BookingPreset
  onClose: () => void
}

export function BookingDialog({ open, preset, onClose }: BookingDialogProps) {
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    panelRef.current?.focus()
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-6">
          <m.div
            className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <m.div
            ref={panelRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-title"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.98 }}
            transition={{ type: 'spring', damping: 30, stiffness: 320 }}
            className="relative max-h-[92dvh] w-full max-w-xl overflow-y-auto rounded-t-[28px] bg-white p-6 shadow-lift outline-none sm:rounded-[28px] sm:p-8"
          >
            <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-line sm:hidden" />
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <h2 id="booking-title" className="text-2xl sm:text-[28px]">
                  Book an <span className="serif-accent text-brand-600">appointment</span>
                </h2>
                <p className="mt-1.5 flex items-center gap-1.5 text-sm text-muted">
                  <ShieldCheck className="size-4 text-mint-500" />
                  Takes under a minute · Your details stay private
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="grid size-10 shrink-0 place-items-center rounded-full bg-canvas text-ink-soft transition hover:rotate-90 hover:bg-line"
              >
                <X className="size-5" />
              </button>
            </div>
            <BookingForm preset={preset} onDone={onClose} compact />
          </m.div>
        </div>
      )}
    </AnimatePresence>
  )
}
