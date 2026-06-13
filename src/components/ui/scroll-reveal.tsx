import { motion, type HTMLMotionProps } from 'framer-motion'
import { type ReactNode } from 'react'

import { useInView } from '@/hooks/useInView'
import { cn } from '@/lib/utils'

interface ScrollRevealProps extends HTMLMotionProps<'div'> {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}

const directionOffset = {
  up: { y: 40, x: 0 },
  down: { y: -40, x: 0 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  none: { x: 0, y: 0 },
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  ...props
}: ScrollRevealProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 })
  const offset = directionOffset[direction]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offset }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...offset }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}
