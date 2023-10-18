"use client";

import { motion } from 'framer-motion';

interface ContactIconsProps { }

export default function ContactIcons({ }: ContactIconsProps) {

  const github = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "#2F964750"
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "#2F964750"
    }
  };

  const linkedin = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "#0A63BC50"
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "#0A63BC50"
    }
  };

  const email = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "#E3413350"
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "#E3413350"
    }
  };

  const itemsVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 1 * i,
      },
    }),
  };

  return (
    <div className='w-full flex flex-col lg:flex-row justify-center gap-y-10 align-middle items-center font-montserrat'>
      <div className='flex flex-col items-center min-w-[280px]'>
        <motion.a
          href={"https://github.com/LuanGrod"}
          target="_blank"
          className='w-24 h-24 flex items-center justify-center align-middle overflow-hidden rounded-full bg-white dark:bg-white/10 shadow-md'
          variants={itemsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          whileHover={{
            scale: 1.15
          }}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="65"
            height="65"
            viewBox="0 0 24 24"
            style={{ overflow: "visible", stroke: "black", strokeWidth: "1px", strokeLinejoin: "round", strokeLinecap: "round" }}
          >
            <motion.path
              fill="currentColor"
              d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4.44c-.32-.07-.33-.68-.33-.89l.01-2.47c0-.84-.29-1.39-.61-1.67c2.01-.22 4.11-.97 4.11-4.44c0-.98-.35-1.79-.92-2.42c.09-.22.4-1.14-.09-2.38c0 0-.76-.23-2.48.93c-.72-.2-1.48-.3-2.25-.31c-.76.01-1.54.11-2.25.31c-1.72-1.16-2.48-.93-2.48-.93c-.49 1.24-.18 2.16-.09 2.38c-.57.63-.92 1.44-.92 2.42c0 3.47 2.1 4.22 4.1 4.47c-.26.2-.49.6-.57 1.18c-.52.23-1.82.63-2.62-.75c0 0-.48-.86-1.38-.93c0 0-.88 0-.06.55c0 0 .59.28 1 1.32c0 0 .52 1.75 3.03 1.21l.01 1.53c0 .21-.02.82-.34.89H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
              variants={github}
              initial="hidden"
              animate="visible"
              transition={{
                default: { duration: 5.5, ease: "easeInOut" },
                fill: { duration: 5.5, ease: [1, 0, 0.8, 1] }
              }}
            />
          </motion.svg>
        </motion.a>
        <h2 className='mt-4 text-center max-sm:text-sm sm:text-base lg:text-lg'>GitHub</h2>
        <h3 className='text-center max-sm:text-sm lg:text-base opacity-80'>@luanGrod</h3>
      </div>
      <div className='flex flex-col items-center min-w-[280px]'>
        <motion.a
          href={"https://www.linkedin.com/in/luan-grod/"}
          target="_blank"
          className='w-24 h-24 flex items-center justify-center align-middle overflow-hidden rounded-full bg-white dark:bg-white/10 shadow-md'
          variants={itemsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          whileHover={{
            scale: 1.2,
          }}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 24 24"
            style={{ overflow: "visible", stroke: "black", strokeWidth: "1px", strokeLinejoin: "round", strokeLinecap: "round" }}
          >
            <motion.circle
              cx="4.983"
              cy="5.009"
              r="2.188"
              fill="currentColor"
              variants={linkedin}
              initial="hidden"
              animate="visible"
              transition={{
                default: { duration: 5.5, ease: "easeInOut" },
                fill: { duration: 5.5, ease: [1, 0, 0.8, 1] }
              }}
            />
            <motion.path
              fill="currentColor"
              d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118c1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783c-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"
              variants={linkedin}
              initial="hidden"
              animate="visible"
              transition={{
                default: { duration: 5.5, ease: "easeInOut" },
                fill: { duration: 5.5, ease: [1, 0, 0.8, 1] }
              }}
            />
          </motion.svg>
        </motion.a>
        <h2 className='mt-4 text-center max-sm:text-sm sm:text-base lg:text-lg'>LinkedIn</h2>
        <h3 className='text-center max-sm:text-sm lg:text-base opacity-80'>@luan-grod</h3>
      </div>
      <div className='flex flex-col items-center min-w-[280px]'>
        <motion.a
          href="mailto:luan14rodrigues17@gmail.com"
          target="_blank"
          className='w-24 h-24 flex items-center justify-center align-middle overflow-hidden rounded-full bg-white dark:bg-white/10 shadow-md'
          variants={itemsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          whileHover={{
            scale: 1.2,
          }}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 24 24"
            style={{ overflow: "visible", stroke: "black", strokeWidth: "1px", strokeLinejoin: "round", strokeLinecap: "round" }}
          >
            <motion.path
              fill="currentColor"
              d="m18.73 5.41l-1.28 1L12 10.46L6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z"
              variants={email}
              initial="hidden"
              animate="visible"
              transition={{
                default: { duration: 5.5, ease: "easeInOut" },
                fill: { duration: 5.5, ease: [1, 0, 0.8, 1] }
              }}
            />
          </motion.svg>
        </motion.a>
        <h2 className='mt-4 text-center max-sm:text-sm sm:text-base lg:text-lg'>E-mail</h2>
        <h3 className='text-center max-sm:text-sm lg:text-base opacity-80'>luan14rodrigues17@gmail.com</h3>
      </div>
    </div>
  );
}
