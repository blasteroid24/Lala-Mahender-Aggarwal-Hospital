import { stats } from '@/data/site'
import { Counter } from '@/components/ui/Counter'
import { Reveal } from '@/components/ui/Reveal'

export function StatsBand() {
  return (
    <section className="relative bg-white pt-16 md:pt-20">
      <div className="container-x">
        <Reveal className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white p-6 md:p-10">
              <Counter
                value={s.value}
                suffix={s.suffix}
                className="block font-heading text-4xl font-extrabold tracking-tight text-ink tabular-nums md:text-6xl"
              />
              <p className="mt-2 text-sm text-muted md:text-base">{s.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
