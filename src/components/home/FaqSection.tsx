import { MessageCircle, Phone } from 'lucide-react'
import { faqs, hospital } from '@/data/site'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Accordion } from '@/components/ui/Accordion'
import { Reveal } from '@/components/ui/Reveal'
import { srcSet } from '@/lib/utils'

export function FaqSection() {
  return (
    <section className="section bg-white">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            className="mb-8 md:mb-10"
            eyebrow="FAQs"
            title={<>Answers, <span className="serif-accent text-brand-600">before</span> you ask.</>}
          />
          <Reveal className="relative overflow-hidden rounded-[32px]">
            <img src="/img/faq-doctor.webp" srcSet={srcSet('/img/faq-doctor.webp')} sizes="(min-width: 1024px) 500px, 100vw" alt="A doctor greeting new parents" loading="lazy" className="aspect-[4/3.4] w-full object-cover" />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/90 p-5 backdrop-blur-xl">
              <p className="font-heading font-semibold">Still have questions?</p>
              <p className="mt-1 text-sm text-muted">Our patient-care team is happy to help.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <a href={`tel:${hospital.phone}`} className="btn btn-dark py-2.5">
                  <Phone className="size-4" /> Call us
                </a>
                <a href={`https://wa.me/${hospital.whatsapp}`} target="_blank" rel="noreferrer" className="btn btn-ghost py-2.5">
                  <MessageCircle className="size-4" /> WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="lg:col-span-7 lg:pt-28">
          <Accordion items={faqs} />
        </Reveal>
      </div>
    </section>
  )
}
