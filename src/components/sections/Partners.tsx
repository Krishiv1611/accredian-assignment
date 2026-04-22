"use client";

import { motion } from "framer-motion";

const partners = ["Reliance", "HCL", "IBM", "CRIF", "ADP", "BAYER"];

export function Partners() {
  return (
    <section id="clients" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-screen-xl text-center">
        <h2 className="text-sm font-semibold text-slate-400 mb-8 uppercase tracking-widest">Trusted by Industry Leaders</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-2xl font-bold text-slate-800"
            >
              {partner}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
