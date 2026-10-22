import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Reveal } from './Reveal'

type SectionHeadingProps = {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
  action?: ReactNode
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'light',
  action,
  className,
}: SectionHeadingProps) {
  const dark = tone === 'dark'
  return (
    <div
      className={cn(
        'mb-12 flex flex-col gap-6 md:mb-16',
        align === 'center' ? 'items-center text-center' : 'md:flex-row md:items-end md:justify-between',
        className,
      )}
    >
      <Reveal className={cn('max-w-2xl space-y-4', align === 'center' && 'mx-auto')}>
        {eyebrow && (
          <span className={cn('eyebrow', dark && 'border-white/15 bg-white/10 text-brand-100')}>
            <span className={cn('size-1.5 rounded-full', dark ? 'bg-mint-400' : 'bg-brand-500')} />
            {eyebrow}
          </span>
        )}
        <h2 className={cn('text-3xl leading-[1.1] sm:text-4xl lg:text-[52px]', dark && 'text-white')}>{title}</h2>
        {description && (
          <p className={cn('text-base md:text-lg', dark ? 'text-brand-100/80' : 'text-ink-soft')}>{description}</p>
        )}
      </Reveal>
      {action && <Reveal delay={0.1} className="shrink-0">{action}</Reveal>}
    </div>
  )
}
