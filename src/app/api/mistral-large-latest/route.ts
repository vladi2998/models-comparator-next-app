import { createMistral } from "@ai-sdk/mistral";
import { convertToCoreMessages, streamText } from "ai";

const mistral = createMistral({
  baseURL: "https://api.mistral.ai/v1",
  apiKey: process.env.MISTRAL_API_KEY,
});

//Options:
const model = mistral("mistral-large-latest", {
  safePrompt: false, // optional safety prompt injection
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
