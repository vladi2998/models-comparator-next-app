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
import googleImg from "@/public/webp/google.webp";
import anthropicImg from "@/public/webp/anthropic.webp";

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
  const {
    messages: G15PMessages,
    input: G15PInput,
    handleInputChange: G15PHandleInputChange,
    handleSubmit: G15PHandleSubmit,
  } = useChat({
    api: "/api/gemini-1.5-pro",
  });
  const {
    messages: G15FMessages,
    input: G15FInput,
    handleInputChange: G15FHandleInputChange,
    handleSubmit: G15FHandleSubmit,
  } = useChat({
    api: "/api/gemini-1.5-flash",
  });
  const {
    messages: Claude35Sonnet1Messages,
    input: Claude35Sonnet1Input,
    handleInputChange: Claude35Sonnet1HandleInputChange,
    handleSubmit: Claude35Sonnet1HandleSubmit,
  } = useChat({
    api: "/api/claude-3-5-sonnet-20240620",
  });
  const {
    messages: Claude35Sonnet2Messages,
    input: Claude35Sonnet2Input,
    handleInputChange: Claude35Sonnet2HandleInputChange,
    handleSubmit: Claude35Sonnet2HandleSubmit,
  } = useChat({
    api: "/api/claude-3-5-sonnet-20241022",
  });
  const {
    messages: Claude3HaikuMessages,
    input: Claude3HaikuInput,
    handleInputChange: Claude3HaikuHandleInputChange,
    handleSubmit: Claude3HaikuHandleSubmit,
  } = useChat({
    api: "/api/claude-3-haiku-20240307",
  });
  const {
    messages: Claude3OpusMessages,
    input: Claude3OpusInput,
    handleInputChange: Claude3OpusHandleInputChange,
    handleSubmit: Claude3OpusHandleSubmit,
  } = useChat({
    api: "api/claude-3-opus-20240229",
  });
  const {
    messages: Claude3SonnetMessages,
    input: Claude3SonnetInput,
    handleInputChange: Claude3SonnetHandleInputChange,
    handleSubmit: Claude3SonnetHandleSubmit,
  } = useChat({
    api: "/api/claude-3-sonnet-20240229",
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
    {
      model: "gemini-1.5-pro",
      messages: G15PMessages,
      input: G15PInput,
      handleInputChange: G15PHandleInputChange,
      handleSubmit: G15PHandleSubmit,
      icon: googleImg,
    },
    {
      model: "gemini-1.5-flash",
      messages: G15FMessages,
      input: G15FInput,
      handleInputChange: G15FHandleInputChange,
      handleSubmit: G15FHandleSubmit,
      icon: googleImg,
    },
    {
      model: "claude-3-5-sonnet-20240620",
      messages: Claude35Sonnet1Messages,
      input: Claude35Sonnet1Input,
      handleInputChange: Claude35Sonnet1HandleInputChange,
      handleSubmit: Claude35Sonnet1HandleSubmit,
      icon: anthropicImg,
    },
    {
      model: "claude-3-5-sonnet-20241022",
      messages: Claude35Sonnet2Messages,
      input: Claude35Sonnet2Input,
      handleInputChange: Claude35Sonnet2HandleInputChange,
      handleSubmit: Claude35Sonnet2HandleSubmit,
      icon: anthropicImg,
    },
    {
      model: "claude-3-haiku-20240307",
      messages: Claude3HaikuMessages,
      input: Claude3HaikuInput,
      handleInputChange: Claude3HaikuHandleInputChange,
      handleSubmit: Claude3HaikuHandleSubmit,
      icon: anthropicImg,
    },
    {
      model: "claude-3-opus-20240229",
      messages: Claude3OpusMessages,
      input: Claude3OpusInput,
      handleInputChange: Claude3OpusHandleInputChange,
      handleSubmit: Claude3OpusHandleSubmit,
      icon: anthropicImg,
    },
    {
      model: "claude-3-sonnet-20240229",
      messages: Claude3SonnetMessages,
      input: Claude3SonnetInput,
      handleInputChange: Claude3SonnetHandleInputChange,
      handleSubmit: Claude3SonnetHandleSubmit,
      icon: anthropicImg,
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
