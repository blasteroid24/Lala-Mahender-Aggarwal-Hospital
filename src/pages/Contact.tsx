import { Clock, Mail, MapPin, Navigation, Phone, Siren } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa6'
import { hospital } from '@/data/site'
import { PageHero } from '@/components/ui/PageHero'
import { Reveal } from '@/components/ui/Reveal'
import { BookingForm } from '@/components/booking/BookingForm'
import { features } from '@/config/features'

const channels = [
  { icon: Siren, label: '24/7 Emergency', value: hospital.emergencyPhone, href: `tel:${hospital.emergencyPhone}`, tone: 'alert' },
  { icon: Phone, label: 'Appointments', value: hospital.phone, href: `tel:${hospital.phone}` },
  { icon: FaWhatsapp, label: 'WhatsApp', value: 'Chat with us', href: `https://wa.me/${hospital.whatsapp}` },
  { icon: Mail, label: 'Email', value: hospital.email, href: `mailto:${hospital.email}` },
] as const

export default function Contact() {
  return (
    <>
      <PageHero
        crumb="Contact"
        title={<>We're here <span className="serif-accent text-gradient pr-2">for you</span></>}
        description="Reach our team any time — for appointments, reports, insurance or just a question."
      />

      <section className="bg-white pb-20 md:pb-28">
        <div className="container-x -mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.05}>
              <a
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="group flex h-full items-center gap-4 rounded-3xl border border-line bg-white p-5 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
              >
                <span
                  className={
                    'grid size-12 shrink-0 place-items-center rounded-2xl transition-colors ' +
                    ('tone' in c ? 'bg-alert-soft text-alert group-hover:bg-alert group-hover:text-white' : 'bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white')
                  }
                >
                  <c.icon className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-muted">{c.label}</span>
                  <span className="block truncate font-semibold">{c.value}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="container-x mt-16 grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            {features.showBooking ? (
              <div className="rounded-[32px] border border-line bg-white p-6 shadow-lift md:p-10">
                <h2 className="text-3xl">Request an appointment</h2>
                <p className="mt-2 mb-8 text-muted">We'll call you back to confirm your slot.</p>
                <BookingForm />
              </div>
            ) : (
              <div className="flex h-full flex-col rounded-[32px] border border-line bg-white p-6 shadow-lift md:p-10">
                <h2 className="text-3xl">Talk to our care team</h2>
                <p className="mt-2 text-muted">
                  Call or message us and we'll guide you to the right specialist — for appointments, reports,
                  insurance or any question at all.
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <a href={`tel:${hospital.phone}`} className="btn btn-primary py-4 text-base">
                    <Phone className="size-5" /> Call {hospital.phone}
                  </a>
                  <a href={`https://wa.me/${hospital.whatsapp}`} target="_blank" rel="noreferrer" className="btn btn-ghost py-4 text-base">
                    <FaWhatsapp className="size-5" /> WhatsApp us
                  </a>
                </div>
                <dl className="mt-auto grid gap-4 border-t border-line pt-8 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-brand-600">OPD</dt>
                    <dd className="mt-1 text-ink-soft">{hospital.hours.opd}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-alert">Emergency</dt>
                    <dd className="mt-1 text-ink-soft">{hospital.hours.emergency}</dd>
                  </div>
                </dl>
              </div>
            )}
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-4 lg:col-span-5">
            <div className="relative min-h-[320px] flex-1 overflow-hidden rounded-[32px] border border-line bg-canvas">
              <iframe
                title="Hospital location"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(hospital.address)}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 size-full grayscale-[0.3]"
              />
            </div>
            <div className="rounded-[28px] bg-brand-950 p-7 text-brand-100/80">
              <p className="flex items-start gap-3">
                <MapPin className="mt-1 size-5 shrink-0 text-mint-400" />
                <span className="text-white">{hospital.address}</span>
              </p>
              <p className="mt-4 flex items-start gap-3 text-sm">
                <Clock className="mt-0.5 size-5 shrink-0 text-mint-400" />
                <span>
                  OPD: {hospital.hours.opd}
                  <br />
                  Emergency: {hospital.hours.emergency}
                </span>
              </p>
              <a href={hospital.mapsUrl} target="_blank" rel="noreferrer" className="btn btn-light mt-6">
                <Navigation className="size-4" /> Get directions
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
