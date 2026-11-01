import { hospital } from '@/data/site'

/** Contact links used across Template 2. */
export const links = {
  call: `tel:${hospital.phone.replace(/\s+/g, '')}`,
  emergency: `tel:${hospital.emergencyPhone.replace(/\s+/g, '')}`,
  whatsapp: `https://wa.me/${hospital.whatsapp}`,
  checkup: `https://wa.me/${hospital.whatsapp}?text=${encodeURIComponent('Hello, I would like to know about health check-ups at your hospital.')}`,
  directions: hospital.mapsUrl,
  mapEmbed: `https://www.google.com/maps?q=${encodeURIComponent(hospital.address)}&output=embed`,
}

/** In-page anchors shown in the header + footer. */
export const pageNav = [
  { name: 'Specialities', href: '#centres' },
  { name: 'About', href: '#about' },
  { name: 'Technology', href: '#technology' },
  { name: 'Stories', href: '#stories' },
  { name: 'Visit us', href: '#visit' },
]

export const container = 'mx-auto w-full max-w-[1280px] px-5 sm:px-8'

/** Shared button styles (green focus ring instead of the template-1 teal). */
const btnBase =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold whitespace-nowrap transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-2'

export const btn = {
  primary: `${btnBase} bg-verdant-700 text-white hover:bg-verdant-800 focus-visible:outline-verdant-600`,
  outline: `${btnBase} border border-verdant-700/30 bg-white text-verdant-800 hover:border-verdant-700 hover:bg-verdant-50 focus-visible:outline-verdant-600`,
  white: `${btnBase} bg-white text-verdant-800 hover:bg-verdant-50 focus-visible:outline-white`,
  outlineWhite: `${btnBase} border border-white/60 text-white hover:bg-white/10 hover:border-white focus-visible:outline-white`,
}
