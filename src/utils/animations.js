/* Spring-based animation variants — consistent feel across all sections */

export const fadeUp = {
  hidden:  { opacity: 0, y: 50 },
  visible: {
    opacity: 1, y: 0,
    transition: { type: 'spring', damping: 22, stiffness: 90 },
  },
}

export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

export const slideLeft = {
  hidden:  { opacity: 0, x: -60 },
  visible: {
    opacity: 1, x: 0,
    transition: { type: 'spring', damping: 22, stiffness: 90 },
  },
}

export const slideRight = {
  hidden:  { opacity: 0, x: 60 },
  visible: {
    opacity: 1, x: 0,
    transition: { type: 'spring', damping: 22, stiffness: 90 },
  },
}

export const staggerContainer = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}

export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.82 },
  visible: {
    opacity: 1, scale: 1,
    transition: { type: 'spring', damping: 20, stiffness: 120 },
  },
}

export const slideUpFade = {
  hidden:  { opacity: 0, y: 30 },
  visible: {
    opacity: 1, y: 0,
    transition: { type: 'spring', damping: 24, stiffness: 110 },
  },
}
