import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ChevronDown, Users } from 'lucide-react'
import { caseStories } from '@/data/site'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { cn } from '@/lib/utils'

export function StoriesSection() {
  const [active, setActive] = useState(0)
  const [expanded, setExpanded] = useState(false)
  const story = caseStories[active]

  return (
    <section className="section bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Clinical Breakthroughs"
          title={<>Complex cases. <span className="serif-accent text-brand-600">Remarkable</span> recoveries.</>}
          description="A glimpse into the high-risk procedures our multidisciplinary teams perform every week."
        />

        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Tabs */}
          <div className="flex flex-col gap-3 lg:col-span-5" role="tablist">
            {caseStories.map((c, i) => {
              const isActive = i === active
              return (
                <button
                  key={c.title}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setActive(i)
                    setExpanded(false)
                  }}
                  className={cn(
                    'group relative overflow-hidden rounded-3xl border p-6 text-left transition-all duration-500',
                    isActive ? 'border-brand-200 bg-brand-50/60 shadow-soft' : 'border-line hover:border-brand-200 hover:bg-canvas',
                  )}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={cn(
                        'font-serif text-4xl italic transition-colors',
                        isActive ? 'text-brand-600' : 'text-line group-hover:text-brand-200',
                      )}
                    >
                      0{i + 1}
                    </span>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">{c.tag}</span>
                      <h3 className="mt-0.5 text-base leading-snug md:text-lg">{c.title}</h3>
                    </div>
                  </div>
                  {isActive && (
                    <motion.span layoutId="story-bar" className="absolute top-6 bottom-6 left-0 w-1 rounded-r-full bg-brand-600" />
                  )}
                </button>
              )
            })}
          </div>

          {/* Detail */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.article
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden rounded-[32px] border border-line bg-white shadow-soft"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <motion.img
                    initial={{ scale: 1.08 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    src={story.image}
                    alt={story.title}
                    loading="lazy"
                    className="size-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
                  <div className="absolute bottom-5 left-5 rounded-2xl bg-white/90 px-5 py-3 backdrop-blur">
                    <p className="font-heading text-2xl font-extrabold text-brand-700">{story.metric.value}</p>
                    <p className="text-xs text-muted">{story.metric.label}</p>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-ink-soft md:text-lg">{story.summary}</p>
                  <AnimatePresence initial={false}>
                    {expanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-3 pt-4 text-sm text-ink-soft md:text-base">
                          {story.content.map((p) => <p key={p}>{p}</p>)}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <div className="mt-6 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="flex items-start gap-2 text-sm text-muted">
                      <Users className="mt-0.5 size-4 shrink-0 text-brand-500" />
                      <span><span className="font-medium text-ink">Care team:</span> {story.doctors}</span>
                    </p>
                    <button
                      onClick={() => setExpanded((v) => !v)}
                      className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand-700"
                    >
                      {expanded ? 'Show less' : 'Read full case'}
                      <ChevronDown className={cn('size-4 transition-transform', expanded && 'rotate-180')} />
                    </button>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
