import { hospital } from '@/data/site'

/** Contact actions shared across Template 3 — the only calls-to-action it uses. */
export const tel = (n: string) => `tel:${n.replace(/\s+/g, '')}`
export const callHref = tel(hospital.phone)
export const emergencyHref = tel(hospital.emergencyPhone)
export const whatsappHref = `https://wa.me/${hospital.whatsapp}`
export const directionsHref = hospital.mapsUrl

export const navItems = [
  { label: 'Centres', href: '#centres' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Patient stories', href: '#stories' },
  { label: 'Specialities', to: '/specialities' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
] as const

/** Section rhythm + container used by every block on this page. */
export const container = 'mx-auto w-full max-w-[1280px] px-5 sm:px-8'
export const headingCls = 'font-montserrat font-semibold tracking-tight text-navy-900'

/** Outline "View all"-style button in navy. */
export const outlineBtn =
  'inline-flex items-center justify-center gap-2 rounded-lg border border-navy-700 px-4 py-2.5 text-sm font-semibold text-navy-700 transition-colors hover:bg-navy-700 hover:text-white'
/** Solid buttons. Coral-600 keeps white small text at AA (4.8:1). */
export const btnBase =
  'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold whitespace-nowrap transition-colors'
export const btnNavy = `${btnBase} bg-navy-700 text-white hover:bg-navy-800`
export const btnCoral = `${btnBase} bg-coral-600 text-white hover:bg-coral-700`
