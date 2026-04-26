"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, HeartHandshake } from "lucide-react";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-bg-base">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6 text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
          >
            Invest in Your Career
          </motion.h1>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Choose the plan that fits your current career goals. From casual practice to elite-level technical interviews.
          </p>
        </div>

        <Pricing />

        <div className="container mx-auto px-6 mt-24">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary mx-auto mb-6">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Secure Payments</h3>
              <p className="text-text-muted">
                All payments are processed securely via Stripe. We never store your credit card information.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent-violet/10 flex items-center justify-center text-accent-violet mx-auto mb-6">
                <Zap size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Instant Activation</h3>
              <p className="text-text-muted">
                Get immediate access to all Pro features as soon as your payment is confirmed.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent-cyan/10 flex items-center justify-center text-accent-cyan mx-auto mb-6">
                <HeartHandshake size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Refund Guarantee</h3>
              <p className="text-text-muted">
                Not satisfied? We offer a no-questions-asked 30-day money-back guarantee on all plans.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
