"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ChatBodyProps } from "@/types/chat";
import { XCircleIcon } from "lucide-react";
import MessageList from "./ChatList";
import ChatInput from "./ChatInput";
import modelsStore from "@/stores/ModelsStore";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";

export default function ChatBody({
  messages,
  input,
  handleInputChange,
  handleSubmit,
  model,
  error,
  icon,
}: ChatBodyProps) {
  const { toast } = useToast();
  const { models, removeModel } = modelsStore((state) => state);

  const handleCloseChat = () => {
    if (models.length === 1) {
      toast({
        title: "Cannot remove all models",
        description: "You must have at least one model opened.",
        variant: "destructive",
        duration: 4000,
      });
      return;
    }
    removeModel(model);
  };

  console.log("ERROR", error);
  return (
    <div className="relative w-full h-full max-h-screen mx-auto p-4 group">
      <XCircleIcon
        onClick={handleCloseChat}
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
      />
      <Card className="w-full h-full max-h-screen">
        <CardContent className="w-full h-full flex flex-col items-center justify-center py-6 px-4">
          <div className="w-full h-auto flex items-center justify-start space-x-4">
            <Image
              src={icon}
              alt={model.name}
              className="rounded-full w-8 h-8"
            />
            <h1 className="font-semibold text-lg hover:underline cursor-pointer">
              {model.name}
            </h1>
          </div>
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
