import { Hero } from '@/components/home/Hero'
import { StatsBand } from '@/components/home/StatsBand'
import { SpecialitiesSection } from '@/components/home/SpecialitiesSection'
import { TechnologySection } from '@/components/home/TechnologySection'
import { DoctorsSection } from '@/components/home/DoctorsSection'
import { LegacyBanner } from '@/components/home/LegacyBanner'
import { StoriesSection } from '@/components/home/StoriesSection'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import { PackagesSection } from '@/components/home/PackagesSection'
import { FaqSection } from '@/components/home/FaqSection'
import { BookingSection } from '@/components/home/BookingSection'
import { features } from '@/config/features'

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBand />
      <SpecialitiesSection />
      <TechnologySection />
      {features.showDoctors && <DoctorsSection />}
      <LegacyBanner />
      <StoriesSection />
      <TestimonialsSection />
      {features.showBooking && <PackagesSection />}
      <FaqSection />
      {features.showBooking && <BookingSection />}
    </>
  )
}
