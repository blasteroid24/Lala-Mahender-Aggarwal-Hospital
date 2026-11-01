/**
 * Site-wide on/off switches. Flip these instead of deleting code.
 *
 * - showDoctors: doctor listings will come from the HMIS integration later.
 *   While false, the Doctors section, "Find a Doctor" link and /doctors page are hidden.
 * - showBooking: online booking forms/buttons and package prices. While false,
 *   calls-to-action fall back to Call / WhatsApp / Directions.
 * - showTemplateSwitcher: the Template 1/2/3/4 bar used to present design options
 *   to the client. Set VITE_SHOW_TEMPLATE_SWITCHER=false (or edit here) at launch.
 */
export const features = {
  showDoctors: false,
  showBooking: false,
  showTemplateSwitcher: import.meta.env.VITE_SHOW_TEMPLATE_SWITCHER !== 'false',
}

export const templates = [
  { path: '/', label: 'Template 1', name: 'Classic Care' },
  { path: '/template-2', label: 'Template 2', name: 'Visionary' },
  { path: '/template-3', label: 'Template 3', name: 'Assurance' },
  { path: '/template-4', label: 'Template 4', name: 'Every Stage of Life' },
]
