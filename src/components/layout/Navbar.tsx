import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { ThemeToggle } from '@/components/providers/ThemeProvider'
import { Button } from '@/components/ui/button'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { NAV_LINKS } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function Navbar() {
  const scrolled = useScrollPosition()
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    if (!isHome && href.startsWith('#')) {
      window.location.href = `/${href}`
    }
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-gp-border/60 bg-gp-primary/90 shadow-sm backdrop-blur-xl'
          : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link to="/" className="group flex cursor-pointer items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gp-accent text-sm font-bold text-white shadow-lg shadow-gp-accent/30 transition-transform group-hover:scale-105">
            G
          </div>
          <span className="font-display text-xl font-bold tracking-tight text-gp-text">
            GoPerch
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={isHome ? link.href : `/${link.href}`}
              className="cursor-pointer text-sm font-medium text-gp-muted transition-colors hover:text-gp-text"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button asChild>
            <a href={isHome ? '#contact' : '/#contact'}>Book Consultation</a>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-gp-border text-gp-text"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-gp-border bg-gp-primary/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={isHome ? link.href : `/${link.href}`}
                  onClick={() => handleNavClick(link.href)}
                  className="cursor-pointer rounded-lg px-3 py-2.5 text-sm font-medium text-gp-muted transition-colors hover:bg-gp-secondary hover:text-gp-text"
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="mt-3">
                <a href={isHome ? '#contact' : '/#contact'} onClick={() => setMobileOpen(false)}>
                  Book Consultation
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
