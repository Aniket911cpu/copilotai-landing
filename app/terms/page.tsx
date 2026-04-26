"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-bg-base">
      <Navbar />
      <div className="pt-40 pb-20 container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl font-bold mb-12">Terms of Service</h1>
          <div className="glass-card p-10 space-y-8 text-text-muted leading-relaxed text-lg">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p>
                By using CopilotAI, you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use the application.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Ethical Use</h2>
              <p>
                CopilotAI is designed as an educational and preparation tool. Users are responsible for adhering to the ethical guidelines and policies of the companies they are interviewing with.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Subscription & Billing</h2>
              <p>
                Subscriptions are billed on a monthly or yearly basis. You can cancel at any time. Refunds are governed by our 30-day money-back guarantee policy.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Limitation of Liability</h2>
              <p>
                CopilotAI is provided &quot;as is&quot;. We do not guarantee employment or specific interview outcomes from the use of our assistant.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}
