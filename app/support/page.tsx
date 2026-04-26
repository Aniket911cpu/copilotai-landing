"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  HelpCircle, 
  Mail, 
  MessageSquare, 
  BookOpen, 
  ChevronDown,
  ExternalLink,
  LifeBuoy,
  Search
} from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    question: "Is CopilotAI really undetectable in meetings?",
    answer: "Yes. CopilotAI uses kernel-level rendering techniques that ensure its overlay is never captured by the screen-sharing modules of common meeting apps like Zoom, Teams, and Google Meet."
  },
  {
    question: "Which meeting applications are supported?",
    answer: "We currently support Zoom, Microsoft Teams, Slack, and Google Meet (web and desktop) on both Windows and macOS."
  },
  {
    question: "How does it handle complex technical interviews?",
    answer: "Beyond simple text suggestions, CopilotAI has a dedicated 'Coding Helper' that can analyze technical problems on your screen and provide logic breakdowns and algorithm hints."
  },
  {
    question: "Is my meeting data private?",
    answer: "Absolutely. We process as much audio as possible locally on your machine. We never store meeting recordings or sensitive transcripts on our servers."
  },
  {
    question: "Do I need a separate subscription for each device?",
    answer: "No, one subscription covers all your desktop devices. However, you can only be active on one meeting at a time."
  }
];

export default function SupportPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="relative bg-[#08080C] min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-6 pt-40 pb-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/50 text-xs font-bold uppercase tracking-widest mb-8"
            >
              <LifeBuoy size={14} className="text-accent-primary" />
              Help Center
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold mb-8"
            >
              How can we <span className="gradient-text">help you?</span>
            </motion.h1>
            
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
              <input 
                type="text" 
                placeholder="Search for answers..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-16 pr-6 py-5 focus:outline-none focus:border-accent-primary transition-all text-white text-lg"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            <SupportCard 
              icon={BookOpen} 
              title="Documentation" 
              description="Learn how to get the most out of CopilotAI with our guides."
              href="#"
            />
            <SupportCard 
              icon={MessageSquare} 
              title="Community" 
              description="Join our Discord and share tips with other users."
              href="#"
            />
            <SupportCard 
              icon={Mail} 
              title="Email Support" 
              description="Our team typically responds within 24 hours."
              href="mailto:support@copilotai.com"
            />
          </div>

          {/* FAQs */}
          <div id="faq" className="space-y-4 pt-12">
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
              <HelpCircle className="text-accent-primary" size={32} />
              Frequently Asked Questions
            </h2>
            
            <div className="grid gap-4">
              {FAQS.map((faq, i) => (
                <div 
                  key={i}
                  className={cn(
                    "glass-card overflow-hidden transition-all duration-300",
                    openIndex === i ? "border-white/20 bg-white/5" : "border-white/5 hover:border-white/10"
                  )}
                >
                  <button 
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left"
                  >
                    <span className="text-xl font-bold text-white">{faq.question}</span>
                    <ChevronDown 
                      className={cn("text-text-muted transition-transform duration-300", openIndex === i && "rotate-180")} 
                      size={24} 
                    />
                  </button>
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-8 pb-8 pt-2 text-text-muted leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Feedback & Contact Forms */}
          <div className="mt-32 pt-12 border-t border-white/5">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
                <p className="text-text-muted leading-relaxed mb-8">
                  Whether you found a bug, have a feature request, or just want to tell us how CopilotAI helped you land your dream job — we want to hear from you.
                </p>
                <div className="space-y-6">
                  <div id="bug-report" className="glass-card p-6 border-white/5 hover:border-red-500/30 hover:bg-red-500/5 transition-all group">
                    <h4 className="font-bold text-white mb-2 group-hover:text-red-400 transition-colors">🐞 Report a Bug</h4>
                    <p className="text-sm text-text-muted">Found an issue? Let us know so we can squash it immediately.</p>
                  </div>
                  <div id="testimonial" className="glass-card p-6 border-white/5 hover:border-amber-500/30 hover:bg-amber-500/5 transition-all group">
                    <h4 className="font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">⭐ Submit Testimonial</h4>
                    <p className="text-sm text-text-muted">Did CopilotAI help you get an offer? Share your success story.</p>
                  </div>
                  <div id="feedback" className="glass-card p-6 border-white/5 hover:border-accent-primary/30 hover:bg-accent-primary/5 transition-all group">
                    <h4 className="font-bold text-white mb-2 group-hover:text-accent-primary transition-colors">💡 General Feedback</h4>
                    <p className="text-sm text-text-muted">Have ideas on how we can improve? We are all ears.</p>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-8 border-white/10 relative">
                <form className="space-y-6 relative z-10" onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully!'); }}>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-white">Name</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-primary transition-all text-white" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-white">Email</label>
                      <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-primary transition-all text-white" placeholder="john@example.com" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white">Topic</label>
                    <select className="w-full bg-[#08080C] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-primary transition-all text-white appearance-none">
                      <option value="bug">Report a Bug</option>
                      <option value="testimonial">Submit Testimonial</option>
                      <option value="feedback">General Feedback</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white">Message</label>
                    <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-primary transition-all text-white resize-none" placeholder="How can we help?" required></textarea>
                  </div>
                  <button type="submit" className="w-full bg-accent-primary text-white font-bold py-4 rounded-xl hover:bg-accent-primary/90 transition-all shadow-lg shadow-accent-primary/20">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Still Need Help */}
          <div className="mt-20 p-12 glass-card border-white/5 text-center">
            <h3 className="text-3xl font-bold mb-4">Still need help?</h3>
            <p className="text-text-muted mb-10 max-w-lg mx-auto">
              If you can&apos;t find what you&apos;re looking for, our human support team is ready to assist you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="px-10 py-4 bg-accent-primary text-white font-bold rounded-xl hover:bg-accent-primary/90 transition-all shadow-lg shadow-accent-primary/20">
                Contact Support
              </button>
              <button className="px-10 py-4 bg-white/5 text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                Join our Discord
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

function SupportCard({ icon: Icon, title, description, href }: { icon: any, title: string, description: string, href: string }) {
  return (
    <a 
      href={href}
      className="glass-card p-10 border-white/5 hover:border-accent-primary/30 hover:bg-accent-primary/5 transition-all group"
    >
      <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 text-text-muted group-hover:text-accent-primary group-hover:bg-accent-primary/10 transition-all">
        <Icon size={28} />
      </div>
      <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
        {title}
        <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
      </h3>
      <p className="text-text-muted leading-relaxed">
        {description}
      </p>
    </a>
  );
}
