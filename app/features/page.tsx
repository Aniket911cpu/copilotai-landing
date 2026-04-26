"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Zap, 
  Shield, 
  Brain, 
  Mic2, 
  Layers, 
  Lock, 
  Sparkles,
  BarChart3,
  Globe,
  Cpu,
  Monitor
} from "lucide-react";
import { cn } from "@/lib/utils";

const FEATURES = [
  {
    title: "Real-time AI Audio Analysis",
    description: "Our proprietary low-latency engine listens to your meeting in real-time, providing instant context-aware suggestions.",
    icon: Mic2,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
  {
    title: "Stealth Overlay Technology",
    description: "Seamlessly integrates with Zoom, Google Meet, and Teams. The overlay is completely invisible to screen sharing.",
    icon: Monitor,
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
  },
  {
    title: "Advanced STAR Method Logic",
    description: "The AI automatically formats answers using Situation, Task, Action, and Result for maximum impact.",
    icon: Sparkles,
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
  },
  {
    title: "Local Privacy Guard",
    description: "Your audio is processed locally when possible. We never store raw meeting audio on our servers.",
    icon: Lock,
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
  },
  {
    title: "Company-Specific Tuning",
    description: "Upload a job description and the AI will tailor its advice to that specific company's values and culture.",
    icon: Brain,
    color: "text-rose-400",
    bgColor: "bg-rose-400/10",
  },
  {
    title: "Interactive Coding Helper",
    description: "Stuck on a technical round? Get hints and logic breakdowns for complex algorithms instantly.",
    icon: Cpu,
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
  }
];

export default function FeaturesPage() {
  return (
    <main className="relative bg-[#08080C] min-h-screen">
      <Navbar />
      
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent-violet/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 pt-40 pb-24 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/50 text-xs font-bold uppercase tracking-widest mb-8"
          >
            <Zap size={14} className="text-accent-primary" />
            Cutting-Edge Capability
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            Powerful Features for <br />
            <span className="gradient-text">Unfair Advantage.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-muted"
          >
            We&apos;ve built the ultimate tool for modern software engineers. 
            Privacy-first, lightning-fast, and incredibly accurate.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 hover:border-white/20 transition-all group"
            >
              <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform", feature.bgColor, feature.color)}>
                <feature.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
              <p className="text-text-muted leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Deep Dive Section */}
        <div className="mt-40">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                The Stealth <span className="text-accent-primary">Overlay</span>
              </h2>
              <p className="text-lg text-text-muted mb-10 leading-relaxed">
                Our core technology ensures your assistant stays private. Using advanced OS-level 
                rendering, the CopilotAI overlay sits on top of your windows but is never captured 
                by video conferencing software.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                    <Shield size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Undetectable</h4>
                    <p className="text-sm text-text-muted">Zero trace in Zoom, Meet, Teams, or Slack screen shares.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                    <Layers size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Customizable UI</h4>
                    <p className="text-sm text-text-muted">Adjust transparency, font size, and position on the fly.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square glass-card p-4 border-white/5"
            >
              <div className="absolute inset-0 bg-accent-primary/20 blur-[100px] rounded-full" />
              <div className="relative h-full w-full bg-bg-surface rounded-2xl border border-white/10 flex items-center justify-center">
                 {/* This would be an illustration or image */}
                 <div className="flex flex-col items-center gap-4 text-center p-12">
                   <Monitor size={80} className="text-accent-primary mb-4" />
                   <div className="p-4 bg-white/5 rounded-xl border border-white/10 w-full animate-pulse">
                     <div className="h-2 w-3/4 bg-white/20 rounded mb-2" />
                     <div className="h-2 w-1/2 bg-white/10 rounded" />
                   </div>
                   <p className="text-xs text-text-muted">Overlay visualization active</p>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
