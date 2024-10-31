import { createOpenAI } from "@ai-sdk/openai";
import { convertToCoreMessages, streamText } from "ai";

const openai = createOpenAI({
  compatibility: "strict", // strict mode
});

//Options: gpt-4o, gpt-4o-mini, gpt-4o-audio-preview, gpt-4-turbo, gpt-4, gpt-3.5-turbo
const model = openai("gpt-4o-audio-preview");
// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: model,
    messages: convertToCoreMessages(messages),
  });

  return result.toDataStreamResponse();
}
