"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle2, Bot, X, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/lib/AuthContext";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";

const Particles = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: 0.1,
            x: `${(i * 3.33) % 100}%`,
            y: `${(i * 7.77) % 100}%`,
          }}
          animate={{
            y: [null, `${((i * 7.77) + 50) % 100}%`],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10 + (i % 10),
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-1 h-1 bg-accent-primary rounded-full"
        />
      ))}
    </div>
  );
};

export default function Hero() {
  const { user, setAuthMode } = useAuth();
  const [showVideo, setShowVideo] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] bg-accent-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <Particles />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            <motion.div
              variants={itemVariants}
              className="px-4 py-1.5 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-xs font-bold uppercase tracking-wider mb-6"
            >
              🚀 Version 2.4.1 — Stable Release
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold font-sans leading-[1.1] mb-6"
            >
              Ace Every Interview <br />
              <span className="gradient-text leading-[1.3]">With AI That Thinks</span> <br />
              Faster Than You.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-text-muted max-w-xl mb-10 leading-relaxed"
            >
              CopilotAI listens to your live interview, detects questions in real time, and whispers perfect answers directly to your screen — invisible to interviewers.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
              <Link
                href="/download"
                className="px-8 py-4 bg-accent-primary hover:bg-accent-primary/90 text-white rounded-2xl font-bold flex items-center gap-2 transition-all shadow-xl shadow-accent-primary/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                ⬇ Download Free
                <ArrowRight size={20} />
              </Link>
              <button
                onClick={() => setShowVideo(true)}
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-bold flex items-center gap-2 transition-all border border-white/10 hover:scale-[1.02]"
              >
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                  <Play size={12} fill="currentColor" />
                </div>
                Watch Demo
              </button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6 text-sm font-medium text-text-muted"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-accent-primary" />
                Invisible to screen share
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-accent-violet" />
                &lt; 80ms response
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-accent-cyan" />
                Multi-AI Powered (GPT-4o & Claude 3.5)
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Mockup Frame */}
            <div className="relative z-10 p-2 rounded-[32px] bg-gradient-to-br from-white/10 to-white/0 border border-white/10 shadow-2xl overflow-hidden">
              <div className="rounded-[24px] bg-bg-surface overflow-hidden border border-white/5 aspect-[16/10] relative">
                {/* Simulated Meeting UI */}
                <div className="absolute inset-0 bg-[#0A0A12]">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200"
                    alt="Interview Simulation"
                    fill
                    className="object-cover grayscale blur-sm opacity-40"
                  />

                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className={cn("w-10 h-10 rounded-full flex items-center justify-center", i === 3 ? "bg-red-500" : "bg-white/10")}>
                        <div className="w-4 h-4 bg-white/80 rounded-full opacity-50" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating AI Overlay */}
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                  className="absolute top-6 right-6 w-72 glass-card p-4 border-accent-cyan/30 shadow-2xl shadow-accent-cyan/10"
                >
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/5">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                      <span className="text-[10px] font-bold text-white/50 tracking-widest uppercase">Live Assistant</span>
                    </div>
                    <Bot size={14} className="text-accent-cyan" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-[10px] text-white/40 leading-tight">&quot;Tell me about a time you led a difficult project...&quot;</p>
                    <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                      <p className="text-[11px] font-mono text-accent-cyan leading-relaxed">
                        In my previous role at Acme Corp, I spearheaded a migration that...
                        <motion.span
                          animate={{ opacity: [1, 0] }}
                          transition={{ repeat: Infinity, duration: 0.8 }}
                          className="inline-block w-1 h-3 bg-accent-cyan ml-0.5 align-middle"
                        />
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Glow effect under mockup */}
            <div className="absolute -bottom-20 -left-20 -right-20 h-[300px] bg-accent-primary/10 blur-[100px] rounded-full -z-10" />
          </motion.div>
        </div>
      </div>

      {/* Video Modal Placeholder */}
      <AnimatePresence>
        {showVideo && (
          <Dialog.Root open={showVideo} onOpenChange={setShowVideo}>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[100]" />
              <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-4xl aspect-video glass-card overflow-hidden z-[101] p-0 border-white/10">
                <div className="w-full h-full bg-black flex items-center justify-center text-white/20 font-bold">
                  Demo Video Placeholder
                  <button
                    onClick={() => setShowVideo(false)}
                    className="absolute top-4 right-4 text-white/50 hover:text-white"
                  >
                    <X size={24} />
                  </button>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        )}
      </AnimatePresence>
    </section>
  );
}
