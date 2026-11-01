import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, m } from 'motion/react'
import { ArrowUpRight, CalendarCheck, Clock, Mail, MapPin, Menu, Phone, Siren, X } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa6'
import { cn } from '@/lib/utils'
import { hospital, navLinks } from '@/data/site'
import { Logo } from '@/components/ui/Logo'
import { useBooking } from '@/components/booking/BookingProvider'
import { features } from '@/config/features'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { openBooking } = useBooking()
  const { pathname } = useLocation()
  // The menu is "open for a path" — navigating anywhere closes it automatically
  const [menuPath, setMenuPath] = useState<string | null>(null)
  const menuOpen = menuPath === pathname
  const setMenuOpen = (open: boolean) => setMenuPath(open ? pathname : null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  return (
    <>
      {/* Utility bar */}
      <div className="relative z-50 hidden bg-brand-950 text-[13px] text-brand-100/80 md:block">
        <div className="container-x flex h-10 items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Clock className="size-3.5 text-mint-400" /> OPD {hospital.hours.opd}
            </span>
            <a href={`mailto:${hospital.email}`} className="hidden items-center gap-2 transition hover:text-white lg:flex">
              <Mail className="size-3.5 text-mint-400" /> {hospital.email}
            </a>
            <a href={hospital.mapsUrl} target="_blank" rel="noreferrer" className="hidden items-center gap-2 transition hover:text-white xl:flex">
              <MapPin className="size-3.5 text-mint-400" /> {hospital.address}
            </a>
          </div>
          <a href={`tel:${hospital.emergencyPhone}`} className="group flex items-center gap-2 font-semibold text-white">
            <span className="relative flex size-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-alert" />
              <span className="relative size-2 rounded-full bg-alert" />
            </span>
            24/7 Emergency:
            <span className="text-mint-300 transition group-hover:text-white">{hospital.emergencyPhone}</span>
          </a>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={cn(
          'sticky top-0 z-50 transition-all duration-500 ease-out-expo',
          scrolled ? 'border-b border-line/80 bg-white/80 shadow-soft backdrop-blur-xl' : 'bg-white',
        )}
      >
        <div className={cn('container-x flex items-center justify-between gap-6 transition-all duration-500', scrolled ? 'h-16' : 'h-20')}>
          <Logo />

          <nav className="hidden items-center gap-1 rounded-full border border-line bg-canvas/70 p-1 lg:flex" aria-label="Main">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  cn(
                    'relative rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    isActive ? 'text-brand-700' : 'text-ink-soft hover:text-ink',
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <m.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-white shadow-soft"
                        transition={{ type: 'spring', damping: 30, stiffness: 350 }}
                      />
                    )}
                    <span className="relative">{link.name}</span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${hospital.phone}`}
              className="hidden size-11 place-items-center rounded-full border border-line text-ink-soft transition hover:border-brand-300 hover:text-brand-700 sm:grid xl:hidden"
              aria-label={`Call ${hospital.phone}`}
            >
              <Phone className="size-4.5" />
            </a>
            <a href={`tel:${hospital.phone}`} className="mr-2 hidden items-center gap-3 xl:flex">
              <span className="grid size-10 place-items-center rounded-full bg-brand-50 text-brand-600">
                <Phone className="size-4" />
              </span>
              <span className="leading-tight">
                <span className="block text-[11px] text-muted">Appointments</span>
                <span className="text-sm font-semibold">{hospital.phone}</span>
              </span>
            </a>
            {features.showBooking ? (
              <button onClick={() => openBooking()} className="btn btn-primary hidden sm:inline-flex">
                <CalendarCheck className="size-4" />
                Book Appointment
              </button>
            ) : (
              <a href={`https://wa.me/${hospital.whatsapp}`} target="_blank" rel="noreferrer" className="btn btn-primary hidden sm:inline-flex">
                <FaWhatsapp className="size-4" />
                WhatsApp us
              </a>
            )}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="grid size-11 place-items-center rounded-full bg-ink text-white lg:hidden"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[45] overflow-y-auto bg-white pt-20 lg:hidden"
          >
            <div className="container-x flex min-h-full flex-col py-6">
              <nav className="flex flex-col" aria-label="Mobile">
                {navLinks.map((link, i) => (
                  <m.div
                    key={link.path}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i, ease: [0.16, 1, 0.3, 1], duration: 0.5 }}
                  >
                    <Link
                      to={link.path}
                      className="flex items-center justify-between border-b border-line py-5 font-heading text-2xl font-semibold"
                    >
                      {link.name}
                      <ArrowUpRight className="size-5 text-brand-500" />
                    </Link>
                  </m.div>
                ))}
              </nav>
              <div className="mt-auto space-y-3 pt-10 pb-8">
                <a href={`tel:${hospital.emergencyPhone}`} className="flex items-center gap-4 rounded-2xl bg-alert-soft p-4">
                  <span className="grid size-12 place-items-center rounded-full bg-alert text-white">
                    <Siren className="size-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-alert">24/7 Emergency</span>
                    <span className="font-heading text-lg font-bold">{hospital.emergencyPhone}</span>
                  </span>
                </a>
                {features.showBooking ? (
                  <button onClick={() => { setMenuOpen(false); openBooking() }} className="btn btn-primary w-full py-4 text-base">
                    <CalendarCheck className="size-5" /> Book Appointment
                  </button>
                ) : (
                  <a href={`tel:${hospital.phone}`} className="btn btn-primary w-full py-4 text-base">
                    <Phone className="size-5" /> Call {hospital.phone}
                  </a>
                )}
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  )
}
