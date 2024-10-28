"use client";
/* Libs */
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
/* Components */
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import ModelCard from "@/components/ModelCard";
import CounterComponent from "@/components/CounterComponent";
import modelsStore from "@/stores/ModelsStore";
/* Media */
import anthropicImg from "@/public/webp/anthropic.webp";
import googleImg from "@/public/webp/google.webp";
import groqImg from "@/public/webp/groq.webp";
import mistralImg from "@/public/webp/mistral.webp";
import openaiImg from "@/public/webp/openai.webp";
/* types */
import { type modelItem } from "@/types/models";

export function InitialForm() {
  const updateModels = modelsStore((state) => state.updateModels);
  const [selectedModels, setSelectedModels] = useState<modelItem[]>([]);
  const router = useRouter();
  const { toast } = useToast();

  function onSubmit() {
    if (!selectedModels.length) {
      toast({
        title: "No models selected",
        description: "Please select at least one model to compare",
        variant: "destructive",
        duration: 4000,
      });
      return;
    }
    updateModels(selectedModels);
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
    updateModels(selectedModels);
  };

  const getSelectedModelsByProvider = (providerIndex: number) => {
    const { models: providerModels } = providers[providerIndex];
    return providerModels.filter((model) =>
      selectedModels.some((selectedModel) => selectedModel.id === model.id),
    ).length;
  };

  const providers = [
    {
      id: 0,
      name: "OpenAI",
      models: [
        { name: "gpt-4o", id: 0, disable: true },
        { name: "gpt-4o-mini", id: 1, disable: true },
        { name: "gpt-4-turbo", id: 2, disable: true },
        { name: "gpt-4", id: 3, disable: true },
        { name: "o1-preview", id: 4, disable: true },
        { name: "o1-mini", id: 5, disable: true },
      ],
      icon: openaiImg,
    },
    {
      id: 1,
      name: "Mistral",
      models: [
        { name: "mistral-large-latest", id: 6, disable: false },
        { name: "mistral-small-latest", id: 7, disable: false },
        { name: "pixtral-12b-2409", id: 8, disable: false },
      ],
      icon: mistralImg,
    },
    {
      id: 2,
      name: "Anthropic",
      models: [
        { name: "claude-3-5-sonnet-20241022", id: 9, disable: true },
        { name: "claude-3-5-sonnet-20240620", id: 10, disable: true },
      ],
      icon: anthropicImg,
    },
    {
      id: 3,
      name: "Google",
      models: [
        { name: "gemini-1.5-flash", id: 11, disable: false },
        { name: "gemini-1.5-pro", id: 12, disable: false },
      ],
      icon: googleImg,
    },
    {
      id: 4,
      name: "Groq",
      models: [
        { name: "llama-3.1-405b-reasoning", id: 13, disable: true },
        { name: "llama-3.1-70b-versatile", id: 14, disable: true },
        { name: "llama-3.1-8b-instant", id: 15, disable: true },
        { name: "mixtral-8x7b-32768", id: 16, disable: true },
        { name: "gemma2-9b-it", id: 17, disable: true },
      ],
      icon: groqImg,
    },
  ];

  return (
    <Card className="w-3/4 lg:w-1/2 h-3/4 p-8 flex flex-col items-start justify-around">
      <Label className="w-full mb-8 flex items-center justify-between">
        <p>Please choose the models you want to compare</p>
      </Label>
      <ScrollArea className="h-auto w-full pr-4">
        <Accordion className="w-full h-full" type="single">
          {providers.map((p) => (
            <AccordionItem key={p.id} value={`item-${p.id}`}>
              <AccordionTrigger>
                <Image src={p.icon} alt={p.name} className="h-8 w-auto" />
                {p.name}
                <CounterComponent
                  number={getSelectedModelsByProvider(p.id)}
                  theme="light"
                />
              </AccordionTrigger>
              <AccordionContent>
                <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
                  {p.models.map((model, index) => (
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
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ScrollArea>
      <div className="mt-8 w-full flex items-center justify-between">
        <CounterComponent number={selectedModels.length} />
        <Button type="submit" onClick={() => onSubmit()}>
          Go to compare
          <ArrowRight width={20} height={20} />
        </Button>
      </div>
    </Card>
  );
}
