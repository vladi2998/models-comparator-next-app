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
    <div className="w-full h-full mx-auto p-4">
      <Card className="w-full h-full">
        <CardContent className="w-full h-full flex flex-col items-center justify-between p-6">
          <MessageList messages={messages} />
          <div className="w-full mt-4">
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
