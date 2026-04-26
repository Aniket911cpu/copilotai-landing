"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mic, Zap, MessageSquare, Sparkles, Book, Code, Shield } from "lucide-react";

const STEPS = [
  {
    icon: Mic,
    title: "It Listens",
    body: "CopilotAI captures your mic and system audio simultaneously. No setup required mid-interview.",
    color: "accent-primary",
  },
  {
    icon: Zap,
    title: "It Understands",
    body: "Whisper AI transcribes speech in real time and our classifier detects if it's a question.",
    color: "accent-violet",
  },
  {
    icon: MessageSquare,
    title: "It Answers",
    body: "GPT-4.1 streams a personalized answer to the floating overlay in under 80ms.",
    color: "accent-cyan",
  },
];

const GUIDES = [
  {
    title: "Quick Setup",
    icon: Book,
    text: "Install the desktop app, sync your resume, and you're ready for your first interview in under 5 minutes.",
  },
  {
    title: "Technical Mastery",
    icon: Code,
    text: "Use the built-in OCR to capture coding problems. Get Big-O optimized solutions instantly.",
  },
  {
    title: "Stealth Mode",
    icon: Shield,
    text: "Advanced content protection ensures your screen share only shows what you want it to.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 relative overflow-hidden" id="how-it-works">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 gradient-text"
          >
            From Question to Answer in Under a Second
          </motion.h2>
        </div>

        {/* Step Flow */}
        <div className="relative mb-32">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2 overflow-hidden px-24">
            <motion.div
              initial={{ x: "-100%" }}
              whileInView={{ x: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full h-full border-t-2 border-dashed border-white/10"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {STEPS.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative mb-8">
                  <div className="w-20 h-20 rounded-full bg-bg-surface border border-white/10 flex items-center justify-center text-white relative z-10 group-hover:border-accent-primary/50 transition-all duration-500">
                    <step.icon size={32} />
                    {index === 2 && (
                      <Sparkles className="absolute -top-1 -right-1 text-accent-cyan" size={20} />
                    )}
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-accent-primary text-white text-sm font-bold flex items-center justify-center border-4 border-bg-base">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-text-muted leading-relaxed max-w-xs">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Detailed Guides (replacing separate Docs page) */}
        <div className="grid lg:grid-cols-3 gap-8">
          {GUIDES.map((guide, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 group hover:bg-white/[0.02] transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-white/50 group-hover:text-accent-primary transition-colors">
                <guide.icon size={20} />
              </div>
              <h4 className="text-xl font-bold mb-4">{guide.title}</h4>
              <p className="text-text-muted text-sm leading-relaxed">{guide.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-24 p-10 glass-card max-w-md mx-auto text-center border-accent-cyan/20"
        >
          <div className="text-5xl font-bold gradient-text mb-2">
            &lt; 80ms
          </div>
          <div className="text-xs font-bold text-text-muted uppercase tracking-[0.3em]">
            Avg End-to-End Latency
          </div>
        </motion.div>
      </div>
    </section>
  );
}
