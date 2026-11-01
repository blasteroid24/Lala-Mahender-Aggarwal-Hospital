import { useId, useState } from 'react'
import { Minus, Phone, Plus } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa6'
import { faqs, hospital } from '@/data/site'
import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/lib/utils'
import { CALL, WHATSAPP, btn, container, sectionY } from './constants'

// Booking-related questions are left out while online booking is off
const items = faqs.filter((f) => !/appointment|book/i.test(f.q))

function Item({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  const id = useId()
  return (
    <div className="border-b border-lagoon-100 last:border-b-0">
      <h3 className="font-dm text-lagoon-900">
        <button
          type="button"
          id={`${id}-q`}
          aria-expanded={open}
          aria-controls={`${id}-a`}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 rounded-xl py-5 text-left text-[16px] font-semibold tracking-[-0.01em] hover:text-lagoon-700 focus-visible:outline-lagoon-600 sm:text-[17px]"
        >
          {q}
          <span
            className={cn(
              'grid size-8 shrink-0 place-items-center rounded-full transition-colors',
              open ? 'bg-lagoon-600 text-white' : 'bg-lagoon-100 text-lagoon-700',
            )}
          >
            {open ? <Minus className="size-4" aria-hidden="true" /> : <Plus className="size-4" aria-hidden="true" />}
          </span>
        </button>
      </h3>
      <div
        id={`${id}-a`}
        role="region"
        aria-labelledby={`${id}-q`}
        className={cn(
          'grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
        inert={!open}
      >
        <div className="overflow-hidden">
          <p className="pr-12 pb-5 text-[15px] leading-relaxed text-lagoon-900/75 sm:text-[16px]">{a}</p>
        </div>
      </div>
    </div>
  )
}

export function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" aria-labelledby="t4-faq" className={cn('bg-white', sectionY)}>
      <div className={cn(container, 'grid gap-12 lg:grid-cols-12 lg:gap-16')}>
        <div className="lg:col-span-5">
          <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-lagoon-700">
            <span className="h-1.5 w-6 rounded-full bg-peach-300" aria-hidden="true" />
            FAQ
          </p>
          <h2
            id="t4-faq"
            className="font-dm text-[30px] leading-[1.15] font-semibold tracking-[-0.02em] text-lagoon-900 sm:text-[36px] lg:text-[40px]"
          >
            Questions families often ask
          </h2>
          <p className="mt-4 max-w-md text-[16px] leading-relaxed text-lagoon-900/75">
            Can’t find what you’re looking for? Our front desk is happy to help.
          </p>

          <div className="mt-8 rounded-3xl bg-peach-50 p-7 ring-1 ring-peach-100">
            <p className="font-dm text-[19px] font-semibold text-lagoon-900">Talk to a real person</p>
            <p className="mt-1.5 text-[15px] text-lagoon-900/75">OPD: {hospital.hours.opd}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={CALL} className={cn(btn, 'bg-lagoon-600 text-white hover:bg-lagoon-700 focus-visible:outline-lagoon-600')}>
                <Phone className="size-4" aria-hidden="true" />
                {hospital.phone}
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(btn, 'border border-lagoon-200 bg-white text-lagoon-800 hover:border-lagoon-600 focus-visible:outline-lagoon-600')}
              >
                <FaWhatsapp className="size-[18px] text-[#1b8d4a]" aria-hidden="true" />
                WhatsApp us
              </a>
            </div>
          </div>
        </div>

        <Reveal className="lg:col-span-7">
          <div className="rounded-3xl border border-lagoon-100 bg-white px-6 sm:px-8">
            {items.map((f, i) => (
              <Item key={f.q} q={f.q} a={f.a} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
