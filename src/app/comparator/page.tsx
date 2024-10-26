"use client";

import ChatBody from "@/components/chat/ChatBody";
import { useChat } from "ai/react";
import { useCallback } from "react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/mistralChat",
  });

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
    <div className="flex flex-wrap w-full">
      {[0, 1, 2, 3].map((c) => (
        <ChatBody
          key={c}
          messages={messages}
          input={input}
          handleInputChange={memoizedHandleInputChange}
          handleSubmit={memoizedHandleSubmit}
        />
      ))}
    </div>
  );
}
