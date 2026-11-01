import { Link } from 'react-router-dom'
import { ArrowRight, Droplet, FileCheck2, Pill, Quote, ShieldCheck, SprayCan } from 'lucide-react'
import { facilities, stats, testimonials } from '@/data/site'
import { Counter } from '@/components/ui/Counter'
import { Reveal } from '@/components/ui/Reveal'
import { cn, srcSet } from '@/lib/utils'
import { SectionHead } from './SectionHead'
import { container, headingCls, outlineBtn } from './links'

export function Stats() {
  return (
    <section aria-label="LMA Hospital in numbers" className="bg-navy-700 text-white">
      <div className={cn(container, 'py-14 md:py-16')}>
        <dl className="grid grid-cols-2 gap-y-10 lg:grid-cols-4 lg:divide-x lg:divide-white/15">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={cn('flex flex-col-reverse px-4 text-center lg:px-8', i % 2 === 1 && 'border-l border-white/15 lg:border-l-0')}
            >
              <dt className="mt-2 text-[14px] text-white/80 md:text-[15px]">{s.label}</dt>
              <dd className="font-montserrat text-[36px] leading-none font-semibold md:text-[46px]">
                <Counter value={s.value} suffix={s.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export function Facilities() {
  const [first, second, third, ...rest] = facilities
  return (
    <section id="facilities" aria-labelledby="t3-facilities" className="bg-navy-50 py-16 md:py-24">
      <div className={container}>
        <Reveal>
          <SectionHead
            id="t3-facilities"
            eyebrow="Infrastructure"
            title="World-class facilities"
            desc="Modern equipment and purpose-built spaces that support safer, faster care."
            action={
              <Link to="/about" className={outlineBtn}>
                About the hospital
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            }
          />
        </Reveal>

        <ul className="mt-10 grid gap-6 md:mt-12 md:grid-cols-3">
          {[first, second, third].map((f, i) => (
            <li key={f.title} className="h-full">
              <Reveal delay={i * 0.06} className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-xl border border-navy-100 bg-white transition-shadow duration-300 hover:shadow-lift">
                  <img
                    src={f.img}
                    srcSet={srcSet(f.img)}
                    sizes="(min-width: 1280px) 400px, (min-width: 768px) 33vw, 100vw"
                    width={1024}
                    height={1024}
                    loading="lazy"
                    alt=""
                    className="aspect-[3/2] w-full object-cover"
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-[12.5px] font-semibold tracking-wider text-navy-600 uppercase">{f.tag}</p>
                    <h3 className={cn(headingCls, 'mt-2 text-[19px] leading-snug')}>{f.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-navy-900/75">{f.desc}</p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <ul className="mt-6 grid gap-6 md:grid-cols-2">
          {rest.map((f, i) => (
            <li key={f.title} className="h-full">
              <Reveal delay={i * 0.06} className="h-full">
                <article className="flex h-full overflow-hidden rounded-xl border border-navy-100 bg-white transition-shadow duration-300 hover:shadow-lift">
                  <img
                    src={f.img}
                    srcSet={srcSet(f.img)}
                    sizes="200px"
                    width={1024}
                    height={1024}
                    loading="lazy"
                    alt=""
                    className="w-28 shrink-0 object-cover sm:w-44"
                  />
                  <div className="flex flex-col justify-center p-5 sm:p-6">
                    <p className="text-[12.5px] font-semibold tracking-wider text-navy-600 uppercase">{f.tag}</p>
                    <h3 className={cn(headingCls, 'mt-2 text-[18px] leading-snug')}>{f.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-navy-900/75">{f.desc}</p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* Placeholder trust items — wording to be confirmed by the hospital before launch. */
const quality = [
  { Icon: ShieldCheck, title: 'NABH-aligned protocols', desc: 'Clinical processes built around national quality standards.' },
  { Icon: SprayCan, title: 'Infection control', desc: 'Strict sterilisation and hygiene routines across every ward.' },
  { Icon: Pill, title: '24×7 pharmacy', desc: 'In-house pharmacy, open round the clock.' },
  { Icon: FileCheck2, title: 'Cashless insurance desk', desc: 'Help with insurers, TPAs and pre-authorisation.' },
  { Icon: Droplet, title: 'Blood centre', desc: 'On-site blood centre supporting every department.' },
]

export function Quality() {
  return (
    <section aria-labelledby="t3-quality" className="border-b border-navy-100 bg-white py-14 md:py-16">
      <div className={container}>
        <Reveal>
          <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
            <h2 id="t3-quality" className={cn(headingCls, 'text-[24px] md:text-[28px]')}>
              Quality & Safety
            </h2>
            <p className="text-[15px] text-navy-900/75">The everyday standards behind every treatment.</p>
          </div>
          <ul className="mt-8 grid gap-px overflow-hidden rounded-xl border border-navy-100 bg-navy-100 sm:grid-cols-2 lg:grid-cols-5">
            {quality.map(({ Icon, title, desc }) => (
              <li key={title} className="flex gap-4 bg-white p-5 last:sm:col-span-2 lg:flex-col lg:gap-3 lg:p-6 last:lg:col-span-1">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-navy-50 text-navy-700">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-montserrat text-[15.5px] font-semibold text-navy-900">{title}</h3>
                  <p className="mt-1 text-[14px] leading-relaxed text-navy-900/70">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

export function Testimonials() {
  return (
    <section id="stories" aria-labelledby="t3-stories" className="bg-navy-50 py-16 md:py-24">
      <div className={container}>
        <Reveal>
          <SectionHead
            id="t3-stories"
            eyebrow="Patient stories"
            title="What our patients say"
            desc="Words from patients and families we have had the privilege to care for."
          />
        </Reveal>
        <ul className="mt-10 grid gap-6 md:mt-12 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 6).map((t, i) => (
            <li key={t.name} className="h-full">
              <Reveal delay={(i % 3) * 0.06} className="h-full">
                <figure className="flex h-full flex-col rounded-xl border border-navy-100 bg-white p-7">
                  <Quote className="size-7 text-coral-500" aria-hidden="true" />
                  <blockquote className="mt-4 flex-1 text-[16px] leading-relaxed text-navy-900/85">“{t.text}”</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-navy-100 pt-5">
                    <span
                      aria-hidden="true"
                      className="inline-flex size-10 items-center justify-center rounded-full bg-navy-100 font-montserrat text-sm font-semibold text-navy-700"
                    >
                      {t.name.charAt(0)}
                    </span>
                    <span className="leading-tight">
                      <span className="block font-semibold text-navy-900">{t.name}</span>
                      <span className="mt-0.5 block text-[13.5px] text-navy-900/70">{t.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
