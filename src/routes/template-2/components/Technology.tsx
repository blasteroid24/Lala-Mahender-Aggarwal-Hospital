import { facilities } from '@/data/site'
import { Reveal } from '@/components/ui/Reveal'
import { container } from '../shared'
import { Img, SectionHeader } from './ui'

// tech1–tech4 only (tech.webp reads as sci-fi)
const cards = facilities.filter((f) => f.img !== '/img/tech.webp').slice(0, 4)

export function Technology() {
  return (
    <section id="technology" aria-labelledby="t2-tech" className="bg-sage py-16 md:py-24">
      <div className={container}>
        <Reveal>
          <SectionHeader
            id="t2-tech"
            eyebrow="Technology"
            title="Precision in Every Detail"
            description="Proven, modern equipment in the hands of teams who know how to use it well."
          />
        </Reveal>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 md:mt-12">
          {cards.map((f, i) => (
            <li key={f.title}>
              <Reveal delay={i * 0.06} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#dde8e1] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgb(23_61_49/0.3)]">
                  <div className="overflow-hidden">
                    <Img
                      src={f.img}
                      sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw"
                      alt=""
                      className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <span className="self-start rounded-full bg-sand-soft px-2.5 py-1 text-[11px] font-semibold tracking-[0.12em] text-verdant-800 uppercase">
                      {f.tag}
                    </span>
                    <h3 className="mt-3 font-sans text-[17px] leading-snug font-semibold text-[#1d2b26]">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5b6b64]">{f.desc}</p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
