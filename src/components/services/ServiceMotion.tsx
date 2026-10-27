'use client'

import { MotionConfig, motion } from 'framer-motion'
import type { ReactNode } from 'react'

export function ServiceMotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}

export function ServiceReveal({
  children,
  delay = 0,
  className,
  onLoad = false,
}: {
  children: ReactNode
  delay?: number
  className?: string
  onLoad?: boolean
}) {
  const enter = { opacity: 1, y: 0 }
  const initial = { opacity: 0, y: 20 }
  const transition = { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const }

  return onLoad ? (
    <motion.div className={className} initial={initial} animate={enter} transition={transition}>
      {children}
    </motion.div>
  ) : (
    <motion.div className={className} initial={initial} whileInView={enter} viewport={{ once: true, amount: 0.18 }} transition={transition}>
      {children}
    </motion.div>
  )
}
