"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Ghost, 
  Zap, 
  FileText, 
  Code2, 
  Target, 
  BarChart3 
} from "lucide-react";

const FEATURES = [
  {
    icon: Ghost,
    title: "Invisible Overlay",
    body: "Undetectable by Zoom, Teams, Meet, and HackerRank. Your secret edge.",
    color: "bg-accent-primary/15 text-accent-primary",
  },
  {
    icon: Zap,
    title: "Real-Time Answers",
    body: "First token in < 800ms. Streaming word by word. No awkward pauses.",
    color: "bg-accent-violet/15 text-accent-violet",
  },
  {
    icon: FileText,
    title: "Resume-Aware",
    body: "Upload your resume. Every answer references your actual experience.",
    color: "bg-accent-cyan/15 text-accent-cyan",
  },
  {
    icon: Code2,
    title: "Coding Helper",
    body: "Screenshot the problem. Get the optimal solution with time complexity.",
    color: "bg-accent-green/15 text-accent-green",
  },
  {
    icon: Target,
    title: "STAR Framework",
    body: "Auto-applies STAR, CAR, and CIRCLES frameworks to behavioral questions.",
    color: "bg-accent-rose/15 text-accent-rose",
  },
  {
    icon: BarChart3,
    title: "Post-Session Report",
    body: "Full transcript, score, JD keyword gap, and 3 actionable improvement areas.",
    color: "bg-amber-500/15 text-amber-500",
  },
];

export default function Features() {
  return (
    <section className="py-24 relative" id="features">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Everything You Need to Win
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-muted"
          >
            A powerful suite of tools designed to handle every stage of the technical and behavioral interview process.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="glass-card p-8 group transition-all duration-300 hover:border-accent-primary/30"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${feature.color}`}>
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-text-muted leading-relaxed">{feature.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
