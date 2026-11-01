import { useEffect, useState, type KeyboardEvent, type ReactNode } from 'react'
import { useReducedMotion } from 'motion/react'
import { ChevronLeft, ChevronRight, Pause, Phone, Play, Siren } from 'lucide-react'
import { hospital } from '@/data/site'
import { cn, srcSet } from '@/lib/utils'
import { btnCoral, btnNavy, callHref, container, emergencyHref, headingCls } from './links'

const INTERVAL = 6000

/* Bottom padding leaves room for the slider controls and the overlapping help card. */
const slidePad = 'pt-12 pb-44 sm:pt-16 md:pb-36 lg:pt-20 lg:pb-48'

function SlideBanner() {
  return (
    <div className="relative h-full overflow-hidden bg-navy-800 md:min-h-[560px] lg:min-h-[600px]">
      {/* Phones: photo on top, copy below on navy. md+: full-bleed photo with copy on the left. */}
      <div className="relative h-[230px] sm:h-[320px] md:absolute md:inset-0 md:h-auto">
        <img
          src="/img/banner.webp"
          srcSet={`${srcSet('/img/banner.webp')}, /img/banner.webp 2000w`}
          sizes="100vw"
          width={2000}
          height={1091}
          fetchPriority="high"
          alt="A doctor in a warm conversation with a mother and her young daughter"
          className="size-full object-cover object-[85%_15%] md:object-[100%_0%]"
        />
        {/* Navy wash keeps the copy legible. Top-anchored image + this wash also hide the
            photo's bottom-right corner watermark (the help card covers it on desktop). */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-navy-800 from-5% via-navy-800/20 via-40% to-transparent md:bg-gradient-to-r md:from-navy-950/95 md:from-0% md:via-navy-800/75 md:via-50% md:to-navy-800/0 lg:from-navy-950/90 lg:via-navy-800/55"
        />
      </div>
      <div className={cn(container, 'relative pt-2 pb-44 md:flex md:min-h-[inherit] md:items-center md:pt-16 md:pb-36 lg:pt-20 lg:pb-48')}>
        <div className="max-w-xl text-white">
          <p className="animate-rise-in text-[13px] font-semibold tracking-[0.16em] text-white/80 uppercase">
            {hospital.tagline} · Since {hospital.established}
          </p>
          <h1
            className="animate-rise-in mt-4 font-montserrat text-[34px] leading-[1.12] font-semibold tracking-tight text-white sm:text-[44px] lg:text-[54px]"
            style={{ animationDelay: '80ms' }}
          >
            Care you can count on. Every single day.
          </h1>
          <p className="animate-rise-in mt-5 max-w-lg text-[16px] leading-relaxed text-white/85 md:text-[17px]" style={{ animationDelay: '160ms' }}>
            Experienced specialists, modern facilities and an emergency team that never closes — all under one roof, close to home.
          </p>
          <div className="animate-rise-in mt-8 flex flex-wrap gap-3" style={{ animationDelay: '240ms' }}>
            <a href={callHref} className={cn(btnNavy, 'bg-white text-navy-700 hover:bg-navy-50')}>
              <Phone className="size-4" aria-hidden="true" />
              Call us
            </a>
            <a href={emergencyHref} className={btnCoral}>
              <Siren className="size-4" aria-hidden="true" />
              Emergency
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function SplitSlide({
  bg,
  img,
  alt,
  children,
}: {
  bg: string
  img: string
  alt: string
  children: ReactNode
}) {
  return (
    <div className={cn('h-full md:min-h-[560px] lg:min-h-[600px]', bg)}>
      <div className={cn(container, slidePad, 'grid h-full items-center gap-8 md:grid-cols-2 lg:gap-14')}>
        <div className="max-w-xl">{children}</div>
        <img
          src={img}
          srcSet={srcSet(img)}
          sizes="(min-width: 1280px) 600px, (min-width: 768px) 46vw, 100vw"
          width={1024}
          height={1024}
          loading="lazy"
          alt={alt}
          className="hidden aspect-[4/3] w-full rounded-2xl object-cover shadow-lift sm:block"
        />
      </div>
    </div>
  )
}

const slides = [
  { label: 'Care you can count on', render: () => <SlideBanner /> },
  {
    label: 'Advanced technology',
    render: () => (
      <SplitSlide bg="bg-navy-50" img="/img/tech2.webp" alt="A technologist preparing a patient scan beside a 3T MRI machine">
        <p className="text-[13px] font-semibold tracking-[0.16em] text-navy-600 uppercase">Technology</p>
        <h2 className={cn(headingCls, 'mt-4 text-[32px] leading-[1.15] sm:text-[40px] lg:text-[48px]')}>
          Advanced technology. Human attention.
        </h2>
        <p className="mt-5 text-[16px] leading-relaxed text-navy-900/75 md:text-[17px]">
          3T MRI and 128-slice CT, a 24/7 cath lab and fully equipped ICUs — with specialists who take the time to explain every result.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#facilities" className={btnNavy}>
            Explore our facilities
          </a>
          <a href={callHref} className="inline-flex items-center gap-2 rounded-lg border border-navy-700 px-5 py-3 text-sm font-semibold text-navy-700 hover:bg-navy-700 hover:text-white">
            <Phone className="size-4" aria-hidden="true" />
            Call us
          </a>
        </div>
      </SplitSlide>
    ),
  },
  {
    label: '24 × 7 Emergency',
    render: () => (
      <SplitSlide bg="bg-white" img="/img/hero_friendly.webp" alt="A doctor smiling with a young girl and her mother in a clinic">
        <p className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.16em] text-coral-600 uppercase">
          <Siren className="size-4" aria-hidden="true" />
          {hospital.hours.emergency}
        </p>
        <h2 className={cn(headingCls, 'mt-4 text-[32px] leading-[1.15] sm:text-[40px] lg:text-[46px]')}>
          24 × 7 Emergency & Trauma — <span className="text-coral-600">we’re ready when you need us most.</span>
        </h2>
        <p className="mt-5 text-[16px] leading-relaxed text-navy-900/75 md:text-[17px]">
          Emergency physicians, an ICU and life-support ambulances on standby, every hour of every day.
        </p>
        <a href={emergencyHref} className="mt-8 inline-flex items-center gap-4 rounded-xl bg-coral-600 px-6 py-4 text-white transition-colors hover:bg-coral-700">
          <Siren className="size-7" aria-hidden="true" />
          <span className="text-left leading-tight">
            <span className="block text-xs font-semibold tracking-wider uppercase opacity-90">Emergency helpline</span>
            <span className="block font-montserrat text-[22px] font-semibold sm:text-2xl">{hospital.emergencyPhone}</span>
          </span>
        </a>
      </SplitSlide>
    ),
  },
]

export function HeroSlider() {
  const [index, setIndex] = useState(0)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [stopped, setStopped] = useState(false)
  const reduce = useReducedMotion()
  const n = slides.length
  const playing = !stopped && !reduce

  useEffect(() => {
    if (!playing || hovered || focused) return
    const t = window.setTimeout(() => setIndex((i) => (i + 1) % n), INTERVAL)
    return () => window.clearTimeout(t)
  }, [index, playing, hovered, focused, n])

  const go = (i: number) => setIndex((i + n) % n)

  function onKeyDown(e: KeyboardEvent) {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      go(index - 1)
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      go(index + 1)
    }
  }

  const ctrl =
    'inline-flex size-10 items-center justify-center rounded-full text-navy-700 transition-colors hover:bg-navy-100'

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Hospital highlights"
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setFocused(false)
      }}
      onKeyDown={onKeyDown}
    >
      <div className="grid" aria-live={playing && !hovered && !focused ? 'off' : 'polite'}>
        {slides.map((s, i) => {
          const active = i === index
          return (
            <div
              key={s.label}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${n}: ${s.label}`}
              aria-hidden={!active}
              inert={!active}
              className={cn(
                '[grid-area:1/1] transition-[opacity,visibility] duration-700 ease-out motion-reduce:transition-none',
                active ? 'visible z-[1] opacity-100' : 'invisible opacity-0',
              )}
            >
              {s.render()}
            </div>
          )
        })}
      </div>

      {/* Controls */}
      <div className="pointer-events-none absolute inset-x-0 bottom-16 z-10 lg:bottom-28">
        <div className={container}>
          <div className="pointer-events-auto inline-flex items-center gap-1 rounded-full bg-white p-1 shadow-soft ring-1 ring-navy-100">
            <button type="button" className={ctrl} onClick={() => go(index - 1)} aria-label="Previous slide">
              <ChevronLeft className="size-5" aria-hidden="true" />
            </button>
            <div className="flex items-center gap-1 px-1">
              {slides.map((s, i) => (
                <button
                  key={s.label}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Show slide ${i + 1}: ${s.label}`}
                  aria-current={i === index ? 'true' : undefined}
                  className="group inline-flex h-10 items-center px-1"
                >
                  <span
                    className={cn(
                      'block h-2 rounded-full transition-all duration-300',
                      i === index ? 'w-7 bg-navy-700' : 'w-2 bg-navy-200 group-hover:bg-navy-400',
                    )}
                  />
                </button>
              ))}
            </div>
            <button type="button" className={ctrl} onClick={() => go(index + 1)} aria-label="Next slide">
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>
            <button
                type="button"
                className={cn(ctrl, 'border-l border-navy-100 motion-reduce:hidden')}
                onClick={() => setStopped((v) => !v)}
                aria-label={stopped ? 'Start automatic slide show' : 'Stop automatic slide show'}
              >
                {stopped ? <Play className="size-4" aria-hidden="true" /> : <Pause className="size-4" aria-hidden="true" />}
              </button>
          </div>
        </div>
      </div>
    </section>
  )
}
