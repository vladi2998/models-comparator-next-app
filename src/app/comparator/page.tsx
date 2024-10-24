import { createMistral } from "@ai-sdk/mistral";
import { generateText } from "ai";

const mistral = createMistral({
  baseURL: "https://api.mistral.ai/v1",
  apiKey: process.env.MISTRAL_API_KEY,
});

export default async function Comparator() {
  const model = mistral("pixtral-12b-2409", {
    safePrompt: false, // optional safety prompt injection
  });
  const { text } = await generateText({
    model: model,
    prompt: "What does the love mean?",
  });

  console.log(text);
  return <div>Comparator page...</div>;
}
