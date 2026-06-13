import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { useEffect, useState } from 'react'

import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { SectionHeader } from '@/components/ui/section-header'
import { TESTIMONIALS } from '@/lib/constants'

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const testimonial = TESTIMONIALS[current]

  return (
    <section id="testimonials" className="bg-white py-24 dark:bg-gp-primary lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Testimonials"
            title="What our clients say"
            description="Real results from organizations that trusted GoPerch to transform their operations."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="relative mx-auto max-w-3xl">
            <div className="overflow-hidden rounded-2xl border border-gp-border bg-gp-card p-8 shadow-lg md:p-12">
              <Quote className="mb-6 h-10 w-10 text-gp-accent/30" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <blockquote className="text-xl font-medium leading-relaxed text-gp-text md:text-2xl">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  <div className="mt-8 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gp-accent to-violet-600 text-sm font-bold text-white">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-gp-text">{testimonial.name}</p>
                      <p className="text-sm text-gp-muted">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                onClick={() =>
                  setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
                }
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-gp-border text-gp-muted transition-colors hover:bg-gp-secondary hover:text-gp-text"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current ? 'w-8 bg-gp-accent' : 'w-2 bg-gp-border'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length)}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-gp-border text-gp-muted transition-colors hover:bg-gp-secondary hover:text-gp-text"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
