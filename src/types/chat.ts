import { Message } from "ai";
import { modelItem } from "./models";

export type ChatInputProps = {
  input: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};
export type ChatBodyProps = ChatInputProps & {
  messages: Message[];
  model: modelItem;
};
