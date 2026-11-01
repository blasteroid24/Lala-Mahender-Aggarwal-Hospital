import { Suspense } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import { LazyMotion, MotionConfig } from 'motion/react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { MobileDock } from '@/components/layout/MobileDock'
import { ScrollManager } from '@/components/layout/ScrollManager'
import { TemplateSwitcher } from '@/components/layout/TemplateSwitcher'
import { BookingProvider } from '@/components/booking/BookingProvider'
import { features } from '@/config/features'
import { About, Contact, Doctors, NotFound, Specialities, Template2, Template3, Template4 } from '@/route-modules'
import Home from '@/pages/Home'

const motionFeatures = () => import('@/lib/motion-features').then((mod) => mod.default)

/** Template 1 — the original site chrome around the main pages. */
function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Suspense fallback={<div className="min-h-[70vh]" />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <MobileDock />
    </div>
  )
}

function App() {
  return (
    <LazyMotion features={motionFeatures} strict>
      <MotionConfig reducedMotion="user">
        <BookingProvider>
          <ScrollManager />
          <TemplateSwitcher />
          <Suspense fallback={<div className="min-h-screen" />}>
            <Routes>
              <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                {features.showDoctors && <Route path="/doctors" element={<Doctors />} />}
                <Route path="/specialities" element={<Specialities />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Route>
              <Route path="/template-2" element={<Template2 />} />
              <Route path="/template-3" element={<Template3 />} />
              <Route path="/template-4" element={<Template4 />} />
            </Routes>
          </Suspense>
        </BookingProvider>
      </MotionConfig>
    </LazyMotion>
  )
}

export default App
