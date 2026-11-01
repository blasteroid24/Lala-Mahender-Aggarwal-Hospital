import { lazyRoute } from '@/lib/lazy-route'

// Inner pages and alternate templates are split into their own chunks so the homepage loads fast
export const About = lazyRoute(() => import('@/pages/About'))
export const Doctors = lazyRoute(() => import('@/pages/Doctors'))
export const Specialities = lazyRoute(() => import('@/pages/Specialities'))
export const Contact = lazyRoute(() => import('@/pages/Contact'))
export const NotFound = lazyRoute(() => import('@/pages/NotFound'))
export const Template2 = lazyRoute(() => import('@/routes/template-2'))
export const Template3 = lazyRoute(() => import('@/routes/template-3'))
export const Template4 = lazyRoute(() => import('@/routes/template-4'))

/** Loads the chunk for a URL path before hydration (see main.tsx). */
export function preloadRoute(pathname: string): Promise<void> {
  const routes: Record<string, { preload: () => Promise<void> }> = {
    '/about': About,
    '/doctors': Doctors,
    '/specialities': Specialities,
    '/contact': Contact,
    '/template-2': Template2,
    '/template-3': Template3,
    '/template-4': Template4,
  }
  return routes[pathname]?.preload() ?? Promise.resolve()
}
