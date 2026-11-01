import { Link } from 'react-router-dom'
import { Siren } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaYoutube } from 'react-icons/fa6'
import { hospital, specialities } from '@/data/site'
import { cn } from '@/lib/utils'
import { btn, container, links, pageNav } from '../shared'
import { Logo } from './ui'

const socials = [
  { icon: FaFacebookF, label: 'Facebook', href: hospital.socials.facebook },
  { icon: FaInstagram, label: 'Instagram', href: hospital.socials.instagram },
  { icon: FaLinkedinIn, label: 'LinkedIn', href: hospital.socials.linkedin },
  { icon: FaYoutube, label: 'YouTube', href: hospital.socials.youtube },
  { icon: FaWhatsapp, label: 'WhatsApp', href: links.whatsapp },
]

const linkCls = 'text-verdant-100/85 transition hover:text-white focus-visible:outline-2 focus-visible:outline-white'

export function Footer() {
  return (
    <footer className="bg-verdant-900 text-[15px] text-verdant-100">
      {/* Emergency strip */}
      <div className="border-b border-white/10 bg-verdant-950">
        <div className={cn(container, 'flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between')}>
          <p className="flex items-center gap-3 text-white">
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white/10">
              <Siren className="size-5 text-sand" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-sm text-verdant-200">Medical emergency? We’re open {hospital.hours.emergency.replace('Open ', '')}.</span>
              <span className="block font-fraunces text-xl font-medium sm:text-2xl">{hospital.emergencyPhone}</span>
            </span>
          </p>
          <a href={links.emergency} className={cn(btn.white, 'self-start sm:self-auto')}>
            <Siren className="size-4" aria-hidden="true" />
            Call emergency
          </a>
        </div>
      </div>

      <div className={cn(container, 'grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-12')}>
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-verdant-200">
            Caring for families since {hospital.established} — with experience, honesty and modern medicine.
          </p>
          <ul className="mt-6 flex gap-2">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid size-10 place-items-center rounded-full border border-white/15 text-white transition hover:border-sand hover:text-sand focus-visible:outline-2 focus-visible:outline-white"
                >
                  <s.icon className="size-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer — explore">
          <h2 className="font-sans text-sm font-semibold tracking-[0.14em] text-sand uppercase">Explore</h2>
          <ul className="mt-4 space-y-2.5">
            {pageNav.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={linkCls}>
                  {l.name}
                </a>
              </li>
            ))}
            <li>
              <Link to="/about" className={linkCls}>Our story</Link>
            </li>
            <li>
              <Link to="/contact" className={linkCls}>Contact</Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Footer — specialities">
          <h2 className="font-sans text-sm font-semibold tracking-[0.14em] text-sand uppercase">Specialities</h2>
          <ul className="mt-4 space-y-2.5">
            {specialities.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link to={`/specialities#${s.slug}`} className={linkCls}>
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/specialities" className="font-medium text-white underline-offset-4 hover:underline">
                View all
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="font-sans text-sm font-semibold tracking-[0.14em] text-sand uppercase">Contact</h2>
          <address className="mt-4 space-y-2.5 not-italic">
            <p className="text-verdant-100/85">{hospital.address}</p>
            <p>
              <a href={links.call} className={linkCls}>{hospital.phone}</a>
            </p>
            <p>
              <a href={`mailto:${hospital.email}`} className={cn(linkCls, 'break-all')}>{hospital.email}</a>
            </p>
            <p className="text-verdant-100/85">OPD {hospital.hours.opd}</p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className={cn(container, 'flex flex-col gap-2 py-6 text-[13px] text-verdant-200 sm:flex-row sm:justify-between')}>
          <p>© {hospital.name}. All rights reserved.</p>
          <p>{hospital.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
