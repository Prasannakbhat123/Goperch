import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Layers,
  Lightbulb,
  Target,
  TrendingUp,
  Wrench,
} from 'lucide-react'
import { type ComponentType, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useParams } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { ProjectImage } from '@/components/ui/project-image'
import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { getProjectBySlug, getRelatedProjects } from '@/lib/projects'

export function ProjectPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined
  const related = project ? getRelatedProjects(project.relatedSlugs) : []

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 pt-24">
        <h1 className="font-display text-3xl font-bold text-gp-text">Project not found</h1>
        <Button asChild className="mt-6">
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>{project.title} — GoPerch Case Study</title>
        <meta name="description" content={project.shortDescription} />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Banner */}
        <section className="relative overflow-hidden pt-24">
          <div className="absolute inset-0">
            <ProjectImage
              src={project.coverImage}
              alt={project.title}
              className="h-full w-full"
              overlay="dark"
              loading="eager"
            />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <Link
              to="/#projects"
              className="mb-8 inline-flex cursor-pointer items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-4 flex flex-wrap gap-3">
                <span className="rounded-full bg-white/20 px-4 py-1 text-sm font-medium text-white backdrop-blur-sm">
                  {project.industry}
                </span>
                <span className="rounded-full bg-white/20 px-4 py-1 text-sm font-medium text-white backdrop-blur-sm">
                  {project.clientType}
                </span>
              </div>
              <h1 className="font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                {project.title}
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-white/80">{project.shortDescription}</p>
            </motion.div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          {/* Overview */}
          <ScrollReveal>
            <Section icon={Target} title="Project Overview" content={project.overview} />
          </ScrollReveal>

          <div className="my-16 grid gap-8 lg:grid-cols-2">
            <ScrollReveal direction="left">
              <Section icon={Lightbulb} title="Problem Statement" content={project.problem} />
            </ScrollReveal>
            <ScrollReveal direction="right">
              <Section icon={CheckCircle2} title="Proposed Solution" content={project.solution} />
            </ScrollReveal>
          </div>

          {/* Architecture */}
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="mb-6 flex items-center gap-3 font-display text-2xl font-bold text-gp-text">
                <Layers className="h-6 w-6 text-gp-accent" />
                System Architecture
              </h2>
              <div className="rounded-2xl border border-gp-border bg-gp-secondary p-8">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {project.architecture.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="rounded-xl border border-gp-border bg-white p-5 dark:bg-gp-card"
                    >
                      <div className="mb-2 font-mono text-xs text-gp-accent">Layer {i + 1}</div>
                      <p className="text-sm text-gp-muted">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Tech Stack */}
          <ScrollReveal>
            <h2 className="mb-6 font-display text-2xl font-bold text-gp-text">Technology Stack</h2>
            <div className="mb-16 flex flex-wrap gap-3">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-xl border border-gp-border bg-gp-secondary px-5 py-2.5 font-mono text-sm text-gp-text"
                >
                  {t}
                </span>
              ))}
            </div>
          </ScrollReveal>

          {/* Development Process */}
          <ScrollReveal>
            <h2 className="mb-6 font-display text-2xl font-bold text-gp-text">Development Process</h2>
            <div className="mb-16 space-y-3">
              {project.developmentProcess.map((step, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-xl border border-gp-border bg-white p-5 dark:bg-gp-card"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gp-accent/10 font-mono text-sm font-bold text-gp-accent">
                    {i + 1}
                  </span>
                  <p className="text-sm text-gp-muted">{step}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <div className="mb-16 grid gap-8 lg:grid-cols-2">
            <ScrollReveal direction="left">
              <ListSection title="Key Features" items={project.keyFeatures} />
            </ScrollReveal>
            <ScrollReveal direction="right">
              <ListSection title="Challenges Solved" items={project.challenges} icon={Wrench} />
            </ScrollReveal>
          </div>

          {/* Screenshots Gallery */}
          <ScrollReveal>
            <h2 className="mb-6 font-display text-2xl font-bold text-gp-text">Screenshots Gallery</h2>
            <div className="mb-16 grid gap-4 md:grid-cols-3">
              {project.galleryImages.map((image, i) => (
                <ProjectImage
                  key={i}
                  src={image}
                  alt={`${project.title} screenshot ${i + 1}`}
                  className="h-48 rounded-xl ring-1 ring-gp-border"
                />
              ))}
            </div>
          </ScrollReveal>

          {/* Performance Metrics */}
          <ScrollReveal>
            <h2 className="mb-6 flex items-center gap-3 font-display text-2xl font-bold text-gp-text">
              <TrendingUp className="h-6 w-6 text-gp-accent" />
              Performance Metrics
            </h2>
            <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-gp-border bg-gp-secondary p-6 text-center"
                >
                  <p className="font-display text-3xl font-bold text-gp-accent">{metric.value}</p>
                  <p className="mt-2 text-sm text-gp-muted">{metric.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Client Results */}
          <ScrollReveal>
            <h2 className="mb-6 font-display text-2xl font-bold text-gp-text">Client Results</h2>
            <div className="mb-16 space-y-3">
              {project.results.map((result, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl border border-gp-border bg-white p-5 dark:bg-gp-card">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                  <p className="text-sm text-gp-muted">{result}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Next Phase */}
          <ScrollReveal>
            <h2 className="mb-6 font-display text-2xl font-bold text-gp-text">Next Phase Improvements</h2>
            <div className="mb-16 flex flex-wrap gap-3">
              {project.nextPhase.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-gp-accent/20 bg-gp-accent/5 px-4 py-2 text-sm text-gp-accent"
                >
                  {item}
                </span>
              ))}
            </div>
          </ScrollReveal>

          {/* Related Projects */}
          {related.length > 0 && (
            <ScrollReveal>
              <h2 className="mb-6 font-display text-2xl font-bold text-gp-text">Related Projects</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {related.map((rp) => (
                  <Link
                    key={rp.slug}
                    to={`/projects/${rp.slug}`}
                    className="group flex cursor-pointer items-center gap-4 rounded-2xl border border-gp-border bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg dark:bg-gp-card"
                  >
                    <ProjectImage
                      src={rp.coverImage}
                      alt={rp.title}
                      className="h-16 w-16 shrink-0 rounded-xl"
                    />
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-gp-text group-hover:text-gp-accent">
                        {rp.title}
                      </h3>
                      <p className="mt-1 line-clamp-1 text-sm text-gp-muted">
                        {rp.shortDescription}
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gp-muted transition-transform group-hover:translate-x-1 group-hover:text-gp-accent" />
                  </Link>
                ))}
              </div>
            </ScrollReveal>
          )}
        </div>
      </motion.div>
    </>
  )
}

function Section({
  icon: Icon,
  title,
  content,
}: {
  icon: ComponentType<{ className?: string }>
  title: string
  content: string
}) {
  return (
    <div className="mb-8">
      <h2 className="mb-4 flex items-center gap-3 font-display text-2xl font-bold text-gp-text">
        <Icon className="h-6 w-6 text-gp-accent" />
        {title}
      </h2>
      <p className="text-base leading-relaxed text-gp-muted">{content}</p>
    </div>
  )
}

function ListSection({
  title,
  items,
  icon: Icon = CheckCircle2,
}: {
  title: string
  items: string[]
  icon?: React.ComponentType<{ className?: string }>
}) {
  return (
    <div>
      <h2 className="mb-4 font-display text-2xl font-bold text-gp-text">{title}</h2>
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-3 rounded-xl border border-gp-border bg-white p-4 dark:bg-gp-card">
            <Icon className="mt-0.5 h-4 w-4 shrink-0 text-gp-accent" />
            <p className="text-sm text-gp-muted">{item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
