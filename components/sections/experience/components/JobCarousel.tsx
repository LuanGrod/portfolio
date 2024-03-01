"use client";

import { FaCode } from "react-icons/fa";
import { FaCodeBranch } from "react-icons/fa6";
import { RiFilePaper2Fill } from "react-icons/ri";

import { Card, CardContent } from "@/components/ui/card";
import { Cards } from "@/i18n/dictionaries/types";

interface JobCarouselProps { 
  cards: Cards;
}

export default function JobCarousel({ cards }: JobCarouselProps) {
  return (
    <>
      <div className="w-full flex flex-row max-sm:flex-col max-sm:gap-4 justify-center">
        <Card className="w-11/12 md:w-64 h-52 p-4 mx-4 bg-white/50 dark:bg-white/10 shadow-lg dark:shadow-2xl">
          <CardContent className="w-full h-full flex flex-col justify-center items-center p-0">
            <FaCode className="w-14 h-14 mb-4" />
            <span className="text-sm">{cards.card11}</span>
            <span className="text-2xl font-bold">{cards.card12}</span>
          </CardContent>
        </Card>
        <Card className="w-11/12 md:w-64 h-52 p-4 mx-4 bg-white/95 dark:bg-white/10 shadow-lg dark:shadow-2xl">
          <CardContent className="w-full h-full flex flex-col justify-center items-center p-0">
            <FaCodeBranch className="w-14 h-14 mb-4" />
            <span className="text-sm">{cards.card21}</span>
            <span className="text-2xl font-bold">{cards.card22}</span>
          </CardContent>
        </Card>
        <Card className="w-11/12 md:w-64 h-52 p-4 mx-4 bg-white/50 dark:bg-white/10 shadow-lg dark:shadow-2xl">
          <CardContent className="w-full h-full flex flex-col justify-center items-center p-0">
            <RiFilePaper2Fill className="w-14 h-14 mb-4" />
            <span className="text-sm">{cards.card31}</span>
            <span className="text-2xl font-bold">{cards.card32}</span>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
