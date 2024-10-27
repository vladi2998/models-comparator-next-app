"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { type Message } from "ai";

const MessageList = ({ messages }: { messages: Message[] }) => (
  <ScrollArea className="h-full pr-4">
    {messages.map((m) => (
      <MessageComponent
        key={m.id}
        id={m.id}
        content={m.content}
        role={m.role}
        createdAt={m.createdAt}
      />
    ))}
  </ScrollArea>
);

const MessageComponent = ({ id, content, role, createdAt }: Message) => (
  <div
    key={id}
    className={`flex ${role === "user" ? "justify-end" : "justify-start"} mb-4`}
  >
    <div
      className={`flex items-start ${role === "user" ? "flex-row-reverse" : ""}`}
    >
      <Avatar className={`w-10 h-10 ${role === "user" ? "ml-2" : "mr-2"}`}>
        <AvatarImage
          src={role === "user" ? "/user-avatar.png" : "/bot-avatar.png"}
        />
        <AvatarFallback>
          {role === "user" ? "You" : "Model Selected (Mistral)"}
        </AvatarFallback>
      </Avatar>
      <Card className={`w-full ${role === "user" ? "ml-2" : "mr-2"}`}>
        <CardContent className="p-3">
          <p className="text-sm">{content}</p>
          <span className="text-xs text-muted-foreground mt-1 block">
            {createdAt?.toDateString()}
          </span>
        </CardContent>
      </Card>
    </div>
  </div>
);

export default MessageList;
