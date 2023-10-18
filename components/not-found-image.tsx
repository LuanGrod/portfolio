"use client"

import Image from 'next/image';

import { motion } from 'framer-motion';
import imagem from '@/public/notfound.png';

interface NotFoundImageProps { }

export default function NotFoundImage({ }: NotFoundImageProps) {

  const transitionValues = {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  };

  return (
    <>
      <motion.div
        transition={{
          y: transitionValues
        }}
        animate={{
          y: ["0px", "15px", "0px"]
        }}
      >
        <Image src={imagem} className="max-sm:w-[400px] w-[500px] md:w-[677px] h-auto" alt="image" />
      </motion.div>
    </>
  );
}   