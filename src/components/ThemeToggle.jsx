import { useState, useEffect } from 'react'
import { HiSun, HiMoon } from 'react-icons/hi'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute('data-theme') || 'light'
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try { localStorage.setItem('theme', theme) } catch (e) { /* ignore */ }
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <button onClick={toggle} className="theme-toggle" aria-label="Toggle dark mode">
      <motion.span
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.4 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 320, damping: 18 }}
        style={{ display: 'flex' }}
      >
        {theme === 'dark' ? <HiSun size={18} /> : <HiMoon size={17} />}
      </motion.span>
    </button>
  )
}
