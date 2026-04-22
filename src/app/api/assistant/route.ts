import { NextResponse } from 'next/server';
import { ChatGroq } from '@langchain/groq';
import { HumanMessage, SystemMessage } from '@langchain/core/messages';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message || message.length < 5) {
      return NextResponse.json({ suggestion: '' });
    }

    const chat = new ChatGroq({
      model: "llama-3.1-8b-instant",
      temperature: 0.2,
      maxRetries: 2,
    });

    const response = await chat.invoke([
      new SystemMessage("You are a helpful assistant for a corporate training company called Accredian. A user is drafting an enquiry message to us. If their message lacks detail (like their industry, role, or specific training need), provide a short, friendly, single-sentence tip (max 15 words) suggesting what they could add. If it looks detailed enough, reply exactly with 'LOOKS_GOOD'."),
      new HumanMessage(`User's draft: "${message}"`)
    ]);

    const content = response.content.toString();
    const suggestion = content.includes('LOOKS_GOOD') ? '' : content;

    return NextResponse.json({ suggestion });
  } catch (error) {
    console.error("Assistant API Error:", error);
    return NextResponse.json({ suggestion: '' }, { status: 500 });
  }
}
