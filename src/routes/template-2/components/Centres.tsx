import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { specialities } from '@/data/site'
import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/lib/utils'
import { container } from '../shared'
import { SectionHeader } from './ui'

// 12 cells fill the 4-col / 2-col grid evenly
const centres = specialities.slice(0, 12)

export function Centres() {
  return (
    <section id="centres" aria-labelledby="t2-centres" className="bg-white pt-20 pb-16 md:pt-24 md:pb-24">
      <div className={container}>
        <Reveal>
          <SectionHeader
            id="t2-centres"
            eyebrow="Our specialities"
            title="Centres of Excellence"
            description="Specialist teams for every stage of life, working together under one roof."
            action={{ label: 'View all specialities', to: '/specialities' }}
          />
        </Reveal>

        <Reveal delay={0.05}>
          <ul className="mt-10 grid grid-cols-2 border-t border-l border-[#e0e9e3] lg:grid-cols-4 md:mt-12">
            {centres.map((s) => (
              <li key={s.slug} className="border-r border-b border-[#e0e9e3]">
                <Link
                  to={`/specialities#${s.slug}`}
                  className={cn(
                    'group relative flex h-full flex-col gap-3 p-4 transition-colors duration-300 hover:bg-sage sm:p-6 lg:p-7',
                    'focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-verdant-600',
                  )}
                >
                  <s.icon className="size-7 text-verdant-700 sm:size-8" strokeWidth={1.5} aria-hidden="true" />
                  <span className="mt-1 text-[15px] leading-snug font-semibold text-[#1d2b26] sm:text-base">{s.name}</span>
                  <span className="hidden text-sm leading-relaxed text-[#5b6b64] sm:block">{s.short}</span>
                  <ArrowUpRight
                    className="absolute top-5 right-5 size-4 text-verdant-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
