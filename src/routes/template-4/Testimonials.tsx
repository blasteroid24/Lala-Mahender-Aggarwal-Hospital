import { Quote } from 'lucide-react'
import { testimonials } from '@/data/site'
import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/lib/utils'
import { SectionHead } from './shared'
import { container, sectionY } from './constants'

const pick = (name: string) => testimonials.find((t) => t.name === name)
const featured = pick('Pooja Sharma') ?? testimonials[0]
const others = [pick('Ramesh Gupta'), pick('Sophia Gupta')].filter((t): t is (typeof testimonials)[number] => !!t)

function Avatar({ name, tone }: { name: string; tone: 'light' | 'dark' }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'grid size-11 shrink-0 place-items-center rounded-full text-[17px] font-semibold',
        tone === 'dark' ? 'bg-peach-300 text-lagoon-900' : 'bg-peach-100 text-lagoon-800',
      )}
    >
      {name.charAt(0)}
    </span>
  )
}

export function Testimonials() {
  return (
    <section aria-labelledby="t4-stories" className={cn('bg-lagoon-50', sectionY)}>
      <div className={container}>
        <SectionHead
          id="t4-stories"
          eyebrow="Patient voices"
          title="Families who trusted us"
          description="A few words from the people we’ve had the privilege of caring for."
        />
        <div className="grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <figure className="flex h-full flex-col justify-between rounded-3xl bg-lagoon-700 p-8 text-white sm:p-10">
              <Quote className="size-10 text-peach-300" aria-hidden="true" />
              <blockquote className="mt-6 font-dm text-[22px] leading-snug font-medium tracking-[-0.01em] sm:text-[28px]">
                “{featured.text}”
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-4">
                <Avatar name={featured.name} tone="dark" />
                <span>
                  <span className="block font-semibold">{featured.name}</span>
                  <span className="block text-[14px] text-white/75">{featured.role}</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
          <div className="grid gap-6 lg:col-span-2">
            {others.map((t, i) => (
              <Reveal key={t.name} delay={0.08 * (i + 1)} className="h-full">
                <figure className="flex h-full flex-col justify-between rounded-3xl border border-lagoon-100 bg-white p-7 shadow-soft">
                  <blockquote className="text-[16px] leading-relaxed text-lagoon-900/85">“{t.text}”</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <Avatar name={t.name} tone="light" />
                    <span>
                      <span className="block text-[15px] font-semibold text-lagoon-900">{t.name}</span>
                      <span className="block text-[13px] text-lagoon-900/65">{t.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
