import { stats } from '@/data/site'
import { Counter } from '@/components/ui/Counter'
import { cn } from '@/lib/utils'
import { container } from './constants'

export function Stats() {
  return (
    <section aria-labelledby="t4-stats" className="bg-peach-50 py-14 sm:py-16">
      <div className={container}>
        <h2 id="t4-stats" className="sr-only">
          Our hospital in numbers
        </h2>
        <dl className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={cn(
                'flex flex-col-reverse items-center px-3 text-center',
                i > 0 && 'lg:border-l lg:border-peach-200',
                i % 2 === 1 && 'border-l border-peach-200',
              )}
            >
              <dt className="mt-2 text-[14px] text-lagoon-900/75 sm:text-[15px]">{s.label}</dt>
              <dd className="font-dm text-[38px] leading-none font-semibold tracking-[-0.03em] text-lagoon-700 sm:text-[46px]">
                <Counter value={s.value} suffix={s.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
