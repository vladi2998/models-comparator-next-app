"use client";

import ChatBody from "@/components/chat/ChatBody";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
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
    <ResizablePanelGroup direction="horizontal">
      {[0, 1, 2, 3, 4, 5].map((c) => (
        <>
          <ResizablePanel key={c}>
            <ChatBody
              messages={messages}
              input={input}
              handleInputChange={memoizedHandleInputChange}
              handleSubmit={memoizedHandleSubmit}
            />
          </ResizablePanel>
          <ResizableHandle />
        </>
      ))}
    </ResizablePanelGroup>
  );
}
