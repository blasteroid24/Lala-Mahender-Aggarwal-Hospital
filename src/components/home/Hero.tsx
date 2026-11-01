import { useState, type FormEvent } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { m, useReducedMotion } from 'motion/react'
import { ArrowRight, CalendarCheck, Clock, Phone, Search, Siren, Star, Stethoscope } from 'lucide-react'
import { doctors, hospital, quickServices, specialities } from '@/data/site'
import { useBooking } from '@/components/booking/BookingProvider'
import { srcSet } from '@/lib/utils'
import { features } from '@/config/features'

// Staggered CSS entrance delays (ms) for the hero copy
const stagger = (i: number) => ({ animationDelay: `${i * 90}ms` })

function HeartbeatLine() {
  const reduce = useReducedMotion()
  return (
    <svg viewBox="0 0 220 48" className="h-10 w-full" fill="none" aria-hidden="true">
      <m.path
        d="M0 26h52l8-14 10 30 12-38 10 30 6-8h40l6-6 6 6h70"
        stroke="url(#ecg)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: reduce ? 1 : 0 }}
        animate={{ pathLength: 1 }}
        transition={reduce ? undefined : { duration: 2.4, ease: 'easeInOut', repeat: Infinity, repeatDelay: 0.6 }}
      />
      <defs>
        <linearGradient id="ecg" x1="0" x2="1">
          <stop offset="0" stopColor="#e5384f" stopOpacity="0.2" />
          <stop offset="0.5" stopColor="#e5384f" />
          <stop offset="1" stopColor="#e5384f" stopOpacity="0.2" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function Hero() {
  const { openBooking } = useBooking()
  const navigate = useNavigate()
  const [query, setQuery] = useState('')

  function onSearch(e: FormEvent) {
    e.preventDefault()
    const q = query.trim()
    if (features.showDoctors) {
      navigate(q ? `/doctors?q=${encodeURIComponent(q)}` : '/doctors')
      return
    }
    // Without the doctor directory, jump to the best-matching speciality
    const needle = q.toLowerCase()
    const match = needle
      ? specialities.find((s) =>
          [s.name, s.short, s.description, ...s.highlights].some((t) => t.toLowerCase().includes(needle)),
        )
      : undefined
    navigate(match ? `/specialities#${match.slug}` : '/specialities')
  }

  const featured = doctors[0]

  return (
    <section className="relative overflow-hidden bg-canvas">
      {/* Background decoration */}
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_30%_30%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-56 -left-56 size-[48rem] bg-[radial-gradient(closest-side,rgb(166_221_231/0.4),transparent)]" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 size-[38rem] bg-[radial-gradient(closest-side,rgb(143_240_210/0.2),transparent)]" />

      <div className="container-x relative grid items-center gap-14 pt-10 pb-16 md:pt-16 lg:grid-cols-12 lg:gap-10 lg:pt-20 lg:pb-24">
        {/* Copy */}
        <div className="lg:col-span-6 xl:col-span-6">
          <span className="eyebrow animate-fade-up bg-white">
            <span className="relative flex size-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-mint-400" />
              <span className="relative size-2 rounded-full bg-mint-500" />
            </span>
            Trusted by families since {hospital.established}
          </span>

          <h1
            style={stagger(1)}
            className="mt-6 animate-rise-in text-[44px] leading-[1.02] font-extrabold tracking-[-0.035em] sm:text-6xl xl:text-[76px]"
          >
            Compassionate care,{' '}
            <span className="serif-accent text-gradient pr-2 text-[1.08em]">exceptional</span> results.
          </h1>

          <p style={stagger(2)} className="mt-6 max-w-xl animate-rise-in text-lg text-ink-soft md:text-xl">
            Experienced specialists, advanced technology and genuinely personal attention — all under one roof, for
            every stage of your family's health.
          </p>

          {/* Search */}
          <form
            onSubmit={onSearch}
            style={stagger(3)}
            className="mt-9 flex animate-fade-up max-w-xl items-center gap-2 rounded-full border border-line bg-white p-2 pl-5 shadow-lift transition focus-within:border-brand-300 focus-within:ring-4 focus-within:ring-brand-100"
            role="search"
          >
            <Search className="size-5 shrink-0 text-muted" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={features.showDoctors ? 'Search doctors, specialities, conditions…' : 'Search specialities, conditions, treatments…'}
              aria-label={features.showDoctors ? 'Search doctors or specialities' : 'Search specialities or conditions'}
              list="hero-suggestions"
              className="min-w-0 flex-1 bg-transparent py-2 text-[15px] outline-none placeholder:text-muted"
            />
            <datalist id="hero-suggestions">
              {specialities.map((s) => <option key={s.slug} value={s.name} />)}
              {features.showDoctors && doctors.map((d) => <option key={d.id} value={d.name} />)}
            </datalist>
            <button type="submit" className="btn btn-dark px-4 sm:px-6">
              <span className="hidden sm:inline">{features.showDoctors ? 'Find a doctor' : 'Find care'}</span>
              <ArrowRight className="size-4" />
            </button>
          </form>

          <div style={stagger(4)} className="mt-6 flex animate-fade-up flex-wrap gap-2">
            {quickServices.map((q) => (
              <Link
                key={q.label}
                to={q.href}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-4 py-2 text-sm font-medium text-ink-soft backdrop-blur transition hover:border-brand-300 hover:text-brand-700"
              >
                <q.icon className="size-4 text-brand-500" /> {q.label}
              </Link>
            ))}
            <a
              href={`tel:${hospital.emergencyPhone}`}
              className="inline-flex items-center gap-2 rounded-full border border-alert/20 bg-alert-soft px-4 py-2 text-sm font-semibold text-alert transition hover:bg-alert hover:text-white"
            >
              <Siren className="size-4" /> Emergency
            </a>
          </div>

          {/* Social proof */}
          <div style={stagger(5)} className="mt-10 flex animate-fade-up items-center gap-5">
            <div className="flex -space-x-3">
              {features.showDoctors
                ? doctors.filter((d) => d.image).slice(0, 4).map((d) => (
                    <img key={d.id} src={d.image} srcSet={srcSet(d.image!)} sizes="44px" alt="" width={44} height={44} className="size-11 rounded-full border-[3px] border-canvas object-cover object-top" />
                  ))
                : specialities.slice(0, 3).map((s) => (
                    <span key={s.slug} className="grid size-11 place-items-center rounded-full border-[3px] border-canvas bg-brand-50 text-brand-600">
                      <s.icon className="size-4.5" />
                    </span>
                  ))}
              <span className="grid size-11 place-items-center rounded-full border-[3px] border-canvas bg-brand-600 text-xs font-bold text-white">
                250+
              </span>
            </div>
            <div className="text-sm">
              <div className="flex items-center gap-1 text-amber-400">
                {[0, 1, 2, 3, 4].map((i) => <Star key={i} className="size-4 fill-current" />)}
                <span className="ml-1 font-semibold text-ink">4.9</span>
              </div>
              <p className="text-muted">from 2,400+ patient reviews</p>
            </div>
          </div>
        </div>

        {/* Visual */}
        <div className="relative lg:col-span-6 xl:col-span-6">
          <div className="relative mx-auto animate-pop-in aspect-[4/4.3] max-w-[560px] overflow-hidden rounded-[40px] shadow-lift lg:ml-auto"
          >
            <img
              src="/img/hero_friendly.webp"
              srcSet={srcSet('/img/hero_friendly.webp')}
              sizes="(min-width: 1024px) 560px, (min-width: 600px) 560px, calc(100vw - 40px)"
              width={1024}
              height={1024}
              alt="A doctor smiling with a young patient and her mother"
              className="size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/50 via-transparent to-transparent" />
            <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 text-white sm:inset-x-8 sm:bottom-14">
              <div>
                <p className="font-serif text-3xl italic sm:text-4xl">Care that feels like family.</p>
              </div>
            </div>
          </div>

          {/* Floating: next slot (doctor) — or OPD hours while doctors come from HMIS */}
          <div
            style={{ animationDelay: '500ms' }}
            className="absolute top-8 animate-slide-in-left -left-2 hidden w-72 sm:block lg:-left-10"
          >
            {features.showDoctors && features.showBooking ? (
              <div className="animate-float rounded-3xl border border-white/60 bg-white/85 p-4 shadow-lift backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <img src={featured.image} srcSet={srcSet(featured.image!)} sizes="48px" alt="" width={48} height={48} className="size-12 rounded-2xl object-cover object-top" />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold">{featured.name}</p>
                    <p className="truncate text-xs text-muted">{featured.role}</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between rounded-2xl bg-brand-50 px-3 py-2">
                  <span className="text-xs text-brand-800">
                    <span className="block text-[10px] font-semibold uppercase tracking-wider text-brand-600">Next available</span>
                    Today · 4:30 PM
                  </span>
                  <button
                    onClick={() => openBooking({ doctorId: featured.id })}
                    className="grid size-9 place-items-center rounded-full bg-brand-600 text-white transition hover:scale-110"
                    aria-label={`Book with ${featured.name}`}
                  >
                    <CalendarCheck className="size-4" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="animate-float rounded-3xl border border-white/60 bg-white/85 p-4 shadow-lift backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <span className="grid size-12 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                    <Clock className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold">OPD open today</p>
                    <p className="truncate text-xs text-muted">{hospital.hours.opd}</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between rounded-2xl bg-brand-50 px-3 py-2">
                  <span className="text-xs text-brand-800">
                    <span className="block text-[10px] font-semibold uppercase tracking-wider text-brand-600">Front desk</span>
                    {hospital.phone}
                  </span>
                  <a
                    href={`tel:${hospital.phone}`}
                    className="grid size-9 place-items-center rounded-full bg-brand-600 text-white transition hover:scale-110"
                    aria-label={`Call ${hospital.phone}`}
                  >
                    <Phone className="size-4" />
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Floating: emergency */}
          <div
            style={{ animationDelay: '700ms' }}
            className="absolute -right-2 animate-slide-in-right bottom-24 hidden w-64 sm:block lg:-right-6"
          >
            <a
              href={`tel:${hospital.emergencyPhone}`}
              className="block animate-float rounded-3xl border border-white/60 bg-white/85 p-4 shadow-lift backdrop-blur-xl [animation-delay:-3s]"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-alert">24/7 Emergency</span>
                <span className="relative flex size-2.5">
                  <span className="absolute inset-0 animate-ping rounded-full bg-alert" />
                  <span className="relative size-2.5 rounded-full bg-alert" />
                </span>
              </div>
              <HeartbeatLine />
              <p className="font-heading text-sm font-bold">Avg. door-to-doctor: &lt; 5 min</p>
            </a>
          </div>

          {/* Floating: specialities chip */}
          <div
            style={{ animationDelay: '900ms' }}
            className="absolute -bottom-5 animate-fade-up left-6 hidden items-center gap-3 rounded-2xl bg-ink px-4 py-3 text-white shadow-lift sm:flex lg:left-0"
          >
            <span className="grid size-9 place-items-center rounded-xl bg-white/10">
              <Stethoscope className="size-4 text-mint-300" />
            </span>
            <span className="text-sm">
              <span className="font-bold">{specialities.length}+</span> centres of excellence
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
