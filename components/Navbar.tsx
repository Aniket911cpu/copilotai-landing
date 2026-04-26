"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Bot } from "lucide-react";
import { cn } from "@/lib/utils";
import AuthSection from "./AuthSection";
import AccountSection from "./AccountSection";
import { onAuthStateChanged, User as FirebaseUser } from "firebase/auth";
import { auth } from "@/lib/firebase";

const NavLinks = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Support", href: "#support" },
  { name: "Download", href: "#download" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"SIGN_IN" | "REGISTER" | null>(null);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [user, setUser] = useState<FirebaseUser | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      unsubscribe();
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-bg-base/85 backdrop-blur-md border-white/5 py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-accent-primary flex items-center justify-center text-white shadow-lg shadow-accent-primary/20 group-hover:scale-110 transition-transform">
            <Bot size={24} />
          </div>
          <span className="text-2xl font-bold font-sans tracking-tight gradient-text">
            CopilotAI
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-text-muted hover:text-text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <button 
              onClick={() => setIsAccountOpen(true)}
              className="flex items-center gap-3 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-all group"
            >
              {user.photoURL ? (
                <img src={user.photoURL} alt="Profile" className="w-6 h-6 rounded-full" />
              ) : (
                <div className="w-6 h-6 rounded-full bg-accent-primary flex items-center justify-center text-[10px] font-bold text-white">
                  {user.email?.charAt(0).toUpperCase()}
                </div>
              )}
              <span className="text-sm font-medium text-text-muted group-hover:text-white">
                {user.displayName || "Account"}
              </span>
            </button>
          ) : (
            <>
              <button 
                onClick={() => setAuthMode("SIGN_IN")}
                className="px-5 py-2 text-sm font-medium text-text-muted hover:text-text-primary transition-colors"
              >
                Sign In
              </button>
              <button 
                onClick={() => setAuthMode("REGISTER")}
                className="px-6 py-2.5 bg-accent-primary hover:bg-accent-primary/90 text-white rounded-full text-sm font-semibold flex items-center gap-2 transition-all shadow-lg shadow-accent-primary/20"
              >
                Get Started
                <ArrowRight size={16} />
              </button>
            </>
          )}
        </div>

        <AuthSection mode={authMode} setMode={setAuthMode} />
        <AccountSection isOpen={isAccountOpen} setIsOpen={setIsAccountOpen} />

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-text-primary"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-[400px] bg-bg-surface z-[70] p-8 border-l border-white/5"
            >
              <div className="flex items-center justify-between mb-12">
                <span className="text-2xl font-bold gradient-text">CopilotAI</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-text-muted hover:text-text-primary"
                >
                  <X size={28} />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {NavLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium text-text-muted hover:text-text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="absolute bottom-10 left-8 right-8 flex flex-col gap-4">
                <button className="w-full py-4 text-center font-medium text-text-muted hover:text-text-primary border border-white/10 rounded-xl transition-colors">
                  Sign In
                </button>
                <button className="w-full py-4 bg-accent-primary hover:bg-accent-primary/90 text-white rounded-xl font-semibold shadow-lg shadow-accent-primary/20 transition-all">
                  Download Free
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
