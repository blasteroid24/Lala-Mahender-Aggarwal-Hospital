import { Clock, Mail, MapPin, Navigation, Phone, Siren } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa6'
import { hospital } from '@/data/site'
import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/lib/utils'
import { btn, container, links } from '../shared'

const rows = [
  { icon: MapPin, label: 'Address', value: hospital.address },
  { icon: Clock, label: 'OPD hours', value: hospital.hours.opd },
  { icon: Siren, label: 'Emergency', value: `${hospital.hours.emergency} · ${hospital.emergencyPhone}`, href: links.emergency },
  { icon: Phone, label: 'Front desk', value: hospital.phone, href: links.call },
  { icon: Mail, label: 'Email', value: hospital.email, href: `mailto:${hospital.email}` },
]

export function Visit() {
  return (
    <section id="visit" aria-labelledby="t2-visit" className="bg-white py-16 md:py-24">
      <div className={cn(container, 'grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-14')}>
        <Reveal>
          <p className="mb-3 flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-verdant-700 uppercase">
            <span className="h-px w-8 bg-sand" aria-hidden="true" />
            Visit us
          </p>
          <h2 id="t2-visit" className="font-fraunces text-[30px] leading-[1.15] font-medium text-verdant-900 sm:text-[36px] lg:text-[40px]">
            We’re here when you need us.
          </h2>
          <dl className="mt-8 divide-y divide-[#e3ebe6] border-y border-[#e3ebe6]">
            {rows.map((r) => (
              <div key={r.label} className="flex gap-4 py-4">
                <r.icon className="mt-0.5 size-5 shrink-0 text-verdant-700" aria-hidden="true" />
                <div className="min-w-0">
                  <dt className="text-xs font-semibold tracking-[0.12em] text-[#5b6b64] uppercase">{r.label}</dt>
                  <dd className="mt-1 text-[15px] break-words text-[#1d2b26] md:text-base">
                    {r.href ? (
                      <a href={r.href} className="font-medium hover:text-verdant-700 hover:underline">
                        {r.value}
                      </a>
                    ) : (
                      r.value
                    )}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={links.directions} target="_blank" rel="noopener noreferrer" className={btn.primary}>
              <Navigation className="size-4" aria-hidden="true" />
              Get directions
            </a>
            <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className={btn.outline}>
              <FaWhatsapp className="size-4" aria-hidden="true" />
              WhatsApp us
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="min-h-[340px] overflow-hidden rounded-2xl border border-[#e0e9e3] bg-sage lg:min-h-0">
          <iframe
            title={`Map showing ${hospital.name}`}
            src={links.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block size-full min-h-[340px] border-0"
          />
        </Reveal>
      </div>
    </section>
  )
}
