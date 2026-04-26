"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X, ShieldAlert, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const COMPARISON_DATA = [
  { feature: "Invisible to Screen Share", copilot: true, others: false },
  { feature: "Invisible to Screen Recording", copilot: true, others: false },
  { feature: "Sub-800ms Latency", copilot: true, others: false },
  { feature: "Direct Audio Capture (System)", copilot: true, others: false },
  { feature: "Resume-Aware Answers", copilot: true, others: "Partial" },
  { feature: "Code-signed & Secure", copilot: true, others: "Varies" },
];

export default function Comparison() {
  return (
    <section className="py-24 relative" id="comparison">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Not All Assistants are <br />
            <span className="gradient-text">Created Equal.</span>
          </motion.h2>
          <p className="text-lg text-text-muted">
            Most &quot;AI helpers&quot; are easily detected by modern interview platforms. CopilotAI is built on a custom low-level engine designed for absolute stealth.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card overflow-hidden border-white/5">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5">
                  <th className="p-6 text-sm font-bold uppercase tracking-widest text-text-muted">Capability</th>
                  <th className="p-6 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/20 border border-accent-primary/30 text-accent-primary text-[10px] font-bold uppercase tracking-[0.2em]">
                      CopilotAI
                    </div>
                  </th>
                  <th className="p-6 text-center text-sm font-bold uppercase tracking-widest text-text-muted">Others</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {COMPARISON_DATA.map((row, i) => (
                  <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                    <td className="p-6 text-sm font-medium text-white/80">{row.feature}</td>
                    <td className="p-6 text-center">
                      <div className="flex justify-center">
                        {row.copilot ? (
                          <div className="w-8 h-8 rounded-full bg-accent-green/10 flex items-center justify-center text-accent-green">
                            <Check size={18} />
                          </div>
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-accent-rose/10 flex items-center justify-center text-accent-rose">
                            <X size={18} />
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="p-6 text-center">
                      <div className="flex justify-center">
                        {typeof row.others === "boolean" ? (
                          row.others ? (
                            <Check size={18} className="text-text-muted" />
                          ) : (
                            <X size={18} className="text-text-muted/30" />
                          )
                        ) : (
                          <span className="text-xs text-text-muted italic">{row.others}</span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-12 p-8 rounded-3xl bg-accent-rose/5 border border-accent-rose/20 flex flex-col md:flex-row items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-accent-rose/10 flex items-center justify-center text-accent-rose flex-shrink-0">
              <ShieldAlert size={24} />
            </div>
            <p className="text-sm text-text-muted leading-relaxed">
              <strong className="text-accent-rose uppercase text-xs tracking-widest block mb-1">Security Warning:</strong>
              Using browser-based extensions or generic overlays is the #1 reason for detection in high-stakes interviews. CopilotAI bypasses the browser entirely.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
