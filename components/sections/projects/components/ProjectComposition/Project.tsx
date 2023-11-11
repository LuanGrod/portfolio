"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ProjectRootProps {
  children: ReactNode | string;
  className?: string;
  onClick?: () => void;
}

export default function ProjectRoot({ children, ...rest }: ProjectRootProps) {
  return (
    <div className={cn('w-full max-w-[500px] lg:max-w-[450px] h-[425px] p-7 rounded-lg bg-white/70 dark:bg-white/10 ring-1 ring-neutral-200 dark:ring-neutral-700 shadow-lg dark:shadow-2xl', rest.className)}>
      {children}
    </div>
  );
}
