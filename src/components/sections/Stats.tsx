"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "10K+", label: "Professionals Trained" },
  { value: "200+", label: "Corporate Sessions" },
  { value: "5K+", label: "Active Learners" },
];

export function Stats() {
  return (
    <section id="stats" className="py-16 bg-slate-50 border-y border-slate-100">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="p-6"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.value}</h3>
              <p className="text-slate-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
