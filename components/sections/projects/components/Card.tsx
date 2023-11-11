"use client";

import { ProjectType } from "@/lib/models";
import { Project } from "./ProjectComposition/Index";



interface CardProps {
  project: ProjectType;
}

export default function Card({ project }: CardProps) {
  return (
    <div className="w-full flex justify-center">
      <Project.Root
        key={project.id}
        className="relative flex flex-col justify-between hover:cursor-pointer"
      >
        <div>
          <Project.Title label={project.name} />
          <Project.Date label={project.date} />
          <Project.Short label={project.short} />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex flex-wrap justify-start gap-x-1 gap-y-0.5">
            {
              project.tags.map(badge => (
                <Project.Badge key={badge} label={badge} />
              ))
            }
          </div>
          <Project.Image key={project.imageUrl[0]} url={project.imageUrl[0]} />
        </div>
      </Project.Root>
    </div>
  );
}
