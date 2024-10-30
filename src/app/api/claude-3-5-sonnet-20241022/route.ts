import { createAnthropic } from "@ai-sdk/anthropic";
import { convertToCoreMessages, streamText } from "ai";

const anthropic = createAnthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

//Options: claude-3-5-sonnet-20241022, claude-3-5-sonnet-20240620, claude-3-opus-20240229,
// claude-3-sonnet-20240229, claude-3-haiku-20240307
const model = anthropic("claude-3-5-sonnet-20241022", {
  cacheControl: true,
});
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
