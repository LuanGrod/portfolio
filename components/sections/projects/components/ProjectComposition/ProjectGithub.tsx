"use client";

import Link from "next/link";
import { Github } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ProjectGithubProps {
  url: string;
  dict: string
  className?: string;
}

export default function ProjectGithub({ url, dict, ...rest }: ProjectGithubProps) {
  return (
    <Link href={url} target="_blank" className={cn('', rest.className)}>
      <Button variant={"ghost_theme"} className="flex gap-2 justify-center items-center w-full">
        <Github className="w-4 h-4 mr-2" />
        {dict}
      </Button>
    </Link>
  );
}
