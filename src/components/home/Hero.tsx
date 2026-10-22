import { useState, type FormEvent } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight, CalendarCheck, Search, Siren, Star, Stethoscope } from 'lucide-react'
import { doctors, hospital, quickServices, specialities } from '@/data/site'
import { useBooking } from '@/components/booking/BookingProvider'

const ease = [0.16, 1, 0.3, 1] as const

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
}

function HeartbeatLine() {
  const reduce = useReducedMotion()
  return (
    <svg viewBox="0 0 220 48" className="h-10 w-full" fill="none" aria-hidden="true">
      <motion.path
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
    navigate(query.trim() ? `/doctors?q=${encodeURIComponent(query.trim())}` : '/doctors')
  }

  const featured = doctors[0]

  return (
    <section className="relative overflow-hidden bg-canvas">
      {/* Background decoration */}
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_30%_30%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-40 -left-40 size-[36rem] rounded-full bg-brand-200/40 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 size-[28rem] rounded-full bg-mint-300/20 blur-3xl" />

      <div className="container-x relative grid items-center gap-14 pt-10 pb-16 md:pt-16 lg:grid-cols-12 lg:gap-10 lg:pt-20 lg:pb-24">
        {/* Copy */}
        <motion.div
          className="lg:col-span-6 xl:col-span-6"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.09 } } }}
        >
          <motion.span variants={item} className="eyebrow bg-white">
            <span className="relative flex size-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-mint-400" />
              <span className="relative size-2 rounded-full bg-mint-500" />
            </span>
            Trusted by families since {hospital.established}
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 text-[44px] leading-[1.02] font-extrabold tracking-[-0.035em] sm:text-6xl xl:text-[76px]"
          >
            Compassionate care,{' '}
            <span className="serif-accent text-gradient pr-2 text-[1.08em]">exceptional</span> results.
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-lg text-ink-soft md:text-xl">
            Experienced specialists, advanced technology and genuinely personal attention — all under one roof, for
            every stage of your family's health.
          </motion.p>

          {/* Search */}
          <motion.form
            variants={item}
            onSubmit={onSearch}
            className="mt-9 flex max-w-xl items-center gap-2 rounded-full border border-line bg-white p-2 pl-5 shadow-lift transition focus-within:border-brand-300 focus-within:ring-4 focus-within:ring-brand-100"
            role="search"
          >
            <Search className="size-5 shrink-0 text-muted" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search doctors, specialities, conditions…"
              aria-label="Search doctors or specialities"
              list="hero-suggestions"
              className="min-w-0 flex-1 bg-transparent py-2 text-[15px] outline-none placeholder:text-muted"
            />
            <datalist id="hero-suggestions">
              {specialities.map((s) => <option key={s.slug} value={s.name} />)}
              {doctors.map((d) => <option key={d.id} value={d.name} />)}
            </datalist>
            <button type="submit" className="btn btn-dark px-4 sm:px-6">
              <span className="hidden sm:inline">Find a doctor</span>
              <ArrowRight className="size-4" />
            </button>
          </motion.form>

          <motion.div variants={item} className="mt-6 flex flex-wrap gap-2">
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
          </motion.div>

          {/* Social proof */}
          <motion.div variants={item} className="mt-10 flex items-center gap-5">
            <div className="flex -space-x-3">
              {doctors.filter((d) => d.image).slice(0, 4).map((d) => (
                <img key={d.id} src={d.image} alt="" className="size-11 rounded-full border-[3px] border-canvas object-cover object-top" />
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
          </motion.div>
        </motion.div>

        {/* Visual */}
        <div className="relative lg:col-span-6 xl:col-span-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease }}
            className="relative mx-auto aspect-[4/4.3] max-w-[560px] overflow-hidden rounded-[40px] shadow-lift lg:ml-auto"
          >
            <img
              src="/img/hero_friendly.webp"
              alt="A doctor smiling with a young patient and her mother"
              fetchPriority="high"
              className="size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/50 via-transparent to-transparent" />
            <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 text-white sm:inset-x-8 sm:bottom-14">
              <div>
                <p className="font-serif text-3xl italic sm:text-4xl">Care that feels like family.</p>
              </div>
            </div>
          </motion.div>

          {/* Floating: next slot */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease }}
            className="absolute top-8 -left-2 hidden w-72 sm:block lg:-left-10"
          >
            <div className="animate-float rounded-3xl border border-white/60 bg-white/85 p-4 shadow-lift backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <img src={featured.image} alt="" className="size-12 rounded-2xl object-cover object-top" />
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
          </motion.div>

          {/* Floating: emergency */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease }}
            className="absolute -right-2 bottom-24 hidden w-64 sm:block lg:-right-6"
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
          </motion.div>

          {/* Floating: specialities chip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease }}
            className="absolute -bottom-5 left-6 hidden items-center gap-3 rounded-2xl bg-ink px-4 py-3 text-white shadow-lift sm:flex lg:left-0"
          >
            <span className="grid size-9 place-items-center rounded-xl bg-white/10">
              <Stethoscope className="size-4 text-mint-300" />
            </span>
            <span className="text-sm">
              <span className="font-bold">{specialities.length}+</span> centres of excellence
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
