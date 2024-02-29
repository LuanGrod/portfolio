"use client";

import { Projects } from "@/i18n/dictionaries/types";
import FlipCard from "./FlipCard";
import { ProjectType } from "@/lib/models";


interface ProjectListProps {
  list: ProjectType[],
  dict: Projects
}

export default function ProjectList({ list, dict }: ProjectListProps) {

  return (
    <div className="w-fit grid grid-cols-1 lg:grid-cols-2 gap-x-5 lg:gap-x-8 gap-y-5">
      {
        list.map(item => {
          if (!item.status) {
            return (
              <FlipCard key={item.id} project={item} dict={dict}/>
              // <Card key={item.id} project={item} />
            )
          }
        })
      }
    </div>
  );
}
