import { Clock, MapPin, Phone, ShieldCheck } from 'lucide-react'
import { hospital } from '@/data/site'
import { BookingForm } from '@/components/booking/BookingForm'
import { Reveal } from '@/components/ui/Reveal'

export function BookingSection() {
  return (
    <section className="section relative overflow-hidden bg-canvas">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="container-x relative grid gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <span className="eyebrow bg-white">
            <span className="size-1.5 rounded-full bg-brand-500" /> Appointments
          </span>
          <h2 className="mt-5 text-4xl leading-[1.05] md:text-[52px]">
            Book a visit in <span className="serif-accent text-brand-600">under a minute.</span>
          </h2>
          <p className="mt-5 max-w-md text-lg text-ink-soft">
            Choose a speciality, pick a time that suits you and we'll confirm by phone. Prefer to talk? We're a call away.
          </p>
          <ul className="mt-10 space-y-5">
            {[
              { icon: Phone, label: 'Appointments', value: hospital.phone, href: `tel:${hospital.phone}` },
              { icon: Clock, label: 'OPD timings', value: hospital.hours.opd },
              { icon: MapPin, label: 'Address', value: hospital.address, href: hospital.mapsUrl },
            ].map((row) => (
              <li key={row.label} className="flex items-start gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white text-brand-600 shadow-soft">
                  <row.icon className="size-5" />
                </span>
                <span>
                  <span className="block text-xs font-medium text-muted">{row.label}</span>
                  {row.href ? (
                    <a href={row.href} className="font-semibold transition hover:text-brand-700">{row.value}</a>
                  ) : (
                    <span className="font-semibold">{row.value}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-7">
          <div className="rounded-[32px] border border-line bg-white p-6 shadow-lift md:p-10">
            <div className="mb-6 flex items-center gap-2 text-sm text-muted">
              <ShieldCheck className="size-4 text-mint-500" /> No payment required to request a slot
            </div>
            <BookingForm />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
