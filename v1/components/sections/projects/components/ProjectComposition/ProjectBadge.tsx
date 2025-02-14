'use client'

import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'

interface ProjectBadgeProps {
  label: string
  className?: string
}

export default function ProjectBadge({ label, ...rest }: ProjectBadgeProps) {
  return (
    <Badge className={cn('bg-black/90 dark:bg-white/80', rest.className)}>
      {label}
    </Badge>
  )
}
