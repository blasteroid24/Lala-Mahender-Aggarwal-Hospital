import { Check } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { cn, srcSet } from '@/lib/utils'
import { SectionHead } from './shared'
import { container, sectionY } from './constants'

const rows = [
  {
    eyebrow: 'Consultations',
    title: 'Expert, unhurried consultations',
    text: 'Our specialists take the time to listen, explain and answer every question — so you leave understanding your diagnosis and your options.',
    bullets: ['Specialists across every major department', 'Time for your questions, and clear answers', 'Video follow-ups for non-emergency concerns'],
    img: { src: '/img/hero-mobile.webp', alt: 'A nurse chats with a young boy and his parents in the bright hospital lobby' },
  },
  {
    eyebrow: 'Diagnostics',
    title: 'Modern diagnostics under one roof',
    text: 'Scans, tests and reports happen right here — no running between labs and imaging centres while you are unwell.',
    bullets: ['3T MRI, CT, ultrasound & digital X-ray', 'Round-the-clock laboratory & blood centre', 'Same-day reports wherever possible'],
    img: { src: '/img/tech2.webp', alt: 'A technician at the console beside the hospital’s MRI scanner' },
  },
  {
    eyebrow: 'Recovery',
    title: 'Recovery with rehabilitation & follow-up',
    text: 'Getting better continues after you go home. We plan your recovery with you, and stay in touch until you are back on your feet.',
    bullets: ['ICU & HDU with round-the-clock monitoring', 'Physiotherapy and cardiac rehabilitation', 'In-house pharmacy, open 24×7'],
    img: { src: '/img/tech1.webp', alt: 'A nurse attends to a patient resting in a calm, well-lit hospital room' },
  },
]

export function WhyFamilies() {
  return (
    <section id="why-us" aria-labelledby="t4-why" className={cn('bg-white', sectionY)}>
      <div className={container}>
        <SectionHead
          id="t4-why"
          eyebrow="A day at our hospital"
          title="Why families choose us"
          description="Big-hospital expertise, with the patience and warmth of a family doctor."
        />

        <div className="flex flex-col gap-16 lg:gap-24">
          {rows.map((r, i) => {
            const flip = i % 2 === 1
            return (
              <Reveal key={r.title} className="grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-20">
                <div className={cn('relative', flip && 'md:order-2')}>
                  <span
                    aria-hidden="true"
                    className={cn(
                      'absolute -bottom-4 size-40 rounded-[2rem] bg-peach-100 sm:size-48',
                      flip ? '-right-3 sm:-right-4' : '-left-3 sm:-left-4',
                    )}
                  />
                  <img
                    src={r.img.src}
                    srcSet={srcSet(r.img.src)}
                    sizes="(min-width: 1280px) 560px, (min-width: 768px) 45vw, 100vw"
                    width={1024}
                    height={1024}
                    loading="lazy"
                    decoding="async"
                    alt={r.img.alt}
                    className="relative aspect-[5/4] w-full rounded-3xl object-cover shadow-soft"
                  />
                </div>
                <div className={cn(flip && 'md:order-1')}>
                  <p className="text-sm font-semibold tracking-wide text-lagoon-700 uppercase">{r.eyebrow}</p>
                  <h3 className="mt-3 font-dm text-[26px] leading-tight font-semibold tracking-[-0.02em] text-lagoon-900 sm:text-[30px]">
                    {r.title}
                  </h3>
                  <p className="mt-4 max-w-lg text-[16px] leading-relaxed text-lagoon-900/75 sm:text-[17px]">{r.text}</p>
                  <ul className="mt-6 space-y-3">
                    {r.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-[15px] text-lagoon-900 sm:text-[16px]">
                        <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-lagoon-100 text-lagoon-700">
                          <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
