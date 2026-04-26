"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, RefreshCcw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="bg-[#08080C] min-h-screen flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        <div className="glass-card p-12 border-red-500/20 bg-red-500/5 text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-20 h-20 rounded-3xl bg-red-500/10 flex items-center justify-center text-red-500 mx-auto mb-8"
          >
            <AlertTriangle size={40} />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white mb-4"
          >
            Something went wrong
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-text-muted text-lg mb-10"
          >
            An unexpected error occurred while processing your request. 
            Don&apos;t worry, it&apos;s not you, it&apos;s us.
          </motion.p>
          
          {error.digest && (
            <div className="mb-10 p-3 bg-black/40 rounded-lg border border-white/5 font-mono text-[10px] text-white/30 uppercase tracking-widest">
              Error Digest: {error.digest}
            </div>
          )}
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => reset()}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-10 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all border border-white/10"
            >
              <RefreshCcw size={20} />
              Try Again
            </button>
            <Link
              href="/"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-10 py-4 bg-accent-primary text-white font-bold rounded-xl hover:bg-accent-primary/90 transition-all shadow-lg shadow-accent-primary/20"
            >
              <Home size={20} />
              Return Home
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
