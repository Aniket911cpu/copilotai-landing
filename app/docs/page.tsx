"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Book, Code, Terminal, Shield, Cpu, Zap } from "lucide-react";

const DOC_SECTIONS = [
  {
    title: "Getting Started",
    icon: Book,
    content: "Download the CopilotAI desktop application for your operating system. Once installed, log in with your credentials to sync your resume and settings.",
  },
  {
    title: "How to Use During Interviews",
    icon: Zap,
    content: "Keep the application running in the background. It will automatically detect when a meeting starts on Zoom, Meet, or Teams. The overlay will appear subtly in the corner.",
  },
  {
    title: "Resume Syncing",
    icon: Cpu,
    content: "Upload your resume in PDF format. Our AI will parse your experience and use it to tailor every answer to your specific background.",
  },
  {
    title: "Coding Mode",
    icon: Code,
    content: "For technical interviews, use the 'Capture' shortcut to take a screenshot of the problem statement. The AI will provide the optimal solution in seconds.",
  },
  {
    title: "Security & Stealth",
    icon: Shield,
    content: "CopilotAI is designed to be undetectable. The overlay uses a specialized display mode that is ignored by all major screen-sharing and recording applications.",
  },
  {
    title: "API Integration",
    icon: Terminal,
    content: "Advanced users can connect their own LLM keys (OpenAI, Anthropic) for lower latency and custom fine-tuning.",
  },
];

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-bg-base">
      <Navbar />
      
      <div className="pt-32 pb-20 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-32 space-y-8">
              <div>
                <h3 className="text-white font-bold mb-4 px-2 uppercase text-xs tracking-widest">Documentation</h3>
                <nav className="flex flex-col gap-1">
                  {DOC_SECTIONS.map((section) => (
                    <a 
                      key={section.title}
                      href={`#${section.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="px-3 py-2 text-sm text-text-muted hover:text-white hover:bg-white/5 rounded-lg transition-all"
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </aside>

          {/* Content */}
          <div className="flex-1 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-16"
            >
              <h1 className="text-5xl font-bold mb-6">Documentation</h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Everything you need to know about setting up and using CopilotAI to win your next interview.
              </p>
            </motion.div>

            <div className="space-y-20">
              {DOC_SECTIONS.map((section, i) => (
                <section 
                  key={i} 
                  id={section.title.toLowerCase().replace(/\s+/g, '-')}
                  className="scroll-mt-32"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center text-accent-primary">
                      <section.icon size={20} />
                    </div>
                    <h2 className="text-3xl font-bold">{section.title}</h2>
                  </div>
                  <div className="glass-card p-8 text-text-muted leading-relaxed text-lg">
                    {section.content}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
