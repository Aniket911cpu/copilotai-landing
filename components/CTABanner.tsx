"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Monitor, Apple, Terminal } from "lucide-react";
import Link from "next/link";
import { useOS } from "@/lib/useOS";
import { cn } from "@/lib/utils";

export default function CTABanner() {
  const currentOS = useOS();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Radial Gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-accent-primary/10 via-bg-base to-bg-base" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-12 md:p-20 text-center border-white/10"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Your Next Interview <br />
            <span className="gradient-text">Starts Now.</span>
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto mb-12">
            Download free. Set up in 5 minutes. Win the offer. Join 12,000+ candidates who have already leveled up their interview game.
          </p>

          <div className="flex flex-col items-center gap-8">
            <Link 
              href="/download"
              className="px-10 py-5 bg-accent-primary hover:bg-accent-primary/90 text-white rounded-2xl font-bold text-lg flex items-center gap-3 transition-all shadow-2xl shadow-accent-primary/40 hover:scale-105 active:scale-95"
            >
              ⬇ Download CopilotAI Free
              <ArrowRight size={24} />
            </Link>

            <div className="flex flex-wrap justify-center gap-6">
              <div className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-500",
                currentOS === "windows" ? "bg-accent-primary/20 border-accent-primary/50 text-white shadow-lg shadow-accent-primary/10 scale-110" : "bg-white/5 border-white/5 text-text-muted"
              )}>
                <Monitor size={16} />
                <span className="text-xs font-bold uppercase tracking-wider">Windows</span>
              </div>
              <div className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-500",
                currentOS === "macos" ? "bg-accent-primary/20 border-accent-primary/50 text-white shadow-lg shadow-accent-primary/10 scale-110" : "bg-white/5 border-white/5 text-text-muted"
              )}>
                <Apple size={16} />
                <span className="text-xs font-bold uppercase tracking-wider">macOS</span>
              </div>
              <div className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-500",
                currentOS === "linux" ? "bg-accent-primary/20 border-accent-primary/50 text-white shadow-lg shadow-accent-primary/10 scale-110" : "bg-white/5 border-white/5 text-text-muted"
              )}>
                <Terminal size={16} />
                <span className="text-xs font-bold uppercase tracking-wider">Linux</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
