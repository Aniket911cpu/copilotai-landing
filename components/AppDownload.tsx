"use client";

import React from "react";
import { motion } from "framer-motion";
import { Monitor, Apple, Layout, Download, ArrowRight, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { useOS } from "@/lib/useOS";
import Link from "next/link";

export default function AppDownload() {
  const currentOS = useOS();

  return (
    <section className="py-24 relative overflow-hidden" id="download">
      <div className="container mx-auto px-6">
        <div className="glass-card p-12 md:p-20 relative overflow-hidden border-white/10">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-violet/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-violet/10 border border-accent-violet/20 text-accent-violet text-xs font-bold uppercase tracking-widest mb-8">
                <Monitor size={14} />
                Desktop Companion
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                One App. <br />
                <span className="gradient-text">Complete Stealth.</span>
              </h2>
              <p className="text-lg text-text-muted mb-10 leading-relaxed">
                Download the CopilotAI desktop application to enable real-time audio capture, invisible overlays, and sub-80ms latency. Sync your account once and win every interview.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  href="/download"
                  className={cn(
                    "flex items-center gap-3 px-8 py-4 rounded-2xl font-bold transition-all group",
                    currentOS === "macos" ? "bg-white text-black scale-105 shadow-xl shadow-white/10" : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                  )}
                >
                  <Apple size={24} />
                  <div>
                    <div className={cn("text-[10px] uppercase leading-none mb-1", currentOS === "macos" ? "text-black/50" : "text-white/50")}>Download for</div>
                    <div className="text-base leading-none">macOS</div>
                  </div>
                </Link>
                <Link
                  href="/download"
                  className={cn(
                    "flex items-center gap-3 px-8 py-4 rounded-2xl font-bold transition-all group",
                    currentOS === "windows" ? "bg-white text-black scale-105 shadow-xl shadow-white/10" : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                  )}
                >
                  <Layout size={24} className={currentOS === "windows" ? "text-accent-primary" : "text-accent-cyan"} />
                  <div>
                    <div className={cn("text-[10px] uppercase leading-none mb-1", currentOS === "windows" ? "text-black/50" : "text-white/50")}>Download for</div>
                    <div className="text-base leading-none">Windows</div>
                  </div>
                </Link>
              </div>

              <Link href="/download" className="inline-flex items-center gap-2 text-sm font-bold text-accent-primary hover:underline group">
                View all platforms & requirements
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <div className="mt-12 flex items-center gap-6">
                <div className="flex items-center gap-2 text-sm text-text-muted">
                  <ShieldCheck size={18} className="text-accent-green" />
                  Code-signed & Secure
                </div>
                <div className="flex items-center gap-2 text-sm text-text-muted">
                  <Download size={18} className="text-accent-violet" />
                  84k+ Downloads
                </div>
              </div>
            </div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                className="relative aspect-square rounded-3xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 p-8 shadow-2xl"
              >
                <div className="w-full h-full rounded-2xl bg-bg-base border border-white/5 p-6 relative overflow-hidden">
                  {/* Mock UI */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-accent-rose" />
                      <div className="w-3 h-3 rounded-full bg-amber-500" />
                      <div className="w-3 h-3 rounded-full bg-accent-green" />
                    </div>
                    <div className="text-[10px] font-mono text-white/30 tracking-widest uppercase">CopilotAI v2.4.1</div>
                  </div>

                  <div className="space-y-6">
                    <div className="h-4 w-3/4 bg-white/5 rounded-full" />
                    <div className="h-4 w-1/2 bg-white/5 rounded-full" />
                    <div className="p-4 rounded-xl bg-accent-primary/10 border border-accent-primary/20">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
                        <span className="text-xs font-bold text-accent-primary uppercase tracking-widest">Streaming Answer</span>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 w-full bg-accent-primary/20 rounded-full" />
                        <div className="h-2 w-full bg-accent-primary/20 rounded-full" />
                        <div className="h-2 w-3/4 bg-accent-primary/20 rounded-full" />
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                      <span className="text-xs text-text-muted">Audio Input: {currentOS === "macos" ? "MacBook Pro Mic" : "System Audio"}</span>
                      <div className="flex gap-1">
                        {[...Array(8)].map((_, i) => (
                          <div key={i} className="w-1 h-3 bg-accent-cyan/40 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.1}s` }} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
