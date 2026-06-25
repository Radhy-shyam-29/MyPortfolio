import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Preloader({ onFinish }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const start = performance.now()
    const duration = 1300
    let raf
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      setCount(Math.round(p * 100))
      if (p < 1) raf = requestAnimationFrame(tick)
      else setTimeout(onFinish, 300)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [onFinish])

  return (
    <motion.div
      className="preloader"
      initial={{ opacity: 1 }}
      exit={{ y: '-100%', transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
    >
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 16 }}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}
      >
        <div className="preloader-logo">R</div>
        <div
          className="shimmer-text"
          style={{ fontFamily: "'Fira Code', monospace", fontWeight: 800, fontSize: '1.1rem', letterSpacing: '0.05em' }}
        >
          Radhy Shyam
        </div>
        <div className="preloader-bar">
          <span style={{ width: `${count}%` }} />
        </div>
        <div style={{ fontFamily: "'Fira Code', monospace", fontSize: '0.75rem', color: 'var(--c-t3)' }}>
          {count}%
        </div>
      </motion.div>
    </motion.div>
  )
}
