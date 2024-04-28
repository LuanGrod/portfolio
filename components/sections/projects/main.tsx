import type { Projects } from '@/i18n/dictionaries/types'
import { getProjects } from '@/lib/utils'
import ProjectList from './components/ProjectList'
import SectionTitle from '@/components/section-title'
interface ProjectsProps {
  dict: Projects
}

export default async function Projects({ dict }: ProjectsProps) {
  const list = getProjects(dict)

  return (
    <>
      <section
        id="projects"
        className="flex flex-col justify-center items-center w-full h-fit max-sm:mb-6 mb-10"
      >
        <SectionTitle text={dict.titleProjects} />
        <ProjectList list={list} dict={dict} />
      </section>
    </>
  )
}
