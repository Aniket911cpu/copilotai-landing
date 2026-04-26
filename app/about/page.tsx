"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Target, Shield, Zap } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="relative bg-[#08080C] min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-6 pt-40 pb-24 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              About <span className="gradient-text">CopilotAI</span>
            </h1>
            <p className="text-xl text-text-muted leading-relaxed">
              We are on a mission to level the playing field in technical interviews. 
              By harnessing the power of real-time AI, we give candidates the confidence 
              and edge they need to succeed in high-pressure environments.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="glass-card p-10 border-white/5">
              <div className="w-12 h-12 rounded-xl bg-accent-primary/10 text-accent-primary flex items-center justify-center mb-6">
                <Target size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-text-muted leading-relaxed">
                To empower professionals with intelligent, real-time tools that enhance their performance when it matters most. We believe technology should work alongside you as a silent partner.
              </p>
            </div>
            <div className="glass-card p-10 border-white/5">
              <div className="w-12 h-12 rounded-xl bg-accent-violet/10 text-accent-violet flex items-center justify-center mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Team</h3>
              <p className="text-text-muted leading-relaxed">
                Built by a team of ex-FAANG engineers and AI researchers who intimately understand the broken tech interview process and decided to build the ultimate solution.
              </p>
            </div>
          </div>

          <div className="glass-card p-12 text-center border-white/5">
            <h2 className="text-3xl font-bold mb-6">Join the Revolution</h2>
            <p className="text-text-muted mb-8 max-w-2xl mx-auto">
              Ready to ace your next interview? Download CopilotAI today and experience the unfair advantage.
            </p>
            <a href="/download" className="inline-block px-8 py-4 bg-accent-primary text-white font-bold rounded-xl shadow-lg shadow-accent-primary/20 hover:bg-accent-primary/90 transition-all">
              Get Started for Free
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
