'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ProjectVideoProps {
  children: ReactNode | string
  className?: string
}

export default function ProjectVideo({ children, ...rest }: ProjectVideoProps) {
  return <div className={cn('', rest.className)}>{children}</div>
}
