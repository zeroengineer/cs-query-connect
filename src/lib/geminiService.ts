
import { toast } from "@/components/ui/use-toast";

// Types for the Gemini API
export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface ChatResponse {
  candidates: {
    content: {
      parts: {
        text: string;
      }[];
    };
  }[];
}

// This would be stored securely in a backend service in production
const GEMINI_API_KEY = "YOUR_API_KEY_HERE"; 
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";

// Function to get a response from Gemini API
export const getGeminiResponse = async (messages: Message[]): Promise<string> => {
  try {
    // Format messages for Gemini API
    const formattedMessages = messages.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.content }]
    }));

    // System prompt to make the assistant CS-focused
    const systemPrompt = {
      role: "system",
      parts: [{ 
        text: "You are a helpful computer science assistant. Focus on providing accurate and educational answers related to computer science topics, algorithms, programming languages, software development, computer architecture, and related fields. Maintain a friendly and educational tone." 
      }]
    };

    // Make the API request
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [systemPrompt, ...formattedMessages],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 1024,
        }
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`API error: ${errorData.error?.message || 'Unknown error'}`);
    }

    const data = await response.json() as ChatResponse;
    
    if (!data.candidates || data.candidates.length === 0) {
      throw new Error('No response from AI assistant');
    }

    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    toast({
      title: "AI Assistant Error",
      description: error instanceof Error ? error.message : "Failed to get response",
      variant: "destructive",
    });
    return "Sorry, I encountered an error. Please try again later.";
  }
};
