"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CheckoutSuccessPage() {
  return (
    <main className="min-h-screen bg-bg-base">
      <Navbar />
      <div className="pt-40 pb-20 container mx-auto px-6 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card p-12 max-w-lg w-full border-accent-green/30"
        >
          <div className="w-20 h-20 rounded-full bg-accent-green/10 flex items-center justify-center text-accent-green mx-auto mb-8">
            <CheckCircle2 size={48} />
          </div>
          <h1 className="text-4xl font-bold mb-4">Payment Successful!</h1>
          <p className="text-text-muted mb-10 leading-relaxed">
            Thank you for choosing CopilotAI. Your Pro features have been activated. You can now start your first assisted interview session.
          </p>
          <div className="space-y-4">
            <Link 
              href="/"
              className="block w-full py-4 bg-accent-primary hover:bg-accent-primary/90 text-white rounded-xl font-bold transition-all shadow-lg shadow-accent-primary/20"
            >
              Go to Dashboard
            </Link>
            <Link 
              href="/docs"
              className="block w-full py-4 bg-white/5 hover:bg-white/10 text-white rounded-xl font-bold transition-all border border-white/10"
            >
              Read Getting Started Guide
            </Link>
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}
