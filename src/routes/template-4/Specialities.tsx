import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { specialities } from '@/data/site'
import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/lib/utils'
import { SectionHead } from './shared'
import { container, sectionY } from './constants'

export function Specialities() {
  return (
    <section id="specialities" aria-labelledby="t4-specs" className={cn('bg-lagoon-50', sectionY)}>
      <div className={container}>
        <SectionHead
          id="t4-specs"
          eyebrow="Departments"
          title="Our Specialities"
          description="Experienced specialists across every major field, supported by round-the-clock diagnostics and emergency care."
          action={{ label: 'View all specialities', to: '/specialities' }}
        />
        <Reveal>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {specialities.map(({ slug, name, short, icon: Icon }) => (
              <li key={slug}>
                <Link
                  to={`/specialities#${slug}`}
                  className="group flex h-full items-start gap-4 rounded-2xl border border-lagoon-100 bg-white p-5 transition duration-300 hover:border-lagoon-200 hover:shadow-soft sm:p-6"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-lagoon-100 text-lagoon-700 transition-colors group-hover:bg-lagoon-600 group-hover:text-white">
                    <Icon className="size-[22px]" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[16px] leading-snug font-semibold text-lagoon-900 sm:text-[17px]">{name}</span>
                    <span className="mt-1 block text-[14px] leading-relaxed text-lagoon-900/70">{short}</span>
                  </span>
                  <ArrowRight
                    className="mt-1 size-[18px] shrink-0 text-lagoon-600 transition-transform group-hover:translate-x-0.5"
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
