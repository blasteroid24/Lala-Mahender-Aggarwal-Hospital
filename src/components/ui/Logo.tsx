import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { hospital } from '@/data/site'

type LogoProps = {
  tone?: 'dark' | 'light'
  className?: string
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="lma-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#16879f" />
          <stop offset="1" stopColor="#0b2a3c" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="12" fill="url(#lma-g)" />
      <path d="M16.5 9h7v7.5H31v7h-7.5V31h-7v-7.5H9v-7h7.5z" fill="#fff" />
      <path d="M11 21.5h5l2-3.5 3 6 2-2.5h6" fill="none" stroke="#4fdcb4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Logo({ tone = 'dark', className }: LogoProps) {
  const light = tone === 'light'
  return (
    <Link to="/" className={cn('flex items-center gap-3', className)} aria-label={`${hospital.name} — Home`}>
      <LogoMark className="size-10 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className={cn('font-heading text-[15px] font-bold tracking-tight sm:text-base', light ? 'text-white' : 'text-ink')}>
          <span className="sm:hidden">{hospital.shortName}</span>
          <span className="hidden sm:inline">{hospital.name}</span>
        </span>
        <span className={cn('mt-1 text-[10px] font-semibold uppercase tracking-[0.22em]', light ? 'text-brand-200' : 'text-brand-600')}>
          {hospital.tagline}
        </span>
      </span>
    </Link>
  )
}
