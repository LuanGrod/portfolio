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
        <Image src="https://res.cloudinary.com/dwsgo3qmd/image/upload/v1709243904/portfolio/fbnsmh9abnrenb72ugso.png" width={400} height={400} className="max-sm:w-[400px] w-[500px] md:w-[677px] h-auto" alt="image" />
      </motion.div>
    </>
  );
}   