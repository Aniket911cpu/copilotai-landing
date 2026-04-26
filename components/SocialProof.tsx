"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Cloud, 
  Cpu, 
  Globe, 
  Shield, 
  Terminal, 
  Zap,
  Box,
  Layers
} from "lucide-react";

const COMPANIES = [
  { name: "Google", icon: Globe },
  { name: "Amazon", icon: Box },
  { name: "Microsoft", icon: Layers },
  { name: "Goldman Sachs", icon: Shield },
  { name: "McKinsey", icon: Cpu },
  { name: "Flipkart", icon: Terminal },
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
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex whitespace-nowrap"
        >
          {[...COMPANIES, ...COMPANIES].map((company, index) => (
            <div
              key={index}
              className="mx-12 flex items-center gap-3 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all cursor-default"
            >
              <company.icon size={24} className="text-white" />
              <span className="text-xl font-bold text-white tracking-tight">
                {company.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
