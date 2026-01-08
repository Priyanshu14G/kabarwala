export const ANIMATION_DURATION = {
  fast: 150,
  base: 300,
  slow: 500,
  slower: 800,
} as const

export const EASING = {
  easeInOut: [0.4, 0, 0.2, 1],
  easeOut: [0, 0, 0.2, 1],
  spring: [0.34, 1.56, 0.64, 1],
} as const

export const ANIMATION_VARIANTS = {
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: ANIMATION_DURATION.base / 1000,
        ease: EASING.easeOut,
      },
    },
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: ANIMATION_DURATION.base / 1000,
        ease: EASING.easeOut,
      },
    },
  },
  slideInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: ANIMATION_DURATION.base / 1000,
        ease: EASING.easeOut,
      },
    },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: ANIMATION_DURATION.base / 1000,
        ease: EASING.easeOut,
      },
    },
  },
  pageEnter: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: ANIMATION_DURATION.slow / 1000,
        ease: EASING.easeOut,
      },
    },
  },
  pageExit: {
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: ANIMATION_DURATION.base / 1000,
        ease: EASING.easeInOut,
      },
    },
  },
  containerStagger: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  },
}
