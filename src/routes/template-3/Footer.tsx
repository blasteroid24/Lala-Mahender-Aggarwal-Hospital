import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaYoutube } from 'react-icons/fa6'
import { Clock, Mail, MapPin, Phone, Siren } from 'lucide-react'
import { hospital, specialities } from '@/data/site'
import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/lib/utils'
import { LogoMark } from './Header'
import { btnCoral, btnNavy, callHref, container, directionsHref, emergencyHref, headingCls, outlineBtn, whatsappHref } from './links'

export function ContactBand() {
  return (
    <section id="contact" aria-labelledby="t3-contact" className="bg-navy-50 py-16 md:py-20">
      <div className={container}>
        <Reveal>
          <div className="grid overflow-hidden rounded-2xl border border-navy-100 bg-white lg:grid-cols-[1.7fr_1fr]">
            <div className="p-7 sm:p-10">
              <h2 id="t3-contact" className={cn(headingCls, 'text-[28px] leading-tight md:text-[34px]')}>
                Visit or reach us
              </h2>
              <p className="mt-2 text-[15px] text-navy-900/75">Our front desk will guide you to the right specialist.</p>
              <dl className="mt-8 grid gap-6 sm:grid-cols-3">
                <div>
                  <dt className="flex items-center gap-2 text-[13px] font-semibold tracking-wider text-navy-600 uppercase">
                    <MapPin className="size-4" aria-hidden="true" /> Address
                  </dt>
                  <dd className="mt-2 text-[15px] leading-relaxed text-navy-900">{hospital.address}</dd>
                </div>
                <div>
                  <dt className="flex items-center gap-2 text-[13px] font-semibold tracking-wider text-navy-600 uppercase">
                    <Clock className="size-4" aria-hidden="true" /> Hours
                  </dt>
                  <dd className="mt-2 text-[15px] leading-relaxed text-navy-900">
                    OPD: {hospital.hours.opd}
                    <br />
                    Emergency: {hospital.hours.emergency}
                  </dd>
                </div>
                <div>
                  <dt className="flex items-center gap-2 text-[13px] font-semibold tracking-wider text-navy-600 uppercase">
                    <Phone className="size-4" aria-hidden="true" /> Phone
                  </dt>
                  <dd className="mt-2 text-[15px] leading-relaxed text-navy-900">
                    <a href={callHref} className="hover:text-navy-600 hover:underline">
                      {hospital.phone}
                    </a>
                    <br />
                    <a href={`mailto:${hospital.email}`} className="break-all hover:text-navy-600 hover:underline">
                      {hospital.email}
                    </a>
                  </dd>
                </div>
              </dl>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={directionsHref} target="_blank" rel="noreferrer" className={btnNavy}>
                  <MapPin className="size-4" aria-hidden="true" />
                  Get directions
                </a>
                <a href={whatsappHref} target="_blank" rel="noreferrer" className={cn(outlineBtn, 'px-5 py-3')}>
                  <FaWhatsapp className="size-4" aria-hidden="true" />
                  WhatsApp us
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center bg-coral-50 p-7 sm:p-10 lg:border-l lg:border-coral-100">
              <p className="flex items-center gap-2 text-[13px] font-semibold tracking-wider text-coral-700 uppercase">
                <Siren className="size-4" aria-hidden="true" /> Emergency · {hospital.hours.emergency}
              </p>
              <p className={cn(headingCls, 'mt-3 text-[22px] leading-snug')}>In an emergency, call us straight away.</p>
              <a href={emergencyHref} className={cn(btnCoral, 'mt-6 self-start px-6 py-3.5 text-base')}>
                <Phone className="size-4" aria-hidden="true" />
                {hospital.emergencyPhone}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

const socials = [
  { label: 'Facebook', href: hospital.socials.facebook, Icon: FaFacebookF },
  { label: 'Instagram', href: hospital.socials.instagram, Icon: FaInstagram },
  { label: 'LinkedIn', href: hospital.socials.linkedin, Icon: FaLinkedinIn },
  { label: 'YouTube', href: hospital.socials.youtube, Icon: FaYoutube },
]

const linkCls = 'text-white/75 transition-colors hover:text-white'

export function Footer() {
  return (
    <footer className="bg-navy-900 text-[15px] text-white/75">
      {/* Emergency strip */}
      <div className="border-b border-white/10">
        <div className={cn(container, 'flex flex-col items-start justify-between gap-4 py-6 sm:flex-row sm:items-center')}>
          <p className="flex items-center gap-3 font-montserrat text-[17px] font-semibold text-white">
            <span className="inline-flex size-10 items-center justify-center rounded-full bg-coral-600">
              <Siren className="size-5" aria-hidden="true" />
            </span>
            24 × 7 Emergency & Ambulance
          </p>
          <a href={emergencyHref} className={btnCoral}>
            <Phone className="size-4" aria-hidden="true" />
            Call {hospital.emergencyPhone}
          </a>
        </div>
      </div>

      <div className={cn(container, 'grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]')}>
        <div>
          <div className="flex items-center gap-3">
            <LogoMark className="rounded-[10px] ring-1 ring-white/30" />
            <span className="font-montserrat text-[16px] leading-tight font-semibold text-white">{hospital.name}</span>
          </div>
          <p className="mt-5 max-w-xs leading-relaxed">
            A {hospital.tagline.toLowerCase()} caring for families since {hospital.established}.
          </p>
          <ul className="mt-6 flex gap-2">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-white/40 hover:text-white"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-montserrat text-[15px] font-semibold text-white">Hospital</h2>
          <ul className="mt-4 space-y-2.5">
            <li><a href="#centres" className={linkCls}>Centres of Excellence</a></li>
            <li><a href="#facilities" className={linkCls}>Facilities</a></li>
            <li><a href="#stories" className={linkCls}>Patient stories</a></li>
            <li><a href="#faq" className={linkCls}>FAQ</a></li>
            <li><Link to="/about" className={linkCls}>About us</Link></li>
            <li><Link to="/contact" className={linkCls}>Contact</Link></li>
          </ul>
        </nav>

        <nav aria-label="Specialities">
          <h2 className="font-montserrat text-[15px] font-semibold text-white">Specialities</h2>
          <ul className="mt-4 space-y-2.5">
            {specialities.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link to={`/specialities#${s.slug}`} className={linkCls}>
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/specialities" className="font-semibold text-white hover:underline">
                All specialities →
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="font-montserrat text-[15px] font-semibold text-white">Contact</h2>
          <ul className="mt-4 space-y-3.5">
            <li className="flex gap-3">
              <MapPin className="mt-1 size-4 shrink-0 text-white/50" aria-hidden="true" />
              <a href={directionsHref} target="_blank" rel="noreferrer" className={linkCls}>{hospital.address}</a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-1 size-4 shrink-0 text-white/50" aria-hidden="true" />
              <a href={callHref} className={linkCls}>{hospital.phone}</a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-1 size-4 shrink-0 text-white/50" aria-hidden="true" />
              <a href={`mailto:${hospital.email}`} className={cn(linkCls, 'break-all')}>{hospital.email}</a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-1 size-4 shrink-0 text-white/50" aria-hidden="true" />
              <span>OPD {hospital.hours.opd}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className={cn(container, 'flex flex-col gap-2 py-6 text-[13.5px] text-white/60 sm:flex-row sm:justify-between')}>
          <p>© {hospital.name}. All rights reserved.</p>
          <p>Information on this site is for general guidance and is not medical advice.</p>
        </div>
      </div>
    </footer>
  )
}
