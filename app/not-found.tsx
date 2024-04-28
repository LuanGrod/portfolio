'use client'

import { CornerDownLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

import NotFoundImage from '@/components/not-found-image'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="w-screen max-w-screen h-screen flex flex-col-reverse md:flex-row justify-center items-center bg-neutral-200 dark:bg-neutral-800">
      <div className="flex flex-col justify-end items-end">
        <h1 className="text-9xl">404</h1>
        <Separator className="bg-black dark:bg-white my-2" />
        <div className="w-full flex justify-between items-end">
          <h2 className="text-xl">Not Found</h2>
          <Button
            onClick={() => {
              router.push('/')
            }}
            size={'icon'}
          >
            <CornerDownLeft />
          </Button>
        </div>
      </div>
      <NotFoundImage />
    </div>
  )
}
