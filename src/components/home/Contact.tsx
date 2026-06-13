import { Calendar, Mail, MapPin, Phone, Send } from 'lucide-react'
import { type FormEvent, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { SectionHeader } from '@/components/ui/section-header'
import { Textarea } from '@/components/ui/textarea'

const PROJECT_TYPES = [
  'Custom ERP',
  'Inventory System',
  'Workflow Automation',
  'AI Integration',
  'IoT / Hardware',
  'Other',
]

const BUDGET_RANGES = ['< $25K', '$25K – $50K', '$50K – $100K', '$100K – $250K', '$250K+']

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-gp-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Contact"
            title="Let's build something extraordinary"
            description="Tell us about your project and we'll schedule a consultation to explore how GoPerch can help."
          />
        </ScrollReveal>

        <div className="grid gap-12 lg:grid-cols-5">
          <ScrollReveal direction="left" className="lg:col-span-2">
            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Email', value: 'hello@goperch.com', href: 'mailto:hello@goperch.com' },
                { icon: Phone, label: 'Phone', value: '+1 (555) 234-8900', href: 'tel:+15552348900' },
                { icon: MapPin, label: 'Office', value: 'San Francisco, CA', href: '#' },
              ].map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 rounded-xl border border-gp-border bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-md dark:bg-gp-card"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gp-accent/10 text-gp-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-gp-muted">
                      {label}
                    </p>
                    <p className="font-medium text-gp-text">{value}</p>
                  </div>
                </a>
              ))}

              <Button variant="secondary" className="w-full" asChild>
                <a href="#contact">
                  <Calendar className="h-4 w-4" />
                  Book a Calendar Slot
                </a>
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-gp-border bg-white p-8 shadow-sm dark:bg-gp-card"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <Send className="h-7 w-7" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-gp-text">
                    Message sent!
                  </h3>
                  <p className="mt-2 text-sm text-gp-muted">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-gp-text">Name</label>
                      <Input placeholder="John Doe" required />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-gp-text">
                        Company
                      </label>
                      <Input placeholder="Acme Inc." required />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-gp-text">Email</label>
                      <Input type="email" placeholder="john@acme.com" required />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-gp-text">Phone</label>
                      <Input type="tel" placeholder="+1 (555) 000-0000" />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-gp-text">
                        Project Type
                      </label>
                      <select
                        className="flex h-11 w-full rounded-xl border border-gp-border bg-white px-4 text-sm text-gp-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gp-accent/30 dark:bg-gp-secondary"
                        required
                      >
                        <option value="">Select type</option>
                        {PROJECT_TYPES.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-gp-text">
                        Budget Range
                      </label>
                      <select
                        className="flex h-11 w-full rounded-xl border border-gp-border bg-white px-4 text-sm text-gp-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gp-accent/30 dark:bg-gp-secondary"
                      >
                        <option value="">Select range</option>
                        {BUDGET_RANGES.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="mb-1.5 block text-sm font-medium text-gp-text">
                      Requirements
                    </label>
                    <Textarea placeholder="Tell us about your project goals, timeline, and any specific requirements..." required />
                  </div>
                  <Button type="submit" className="mt-6 w-full" size="lg">
                    Send Message
                    <Send className="h-4 w-4" />
                  </Button>
                </>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
