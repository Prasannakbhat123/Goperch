import { ExternalLink, Globe, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

import { FOOTER_LINKS } from '@/lib/constants'

const SOCIAL_LINKS = [
  { icon: Globe, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: ExternalLink, href: 'https://github.com', label: 'GitHub' },
  { icon: Mail, href: 'https://twitter.com', label: 'X (Twitter)' },
]

export function Footer() {
  return (
    <footer className="border-t border-gp-border bg-gp-secondary">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link to="/" className="flex cursor-pointer items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gp-accent text-sm font-bold text-white">
                G
              </div>
              <span className="font-display text-xl font-bold text-gp-text">GoPerch</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gp-muted">
              Building enterprise software and intelligent hardware solutions that scale businesses
              worldwide.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-gp-border bg-white text-gp-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-gp-accent/30 hover:text-gp-accent hover:shadow-md dark:bg-gp-card"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {(
            Object.entries(FOOTER_LINKS) as [
              string,
              readonly { label: string; href: string }[],
            ][]
          ).map(([section, links]) => (
            <div key={section}>
              <h4 className="mb-4 font-heading text-sm font-semibold capitalize text-gp-text">
                {section}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('/') ? (
                      <Link
                        to={link.href}
                        className="cursor-pointer text-sm text-gp-muted transition-colors hover:text-gp-accent"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="cursor-pointer text-sm text-gp-muted transition-colors hover:text-gp-accent"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gp-border pt-8 md:flex-row">
          <p className="text-sm text-gp-muted">
            &copy; {new Date().getFullYear()} GoPerch. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gp-muted">
            <a href="#" className="cursor-pointer transition-colors hover:text-gp-text">
              Privacy Policy
            </a>
            <a href="#" className="cursor-pointer transition-colors hover:text-gp-text">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
