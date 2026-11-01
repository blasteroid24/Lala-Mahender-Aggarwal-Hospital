import { MapPin, MessageCircle, Phone, Siren, Stethoscope, type LucideIcon } from 'lucide-react'
import { hospital } from '@/data/site'
import { cn } from '@/lib/utils'
import { btn, container, links } from '../shared'
import { Img } from './ui'

const stagger = (i: number) => ({ animationDelay: `${i * 90}ms` })

export function Hero() {
  return (
    <section
      aria-labelledby="t2-hero-title"
      className="relative isolate flex min-h-[max(560px,calc(100svh-108px))] items-end md:items-center overflow-hidden bg-verdant-900 md:min-h-[max(600px,calc(100svh-144px))] lg:min-h-[max(620px,calc(100svh-156px))]"
    >
      <Img
        src="/img/hero-mobile.webp"
        sizes="100vw"
        alt="A nurse greeting a smiling family in the bright hospital lobby"
        loading="eager"
        fetchPriority="high"
        className="absolute inset-0 -z-20 size-full object-cover object-[62%_35%] md:object-[50%_32%]"
      />
      {/* Soft forest-green wash for legibility: from the left on desktop, from the bottom on mobile */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgb(11_35_27/0.92)_0%,rgb(11_35_27/0.7)_45%,rgb(11_35_27/0.25)_80%)] md:bg-[linear-gradient(to_right,rgb(11_35_27/0.88)_0%,rgb(11_35_27/0.66)_38%,rgb(11_35_27/0.1)_70%,transparent_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 hidden h-1/3 bg-[linear-gradient(to_top,rgb(11_35_27/0.45),transparent)] md:block"
      />

      <div className={cn(container, 'pt-40 pb-24 md:pt-16 md:pb-32')}>
        <div className="max-w-xl text-white">
          <p className="flex animate-fade-up items-center gap-3 text-[11px] font-semibold tracking-[0.14em] text-sand uppercase sm:text-[13px] sm:tracking-[0.2em]">
            <span className="h-px w-8 bg-sand" aria-hidden="true" />
            Multi-speciality Hospital · Since {hospital.established}
          </p>
          <h1
            id="t2-hero-title"
            style={stagger(1)}
            className="mt-5 animate-rise-in font-fraunces text-[38px] leading-[1.08] font-medium tracking-tight text-white sm:text-5xl lg:text-[58px]"
          >
            Where Vision Meets Healing.
          </h1>
          <p style={stagger(2)} className="mt-5 max-w-md animate-rise-in text-base text-white/85 sm:text-lg">
            Three decades of care. A lifetime of conviction.
          </p>
          <div style={stagger(3)} className="mt-8 flex animate-rise-in flex-wrap gap-3">
            <a href={links.call} className={btn.white}>
              <Phone className="size-4" aria-hidden="true" />
              Call us
            </a>
            <a href={links.emergency} className={btn.outlineWhite}>
              <Siren className="size-4" aria-hidden="true" />
              24×7 Emergency
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

type Action = { icon: LucideIcon; label: string; caption: string; href: string; external?: boolean; emphasis?: boolean }

const actions: Action[] = [
  { icon: Siren, label: '24×7 Emergency', caption: hospital.emergencyPhone, href: links.emergency, emphasis: true },
  { icon: Phone, label: 'Call Front Desk', caption: hospital.phone, href: links.call },
  { icon: MessageCircle, label: 'WhatsApp Us', caption: 'Quick replies, all week', href: links.whatsapp, external: true },
  { icon: MapPin, label: 'Get Directions', caption: 'Nagla Baheri, U.P.', href: links.directions, external: true },
  { icon: Stethoscope, label: 'Health Check-ups', caption: 'Enquire on WhatsApp', href: links.checkup, external: true },
]

export function QuickActions() {
  return (
    <div className={cn(container, 'relative z-10 -mt-16 md:-mt-14')}>
      <nav
        aria-label="Quick actions"
        className="overflow-hidden rounded-2xl border border-[#e3ebe6] bg-white shadow-[0_2px_4px_rgb(23_61_49/0.04),0_24px_48px_-20px_rgb(23_61_49/0.25)]"
      >
        <ul className="grid grid-cols-2 lg:grid-cols-5">
          {actions.map((a, i) => (
            <li
              key={a.label}
              className={cn(
                'border-[#e3ebe6]',
                a.emphasis ? 'col-span-2 border-b lg:col-span-1 lg:border-b-0' : '',
                // inner borders: mobile 2-col grid, desktop single row
                i > 0 && i % 2 === 0 ? 'border-l' : '',
                i > 0 && i < 3 ? 'border-b lg:border-b-0' : '',
                'lg:border-l lg:first:border-l-0',
              )}
            >
              <a
                href={a.href}
                {...(a.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className={cn(
                  'group flex h-full gap-3 px-4 py-4 transition hover:bg-verdant-50 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-verdant-600 sm:items-center sm:gap-3.5 sm:px-5 lg:py-6',
                  a.emphasis ? 'items-center' : 'flex-col sm:flex-row',
                )}
                >
                <span
                  className={cn(
                    'grid size-11 shrink-0 place-items-center rounded-full transition',
                    a.emphasis ? 'bg-verdant-700 text-white' : 'bg-sage text-verdant-700 group-hover:bg-white',
                  )}
                >
                  <a.icon className="size-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[15px] leading-tight font-semibold text-[#1d2b26]">{a.label}</span>
                  <span className="mt-1 block text-[13px] sm:truncate text-[#5b6b64]">{a.caption}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
