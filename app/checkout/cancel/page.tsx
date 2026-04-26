"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { XCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CheckoutCancelPage() {
  return (
    <main className="relative bg-[#050508] min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-6 pt-40 pb-24 relative z-10">
        <div className="max-w-2xl mx-auto glass-card p-12 text-center border-accent-rose/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-accent-rose/10 to-transparent opacity-50 pointer-events-none" />
          
          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="w-24 h-24 bg-accent-rose/10 text-accent-rose rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(225,29,72,0.2)]"
            >
              <XCircle size={48} />
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Checkout <span className="text-accent-rose">Canceled</span>
            </h1>
            
            <p className="text-lg text-text-muted mb-10 leading-relaxed">
              Your payment was canceled and you have not been charged. If you experienced an issue during checkout, please let us know or try again.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#pricing" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2 group">
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                Return to Pricing
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
