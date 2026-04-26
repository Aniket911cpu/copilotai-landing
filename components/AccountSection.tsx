"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  User, 
  CreditCard, 
  History, 
  Settings, 
  LogOut,
  ExternalLink,
  Shield,
  Cpu,
  Monitor,
  CheckCircle2,
  AlertTriangle,
  Loader2
} from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";
import { auth, db } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { collection, query, where, getDocs, orderBy, limit } from "firebase/firestore";
import Image from "next/image";

type Tab = "PROFILE" | "BILLING" | "SESSIONS" | "APP_SETTINGS";

interface Session {
  id: string;
  title: string;
  date: string;
  score: number;
}

export default function AccountSection({ 
  isOpen, 
  setIsOpen 
}: { 
  isOpen: boolean; 
  setIsOpen: (open: boolean) => void 
}) {
  const [activeTab, setActiveTab] = useState<Tab>("PROFILE");
  const [user, setUser] = useState(auth.currentUser);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [isLoadingSessions, setIsLoadingSessions] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => {
      setUser(u);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (activeTab === "SESSIONS" && user) {
      fetchSessions();
    }
  }, [activeTab, user]);

  const fetchSessions = async () => {
    if (!user) return;
    setIsLoadingSessions(true);
    try {
      const q = query(
        collection(db, "users", user.uid, "sessions"),
        orderBy("date", "desc"),
        limit(10)
      );
      const querySnapshot = await getDocs(q);
      const fetchedSessions: Session[] = [];
      querySnapshot.forEach((doc) => {
        fetchedSessions.push({ id: doc.id, ...doc.data() } as Session);
      });
      setSessions(fetchedSessions);
    } catch (error) {
      console.error("Error fetching sessions:", error);
      // Fallback to dummy data for demo if collection doesn't exist
      setSessions([
        { id: "1", title: "Google - Senior Frontend Engineer", date: "2026-04-20", score: 94 },
        { id: "2", title: "Meta - Product Designer", date: "2026-04-18", score: 88 },
        { id: "3", title: "Stripe - Fullstack Developer", date: "2026-04-15", score: 92 },
      ]);
    } finally {
      setIsLoadingSessions(false);
    }
  };

  const handleSignOut = async () => {
    await signOut(auth);
    setIsOpen(false);
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100]" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-5xl h-[80vh] glass-card flex overflow-hidden z-[101] border-white/10 outline-none p-0">
          
          {/* Sidebar */}
          <aside className="w-64 border-r border-white/5 bg-white/[0.02] p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-10 px-2">
              {user?.photoURL ? (
                <Image src={user.photoURL} alt="Profile" width={40} height={40} className="rounded-full" />
              ) : (
                <div className="w-10 h-10 rounded-full bg-accent-primary flex items-center justify-center text-white font-bold">
                  {user?.email?.charAt(0).toUpperCase()}
                </div>
              )}
              <div className="min-w-0">
                <div className="text-sm font-bold text-white leading-tight truncate">
                  {user?.displayName || user?.email?.split("@")[0]}
                </div>
                <div className="text-[10px] text-text-muted uppercase tracking-widest">Pro Member</div>
              </div>
            </div>

            <nav className="flex-1 space-y-1">
              <NavButton icon={User} label="Profile" active={activeTab === "PROFILE"} onClick={() => setActiveTab("PROFILE")} />
              <NavButton icon={CreditCard} label="Billing & Plan" active={activeTab === "BILLING"} onClick={() => setActiveTab("BILLING")} />
              <NavButton icon={History} label="Session History" active={activeTab === "SESSIONS"} onClick={() => setActiveTab("SESSIONS")} />
              <NavButton icon={Settings} label="App Settings" active={activeTab === "APP_SETTINGS"} onClick={() => setActiveTab("APP_SETTINGS")} />
            </nav>

            <button 
              onClick={handleSignOut}
              className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-accent-rose hover:bg-accent-rose/10 rounded-xl transition-all mt-auto"
            >
              <LogOut size={18} />
              Sign Out
            </button>
          </aside>

          {/* Content Area */}
          <main className="flex-1 overflow-y-auto p-10 bg-black/20">
            <div className="flex items-center justify-between mb-10">
              <Dialog.Title className="text-3xl font-bold">
                {activeTab === "PROFILE" && "Profile Settings"}
                {activeTab === "BILLING" && "Billing & Plan"}
                {activeTab === "SESSIONS" && "Interview Sessions"}
                {activeTab === "APP_SETTINGS" && "Desktop App Config"}
              </Dialog.Title>
              <Dialog.Close className="text-text-muted hover:text-white transition-colors">
                <XIcon size={28} />
              </Dialog.Close>
            </div>

            <div className="space-y-8">
              {activeTab === "PROFILE" && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Field label="Full Name" value={user?.displayName || "N/A"} />
                    <Field label="Email Address" value={user?.email || "N/A"} />
                    <Field label="Provider" value={user?.providerData[0]?.providerId.toUpperCase() || "EMAIL"} />
                    <Field label="User ID" value={user?.uid.substring(0, 12) + "..."} />
                  </div>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                    <h4 className="font-bold mb-4 flex items-center gap-2">
                      <Shield size={18} className="text-accent-primary" />
                      Security
                    </h4>
                    <p className="text-xs text-text-muted mb-4">You are currently signed in via {user?.providerData[0]?.providerId}.</p>
                    <button className="text-sm text-accent-primary font-bold hover:underline">Change Password</button>
                  </div>
                </div>
              )}

              {activeTab === "BILLING" && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <div className="p-8 rounded-3xl bg-gradient-to-br from-accent-primary/20 to-transparent border border-accent-primary/20 relative overflow-hidden">
                    <div className="relative z-10">
                      <div className="text-sm font-bold text-accent-primary uppercase tracking-[0.2em] mb-2">Current Plan</div>
                      <div className="text-4xl font-bold text-white mb-6">CopilotAI Pro</div>
                      <div className="flex flex-wrap gap-4">
                        <button className="px-6 py-3 bg-white text-black rounded-xl font-bold text-sm hover:bg-white/90 transition-all">
                          Upgrade to Elite
                        </button>
                        <button className="px-6 py-3 bg-white/5 text-white rounded-xl font-bold text-sm hover:bg-white/10 transition-all border border-white/10 flex items-center gap-2">
                          Manage in Stripe
                          <ExternalLink size={16} />
                        </button>
                      </div>
                    </div>
                    <CreditCard className="absolute -right-8 -bottom-8 text-accent-primary/10 w-48 h-48 -rotate-12" />
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-bold text-lg">Payment Method</h4>
                    <div className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-8 bg-black rounded border border-white/10 flex items-center justify-center font-bold italic text-white/50 text-[10px]">VISA</div>
                        <div>
                          <div className="text-sm font-medium">Visa ending in 4242</div>
                          <div className="text-xs text-text-muted">Expires 12/2026</div>
                        </div>
                      </div>
                      <button className="text-sm text-text-muted hover:text-white">Edit</button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "SESSIONS" && (
                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  {isLoadingSessions ? (
                    <div className="flex justify-center py-12">
                      <Loader2 size={32} className="animate-spin text-accent-primary" />
                    </div>
                  ) : sessions.length > 0 ? (
                    sessions.map((session) => (
                      <div key={session.id} className="p-5 rounded-2xl border border-white/5 bg-white/[0.02] flex items-center justify-between group hover:bg-white/[0.04] transition-all">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center text-accent-primary">
                            <CheckCircle2 size={24} />
                          </div>
                          <div>
                            <div className="font-bold text-white">{session.title}</div>
                            <div className="text-xs text-text-muted">{session.date}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-8">
                          <div className="text-right">
                            <div className="text-sm font-bold text-accent-green">{session.score}%</div>
                            <div className="text-[10px] text-text-muted uppercase tracking-widest">Match Score</div>
                          </div>
                          <button className="p-2 rounded-lg hover:bg-white/5 text-text-muted hover:text-white transition-all">
                            <ExternalLink size={18} />
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-12 text-text-muted italic">No interview sessions found yet. Start your first one with the desktop app!</div>
                  )}
                </div>
              )}

              {activeTab === "APP_SETTINGS" && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <div className="grid md:grid-cols-2 gap-6">
                    <SettingToggle 
                      icon={Cpu} 
                      title="Local Processing Mode" 
                      description="Process all audio data locally on your GPU." 
                      enabled={false} 
                      warning="Requires NVIDIA RTX 3060+"
                    />
                    <SettingToggle 
                      icon={Monitor} 
                      title="Stealth Mode" 
                      description="Special display mode invisible to screen share." 
                      enabled={true} 
                    />
                    <SettingToggle 
                      icon={Shield} 
                      title="Automatic OCR" 
                      description="Detect and solve coding problems instantly." 
                      enabled={true} 
                    />
                  </div>
                  
                  <div className="p-6 rounded-2xl bg-accent-violet/10 border border-accent-violet/20">
                    <div className="flex items-center justify-between mb-4">
                      <div className="font-bold">Desktop App Version</div>
                      <div className="text-xs font-mono text-accent-violet">v2.4.1-stable</div>
                    </div>
                    <button className="w-full py-3 bg-accent-violet text-white rounded-xl font-bold text-sm hover:bg-accent-violet/90 transition-all shadow-lg shadow-accent-violet/20">
                      Check for Updates
                    </button>
                  </div>
                </div>
              )}
            </div>
          </main>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function NavButton({ icon: Icon, label, active, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",
        active 
          ? "bg-accent-primary text-white shadow-lg shadow-accent-primary/20" 
          : "text-text-muted hover:text-white hover:bg-white/5"
      )}
    >
      <Icon size={18} />
      {label}
    </button>
  );
}

function Field({ label, value }: { label: string, value: string }) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-bold text-text-muted uppercase tracking-widest">{label}</label>
      <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] text-white font-medium truncate">{value}</div>
    </div>
  );
}

function SettingToggle({ icon: Icon, title, description, enabled, warning }: any) {
  return (
    <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-white/5 text-white/50">
            <Icon size={18} />
          </div>
          <h5 className="font-bold text-sm">{title}</h5>
        </div>
        <p className="text-xs text-text-muted leading-relaxed mb-4">{description}</p>
        {warning && (
          <div className="flex items-center gap-1.5 text-[10px] text-amber-500 font-bold uppercase mb-4">
            <AlertTriangle size={12} />
            {warning}
          </div>
        )}
      </div>
      <button className={cn(
        "w-full py-2.5 rounded-lg text-xs font-bold transition-all",
        enabled 
          ? "bg-accent-green/20 text-accent-green hover:bg-accent-green/30" 
          : "bg-white/5 text-white/50 hover:bg-white/10"
      )}>
        {enabled ? "Enabled" : "Enable Feature"}
      </button>
    </div>
  );
}

const XIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);
