import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Mail, MapPin, Phone, Siren } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa6'
import { hospital, navLinks, specialities } from '@/data/site'
import { Logo } from '@/components/ui/Logo'

const socials = [
  { icon: FaFacebookF, href: hospital.socials.facebook, label: 'Facebook' },
  { icon: FaInstagram, href: hospital.socials.instagram, label: 'Instagram' },
  { icon: FaLinkedinIn, href: hospital.socials.linkedin, label: 'LinkedIn' },
  { icon: FaYoutube, href: hospital.socials.youtube, label: 'YouTube' },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-950 pb-28 text-brand-100/70 lg:pb-0">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl" />

      {/* Emergency strip */}
      <div className="container-x relative pt-16">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur md:flex-row md:items-center md:p-8">
          <div className="flex items-center gap-5">
            <span className="relative grid size-14 shrink-0 place-items-center rounded-2xl bg-alert text-white">
              <span className="absolute inset-0 animate-pulse-ring rounded-2xl bg-alert/60" />
              <Siren className="relative size-6" />
            </span>
            <div>
              <p className="font-heading text-xl font-bold text-white md:text-2xl">In an emergency, every second counts.</p>
              <p className="text-sm">Our emergency department and ambulances are ready 24 × 7.</p>
            </div>
          </div>
          <a href={`tel:${hospital.emergencyPhone}`} className="btn btn-alert w-full py-4 text-base md:w-auto">
            <Phone className="size-4" /> Call {hospital.emergencyPhone}
          </a>
        </div>
      </div>

      <div className="container-x relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-4">
          <Logo tone="light" />
          <p className="max-w-sm text-sm leading-relaxed">
            For over three decades, we have brought together exceptional doctors and genuine warmth — making quality
            healthcare accessible to every family we serve.
          </p>
          <div className="flex gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="grid size-10 place-items-center rounded-full border border-white/10 text-brand-100 transition hover:-translate-y-0.5 hover:border-mint-400 hover:bg-mint-400 hover:text-brand-950"
              >
                <s.icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <h3 className="mb-5 text-sm font-semibold text-white">Explore</h3>
          <ul className="space-y-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="transition hover:text-white">{l.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="mb-5 text-sm font-semibold text-white">Centres of Excellence</h3>
          <ul className="grid grid-cols-1 gap-3 text-sm">
            {specialities.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link to={`/specialities#${s.slug}`} className="transition hover:text-white">{s.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4 text-sm lg:col-span-3">
          <h3 className="mb-5 text-sm font-semibold text-white">Visit us</h3>
          <a href={hospital.mapsUrl} target="_blank" rel="noreferrer" className="flex gap-3 transition hover:text-white">
            <MapPin className="mt-0.5 size-4 shrink-0 text-mint-400" /> {hospital.address}
          </a>
          <a href={`tel:${hospital.phone}`} className="flex gap-3 transition hover:text-white">
            <Phone className="mt-0.5 size-4 shrink-0 text-mint-400" /> {hospital.phone}
          </a>
          <a href={`mailto:${hospital.email}`} className="flex gap-3 transition hover:text-white">
            <Mail className="mt-0.5 size-4 shrink-0 text-mint-400" /> {hospital.email}
          </a>
          <p className="flex gap-3">
            <Clock className="mt-0.5 size-4 shrink-0 text-mint-400" /> {hospital.hours.opd}
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 pt-2 font-semibold text-mint-300 transition hover:gap-3">
            Get directions <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs md:flex-row">
          <p>© {new Date().getFullYear()} {hospital.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
            <a href="#" className="hover:text-white">Patient Rights</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
