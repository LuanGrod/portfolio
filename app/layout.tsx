import type { Metadata } from 'next'

import './globals.css'

import { i18n } from '@/i18n/i18n-config'
import { roboto, montserrat } from '@/lib/fonts'
import ThemeProvider from '@/providers/theme-provider'
import ToastProvider from '@/providers/toast-provider'

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export const metadata: Metadata = {
  title: "Portfólio | Luan Rodrigues",
  description: 'Criado com Nextjs App Directory',
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={params.lang} className="scroll-smooth" suppressHydrationWarning>
      <body className={`min-h-screen ${roboto.variable} ${montserrat.variable}`}>
        <ToastProvider />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
