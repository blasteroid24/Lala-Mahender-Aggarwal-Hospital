import type { ImgHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { cn, srcSet } from '@/lib/utils'
import { hospital } from '@/data/site'
import { btn } from '../shared'

/** Simple shield-and-cross mark in the Visionary greens. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <path d="M20 2.5 35 8v11.5C35 29 28.6 35.4 20 37.5 11.4 35.4 5 29 5 19.5V8z" fill="#1f5c47" />
      <path d="M17.2 11.5h5.6v6.2H29v5.6h-6.2v6.2h-5.6v-6.2H11v-5.6h6.2z" fill="#fff" />
      <path d="M20 2.5 35 8v1.6L20 4.2 5 9.6V8z" fill="#d9c9a8" />
    </svg>
  )
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      to="/template-2"
      aria-label={`${hospital.name} — Home`}
      className="flex min-w-0 items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-verdant-600"
    >
      <LogoMark className="size-10 shrink-0" />
      <span className="flex min-w-0 flex-col leading-none">
        <span className={cn('font-fraunces text-[17px] font-semibold tracking-tight sm:text-lg', light ? 'text-white' : 'text-verdant-900')}>
          <span className="lg:hidden">{hospital.shortName}</span>
          <span className="hidden lg:inline">{hospital.name}</span>
        </span>
        <span className={cn('mt-1.5 text-[10px] font-semibold tracking-[0.12em] whitespace-nowrap uppercase sm:tracking-[0.2em]', light ? 'text-sand' : 'text-verdant-600')}>
          {hospital.tagline}
        </span>
      </span>
    </Link>
  )
}

type ImgProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> & { src: string; sizes: string }

/** Responsive image pointing at the pre-resized variants in /img/r. */
export function Img({ src, sizes, width = 1024, height = 1024, loading = 'lazy', ...props }: ImgProps) {
  return (
    <img
      src={src}
      srcSet={srcSet(src)}
      sizes={sizes}
      width={width}
      height={height}
      loading={loading}
      decoding="async"
      {...props}
    />
  )
}

/** Section heading: title + one line on the left, an outline "view all" link on the right. */
export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  id,
}: {
  eyebrow?: string
  title: ReactNode
  description: string
  action?: { label: string; to: string }
  id: string
}) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        {eyebrow && (
          <p className="mb-3 flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-verdant-700 uppercase">
            <span className="h-px w-8 bg-sand" aria-hidden="true" />
            {eyebrow}
          </p>
        )}
        <h2 id={id} className="font-fraunces text-[30px] leading-[1.15] font-medium text-verdant-900 sm:text-[36px] lg:text-[40px]">
          {title}
        </h2>
        <p className="mt-3 text-[15px] text-[#5b6b64] md:text-base">{description}</p>
      </div>
      {action && (
        <Link to={action.to} className={cn(btn.outline, 'self-start md:self-auto')}>
          {action.label}
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      )}
    </div>
  )
}
