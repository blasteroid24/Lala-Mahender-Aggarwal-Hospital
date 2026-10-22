import { useMemo, useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowRight, CalendarCheck, Check, Hospital, Video } from 'lucide-react'
import { doctors, hospital, specialities } from '@/data/site'
import { cn } from '@/lib/utils'
import type { BookingPreset } from './BookingProvider'

const SLOTS = ['09:30', '10:30', '11:30', '12:30', '15:00', '16:00', '17:00', '18:30']

function nextDays(count: number) {
  const days: Date[] = []
  const start = new Date()
  for (let i = 0; i < count; i++) {
    const d = new Date(start)
    d.setDate(start.getDate() + i)
    if (d.getDay() !== 0) days.push(d) // OPD closed on Sundays
  }
  return days
}

type BookingFormProps = {
  preset?: BookingPreset
  onDone?: () => void
  compact?: boolean
}

/**
 * Front-end only appointment request form.
 * Hook `handleSubmit` up to your backend / EmailJS / CRM before going live.
 */
export function BookingForm({ preset = {}, onDone, compact }: BookingFormProps) {
  const presetDoctor = doctors.find((d) => d.id === preset.doctorId)
  const [speciality, setSpeciality] = useState(presetDoctor?.speciality ?? preset.speciality ?? '')
  const [doctorId, setDoctorId] = useState(preset.doctorId ?? '')
  const [mode, setMode] = useState<'visit' | 'video'>('visit')
  const days = useMemo(() => nextDays(8), [])
  const [day, setDay] = useState(0)
  const [slot, setSlot] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const doctorOptions = speciality ? doctors.filter((d) => d.speciality === speciality) : doctors

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSending(true)
    // TODO: send `new FormData(e.currentTarget)` to the hospital's booking endpoint.
    setTimeout(() => {
      setSending(false)
      setSubmitted(true)
    }, 700)
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      {submitted ? (
        <motion.div
          key="done"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center py-10 text-center"
        >
          <div className="relative mb-6 grid size-20 place-items-center rounded-full bg-mint-500 text-white">
            <span className="absolute inset-0 animate-pulse-ring rounded-full bg-mint-400" />
            <Check className="relative size-9" strokeWidth={2.5} />
          </div>
          <h3 className="text-2xl">Request received</h3>
          <p className="mt-3 max-w-sm text-ink-soft">
            Our care team will call you shortly to confirm your appointment for{' '}
            <strong className="text-ink">
              {days[day].toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' })}
              {slot && `, ${slot}`}
            </strong>
            .
          </p>
          <p className="mt-6 text-sm text-muted">
            Need help now? Call <a className="font-semibold text-brand-700" href={`tel:${hospital.phone}`}>{hospital.phone}</a>
          </p>
          {onDone && (
            <button type="button" onClick={onDone} className="btn btn-dark mt-8">
              Done
            </button>
          )}
        </motion.div>
      ) : (
        <motion.form key="form" onSubmit={handleSubmit} className="space-y-6" exit={{ opacity: 0 }}>
          {/* Consultation type */}
          <div className="grid grid-cols-2 gap-2 rounded-2xl bg-canvas p-1.5">
            {([
              { id: 'visit', label: 'Hospital visit', icon: Hospital },
              { id: 'video', label: 'Video consult', icon: Video },
            ] as const).map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setMode(m.id)}
                className={cn(
                  'relative flex items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold transition-colors',
                  mode === m.id ? 'text-brand-700' : 'text-muted hover:text-ink',
                )}
              >
                {mode === m.id && (
                  <motion.span layoutId={`mode-pill-${compact ? 'c' : 'd'}`} className="absolute inset-0 rounded-xl bg-white shadow-soft" />
                )}
                <m.icon className="relative size-4" />
                <span className="relative">{m.label}</span>
              </button>
            ))}
          </div>
          <input type="hidden" name="mode" value={mode} />

          <div className={'grid gap-4 sm:grid-cols-2'}>
            <label className="space-y-1.5">
              <span className="text-xs font-semibold text-ink-soft">Speciality</span>
              <select
                name="speciality"
                className="field"
                value={speciality}
                onChange={(e) => {
                  setSpeciality(e.target.value)
                  setDoctorId('')
                }}
              >
                <option value="">Any speciality</option>
                {specialities.map((s) => (
                  <option key={s.slug} value={s.slug}>{s.name}</option>
                ))}
              </select>
            </label>
            <label className="space-y-1.5">
              <span className="text-xs font-semibold text-ink-soft">Doctor</span>
              <select name="doctor" className="field" value={doctorId} onChange={(e) => setDoctorId(e.target.value)}>
                <option value="">First available doctor</option>
                {doctorOptions.map((d) => (
                  <option key={d.id} value={d.id}>{d.name}</option>
                ))}
              </select>
            </label>
          </div>

          {/* Date */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-ink-soft">Preferred date</span>
            <div className="scrollbar-none -mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
              {days.map((d, i) => (
                <button
                  key={d.toISOString()}
                  type="button"
                  onClick={() => setDay(i)}
                  className={cn(
                    'flex w-16 shrink-0 flex-col items-center rounded-2xl border py-2.5 transition-all',
                    day === i
                      ? 'border-brand-600 bg-brand-600 text-white'
                      : 'border-line bg-white text-ink hover:border-brand-300',
                  )}
                >
                  <span className={cn('text-[11px] font-medium uppercase', day === i ? 'text-brand-100' : 'text-muted')}>
                    {i === 0 ? 'Today' : d.toLocaleDateString('en-IN', { weekday: 'short' })}
                  </span>
                  <span className="font-heading text-lg font-bold">{d.getDate()}</span>
                </button>
              ))}
            </div>
            <input type="hidden" name="date" value={days[day].toDateString()} />
          </div>

          {/* Time */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-ink-soft">Preferred time</span>
            <div className="grid grid-cols-4 gap-2">
              {SLOTS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSlot(s)}
                  className={cn(
                    'rounded-xl border py-2 text-sm font-medium tabular-nums transition-all',
                    slot === s ? 'border-brand-600 bg-brand-50 text-brand-700' : 'border-line text-ink-soft hover:border-brand-300',
                  )}
                >
                  {s}
                </button>
              ))}
            </div>
            <input type="hidden" name="time" value={slot} />
          </div>

          <div className={'grid gap-4 sm:grid-cols-2'}>
            <label className="space-y-1.5">
              <span className="text-xs font-semibold text-ink-soft">Patient name</span>
              <input required name="name" className="field" placeholder="Full name" autoComplete="name" />
            </label>
            <label className="space-y-1.5">
              <span className="text-xs font-semibold text-ink-soft">Mobile number</span>
              <input
                required
                name="phone"
                type="tel"
                inputMode="tel"
                pattern="[0-9+\s-]{10,15}"
                className="field"
                placeholder="10-digit mobile"
                autoComplete="tel"
              />
            </label>
          </div>

          <button type="submit" disabled={sending} className="btn btn-primary w-full py-4 text-base">
            {sending ? (
              <span className="size-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
            ) : (
              <>
                <CalendarCheck className="size-5" />
                Request appointment
                <ArrowRight className="size-4" />
              </>
            )}
          </button>
          <p className="text-center text-xs text-muted">
            For medical emergencies, call <a href={`tel:${hospital.emergencyPhone}`} className="font-semibold text-alert">{hospital.emergencyPhone}</a> immediately.
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  )
}
