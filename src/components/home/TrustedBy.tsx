import { TRUSTED_LOGOS } from '@/lib/constants'

export function TrustedBy() {
  const logos = [...TRUSTED_LOGOS, ...TRUSTED_LOGOS]

  return (
    <section className="overflow-hidden border-y border-gp-border bg-gp-secondary py-12">
      <p className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-gp-muted">
        Trusted by forward-thinking companies
      </p>
      <div className="relative">
        <div className="animate-marquee flex w-max gap-16">
          {logos.map((logo, i) => (
            <div
              key={`${logo}-${i}`}
              className="flex shrink-0 items-center gap-3 text-lg font-semibold text-gp-muted/50 grayscale transition-all duration-300 hover:grayscale-0 hover:text-gp-muted"
            >
              <div className="h-8 w-8 rounded-lg bg-gp-border/60" />
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
