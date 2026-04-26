"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, MessageSquareX, ShieldX } from "lucide-react";

const PROBLEMS = [
  {
    icon: Brain,
    title: "Blank Mind Under Pressure",
    body: "You know your experience cold — but nerves make everything vanish the moment a tough question hits.",
    color: "rose",
  },
  {
    icon: MessageSquareX,
    title: "Generic, Template Answers",
    body: "Everyone says the same things. Interviewers can tell. You need answers that sound like YOU.",
    color: "rose",
  },
  {
    icon: ShieldX,
    title: "No Support When It Matters",
    body: "You're completely alone in the interview. One bad answer can cost you the job.",
    color: "rose",
  },
];

export default function Problem() {
  return (
    <section className="py-24 relative overflow-hidden" id="problem">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            The Interview Problem Is Real
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-muted"
          >
            Traditional preparation only goes so far. When the pressure is on, even the best candidates stumble.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PROBLEMS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 group hover:border-accent-rose/30 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent-rose/10 flex items-center justify-center text-accent-rose mb-6 group-hover:scale-110 transition-transform duration-500">
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-text-muted leading-relaxed">{item.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-2xl md:text-3xl font-bold gradient-text">
            There&apos;s a smarter way.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
