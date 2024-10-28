"use client";

/* Libs */
import { useChat } from "ai/react";
/* Components */
import ChatBody from "@/components/chat/ChatBody";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import modelsStore from "@/stores/ModelsStore";
import { modelItem } from "@/types/models";
/* Media */
import mistralImg from "@/public/webp/mistral.webp";

export default function Chat() {
  const { models } = modelsStore((state) => state);
  const isEven = models.length % 2 === 0;

  const {
    messages: P12BMessages,
    input: P12BInput,
    handleInputChange: P12BHandleInputChange,
    handleSubmit: P12BHandleSubmit,
  } = useChat({
    api: "/api/pixtral-12b-2409",
  });
  const {
    messages: MSLMessages,
    input: MSLInput,
    handleInputChange: MSLHandleInputChange,
    handleSubmit: MSLHandleSubmit,
  } = useChat({
    api: "/api/mistral-small-latest",
  });
  const {
    messages: MLLMessages,
    input: MLLInput,
    handleInputChange: MLLHandleInputChange,
    handleSubmit: MLLHandleSubmit,
  } = useChat({
    api: "/api/mistral-large-latest",
  });

  const mappingModels = [
    {
      model: "pixtral-12b-2409",
      messages: P12BMessages,
      input: P12BInput,
      handleInputChange: P12BHandleInputChange,
      handleSubmit: P12BHandleSubmit,
      icon: mistralImg,
    },
    {
      model: "mistral-small-latest",
      messages: MSLMessages,
      input: MSLInput,
      handleInputChange: MSLHandleInputChange,
      handleSubmit: MSLHandleSubmit,
      icon: mistralImg,
    },
    {
      model: "mistral-large-latest",
      messages: MLLMessages,
      input: MLLInput,
      handleInputChange: MLLHandleInputChange,
      handleSubmit: MLLHandleSubmit,
      icon: mistralImg,
    },
  ];
  // // Memoize functions to render a new function when its props changes only
  // const memoizedHandleInputChange = useCallback(
  //   (e: React.ChangeEvent<HTMLInputElement>) => {
  //     handleInputChange(e);
  //   },
  //   [handleInputChange],
  // );

  // const memoizedHandleSubmit = useCallback(
  //   (e: React.FormEvent<HTMLFormElement>) => {
  //     handleSubmit(e);
  //   },
  //   [handleSubmit],
  // );
  return (
    <ScrollArea
      className={`h-screen flex-grow overflow-x-auto ${isEven ? "overflow-y-hidden" : ""}`}
    >
      <div
        className={`h-full flex xl:grid ${isEven ? "grid-rows-2" : ""} xl:auto-cols-[minmax(25%,1fr)]`}
      >
        {models.map((model: modelItem, index: number) => (
          <div
            key={model.id}
            className="border border-gray-300 flex items-center justify-center min-w-96 sm:min-w-[30rem] xl:min-w-auto"
            style={{
              gridRow: isEven && index >= models.length / 2 ? 2 : 1,
            }}
          >
            <ChatBody
              key={model.id}
              messages={
                mappingModels.find((m) => m.model === model.name)?.messages ||
                []
              }
              input={
                mappingModels.find((m) => m.model === model.name)?.input || ""
              }
              handleInputChange={
                mappingModels.find((m) => m.model === model.name)
                  ?.handleInputChange || (() => {})
              }
              handleSubmit={
                mappingModels.find((m) => m.model === model.name)
                  ?.handleSubmit || (() => {})
              }
              model={model}
              icon={
                mappingModels.find((m) => m.model === model.name)?.icon || ""
              }
            />
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
