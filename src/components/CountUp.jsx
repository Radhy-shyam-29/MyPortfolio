import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

/**
 * Animates a leading number from 0 → target when scrolled into view.
 * Keeps any suffix (e.g. "+", "%") and renders non-numeric values (e.g. "MCA") as-is.
 */
export default function CountUp({ value, duration = 1400 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })

  const match = String(value).match(/^(\d+)(.*)$/)
  const target = match ? parseInt(match[1], 10) : null
  const suffix = match ? match[2] : ''

  const [display, setDisplay] = useState(target === null ? value : `0${suffix}`)

  useEffect(() => {
    if (target === null || !inView) return
    const start = performance.now()
    let raf
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3) // easeOutCubic
      setDisplay(`${Math.round(eased * target)}${suffix}`)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target, suffix, duration])

  return <span ref={ref}>{display}</span>
}
