"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { EnquireModal } from "@/components/ui/EnquireModal";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-32">
      <div className="container mx-auto px-4 max-w-screen-xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            Next-Gen Expertise for Your <span className="text-blue-600">Enterprise</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Cultivate high-performance teams through expert learning. Drive strategic growth and innovation with our tailored corporate training solutions.
          </p>
          <EnquireModal>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-lg transition-transform hover:scale-105">
              Enquire Now
            </Button>
          </EnquireModal>
        </motion.div>
      </div>
    </section>
  );
}
