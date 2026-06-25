import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { HiArrowDown, HiDownload, HiArrowRight } from 'react-icons/hi'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

const roles = ['Frontend Developer', 'React.js Developer', 'UI/UX Enthusiast', 'Problem Solver']

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.35 } },
}
const item = {
  hidden:  { opacity: 0, y: 45 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 22, stiffness: 85 } },
}

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let t
    if (!isDeleting && displayedText === current)       t = setTimeout(() => setIsDeleting(true), 2400)
    else if (isDeleting && displayedText === '')        { setIsDeleting(false); setRoleIndex((i) => (i + 1) % roles.length) }
    else t = setTimeout(() =>
      setDisplayedText(isDeleting ? current.slice(0, displayedText.length - 1) : current.slice(0, displayedText.length + 1)),
      isDeleting ? 42 : 72
    )
    return () => clearTimeout(t)
  }, [displayedText, isDeleting, roleIndex])

  return (
    <section style={{
      position: 'relative', minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden', backgroundColor: 'var(--c-bg-1)',
    }}>
      {/* ── Dot grid ── */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(0,85,218,0.14) 1.2px, transparent 1.2px)',
        backgroundSize: '38px 38px',
        maskImage: 'radial-gradient(ellipse 88% 78% at 50% 50%, black 38%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 88% 78% at 50% 50%, black 38%, transparent 100%)',
      }} />

      {/* ── Centre radial glow ── */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 68% 52% at 50% 44%, rgba(0,85,218,0.06) 0%, transparent 70%)',
      }} />

      {/* ── Floating blobs ── */}
      <div className="float-a" style={{
        position: 'absolute', top: '12%', left: '-6%',
        width: 340, height: 340, borderRadius: '50%', pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(0,85,218,0.10) 0%, transparent 70%)',
        filter: 'blur(54px)',
      }} />
      <div className="float-b" style={{
        position: 'absolute', bottom: '14%', right: '-7%',
        width: 420, height: 420, borderRadius: '50%', pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(0,85,218,0.06) 0%, transparent 70%)',
        filter: 'blur(68px)',
      }} />
      <div style={{
        position: 'absolute', top: '55%', left: '55%',
        width: 320, height: 320, borderRadius: '50%', pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(0,85,218,0.04) 0%, transparent 70%)',
        filter: 'blur(80px)', transform: 'translate(-50%,-50%)',
      }} />

      {/* ── Content ── */}
      <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <motion.div variants={container} initial="hidden" animate="visible">

          {/* Badge */}
          <motion.div variants={item} style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <div className="hero-badge">
              <span className="live-dot" />
              Available for Work
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.p variants={item} style={{
            fontFamily: "'Fira Code', monospace", fontSize: '0.85rem',
            color: 'var(--c-t3)', letterSpacing: '0.1em', marginBottom: '0.75rem',
          }}>
            {'< Love_Coding />'}
          </motion.p>

          {/* Name */}
          <motion.h1 variants={item} style={{
            fontSize: 'clamp(3rem, 9vw, 6.2rem)',
            fontWeight: 900, lineHeight: 1.08,
            color: 'var(--c-t1)', letterSpacing: '-0.035em',
            marginBottom: '1.1rem',
          }}>
            I&apos;m{' '}
            <span className="shimmer-text">Radhy Shyam</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div variants={item} style={{
            fontFamily: "'Fira Code', monospace",
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            color: 'var(--c-t3)', marginBottom: '1.5rem',
            minHeight: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem',
          }}>
            <span style={{ color: 'var(--c-red)', fontWeight: 700 }}>{'>'}</span>
            <span style={{ marginLeft: '0.35rem' }}>{displayedText}</span>
            <span className="cursor-blink" style={{
              display: 'inline-block', width: '2px', height: '1.25em',
              background: 'var(--c-red)', borderRadius: '2px', marginLeft: '2px',
            }} />
          </motion.div>

          {/* Bio */}
          <motion.p variants={item} style={{
            maxWidth: '560px', margin: '0 auto 2.5rem',
            fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
            color: 'var(--c-t3)', lineHeight: 1.8,
          }}>
            I build responsive, user-friendly web apps with{' '}
            <strong style={{ color: 'var(--c-red)', fontWeight: 700 }}>React.js &amp; JavaScript</strong>{' '}
            — clean reusable components, REST API integration, and pixel-perfect responsive layouts.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '0.9rem', marginBottom: '2.75rem' }}>
            <Link to="projects" smooth duration={700} offset={-70} style={{ cursor: 'pointer' }}>
              <button className="btn-primary">
                <span>View My Work</span>
                <HiArrowRight size={15} />
              </button>
            </Link>
            <a href="/Radhy_Shyam_CV.pdf" download="Radhy_Shyam_CV.pdf" style={{ textDecoration: 'none' }}>
              <button className="btn-outline">
                <HiDownload size={15} />
                <span>Download CV</span>
              </button>
            </a>
          </motion.div>

          {/* Social row */}
          <motion.div variants={item} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
            <a href="https://github.com/Radhy-shyam-29" target="_blank" rel="noopener noreferrer" className="social-btn">
              <FiGithub size={17} />
            </a>
            <a href="https://www.linkedin.com/in/radhy-shyam-914a8634b/" target="_blank" rel="noopener noreferrer" className="social-btn">
              <FiLinkedin size={17} />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <Link to="about" smooth duration={650} offset={-70} style={{ cursor: 'pointer', textDecoration: 'none' }}>
          <div className="bounce-y" style={{
            position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
            color: 'var(--c-t3)',
          }}>
            <span style={{ fontSize: '0.65rem', fontFamily: "'Fira Code', monospace", letterSpacing: '0.22em', textTransform: 'uppercase' }}>scroll</span>
            <HiArrowDown size={15} />
          </div>
        </Link>
      </div>
    </section>
  )
}
