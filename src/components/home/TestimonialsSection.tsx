import { Quote, Star } from 'lucide-react'
import { testimonials } from '@/data/site'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { cn } from '@/lib/utils'

type T = (typeof testimonials)[number]

function TestimonialCard({ t }: { t: T }) {
  return (
    <figure className="flex w-[320px] shrink-0 flex-col justify-between rounded-3xl border border-line bg-white p-6 shadow-soft md:w-[380px] md:p-7">
      <div>
        <div className="flex items-center justify-between">
          <div className="flex gap-0.5 text-amber-400">
            {[0, 1, 2, 3, 4].map((i) => <Star key={i} className="size-4 fill-current" />)}
          </div>
          <Quote className="size-7 text-brand-100" />
        </div>
        <blockquote className="mt-4 text-[15px] leading-relaxed text-ink-soft">“{t.text}”</blockquote>
      </div>
      <figcaption className="mt-6 flex items-center gap-3">
        <span className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-brand-100 to-brand-200 font-heading text-sm font-bold text-brand-700">
          {t.name.split(' ').map((p) => p[0]).join('')}
        </span>
        <span>
          <span className="block text-sm font-semibold">{t.name}</span>
          <span className="text-xs text-muted">{t.role}</span>
        </span>
      </figcaption>
    </figure>
  )
}

function Row({ items, reverse }: { items: T[]; reverse?: boolean }) {
  return (
    <div className="mask-fade-x group flex overflow-hidden">
      <div
        className={cn('flex w-max animate-marquee gap-5 pr-5 group-hover:[animation-play-state:paused]', reverse && '[animation-direction:reverse]')}
        style={{ ['--marquee-duration' as string]: '60s' }}
      >
        {[...items, ...items].map((t, i) => (
          <TestimonialCard key={i} t={t} />
        ))}
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  const half = Math.ceil(testimonials.length / 2)
  return (
    <section className="section overflow-hidden bg-canvas">
      <div className="container-x">
        <SectionHeading
          align="center"
          eyebrow="Patient Stories"
          title={<>Stories of <span className="serif-accent text-brand-600">hope</span> & healing</>}
          description="Voices of recovery and gratitude from the families who trusted us with their care."
        />
      </div>
      <div className="space-y-5">
        <Row items={testimonials.slice(0, half)} />
        <Row items={testimonials.slice(half)} reverse />
      </div>
    </section>
  )
}
