import { forwardRef, type TextareaHTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

const Textarea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      className={cn(
        'flex min-h-[120px] w-full rounded-xl border border-gp-border bg-white px-4 py-3 text-sm text-gp-text transition-colors placeholder:text-gp-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gp-accent/30 dark:bg-gp-secondary',
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
)
Textarea.displayName = 'Textarea'

export { Textarea }
