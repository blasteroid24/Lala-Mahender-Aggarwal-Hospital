import { hospital } from '@/data/site'
import { cn } from '@/lib/utils'

export const tel = (n: string) => `tel:${n.replace(/\s+/g, '')}`
export const CALL = tel(hospital.phone)
export const EMERGENCY = tel(hospital.emergencyPhone)
export const WHATSAPP = `https://wa.me/${hospital.whatsapp}`

/** Darker shade of the shared `alert` red — passes AA with white / on white. */
export const ALERT_TEXT = 'text-[#c8283f]'
export const ALERT_BG = 'bg-[#c8283f] hover:bg-[#ad1f34]'

export const container = 'mx-auto w-full max-w-[1280px] px-5 sm:px-8'
export const sectionY = 'py-16 sm:py-20 lg:py-24'

export const btn =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[15px] font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2'
export const btnPrimary = cn(btn, 'bg-lagoon-600 text-white hover:bg-lagoon-700 focus-visible:outline-lagoon-600')
export const btnOutline = cn(
  btn,
  'border border-lagoon-200 bg-white text-lagoon-800 hover:border-lagoon-600 hover:text-lagoon-700 focus-visible:outline-lagoon-600',
)
