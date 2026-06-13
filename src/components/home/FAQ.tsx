import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { SectionHeader } from '@/components/ui/section-header'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { FAQ_ITEMS } from '@/lib/constants'

export function FAQ() {
  return (
    <section id="faq" className="bg-white py-24 dark:bg-gp-primary lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently asked questions"
            description="Everything you need to know about working with GoPerch."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <Accordion type="single" collapsible className="w-full">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  )
}
