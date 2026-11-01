import { Header } from './Header'
import { Hero } from './Hero'
import { LifeStages } from './LifeStages'
import { Specialities } from './Specialities'
import { WhyFamilies } from './WhyFamilies'
import { Stats } from './Stats'
import { Community } from './Community'
import { Testimonials } from './Testimonials'
import { Faq } from './Faq'
import { Visit } from './Visit'
import { Footer } from './Footer'

/** Template 4 — "Every Stage of Life": calm teal-green + soft peach, split hero. */
export default function Template4() {
  return (
    <div className="font-dm text-lagoon-900 selection:bg-peach-200 selection:text-lagoon-900 [&_:focus-visible]:outline-lagoon-600">
      <a
        href="#t4-main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-lagoon-800 focus:shadow-lift"
      >
        Skip to content
      </a>
      <Header />
      <main id="t4-main">
        <Hero />
        <LifeStages />
        <Specialities />
        <WhyFamilies />
        <Stats />
        <Community />
        <Testimonials />
        <Faq />
        <Visit />
      </main>
      <Footer />
    </div>
  )
}
