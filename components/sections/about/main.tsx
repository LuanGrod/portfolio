import Image from 'next/image';

import TypingAnimation from "./components/TypingAnimation";

import { About } from "@/i18n/dictionaries/types";

interface AboutProps {
  dict: About;
}

export default async function About({ dict }: AboutProps) {
  return (
    <>
      {/* <section id="about" className="flex flex-col justify-center items-center w-full h-screen gap-24 bg-red-500"> */}
      <section id="about" className="flex flex-col justify-center items-center w-full h-[91vh] bg-gradient-to-b from-black/10 dark:from-black/40 to-black/0 max-sm:mb-6 mb-10">
        <div className="w-2/3 flex flex-col justify-center max-sm:gap-y-2 gap-y-10">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center">
            <TypingAnimation dict={dict} />
            <Image src="https://res.cloudinary.com/dwsgo3qmd/image/upload/v1709244371/portfolio/jlyl96fqwhjgdggeatig.png" width={256} height={256} alt="image" />
          </div>
          <div className="w-full font-montserrat text-center opacity-80 max-sm:text-sm sm:text-base lg:text-lg">
            <p className="max-sm:text-lg sm:text-xl lg:text-2xl opacity-100">{dict.titleAbout}</p>
            <p>{dict.content3}</p>
            <p>{dict.content4}</p>
          </div>
        </div>
      </section>
    </>
  );
}