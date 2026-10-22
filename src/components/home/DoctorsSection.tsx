import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { doctors, specialities } from '@/data/site'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { DoctorCard } from '@/components/cards/DoctorCard'
import { cn } from '@/lib/utils'

export function DoctorsSection() {
  const [filter, setFilter] = useState('all')
  const available = specialities.filter((s) => doctors.some((d) => d.speciality === s.slug))
  const list = (filter === 'all' ? doctors : doctors.filter((d) => d.speciality === filter)).slice(0, 4)

  return (
    <section className="section bg-canvas">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Doctors"
          title={<>Meet the experts who <span className="serif-accent text-brand-600">care</span> for you</>}
          description="Senior consultants with decades of experience — and the time to listen."
          action={
            <Link to="/doctors" className="btn btn-ghost">
              View all doctors <ArrowRight className="size-4" />
            </Link>
          }
        />

        <div className="scrollbar-none -mx-5 mb-10 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:px-0">
          {[{ slug: 'all', name: 'All' }, ...available].map((s) => (
            <button
              key={s.slug}
              onClick={() => setFilter(s.slug)}
              className={cn(
                'relative shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors',
                filter === s.slug ? 'text-white' : 'bg-white text-ink-soft hover:text-ink',
              )}
            >
              {filter === s.slug && (
                <motion.span layoutId="doc-filter" className="absolute inset-0 rounded-full bg-ink" transition={{ type: 'spring', damping: 30, stiffness: 350 }} />
              )}
              <span className="relative">{s.name.split(' &')[0]}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="scrollbar-none -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {list.map((d) => <DoctorCard key={d.id} doctor={d} className="w-[78%] shrink-0 snap-start sm:w-auto" />)}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
