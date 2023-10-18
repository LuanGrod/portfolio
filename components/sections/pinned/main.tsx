import { Pinned } from "@/i18n/dictionaries/types";

interface PinnedProps { 
  dict: Pinned
}

export default async function Pinned({ dict }: PinnedProps) {
  return (
    <>
      <section id="pinned" className="flex flex-col justify-center items-center w-full h-fit gap-24 max-sm:pb-20 pb-28">
      <h1 className='font-montserrat max-sm:text-lg sm:text-xl lg:text-2xl'>{dict.titlePinned}</h1>
      </section>
    </>
  );
}