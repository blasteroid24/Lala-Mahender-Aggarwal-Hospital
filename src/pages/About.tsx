import { Award, HandHeart, Lightbulb, ShieldCheck } from 'lucide-react'
import { hospital, milestones, stats, values } from '@/data/site'
import { PageHero } from '@/components/ui/PageHero'
import { Reveal } from '@/components/ui/Reveal'
import { Counter } from '@/components/ui/Counter'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { srcSet } from '@/lib/utils'

const valueIcons = [ShieldCheck, Lightbulb, HandHeart, Award]

export default function About() {
  return (
    <>
      <PageHero
        crumb="About us"
        title={<>Healing with <span className="serif-accent text-gradient pr-2">heart</span> since {hospital.established}</>}
        description={`${hospital.name} was founded with a single mission: world-class medicine with a human touch that reaches every patient.`}
      />

      {/* Mission */}
      <section className="section bg-white">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <div className="overflow-hidden rounded-[36px]">
              <img src="/img/tech1.webp" srcSet={srcSet('/img/tech1.webp')} sizes="(min-width: 1024px) 400px, 50vw" alt="Our critical care unit" loading="lazy" className="aspect-[4/4.2] w-full object-cover" />
            </div>
            <div className="absolute -right-4 -bottom-6 hidden w-56 overflow-hidden rounded-3xl border-[6px] border-white shadow-lift sm:block md:-right-8">
              <img src="/img/case2.webp" srcSet={srcSet('/img/case2.webp')} sizes="(min-width: 1024px) 400px, 50vw" alt="A cardiologist explaining a scan to a patient" loading="lazy" className="aspect-square w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">
              <span className="size-1.5 rounded-full bg-brand-500" /> Our mission
            </span>
            <h2 className="mt-5 text-4xl leading-[1.1] md:text-5xl">
              Leading through clinical excellence <span className="serif-accent text-brand-600">and empathy.</span>
            </h2>
            <p className="mt-6 text-lg text-ink-soft">
              For over three decades we have been at the forefront of medical care in the region. But we've always
              believed a hospital is more than buildings and machines — it's the thousands of families we've served,
              and the lives transformed through dedicated, honest care.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-line pt-8">
              {stats.slice(0, 4).map((s) => (
                <div key={s.label}>
                  <Counter value={s.value} suffix={s.suffix} className="block font-heading text-4xl font-extrabold text-brand-700" />
                  <p className="mt-1 text-sm text-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-canvas">
        <div className="container-x">
          <SectionHeading align="center" eyebrow="What guides us" title={<>Our core <span className="serif-accent text-brand-600">values</span></>} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              const Icon = valueIcons[i % valueIcons.length]
              return (
                <Reveal key={v.title} delay={i * 0.06} className="group rounded-[28px] border border-line bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                  <span className="grid size-14 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-colors duration-500 group-hover:bg-brand-600 group-hover:text-white">
                    <Icon className="size-6" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-6 text-xl">{v.title}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{v.desc}</p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHeading eyebrow="Our journey" title={<>Milestones that <span className="serif-accent text-brand-600">shaped</span> us</>} />
            </div>
          </div>
          <ol className="relative space-y-4 lg:col-span-8">
            <span className="absolute top-2 bottom-2 left-[27px] w-px bg-gradient-to-b from-brand-300 via-line to-transparent" aria-hidden="true" />
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 0.05}>
                <li className="relative flex gap-6">
                  <span className="relative z-10 grid size-14 shrink-0 place-items-center rounded-full border-4 border-white bg-brand-600 font-heading text-xs font-bold text-white shadow-glow">
                    {m.year === 'Today' ? 'Now' : `'${m.year.slice(2)}`}
                  </span>
                  <div className="flex-1 rounded-3xl border border-line bg-white p-6 transition hover:shadow-soft">
                    <p className="font-heading text-2xl font-bold text-brand-700">{m.year}</p>
                    <p className="mt-1 text-ink-soft">{m.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
