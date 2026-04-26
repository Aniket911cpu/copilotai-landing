"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  GitCommit, 
  Rocket, 
  Bug, 
  Zap, 
  ShieldCheck,
  Calendar,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const LOGS = [
  {
    version: "v2.4.1",
    date: "April 20, 2026",
    type: "Major",
    title: "The Performance Update",
    items: [
      { type: "feat", text: "New local audio processing engine reducing latency by 40%." },
      { type: "feat", text: "Added support for 'Deep Dive' mode in technical rounds." },
      { type: "fix", text: "Resolved overlay flicking issues on high-refresh-rate monitors." },
      { type: "security", text: "Enhanced kernel-level protection for Stealth Mode." }
    ]
  },
  {
    version: "v2.3.0",
    date: "March 15, 2026",
    type: "Minor",
    title: "Company Tuning & More",
    items: [
      { type: "feat", text: "Direct PDF resume parsing and embedding for better answer tailoring." },
      { type: "feat", text: "Support for multi-monitor setups added." },
      { type: "feat", text: "Beta support for Google Meet added." },
      { type: "fix", text: "Fixed memory leak in long sessions." }
    ]
  },
  {
    version: "v2.2.5",
    date: "February 28, 2026",
    type: "Patch",
    title: "UI Polish",
    items: [
      { type: "feat", text: "New dark mode theme for the settings dashboard." },
      { type: "fix", text: "Improved transcription accuracy for non-native accents." }
    ]
  }
];

export default function ChangelogPage() {
  return (
    <main className="relative bg-[#08080C] min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-6 pt-40 pb-24 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/50 text-xs font-bold uppercase tracking-widest mb-8"
            >
              <GitCommit size={14} className="text-accent-primary" />
              Product Updates
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Changelog
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-text-muted"
            >
              Keep up with the latest improvements and new features in CopilotAI.
            </motion.p>
          </div>

          <div className="space-y-12">
            {LOGS.map((log, i) => (
              <motion.div
                key={log.version}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-12 pb-12 border-l border-white/10 last:border-0"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-accent-primary shadow-[0_0_15px_rgba(var(--accent-primary-rgb),0.5)] border-4 border-[#08080C]" />
                
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                  <div className="text-sm font-mono font-bold text-accent-primary px-3 py-1 rounded bg-accent-primary/10 border border-accent-primary/20">
                    {log.version}
                  </div>
                  <div className="flex items-center gap-2 text-text-muted text-sm">
                    <Calendar size={14} />
                    {log.date}
                  </div>
                  <div className="hidden md:block w-1 h-1 rounded-full bg-white/20" />
                  <div className="text-lg font-bold text-white">
                    {log.title}
                  </div>
                </div>

                <div className="glass-card p-8 border-white/5">
                  <div className="grid gap-6">
                    {log.items.map((item, idx) => (
                      <div key={idx} className="flex gap-4">
                        <Badge type={item.type} />
                        <p className="text-text-muted leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 p-12 text-center glass-card border-accent-primary/20 bg-accent-primary/5"
          >
            <h3 className="text-2xl font-bold mb-4">Stay in the loop</h3>
            <p className="text-text-muted mb-8">Get notified about new releases and feature drops.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="email@example.com"
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-accent-primary transition-colors text-white"
              />
              <button className="bg-accent-primary text-white font-bold px-8 py-4 rounded-xl hover:bg-accent-primary/90 transition-all shadow-lg shadow-accent-primary/20 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

function Badge({ type }: { type: string }) {
  const styles: any = {
    feat: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    fix: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    security: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    patch: "bg-gray-500/10 text-gray-400 border-gray-500/20"
  };

  const labels: any = {
    feat: "Feature",
    fix: "Fix",
    security: "Security",
    patch: "Patch"
  };

  return (
    <div className={cn("text-[10px] font-bold uppercase tracking-widest h-fit px-2 py-0.5 rounded border shrink-0 mt-1", styles[type] || styles.patch)}>
      {labels[type] || "Update"}
    </div>
  );
}
