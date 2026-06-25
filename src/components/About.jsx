import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { slideLeft, slideRight, fadeUp, staggerContainer } from '../utils/animations'
import { HiCode, HiUsers, HiStar, HiHeart } from 'react-icons/hi'
import CountUp from './CountUp'

const stats = [
  { value: '1+',   label: 'Yr. Exp.',      icon: HiStar },
  { value: '2+',   label: 'Live Projects', icon: HiCode },
  { value: 'MCA',  label: 'Degree',        icon: HiUsers },
  { value: '100%', label: 'Dedication',    icon: HiHeart },
]
const badges = ['React Enthusiast ⚛️', 'Team Player', 'Fast Learner 🚀', 'Problem Solver']

export default function About() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="about" style={{ backgroundColor: 'var(--c-bg-2)', padding: '7rem 0' }}>
      <div className="container" ref={ref}>
        <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>

          {/* Header */}
          <motion.div variants={fadeUp}>
            <h2 className="section-title">About Me</h2>
            <span className="section-rule" />
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '5rem', alignItems: 'center' }}>

            {/* Photo */}
            <motion.div variants={slideLeft} style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="photo-frame">
                <img
                  src="/photo.jpg"
                  alt="Radhy Shyam"
                  style={{
                    width: 280, height: 360, borderRadius: 22,
                    objectFit: 'cover', objectPosition: 'center top',
                    border: '1.5px solid var(--c-b1)',
                    boxShadow: 'var(--sh-lg)',
                    display: 'block',
                  }}
                />
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div variants={slideRight}>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.85, color: 'var(--c-t3)', marginBottom: '1rem' }}>
                Hey! I&apos;m{' '}
                <strong style={{ color: 'var(--c-red)', fontWeight: 700 }}>Radhy Shyam</strong>,
                a Frontend Developer with hands-on experience building responsive web applications using{' '}
                <strong style={{ color: 'var(--c-t2)', fontWeight: 600 }}>React.js, JavaScript (ES6+), HTML5, CSS3, and REST APIs</strong>.
              </p>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.85, color: 'var(--c-t3)', marginBottom: '1rem' }}>
                I specialize in building reusable UI components, integrating APIs, debugging frontend issues,
                and collaborating with cross-functional teams to deliver scalable web applications.
                Strong understanding of component-based development, responsive layouts, and Git workflows.
              </p>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.85, color: 'var(--c-t3)', marginBottom: '2rem' }}>
                Currently expanding into{' '}
                <strong style={{ color: 'var(--c-red)', fontWeight: 700 }}>Next.js, Redux Toolkit &amp; TypeScript</strong>{' '}
                — passionate about writing clean, maintainable code and continuously leveling up.
              </p>

              {/* Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.25rem' }}>
                {badges.map((b) => <span key={b} className="badge-personality">{b}</span>)}
              </div>

              {/* Stats */}
              <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}>
                {stats.map(({ value, label, icon: Icon }) => (
                  <div key={label} className="stat-card">
                    <Icon size={17} style={{ color: 'var(--c-red)', margin: '0 auto 0.4rem' }} />
                    <div className="stat-num"><CountUp value={value} /></div>
                    <div className="stat-label">{label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
