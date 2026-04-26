"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, MoveLeft, Ghost } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="relative bg-[#08080C] min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 container mx-auto px-6 flex flex-col items-center justify-center pt-24">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute -top-20 left-1/2 -translate-x-1/2 text-accent-primary opacity-20"
          >
            <Ghost size={200} />
          </motion.div>
          
          <div className="text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[12rem] font-black gradient-text leading-none mb-8"
            >
              404
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Lost in the Noise?
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-text-muted mb-12 max-w-lg mx-auto"
            >
              The page you are looking for has been muffled or never existed. 
              Let&apos;s get you back to the session.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Link 
                href="/"
                className="flex items-center gap-2 px-10 py-4 bg-accent-primary text-white font-bold rounded-xl hover:bg-accent-primary/90 transition-all shadow-lg shadow-accent-primary/20"
              >
                <Home size={20} />
                Back to Home
              </Link>
              <button 
                onClick={() => window.history.back()}
                className="flex items-center gap-2 px-10 py-4 bg-white/5 text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 transition-all"
              >
                <MoveLeft size={20} />
                Previous Page
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
