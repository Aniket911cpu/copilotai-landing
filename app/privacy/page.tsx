"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-bg-base">
      <Navbar />
      <div className="pt-40 pb-20 container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl font-bold mb-12">Privacy Policy</h1>
          <div className="glass-card p-10 space-y-8 text-text-muted leading-relaxed text-lg">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Data Collection</h2>
              <p>
                CopilotAI collects minimal personal data required to provide our service. This includes your email address for account management and your resume for AI context optimization.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Audio Processing</h2>
              <p>
                Audio captured during interviews is processed in volatile memory for real-time transcription and analysis. We do not store raw audio recordings on our servers.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Data Security</h2>
              <p>
                All data transmitted between your device and our servers is encrypted using industry-standard TLS. Session transcripts are encrypted at rest.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Third-Party Services</h2>
              <p>
                We use Stripe for payment processing and OpenAI/Anthropic for language model processing. These providers adhere to strict privacy standards.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}
