import { type ReactNode } from 'react'

import { useAnimatedCounter } from '@/hooks/useAnimatedCounter'
import { useInView } from '@/hooks/useInView'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  label: string
  decimals?: number
}

export function AnimatedCounter({ value, suffix = '', label, decimals = 0 }: AnimatedCounterProps) {
  const { ref, isInView } = useInView({ threshold: 0.3 })
  const count = useAnimatedCounter({ end: value, decimals, isActive: isInView })

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl font-bold tracking-tight text-gp-text md:text-5xl">
        {count}
        {suffix}
      </div>
      <p className="mt-2 text-sm text-gp-muted">{label}</p>
    </div>
  )
}

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-16 ${align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}
    >
      {eyebrow && (
        <span className="mb-4 inline-block rounded-full border border-gp-border bg-gp-secondary px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-gp-accent">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight text-gp-text md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-gp-muted">{description}</p>
      )}
    </div>
  )
}

interface StatGridProps {
  stats: readonly { value: number; suffix?: string; label: string; decimals?: number }[]
}

export function StatGrid({ stats }: StatGridProps) {
  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
      {stats.map((stat) => (
        <AnimatedCounter
          key={stat.label}
          value={stat.value}
          suffix={stat.suffix}
          label={stat.label}
          decimals={stat.decimals}
        />
      ))}
    </div>
  )
}

interface PageTransitionProps {
  children: ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  return children
}
