import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { SectionHeader } from '@/components/ui/section-header'
import { PROJECTS } from '@/lib/projects'

export function FeaturedProjects() {
  return (
    <section id="projects" className="bg-gp-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Projects"
            title="Featured work that drives results"
            description="Explore how we've helped organizations transform operations with custom software and hardware solutions."
          />
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group overflow-hidden rounded-2xl border border-gp-border bg-white shadow-sm transition-shadow hover:shadow-xl dark:bg-gp-card"
              >
                <div
                  className={`relative h-48 bg-gradient-to-br ${project.coverGradient} p-6`}
                >
                  <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    {project.industry}
                  </span>
                  <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                    <ArrowUpRight className="h-5 w-5 text-white" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-heading text-lg font-semibold text-gp-text">
                    {project.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-gp-muted">
                    {project.shortDescription}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-gp-secondary px-2.5 py-1 font-mono text-xs text-gp-muted dark:bg-gp-secondary/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="mt-5 w-full" asChild>
                    <Link to={`/projects/${project.slug}`}>View Case Study</Link>
                  </Button>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
