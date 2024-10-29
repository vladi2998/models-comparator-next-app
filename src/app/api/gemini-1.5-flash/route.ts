import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { convertToCoreMessages, streamText } from "ai";

const geminiFlas = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY,
});

//Options: gemini-1.5-flash, gemini-1.5-pro
const model = geminiFlas("gemini-1.5-flash");
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
