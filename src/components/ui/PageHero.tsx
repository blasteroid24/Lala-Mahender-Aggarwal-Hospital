import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ChevronRight } from 'lucide-react'

type PageHeroProps = {
  crumb: string
  title: ReactNode
  description?: ReactNode
  children?: ReactNode
}

export function PageHero({ crumb, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-canvas">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_80%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-32 left-1/2 size-[40rem] -translate-x-1/2 rounded-full bg-brand-200/40 blur-3xl" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="container-x relative py-16 text-center md:py-24"
      >
        <nav aria-label="Breadcrumb" className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1 text-xs text-muted">
          <Link to="/" className="hover:text-brand-700">Home</Link>
          <ChevronRight className="size-3" />
          <span className="font-medium text-ink">{crumb}</span>
        </nav>
        <h1 className="mx-auto max-w-4xl text-4xl leading-[1.05] font-extrabold tracking-[-0.03em] sm:text-5xl md:text-7xl">{title}</h1>
        {description && <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-soft">{description}</p>}
        {children}
      </motion.div>
    </section>
  )
}
