"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

const POSTS = [
  {
    id: 1,
    title: "How to Ace the System Design Interview",
    excerpt: "System design rounds are notoriously difficult. Here is our comprehensive guide to mastering the fundamentals and impressing your interviewers.",
    date: "April 18, 2026",
    category: "Interview Tips",
  },
  {
    id: 2,
    title: "The Rise of AI in the Hiring Process",
    excerpt: "Companies are increasingly using AI to screen candidates. Learn how to optimize your resume and interview strategy to beat the algorithms.",
    date: "April 10, 2026",
    category: "Industry Trends",
  },
  {
    id: 3,
    title: "Announcing CopilotAI 2.0",
    excerpt: "We're excited to unveil the biggest update to CopilotAI yet, featuring sub-second latency and an all-new Stealth Mode.",
    date: "March 25, 2026",
    category: "Product Updates",
  }
];

export default function BlogPage() {
  return (
    <main className="relative bg-[#08080C] min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-6 pt-40 pb-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              CopilotAI <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto">
              Insights, guides, and product updates to help you navigate the modern tech interview landscape.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {POSTS.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card flex flex-col p-8 border-white/5 hover:border-white/20 transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-accent-primary bg-accent-primary/10 px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-text-muted font-mono">
                    <Calendar size={12} />
                    {post.date}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-accent-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-text-muted mb-8 flex-1">
                  {post.excerpt}
                </p>
                <Link href="#" className="flex items-center gap-2 text-sm font-bold text-white group-hover:text-accent-primary transition-colors mt-auto">
                  Read Article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
