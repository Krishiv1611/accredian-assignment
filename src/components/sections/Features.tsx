"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Product & Innovation",
    description: "Master the art of product management and foster innovation within your team.",
    icon: "🚀"
  },
  {
    title: "Gen-AI & Data",
    description: "Leverage generative AI and advanced data analytics for strategic decision making.",
    icon: "🧠"
  },
  {
    title: "Leadership & Operations",
    description: "Develop core leadership skills to streamline enterprise operations efficiently.",
    icon: "📈"
  }
];

export function Features() {
  return (
    <section id="accredian-edge" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Accredian Edge</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our customized learning paths are designed to close skill gaps and build future-ready capabilities across your entire organization.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow border-slate-200">
                <CardHeader>
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl text-slate-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-slate-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
