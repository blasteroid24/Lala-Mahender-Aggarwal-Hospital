import { CalendarCheck, Check } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa6'
import { doctors, hospital, specialities } from '@/data/site'
import { features } from '@/config/features'
import { PageHero } from '@/components/ui/PageHero'
import { Reveal } from '@/components/ui/Reveal'
import { useBooking } from '@/components/booking/BookingProvider'
import { srcSet } from '@/lib/utils'

export default function Specialities() {
  const { openBooking } = useBooking()

  return (
    <>
      <PageHero
        crumb="Specialities"
        title={<>Centres of <span className="serif-accent text-gradient pr-2">excellence</span></>}
        description="Integrated departments where specialists, nurses and technology work together around you."
      >
        <div className="scrollbar-none mx-auto mt-10 flex max-w-4xl gap-2 overflow-x-auto pb-1 md:flex-wrap md:justify-center">
          {specialities.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink-soft transition hover:border-brand-300 hover:text-brand-700"
            >
              <s.icon className="size-4 text-brand-500" /> {s.name.split(' &')[0]}
            </a>
          ))}
        </div>
      </PageHero>

      <section className="section bg-white">
        <div className="container-x grid gap-5 md:grid-cols-2">
          {specialities.map((s, i) => {
            const team = features.showDoctors ? doctors.filter((d) => d.speciality === s.slug) : []
            return (
              <Reveal key={s.slug} delay={(i % 2) * 0.06}>
                <article
                  id={s.slug}
                  className="group flex h-full scroll-mt-28 flex-col rounded-[28px] border border-line bg-white p-7 transition-all duration-500 hover:border-brand-200 hover:shadow-lift md:p-9"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid size-16 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-glow">
                      <s.icon className="size-7" strokeWidth={1.75} />
                    </span>
                    {team.length > 0 && (
                      <div className="flex -space-x-2">
                        {team.map((d) =>
                          d.image ? (
                            <img key={d.id} src={d.image} srcSet={srcSet(d.image)} sizes="36px" alt={d.name} title={d.name} className="size-9 rounded-full border-2 border-white object-cover object-top" />
                          ) : (
                            <span key={d.id} title={d.name} className="grid size-9 place-items-center rounded-full border-2 border-white bg-brand-100 text-xs font-bold text-brand-700">
                              {d.name.replace('Dr. ', '')[0]}
                            </span>
                          ),
                        )}
                      </div>
                    )}
                  </div>
                  <h2 className="mt-7 text-2xl">{s.name}</h2>
                  <p className="mt-3 flex-1 text-ink-soft">{s.description}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {s.highlights.map((h) => (
                      <li key={h} className="inline-flex items-center gap-1.5 rounded-full bg-canvas px-3 py-1.5 text-xs font-medium text-ink-soft">
                        <Check className="size-3.5 text-mint-500" strokeWidth={3} /> {h}
                      </li>
                    ))}
                  </ul>
                  {features.showBooking ? (
                    <button
                      onClick={() => openBooking({ speciality: s.slug })}
                      className="btn mt-8 self-start border border-line bg-white text-ink hover:border-brand-600 hover:bg-brand-600 hover:text-white"
                    >
                      <CalendarCheck className="size-4" /> Book a consultation
                    </button>
                  ) : (
                    <a
                      href={`https://wa.me/${hospital.whatsapp}?text=${encodeURIComponent(`Hello, I'd like to know more about ${s.name}.`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn mt-8 self-start border border-line bg-white text-ink hover:border-brand-600 hover:bg-brand-600 hover:text-white"
                    >
                      <FaWhatsapp className="size-4" /> Ask about {s.name.split(' &')[0]}
                    </a>
                  )}
                </article>
              </Reveal>
            )
          })}
        </div>
      </section>
    </>
  )
}
