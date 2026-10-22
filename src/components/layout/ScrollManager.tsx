import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Scrolls to the top on route change, or to the #hash target when present. */
export function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Wait a frame so lazily-loaded pages have rendered their anchors
      const id = requestAnimationFrame(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
      })
      return () => cancelAnimationFrame(id)
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}
