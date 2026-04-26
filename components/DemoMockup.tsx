"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, GripVertical } from "lucide-react";
import { cn } from "@/lib/utils";

const QUESTIONS = [
  "Tell me about yourself",
  "What is your greatest weakness?",
  "Design a URL shortener",
  "Why do you want to work here?",
];

export default function DemoMockup() {
  const [questionIndex, setQuestionIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuestionIndex((prev) => (prev + 1) % QUESTIONS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-[#08080C] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-accent-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Side: Mockup */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-3xl border border-white/10 bg-[#0A0A12] overflow-hidden shadow-2xl"
            >
              {/* Meeting Background */}
              <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center grayscale blur-md" />
              
              {/* Product Overlay */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute top-10 right-10 w-[380px] glass-card shadow-2xl border-white/20 p-0 overflow-hidden"
              >
                <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/5">
                  <div className="flex items-center gap-2">
                    <GripVertical size={14} className="text-white/30" />
                    <span className="text-[10px] font-mono text-white/50">GPT-4.1</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-rose animate-pulse" />
                    <span className="text-[10px] font-bold tracking-widest text-white/80 uppercase">LIVE</span>
                  </div>
                </div>

                <div className="p-5 bg-black/40">
                  <p className="text-xs font-mono text-accent-cyan leading-relaxed mb-4">
                    In my previous role at XYZ Corp, I led a migration from monolith to microservices, reducing deploy time by 60% and increasing system reliability to 99.9%...
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ repeat: Infinity, duration: 0.8 }}
                      className="inline-block w-1.5 h-4 bg-accent-cyan ml-1 align-middle"
                    />
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: "100%" }}
                      animate={{ width: "0%" }}
                      transition={{ duration: 15, ease: "linear", repeat: Infinity }}
                      className="h-full bg-accent-cyan/50"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Realistic Glow Effect */}
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(99,102,241,0.1)]" />
            </motion.div>

            {/* Floating Callouts */}
            <div className="hidden lg:block absolute -left-10 top-1/4">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="px-4 py-2 rounded-full bg-accent-primary/20 border border-accent-primary/30 text-white text-xs font-semibold backdrop-blur-md"
              >
                Invisible to screen share
              </motion.div>
            </div>
            <div className="hidden lg:block absolute -left-16 bottom-1/3">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 }}
                className="px-4 py-2 rounded-full bg-accent-violet/20 border border-accent-violet/30 text-white text-xs font-semibold backdrop-blur-md"
              >
                Streams word by word
              </motion.div>
            </div>
            <div className="hidden lg:block absolute -right-4 bottom-10 translate-x-full">
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.4 }}
                className="px-4 py-2 rounded-full bg-accent-cyan/20 border border-accent-cyan/30 text-white text-xs font-semibold backdrop-blur-md"
              >
                Based on your resume
              </motion.div>
            </div>
          </div>

          {/* Right Side: Text */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold leading-tight">
              A Personal Assistant That <br />
              <span className="gradient-text">Adapts to You.</span>
            </h2>
            <p className="text-lg text-text-muted leading-relaxed">
              Experience the future of interviewing. CopilotAI doesn&apos;t just give answers — it provides context, references your real experience, and helps you stay calm under pressure.
            </p>

            <div className="space-y-4">
              <p className="text-sm font-medium text-text-muted uppercase tracking-[0.2em]">Try it:</p>
              <div className="h-12 flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={questionIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-2xl font-bold text-white/80"
                  >
                    &quot;{QUESTIONS[questionIndex]}&quot;
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
