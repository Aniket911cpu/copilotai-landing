"use client";

import React from "react";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/lib/blogData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, User, Share2, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="relative bg-[#050508] min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-6 pt-40 pb-24 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-text-muted hover:text-white transition-colors mb-12 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Journal
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[10px] font-bold uppercase tracking-widest text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/20 px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-text-muted mb-10 leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between border-y border-white/10 py-6">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-sm text-white font-medium">
                  <div className="w-8 h-8 rounded-full bg-accent-primary/20 flex items-center justify-center text-accent-primary">
                    <User size={16} />
                  </div>
                  {post.author}
                </div>
                <div className="hidden sm:flex items-center gap-2 text-sm text-text-muted font-mono">
                  <Calendar size={14} />
                  {post.date}
                </div>
                <div className="hidden sm:flex items-center gap-2 text-sm text-text-muted font-mono">
                  <Clock size={14} />
                  {post.readTime}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-text-muted hidden sm:inline">Share:</span>
                <button className="text-text-muted hover:text-[#1DA1F2] transition-colors"><Twitter size={18} /></button>
                <button className="text-text-muted hover:text-[#0A66C2] transition-colors"><Linkedin size={18} /></button>
                <button className="text-text-muted hover:text-white transition-colors"><Share2 size={18} /></button>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-a:text-accent-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-2xl prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10"
          >
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </motion.div>

          {/* Footer CTA */}
          <div className="mt-24 p-12 glass-card border-accent-primary/20 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/10 via-transparent to-accent-violet/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <h3 className="text-3xl font-bold mb-4 relative z-10">Don't just read about it. Ace it.</h3>
            <p className="text-text-muted mb-8 max-w-lg mx-auto relative z-10">
              Join thousands of engineers who use CopilotAI to dominate their technical interviews.
            </p>
            <Link href="/download" className="relative z-10 inline-block px-10 py-4 bg-accent-primary text-white font-bold rounded-xl hover:bg-accent-primary/90 transition-all shadow-lg shadow-accent-primary/20">
              Download CopilotAI
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
