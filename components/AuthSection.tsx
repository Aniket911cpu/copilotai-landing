"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  Mail, 
  Lock, 
  User as UserIcon, 
  ArrowRight,
  Loader2,
  Github,
  Chrome
} from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

type AuthMode = "SIGN_IN" | "REGISTER" | null;

export default function AuthSection({ 
  mode, 
  setMode 
}: { 
  mode: AuthMode; 
  setMode: (mode: AuthMode) => void 
}) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate Auth
    setTimeout(() => {
      setIsLoading(false);
      setMode(null);
      // In a real app, we would use signIn() from next-auth
    }, 1500);
  };

  return (
    <Dialog.Root open={mode !== null} onOpenChange={(open) => !open && setMode(null)}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md glass-card p-8 z-[101] border-white/10 outline-none">
          <div className="flex items-center justify-between mb-8">
            <Dialog.Title className="text-3xl font-bold">
              {mode === "SIGN_IN" ? "Welcome Back" : "Create Account"}
            </Dialog.Title>
            <Dialog.Close className="text-text-muted hover:text-white transition-colors">
              <X size={24} />
            </Dialog.Close>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all text-sm font-medium">
                <Github size={18} />
                GitHub
              </button>
              <button className="flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all text-sm font-medium">
                <Chrome size={18} />
                Google
              </button>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <span className="relative px-4 bg-bg-surface text-xs text-text-muted uppercase tracking-widest">Or continue with email</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === "REGISTER" && (
                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-muted">Full Name</label>
                  <div className="relative">
                    <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                    <input 
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors placeholder:text-white/20"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <label className="text-sm font-medium text-text-muted">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                  <input 
                    type="email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors placeholder:text-white/20"
                    placeholder="name@example.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-text-muted">Password</label>
                  {mode === "SIGN_IN" && (
                    <button type="button" className="text-xs text-accent-primary hover:underline">Forgot password?</button>
                  )}
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                  <input 
                    type="password"
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors placeholder:text-white/20"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              <button
                disabled={isLoading}
                className="w-full py-4 bg-accent-primary hover:bg-accent-primary/90 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-accent-primary/20 disabled:opacity-50 mt-4"
              >
                {isLoading ? <Loader2 size={20} className="animate-spin" /> : mode === "SIGN_IN" ? "Sign In" : "Get Started"}
                {!isLoading && <ArrowRight size={20} />}
              </button>
            </form>

            <div className="text-center text-sm text-text-muted">
              {mode === "SIGN_IN" ? (
                <>
                  Don't have an account?{" "}
                  <button onClick={() => setMode("REGISTER")} className="text-accent-primary font-bold hover:underline">Register</button>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <button onClick={() => setMode("SIGN_IN")} className="text-accent-primary font-bold hover:underline">Sign In</button>
                </>
              )}
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
