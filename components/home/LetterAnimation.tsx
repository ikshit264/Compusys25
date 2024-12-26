'use client'

import { motion } from 'framer-motion'

interface LetterAnimationProps {
  text: string
  delay?: number
  duration?: number
  initial?: { x?: number; y?: number; opacity?: number; scale?: number }
  animate?: { x?: number; y?: number; opacity?: number; scale?: number }
  effect: 'fadeIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scaleUp' | 'scaleDown'
  staggerChildren?: number
  ease?: string
}

const predefinedEffects = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  slideUp: {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  },
  slideDown: {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  },
  slideLeft: {
    initial: { x: 20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  },
  slideRight: {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  },
  scaleUp: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
  },
  scaleDown: {
    initial: { scale: 1.2, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
  },
}

export default function LetterAnimation({
  text,
  delay = 0,
  duration = 0.5,
  initial,
  animate,
  effect,
  staggerChildren = 0.03,
  ease = 'easeOut',
}: LetterAnimationProps) {
  const letters = Array.from(text)

  const selectedEffect = predefinedEffects[effect]
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: staggerChildren, delayChildren: delay * i },
    }),
  }

  const child = {
    visible: {
      ...selectedEffect.animate,
      ...animate,
      transition: {
        type: 'tween',
        ease: ease,
        duration: duration,
      },
    },
    hidden: {
      ...selectedEffect.initial,
      ...initial,
    },
  }

  return (
    <motion.span
      style={{ display: 'inline-block' }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: 'inline-block', whiteSpace: 'pre' }}
        >
          {letter === '/' ? <br /> : letter}
        </motion.span>
      ))}
    </motion.span>
  )
}

