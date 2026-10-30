import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { m, useScroll, useTransform } from 'motion/react'
import { ArrowRight, Award, HandHeart, ShieldCheck } from 'lucide-react'
import { hospital } from '@/data/site'
import { Reveal } from '@/components/ui/Reveal'
import { srcSet } from '@/lib/utils'

const points = [
  { icon: ShieldCheck, title: 'Safety first', text: 'Infection-control and patient-safety protocols audited every quarter.' },
  { icon: HandHeart, title: 'Transparent care', text: 'Clear treatment plans and upfront estimates — no surprises.' },
  { icon: Award, title: 'Proven outcomes', text: 'Experienced teams handling complex, high-risk cases every day.' },
]

export function LegacyBanner() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section className="section bg-white">
      <div className="container-x">
        <div ref={ref} className="relative overflow-hidden rounded-[36px] bg-brand-800 md:rounded-[48px]">
          <m.img
            style={{ y }}
            src="/img/banner.webp"
            srcSet={srcSet('/img/banner.webp')}
            sizes="(min-width: 1280px) 1220px, 100vw"
            alt="A senior doctor speaking warmly with a mother and daughter"
            loading="lazy"
            className="absolute inset-x-0 -top-[8%] h-[116%] w-full object-cover object-[70%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-950/95 via-brand-900/75 to-transparent md:via-brand-900/40" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-950/90 to-transparent" />

          <div className="relative flex flex-col gap-12 p-8 py-14 md:p-14 lg:p-20">
            <Reveal className="max-w-xl text-white">
              <span className="eyebrow border-white/15 bg-white/10 text-brand-100">
                <span className="size-1.5 rounded-full bg-mint-400" /> Since {hospital.established}
              </span>
              <h2 className="mt-5 text-4xl leading-[1.05] text-white md:text-6xl">
                Three decades.
                <br />
                <span className="serif-accent text-mint-300">One promise.</span>
              </h2>
              <p className="mt-6 max-w-md text-lg text-brand-100/85">
                What began as a mission to make quality healthcare accessible to everyone is today a trusted
                multi-speciality hospital — still guided by the same simple promise: expert doctors, genuine warmth.
              </p>
              <Link to="/about" className="btn btn-light mt-8">
                Our story <ArrowRight className="size-4" />
              </Link>
            </Reveal>

            <div className="grid gap-3 md:grid-cols-3">
              {points.map((p, i) => (
                <Reveal
                  key={p.title}
                  delay={0.1 + i * 0.08}
                  className="flex items-start gap-4 rounded-2xl border border-white/15 bg-white/10 p-5 text-white backdrop-blur-md"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/15">
                    <p.icon className="size-5 text-mint-300" />
                  </span>
                  <div>
                    <p className="font-heading font-semibold">{p.title}</p>
                    <p className="mt-1 text-sm text-brand-100/80">{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
