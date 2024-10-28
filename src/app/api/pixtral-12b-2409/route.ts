import { createMistral } from "@ai-sdk/mistral";
import { convertToCoreMessages, streamText } from "ai";

const mistral = createMistral({
  baseURL: "https://api.mistral.ai/v1",
  apiKey: process.env.MISTRAL_API_KEY,
});

//Options: "ministral-3b-latest","ministral-8b-latest","pixtral-12b-2409"
const model = mistral("pixtral-12b-2409", {
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
