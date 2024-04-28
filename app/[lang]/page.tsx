import Footer from '@/components/footer'
import MainNav from '@/components/main-nav'
import About from '@/components/sections/about/main'
import Contact from '@/components/sections/contact/main'
import Experience from '@/components/sections/experience/main'
import Projects from '@/components/sections/projects/main'
import Technologies from '@/components/sections/skills/main'
import WindowTop from '@/components/window-top'

import { getDictionary } from '@/i18n/get-dictionary'
import { Locale } from '@/i18n/i18n-config'

interface pageProps {
  params: {
    lang: Locale
  }
}

export default async function page({ params: { lang } }: pageProps) {
  const dict = await getDictionary(lang)

  return (
    <>
      <main className="bg-neutral-200 dark:bg-neutral-800 w-auto h-fit min-h-screen flex flex-col items-center justify-center text-center duration-300">
        <MainNav dict={dict} />
        <About dict={dict.about} />
        <Experience dict={dict.experience} />
        <Technologies />
        <Projects dict={dict.projects} />
        <Contact dict={dict.contact} />
        <Footer dict={dict} />
        <WindowTop />
      </main>
    </>
  )
}
