"use client";

import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type modelItem = {
  id: number | string;
  name: string;
  isSelected: boolean;
  onClick: () => void;
};

export default function ModelCard({
  id,
  name,
  isSelected,
  onClick,
}: modelItem) {
  const hoverAnimation =
    "shadow-[0_5px_0_rgb(0,0,0)] hover:shadow-[0_2px_0px_rgb(0,0,0)] hover:cursor-pointer ease-out hover:translate-y-1 transition-all";
  return (
    <Tooltip delayDuration={500}>
      <TooltipTrigger className="cursor-pointer" asChild>
        <Card
          key={id}
          className={`realtive h-auto w-auto flex flex-col p-4 items-center justify-center text-center text-wrap overflow-x-hidden ${isSelected ? "animate-in duration-100 border-2 border-black " : "animate-out duration-100"} ${hoverAnimation}`}
          onClick={() => onClick()}
        >
          {name}
        </Card>
      </TooltipTrigger>
      <TooltipContent>
        <p>{name}</p>
      </TooltipContent>
    </Tooltip>
  );
}
