'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

import { Project } from './ProjectComposition/Index'
import { Projects } from '@/i18n/dictionaries/types'
import { ProjectType } from '@/lib/models'

interface FlipCardProps {
  project: ProjectType
  dict: Projects
}

export default function FlipCard({ project, dict }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleFlip = () => {
    if (!isAnimating) {
      setIsFlipped(!isFlipped)
      setIsAnimating(true)
    }
  }

  return (
    <div>
      <div
        className="flip-card max-sm:hidden w-[500px] lg:w-[450px] h-[425px] rounded-md"
        onClick={handleFlip}
      >
        <motion.div
          className="flip-card-inner w-full h-full"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.6, animationDirection: 'normal' }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div className="flip-card-front w-full flex justify-center">
            <Project.Root
              key={project.id}
              className="flex flex-col justify-between hover:cursor-pointer"
            >
              <div>
                <Project.Title label={project.name} />
                <Project.Date label={project.date} />
                <Project.Short label={project.short} />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex flex-wrap justify-start gap-x-1 gap-y-0.5">
                  {project.tags.map((badge) => (
                    <Project.Badge key={badge} label={badge} />
                  ))}
                </div>
                <Project.Image
                  key={project.imageUrl[0]}
                  url={project.imageUrl[0]}
                />
              </div>
            </Project.Root>
          </div>

          <div className="flip-card-back w-full flex justify-center">
            <Project.Root
              key={project.id}
              className="flex flex-col justify-between hover:cursor-pointer bg-white dark:bg-neutral-600"
            >
              <div>
                <Project.Title label={project.name} />
                <Project.Date label={project.date} />
                <Project.Long label={project.long} />
              </div>
              <div className="flex flex-col gap-0.5">
                {project.siteUrl && (
                  <Project.Site dict={dict.visit} url={project.siteUrl} />
                )}
                {project.githubUrl && (
                  <Project.Github
                    dict={dict.visitgithub}
                    url={project.githubUrl}
                  />
                )}
              </div>
            </Project.Root>
          </div>
        </motion.div>
      </div>
      <div
        className="flip-card sm:hidden w-[300px] h-[425px] rounded-md"
        onClick={handleFlip}
      >
        <motion.div
          className="flip-card-inner w-full h-full"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.6, animationDirection: 'normal' }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div className="flip-card-front w-full flex justify-center">
            <Project.Root
              key={project.id}
              className="flex flex-col justify-between hover:cursor-pointer"
            >
              <div>
                <Project.Title label={project.name} />
                <Project.Date label={project.date} />
                <Project.Short label={project.short} />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex flex-wrap justify-start gap-x-1 gap-y-0.5">
                  {project.tags.map((badge) => (
                    <Project.Badge key={badge} label={badge} />
                  ))}
                </div>
                <Project.Image
                  key={project.imageUrl[0]}
                  url={project.imageUrl[0]}
                />
              </div>
            </Project.Root>
          </div>

          <div className="flip-card-back w-full flex justify-center">
            <Project.Root
              key={project.id}
              className="flex flex-col justify-between hover:cursor-pointer bg-white dark:bg-neutral-600"
            >
              <div>
                <Project.Title label={project.name} />
                <Project.Date label={project.date} />
                <Project.Long label={project.long} />
              </div>
              <div className="flex flex-col gap-0.5">
                {project.siteUrl && (
                  <Project.Site dict={dict.visit} url={project.siteUrl} />
                )}
                {project.githubUrl && (
                  <Project.Github
                    dict={dict.visitgithub}
                    url={project.githubUrl}
                  />
                )}
              </div>
            </Project.Root>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
