"use client";

import React from "react";
import { motion } from "framer-motion";

const COMPANIES = [
  "Google", "Amazon", "Microsoft", "Goldman Sachs", "McKinsey", "Flipkart",
  "Google", "Amazon", "Microsoft", "Goldman Sachs", "McKinsey", "Flipkart"
];

export default function SocialProof() {
  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.01] overflow-hidden">
      <div className="container mx-auto px-6 mb-8 text-center">
        <p className="text-sm font-medium text-text-muted uppercase tracking-[0.2em]">
          Trusted by candidates at
        </p>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex whitespace-nowrap"
        >
          {COMPANIES.map((company, index) => (
            <div
              key={index}
              className="mx-12 text-2xl font-bold text-white/20 hover:text-white/60 transition-colors cursor-default"
            >
              {company}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
