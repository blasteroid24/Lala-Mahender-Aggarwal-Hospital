import { m } from 'motion/react'
import { ArrowUpRight, BadgeCheck, CalendarDays, Languages } from 'lucide-react'
import type { Doctor } from '@/data/site'
import { specialities } from '@/data/site'
import { cn, srcSet } from '@/lib/utils'
import { useBooking } from '@/components/booking/BookingProvider'

function initials(name: string) {
  return name
    .replace(/^Dr\.?\s*/, '')
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
}

export function DoctorCard({ doctor, className }: { doctor: Doctor; className?: string }) {
  const { openBooking } = useBooking()
  const spec = specialities.find((s) => s.slug === doctor.speciality)
  const Icon = spec?.icon

  return (
    <m.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className={cn('group flex flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-soft transition-shadow duration-500 hover:shadow-lift', className)}
    >
      <div className="relative aspect-[4/4.4] overflow-hidden bg-gradient-to-br from-brand-50 to-brand-100">
        {doctor.image ? (
          <img
            src={doctor.image}
            srcSet={srcSet(doctor.image)}
            sizes="(min-width: 1024px) 300px, (min-width: 640px) 45vw, 90vw"
            alt={doctor.name}
            loading="lazy"
            decoding="async"
            className="size-full object-cover object-top transition-transform duration-700 ease-out-expo group-hover:scale-105"
          />
        ) : (
          <div className="relative grid size-full place-items-center">
            <div className="bg-grid absolute inset-0 opacity-60" />
            <span className="relative font-serif text-7xl text-brand-600/80 italic">{initials(doctor.name)}</span>
            {Icon && <Icon className="absolute right-5 bottom-5 size-10 text-brand-300" strokeWidth={1.25} />}
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink backdrop-blur">
          <BadgeCheck className="size-3.5 text-brand-600" /> {doctor.experience}+ yrs
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold text-brand-600">{doctor.role}</p>
        <h3 className="mt-1 text-lg">{doctor.name}</h3>
        <p className="mt-1 text-sm text-muted">{doctor.qualifications}</p>
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-ink-soft">
          <span className="flex items-center gap-1.5"><CalendarDays className="size-3.5 text-muted" />{doctor.available}</span>
          <span className="flex items-center gap-1.5"><Languages className="size-3.5 text-muted" />{doctor.languages.join(', ')}</span>
        </div>
        <button
          onClick={() => openBooking({ doctorId: doctor.id })}
          className="btn mt-5 w-full justify-between border border-line bg-canvas pr-2 text-ink transition hover:border-brand-600 hover:bg-brand-600 hover:text-white"
        >
          Book appointment
          <span className="grid size-8 place-items-center rounded-full bg-white text-brand-600">
            <ArrowUpRight className="size-4" />
          </span>
        </button>
      </div>
    </m.article>
  )
}
