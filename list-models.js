import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI("AIzaSyAqlTEypDs6ArnkA2y7jdxtrYq-P_TkoCQ");

async function run() {
  try {
    const models = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=AIzaSyAqlTEypDs6ArnkA2y7jdxtrYq-P_TkoCQ`);
    const data = await models.json();
    console.log(data);
  } catch (error) {
    console.error("ERROR:", error.message);
  }
}
run();
