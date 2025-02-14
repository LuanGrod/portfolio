import { Montserrat, Roboto, Plaster } from 'next/font/google'

export const montserrat = Montserrat({
  weight: 'variable',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

export const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

export const plaster = Plaster({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plaster',
})
