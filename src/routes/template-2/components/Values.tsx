import { Award, HeartHandshake, Lightbulb, ShieldCheck, type LucideIcon } from 'lucide-react'
import { values } from '@/data/site'
import { Reveal } from '@/components/ui/Reveal'
import { container } from '../shared'
import { SectionHeader } from './ui'

const icons: Record<string, LucideIcon> = {
  Integrity: ShieldCheck,
  Innovation: Lightbulb,
  Empathy: HeartHandshake,
  Excellence: Award,
}

export function Values() {
  return (
    <section aria-labelledby="t2-values" className="bg-white py-16 md:py-24">
      <div className={container}>
        <Reveal>
          <SectionHeader
            id="t2-values"
            eyebrow="What guides us"
            title="Precision you can trust. Compassion you can feel."
            description="Four principles that shape every consultation, procedure and conversation."
          />
        </Reveal>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 md:mt-12">
          {values.map((v, i) => {
            const Icon = icons[v.title] ?? ShieldCheck
            return (
              <li key={v.title}>
                <Reveal delay={i * 0.06} className="h-full">
                  <div className="h-full rounded-2xl border border-[#e0e9e3] bg-white p-6 transition duration-300 hover:border-verdant-300 hover:shadow-[0_18px_40px_-24px_rgb(23_61_49/0.3)] lg:p-7">
                    <span className="grid size-12 place-items-center rounded-full bg-sage text-verdant-700">
                      <Icon className="size-6" strokeWidth={1.6} aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 font-sans text-lg font-semibold text-[#1d2b26]">{v.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-[#5b6b64]">{v.desc}</p>
                  </div>
                </Reveal>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
