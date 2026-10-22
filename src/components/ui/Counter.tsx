import { useEffect, useRef } from 'react'
import { animate, useInView, useReducedMotion } from 'motion/react'

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
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        node.textContent = `${Math.round(v).toLocaleString('en-IN')}${suffix}`
      },
    })
    return () => controls.stop()
  }, [inView, value, suffix, duration, reduce])

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  )
}
