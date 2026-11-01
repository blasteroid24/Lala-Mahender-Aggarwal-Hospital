import { Header } from './Header'
import { HeroSlider } from './HeroSlider'
import { HelpCard } from './HelpCard'
import { Centres } from './Centres'
import { Facilities, Quality, Stats, Testimonials } from './Sections'
import { Faq } from './Faq'
import { ContactBand, Footer } from './Footer'

/** Template 3 — "Assurance": a large, orderly institution with a banner slider hero. */
export default function Template3() {
  return (
    <div className="bg-white font-sans text-navy-900 [&_*:focus-visible]:outline-coral-500">
      <Header />
      <main>
        <HeroSlider />
        <HelpCard />
        <Centres />
        <Stats />
        <Facilities />
        <Quality />
        <Testimonials />
        <Faq />
        <ContactBand />
      </main>
      <Footer />
    </div>
  )
}
