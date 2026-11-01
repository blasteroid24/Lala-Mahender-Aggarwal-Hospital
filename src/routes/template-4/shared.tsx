import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { btnOutline } from './constants'

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect width="40" height="40" rx="13" fill="#0e7c7b" />
      <circle cx="31" cy="9" r="5" fill="#f4a988" />
      <path d="M17 10h6v7h7v6h-7v7h-6v-7h-7v-6h7z" fill="#fff" />
    </svg>
  )
}

type SectionHeadProps = {
  eyebrow?: string
  title: ReactNode
  description?: string
  action?: { label: string; to: string }
  align?: 'split' | 'left'
  id?: string
}

/** Plain title on the left, one-line description + optional outline link on the right. */
export function SectionHead({ eyebrow, title, description, action, align = 'split', id }: SectionHeadProps) {
  return (
    <div
      className={cn(
        'mb-10 flex flex-col gap-5 sm:mb-12',
        align === 'split' && 'lg:flex-row lg:items-end lg:justify-between lg:gap-12',
      )}
    >
      <div className="max-w-2xl">
        {eyebrow && (
          <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-lagoon-700">
            <span className="h-1.5 w-6 rounded-full bg-peach-300" aria-hidden="true" />
            {eyebrow}
          </p>
        )}
        <h2
          id={id}
          className="font-dm text-[30px] leading-[1.15] font-semibold tracking-[-0.02em] text-lagoon-900 sm:text-[36px] lg:text-[40px]"
        >
          {title}
        </h2>
      </div>
      {(description || action) && (
        <div className="flex max-w-md flex-col items-start gap-4 lg:items-end lg:text-right">
          {description && <p className="text-[16px] leading-relaxed text-lagoon-900/75">{description}</p>}
          {action && (
            <Link to={action.to} className={cn(btnOutline, 'py-2.5 text-sm')}>
              {action.label}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          )}
        </div>
      )}
    </div>
  )
}
