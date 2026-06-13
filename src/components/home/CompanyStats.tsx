import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { SectionHeader, StatGrid } from '@/components/ui/section-header'
import { COMPANY_STATS } from '@/lib/constants'

export function CompanyStats() {
  return (
    <section className="bg-gp-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Impact"
            title="Numbers that speak for themselves"
            description="Measurable outcomes across every engagement we deliver."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="rounded-2xl border border-gp-border bg-white p-8 shadow-sm dark:bg-gp-card md:p-12">
            <StatGrid stats={COMPANY_STATS} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
