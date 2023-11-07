import Footer from "@/components/footer";
import MainNav from "@/components/main-nav";
import About from "@/components/sections/about/main";
import Contact from "@/components/sections/contact/main";
import Pinned from "@/components/sections/pinned/main";
import Projects from "@/components/sections/projects/main";
import Technologies from "@/components/sections/skills/main";

import { getDictionary } from "@/i18n/get-dictionary";
import { Locale } from "@/i18n/i18n-config";

interface pageProps {
  params: {
    lang: Locale
  }
}

export default async function page({ params: { lang } }: pageProps) {

  const dict = await getDictionary(lang);

  /*
  https://flowbite.com/docs/components/drawer/
  https://flowbite.com/docs/components/speed-dial/
  https://www.rhuanbello.com/
  https://www.birobirobiro.dev/
  https://upmostly.com/next-js/how-to-level-up-your-next-js-app-with-scroll-animations
  */

  return (
    <>
      <MainNav dict={dict} />
      <main className="bg-neutral-200 dark:bg-neutral-800 relative w-auto h-fit min-h-screen flex flex-col items-center justify-center text-center duration-300">
        <About dict={dict.about} />
        <Pinned dict={dict.pinned} />
        <Technologies dict={dict.technologies} />
        <Projects dict={dict.projects} />
        <Contact dict={dict.contact} />
        <Footer dict={dict} />
      </main>
    </>
  )
}
