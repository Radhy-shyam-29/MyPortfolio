import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { HiSparkles } from 'react-icons/hi'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { fadeUp, staggerContainer } from '../utils/animations'
import { projects } from '../data/projects'

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const { ref, isInView } = useScrollAnimation()
  const displayed = showAll ? projects : projects.filter((p) => p.featured)

  return (
    <section id="projects" style={{ backgroundColor: 'var(--c-bg-2)', padding: '7rem 0' }}>
      <div className="container" ref={ref}>
        <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>

          {/* Header */}
          <motion.div variants={fadeUp}>
            <h2 className="section-title">Projects</h2>
            <span className="section-rule" />
          </motion.div>

          {/* Toggle */}
          <motion.div variants={fadeUp} style={{ display: 'flex', gap: '0.6rem', marginBottom: '3rem' }}>
            {['Featured', 'All Projects'].map((tab) => (
              <button
                key={tab}
                onClick={() => setShowAll(tab === 'All Projects')}
                className={`pill ${(tab === 'Featured') === !showAll ? 'pill-active' : ''}`}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
              >
                {tab === 'Featured' && <HiSparkles size={12} />}
                {tab}
              </button>
            ))}
          </motion.div>

          {/* Cards */}
          <motion.div layout style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.25rem' }}>
            <AnimatePresence mode="popLayout">
              {displayed.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 32, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.18 } }}
                  transition={{ type: 'spring', damping: 22, stiffness: 90, delay: i * 0.05 }}
                  className="card"
                  style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
                >
                  {/* Title row */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem' }}>
                    <h3 style={{ fontSize: '0.975rem', fontWeight: 800, color: 'var(--c-t1)', lineHeight: 1.35, flex: 1 }}>
                      {project.title}
                    </h3>
                    <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
                      {[{ href: project.github, Icon: FiGithub }, { href: project.live, Icon: FiExternalLink }]
                        .filter(({ href }) => href)
                        .map(({ href, Icon }) => (
                          <a
                            key={href}
                            href={href} target="_blank" rel="noopener noreferrer"
                            className="social-btn"
                            style={{ width: 34, height: 34, borderRadius: '10px' }}
                          >
                            <Icon size={14} />
                          </a>
                        ))}
                    </div>
                  </div>

                  {/* Description */}
                  <p style={{ fontSize: '0.85rem', lineHeight: 1.75, color: 'var(--c-t3)', flex: 1 }}>
                    {project.description}
                  </p>

                  {/* Tech badges */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {project.tech.map((t) => <span key={t} className="tech-badge">{t}</span>)}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* GitHub link */}
          <motion.div variants={fadeUp} style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <a href="https://github.com/Radhy-shyam-29" target="_blank" rel="noopener noreferrer">
              <button className="btn-ghost">
                <FiGithub size={15} />
                View all projects on GitHub
              </button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
