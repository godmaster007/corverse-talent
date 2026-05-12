import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Gemini API. We check if the key exists to prevent crashing if it's missing.
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

export async function generateChatResponse(history, newMessage) {
  if (!genAI) {
    console.error("Gemini API key is missing.");
    return "I'm currently offline due to a configuration issue. Please contact us via the Contact page.";
  }

  try {
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash",
      systemInstruction: "You are the Corverse Talent AI Concierge, a high-end executive recruiter for a boutique recruiting agency called Corverse Talent. Be brief, professional, and helpful. Guide users to our services (Executive Search, Technical Recruiting) or ask if they want to speak with a human recruiter. Keep responses concise (1-3 sentences maximum)."
    });

    // Format history for Gemini API. We filter out any previous error messages if needed,
    // and map our sender ('user'/'ai') to Gemini's role ('user'/'model').
    let formattedHistory = history.map(msg => ({
      role: msg.sender === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }]
    }));

    // Gemini API STRICTLY requires the history to start with a 'user' message.
    // Since our chat starts with an AI greeting, we must prepend a dummy user message.
    if (formattedHistory.length > 0 && formattedHistory[0].role === 'model') {
      formattedHistory = [
        { role: 'user', parts: [{ text: "Hello" }] },
        ...formattedHistory
      ];
    }

    const chat = model.startChat({
      history: formattedHistory,
      generationConfig: {
        maxOutputTokens: 250,
      },
    });

    const result = await chat.sendMessage(newMessage);
    return result.response.text();
  } catch (error) {
    console.error("Gemini Chat Error:", error);
    return "I'm currently experiencing a high volume of requests. Please reach out to us directly via our Contact page or email hello@corversetalent.com.";
  }
}

export async function analyzeResume(base64Data, mimeType) {
  if (!genAI) {
    throw new Error("Gemini API key is missing.");
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `Analyze this resume for an executive or senior technical role. 
Respond ONLY with a valid JSON object matching this exact structure, with no markdown formatting or backticks:
{
  "score": <number between 1 and 100 representing overall alignment/strength>,
  "message": "<A brief 1-2 sentence professional assessment of the profile>",
  "strengths": ["<strength 1>", "<strength 2>", "<strength 3>"],
  "recommendations": ["<recommendation 1>", "<recommendation 2>"]
}`;

    const result = await model.generateContent([
      {
        inlineData: {
          data: base64Data,
          mimeType
        }
      },
      prompt
    ]);

    let responseText = result.response.text();
    // Clean up potential markdown formatting from the response
    responseText = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
    
    return JSON.parse(responseText);
  } catch (error) {
    console.error("Gemini Resume Analysis Error:", error);
    throw new Error("Failed to analyze resume.");
  }
}
