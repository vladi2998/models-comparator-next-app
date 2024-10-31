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
import openaiImg from "@/public/webp/openai.webp";

export default function Chat() {
  const { models } = modelsStore((state) => state);
  const isEven = models.length % 2 === 0;

  //TODO: check how to handle errors correctly -> here https://sdk.vercel.ai/docs/ai-sdk-ui/error-handling
  const {
    messages: P12BMessages,
    input: P12BInput,
    handleInputChange: P12BHandleInputChange,
    handleSubmit: P12BHandleSubmit,
    error: P12BError,
  } = useChat({
    api: "/api/pixtral-12b-2409",
    keepLastMessageOnError: true,
  });
  const {
    messages: MSLMessages,
    input: MSLInput,
    handleInputChange: MSLHandleInputChange,
    handleSubmit: MSLHandleSubmit,
    error: MSLError,
  } = useChat({
    api: "/api/mistral-small-latest",
    keepLastMessageOnError: true,
  });
  const {
    messages: MLLMessages,
    input: MLLInput,
    handleInputChange: MLLHandleInputChange,
    handleSubmit: MLLHandleSubmit,
    error: MLLError,
  } = useChat({
    api: "/api/mistral-large-latest",
    keepLastMessageOnError: true,
  });
  const {
    messages: G15PMessages,
    input: G15PInput,
    handleInputChange: G15PHandleInputChange,
    handleSubmit: G15PHandleSubmit,
    error: G15PError,
  } = useChat({
    api: "/api/gemini-1.5-pro",
    keepLastMessageOnError: true,
  });
  const {
    messages: G15FMessages,
    input: G15FInput,
    handleInputChange: G15FHandleInputChange,
    handleSubmit: G15FHandleSubmit,
    error: G15FError,
  } = useChat({
    api: "/api/gemini-1.5-flash",
    keepLastMessageOnError: true,
  });
  const {
    messages: Claude35Sonnet1Messages,
    input: Claude35Sonnet1Input,
    handleInputChange: Claude35Sonnet1HandleInputChange,
    handleSubmit: Claude35Sonnet1HandleSubmit,
    error: Claude35Sonnet1Error,
  } = useChat({
    api: "/api/claude-3-5-sonnet-20240620",
    keepLastMessageOnError: true,
  });
  const {
    messages: Claude35Sonnet2Messages,
    input: Claude35Sonnet2Input,
    handleInputChange: Claude35Sonnet2HandleInputChange,
    handleSubmit: Claude35Sonnet2HandleSubmit,
    error: Claude35Sonnet2Error,
  } = useChat({
    api: "/api/claude-3-5-sonnet-20241022",
    keepLastMessageOnError: true,
  });
  const {
    messages: Claude3HaikuMessages,
    input: Claude3HaikuInput,
    handleInputChange: Claude3HaikuHandleInputChange,
    handleSubmit: Claude3HaikuHandleSubmit,
    error: Claude3HaikuError,
  } = useChat({
    api: "/api/claude-3-haiku-20240307",
    keepLastMessageOnError: true,
  });
  const {
    messages: Claude3OpusMessages,
    input: Claude3OpusInput,
    handleInputChange: Claude3OpusHandleInputChange,
    handleSubmit: Claude3OpusHandleSubmit,
    error: Claude3OpusError,
  } = useChat({
    api: "api/claude-3-opus-20240229",
    keepLastMessageOnError: true,
  });
  const {
    messages: Claude3SonnetMessages,
    input: Claude3SonnetInput,
    handleInputChange: Claude3SonnetHandleInputChange,
    handleSubmit: Claude3SonnetHandleSubmit,
    error: Claude3SonnetError,
  } = useChat({
    api: "/api/claude-3-sonnet-20240229",
    keepLastMessageOnError: true,
  });
  const {
    messages: GPT3_5Messages,
    input: GPT3_5Input,
    handleInputChange: GPT3_5HandleInputChange,
    handleSubmit: GPT3_5HandleSubmit,
    error: GPT3_5Error,
  } = useChat({
    api: "/api/gpt-3.5-turbo",
    keepLastMessageOnError: true,
  });
  const {
    messages: GPT4Messages,
    input: GPT4Input,
    handleInputChange: GPT4HandleInputChange,
    handleSubmit: GPT4HandleSubmit,
    error: GPT4Error,
  } = useChat({
    api: "/api/gpt-4",
    keepLastMessageOnError: true,
  });
  const {
    messages: GPT4TurboMessages,
    input: GPT4TurboInput,
    handleInputChange: GPT4TurboHandleInputChange,
    handleSubmit: GPT4TurboHandleSubmit,
    error: GPT4TurboError,
  } = useChat({
    api: "/api/gpt-4-turbo",
    keepLastMessageOnError: true,
  });
  const {
    messages: GPT4oMessages,
    input: GPT4oInput,
    handleInputChange: GPT4oHandleInputChange,
    handleSubmit: GPT4oHandleSubmit,
    error: GPT4oError,
  } = useChat({
    api: "/api/gpt-4o",
    keepLastMessageOnError: true,
  });
  const {
    messages: GPT4oAudioPreviewMessages,
    input: GPT4oAudioPreviewInput,
    handleInputChange: GPT4oAudioPreviewHandleInputChange,
    handleSubmit: GPT4oAudioPreviewHandleSubmit,
    error: GPT4oAudioPreviewError,
  } = useChat({
    api: "/api/gpt-4o-audio-preview",
    keepLastMessageOnError: true,
  });
  const {
    messages: GPT4oMiniMessages,
    input: GPT4oMiniInput,
    handleInputChange: GPT4oMiniHandleInputChange,
    handleSubmit: GPT4oMiniHandleSubmit,
    error: GPT4oMiniError,
  } = useChat({
    api: "/api/gpt-4o-mini",
    keepLastMessageOnError: true,
  });

  const mappingModels = [
    {
      model: "pixtral-12b-2409",
      messages: P12BMessages,
      input: P12BInput,
      handleInputChange: P12BHandleInputChange,
      handleSubmit: P12BHandleSubmit,
      icon: mistralImg,
      error: P12BError,
    },
    {
      model: "mistral-small-latest",
      messages: MSLMessages,
      input: MSLInput,
      handleInputChange: MSLHandleInputChange,
      handleSubmit: MSLHandleSubmit,
      icon: mistralImg,
      error: MSLError,
    },
    {
      model: "mistral-large-latest",
      messages: MLLMessages,
      input: MLLInput,
      handleInputChange: MLLHandleInputChange,
      handleSubmit: MLLHandleSubmit,
      icon: mistralImg,
      error: MLLError,
    },
    {
      model: "gemini-1.5-pro",
      messages: G15PMessages,
      input: G15PInput,
      handleInputChange: G15PHandleInputChange,
      handleSubmit: G15PHandleSubmit,
      icon: googleImg,
      error: G15PError,
    },
    {
      model: "gemini-1.5-flash",
      messages: G15FMessages,
      input: G15FInput,
      handleInputChange: G15FHandleInputChange,
      handleSubmit: G15FHandleSubmit,
      icon: googleImg,
      error: G15FError,
    },
    {
      model: "claude-3-5-sonnet-20240620",
      messages: Claude35Sonnet1Messages,
      input: Claude35Sonnet1Input,
      handleInputChange: Claude35Sonnet1HandleInputChange,
      handleSubmit: Claude35Sonnet1HandleSubmit,
      icon: anthropicImg,
      error: Claude35Sonnet1Error,
    },
    {
      model: "claude-3-5-sonnet-20241022",
      messages: Claude35Sonnet2Messages,
      input: Claude35Sonnet2Input,
      handleInputChange: Claude35Sonnet2HandleInputChange,
      handleSubmit: Claude35Sonnet2HandleSubmit,
      icon: anthropicImg,
      error: Claude35Sonnet2Error,
    },
    {
      model: "claude-3-haiku-20240307",
      messages: Claude3HaikuMessages,
      input: Claude3HaikuInput,
      handleInputChange: Claude3HaikuHandleInputChange,
      handleSubmit: Claude3HaikuHandleSubmit,
      icon: anthropicImg,
      error: Claude3HaikuError,
    },
    {
      model: "claude-3-opus-20240229",
      messages: Claude3OpusMessages,
      input: Claude3OpusInput,
      handleInputChange: Claude3OpusHandleInputChange,
      handleSubmit: Claude3OpusHandleSubmit,
      icon: anthropicImg,
      error: Claude3OpusError,
    },
    {
      model: "claude-3-sonnet-20240229",
      messages: Claude3SonnetMessages,
      input: Claude3SonnetInput,
      handleInputChange: Claude3SonnetHandleInputChange,
      handleSubmit: Claude3SonnetHandleSubmit,
      icon: anthropicImg,
      error: Claude3SonnetError,
    },
    {
      model: "gpt-3.5-turbo",
      messages: GPT3_5Messages,
      input: GPT3_5Input,
      handleInputChange: GPT3_5HandleInputChange,
      handleSubmit: GPT3_5HandleSubmit,
      error: GPT3_5Error,
      icon: openaiImg,
    },
    {
      model: "gpt-4",
      messages: GPT4Messages,
      input: GPT4Input,
      handleInputChange: GPT4HandleInputChange,
      handleSubmit: GPT4HandleSubmit,
      error: GPT4Error,
      icon: openaiImg,
    },
    {
      model: "gpt-4-turbo",
      messages: GPT4TurboMessages,
      input: GPT4TurboInput,
      handleInputChange: GPT4TurboHandleInputChange,
      handleSubmit: GPT4TurboHandleSubmit,
      error: GPT4TurboError,
      icon: openaiImg,
    },
    {
      model: "gpt-4o",
      messages: GPT4oMessages,
      input: GPT4oInput,
      handleInputChange: GPT4oHandleInputChange,
      handleSubmit: GPT4oHandleSubmit,
      error: GPT4oError,
      icon: openaiImg,
    },
    {
      model: "gpt-4o-audio-preview",
      messages: GPT4oAudioPreviewMessages,
      input: GPT4oAudioPreviewInput,
      handleInputChange: GPT4oAudioPreviewHandleInputChange,
      handleSubmit: GPT4oAudioPreviewHandleSubmit,
      error: GPT4oAudioPreviewError,
      icon: openaiImg,
    },
    {
      model: "gpt-4o-mini",
      messages: GPT4oMiniMessages,
      input: GPT4oMiniInput,
      handleInputChange: GPT4oMiniHandleInputChange,
      handleSubmit: GPT4oMiniHandleSubmit,
      error: GPT4oMiniError,
      icon: openaiImg,
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
              error={
                mappingModels.find((m) => m.model === model.name)?.error || ""
              }
            />
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
