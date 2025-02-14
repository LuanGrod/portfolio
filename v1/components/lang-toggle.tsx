'use client'

import { usePathname, useRouter } from 'next/navigation'

import toast from 'react-hot-toast'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { Dictionaries } from '@/i18n/dictionaries/types'

interface LangToggleProps {
  dict: Dictionaries
}

export function LangToggle({ dict }: LangToggleProps) {
  const router = useRouter()
  const pathName = usePathname()

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  const handlePathChange = (locale: string) => {
    router.push(redirectedPathName(locale))
    toast.success(dict.toasts.langchanged, {
      icon: '🌎',
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="link">{dict.navbar.language}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup
          onValueChange={(e) => handlePathChange(e)}
          defaultValue={pathName.split('/')[1]}
        >
          <DropdownMenuRadioItem value="pt">Português</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="en">English</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
