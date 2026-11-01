import { Quote } from 'lucide-react'
import { caseStories, testimonials } from '@/data/site'
import { Reveal } from '@/components/ui/Reveal'
import { container } from '../shared'
import { Img, SectionHeader } from './ui'

const quotes = testimonials.slice(0, 3)

export function Stories() {
  return (
    <section id="stories" aria-labelledby="t2-stories" className="border-t border-[#e3ebe6] bg-white py-16 md:py-24">
      <div className={container}>
        <Reveal>
          <SectionHeader
            id="t2-stories"
            eyebrow="Patient stories"
            title="Stories of Recovery"
            description="Complex cases, handled with care — and the patients who went home to their families."
          />
        </Reveal>

        <ul className="mt-10 grid gap-5 md:mt-12 md:grid-cols-3">
          {caseStories.map((c, i) => (
            <li key={c.title}>
              <Reveal delay={i * 0.06} className="h-full">
                <article className="group relative isolate flex aspect-[1/1] flex-col justify-end overflow-hidden rounded-2xl bg-verdant-900 p-6 text-white md:aspect-[3/4.2] lg:aspect-[3/4]">
                  <Img
                    src={c.image}
                    sizes="(min-width: 768px) 33vw, 100vw"
                    alt=""
                    className="absolute inset-0 -z-20 size-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgb(11_35_27/0.95)_0%,rgb(11_35_27/0.7)_40%,rgb(11_35_27/0.05)_75%)]"
                  />
                  <p className="text-xs font-semibold tracking-[0.16em] text-sand uppercase">{c.tag}</p>
                  <h3 className="mt-2 font-sans text-lg leading-snug font-semibold text-white sm:text-xl">{c.title}</h3>
                  <p className="mt-4 inline-flex items-baseline gap-2 self-start rounded-full bg-white px-3.5 py-1.5 text-verdant-900">
                    <span className="font-fraunces text-base font-semibold">{c.metric.value}</span>
                    <span className="text-xs font-medium text-[#5b6b64]">{c.metric.label}</span>
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mt-8 rounded-2xl bg-sage p-6 sm:p-8 lg:p-10">
          <h3 className="sr-only">What families say</h3>
          <ul className="grid gap-8 md:grid-cols-3 md:gap-10">
            {quotes.map((t) => (
              <li key={t.name}>
                <figure className="flex h-full flex-col">
                  <Quote className="size-6 text-verdant-600" aria-hidden="true" />
                  <blockquote className="mt-3 flex-1 text-base leading-relaxed text-[#1d2b26]">“{t.text}”</blockquote>
                  <figcaption className="mt-4 border-t border-sand pt-3 text-sm">
                    <span className="font-semibold text-verdant-900">{t.name}</span>
                    <span className="text-[#5b6b64]"> · {t.role}</span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
