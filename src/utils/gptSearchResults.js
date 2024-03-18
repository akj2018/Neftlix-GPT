import openai from "./openai";
import { GPT_PROMPT_TEMPLATE } from "./constants";

async function getSearchResults(query) {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: GPT_PROMPT_TEMPLATE(query) }],
    model: "gpt-3.5-turbo",
  });

  return chatCompletion;
}

export default getSearchResults;
