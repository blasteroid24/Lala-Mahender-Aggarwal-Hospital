import { useRef, useState, type KeyboardEvent } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'
import { hospital, specialities } from '@/data/site'
import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/lib/utils'
import { SectionHead } from './SectionHead'
import { callHref, container, headingCls, outlineBtn } from './links'

const groups = [
  { id: 'heart-brain', label: 'Heart & Brain', slugs: ['cardiology', 'neurosciences'] },
  { id: 'surgery-cancer', label: 'Surgery & Cancer', slugs: ['oncology', 'orthopaedics', 'gastro'] },
  { id: 'women-children', label: 'Women & Children', slugs: ['gynaecology', 'paediatrics'] },
  { id: 'diagnostics', label: 'Diagnostics & Support', slugs: ['radiology', 'laboratory', 'nephrology', 'ent-eye', 'emergency'] },
].map((g) => ({ ...g, items: specialities.filter((s) => g.slugs.includes(s.slug)) }))

export function Centres() {
  const [active, setActive] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  function onKeyDown(e: KeyboardEvent) {
    const last = groups.length - 1
    let next: number | null = null
    if (e.key === 'ArrowRight') next = active === last ? 0 : active + 1
    else if (e.key === 'ArrowLeft') next = active === 0 ? last : active - 1
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = last
    if (next === null) return
    e.preventDefault()
    setActive(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <section id="centres" aria-labelledby="t3-centres" className="bg-white pt-16 pb-20 md:pt-24 md:pb-24">
      <div className={container}>
        <Reveal>
          <SectionHead
            id="t3-centres"
            eyebrow="Our specialities"
            title="Centres of Excellence"
            desc="Specialist teams working together, so every patient gets coordinated, complete care."
            action={
              <Link to="/specialities" className={outlineBtn}>
                View all specialities
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            }
          />
        </Reveal>

        <Reveal delay={0.05} className="mt-10 md:mt-12">
          <div
            role="tablist"
            aria-label="Speciality groups"
            onKeyDown={onKeyDown}
            className="flex flex-wrap gap-2 border-b border-navy-100 pb-4 md:gap-0 md:pb-0"
          >
            {groups.map((g, i) => {
              const selected = i === active
              return (
                <button
                  key={g.id}
                  ref={(el) => {
                    tabRefs.current[i] = el
                  }}
                  role="tab"
                  type="button"
                  id={`t3-tab-${g.id}`}
                  aria-selected={selected}
                  aria-controls={`t3-panel-${g.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  className={cn(
                    'rounded-full border px-4 py-2 text-[14px] font-semibold transition-colors md:-mb-px md:rounded-none md:border-0 md:border-b-2 md:px-6 md:py-4 md:text-[15px]',
                    selected
                      ? 'border-navy-700 bg-navy-700 text-white md:border-navy-700 md:bg-transparent md:text-navy-700'
                      : 'border-navy-100 text-navy-900/70 hover:text-navy-700 md:border-transparent',
                  )}
                >
                  {g.label}
                  <span className={cn('ml-2 text-xs font-medium', selected ? 'opacity-80' : 'opacity-60')}>{g.items.length}</span>
                </button>
              )
            })}
          </div>

          {groups.map((g, i) => (
            <div
              key={g.id}
              role="tabpanel"
              id={`t3-panel-${g.id}`}
              aria-labelledby={`t3-tab-${g.id}`}
              hidden={i !== active}
              tabIndex={0}
              className="pt-8 focus-visible:rounded-lg"
            >
              <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {g.items.map((s) => (
                  <li key={s.slug}>
                    <article className="group flex h-full flex-col rounded-xl border border-navy-100 bg-white p-6 transition-shadow duration-300 hover:shadow-lift">
                      <span className="inline-flex size-12 items-center justify-center rounded-lg bg-navy-50 text-navy-700 ring-1 ring-navy-100">
                        <s.icon className="size-6" aria-hidden="true" />
                      </span>
                      <h3 className={cn(headingCls, 'mt-5 text-[19px] leading-snug')}>{s.name}</h3>
                      <p className="mt-2 flex-1 text-[15px] leading-relaxed text-navy-900/75">{s.description}</p>
                      <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${s.name} highlights`}>
                        {s.highlights.map((h) => (
                          <li key={h} className="rounded-full bg-navy-50 px-3 py-1 text-[12.5px] font-medium text-navy-700">
                            {h}
                          </li>
                        ))}
                      </ul>
                      <Link
                        to={`/specialities#${s.slug}`}
                        className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-navy-700 hover:text-navy-500"
                      >
                        Learn more<span className="sr-only"> about {s.name}</span>
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                      </Link>
                    </article>
                  </li>
                ))}
                {g.items.length % 3 !== 0 && (
                  <li className={g.items.length % 2 === 0 ? 'sm:max-lg:hidden' : undefined}>
                    <div className="flex h-full flex-col justify-center rounded-xl bg-navy-700 p-6 text-white sm:p-8">
                      <h3 className="font-montserrat text-[20px] leading-snug font-semibold text-white">Not sure which speciality you need?</h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-white/80">
                        Tell our front desk what’s troubling you — we’ll guide you to the right specialist.
                      </p>
                      <a
                        href={callHref}
                        className="mt-6 inline-flex items-center gap-2 self-start rounded-lg bg-white px-5 py-3 text-sm font-semibold text-navy-700 transition-colors hover:bg-navy-50"
                      >
                        <Phone className="size-4" aria-hidden="true" />
                        Call {hospital.phone}
                      </a>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
