"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { 
  Ghost, 
  Zap, 
  FileText, 
  Code2, 
  Target, 
  BarChart3,
  Shield,
  Search,
  Cpu,
  Layers,
  Globe,
  Settings
} from "lucide-react";

const DETAILED_FEATURES = [
  {
    icon: Ghost,
    title: "Invisible Overlay Technology",
    description: "Our proprietary screen-projection bypass technology ensures the assistant remains completely invisible to all screen-sharing software including Zoom, Microsoft Teams, Google Meet, and even low-level capture tools like HackerRank or ProctorU.",
    category: "Security",
  },
  {
    icon: Zap,
    title: "Sub-Second Latency Pipeline",
    description: "Experience true real-time assistance. From the moment an interviewer finishes their sentence to the moment the first token appears on your screen is consistently under 800ms.",
    category: "Performance",
  },
  {
    icon: FileText,
    title: "Deep Resume Integration",
    description: "Upload your PDF or Word resume. Our AI builds a vector embedding of your entire professional history, ensuring every answer references your actual projects, metrics, and experiences.",
    category: "Personalization",
  },
  {
    icon: Code2,
    title: "Intelligent Coding Helper",
    description: "Stuck on a LeetCode Hard? Simply highlight or screenshot the problem. CopilotAI analyzes the constraints and provides the optimal Big-O solution with clear explanations.",
    category: "Technical",
  },
  {
    icon: Target,
    title: "Behavioral Frameworks",
    description: "Every behavioral response is automatically structured using industry-standard frameworks like STAR (Situation, Task, Action, Result) or CAR (Context, Action, Result).",
    category: "Strategy",
  },
  {
    icon: BarChart3,
    title: "Post-Interview Analytics",
    description: "Receive a detailed report after every session. Review your transcript, see where you hesitated, and get a list of keyword gaps relative to the Job Description.",
    category: "Growth",
  },
  {
    icon: Shield,
    title: "Privacy First Architecture",
    description: "Your audio is processed in volatile memory and never saved to our servers. Transcripts are end-to-end encrypted and can be deleted instantly after the session.",
    category: "Security",
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "Conduct interviews in 40+ languages. CopilotAI detects the language of the interviewer automatically and responds in kind, or provides translations in real-time.",
    category: "Global",
  },
  {
    icon: Cpu,
    title: "Local Processing Mode",
    description: "For extreme security, run the entire AI pipeline locally on your machine. No data ever leaves your network. Available for Elite members with NVIDIA GPUs.",
    category: "Security",
  },
];

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-bg-base">
      <Navbar />
      
      <div className="pt-32 pb-20 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            Advanced Capabilities
          </h1>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Explore the cutting-edge technology that makes CopilotAI the most powerful interview assistant ever built.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DETAILED_FEATURES.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 group hover:border-accent-primary/40 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center text-accent-primary mb-6 group-hover:scale-110 transition-transform">
                <feature.icon size={24} />
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-accent-violet mb-2">{feature.category}</div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-text-muted leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
