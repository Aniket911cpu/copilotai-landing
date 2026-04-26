"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle2, Bot } from "lucide-react";

const Particles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: 0.1,
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
          }}
          animate={{
            y: [null, Math.random() * 100 + "%"],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
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
              🚀 Now in Public Beta
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
              <button className="px-8 py-4 bg-accent-primary hover:bg-accent-primary/90 text-white rounded-2xl font-bold flex items-center gap-2 transition-all shadow-xl shadow-accent-primary/30 hover:scale-[1.02] active:scale-[0.98]">
                ⬇ Download Free
                <ArrowRight size={20} />
              </button>
              <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-bold flex items-center gap-2 transition-all border border-white/10 hover:scale-[1.02]">
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
                &lt; 800ms response
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-accent-cyan" />
                GPT-4.1 powered
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
                  <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center grayscale blur-sm" />
                  
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
                    <p className="text-[10px] text-white/40 leading-tight">"Tell me about a time you led a difficult project..."</p>
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
    </section>
  );
}
