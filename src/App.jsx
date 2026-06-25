import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Preloader from './components/Preloader'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [loading, setLoading] = useState(() => {
    try { return !sessionStorage.getItem('loaded') } catch (e) { return true }
  })

  const finishLoading = () => {
    try { sessionStorage.setItem('loaded', '1') } catch (e) { /* ignore */ }
    setLoading(false)
  }

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader onFinish={finishLoading} />}
      </AnimatePresence>

      <ScrollProgress />

      <div style={{ backgroundColor: 'var(--c-bg-1)', minHeight: '100vh', overflowX: 'hidden' }}>
        <Navbar />
        <main>
          <section id="home"><Hero /></section>
          <section id="about"><About /></section>
          <section id="skills"><Skills /></section>
          <section id="projects"><Projects /></section>
          <section id="experience"><Experience /></section>
          <section id="contact"><Contact /></section>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
