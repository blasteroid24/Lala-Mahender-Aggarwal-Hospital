import { ArrowRight, Check } from 'lucide-react'
import { packages } from '@/data/site'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { useBooking } from '@/components/booking/BookingProvider'
import { cn } from '@/lib/utils'

export function PackagesSection() {
  const { openBooking } = useBooking()
  return (
    <section id="packages" className="section bg-white">
      <div className="container-x">
        <SectionHeading
          align="center"
          eyebrow="Preventive Health"
          title={<>Health check-ups that <span className="serif-accent text-brand-600">catch</span> it early</>}
          description="Thoughtfully designed packages with same-day reports and a doctor consultation included."
        />
        <div className="grid items-stretch gap-5 lg:grid-cols-3">
          {packages.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <div
                className={cn(
                  'relative flex h-full flex-col rounded-[28px] border p-7 transition-all duration-500 hover:-translate-y-1 md:p-8',
                  p.featured
                    ? 'border-brand-900 bg-brand-950 text-white shadow-lift'
                    : 'border-line bg-white hover:shadow-lift',
                )}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-8 rounded-full bg-mint-400 px-3 py-1 text-xs font-bold text-brand-950">
                    Most popular
                  </span>
                )}
                <p className={cn('text-sm font-medium', p.featured ? 'text-mint-300' : 'text-brand-600')}>{p.for}</p>
                <h3 className={cn('mt-1 text-xl', p.featured && 'text-white')}>{p.name}</h3>
                <div className="mt-6 flex items-end gap-2">
                  <span className={cn('font-heading text-5xl font-extrabold tracking-tight', p.featured ? 'text-white' : 'text-ink')}>{p.price}</span>
                  <span className={cn('pb-2 text-sm', p.featured ? 'text-brand-200' : 'text-muted')}>· {p.tests} tests</span>
                </div>
                <ul className={cn('mt-7 flex-1 space-y-3 border-t pt-7 text-sm', p.featured ? 'border-white/10' : 'border-line')}>
                  {p.items.map((it) => (
                    <li key={it} className="flex items-start gap-3">
                      <span className={cn('mt-0.5 grid size-5 shrink-0 place-items-center rounded-full', p.featured ? 'bg-mint-400/20 text-mint-300' : 'bg-brand-50 text-brand-600')}>
                        <Check className="size-3" strokeWidth={3} />
                      </span>
                      <span className={p.featured ? 'text-brand-100' : 'text-ink-soft'}>{it}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => openBooking({ speciality: 'laboratory' })}
                  className={cn('btn mt-8 w-full py-3.5', p.featured ? 'btn-light' : 'btn-dark')}
                >
                  Book this package <ArrowRight className="size-4" />
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
