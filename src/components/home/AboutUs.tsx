import { motion } from 'framer-motion'

import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { SectionHeader } from '@/components/ui/section-header'

export function AboutUs() {
  return (
    <section id="about" className="bg-white py-24 dark:bg-gp-primary lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <ScrollReveal direction="left">
            <SectionHeader
              align="left"
              eyebrow="About Us"
              title="Engineering excellence meets business impact"
              description="GoPerch is a technology company focused on delivering custom enterprise software and intelligent hardware solutions. We combine deep technical expertise with practical business understanding to build systems that create measurable impact."
            />

            <div className="mt-8 space-y-4">
              {[
                'Custom ERP & enterprise platform development',
                'Hardware-software integration specialists',
                'Agile delivery with transparent communication',
                'Long-term partnership beyond deployment',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gp-accent/10">
                    <div className="h-2 w-2 rounded-full bg-gp-accent" />
                  </div>
                  <span className="text-sm text-gp-muted">{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-gp-accent/10 via-violet-500/5 to-transparent blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-gp-border bg-gp-secondary p-8">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Software', value: 'ERP · AI · Cloud' },
                    { label: 'Hardware', value: 'IoT · Embedded' },
                    { label: 'Industries', value: '12+ Sectors' },
                    { label: 'Approach', value: 'End-to-End' },
                  ].map((card, i) => (
                    <motion.div
                      key={card.label}
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 4, delay: i * 0.5, repeat: Infinity }}
                      className="rounded-xl border border-gp-border bg-white p-5 shadow-sm dark:bg-gp-card"
                    >
                      <p className="text-xs font-medium uppercase tracking-wider text-gp-accent">
                        {card.label}
                      </p>
                      <p className="mt-2 font-heading text-lg font-semibold text-gp-text">
                        {card.value}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="mt-4 flex items-center justify-center rounded-xl border border-dashed border-gp-accent/30 bg-gp-accent/5 p-6"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="text-center">
                    <p className="font-mono text-xs text-gp-accent">system.status</p>
                    <p className="mt-1 font-heading text-2xl font-bold text-gp-text">
                      All Systems Operational
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
