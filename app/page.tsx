import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { IncidentsList } from '@/components/incidents-list'
import { StatisticsSection } from '@/components/statistics-section'
import { ObjectionSection } from '@/components/objection-section'
import { VoteSection } from '@/components/vote-section'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <IncidentsList />
      <StatisticsSection />
      <ObjectionSection />
      <VoteSection />
      <Footer />
    </main>
  )
}
