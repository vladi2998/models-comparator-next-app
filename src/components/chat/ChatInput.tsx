"use client";
import { Paperclip, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ChatInputProps } from "@/types/chat";

const ChatInput = ({
  input,
  handleInputChange,
  handleSubmit,
}: ChatInputProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      const syntheticEvent = new Event("submit", {
        bubbles: true,
        cancelable: true,
      });
      handleSubmit(
        syntheticEvent as unknown as React.FormEvent<HTMLFormElement>,
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-end space-x-2">
        <Input
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
          className="flex-grow"
          onKeyDown={handleKeyDown}
        />
        <div className="flex space-x-2">
          <Tooltip>
            <TooltipTrigger>
              <Button
                variant="outline"
                size="icon"
                aria-label="Attach media"
                disabled
              >
                <Paperclip className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>
                This model doesn`t support media attachments or is not
                implemented yet.
              </p>
            </TooltipContent>
          </Tooltip>
          <Button type="submit" aria-label="Send message">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ChatInput;
