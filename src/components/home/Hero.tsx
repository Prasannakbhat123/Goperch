import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { StatGrid } from '@/components/ui/section-header'
import { HERO_STATS } from '@/lib/constants'

function AnimatedGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(37, 99, 235, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37, 99, 235, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(37, 99, 235, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37, 99, 235, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
        animate={{ backgroundPosition: ['0px 0px', '60px 60px'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  )
}

function FloatingParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 10,
  }))

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-gp-accent/20"
          style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

function FloatingIllustrations() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block">
      <motion.div
        className="absolute right-[10%] top-[20%] h-32 w-32 rounded-2xl border border-gp-border/50 bg-white/60 p-4 shadow-xl backdrop-blur-sm dark:bg-white/5"
        animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="mb-2 h-2 w-12 rounded bg-gp-accent/30" />
        <div className="mb-1.5 h-2 w-20 rounded bg-gp-border" />
        <div className="h-2 w-16 rounded bg-gp-border" />
        <div className="mt-3 grid grid-cols-3 gap-1">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-4 rounded bg-gp-accent/10" />
          ))}
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-[25%] left-[8%] h-28 w-28 rounded-full border border-gp-border/50 bg-gradient-to-br from-gp-accent/10 to-violet-500/10 shadow-lg backdrop-blur-sm"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute right-[20%] bottom-[30%] flex h-24 w-24 items-center justify-center rounded-2xl border border-gp-border/50 bg-white/40 shadow-lg backdrop-blur-sm dark:bg-white/5"
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="h-12 w-12 rounded-lg border-2 border-dashed border-gp-accent/40" />
      </motion.div>
    </div>
  )
}

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-18">
      <AnimatedGrid />
      <FloatingParticles />
      <FloatingIllustrations />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gp-secondary/50" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gp-border bg-white/80 px-4 py-1.5 text-xs font-medium text-gp-muted shadow-sm backdrop-blur-sm dark:bg-gp-card/80"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Enterprise Software & Hardware Solutions
          </motion.span>

          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-gp-text sm:text-5xl md:text-6xl lg:text-7xl">
            Building Software & Hardware That{' '}
            <span className="bg-gradient-to-r from-gp-accent to-violet-600 bg-clip-text text-transparent">
              Scale Businesses.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gp-muted md:text-xl">
            From custom ERP systems and enterprise platforms to intelligent hardware solutions,
            GoPerch helps organizations streamline operations and accelerate growth.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <a href="#projects">
                Explore Projects
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="#contact">
                <Calendar className="h-4 w-4" />
                Schedule Consultation
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mx-auto mt-20 max-w-4xl rounded-2xl border border-gp-border bg-white/60 p-8 shadow-xl backdrop-blur-sm dark:bg-gp-card/60 md:p-12"
        >
          <StatGrid stats={HERO_STATS} />
        </motion.div>
      </div>
    </section>
  )
}
