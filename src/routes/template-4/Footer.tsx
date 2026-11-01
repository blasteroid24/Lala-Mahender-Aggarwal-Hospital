import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone, Siren } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaYoutube } from 'react-icons/fa6'
import { hospital, specialities } from '@/data/site'
import { cn } from '@/lib/utils'
import { LogoMark } from './shared'
import { ALERT_BG, CALL, EMERGENCY, WHATSAPP, btn, container } from './constants'

const socials = [
  { label: 'Facebook', href: hospital.socials.facebook, icon: FaFacebookF },
  { label: 'Instagram', href: hospital.socials.instagram, icon: FaInstagram },
  { label: 'LinkedIn', href: hospital.socials.linkedin, icon: FaLinkedinIn },
  { label: 'YouTube', href: hospital.socials.youtube, icon: FaYoutube },
]

const linkCls = 'text-[15px] text-white/75 transition-colors hover:text-white'

export function Footer() {
  return (
    <footer className="bg-lagoon-900 text-white">
      {/* Emergency strip */}
      <div className="border-b border-white/10">
        <div className={cn(container, 'flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between')}>
          <div className="flex items-center gap-4">
            <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#c8283f]">
              <Siren className="size-6" aria-hidden="true" />
            </span>
            <div>
              <p className="font-dm text-[19px] font-semibold">In an emergency, call us right away</p>
              <p className="text-[15px] text-white/75">Our emergency team is ready day and night — {hospital.hours.emergency}.</p>
            </div>
          </div>
          <a href={EMERGENCY} className={cn(btn, ALERT_BG, 'shrink-0 text-white focus-visible:outline-white')}>
            <Phone className="size-4" aria-hidden="true" />
            {hospital.emergencyPhone}
          </a>
        </div>
      </div>

      <div className={cn(container, 'grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8')}>
        <div className="lg:col-span-4">
          <Link to="/template-4" className="inline-flex items-center gap-3" aria-label={`${hospital.name} — Home`}>
            <LogoMark className="size-10" />
            <span className="text-[17px] leading-tight font-semibold">{hospital.name}</span>
          </Link>
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-white/75">
            A {hospital.tagline.toLowerCase()} caring for families of every age since {hospital.established}.
          </p>
          <ul className="mt-6 flex gap-2" aria-label="Social media">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-lagoon-600 focus-visible:outline-white"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Hospital" className="lg:col-span-2">
          <h2 className="font-dm text-[15px] font-semibold text-white">Hospital</h2>
          <ul className="mt-4 space-y-3">
            <li><a href="#stages" className={linkCls}>Care for all ages</a></li>
            <li><a href="#why-us" className={linkCls}>Why families choose us</a></li>
            <li><Link to="/about" className={linkCls}>About us</Link></li>
            <li><a href="#faq" className={linkCls}>FAQ</a></li>
            <li><Link to="/contact" className={linkCls}>Contact</Link></li>
          </ul>
        </nav>

        <nav aria-label="Specialities" className="lg:col-span-3">
          <h2 className="font-dm text-[15px] font-semibold text-white">Specialities</h2>
          <ul className="mt-4 space-y-3">
            {specialities.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link to={`/specialities#${s.slug}`} className={linkCls}>
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/specialities" className="text-[15px] font-semibold text-peach-200 hover:text-white">
                View all →
              </Link>
            </li>
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className="font-dm text-[15px] font-semibold text-white">Contact</h2>
          <ul className="mt-4 space-y-4 text-[15px] text-white/75">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-[18px] shrink-0 text-lagoon-300" aria-hidden="true" />
              <a href={hospital.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {hospital.address}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-[18px] shrink-0 text-lagoon-300" aria-hidden="true" />
              <a href={CALL} className="hover:text-white">{hospital.phone}</a>
            </li>
            <li className="flex gap-3">
              <FaWhatsapp className="mt-0.5 size-[18px] shrink-0 text-lagoon-300" aria-hidden="true" />
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp us</a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-[18px] shrink-0 text-lagoon-300" aria-hidden="true" />
              <a href={`mailto:${hospital.email}`} className="break-all hover:text-white">{hospital.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className={cn(container, 'flex flex-col gap-2 py-6 text-[13px] text-white/60 sm:flex-row sm:justify-between')}>
          <p>© {hospital.name}. All rights reserved.</p>
          <p>OPD: {hospital.hours.opd}</p>
        </div>
      </div>
    </footer>
  )
}
