# Accredian Enterprise - Next-Gen Learning Landing Page

A high-performance, premium landing page for **Accredian Enterprise**, built with **Next.js**, **Prisma**, and integrated **AI capabilities** using LangChain and Groq.

🚀 **Live Demo:** [https://accredian-assignment-4l57.vercel.app/](https://accredian-assignment-4l57.vercel.app/)

---

## 🎯 Objective
This project is a partial clone of the Accredian Enterprise website, focusing on delivering a premium user experience, clean code structure, and innovative AI-powered features.

---

## ✨ Features

### 1. Premium Landing Page
- **Clean and Structured UI:** A professional aesthetic using custom glassmorphism, modern typography, and a cohesive color palette.
- **Dynamic Interactivity:** Smooth, scroll-triggered animations powered by `framer-motion` to create a "premium" feel.
- **Fully Responsive:** Optimized for desktop, tablet, and mobile with a mobile-first approach.

### 2. Real-Time AI Form Assistant (Bonus Feature)
- **Context-Aware Feedback:** While users type their message in the "Enquire Now" form, a real-time AI assistant (powered by **Llama 3.1 via Groq**) provides subtle, helpful tips to improve their inquiry.
- **Micro-interactions:** Debounced tooltips provide real-time value without distracting the user.

### 3. AI-Powered Lead Scoring & Backend (Bonus Feature)
- **Human-Coded Backend:** The API routes and business logic were manually architected to handle complex lead processing.
- **Automated Analysis:** Upon form submission, the backend analyzes the lead's inquiry using **LangChain**.
- **Dynamic Categorization:** Leads are automatically scored as **'Strong'**, **'Moderate'**, or **'Weak'** based on the content of their inquiry.
- **Persistent Storage:** All captured leads and their AI-generated scores are securely stored in a **Neon PostgreSQL database**, managed via **Prisma ORM**.

---

## 🛠 Tech Stack

- **Frontend:** Next.js (App Router), React, Tailwind CSS, Framer Motion.
- **Components:** Shadcn UI (Radix UI primitives) for reusable, accessible components.
- **ORM:** Prisma (configured with the latest Driver Adapter pattern for modern database connections).
- **Database:** Neon PostgreSQL.
- **AI Integration:** LangChain, @langchain/groq (Llama 3.1 8B Instant).
- **Validation:** Zod + React Hook Form for robust type-safe validation.

---

## 🧠 My Approach

1. **Modular Architecture:** I followed a strict modular component structure, separating layout, sections, and UI primitives to ensure high reusability and maintainability.
2. **Performance First:** Leveraged Next.js App Router and Server Components where possible to minimize client-side bundle sizes.
3. **AI-First UX:** Instead of just adding a chatbot, I integrated AI directly into the existing workflow (the enquiry form) to provide immediate value through the "Assistant" and "Scoring" features.
4. **Resilient Backend:** Implemented a global Prisma singleton with the latest Driver Adapter pattern to prevent connection exhaustion in serverless environments.

---

## 🤖 AI Usage & Collaboration

As per the assignment requirements, I utilized AI tools to accelerate development and solve complex configuration hurdles.

### Where AI Helped
- **Architecture Research:** AI assisted in researching the **Prisma Driver Adapter** pattern, which was essential for resolving breaking changes in the latest ORM versions and ensuring stable Vercel deployments.
- **Prompt Engineering:** AI was used to iterate on the system prompts for the Lead Scoring agent to ensure accurate and concise categorization.
- **Boilerplate Acceleration:** Used AI to quickly scaffold repetitive Tailwind layouts and framer-motion variants.

### Manual Refinement (The "Human" Touch)
- **Backend & API Logic:** While AI helped with the "what", I manually wrote the "how"—designing the API routes, handling the edge cases in the lead submission flow, and ensuring the database client was properly instantiated.
- **Component Engineering:** Every Shadcn component was manually integrated and extended to fit the specific design needs of Accredian Enterprise.
- **Debugging & Deployment:** I spent significant time manually troubleshooting Vercel build errors related to generated file paths and ensuring the production environment was perfectly synced with Neon DB.
- **Style Refactoring:** Manually refactored the entire project to use a consistent import style and clean, readable code that is easy to explain to stakeholders.

---

## 📈 Future Improvements

Given more time, I would:
- **Admin Dashboard:** Build a protected dashboard to view and manage scored leads in real-time.
- **Advanced Lead Routing:** Implement a notification system (Slack/Email) that alerts the sales team immediately when a "Strong Lead" is identified.
- **A/B Testing:** Implement edge-based A/B testing on the Hero section to optimize conversion rates.
- **End-to-End Testing:** Add Playwright tests to ensure the AI assistant and form submission logic are resilient across all browsers.

---

## 🚀 Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Krishiv1611/accredian-assignment.git
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env` file with:
   ```env
   DATABASE_URL=your_neon_db_url
   GROQ_API_KEY=your_groq_key
   ```

4. **Initialize Prisma:**
   ```bash
   npx prisma generate
   ```

5. **Run the app:**
   ```bash
   npm run dev
   ```

---

*Built with ❤️ by Krishiv (assisted by Antigravity and Claude).*
