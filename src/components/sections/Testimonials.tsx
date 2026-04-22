"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Accredian's training programs completely transformed our product team's approach to innovation. Highly recommended!",
    author: "Sarah J.",
    role: "VP of Product, FinTech Inc"
  },
  {
    quote: "The Gen-AI curriculum was tailored perfectly to our needs, allowing us to implement cutting-edge solutions within weeks.",
    author: "Michael T.",
    role: "CTO, Global Logistics"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-white/10 border-none text-white h-full hover:bg-white/20 transition-colors">
                <CardContent className="p-8">
                  <p className="text-xl italic mb-6">"{test.quote}"</p>
                  <div>
                    <p className="font-bold">{test.author}</p>
                    <p className="text-blue-200 text-sm">{test.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
