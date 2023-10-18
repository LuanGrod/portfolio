
import { Technologies } from "@/i18n/dictionaries/types";
import TechList from "./components/TechList";

interface TechnologiesProps {
  dict: Technologies;
}

export default async function Technologies({ dict }: TechnologiesProps) {
  return (
    <>
      <section id="technologies" className="flex flex-col justify-center items-center w-full h-fit gap-10 max-sm:pb-20 pb-28">
        <h1 className='font-montserrat max-sm:text-lg sm:text-xl lg:text-2xl'>{dict.titleTechnologies}</h1>
        <TechList dict ={dict}/>
      </section>
    </>
  );
}