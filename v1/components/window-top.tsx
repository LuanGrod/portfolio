'use client'

import { BsArrowUpShort } from 'react-icons/bs'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'

export default function WindowTop() {
  const { scrollY } = useScroll()
  const [isVisible, setIsVisible] = useState<number>(0)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsVisible(latest)
  })

  return (
    <>
      <motion.a
        href="#about"
        className="fixed bottom-6 right-6 flex justify-center items-center rounded-full bg-black/70 dark:bg-white/70 hover:bg-black/90 hover:dark:bg-white/90"
        style={{
          opacity: isVisible <= 500 ? 0 : 1,
          transition: 'opacity 0.2s ease-in-out',
        }}
      >
        <BsArrowUpShort className="w-6 h-6 m-2 text-white/90 dark:text-black/90" />
      </motion.a>
    </>
  )
}
