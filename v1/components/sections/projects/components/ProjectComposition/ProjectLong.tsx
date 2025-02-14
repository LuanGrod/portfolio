'use client'

import { cn } from '@/lib/utils'

interface ProjectLongProps {
  label: string
  className?: string
}

export default function ProjectLong({ label, ...rest }: ProjectLongProps) {
  return (
    <p
      className={cn(
        'text-justify text-sm text-black/50 dark:text-white/80',
        rest.className,
      )}
    >
      {label}
    </p>
  )
}
