"use client";

import Image from "next/image";
import { Card } from "./ui/card";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type modelItem = {
  id: number | string;
  name: string;
  icon: string | StaticImport;
  company?: string;
  isSelected: boolean;
  onClick: () => void;
};

export default function ModelCard({
  id,
  name,
  icon,
  company,
  isSelected,
  onClick,
}: modelItem) {
  const hoverAnimation =
    "shadow-[0_5px_0_rgb(0,0,0)] hover:shadow-[0_2px_0px_rgb(0,0,0)] hover:cursor-pointer ease-out hover:translate-y-1 transition-all";
  return (
    <Card
      key={id}
      className={`realtive h-full w-full flex flex-col p-4 items-center justify-center text-center overflow-hidden ${isSelected ? "animate-in duration-100 border-2 border-black " : "animate-out duration-100"} ${hoverAnimation}`}
      onClick={() => onClick()}
    >
      <Image src={icon} alt={name} width={64} height={64} />
      <h1 className="">{name}</h1>
      <p className="text-sm text-slate-700">{company}</p>
    </Card>
  );
}
