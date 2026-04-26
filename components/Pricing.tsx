"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, ShieldCheck, Loader2, Zap, HeartHandshake, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const TIER_FEATURES = {
  FREE: [
    "3 sessions / month",
    "Basic AI answers",
    "Resume upload",
    "7-day session history",
    "Community support",
  ],
  PRO: [
    "Unlimited sessions",
    "All answer frameworks",
    "Coding helper",
    "Post-session PDF report",
    "Company-specific mode",
    "Priority support",
    "STAR & CAR frameworks",
  ],
  ELITE: [
    "Everything in Pro",
    "Local processing mode",
    "Duo assist mode",
    "Career ecosystem",
    "Auto-apply agent",
    "LinkedIn optimizer",
    "Dedicated support",
    "Custom fine-tuned models",
  ],
};

const PRICE_IDS = {
  PRO: "price_123_pro", 
  ELITE: "price_123_elite",
};

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");
  const [loading, setLoading] = useState<string | null>(null);

  const getPrice = (monthly: number) => {
    if (billingCycle === "monthly") return monthly;
    return Math.floor(monthly * 0.8); // 20% discount
  };

  const onCheckout = async (plan: "PRO" | "ELITE") => {
    try {
      setLoading(plan);
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          priceId: PRICE_IDS[plan],
          planName: plan,
        }),
      });

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error("Checkout error:", error);
    } finally {
      setLoading(null);
    }
  };

  return (
    <section className="py-24 relative" id="pricing">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 gradient-text"
          >
            Simple, Transparent Pricing
          </motion.h2>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={cn("text-sm font-medium transition-colors", billingCycle === "monthly" ? "text-white" : "text-text-muted")}>Monthly</span>
            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
              className="relative w-14 h-7 rounded-full bg-white/10 border border-white/10 p-1 transition-all"
            >
              <motion.div
                animate={{ x: billingCycle === "monthly" ? 0 : 28 }}
                className="w-5 h-5 rounded-full bg-accent-primary shadow-lg shadow-accent-primary/50"
              />
            </button>
            <div className="flex items-center gap-2">
              <span className={cn("text-sm font-medium transition-colors", billingCycle === "yearly" ? "text-white" : "text-text-muted")}>Yearly</span>
              <span className="px-2 py-0.5 rounded-full bg-accent-green/20 text-accent-green text-[10px] font-bold uppercase">Save 20%</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* FREE */}
          <PricingCard
            title="FREE"
            price={0}
            features={TIER_FEATURES.FREE}
            cta="Get Started Free"
          />

          {/* PRO */}
          <PricingCard
            title="PRO"
            price={getPrice(18)}
            features={TIER_FEATURES.PRO}
            cta="Start Pro Free Trial"
            popular
            accentColor="accent-primary"
            isLoading={loading === "PRO"}
            onClick={() => onCheckout("PRO")}
          />

          {/* ELITE */}
          <PricingCard
            title="ELITE"
            price={getPrice(35)}
            features={TIER_FEATURES.ELITE}
            cta="Go Elite"
            accentColor="accent-violet"
            isLoading={loading === "ELITE"}
            onClick={() => onCheckout("ELITE")}
          />
        </div>

        {/* Trust Row */}
        <div className="mt-24 grid md:grid-cols-3 gap-12 border-t border-white/5 pt-16">
          <div className="text-center group">
            <div className="w-12 h-12 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary mx-auto mb-6 transition-transform group-hover:scale-110">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-lg font-bold mb-3">Secure Payments</h3>
            <p className="text-sm text-text-muted">
              Processed via Stripe. 256-bit SSL encryption.
            </p>
          </div>
          <div className="text-center group">
            <div className="w-12 h-12 rounded-full bg-accent-violet/10 flex items-center justify-center text-accent-violet mx-auto mb-6 transition-transform group-hover:scale-110">
              <Zap size={24} />
            </div>
            <h3 className="text-lg font-bold mb-3">Instant Access</h3>
            <p className="text-sm text-text-muted">
              Features activated immediately after purchase.
            </p>
          </div>
          <div className="text-center group">
            <div className="w-12 h-12 rounded-full bg-accent-cyan/10 flex items-center justify-center text-accent-cyan mx-auto mb-6 transition-transform group-hover:scale-110">
              <HeartHandshake size={24} />
            </div>
            <h3 className="text-lg font-bold mb-3">30-Day Guarantee</h3>
            <p className="text-sm text-text-muted">
              Full refund if you don&apos;t nail your interview.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingCard({
  title,
  price,
  features,
  cta,
  popular = false,
  accentColor = "white/10",
  isLoading = false,
  onClick,
}: {
  title: string;
  price: number;
  features: string[];
  cta: string;
  popular?: boolean;
  accentColor?: string;
  isLoading?: boolean;
  onClick?: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "glass-card p-8 flex flex-col relative transition-all duration-300",
        popular && "border-accent-primary shadow-2xl shadow-accent-primary/10 scale-105 z-10"
      )}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent-primary rounded-full text-[10px] font-bold text-white uppercase tracking-widest">
          Most Popular
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-sm font-bold text-text-muted tracking-widest uppercase mb-4">{title}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-5xl font-bold">${price}</span>
          <span className="text-text-muted">/month</span>
        </div>
      </div>

      <div className="space-y-4 mb-8 flex-1">
        {features.map((feature, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="mt-1 w-5 h-5 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
              <Check size={12} className="text-accent-green" />
            </div>
            <span className="text-sm text-text-muted leading-tight">{feature}</span>
          </div>
        ))}
      </div>

      <button
        onClick={onClick}
        disabled={isLoading || (title === "FREE")}
        className={cn(
          "w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2",
          popular
            ? "bg-accent-primary text-white hover:bg-accent-primary/90 shadow-lg shadow-accent-primary/20"
            : "bg-white/5 text-white hover:bg-white/10 border border-white/10",
          (isLoading || title === "FREE") && "opacity-50 cursor-not-allowed"
        )}
      >
        {isLoading && <Loader2 size={18} className="animate-spin" />}
        {cta}
      </button>
    </motion.div>
  );
}
