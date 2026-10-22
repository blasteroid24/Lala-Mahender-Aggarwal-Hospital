import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { MotionConfig } from 'motion/react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { MobileDock } from '@/components/layout/MobileDock'
import { ScrollManager } from '@/components/layout/ScrollManager'
import { BookingProvider } from '@/components/booking/BookingProvider'
import Home from '@/pages/Home'

// Inner pages are split into their own chunks so the homepage loads fast
const About = lazy(() => import('@/pages/About'))
const Doctors = lazy(() => import('@/pages/Doctors'))
const Specialities = lazy(() => import('@/pages/Specialities'))
const Contact = lazy(() => import('@/pages/Contact'))
const NotFound = lazy(() => import('@/pages/NotFound'))

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BookingProvider>
        <ScrollManager />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <Suspense fallback={<div className="min-h-[70vh]" />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/doctors" element={<Doctors />} />
                <Route path="/specialities" element={<Specialities />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <MobileDock />
        </div>
      </BookingProvider>
    </MotionConfig>
  )
}

export default App
