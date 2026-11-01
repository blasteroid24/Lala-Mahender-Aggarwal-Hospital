import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { hospital, stats } from '@/data/site'
import { Reveal } from '@/components/ui/Reveal'
import { Counter } from '@/components/ui/Counter'
import { cn } from '@/lib/utils'
import { btn, container } from '../shared'
import { Img } from './ui'

const points = [
  'Experienced specialists across more than a dozen disciplines',
  'Round-the-clock emergency, critical care and diagnostics',
  'Honest advice and clear communication with every family',
]

export function About() {
  return (
    <section id="about" aria-labelledby="t2-about" className="border-t border-[#e3ebe6] bg-white py-16 md:py-24">
      <div className={cn(container, 'grid items-center gap-12 lg:grid-cols-2 lg:gap-16')}>
        <Reveal className="relative">
          <div className="overflow-hidden rounded-2xl">
            <Img
              src="/img/hero_friendly.webp"
              sizes="(min-width: 1024px) 600px, 100vw"
              alt="A doctor sharing a smile with a young girl and her mother in the clinic"
              className="aspect-[4/3.6] w-full object-cover lg:aspect-[1/1]"
            />
          </div>
          <div className="absolute bottom-5 left-5 rounded-xl bg-sand-soft px-5 py-4 shadow-[0_12px_32px_-12px_rgb(23_61_49/0.35)]">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-verdant-700 uppercase">Est.</p>
            <p className="font-fraunces text-3xl leading-none font-medium text-verdant-900">{hospital.established}</p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mb-3 flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-verdant-700 uppercase">
            <span className="h-px w-8 bg-sand" aria-hidden="true" />
            Our legacy
          </p>
          <h2
            id="t2-about"
            className="font-fraunces text-[30px] leading-[1.15] font-medium text-verdant-900 sm:text-[36px] lg:text-[40px]"
          >
            Medicine, reimagined for the generations to come.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#5b6b64] md:text-[17px]">
            Since {hospital.established}, {hospital.name} has grown from a small community hospital into a trusted
            multi-speciality centre — while keeping the warmth and personal attention families came to us for.
          </p>
          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-[15px] text-[#1d2b26] md:text-base">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-verdant-700 text-white">
                  <Check className="size-3" strokeWidth={3} aria-hidden="true" />
                </span>
                {p}
              </li>
            ))}
          </ul>

          <dl className="mt-8 grid grid-cols-2 overflow-hidden rounded-2xl border border-[#e0e9e3]">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={cn('p-5 sm:p-6', i % 2 === 1 && 'border-l border-[#e0e9e3]', i < 2 && 'border-b border-[#e0e9e3]')}
              >
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <Counter value={s.value} suffix={s.suffix} className="font-fraunces text-3xl font-medium text-verdant-700 sm:text-4xl" />
                  <span className="mt-1 block text-sm text-[#5b6b64]">{s.label}</span>
                </dd>
              </div>
            ))}
          </dl>

          <Link to="/about" className={cn(btn.outline, 'mt-8')}>
            More about us
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
