import Image from 'next/image'

import TypingAnimation from './components/TypingAnimation'

import type { About } from '@/i18n/dictionaries/types'

interface AboutProps {
  dict: About
}

export default async function About({ dict }: AboutProps) {
  return (
    <>
      {/* <section id="about" className="flex flex-col justify-center items-center w-full h-screen gap-24 bg-red-500"> */}
      <section
        id="about"
        className="mb-10 flex h-[91vh] w-full flex-col items-center justify-center bg-gradient-to-b from-black/10 to-black/0 dark:from-black/40 max-sm:mb-6"
      >
        <div className="flex w-2/3 flex-col justify-center gap-y-10 max-sm:gap-y-2">
          <div className="flex flex-col-reverse items-center justify-between md:flex-row">
            <TypingAnimation dict={dict} />
            <Image
              src="https://res.cloudinary.com/dwsgo3qmd/image/upload/v1714325036/portfolio/cnidvzvexyhelphzdy6q.png"
              width={256}
              height={256}
              alt="image"
            />
          </div>
          <div className="w-full text-center font-montserrat opacity-80 max-sm:text-sm sm:text-base lg:text-lg">
            <p className="opacity-100 max-sm:text-lg sm:text-xl lg:text-2xl">
              {dict.titleAbout}
            </p>
            <p>{dict.content3}</p>
            <p>{dict.content4}</p>
          </div>
        </div>
      </section>
    </>
  )
}
