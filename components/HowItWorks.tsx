"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mic, Zap, MessageSquare, Sparkles } from "lucide-react";

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
    body: "GPT-4.1 streams a personalized answer to the floating overlay in under 800ms.",
    color: "accent-cyan",
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
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            From Question to Answer in Under a Second
          </motion.h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
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
                  <div className="w-20 h-20 rounded-full bg-bg-surface border border-white/10 flex items-center justify-center text-white relative z-10 group-hover:border-accent-primary/50 transition-colors duration-500">
                    <step.icon size={32} />
                    {index === 2 && (
                      <Sparkles className="absolute -top-1 -right-1 text-accent-cyan" size={20} />
                    )}
                  </div>
                  {/* Step Number Badge */}
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-accent-primary text-white text-sm font-bold flex items-center justify-center border-4 border-bg-base">
                    {index + 1}
                  </div>
                  {/* Animated Ring for Step 1 */}
                  {index === 0 && (
                    <div className="absolute inset-0 rounded-full border border-accent-primary/50 animate-ping opacity-20" />
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-text-muted leading-relaxed max-w-xs">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-24 p-8 glass-card max-w-md mx-auto text-center"
        >
          <div className="text-4xl font-bold gradient-text mb-2">
            &lt; 800ms
          </div>
          <div className="text-sm font-medium text-text-muted uppercase tracking-widest">
            Average end-to-end response time
          </div>
        </motion.div>
      </div>
    </section>
  );
}
