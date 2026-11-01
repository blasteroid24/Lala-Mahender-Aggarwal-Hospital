import { Link } from 'react-router-dom'
import { ArrowUpRight, Baby, HeartPulse, type LucideIcon } from 'lucide-react'
import { specialities } from '@/data/site'
import { Reveal } from '@/components/ui/Reveal'
import { cn, srcSet } from '@/lib/utils'
import { SectionHead } from './shared'
import { container, sectionY } from './constants'

type Stage = {
  title: string
  line: string
  slugs: string[]
  image?: { src: string; alt: string; position?: string }
  icon?: LucideIcon
}

const stages: Stage[] = [
  {
    title: 'Children',
    line: 'Gentle, child-friendly care from the newborn days to the teenage years.',
    slugs: ['paediatrics', 'ent-eye', 'emergency'],
    icon: Baby,
  },
  {
    title: 'Women & Mothers',
    line: 'Pregnancy, birth and women’s health — in a warm, private setting.',
    slugs: ['gynaecology', 'radiology', 'laboratory'],
    image: { src: '/img/faq-doctor.webp', alt: 'New parents holding their baby thank a doctor in the hospital corridor', position: '40% 50%' },
  },
  {
    title: 'Adults',
    line: 'Specialist care for the heart, bones, digestion and more as life gets busy.',
    slugs: ['cardiology', 'orthopaedics', 'gastro', 'neurosciences'],
    icon: HeartPulse,
  },
  {
    title: 'Seniors',
    line: 'Unhurried, respectful care that helps our elders stay active and independent.',
    slugs: ['cardiology', 'orthopaedics', 'nephrology', 'ent-eye'],
    image: { src: '/img/case2.webp', alt: 'A doctor explains a heart scan to an older patient', position: '70% 50%' },
  },
]

const shortName: Record<string, string> = {
  cardiology: 'Heart care',
  orthopaedics: 'Bones & joints',
  gastro: 'Digestive care',
  neurosciences: 'Brain & spine',
  paediatrics: 'Paediatrics',
  'ent-eye': 'ENT & eye',
  emergency: 'Emergency',
  gynaecology: 'Maternity',
  radiology: 'Ultrasound & imaging',
  laboratory: 'Lab tests',
  nephrology: 'Kidney care',
}

export function LifeStages() {
  return (
    <section id="stages" aria-labelledby="t4-stages" className={cn('bg-white', sectionY)}>
      <div className={container}>
        <SectionHead
          id="t4-stages"
          eyebrow="Care for all ages"
          title="Care for every stage of life"
          description="One trusted hospital for the whole family — so your children, parents and you are looked after by people who know you."
          action={{ label: 'All specialities', to: '/specialities' }}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stages.map((s, i) => {
            const Icon = s.icon
            return (
              <Reveal key={s.title} delay={i * 0.06} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-lagoon-100 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[4/3]">
                    {s.image ? (
                      <img
                        src={s.image.src}
                        srcSet={srcSet(s.image.src)}
                        sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw"
                        width={1024}
                        height={1024}
                        loading="lazy"
                        decoding="async"
                        alt={s.image.alt}
                        style={{ objectPosition: s.image.position }}
                        className="size-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="relative size-full bg-peach-100" aria-hidden="true">
                        <span className="absolute -top-8 -right-8 size-36 rounded-full bg-peach-200" />
                        <span className="absolute bottom-6 left-6 h-10 w-24 rounded-full bg-peach-300/70" />
                        <span className="absolute inset-0 grid place-items-center">
                          <span className="grid size-24 place-items-center rounded-[1.75rem] bg-white text-lagoon-700 shadow-soft">
                            {Icon && <Icon className="size-11" strokeWidth={1.6} />}
                          </span>
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-dm text-[21px] font-semibold tracking-[-0.015em] text-lagoon-900">{s.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-lagoon-900/75">{s.line}</p>
                    <ul className="mt-5 flex flex-wrap gap-2 pt-1" aria-label={`Specialities for ${s.title.toLowerCase()}`}>
                      {s.slugs
                        .filter((slug) => specialities.some((sp) => sp.slug === slug))
                        .map((slug) => (
                          <li key={slug}>
                            <Link
                              to={`/specialities#${slug}`}
                              className="inline-flex items-center gap-1 rounded-full bg-lagoon-50 px-3 py-1.5 text-[13px] font-medium text-lagoon-800 ring-1 ring-lagoon-100 transition-colors hover:bg-lagoon-100 hover:text-lagoon-900"
                            >
                              {shortName[slug] ?? slug}
                              <ArrowUpRight className="size-3.5" aria-hidden="true" />
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
