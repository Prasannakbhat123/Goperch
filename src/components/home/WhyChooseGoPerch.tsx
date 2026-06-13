import { motion } from 'framer-motion'
import {
  Code,
  Cpu,
  Headphones,
  Layers,
  RefreshCw,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react'

import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { SectionHeader } from '@/components/ui/section-header'
import { WHY_CHOOSE } from '@/lib/constants'

const ICON_MAP: Record<string, LucideIcon> = {
  layers: Layers,
  cpu: Cpu,
  'trending-up': TrendingUp,
  code: Code,
  headphones: Headphones,
  'refresh-cw': RefreshCw,
}

export function WhyChooseGoPerch() {
  return (
    <section className="bg-white py-24 dark:bg-gp-primary lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Why GoPerch"
            title="The partner enterprises trust to build what matters"
            description="We combine deep technical expertise with practical business understanding to deliver systems that create measurable impact."
          />
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gp-border to-transparent lg:block" />

          <div className="grid gap-8 lg:grid-cols-2">
            {WHY_CHOOSE.map((item, i) => {
              const Icon = ICON_MAP[item.icon] ?? Layers
              return (
                <ScrollReveal key={item.title} delay={i * 0.1} direction={i % 2 === 0 ? 'left' : 'right'}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="group relative flex gap-6 rounded-2xl border border-gp-border bg-gp-card p-8 shadow-sm transition-shadow hover:shadow-lg"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-gp-accent/10 to-violet-500/10 text-gp-accent transition-colors group-hover:from-gp-accent group-hover:to-violet-600 group-hover:text-white">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-gp-text">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-gp-muted">
                        {item.description}
                      </p>
                    </div>
                    <span className="absolute -left-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border-2 border-gp-accent bg-white text-xs font-bold text-gp-accent lg:flex dark:bg-gp-card">
                      {i + 1}
                    </span>
                  </motion.div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
