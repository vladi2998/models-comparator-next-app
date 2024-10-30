import { Message } from "ai";
import { modelItem } from "./models";
import { type StaticImageData } from "next/image";

export type ChatInputProps = {
  input: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  error?: string | Error;
};
export type ChatBodyProps = ChatInputProps & {
  messages: Message[];
  model: modelItem;
  icon: string | StaticImageData;
};
