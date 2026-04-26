"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Loader2, Zap, ShieldCheck, Headphones } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/lib/AuthContext";

const PLANS = [
  {
    title: "FREE",
    price: "0",
    description: "Perfect for students & practice.",
    features: [
      "Real-time question detection",
      "Streaming answers (GPT-3.5)",
      "Standard latency (2.5s)",
      "Community support",
    ],
    priceId: "",
  },
  {
    title: "PRO",
    price: "29",
    description: "Most popular for job seekers.",
    features: [
      "Everything in Free",
      "Sub-800ms Latency",
      "GPT-4.1 Powered",
      "Resume-Aware Answers",
      "Invisible to Screen Share",
    ],
    // TODO: Replace with your actual Stripe Price ID for the PRO plan in .env.local
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRO_PRICE_ID || "price_1P_mock_pro",
    popular: true,
  },
  {
    title: "ELITE",
    price: "99",
    description: "For high-stakes senior roles.",
    features: [
      "Everything in Pro",
      "Local Processing Mode",
      "Zero Cloud Data Storage",
      "24/7 Priority Support",
      "Personal Onboarding",
    ],
    // TODO: Replace with your actual Stripe Price ID for the ELITE plan in .env.local
    priceId: process.env.NEXT_PUBLIC_STRIPE_ELITE_PRICE_ID || "price_1Q_mock_elite",
  },
];

export default function Pricing() {
  const { user, setAuthMode } = useAuth();
  const [loadingPriceId, setLoadingPriceId] = useState<string | null>(null);

  const handleCheckout = async (priceId: string, planName: string) => {
    if (!user) {
      setAuthMode("SIGN_IN");
      return;
    }

    if (!priceId) {
      // For FREE plan, we could redirect to a dashboard or show success
      setAuthMode(null);
      return;
    }

    setLoadingPriceId(priceId);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId, planName, userId: user.uid }),
      });

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error("Checkout failed:", error);
    } finally {
      setLoadingPriceId(null);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden" id="pricing">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Invest in Your <span className="gradient-text">Future.</span>
          </motion.h2>
          <p className="text-lg text-text-muted">
            Choose the plan that fits your career goals. All plans include absolute stealth and anti-detection technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {PLANS.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "glass-card p-10 flex flex-col relative",
                plan.popular && "border-accent-primary/40 bg-accent-primary/5 shadow-2xl shadow-accent-primary/10"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent-primary text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{plan.title}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">${plan.price}</span>
                  <span className="text-text-muted">/month</span>
                </div>
                <p className="text-sm text-text-muted mt-4">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-text-muted">
                    <Check size={16} className="text-accent-green shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  if (plan.title === "FREE") {
                    if (user) {
                      // Already logged in, maybe redirect to dashboard
                    } else {
                      setAuthMode("REGISTER");
                    }
                  } else {
                    handleCheckout(plan.priceId, plan.title);
                  }
                }}
                disabled={loadingPriceId === plan.priceId}
                className={cn(
                  "w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all",
                  plan.popular 
                    ? "bg-accent-primary text-white hover:bg-accent-primary/90 shadow-lg shadow-accent-primary/30" 
                    : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                )}
              >
                {loadingPriceId === plan.priceId ? (
                  <Loader2 size={20} className="animate-spin" />
                ) : (
                  <>
                    {plan.title === "FREE" ? (user ? "Current Plan" : "Get Started Free") : "Upgrade Now"}
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-12 pt-12 border-t border-white/5">
          <div className="flex items-center gap-3 text-sm text-text-muted font-medium">
            <Zap size={20} className="text-amber-500" />
            Instant Activation
          </div>
          <div className="flex items-center gap-3 text-sm text-text-muted font-medium">
            <ShieldCheck size={20} className="text-accent-green" />
            30-Day Money Back
          </div>
          <div className="flex items-center gap-3 text-sm text-text-muted font-medium">
            <Headphones size={20} className="text-accent-primary" />
            24/7 Support
          </div>
        </div>
      </div>
    </section>
  );
}
