"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChatInputProps } from "@/types/chat";
import { Paperclip, Send } from "lucide-react";

const ChatInput = ({
  input,
  handleInputChange,
  handleSubmit,
}: ChatInputProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-end space-x-2">
        <Input
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
          className="flex-grow"
        />
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="icon"
            aria-label="Attach audio"
            disabled
          >
            <Paperclip className="h-4 w-4" />
          </Button>
          <Button type="submit" aria-label="Send message">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ChatInput;
