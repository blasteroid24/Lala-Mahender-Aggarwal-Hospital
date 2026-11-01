import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Phone, Siren, X } from 'lucide-react'
import { hospital } from '@/data/site'
import { cn } from '@/lib/utils'
import { LogoMark } from './shared'
import { ALERT_TEXT, CALL, EMERGENCY, btnPrimary, container } from './constants'

const nav = [
  { label: 'Care for all ages', href: '#stages' },
  { label: 'Specialities', href: '/specialities' },
  { label: 'Why us', href: '#why-us' },
  { label: 'About', href: '/about' },
  { label: 'Visit us', href: '#visit' },
  { label: 'Contact', href: '/contact' },
]

function NavItem({ href, label, className, onClick }: { href: string; label: string; className?: string; onClick?: () => void }) {
  return href.startsWith('#') ? (
    <a href={href} className={className} onClick={onClick}>
      {label}
    </a>
  ) : (
    <Link to={href} className={className} onClick={onClick}>
      {label}
    </Link>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  const [menuTop, setMenuTop] = useState(72)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1280px)')
    const onChange = () => mq.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return (
    <header ref={headerRef} className="sticky top-0 z-50 border-b border-lagoon-100 bg-white">
      <div className={cn(container, 'flex h-[72px] items-center justify-between gap-4')}>
        <Link to="/template-4" className="flex min-w-0 items-center gap-3" aria-label={`${hospital.name} — Home`}>
          <LogoMark className="size-10 shrink-0" />
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-[16px] font-semibold tracking-[-0.01em] text-lagoon-900">
              <span className="sm:hidden">{hospital.shortName}</span>
              <span className="hidden sm:inline">{hospital.name}</span>
            </span>
            <span className="block text-[12px] text-lagoon-900/65">Since {hospital.established}</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 xl:flex">
          {nav.map((n) => (
            <NavItem
              key={n.label}
              {...n}
              className="rounded-full px-3 py-2 text-[15px] whitespace-nowrap font-medium text-lagoon-900/80 transition-colors hover:bg-lagoon-50 hover:text-lagoon-700"
            />
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          <a
            href={EMERGENCY}
            className={cn('hidden items-center gap-2 text-[14px] font-semibold min-[1360px]:inline-flex', ALERT_TEXT)}
          >
            <Siren className="size-4" aria-hidden="true" />
            <span>
              <span className="sr-only">Emergency: </span>
              {hospital.emergencyPhone}
            </span>
          </a>
          <a href={CALL} className={cn(btnPrimary, 'hidden px-4 py-2.5 text-sm sm:inline-flex')}>
            <Phone className="size-4" aria-hidden="true" />
            Call us
          </a>
          <a
            href={CALL}
            aria-label={`Call us on ${hospital.phone}`}
            className="grid size-11 place-items-center rounded-full bg-lagoon-600 text-white sm:hidden"
          >
            <Phone className="size-[18px]" aria-hidden="true" />
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="grid size-11 place-items-center rounded-full border border-lagoon-100 text-lagoon-900 xl:hidden"
            aria-expanded={open}
            aria-controls="t4-mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => {
              if (headerRef.current) setMenuTop(headerRef.current.getBoundingClientRect().bottom)
              setOpen((o) => !o)
            }}
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="t4-mobile-menu"
          style={{ top: menuTop }}
          className="fixed inset-x-0 bottom-0 overflow-y-auto border-t border-lagoon-100 bg-white xl:hidden"
        >
          <nav aria-label="Mobile" className={cn(container, 'flex flex-col py-4')}>
            {nav.map((n) => (
              <NavItem
                key={n.label}
                {...n}
                onClick={() => setOpen(false)}
                className="border-b border-lagoon-100 py-4 text-[17px] font-medium text-lagoon-900 hover:text-lagoon-700"
              />
            ))}
            <div className="mt-6 grid gap-3">
              <a href={CALL} className={btnPrimary}>
                <Phone className="size-4" aria-hidden="true" />
                Call us · {hospital.phone}
              </a>
              <a
                href={EMERGENCY}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#c8283f]/30 bg-alert-soft px-5 py-3 text-[15px] font-semibold text-[#c8283f]"
              >
                <Siren className="size-4" aria-hidden="true" />
                Emergency · {hospital.emergencyPhone}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
