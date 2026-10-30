import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { AnimatePresence, m } from 'motion/react'
import { Search, SearchX } from 'lucide-react'
import { doctors, specialities } from '@/data/site'
import { PageHero } from '@/components/ui/PageHero'
import { DoctorCard } from '@/components/cards/DoctorCard'

export default function Doctors() {
  const [params, setParams] = useSearchParams()
  const q = params.get('q') ?? ''
  const spec = params.get('speciality') ?? ''

  function update(key: string, value: string) {
    const next = new URLSearchParams(params)
    if (value) next.set(key, value)
    else next.delete(key)
    setParams(next, { replace: true })
  }

  const results = useMemo(() => {
    const term = q.toLowerCase().trim()
    return doctors.filter((d) => {
      const s = specialities.find((x) => x.slug === d.speciality)
      const haystack = [d.name, d.role, d.qualifications, s?.name ?? ''].join(' ').toLowerCase()
      return (!spec || d.speciality === spec) && (!term || haystack.includes(term))
    })
  }, [q, spec])

  return (
    <>
      <PageHero
        crumb="Find a Doctor"
        title={<>Find the <span className="serif-accent text-gradient pr-2">right</span> doctor</>}
        description="Search by name, speciality or condition and book a consultation in seconds."
      >
        <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-2 rounded-[28px] border border-line bg-white p-2 shadow-lift sm:flex-row sm:rounded-full">
          <label className="flex flex-1 items-center gap-3 px-4">
            <Search className="size-5 shrink-0 text-muted" />
            <input
              value={q}
              onChange={(e) => update('q', e.target.value)}
              placeholder="Doctor name or condition"
              aria-label="Search doctors"
              className="w-full bg-transparent py-3 outline-none placeholder:text-muted"
            />
          </label>
          <select
            value={spec}
            onChange={(e) => update('speciality', e.target.value)}
            aria-label="Filter by speciality"
            className="rounded-full bg-canvas px-4 py-3 text-sm font-medium outline-none sm:max-w-[220px]"
          >
            <option value="">All specialities</option>
            {specialities.map((s) => (
              <option key={s.slug} value={s.slug}>{s.name}</option>
            ))}
          </select>
        </div>
      </PageHero>

      <section className="section bg-white pt-12 md:pt-16">
        <div className="container-x">
          <p className="mb-8 text-sm text-muted" aria-live="polite">
            Showing <span className="font-semibold text-ink">{results.length}</span> of {doctors.length} doctors
          </p>
          <m.div layout className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {results.map((d) => <DoctorCard key={d.id} doctor={d} />)}
            </AnimatePresence>
          </m.div>
          {results.length === 0 && (
            <div className="flex flex-col items-center py-20 text-center">
              <span className="grid size-16 place-items-center rounded-full bg-canvas text-muted">
                <SearchX className="size-7" />
              </span>
              <p className="mt-5 font-heading text-xl font-semibold">No doctors match your search</p>
              <p className="mt-2 text-muted">Try a different name or speciality.</p>
              <button onClick={() => setParams({}, { replace: true })} className="btn btn-dark mt-6">
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
