"use client";

import React from "react";
import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "Is CopilotAI detectable by interviewers or proctoring software?",
    a: "CopilotAI uses content protection techniques that exclude the overlay from screen capture on Zoom, Google Meet, and Microsoft Teams. It does not appear in any screen recording.",
  },
  {
    q: "How fast does it respond?",
    a: "The end-to-end pipeline from question detection to first word on screen takes under 800ms on average — fast enough to stay ahead of natural speaking pace.",
  },
  {
    q: "Does it use my actual resume?",
    a: "Yes. You upload your resume during setup. It's parsed and stored as a vector embedding, so every answer references your real experience, not generic templates.",
  },
  {
    q: "Which AI models does it use?",
    a: "GPT-4.1 by default. You can switch to Claude 4.0 Sonnet or Gemini 1.5 Pro from the settings panel at any time.",
  },
  {
    q: "Does it work on Mac and Windows?",
    a: "Yes. CopilotAI is available for Windows 10+, macOS 12+, and Ubuntu 20.04+. A Chrome extension is coming soon.",
  },
  {
    q: "Is my data safe?",
    a: "Audio is processed in memory and never stored permanently. Session transcripts are encrypted at rest. You can enable full local processing mode (no cloud) in Elite plan.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 relative" id="faq">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion.Root type="single" collapsible className="space-y-4">
            {FAQS.map((faq, i) => (
              <Accordion.Item
                key={i}
                value={`item-${i}`}
                className="glass-card overflow-hidden border-white/5"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors group">
                    <span className="text-lg font-bold">{faq.q}</span>
                    <ChevronDown size={20} className="text-text-muted transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="px-8 pb-6 text-text-muted leading-relaxed data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
                  {faq.a}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </section>
  );
}
