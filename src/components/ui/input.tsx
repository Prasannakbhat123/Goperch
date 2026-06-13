import { forwardRef, type InputHTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        'flex h-11 w-full rounded-xl border border-gp-border bg-white px-4 py-2 text-sm text-gp-text transition-colors placeholder:text-gp-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gp-accent/30 dark:bg-gp-secondary',
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
)
Input.displayName = 'Input'

export { Input }
