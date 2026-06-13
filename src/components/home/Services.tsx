import { motion } from 'framer-motion'
import {
  Bot,
  Camera,
  Cpu,
  Database,
  Package,
  Workflow,
  type LucideIcon,
} from 'lucide-react'

import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { SectionHeader } from '@/components/ui/section-header'
import { cn } from '@/lib/utils'

const SERVICES: {
  icon: LucideIcon
  title: string
  short: string
  detailed: string
}[] = [
  {
    icon: Database,
    title: 'Custom ERP Development',
    short: 'Tailored business management platforms.',
    detailed:
      'End-to-end ERP systems designed around your workflows — finance, HR, procurement, and operations unified in one scalable platform.',
  },
  {
    icon: Package,
    title: 'Inventory Management Systems',
    short: 'Real-time inventory tracking solutions.',
    detailed:
      'Cloud-native inventory platforms with RFID integration, multi-location sync, and intelligent reorder automation.',
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    short: 'Automate repetitive business operations.',
    detailed:
      'Intelligent automation pipelines that eliminate manual tasks, reduce errors, and accelerate decision-making across teams.',
  },
  {
    icon: Bot,
    title: 'AI Integrations',
    short: 'Smart assistants and business intelligence.',
    detailed:
      'LLM-powered assistants, RAG systems, and predictive analytics that turn your data into actionable business intelligence.',
  },
  {
    icon: Camera,
    title: 'Trail Camera Solutions',
    short: 'Remote wildlife and monitoring hardware systems.',
    detailed:
      'Cellular-connected trail cameras with cloud dashboards, motion detection, and real-time alerts for remote monitoring.',
  },
  {
    icon: Cpu,
    title: 'IoT & Embedded Systems',
    short: 'Custom hardware connected to cloud platforms.',
    detailed:
      'Embedded firmware, sensor networks, and IoT gateways seamlessly integrated with enterprise cloud infrastructure.',
  },
]

export function Services() {
  return (
    <section id="solutions" className="bg-white py-24 dark:bg-gp-primary lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Solutions"
            title="Enterprise-grade services built for scale"
            description="From software architecture to hardware integration, we deliver comprehensive solutions that drive measurable business impact."
          />
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative h-full cursor-pointer overflow-hidden rounded-2xl border border-gp-border bg-gp-card p-8 shadow-sm transition-shadow hover:shadow-xl hover:shadow-gp-accent/5"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gp-accent/0 to-gp-accent/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gp-accent/10 text-gp-accent transition-colors group-hover:bg-gp-accent group-hover:text-white">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-gp-text">{service.title}</h3>
                  <p className="mt-2 text-sm text-gp-muted">{service.short}</p>
                  <p
                    className={cn(
                      'mt-4 text-sm leading-relaxed text-gp-muted',
                      'max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100',
                    )}
                  >
                    {service.detailed}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
