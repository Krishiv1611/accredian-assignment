import { NextResponse } from 'next/server';
import { ChatGroq } from '@langchain/groq';
import { HumanMessage, SystemMessage } from '@langchain/core/messages';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message, industry } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // AI Lead Scoring
    let leadScore = "Unscored";
    try {
      const chat = new ChatGroq({
        model: "llama-3.1-8b-instant",
        temperature: 0,
        maxRetries: 1,
      });

      const response = await chat.invoke([
        new SystemMessage("You are an expert sales lead scorer. Analyze the following lead details. Categorize this lead as exactly one of: 'Strong Lead', 'Moderate Lead', or 'Weak Lead'. Return ONLY the category name. Strong leads usually mention specific teams, budgets, urgent needs, or large scale. Weak leads are very vague or single individuals."),
        new HumanMessage(`Name: ${name}\nIndustry: ${industry}\nMessage: ${message}`)
      ]);
      leadScore = response.content.toString().trim();
    } catch (e) {
      console.error("Scoring failed:", e);
    }

    // Save to Database
    const lead = await prisma.lead.create({
      data: {
        name,
        email,
        message,
        industry,
        leadScore
      }
    });

    return NextResponse.json({ success: true, lead });
  } catch (error) {
    console.error("Enquire API Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
