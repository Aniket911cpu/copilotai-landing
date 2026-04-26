"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "I was blanking on a system design question. CopilotAI suggested the exact approach I needed. Got the offer from a top tech company next week.",
    name: "Arjun M.",
    role: "Software Engineer — Placed at Google",
    initials: "AM",
  },
  {
    quote: "The STAR-format answers sounded exactly like how I would talk. Not robotic at all. Used it for my Goldman Sachs final round and nailed it.",
    name: "Priya S.",
    role: "Analyst — Placed at Goldman Sachs",
    initials: "PS",
  },
  {
    quote: "Coding helper is insane. Screenshotted a LeetCode Medium and had the optimal solution with complexity analysis in 2 seconds.",
    name: "Rohan K.",
    role: "SDE II — Placed at Amazon",
    initials: "RK",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white/[0.01]" id="testimonials">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Candidates Who Used CopilotAI
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-lg italic text-text-primary leading-relaxed mb-8">
                  "{t.quote}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent-primary/20 flex items-center justify-center text-accent-primary font-bold">
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold">{t.name}</div>
                  <div className="text-xs text-text-muted">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-y border-white/5">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">12,400+</div>
            <div className="text-sm text-text-muted uppercase tracking-widest">Interviews Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">94%</div>
            <div className="text-sm text-text-muted uppercase tracking-widest">Offer Rate Reported</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">&lt; 800ms</div>
            <div className="text-sm text-text-muted uppercase tracking-widest">Avg Response</div>
          </div>
        </div>
      </div>
    </section>
  );
}
