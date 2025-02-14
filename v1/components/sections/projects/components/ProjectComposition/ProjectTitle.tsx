'use client'

import { cn } from '@/lib/utils'

interface ProjectTitleProps {
  label: string
  className?: string
}

export default function ProjectTitle({ label, ...rest }: ProjectTitleProps) {
  return (
    <h1
      className={cn(
        'text-start text-xl font-bold font-montserrat',
        rest.className,
      )}
    >
      {label}
    </h1>
  )
}
