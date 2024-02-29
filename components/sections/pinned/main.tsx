import SectionTitle from "@/components/section-title";
import { Pinned } from "@/i18n/dictionaries/types";

interface PinnedProps { 
  dict: Pinned
}

export default async function Pinned({ dict }: PinnedProps) {
  return (
    <>
      <section id="pinned" className="flex flex-col justify-center items-center w-full h-fit gap-10 max-sm:pb-10 pb-14">
      <SectionTitle text={dict.titlePinned}/>
      </section>
    </>
  );
}