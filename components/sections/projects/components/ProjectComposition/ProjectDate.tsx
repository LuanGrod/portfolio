'use client'

import { cn } from '@/lib/utils'

interface ProjectDateProps {
  label: string
  className?: string
}

export default function ProjectDate({ label, ...rest }: ProjectDateProps) {
  return (
    <p
      className={cn(
        'text-start text-xs text-black/30 dark:text-white/60',
        rest.className,
      )}
    >
      {label}
    </p>
  )
}
