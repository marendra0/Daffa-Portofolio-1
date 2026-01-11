
import { GoogleGenAI, Type } from "@google/genai";

export async function generateProjectIdeas(skills: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Based on these skills: ${skills}, suggest 3 unique and creative web project ideas. 
    Format the response as JSON with projectTitle and description.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            projectTitle: { type: Type.STRING },
            description: { type: Type.STRING }
          },
          required: ["projectTitle", "description"]
        }
      }
    }
  });

  return JSON.parse(response.text);
}
