"use client";

import { useMotionValue, useScroll, useVelocity, useSpring, useTransform, wrap, useAnimationFrame, motion } from "framer-motion";
import { useRef } from "react";

interface ParallaxTextProps {
  children: string;
  baseVelocity: number;
}

export default function ParallaxText({ children, baseVelocity = 100 }: ParallaxTextProps) {
  const array = [0,0,0,0,0,0,0,0,0,0,0,0,0];
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="w-full font-plaster flex whitespace-nowrap flex-nowrap font-semibold uppercase text-7xl text-neutral-200 dark:text-neutral-800 tracking-tighter m-0 overflow-hidden">
      <motion.div style={{ x }}>
        {
          array.map((item, index) => (
            <span key={index}>{children} </span>
          ))
        }
      </motion.div>
    </div>
  );
}
