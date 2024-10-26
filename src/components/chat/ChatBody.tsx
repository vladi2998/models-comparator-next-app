"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ChatBodyProps } from "@/types/chat";
import MessageList from "./ChatList";
import ChatInput from "./ChatInput";

export default function ChatBody({
  messages,
  input,
  handleInputChange,
  handleSubmit,
}: ChatBodyProps) {
  return (
    <div className="w-full mx-auto p-4">
      <Card>
        <CardContent className="p-6">
          <MessageList messages={messages} />
          <div className="mt-4">
            <ChatInput
              input={input}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
