import { CalendarCheck, Phone, Siren } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa6'
import { hospital } from '@/data/site'
import { useBooking } from '@/components/booking/BookingProvider'

/** Thumb-reachable action bar for phones — the three things patients need most. */
export function MobileDock() {
  const { openBooking } = useBooking()
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden">
      <div className="mx-auto flex max-w-md items-center gap-2 rounded-full border border-line bg-white/90 p-1.5 shadow-lift backdrop-blur-xl">
        <a
          href={`tel:${hospital.emergencyPhone}`}
          aria-label="Call emergency"
          className="grid size-12 shrink-0 place-items-center rounded-full bg-alert-soft text-alert"
        >
          <Siren className="size-5" />
        </a>
        <button onClick={() => openBooking()} className="btn btn-primary h-12 flex-1">
          <CalendarCheck className="size-4" /> Book Appointment
        </button>
        <a
          href={`https://wa.me/${hospital.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp us"
          className="grid size-12 shrink-0 place-items-center rounded-full bg-mint-500/10 text-mint-500"
        >
          <FaWhatsapp className="size-5" />
        </a>
        <a
          href={`tel:${hospital.phone}`}
          aria-label="Call hospital"
          className="hidden size-12 shrink-0 place-items-center rounded-full bg-canvas text-ink-soft min-[400px]:grid"
        >
          <Phone className="size-5" />
        </a>
      </div>
    </div>
  )
}
