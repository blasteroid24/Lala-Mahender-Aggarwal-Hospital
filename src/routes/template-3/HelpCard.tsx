import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa6'
import { ArrowRight, MapPin, Phone, Search } from 'lucide-react'
import { hospital, specialities } from '@/data/site'
import { cn } from '@/lib/utils'
import { callHref, container, directionsHref, headingCls, whatsappHref } from './links'

/** Best speciality for a free-text query: exact name, then name, then any text. */
function findSpeciality(q: string) {
  const needle = q.trim().toLowerCase()
  if (!needle) return undefined
  return (
    specialities.find((s) => s.name.toLowerCase() === needle) ??
    specialities.find((s) => s.name.toLowerCase().includes(needle)) ??
    specialities.find((s) => [s.short, s.description, ...s.highlights].some((t) => t.toLowerCase().includes(needle)))
  )
}

const quick = [
  { label: 'Call us', sub: hospital.phone, href: callHref, Icon: Phone, external: false },
  { label: 'WhatsApp', sub: 'Chat with our desk', href: whatsappHref, Icon: FaWhatsapp, external: true },
  { label: 'Directions', sub: 'Find the hospital', href: directionsHref, Icon: MapPin, external: true },
]

export function HelpCard() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    const match = findSpeciality(query)
    navigate(match ? `/specialities#${match.slug}` : '/specialities')
  }

  return (
    <section aria-labelledby="t3-help" className="relative z-20">
      <div className={container}>
        <div className="-mt-12 rounded-2xl border border-navy-100 bg-white p-6 shadow-lift sm:p-8 lg:-mt-20 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.25fr_1fr] lg:gap-12">
            <div>
              <h2 id="t3-help" className={cn(headingCls, 'text-[24px] leading-tight sm:text-[28px]')}>
                How can we help you today?
              </h2>
              <p className="mt-2 text-[15px] text-navy-900/75">Search our specialities, or reach our front desk directly.</p>
              <form onSubmit={onSubmit} role="search" className="mt-5 flex flex-col gap-3 sm:flex-row">
                <label htmlFor="t3-spec-search" className="sr-only">
                  Search a speciality or condition
                </label>
                <div className="relative flex-1">
                  <Search className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-navy-400" aria-hidden="true" />
                  <input
                    id="t3-spec-search"
                    type="search"
                    list="t3-spec-list"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="e.g. Cardiology, MRI, knee"
                    autoComplete="off"
                    className="h-[52px] w-full rounded-lg border border-navy-200 bg-white pr-4 pl-12 text-[15px] text-navy-900 placeholder:text-navy-900/50 focus:border-navy-500 focus:ring-4 focus:ring-navy-100 focus:outline-none"
                  />
                  <datalist id="t3-spec-list">
                    {specialities.map((s) => (
                      <option key={s.slug} value={s.name} />
                    ))}
                  </datalist>
                </div>
                <button
                  type="submit"
                  className="inline-flex h-[52px] items-center justify-center gap-2 rounded-lg bg-navy-700 px-6 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
                >
                  Search
                  <ArrowRight className="size-4" aria-hidden="true" />
                </button>
              </form>
            </div>

            <ul className="grid gap-3 sm:grid-cols-3 lg:border-l lg:border-navy-100 lg:pl-12">
              {quick.map(({ label, sub, href, Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                    className="group flex h-full items-center gap-4 rounded-xl border border-navy-100 bg-navy-50 p-4 transition-colors hover:border-navy-300 hover:bg-white sm:flex-col sm:items-start sm:gap-3 lg:justify-center"
                  >
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-navy-700 ring-1 ring-navy-100 transition-colors group-hover:bg-navy-700 group-hover:text-white">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="leading-tight">
                      <span className="block font-montserrat text-[15px] font-semibold text-navy-900">{label}</span>
                      <span className="mt-1 block text-[13px] text-navy-900/70">{sub}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
