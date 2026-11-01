import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Clock, Mail, Menu, Phone, Siren, X } from 'lucide-react'
import { hospital } from '@/data/site'
import { cn } from '@/lib/utils'
import { btn, container, links, pageNav } from '../shared'
import { Logo } from './ui'

const pageLinks = [
  { name: 'All specialities', to: '/specialities' },
  { name: 'Our story', to: '/about' },
  { name: 'Contact', to: '/contact' },
]

const navLink =
  'rounded-md px-3 py-2 text-[15px] font-medium text-[#1d2b26] transition hover:text-verdant-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verdant-600'

export function UtilityBar() {
  return (
    <div className="hidden bg-verdant-900 text-[13px] text-verdant-100 md:block">
      <div className={cn(container, 'flex h-9 items-center justify-between gap-6')}>
        <div className="flex items-center gap-6">
          <a href={links.emergency} className="flex items-center gap-2 font-medium text-white hover:underline">
            <Siren className="size-3.5 text-sand" aria-hidden="true" />
            24×7 Emergency: {hospital.emergencyPhone}
          </a>
          <span className="flex items-center gap-2">
            <Clock className="size-3.5 text-sand" aria-hidden="true" />
            OPD {hospital.hours.opd}
          </span>
        </div>
        <a href={`mailto:${hospital.email}`} className="hidden items-center gap-2 hover:text-white lg:flex">
          <Mail className="size-3.5 text-sand" aria-hidden="true" />
          {hospital.email}
        </a>
      </div>
    </div>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    const toggle = toggleRef.current
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
      toggle?.focus()
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={cn('sticky top-0 border-b border-[#e3ebe6] bg-white', open ? 'z-[70]' : 'z-50')}>
      <div className={cn(container, 'flex h-16 items-center justify-between gap-4 lg:h-[76px]')}>
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-1 xl:flex">
          {pageNav.map((l) => (
            <a key={l.href} href={l.href} className={navLink}>
              {l.name}
            </a>
          ))}
          <Link to="/contact" className={navLink}>
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <a href={links.call} className={cn(btn.outline, 'hidden px-4 py-2.5 sm:inline-flex')}>
            <Phone className="size-4" aria-hidden="true" />
            Call
          </a>
          <a href={links.emergency} className={cn(btn.primary, 'px-4 py-2.5')}>
            <Siren className="size-4" aria-hidden="true" />
            <span className="hidden min-[400px]:inline">Emergency</span>
            <span className="sr-only min-[400px]:hidden">Emergency</span>
          </a>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="t2-menu"
            className="grid size-11 place-items-center rounded-full text-verdant-900 transition hover:bg-verdant-50 focus-visible:outline-2 focus-visible:outline-verdant-600 xl:hidden"
          >
            <Menu className="size-6" aria-hidden="true" />
            <span className="sr-only">Open menu</span>
          </button>
        </div>
      </div>

      {open && (
        <div
          id="t2-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-[70] flex flex-col overflow-y-auto bg-white xl:hidden"
        >
          <div className={cn(container, 'flex h-16 shrink-0 items-center justify-between border-b border-[#e3ebe6]')}>
            <Logo />
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              className="grid size-11 place-items-center rounded-full text-verdant-900 transition hover:bg-verdant-50 focus-visible:outline-2 focus-visible:outline-verdant-600"
            >
              <X className="size-6" aria-hidden="true" />
              <span className="sr-only">Close menu</span>
            </button>
          </div>
          <nav aria-label="Mobile" className={cn(container, 'flex flex-1 flex-col py-6')}>
            <ul className="divide-y divide-[#e3ebe6]">
              {pageNav.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={close} className="block py-4 font-fraunces text-xl text-verdant-900">
                    {l.name}
                  </a>
                </li>
              ))}
              {pageLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} onClick={close} className="block py-4 font-fraunces text-xl text-verdant-900">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-auto grid gap-3 pt-8">
              <a href={links.emergency} className={btn.primary}>
                <Siren className="size-4" aria-hidden="true" />
                24×7 Emergency · {hospital.emergencyPhone}
              </a>
              <a href={links.call} className={btn.outline}>
                <Phone className="size-4" aria-hidden="true" />
                Call {hospital.phone}
              </a>
              <p className="mt-2 text-center text-sm text-[#5b6b64]">OPD {hospital.hours.opd}</p>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
