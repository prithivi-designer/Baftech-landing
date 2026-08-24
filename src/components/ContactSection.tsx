"use client";

import React, { useState } from "react";
import { siteConfig } from "@/lib/content";
import { fireMonochromeConfetti } from "@/lib/confetti";
import { Mail, Globe, Send, CheckCircle2, Sparkles, Building2 } from "lucide-react";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "Product Inquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      fireMonochromeConfetti();
    }, 500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-black relative overflow-hidden border-t border-white/[0.08]">
      {/* Subtle Neutral Glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[500px] bg-white/[0.02] blur-[170px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs font-mono text-white w-fit mb-6">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>GET IN TOUCH</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
              Let's Build the Future of AI Together
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 font-geist leading-relaxed mb-10">
              Have a question about BAFtech, our products, partnerships, or business enquiries? Reach out to our technical team directly.
            </p>

            {/* Direct Cards */}
            <div className="space-y-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="glass-panel glass-panel-hover p-5 rounded-2xl flex items-center gap-4 border border-white/10 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/15 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs font-mono text-zinc-400">General Enquiries & Support</div>
                  <div className="text-sm font-semibold text-white group-hover:text-white transition-colors">
                    {siteConfig.email}
                  </div>
                </div>
              </a>

              <a
                href="https://baftech.xyz"
                target="_blank"
                rel="noreferrer"
                className="glass-panel glass-panel-hover p-5 rounded-2xl flex items-center gap-4 border border-white/10 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/15 flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs font-mono text-zinc-400">Official Web Domain</div>
                  <div className="text-sm font-semibold text-white group-hover:text-white transition-colors">
                    baftech.xyz
                  </div>
                </div>
              </a>

              <div className="glass-panel p-5 rounded-2xl flex items-center gap-4 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/15 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs font-mono text-zinc-400">Company Entity</div>
                  <div className="text-sm font-semibold text-white">
                    {siteConfig.registeredName}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto text-white">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Message Received</h3>
                <p className="text-sm text-zinc-300 max-w-md mx-auto font-geist">
                  Thank you for reaching out. Our team will respond to{" "}
                  <span className="text-white font-medium underline">{formState.email}</span> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({ name: "", email: "", subject: "Product Inquiry", message: "" });
                  }}
                  className="mt-4 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-2xl font-semibold text-white mb-2">Send an Enquiry</h3>
                <p className="text-xs text-zinc-400 mb-6 font-geist">
                  Fill in the details below to initiate a private conversation with our team.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-2">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-black border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-black border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-2">Inquiry Type</label>
                  <select
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full bg-black border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors"
                  >
                    <option value="Product Inquiry" className="bg-black text-white">Product Inquiry (OpenChat)</option>
                    <option value="Enterprise & Privacy" className="bg-black text-white">Enterprise Privacy & TEE Compute</option>
                    <option value="Partnership & Integration" className="bg-black text-white">Partnership & Developer Integration</option>
                    <option value="General Question" className="bg-black text-white">General Question</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your project or inquiry..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-black border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 bg-white text-black py-3.5 rounded-full font-medium hover:bg-zinc-200 active:scale-[0.99] transition-all shadow-glow text-sm"
                >
                  {loading ? (
                    <span className="inline-block w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
