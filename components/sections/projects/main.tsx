import { Projects } from "@/i18n/dictionaries/types";

interface ProjectsProps { 
  dict: Projects
}

export default async function Projects({ dict }: ProjectsProps) {
  return (
    <>
      <section id="projects" className="flex flex-col justify-center items-center w-full h-fit gap-24 max-sm:pb-20 pb-28">
      <h1 className='font-montserrat max-sm:text-lg sm:text-xl lg:text-2xl'>{dict.titleProjects}</h1>
      </section>
    </>
  );
}