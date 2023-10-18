import Image from 'next/image';

import TypingAnimation from "./components/TypingAnimation";

import image from '@/public/dog.jpg';

import { About } from "@/i18n/dictionaries/types";

interface AboutProps {
  dict: About;
}

export default async function About({ dict }: AboutProps) {
  return (
    <>
      <section id="about" className="flex flex-col justify-center items-center w-full h-fit gap-24 mt-20 max-sm:py-20 py-28">
        <div className="w-full flex flex-col-reverse md:flex-row justify-evenly items-center">
          <TypingAnimation dict={dict}/>
          <Image src={image} width={500} height={500} className="w-64 h-64 rounded-full" alt="image" />
        </div>
        <div className="w-fit max-w-md md:max-w-xl lg:max-w-4xl font-montserrat text-center opacity-80 max-sm:text-sm sm:text-base lg:text-lg">
          <p className="max-sm:text-lg sm:text-xl lg:text-2xl opacity-100">{dict.titleAbout}</p>
          <p>{dict.content3}</p>
          <p>{dict.content4}</p>
        </div>
      </section>
    </>
  );
}