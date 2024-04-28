'use client'

import Image from 'next/image'

import { AspectRatio } from '@/components/ui/aspect-ratio'
import { cn } from '@/lib/utils'

interface ProjectImageProps {
  url: string
  className?: string
}

export default function ProjectImage({ url, ...rest }: ProjectImageProps) {
  return (
    <div className={cn('w-full', rest.className)}>
      <AspectRatio ratio={16 / 9}>
        <Image
          src={
            url ||
            'https://res.cloudinary.com/dwsgo3qmd/image/upload/v1699476705/portfolio/h36oi6ktxaqqhf54palq.png'
          }
          alt="Image"
          fill
          className="rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  )
}
