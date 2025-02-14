'use client'

import { getSkills } from '@/lib/utils'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function TechList() {
  const skills = getSkills()

  const itemsVariants = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 * i,
      },
    }),
  }

  return (
    <>
      <ul className="flex max-sm:w-3/4 sm:w-2/3 w-1/2 flex-wrap justify-center gap-2 max-sm:text-sm sm:text-base lg:text-lg  my-4">
        {skills.map((item, index) => (
          <Link key={index} href={item.site} target="_blank">
            <motion.li
              className="flex items-center gap-1 rounded-xl px-5 py-3 bg-white/90 hover:bg-white dark:bg-black/80 dark:hover:bg-black hover:cursor-pointer shadow-md text-gray-800 dark:text-white/80"
              key={index}
              variants={itemsVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              <p>{item.icon}</p>
              <p>{item.nome}</p>
            </motion.li>
          </Link>
        ))}
      </ul>
    </>
  )
}
