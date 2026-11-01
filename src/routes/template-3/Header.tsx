import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Clock, Mail, Menu, Phone, Siren, X } from 'lucide-react'
import { hospital } from '@/data/site'
import { cn } from '@/lib/utils'
import { btnCoral, callHref, container, emergencyHref, navItems } from './links'

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={cn('size-10 shrink-0', className)} aria-hidden="true">
      <rect width="40" height="40" rx="10" fill="#14306b" />
      <path d="M16.5 9h7v7.5H31v7h-7.5V31h-7v-7.5H9v-7h7.5z" fill="#fff" />
      <circle cx="31" cy="9" r="4" fill="#e4573d" />
    </svg>
  )
}

const linkCls =
  'rounded-md px-2.5 py-2 text-[14.5px] whitespace-nowrap font-medium text-navy-900/80 transition-colors hover:bg-navy-50 hover:text-navy-700'

function NavLinkItem({ item, className, onClick }: { item: (typeof navItems)[number]; className: string; onClick?: () => void }) {
  if ('to' in item)
    return (
      <Link to={item.to} className={className} onClick={onClick}>
        {item.label}
      </Link>
    )
  return (
    <a href={item.href} className={className} onClick={onClick}>
      {item.label}
    </a>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

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
    const mq = window.matchMedia('(min-width: 1280px)')
    const onMq = () => mq.matches && setOpen(false)
    window.addEventListener('keydown', onKey)
    mq.addEventListener('change', onMq)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onMq)
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      {/* Utility bar */}
      <div className="bg-navy-900 text-[13px] text-white/85">
        <div className={cn(container, 'flex h-10 items-center justify-between gap-4')}>
          <a href={emergencyHref} className="inline-flex items-center gap-2 font-semibold whitespace-nowrap text-coral-400 hover:text-coral-100">
            <Siren className="size-4" aria-hidden="true" />
            <span>
              24×7 Emergency: {hospital.emergencyPhone}
            </span>
          </a>
          <div className="hidden items-center gap-6 sm:flex">
            <a href={`mailto:${hospital.email}`} className="hidden items-center gap-2 hover:text-white md:inline-flex">
              <Mail className="size-4 text-white/60" aria-hidden="true" />
              {hospital.email}
            </a>
            <span className="inline-flex items-center gap-2">
              <Clock className="size-4 text-white/60" aria-hidden="true" />
              OPD: {hospital.hours.opd}
            </span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 border-b border-navy-100 bg-white">
        <div className={cn(container, 'flex h-[72px] items-center justify-between gap-4')}>
          <Link to="/template-3" className="flex min-w-0 items-center gap-3" aria-label={`${hospital.name} — home`}>
            <LogoMark />
            <span className="min-w-0 leading-tight">
              <span className="block font-montserrat text-[15px] font-semibold text-navy-900 sm:hidden">{hospital.shortName}</span>
              <span className="hidden font-montserrat text-[16px] font-semibold text-navy-900 sm:block">{hospital.name}</span>
              <span className="block text-xs text-navy-900/65">{hospital.tagline}</span>
            </span>
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-0.5 xl:flex">
            {navItems.map((item) => (
              <NavLinkItem key={item.label} item={item} className={linkCls} />
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <a href={emergencyHref} className={cn(btnCoral, 'hidden px-4 py-2.5 sm:inline-flex')}>
              <Siren className="size-4" aria-hidden="true" />
              Emergency
            </a>
            <a
              href={callHref}
              className="hidden items-center gap-2 rounded-lg border border-navy-700 px-4 py-2.5 text-sm whitespace-nowrap font-semibold text-navy-700 transition-colors hover:bg-navy-700 hover:text-white md:inline-flex"
            >
              <Phone className="size-4" aria-hidden="true" />
              Call us
            </a>
            <button
              ref={toggleRef}
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-lg border border-navy-100 text-navy-700 hover:bg-navy-50 xl:hidden"
              aria-expanded={open}
              aria-controls="t3-mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile / tablet menu */}
        <div
          id="t3-mobile-menu"
          hidden={!open}
          className="absolute inset-x-0 top-full h-[calc(100dvh-72px)] overflow-y-auto border-t border-navy-100 bg-white xl:hidden"
        >
          <nav aria-label="Mobile" className={cn(container, 'flex flex-col py-4')}>
            {navItems.map((item) => (
              <NavLinkItem
                key={item.label}
                item={item}
                onClick={close}
                className="border-b border-navy-100 py-4 font-montserrat text-[17px] font-medium text-navy-900 hover:text-navy-600"
              />
            ))}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a href={emergencyHref} className={cn(btnCoral, 'py-3.5')}>
                <Siren className="size-4" aria-hidden="true" />
                Emergency · {hospital.emergencyPhone}
              </a>
              <a
                href={callHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-navy-700 px-5 py-3.5 text-sm font-semibold text-navy-700"
              >
                <Phone className="size-4" aria-hidden="true" />
                Call us · {hospital.phone}
              </a>
            </div>
            <p className="mt-6 text-sm text-navy-900/70">
              OPD {hospital.hours.opd} · Emergency {hospital.hours.emergency}
            </p>
          </nav>
        </div>
      </header>
    </>
  )
}
