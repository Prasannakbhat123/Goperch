import { motion } from 'framer-motion'

import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { SectionHeader } from '@/components/ui/section-header'
import { TECH_STACK } from '@/lib/constants'

export function TechStack() {
  return (
    <section id="tech-stack" className="overflow-hidden bg-gp-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Technology"
            title="Built with modern, battle-tested tools"
            description="We choose technologies for performance, scalability, and long-term maintainability."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="relative flex h-80 items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-48 w-48 rounded-full border border-gp-border/50 bg-white/50 dark:bg-gp-card/50" />
              <div className="absolute h-72 w-72 rounded-full border border-dashed border-gp-border/30" />
            </div>

            {TECH_STACK.map((tech, i) => {
              const angle = (i / TECH_STACK.length) * 2 * Math.PI - Math.PI / 2
              const radius = 140
              const x = Math.cos(angle) * radius
              const y = Math.sin(angle) * radius

              return (
                <motion.div
                  key={tech.name}
                  className="absolute"
                  style={{ left: '50%', top: '50%' }}
                  initial={{ x: x - 40, y: y - 20, opacity: 0 }}
                  whileInView={{ x: x - 40, y: y - 20, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  whileHover={{ scale: 1.15, zIndex: 10 }}
                >
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
                    className="flex cursor-pointer items-center gap-2 rounded-xl border border-gp-border bg-white px-4 py-2.5 shadow-sm transition-shadow hover:shadow-lg dark:bg-gp-card"
                  >
                    <div
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: tech.color }}
                    />
                    <span className="whitespace-nowrap font-mono text-xs font-medium text-gp-text">
                      {tech.name}
                    </span>
                  </motion.div>
                </motion.div>
              )
            })}

            <div className="relative z-10 text-center">
              <p className="font-display text-2xl font-bold text-gp-text">12+</p>
              <p className="text-xs text-gp-muted">Technologies</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
