import { facilities } from '@/data/site'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { cn, srcSet } from '@/lib/utils'

const layout = [
  'md:col-span-2 md:row-span-2 min-h-[420px]',
  'min-h-[260px]',
  'min-h-[260px]',
  'min-h-[260px]',
  'min-h-[260px]',
]

export function TechnologySection() {
  return (
    <section className="section relative overflow-hidden bg-brand-950 text-white">
      <div className="bg-noise pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute top-0 right-0 size-[52rem] translate-x-1/3 -translate-y-1/2 bg-[radial-gradient(closest-side,rgb(22_135_159/0.25),transparent)]" />
      <div className="pointer-events-none absolute bottom-0 left-0 size-[40rem] -translate-x-1/2 translate-y-1/2 bg-[radial-gradient(closest-side,rgb(34_195_155/0.1),transparent)]" />

      <div className="container-x relative">
        <SectionHeading
          tone="dark"
          eyebrow="Technology & Infrastructure"
          title={<>World-class technology, <span className="serif-accent text-mint-300">human</span> touch.</>}
          description="Precision equipment and globally benchmarked protocols, operated by teams who never forget there is a person behind every scan."
        />

        <div className="grid auto-rows-auto grid-cols-1 gap-4 md:grid-cols-4">
          {facilities.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.06} className={cn('group relative overflow-hidden rounded-3xl', layout[i])}>
              <img
                src={f.img}
                srcSet={srcSet(f.img)}
                sizes="(min-width: 768px) 50vw, 100vw"
                alt={f.title}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 size-full object-cover transition-transform duration-[1.2s] ease-out-expo group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/40 to-transparent transition-opacity duration-500" />
              <div className="relative flex h-full flex-col justify-between p-6 md:p-7">
                <span className="self-start rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur-md">
                  {f.tag}
                </span>
                <div>
                  <h3 className={cn('text-white', i === 0 ? 'text-2xl md:text-3xl' : 'text-lg')}>{f.title}</h3>
                  <p
                    className={cn(
                      'mt-2 text-sm text-brand-100/80 transition-all duration-500 ease-out-expo',
                      i === 0 ? 'max-w-md md:text-base' : 'md:max-h-0 md:translate-y-2 md:opacity-0 md:group-hover:max-h-24 md:group-hover:translate-y-0 md:group-hover:opacity-100',
                    )}
                  >
                    {f.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
