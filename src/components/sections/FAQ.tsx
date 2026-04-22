"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  { question: "What is Accredian Enterprise?", answer: "We provide customized learning programs to upskill your workforce in areas like AI, Data, and Product Management." },
  { question: "How are the programs delivered?", answer: "Our programs are delivered through flexible modes including live online sessions, recorded modules, and interactive workshops." },
  { question: "Can we customize the curriculum?", answer: "Absolutely. We tailor our curriculum to address the specific skill gaps and strategic goals of your organization." }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-screen-md">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-slate-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left font-semibold text-slate-800 bg-slate-50 hover:bg-slate-100 flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-white text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
