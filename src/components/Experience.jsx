import { motion } from 'framer-motion'
import { HiBriefcase, HiAcademicCap } from 'react-icons/hi'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { fadeUp, staggerContainer } from '../utils/animations'
import { experiences } from '../data/experience'

export default function Experience() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="experience" style={{ backgroundColor: 'var(--c-bg-1)', padding: '7rem 0' }}>
      <div className="container" ref={ref} style={{ maxWidth: '860px' }}>
        <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>

          {/* Header */}
          <motion.div variants={fadeUp}>
            <h2 className="section-title">Experience</h2>
            <span className="section-rule" />
          </motion.div>

          {/* Timeline */}
          <div style={{ position: 'relative' }}>
            {/* Vertical line */}
            <div style={{
              position: 'absolute',
              left: '1.25rem',
              top: 0, bottom: 0,
              width: '1px',
              background: 'linear-gradient(to bottom, var(--c-red) 0%, rgba(57,177,209,0.06) 100%)',
            }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {experiences.map((exp, i) => {
                const Icon = exp.type === 'work' ? HiBriefcase : HiAcademicCap

                return (
                  <motion.div
                    key={exp.id}
                    variants={{
                      hidden:   { opacity: 0, x: -50 },
                      visible:  { opacity: 1, x: 0, transition: { type: 'spring', damping: 22, stiffness: 85, delay: i * 0.1 } },
                    }}
                    style={{ position: 'relative', paddingLeft: '3.75rem' }}
                  >
                    {/* Dot */}
                    <div className="timeline-dot" style={{ position: 'absolute', left: 0, top: '1.25rem', transform: 'translateX(0)' }}>
                      <Icon size={15} />
                    </div>

                    {/* Card */}
                    <div className="exp-card" style={{ padding: '1.5rem 1.75rem' }}>
                      {/* Header */}
                      <div className="exp-header" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.75rem', marginBottom: '0.9rem' }}>
                        <div>
                          <h3 style={{ fontSize: '0.975rem', fontWeight: 800, color: 'var(--c-t1)', marginBottom: '0.2rem' }}>
                            {exp.title}
                          </h3>
                          <p style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--c-red)' }}>
                            {exp.organization}
                          </p>
                        </div>
                        <span style={{
                          fontSize: '0.7rem', fontFamily: "'Fira Code', monospace", fontWeight: 700,
                          padding: '0.28rem 0.75rem', borderRadius: '8px', flexShrink: 0,
                          background: 'var(--c-bg-3)', color: 'var(--c-red-d)',
                          border: '1px solid rgba(57,177,209,0.2)',
                        }}>
                          {exp.period}
                        </span>
                      </div>

                      {/* Bullets */}
                      <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
                        {exp.description.map((pt, j) => (
                          <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.855rem', color: 'var(--c-t3)', lineHeight: 1.7 }}>
                            <span style={{ marginTop: '0.55rem', width: '5px', height: '5px', borderRadius: '50%', background: 'linear-gradient(135deg,#39B1D1,#2389A8)', flexShrink: 0 }} />
                            {pt}
                          </li>
                        ))}
                      </ul>

                      {/* Tech */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                        {exp.tech.map((t) => <span key={t} className="tech-badge">{t}</span>)}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
