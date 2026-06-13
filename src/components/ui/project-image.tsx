import { type ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface ProjectImageProps {
  src: string
  alt: string
  className?: string
  overlay?: boolean | 'light' | 'dark'
  loading?: 'lazy' | 'eager'
  children?: ReactNode
}

export function ProjectImage({
  src,
  alt,
  className,
  overlay = false,
  loading = 'lazy',
  children,
}: ProjectImageProps) {
  return (
    <div className={cn('relative overflow-hidden bg-gp-secondary', className)}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {overlay === true || overlay === 'dark' ? (
        <div className="absolute inset-0 bg-black/45" />
      ) : null}
      {overlay === 'light' ? <div className="absolute inset-0 bg-black/25" /> : null}
      {children ? <div className="absolute inset-0 z-10">{children}</div> : null}
    </div>
  )
}

export function imageUrl(base: string, width = 800) {
  const join = base.includes('?') ? '&' : '?'
  return `${base}${join}auto=format&fit=crop&w=${width}&q=80`
}
