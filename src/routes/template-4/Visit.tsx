import { Clock, Mail, MapPin, Navigation, Phone, Siren } from 'lucide-react'
import { hospital } from '@/data/site'
import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/lib/utils'
import { SectionHead } from './shared'
import { ALERT_TEXT, CALL, EMERGENCY, btnOutline, btnPrimary, container, sectionY } from './constants'

export function Visit() {
  const rows = [
    { icon: MapPin, label: 'Address', value: hospital.address },
    { icon: Clock, label: 'OPD hours', value: hospital.hours.opd },
    { icon: Siren, label: 'Emergency', value: hospital.hours.emergency },
    { icon: Phone, label: 'Phone', value: hospital.phone, href: CALL },
    { icon: Mail, label: 'Email', value: hospital.email, href: `mailto:${hospital.email}` },
  ]
  return (
    <section id="visit" aria-labelledby="t4-visit" className={cn('bg-lagoon-50', sectionY)}>
      <div className={container}>
        <SectionHead
          id="t4-visit"
          eyebrow="Visit us"
          title="Easy to find, ready when you need us"
          description="Walk in during OPD hours, or come straight to emergency at any time of day or night."
        />
        <Reveal className="grid gap-6 lg:grid-cols-12">
          <div className="overflow-hidden rounded-3xl bg-lagoon-100 ring-1 ring-lagoon-100 lg:col-span-7">
            <iframe
              title={`Map showing ${hospital.name}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(hospital.address)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[320px] w-full border-0 sm:h-[400px] lg:h-full lg:min-h-[460px]"
            />
          </div>
          <div className="flex flex-col rounded-3xl bg-white p-7 shadow-soft ring-1 ring-lagoon-100 sm:p-9 lg:col-span-5">
            <h3 className="font-dm text-[22px] font-semibold tracking-[-0.015em] text-lagoon-900">{hospital.name}</h3>
            <dl className="mt-6 space-y-5">
              {rows.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-lagoon-100 text-lagoon-700">
                    <Icon className="size-[18px]" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <dt className="text-[13px] font-medium text-lagoon-900/60">{label}</dt>
                    <dd className="text-[15px] font-medium break-words text-lagoon-900 sm:text-[16px]">
                      {href ? (
                        <a href={href} className="hover:text-lagoon-700 hover:underline">
                          {value}
                        </a>
                      ) : (
                        value
                      )}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
            <div className="mt-8 flex flex-wrap gap-3 lg:mt-auto lg:pt-8">
              <a href={hospital.mapsUrl} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
                <Navigation className="size-4" aria-hidden="true" />
                Get directions
              </a>
              <a href={EMERGENCY} className={cn(btnOutline, ALERT_TEXT, 'hover:text-[#ad1f34]')}>
                <Siren className="size-4" aria-hidden="true" />
                Emergency
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
