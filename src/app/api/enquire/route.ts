import { NextResponse } from 'next/server';
import { ChatGroq } from '@langchain/groq';
import { HumanMessage, SystemMessage } from '@langchain/core/messages';
import { PrismaClient } from '../../../generated/prisma';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

// Initialize the database adapter for Prisma v7
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);

// Reuse PrismaClient instance in dev to prevent connection limit exhaustion
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

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
