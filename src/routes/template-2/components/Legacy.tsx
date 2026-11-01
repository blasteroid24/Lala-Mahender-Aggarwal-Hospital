import { milestones } from '@/data/site'
import { Reveal } from '@/components/ui/Reveal'
import { container } from '../shared'
import { SectionHeader } from './ui'

export function Legacy() {
  return (
    <section aria-labelledby="t2-legacy" className="bg-verdant-50 py-16 md:py-20">
      <div className={container}>
        <Reveal>
          <SectionHeader
            id="t2-legacy"
            eyebrow="Our journey"
            title="A Legacy Since 1994"
            description="Three decades of steady growth, always in service of the community."
            action={{ label: 'Our story', to: '/about' }}
          />
        </Reveal>

        <Reveal delay={0.05}>
          <ol className="relative mt-10 grid gap-8 border-l border-verdant-200 pl-7 md:mt-12 lg:grid-cols-5 lg:gap-6 lg:border-t lg:border-l-0 lg:pt-8 lg:pl-0">
            {milestones.map((m) => (
              <li key={m.year} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute top-1.5 -left-[33px] size-3 rounded-full border-2 border-verdant-50 bg-verdant-700 ring-1 ring-verdant-700 lg:-top-[39px] lg:left-0"
                />
                <p className="font-fraunces text-2xl font-medium text-verdant-700">{m.year}</p>
                <p className="mt-2 text-[15px] leading-relaxed text-[#4d5d56]">{m.text}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
