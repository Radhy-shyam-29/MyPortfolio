import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import * as SiIcons from 'react-icons/si'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { fadeUp, staggerContainer, scaleIn } from '../utils/animations'
import { skills, categories } from '../data/skills'

export default function Skills() {
  const [active, setActive] = useState('All')
  const { ref, isInView } = useScrollAnimation()
  const filtered = active === 'All' ? skills : skills.filter((s) => s.category === active)

  return (
    <section id="skills" style={{ backgroundColor: 'var(--c-bg-1)', padding: '7rem 0' }}>
      <div className="container" ref={ref}>
        <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>

          {/* Header */}
          <motion.div variants={fadeUp}>
            <span className="section-eyebrow">02. Skills</span>
            <h2 className="section-title">Skills &amp; Technologies</h2>
            <span className="section-rule" />
          </motion.div>

          {/* Filter tabs */}
          <motion.div variants={fadeUp} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '3rem' }}>
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActive(cat)} className={`pill ${active === cat ? 'pill-active' : ''}`}>
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <motion.div layout style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(105px, 1fr))', gap: '0.9rem' }}>
            <AnimatePresence mode="popLayout">
              {filtered.map((skill) => {
                const Icon = SiIcons[skill.icon]
                return (
                  <motion.div
                    key={skill.name}
                    layout
                    variants={scaleIn}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, scale: 0.78, transition: { duration: 0.15 } }}
                    className="skill-chip"
                  >
                    {Icon
                      ? <Icon size={30} style={{ color: skill.color, flexShrink: 0 }} />
                      : <span style={{ fontSize: '1.75rem' }}>⚡</span>
                    }
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--c-t3)', textAlign: 'center', lineHeight: 1.3 }}>
                      {skill.name}
                    </span>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
