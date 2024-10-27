"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ChatBodyProps } from "@/types/chat";
import { XCircleIcon } from "lucide-react";
import MessageList from "./ChatList";
import ChatInput from "./ChatInput";
import modelsStore from "@/stores/ModelsStore";

export default function ChatBody({
  messages,
  input,
  handleInputChange,
  handleSubmit,
  model,
}: ChatBodyProps) {
  const removeModel = modelsStore((state) => state.removeModel);
  const handleCloseChat = () => {
    removeModel(model);
  };
  return (
    <div className="relative w-full h-full max-h-screen mx-auto p-4 group">
      <XCircleIcon
        onClick={handleCloseChat}
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
      />
      <Card className="w-full h-full max-h-screen">
        <CardContent className="w-full h-full flex flex-col items-center justify-center py-6 px-4">
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
