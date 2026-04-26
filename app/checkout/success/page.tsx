"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, Loader2, ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import confetti from "canvas-confetti";

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sessionId) {
      // Trigger confetti!
      const duration = 3000;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 5,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#4F46E5', '#7C3AED', '#06B6D4']
        });
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#4F46E5', '#7C3AED', '#06B6D4']
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };
      frame();

      // Simulate a small loading state while webhook might be processing
      setTimeout(() => setLoading(false), 1500);
    } else {
      setLoading(false);
    }
  }, [sessionId]);

  return (
    <div className="max-w-2xl mx-auto glass-card p-12 text-center border-accent-green/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent-green/10 to-transparent opacity-50 pointer-events-none" />
      
      <div className="relative z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="w-24 h-24 bg-accent-green/20 text-accent-green rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(16,185,129,0.3)]"
        >
          {loading ? (
            <Loader2 size={48} className="animate-spin" />
          ) : (
            <CheckCircle size={48} />
          )}
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Payment <span className="text-accent-green">Successful</span>
        </h1>
        
        <p className="text-lg text-text-muted mb-10 leading-relaxed">
          Your account has been upgraded. You now have full access to CopilotAI's premium features, including sub-80ms latency and Stealth Mode.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/download" className="px-8 py-4 bg-accent-primary text-white font-bold rounded-xl hover:bg-accent-primary/90 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(79,70,229,0.3)] group">
            <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
            Download App
          </Link>
          <Link href="/" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2 group">
            Go to Dashboard <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <main className="relative bg-[#050508] min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-6 pt-40 pb-24 relative z-10">
        <Suspense fallback={
          <div className="max-w-2xl mx-auto glass-card p-12 text-center border-white/5 flex flex-col items-center justify-center">
            <Loader2 size={48} className="animate-spin text-accent-primary mb-4" />
            <p className="text-text-muted">Confirming your payment...</p>
          </div>
        }>
          <SuccessContent />
        </Suspense>
      </div>
      
      <Footer />
    </main>
  );
}
