import { Header, UtilityBar } from './components/Header'
import { Hero, QuickActions } from './components/Hero'
import { Centres } from './components/Centres'
import { About } from './components/About'
import { Technology } from './components/Technology'
import { Values } from './components/Values'
import { Stories } from './components/Stories'
import { Legacy } from './components/Legacy'
import { Visit } from './components/Visit'
import { Footer } from './components/Footer'

/** Template 2 — "Visionary": full-screen photo hero, forest green + sage, Fraunces headings. */
export default function Template2() {
  return (
    <div className="bg-white font-sans text-[#1d2b26] [&_::selection]:bg-verdant-200 [&_::selection]:text-verdant-950">
      <a
        href="#t2-main"
        className="sr-only z-[80] rounded-full bg-verdant-700 px-4 py-2 text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <UtilityBar />
      <Header />
      <main id="t2-main">
        <Hero />
        <QuickActions />
        <Centres />
        <About />
        <Technology />
        <Values />
        <Stories />
        <Legacy />
        <Visit />
      </main>
      <Footer />
    </div>
  )
}
