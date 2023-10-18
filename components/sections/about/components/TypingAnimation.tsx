"use client";

import Link from "next/link";
import { DownloadIcon } from "lucide-react";
import { BiLogoGmail } from "react-icons/bi";

import { motion } from "framer-motion";

import { About } from "@/i18n/dictionaries/types";

interface TypingAnimationProps {
  dict: About;
}

export default function TypingAnimation({ dict }: TypingAnimationProps) {
  const content1 = Array.from(dict.content1);
  const content2 = Array.from(dict.content2);

  const container1Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.01 * i },
    }),
  };

  const content1Variants = {
    visible: {
      display: "block",
    },
    hidden: {
      display: "none",
    },
  };

  const container2Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 1.7 * i },
    }),
  };

  const content2Variants = {
    visible: {
      display: "block",
    },
    hidden: {
      display: "none",
    },
  };

  const buttonContainerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 4 * i },
    }),
  }

  const buttonVariants = {
    visible: {
      opacity: 1,
      y: 0
    },
    hidden: {
      opacity: 0,
      y: -50
    },
  };


  return (
    <div className="flex flex-col">
      <motion.div
        className="flex w-full max-w-md justify-center md:justify-start font-montserrat max-sm:text-2xl sm:text-3xl lg:text-4xl"
        variants={container1Variants}
        initial="hidden"
        animate="visible"
      >
        {content1.map((item, index) => (
          <motion.span variants={content1Variants} key={index}>
            {item === " " ? "\u00A0" : item}
          </motion.span>
        ))}👋
      </motion.div>
      <motion.div
        className="flex w-full max-w-md justify-center md:justify-start font-montserrat flex-row max-sm:text-lg sm:text-xl lg:text-2xl"
        variants={container2Variants}
        initial="hidden"
        animate="visible"
      >
        {content2.map((item, index) => (
          <motion.span className="opacity-60" variants={content2Variants} key={index}>
            {item === " " ? "\u00A0" : item}
          </motion.span>
        ))}
      </motion.div>
      <motion.div 
        className="w-full flex justify-center md:justify-start mt-4 gap-4"
        variants={buttonContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.button 
          className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-md"
          variants={buttonVariants}
        >
          <Link className="flex gap-2 items-center relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-neutral-800 rounded-md group-hover:bg-opacity-0" href="https://drive.google.com/file/d/1FKcFFi5LbgoIdid8P9iUt_U7wri-0_25/view?usp=sharing" target="_blank">
            <DownloadIcon className="w-4 h-4" />Download CV
          </Link>
        </motion.button>
        <motion.button 
          className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-neutral-500 dark:from-neutral-700 to-neutral-400 dark:to-neutral-500 group-hover:from-neutral-300 dark:group-hover:from-neutral-600 group-hover:to-neutral-200 dark:group-hover:to-neutral-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-md"
          variants={buttonVariants}
        >
          <Link className="flex gap-2 items-center relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-neutral-800 rounded-md group-hover:bg-opacity-0" href="mailto:luan14rodrigues17@gmail.com" target="_blank">
            <BiLogoGmail className="w-4 h-4" />{dict.getintouch}
          </Link>
        </motion.button>
      </motion.div>
    </div>
  );
}
