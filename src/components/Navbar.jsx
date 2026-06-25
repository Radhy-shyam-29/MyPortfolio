import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { HiMenu, HiX } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home',       to: 'home' },
  { label: 'About',      to: 'about' },
  { label: 'Skills',     to: 'skills' },
  { label: 'Projects',   to: 'projects' },
  { label: 'Experience', to: 'experience' },
  { label: 'Contact',    to: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive]     = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', damping: 22, stiffness: 90, delay: 0.15 }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transition: 'background 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease',
        ...(scrolled ? {
          background: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          borderBottom: '1.5px solid var(--c-b1)',
          boxShadow: '0 3px 24px rgba(0,0,0,0.08)',
        } : {
          background: 'transparent',
        }),
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px' }}>

        {/* Logo */}
        <Link to="home" smooth duration={600} style={{ cursor: 'pointer', textDecoration: 'none' }}>
          <motion.div
            style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <div style={{
              width: 34, height: 34,
              borderRadius: 10,
              background: 'linear-gradient(135deg, #0055DA, #0044AE)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontWeight: 900, fontSize: '1rem',
              boxShadow: '0 4px 14px rgba(0,85,218,0.38)',
              fontFamily: "'Fira Code', monospace",
            }}>R</div>
            <span style={{
              fontFamily: "'Fira Code', monospace",
              fontWeight: 700, fontSize: '0.95rem',
              color: 'var(--c-t1)',
              letterSpacing: '-0.02em',
            }}>
              Radhy Shyam<span style={{ color: 'var(--c-red)' }}>.</span>
            </span>
          </motion.div>
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'none', alignItems: 'center', gap: '2.25rem' }} className="md-flex-row">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth duration={650} offset={-70} spy
              onSetActive={() => setActive(link.to)}
              className={`nav-link ${active === link.to ? 'is-active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="contact" smooth duration={650} offset={-70} style={{ cursor: 'pointer' }}>
            <button className="btn-primary" style={{ padding: '0.55rem 1.5rem', fontSize: '0.8rem' }}>
              <span>Hire Me</span>
            </button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          style={{
            padding: '0.5rem', borderRadius: '10px',
            background: 'var(--c-red-dim)', border: '1.5px solid rgba(0,85,218,0.2)',
            color: 'var(--c-red)', cursor: 'pointer', display: 'flex',
          }}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          className="md-hidden"
        >
          {menuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            style={{
              overflow: 'hidden',
              background: 'rgba(255,255,255,0.97)',
              borderTop: '1.5px solid var(--c-b1)',
              backdropFilter: 'blur(16px)',
            }}
          >
            <div style={{ padding: '1rem 2rem 1.25rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to} smooth duration={650} offset={-70}
                  style={{
                    display: 'block', padding: '0.65rem 0.75rem',
                    borderRadius: '10px', fontSize: '0.9rem', fontWeight: 500,
                    color: 'var(--c-t2)', cursor: 'pointer', transition: 'all 0.18s ease',
                  }}
                  onClick={() => setMenuOpen(false)}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--c-red-dim)'; e.currentTarget.style.color = 'var(--c-red)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--c-t2)' }}
                >
                  {link.label}
                </Link>
              ))}
              <div style={{ marginTop: '0.75rem' }}>
                <Link to="contact" smooth duration={650} offset={-70} onClick={() => setMenuOpen(false)} style={{ cursor: 'pointer' }}>
                  <button className="btn-primary" style={{ width: '100%' }}>
                    <span>Hire Me</span>
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) { .md-flex-row { display: flex !important; } .md-hidden { display: none !important; } }
      `}</style>
    </motion.nav>
  )
}
