import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
async function main() {
  const result = await ai.models.list();
  for await (const model of result) {
    if (model.name.includes("flash") || model.name.includes("lite") || model.name.includes("8b")) {
      console.log(model.name);
    }
  }
}
main().catch(console.error);
