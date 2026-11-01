import { useId, useState } from 'react'
import { Minus, Phone, Plus } from 'lucide-react'
import { faqs, hospital } from '@/data/site'
import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/lib/utils'
import { callHref, container, headingCls } from './links'

// Booking isn't offered on the site, so leave out questions about appointments
const items = faqs.filter((f) => !/appointment|book/i.test(`${f.q} ${f.a}`))

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  const uid = useId()

  return (
    <section id="faq" aria-labelledby="t3-faq" className="bg-white py-16 md:py-24">
      <div className={cn(container, 'grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16')}>
        <Reveal>
          <p className="flex items-center gap-2.5 text-[13px] font-semibold tracking-[0.14em] text-navy-600 uppercase">
            <span aria-hidden="true" className="h-0.5 w-6 rounded-full bg-coral-500" />
            FAQ
          </p>
          <h2 id="t3-faq" className={cn(headingCls, 'mt-3 text-[30px] leading-tight md:text-[38px]')}>
            Frequently asked questions
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-navy-900/75 md:text-base">
            Can’t find what you’re looking for? Our front desk is happy to help.
          </p>
          <a
            href={callHref}
            className="mt-6 inline-flex items-center gap-3 rounded-xl border border-navy-100 bg-navy-50 px-5 py-4 transition-colors hover:border-navy-300"
          >
            <span className="inline-flex size-10 items-center justify-center rounded-full bg-navy-700 text-white">
              <Phone className="size-4" aria-hidden="true" />
            </span>
            <span className="leading-tight">
              <span className="block text-[13px] text-navy-900/70">Front desk</span>
              <span className="block font-montserrat text-[17px] font-semibold text-navy-900">{hospital.phone}</span>
            </span>
          </a>
        </Reveal>

        <Reveal delay={0.05}>
          <ul className="divide-y divide-navy-100 border-y border-navy-100">
            {items.map((f, i) => {
              const isOpen = open === i
              const btnId = `${uid}-q${i}`
              const panelId = `${uid}-a${i}`
              return (
                <li key={f.q}>
                  <h3>
                    <button
                      id={btnId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-6 py-5 text-left font-montserrat text-[16.5px] font-semibold text-navy-900 transition-colors hover:text-navy-600 md:text-[17px]"
                    >
                      {f.q}
                      <span
                        className={cn(
                          'inline-flex size-8 shrink-0 items-center justify-center rounded-full transition-colors',
                          isOpen ? 'bg-navy-700 text-white' : 'bg-navy-50 text-navy-700',
                        )}
                        aria-hidden="true"
                      >
                        {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    inert={!isOpen}
                    className={cn(
                      'grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none',
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className={cn('max-w-2xl pr-12 pb-5 text-[15px] leading-relaxed text-navy-900/75 md:text-base', !isOpen && 'invisible')}>
                        {f.a}
                      </p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
