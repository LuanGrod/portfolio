"use client";

import { PlusCircle } from "lucide-react"

import { Technologies } from "@/i18n/dictionaries/types";
import { getSkills } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

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
        delay: 0.2 * i,
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
        delay: 4 * i,
      }
    }),
  };

  return (
    <>
      <ul className="flex mt-8 max-sm:w-3/4 sm:w-2/3 w-1/2 flex-wrap justify-center gap-2 max-sm:text-sm sm:text-base lg:text-lg text-gray-800">
        {skills.map((item, index) => (
          <>
            <Link href={item.site} target="_blank">
              <motion.li
                className="flex items-center gap-1 dark:text-white/80 rounded-xl px-5 py-3 bg-white hover:bg-white/60 dark:bg-white/10 dark:hover:bg-white/20 hover:cursor-pointer shadow-md "
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
          </>
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
          <div className="flex gap-1">
            <PlusCircle />
            <p>{dict.content1}</p>
          </div>
        </motion.li>
      </ul>
    </>
  );
}
