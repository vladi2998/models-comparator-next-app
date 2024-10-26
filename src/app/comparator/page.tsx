"use client";

import ChatBody from "@/components/chat/ChatBody";
import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/mistralChat",
  });
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      <ChatBody
        messages={messages}
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
