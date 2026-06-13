import { motion } from 'framer-motion'
import { useState } from 'react'

import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { SectionHeader } from '@/components/ui/section-header'
import { PROCESS_STEPS } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function DevelopmentProcess() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section className="overflow-hidden bg-gp-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Process"
            title="A proven path from idea to impact"
            description="Our structured development process ensures transparency, quality, and on-time delivery at every stage."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="relative">
            <div className="absolute left-0 right-0 top-8 hidden h-px bg-gp-border lg:block" />
            <div className="flex gap-4 overflow-x-auto pb-4 lg:gap-0">
              {PROCESS_STEPS.map((step, i) => (
                <motion.div
                  key={step.title}
                  onMouseEnter={() => setActiveStep(i)}
                  className={cn(
                    'relative min-w-[200px] flex-1 cursor-pointer rounded-2xl border p-6 transition-all duration-500 lg:min-w-0 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-4 lg:pt-0',
                    activeStep === i
                      ? 'border-gp-accent/30 bg-white shadow-lg dark:bg-gp-card'
                      : 'border-gp-border bg-white/50 dark:bg-gp-card/50',
                  )}
                  whileHover={{ y: -4 }}
                >
                  <div
                    className={cn(
                      'mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border-2 font-mono text-sm font-bold transition-all duration-300',
                      activeStep === i
                        ? 'border-gp-accent bg-gp-accent text-white shadow-lg shadow-gp-accent/30'
                        : 'border-gp-border bg-white text-gp-muted dark:bg-gp-card',
                    )}
                  >
                    {step.step}
                  </div>
                  <h3 className="font-heading text-base font-semibold text-gp-text">{step.title}</h3>
                  <motion.p
                    initial={false}
                    animate={{
                      height: activeStep === i ? 'auto' : 0,
                      opacity: activeStep === i ? 1 : 0,
                    }}
                    className="mt-2 overflow-hidden text-sm leading-relaxed text-gp-muted"
                  >
                    {step.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
