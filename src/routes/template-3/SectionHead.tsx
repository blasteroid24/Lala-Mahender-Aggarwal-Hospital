import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { headingCls } from './links'

type Props = {
  id: string
  eyebrow: string
  title: string
  desc: string
  action?: ReactNode
  className?: string
}

/** Plain institutional section header: title left, one-line description + action right. */
export function SectionHead({ id, eyebrow, title, desc, action, className }: Props) {
  return (
    <div className={cn('flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-10', className)}>
      <div className="max-w-2xl">
        <p className="flex items-center gap-2.5 text-[13px] font-semibold tracking-[0.14em] text-navy-600 uppercase">
          <span aria-hidden="true" className="h-0.5 w-6 rounded-full bg-coral-500" />
          {eyebrow}
        </p>
        <h2 id={id} className={cn(headingCls, 'mt-3 text-[30px] leading-tight md:text-[38px]')}>
          {title}
        </h2>
      </div>
      <div className="flex flex-col items-start gap-4 md:max-w-sm md:items-end md:text-right">
        <p className="text-[15px] leading-relaxed text-navy-900/75 md:text-base">{desc}</p>
        {action}
      </div>
    </div>
  )
}

