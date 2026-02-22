import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Summary from './components/Summary'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Philosophy from './components/Philosophy'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <main className="min-h-screen bg-[#070B14] text-white">
      <Navbar />
      <Hero />
      <Summary />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Philosophy />
      <Contact />
      <Footer />
    </main>
  )
}

export default App