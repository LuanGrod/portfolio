"use client";

import { Technologies } from "@/i18n/dictionaries/types";
import { getSkills } from "@/lib/utils";
import { motion } from "framer-motion";

interface TechListProps { 
  dict: Technologies
}

export default function TechList({ dict }: TechListProps) {

  const skills = getSkills();

  const itemsVariants = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
      },
    }),
  };

  const moreVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: (i = 1) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 2 * i,
      }
    }),
  };

  return (
    <>
      <ul className="flex max-sm:w-3/4 sm:w-2/3 w-1/2 flex-wrap justify-center gap-2 max-sm:text-sm sm:text-base lg:text-lg text-gray-800">
        {skills.map((item, index) => (
          <motion.li
            className="flex items-center gap-1 bg-white rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 shadow-md"
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
        ))}
        <motion.li
            className="flex items-center gap-1 px-5 py-3 dark:text-white/80 text-sm"
            variants={moreVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
          >
            <p>{dict.content1}</p>
          </motion.li>
      </ul>
    </>
  );
}
