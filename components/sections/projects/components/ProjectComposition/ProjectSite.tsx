'use client'

import Link from 'next/link'
import { ArrowUpRightSquare } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

interface ProjectSiteProps {
  url: string
  dict: string
  className?: string
}

export default function ProjectSite({ url, dict, ...rest }: ProjectSiteProps) {
  return (
    <Link href={url} target="_blank" className={cn('', rest.className)}>
      <Button className="flex gap-2 justify-center items-center w-full">
        <ArrowUpRightSquare className="w-4 h-4 mr-2" />
        {dict}
      </Button>
    </Link>
  )
}
