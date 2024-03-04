import { Experience } from "@/i18n/dictionaries/types";

import { Separator } from "@/components/ui/separator"

import SectionTitle from "@/components/section-title";
import JobCarousel from "./components/JobCarousel";

interface ExperienceProps {
  dict: Experience;
}

export default async function Experience({ dict }: ExperienceProps) {
  return (
    <>
      <Separator className="w-3/4 bg-black/20 dark:bg-white/20 h-[1px]"/>
      <section id="experience" className="flex flex-col justify-center items-center w-full h-fit max-sm:my-6 my-10">
        <SectionTitle text={dict.titleExperience} />
        <JobCarousel cards={dict.cards}/>
      </section>
    </>
  );
}