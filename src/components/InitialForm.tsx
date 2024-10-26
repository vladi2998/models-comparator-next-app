"use client";
/* Libs */
import { useState } from "react";
import { useRouter } from "next/navigation";
/* Components */
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import ModelCard from "@/components/ModelCard";
/* Media */
import anthropicImg from "@/public/webp/anthropic.webp";
import googleImg from "@/public/webp/google.webp";
import metaImg from "@/public/webp/meta.webp";
import mistralImg from "@/public/webp/mistral.webp";
import nvidiaImg from "@/public/webp/nvidia.webp";
import openaiImg from "@/public/webp/openai.webp";

type modelItem = {
  id: number;
  name: string;
};

export function InitialForm() {
  const [selectedModels, setSelectedModels] = useState<modelItem[]>([]);
  const router = useRouter();
  function onSubmit() {
    console.log(selectedModels);
    router.push("/comparator");
  }

  const handleClick = (model: modelItem) => {
    if (selectedModels.some((selectedModel) => selectedModel.id === model.id)) {
      setSelectedModels(
        selectedModels.filter((selectedModel) => selectedModel.id !== model.id),
      );
    } else {
      setSelectedModels([...selectedModels, model]);
    }
  };

  const mockModelList = [
    {
      name: "ChatGPT-4o",
      id: 0,
      company: "OpenAI",
      icon: openaiImg,
    },
    {
      name: "Mistral",
      id: 1,
      company: "Mistral",
      icon: mistralImg,
    },
    {
      name: "Llama3.1 8B",
      id: 2,
      company: "Meta",
      icon: metaImg,
    },
    {
      name: "Cladue 3.5 Sonet",
      id: 3,
      company: "Anthropic",
      icon: anthropicImg,
    },
    {
      name: "Gemini-1.5",
      id: 4,
      company: "Google",
      icon: googleImg,
    },
    {
      name: "Nemotron 70B",
      id: 5,
      company: "Nvidia",
      icon: nvidiaImg,
    },
  ];
  return (
    <div className="flex flex-col items-start justify-center space-y-4">
      <Label>Please choose the models you want to compare</Label>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
        {mockModelList.map((model, index) => (
          <ModelCard
            key={index}
            {...model}
            isSelected={selectedModels.some(
              (selectedModel) => selectedModel.id === model.id,
            )}
            onClick={() => handleClick(model)}
          />
        ))}
      </div>
      <Button type="submit" onClick={() => onSubmit()}>
        Go to compare
        <span className="ml-2 text-lg">→</span>
      </Button>
    </div>
  );
}
