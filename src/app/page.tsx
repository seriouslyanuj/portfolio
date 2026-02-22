import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'

const ProfessionalSummary = dynamic(
  () => import('@/components/ProfessionalSummary'),
  { ssr: true }
)
const Experience = dynamic(() => import('@/components/Experience'), {
  ssr: true,
})
const Projects = dynamic(() => import('@/components/Projects'), {
  ssr: true,
})
const TechnicalSkills = dynamic(
  () => import('@/components/TechnicalSkills'),
  { ssr: true }
)
const Achievements = dynamic(() => import('@/components/Achievements'), {
  ssr: true,
})
const ArchitecturePhilosophy = dynamic(
  () => import('@/components/ArchitecturePhilosophy'),
  { ssr: true }
)
const Contact = dynamic(() => import('@/components/Contact'), {
  ssr: true,
})

export default function Home() {
  return (
    <main id="main-content" role="main">
      <Navbar />
      <Hero />
      <ProfessionalSummary />
      <Experience />
      <Projects />
      <TechnicalSkills />
      <Achievements />
      <ArchitecturePhilosophy />
      <Contact />
      <Footer />
    </main>
  )
}
