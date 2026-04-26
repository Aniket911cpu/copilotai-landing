"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Calendar, Clock, Sparkles } from "lucide-react";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blogData";

export default function BlogPage() {
  return (
    <main className="relative bg-[#050508] min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-6 pt-40 pb-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/50 text-xs font-bold uppercase tracking-widest mb-8">
              <Sparkles size={14} className="text-accent-violet" />
              Insights & Trends
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              CopilotAI <span className="gradient-text">Journal</span>
            </h1>
            <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto">
              Master the modern technical interview. Deep dives into algorithmic trends, AI hiring shifts, and stealth technology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1 }}
                className="glass-card flex flex-col p-8 hover:border-accent-primary/30 transition-all duration-500 group cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 pointer-events-none" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-accent-primary bg-accent-primary/10 border border-accent-primary/20 px-3 py-1 rounded-full shadow-[0_0_15px_rgba(79,70,229,0.2)]">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-accent-cyan transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-text-muted mb-8 flex-1 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between border-t border-white/10 pt-6 mt-auto">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-xs text-text-muted font-mono">
                        <Calendar size={12} />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-text-muted font-mono">
                        <Clock size={12} />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <Link href={`/blog/${post.slug}`} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-accent-primary group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all">
                       <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
