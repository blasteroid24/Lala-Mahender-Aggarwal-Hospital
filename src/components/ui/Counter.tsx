import { useEffect, useRef } from 'react'
import { useInView, useReducedMotion } from 'motion/react'

type CounterProps = {
  value: number
  suffix?: string
  duration?: number
  className?: string
}

/** Counts up from 0 to `value` the first time it scrolls into view. */
export function Counter({ value, suffix = '', duration = 1.8, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const reduce = useReducedMotion()

  useEffect(() => {
    const node = ref.current
    if (!node || !inView) return
    if (reduce) {
      node.textContent = `${value.toLocaleString('en-IN')}${suffix}`
      return
    }
    // Ease-out-expo count-up via rAF (keeps motion's animation engine out of the main bundle)
    let frame = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min((now - start) / (duration * 1000), 1)
      const v = value * (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))
      node.textContent = `${Math.round(v).toLocaleString('en-IN')}${suffix}`
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value, suffix, duration, reduce])

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  )
}
