'use client'

import { cn } from '@/lib/utils'

interface ProjectShortProps {
  label: string
  className?: string
}

export default function ProjectShort({ label, ...rest }: ProjectShortProps) {
  return (
    <p
      className={cn(
        'text-start text-sm text-black/50 dark:text-white/80',
        rest.className,
      )}
    >
      {label}
    </p>
  )
}
