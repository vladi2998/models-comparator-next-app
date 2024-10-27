"use client";

/* Libs */
import { useChat } from "ai/react";
import { useCallback } from "react";
/* Components */
import ChatBody from "@/components/chat/ChatBody";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import modelsStore from "@/stores/ModelsStore";
import { modelItem } from "@/types/models";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/mistralChat",
  });
  const { models } = modelsStore((state) => state);
  const isEven = models.length % 2 === 0;

  // Memoize functions to render a new function when its props changes only
  const memoizedHandleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      handleInputChange(e);
    },
    [handleInputChange],
  );

  const memoizedHandleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      handleSubmit(e);
    },
    [handleSubmit],
  );
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
              messages={messages}
              input={input}
              handleInputChange={memoizedHandleInputChange}
              handleSubmit={memoizedHandleSubmit}
            />
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
