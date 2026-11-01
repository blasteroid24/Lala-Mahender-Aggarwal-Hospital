import { HeartHandshake, Megaphone, School } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/lib/utils'
import { SectionHead } from './shared'
import { container, sectionY } from './constants'

const items = [
  {
    icon: HeartHandshake,
    title: 'Health camps',
    text: 'Free screening camps in nearby towns and villages — blood pressure, sugar, eyes and more, with advice on what to do next.',
  },
  {
    icon: Megaphone,
    title: 'Awareness drives',
    text: 'Simple, practical talks on heart health, diabetes, women’s health and first aid, held with local groups and workplaces.',
  },
  {
    icon: School,
    title: 'School check-ups',
    text: 'Routine health check-ups and hygiene sessions for school children, helping catch small problems early.',
  },
]

export function Community() {
  return (
    <section id="community" aria-labelledby="t4-community" className={cn('bg-white', sectionY)}>
      <div className={container}>
        <SectionHead
          id="t4-community"
          eyebrow="Community & wellness"
          title="Big-city medicine. Hometown heart."
          description="Care doesn’t stop at our doors. We work with the community to help people stay healthy in the first place."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {items.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.06} className="h-full">
              <article className="h-full rounded-3xl bg-lagoon-50 p-7 ring-1 ring-lagoon-100 sm:p-8">
                <span className="grid size-14 place-items-center rounded-2xl bg-peach-100 text-lagoon-800">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-dm text-[20px] font-semibold tracking-[-0.015em] text-lagoon-900">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-lagoon-900/75">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
