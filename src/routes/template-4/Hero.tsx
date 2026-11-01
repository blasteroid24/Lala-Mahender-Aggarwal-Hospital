import { CalendarHeart, Phone, ShieldCheck, Siren, Stethoscope } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa6'
import { hospital, specialities } from '@/data/site'
import { cn, srcSet } from '@/lib/utils'
import { CALL, EMERGENCY, WHATSAPP, btn, container } from './constants'

const stagger = (i: number) => ({ animationDelay: `${i * 90}ms` })

export function Hero() {
  const facts = [
    { icon: Siren, title: '24×7 Emergency', text: hospital.hours.emergency },
    { icon: CalendarHeart, title: `Since ${hospital.established}`, text: 'Caring for local families' },
    { icon: Stethoscope, title: `${specialities.length} specialities`, text: 'Under one roof' },
    { icon: ShieldCheck, title: 'Cashless insurance desk', text: 'Help with claims & paperwork' },
  ]

  return (
    <>
      <section aria-labelledby="t4-hero-title" className="grid bg-lagoon-700 lg:min-h-[620px] lg:grid-cols-2">
        {/* Photo — on top for mobile, right half on desktop */}
        <div className="relative aspect-[4/3] overflow-hidden bg-lagoon-100 lg:order-2 lg:aspect-auto">
          <img
            src="/img/hero_friendly.webp"
            srcSet={srcSet('/img/hero_friendly.webp')}
            sizes="(min-width: 1024px) 50vw, 100vw"
            width={1024}
            height={1024}
            alt="A doctor smiling with a young girl and her mother during a check-up"
            fetchPriority="high"
            className="absolute inset-0 size-full object-cover object-[60%_30%]"
          />
        </div>

        {/* Colour panel */}
        <div className="relative flex items-center overflow-hidden px-5 py-12 sm:px-8 sm:py-16 lg:order-1 lg:py-20 lg:pr-14 lg:pl-[max(2rem,calc((100vw-1280px)/2+2rem))]">
          <div className="relative max-w-[560px] text-white">
            <p
              className="animate-rise-in inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-[13px] font-medium text-white/90"
              style={stagger(0)}
            >
              <span className="size-2 rounded-full bg-peach-300" aria-hidden="true" />
              Since {hospital.established} · {hospital.tagline}
            </p>
            <h1
              id="t4-hero-title"
              className="animate-rise-in mt-6 font-dm text-[38px] leading-[1.08] font-semibold tracking-[-0.025em] text-white sm:text-[48px] lg:text-[56px]"
              style={stagger(1)}
            >
              Healing, the{' '}
              <span className="relative isolate inline-block">
                human way.
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 -bottom-1 -z-10 h-[6px] rounded-full bg-peach-300 sm:-bottom-1.5 sm:h-[7px]"
                />
              </span>
            </h1>
            <p
              className="animate-rise-in mt-6 max-w-[480px] text-[16px] leading-relaxed text-white/85 sm:text-[17px]"
              style={stagger(2)}
            >
              From a child’s first fever to a grandparent’s heart check-up, {hospital.shortName} has looked after
              families like yours for over three decades — with specialists who listen, and care that feels personal.
            </p>
            <div className="animate-rise-in mt-8 flex flex-wrap gap-3" style={stagger(3)}>
              <a href={CALL} className={cn(btn, 'bg-white text-lagoon-800 hover:bg-lagoon-50 focus-visible:outline-white')}>
                <Phone className="size-4" aria-hidden="true" />
                Call us
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(btn, 'border border-white/60 text-white hover:border-white hover:bg-white/10 focus-visible:outline-white')}
              >
                <FaWhatsapp className="size-[18px]" aria-hidden="true" />
                WhatsApp
              </a>
            </div>
            <a
              href={EMERGENCY}
              className="animate-rise-in mt-8 inline-flex items-center gap-3 rounded-2xl text-[15px] text-white/90 hover:text-white focus-visible:outline-white"
              style={stagger(4)}
            >
              <span className="grid size-9 place-items-center rounded-full bg-[#c8283f] text-white">
                <Siren className="size-[18px]" aria-hidden="true" />
              </span>
              <span>
                Emergency, 24×7: <span className="font-semibold text-white underline-offset-4 hover:underline">{hospital.emergencyPhone}</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Key facts strip */}
      <div className="border-b border-lagoon-100 bg-white">
        <ul
          className={cn(
            container,
            'grid grid-cols-2 divide-lagoon-100 lg:grid-cols-4 lg:divide-x [&>li:nth-child(-n+2)]:border-b [&>li:nth-child(-n+2)]:border-lagoon-100 lg:[&>li:nth-child(-n+2)]:border-b-0',
          )}
        >
          {facts.map(({ icon: Icon, title, text }, i) => (
            <li
              key={title}
              className={cn(
                'flex flex-col items-start gap-2.5 py-5 sm:flex-row sm:items-center sm:gap-4 sm:py-7 lg:px-6 lg:first:pl-0',
                i % 2 === 1 && 'border-l border-lagoon-100 pl-4 sm:pl-6 lg:border-l-0',
              )}
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-lagoon-100 text-lagoon-700 sm:size-11">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-[15px] leading-snug font-semibold text-lagoon-900 sm:text-[16px]">{title}</span>
                <span className="block text-[13px] leading-snug text-lagoon-900/65 sm:text-[14px]">{text}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
