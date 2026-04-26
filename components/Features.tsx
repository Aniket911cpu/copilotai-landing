"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Ghost,
  Zap,
  FileText,
  Code2,
  Target,
  BarChart3,
  Shield,
  Globe,
  Cpu
} from "lucide-react";

const DETAILED_FEATURES = [
  {
    icon: Ghost,
    title: "Invisible Overlay Technology",
    description: "Our proprietary screen-projection bypass technology ensures the assistant remains completely invisible to all screen-sharing software including Zoom, Microsoft Teams, Google Meet, and even low-level capture tools like HackerRank or ProctorU.",
    category: "Security",
    color: "bg-accent-primary/15 text-accent-primary",
  },
  {
    icon: Zap,
    title: "Sub-Second Latency Pipeline",
    description: "Experience true real-time assistance. From the moment an interviewer finishes their sentence to the moment the first token appears on your screen is consistently under 80ms.",
    category: "Performance",
    color: "bg-accent-violet/15 text-accent-violet",
  },
  {
    icon: FileText,
    title: "Deep Resume Integration",
    description: "Upload your PDF or Word resume. Our AI builds a vector embedding of your entire professional history, ensuring every answer references your actual projects, metrics, and experiences.",
    category: "Personalization",
    color: "bg-accent-cyan/15 text-accent-cyan",
  },
  {
    icon: Code2,
    title: "Intelligent Coding Helper",
    description: "Stuck on a LeetCode Hard? Simply highlight or screenshot the problem. CopilotAI analyzes the constraints and provides the optimal Big-O solution with clear explanations.",
    category: "Technical",
    color: "bg-accent-green/15 text-accent-green",
  },
  {
    icon: Target,
    title: "Behavioral Frameworks",
    description: "Every behavioral response is automatically structured using industry-standard frameworks like STAR (Situation, Task, Action, Result) or CAR (Context, Action, Result).",
    category: "Strategy",
    color: "bg-accent-rose/15 text-accent-rose",
  },
  {
    icon: BarChart3,
    title: "Post-Interview Analytics",
    description: "Receive a detailed report after every session. Review your transcript, see where you hesitated, and get a list of keyword gaps relative to the Job Description.",
    category: "Growth",
    color: "bg-amber-500/15 text-amber-500",
  },
  {
    icon: Shield,
    title: "Privacy First Architecture",
    description: "Your audio is processed in volatile memory and never saved to our servers. Transcripts are end-to-end encrypted and can be deleted instantly after the session.",
    category: "Security",
    color: "bg-emerald-500/15 text-emerald-500",
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "Conduct interviews in 40+ languages. CopilotAI detects the language of the interviewer automatically and responds in kind, or provides translations in real-time.",
    category: "Global",
    color: "bg-blue-500/15 text-blue-500",
  },
  {
    icon: Cpu,
    title: "Local Processing Mode",
    description: "For extreme security, run the entire AI pipeline locally on your machine. No data ever leaves your network. Available for Elite members with NVIDIA GPUs.",
    category: "Security",
    color: "bg-purple-500/15 text-purple-500",
  },
];

export default function Features() {
  return (
    <section className="py-24 relative" id="features">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 gradient-text"
          >
            Everything You Need to Win
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-muted"
          >
            A powerful suite of tools designed to handle every stage of the technical and behavioral interview process.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DETAILED_FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8, borderColor: "rgba(99, 102, 241, 0.4)" }}
              className="glass-card p-8 group transition-all duration-500 border-white/5"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-500 ${feature.color}`}>
                <feature.icon size={24} />
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-2">{feature.category}</div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-text-muted leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
