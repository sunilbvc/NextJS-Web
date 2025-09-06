'use client'

import { motion, LazyMotion, domAnimation } from 'framer-motion'

// Lazy load framer-motion animations to reduce initial bundle size
export const LazyMotionWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <LazyMotion features={domAnimation}>
      {children}
    </LazyMotion>
  )
}

// Optimized motion components
export const OptimizedMotion = motion
