"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bug, 
  Star, 
  MessageSquare, 
  X, 
  CheckCircle2, 
  Send,
  Loader2 
} from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

type FormType = "BUG" | "TESTIMONIAL" | "FEEDBACK" | null;

export default function SupportSection() {
  const [openForm, setOpenForm] = useState<FormType>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setOpenForm(null);
      }, 2000);
    }, 1500);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-white/[0.01]" id="support">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Help Us Improve CopilotAI
          </motion.h2>
          <p className="text-lg text-text-muted">
            Found a bug? Have a success story? Or just want to share your thoughts? We&apos;re all ears.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Bug Report */}
          <SupportCard 
            icon={Bug} 
            title="Report a Bug" 
            description="Technical issues? Tell us what went wrong so we can fix it."
            onClick={() => setOpenForm("BUG")}
            color="rose"
          />

          {/* Testimonial */}
          <SupportCard 
            icon={Star} 
            title="Submit Testimonial" 
            description="Did you get the offer? Share your success with the community."
            onClick={() => setOpenForm("TESTIMONIAL")}
            color="amber"
          />

          {/* Feedback */}
          <SupportCard 
            icon={MessageSquare} 
            title="General Feedback" 
            description="Suggestions or general thoughts? We love hearing from you."
            onClick={() => setOpenForm("FEEDBACK")}
            color="primary"
          />
        </div>
      </div>

      {/* Form Modal */}
      <Dialog.Root open={openForm !== null} onOpenChange={(open) => !open && setOpenForm(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-lg glass-card p-8 z-[101] border-white/10 outline-none">
            <div className="flex items-center justify-between mb-8">
              <Dialog.Title className="text-2xl font-bold flex items-center gap-3">
                {openForm === "BUG" && <><Bug className="text-accent-rose" /> Report a Bug</>}
                {openForm === "TESTIMONIAL" && <><Star className="text-amber-500" /> Share Your Story</>}
                {openForm === "FEEDBACK" && <><MessageSquare className="text-accent-primary" /> General Feedback</>}
              </Dialog.Title>
              <Dialog.Close className="text-text-muted hover:text-white transition-colors">
                <X size={24} />
              </Dialog.Close>
            </div>

            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-accent-green/10 flex items-center justify-center text-accent-green mx-auto mb-6">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Thank you!</h3>
                  <p className="text-text-muted">Your submission has been received.</p>
                </motion.div>
              ) : (
                <motion.form
                  key={openForm}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {openForm === "BUG" && (
                    <>
                      <Input label="Feature Area" placeholder="e.g. Overlay, Audio, OCR" required />
                      <Textarea label="What happened?" placeholder="Describe the steps to reproduce the bug..." required />
                      <Select label="Severity" options={["Low", "Medium", "High", "Critical"]} />
                    </>
                  )}

                  {openForm === "TESTIMONIAL" && (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        <Input label="Name" placeholder="e.g. Alex J." required />
                        <Input label="Company Offer" placeholder="e.g. Meta, Stripe" required />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-text-muted">Rating</label>
                        <div className="flex gap-2">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <Star key={s} size={24} className="text-amber-500 cursor-pointer fill-amber-500/20 hover:fill-amber-500" />
                          ))}
                        </div>
                      </div>
                      <Textarea label="Your Success Story" placeholder="How did CopilotAI help you?" required />
                    </>
                  )}

                  {openForm === "FEEDBACK" && (
                    <>
                      <Input label="Email Address" type="email" placeholder="your@email.com" required />
                      <Select label="Category" options={["Feature Request", "UI/UX", "Pricing", "Other"]} />
                      <Textarea label="Message" placeholder="Tell us more..." required />
                    </>
                  )}

                  <button
                    disabled={isSubmitting}
                    className="w-full py-4 bg-accent-primary hover:bg-accent-primary/90 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-accent-primary/20 disabled:opacity-50"
                  >
                    {isSubmitting ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
                    Submit {openForm?.toLowerCase()}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}

function SupportCard({ icon: Icon, title, description, onClick, color }: any) {
  const colorMap = {
    rose: "bg-accent-rose/10 text-accent-rose group-hover:bg-accent-rose/20",
    amber: "bg-amber-500/10 text-amber-500 group-hover:bg-amber-500/20",
    primary: "bg-accent-primary/10 text-accent-primary group-hover:bg-accent-primary/20",
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="glass-card p-8 cursor-pointer group border-white/5 hover:border-white/20 transition-all duration-300"
      onClick={onClick}
    >
      <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-500", colorMap[color as keyof typeof colorMap])}>
        <Icon size={28} />
      </div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-text-muted leading-relaxed">{description}</p>
    </motion.div>
  );
}

function Input({ label, ...props }: any) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-text-muted">{label}</label>
      <input 
        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors placeholder:text-white/20"
        {...props}
      />
    </div>
  );
}

function Textarea({ label, ...props }: any) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-text-muted">{label}</label>
      <textarea 
        rows={4}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors placeholder:text-white/20 resize-none"
        {...props}
      />
    </div>
  );
}

function Select({ label, options }: { label: string, options: string[] }) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-text-muted">{label}</label>
      <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors">
        {options.map(o => <option key={o} value={o} className="bg-bg-surface">{o}</option>)}
      </select>
    </div>
  );
}
