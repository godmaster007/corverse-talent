import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI("AIzaSyAqlTEypDs6ArnkA2y7jdxtrYq-P_TkoCQ");

async function run() {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const chat = model.startChat({
      history: [
        { role: 'user', parts: [{ text: "Hello" }] },
        { role: 'model', parts: [{ text: "Hello! I'm the Corverse AI Concierge." }] }
      ]
    });
    console.log("Sending message...");
    const result = await chat.sendMessage("test");
    console.log("Response:", result.response.text());
  } catch (error) {
    console.error("ERROR:", error.message);
  }
}
run();
