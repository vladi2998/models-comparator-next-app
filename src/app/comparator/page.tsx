"use client";

/* Libs */
import { useChat } from "ai/react";
import { useCallback } from "react";
/* Components */
import ChatBody from "@/components/chat/ChatBody";
import { ScrollArea } from "@/components/ui/scroll-area";
import modelsStore from "@/stores/ModelsStore";
import { modelItem } from "@/types/models";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/mistralChat",
  });
  const { models } = modelsStore((state) => state);

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
    <ScrollArea className="w-screen h-screen flex">
      {models.length ? (
        models.map((model: modelItem) => {
          return (
            <ChatBody
              key={model.id}
              messages={messages}
              input={input}
              handleInputChange={memoizedHandleInputChange}
              handleSubmit={memoizedHandleSubmit}
            />
          );
        })
      ) : (
        <div>Please chose at least one model...</div>
      )}
    </ScrollArea>
  );
}
