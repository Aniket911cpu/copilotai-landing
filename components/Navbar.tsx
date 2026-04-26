"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Bot } from "lucide-react";
import { cn } from "@/lib/utils";
import AuthSection from "./AuthSection";
import AccountSection from "./AccountSection";
import Image from "next/image";
import { useAuth } from "@/lib/AuthContext";

const NavLinks = [
  { name: "Features", href: "/features" },
  { name: "Support", href: "/support" },
  { name: "Changelog", href: "/changelog" },
  { name: "Download", href: "/download" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, setAuthMode, isAccountOpen, setIsAccountOpen } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
          isScrolled ? "bg-bg-base/80 backdrop-blur-xl border-b border-white/5 py-3" : "bg-transparent"
        )}
      >
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-accent-primary flex items-center justify-center text-white shadow-lg shadow-accent-primary/20 group-hover:scale-110 transition-transform">
              <Image src="/logo.svg" alt="CopilotAI" width={24} height={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Copilot<span className="gradient-text">AI</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {NavLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-text-muted hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <button 
                onClick={() => setIsAccountOpen(true)}
                className="flex items-center gap-3 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-all group"
              >
                {user.photoURL ? (
                  <Image src={user.photoURL} alt="Profile" width={24} height={24} className="rounded-full" />
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

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-bg-base flex flex-col pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 mb-12">
              {NavLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-bold text-white hover:text-accent-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-4 mt-auto mb-12">
              {user ? (
                <button 
                  onClick={() => {
                    setIsAccountOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold flex items-center justify-center gap-3"
                >
                  {user.photoURL ? (
                    <Image src={user.photoURL} alt="Profile" width={24} height={24} className="rounded-full" />
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-accent-primary flex items-center justify-center text-[10px] font-bold text-white">
                      {user.email?.charAt(0).toUpperCase()}
                    </div>
                  )}
                  {user.displayName || "My Account"}
                </button>
              ) : (
                <>
                  <button 
                    onClick={() => {
                      setAuthMode("SIGN_IN");
                      setMobileMenuOpen(false);
                    }}
                    className="w-full py-4 text-white font-bold border border-white/10 rounded-2xl"
                  >
                    Sign In
                  </button>
                  <button 
                    onClick={() => {
                      setAuthMode("REGISTER");
                      setMobileMenuOpen(false);
                    }}
                    className="w-full py-4 bg-accent-primary text-white rounded-2xl font-bold flex items-center justify-center gap-2"
                  >
                    Get Started Free
                    <ArrowRight size={20} />
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AuthSection />
      <AccountSection isOpen={isAccountOpen} setIsOpen={setIsAccountOpen} />
    </>
  );
}
