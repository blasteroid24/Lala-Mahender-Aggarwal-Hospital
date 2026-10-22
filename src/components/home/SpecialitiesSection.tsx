import type { MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { specialities, type Speciality } from '@/data/site'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

/** Card with a soft spotlight that follows the cursor. */
export function SpecialityCard({ spec }: { spec: Speciality }) {
  function onMove(e: MouseEvent<HTMLAnchorElement>) {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--x', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--y', `${e.clientY - r.top}px`)
  }
  return (
    <Link
      to={`/specialities#${spec.slug}`}
      onMouseMove={onMove}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white p-4 transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift sm:p-6 md:p-7"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background:radial-gradient(320px_circle_at_var(--x)_var(--y),rgb(22_135_159/0.10),transparent_70%)]" />
      <div className="relative flex items-start justify-between">
        <span className="grid size-11 place-items-center rounded-2xl sm:size-14 bg-brand-50 text-brand-600 transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white group-hover:shadow-glow">
          <spec.icon className="size-6" strokeWidth={1.75} />
        </span>
        <ArrowUpRight className="size-5 -translate-x-2 translate-y-2 text-brand-600 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
      </div>
      <h3 className="relative mt-5 text-[15px] leading-snug sm:mt-8 sm:text-lg">{spec.name}</h3>
      <p className="relative mt-2 hidden text-sm text-muted sm:block">{spec.short}</p>
    </Link>
  )
}

export function SpecialitiesSection() {
  return (
    <section className="section bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Centres of Excellence"
          title={<>Specialised care for <span className="serif-accent text-brand-600">every</span> stage of life</>}
          description="Multidisciplinary teams, shared protocols and modern infrastructure — so you get the right diagnosis and the right treatment, the first time."
          action={
            <Link to="/specialities" className="btn btn-ghost">
              All specialities <ArrowRight className="size-4" />
            </Link>
          }
        />
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {specialities.slice(0, 8).map((s, i) => (
            <Reveal key={s.slug} delay={(i % 4) * 0.06}>
              <SpecialityCard spec={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
