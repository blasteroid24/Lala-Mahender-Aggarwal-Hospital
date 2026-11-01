import { NavLink } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { features, templates } from '@/config/features'

/**
 * Presentation-only bar for switching between the landing-page design options.
 * Hidden when `features.showTemplateSwitcher` is false.
 */
export function TemplateSwitcher() {
  if (!features.showTemplateSwitcher) return null
  return (
    <div className="relative z-[60] border-b border-slate-200 bg-slate-50 text-slate-600">
      <div className="mx-auto flex h-11 w-full max-w-[1280px] items-center gap-3 px-4 sm:px-8">
        <span className="hidden shrink-0 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 md:block">
          Design preview
        </span>
        <nav aria-label="Design templates" className="grid flex-1 grid-cols-4 gap-1 md:flex md:justify-end">
          {templates.map((t) => (
            <NavLink
              key={t.path}
              to={t.path}
              end
              className={({ isActive }) =>
                cn(
                  'shrink-0 rounded-full px-1.5 py-1.5 text-center text-[11px] font-semibold whitespace-nowrap transition min-[400px]:text-xs sm:px-3.5 sm:text-[13px]',
                  isActive ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600 hover:bg-white hover:text-slate-900',
                )
              }
            >
              {t.label}
              <span className="ml-1.5 hidden font-normal opacity-70 sm:inline">· {t.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  )
}
