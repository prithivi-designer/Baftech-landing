"use client";

import React from "react";
import { X, ShieldCheck, FileText } from "lucide-react";
import { siteConfig } from "@/lib/content";

interface LegalModalProps {
  type: "privacy" | "terms" | null;
  onClose: () => void;
}

export default function LegalModal({ type, onClose }: LegalModalProps) {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fadeIn">
      <div className="glass-panel w-full max-w-2xl max-h-[85vh] rounded-3xl p-6 sm:p-8 border border-white/15 flex flex-col justify-between shadow-2xl relative bg-[#050505]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-6">
          <div className="p-2.5 rounded-xl bg-white/10 text-white border border-white/15">
            {type === "privacy" ? <ShieldCheck className="w-6 h-6" /> : <FileText className="w-6 h-6" />}
          </div>
          <div>
            <h3 className="text-xl font-bold text-white font-urbanist">
              {type === "privacy" ? "Privacy Policy" : "Terms of Service"}
            </h3>
            <p className="text-xs text-zinc-400 font-mono">
              Official Policy • {siteConfig.registeredName}
            </p>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto space-y-4 pr-2 text-sm text-zinc-300 font-geist leading-relaxed">
          {type === "privacy" ? (
            <>
              <h4 className="text-white font-semibold">1. Zero Data Retention</h4>
              <p>
                OpenChat is designed so conversations are not retained beyond what is required to provide the service. Prompt inputs, document uploads, and conversational outputs are processed in volatile memory.
              </p>

              <h4 className="text-white font-semibold">2. Encryption</h4>
              <p>
                Sensitive interactions and user data are protected through end-to-end encryption in transit and rest.
              </p>

              <h4 className="text-white font-semibold">3. Client-Side Control</h4>
              <p>
                OpenChat gives users greater control over their conversations and data instead of treating user interactions as data to be collected indefinitely.
              </p>

              <h4 className="text-white font-semibold">4. Confidential Computing</h4>
              <p>
                Trusted Execution Environment (TEE) technology can be used for supported workloads to provide additional protection while AI requests are being processed.
              </p>

              <h4 className="text-white font-semibold">5. No Account Required</h4>
              <p>
                Users can begin interacting with OpenChat without being forced through a traditional account creation process.
              </p>
            </>
          ) : (
            <>
              <h4 className="text-white font-semibold">1. Acceptance of Terms</h4>
              <p>
                By accessing and utilizing BAFtech services and OpenChat, you agree to comply with these terms of use.
              </p>

              <h4 className="text-white font-semibold">2. Permitted Use</h4>
              <p>
                You may use our generative AI tools for lawful professional, research, development, and creative purposes without violating applicable regulatory frameworks.
              </p>

              <h4 className="text-white font-semibold">3. Intellectual Property</h4>
              <p>
                You retain full rights and ownership over all original content, prompts, and outputs generated through your OpenChat sessions.
              </p>

              <h4 className="text-white font-semibold">4. Availability & Reliability</h4>
              <p>
                We strive for maximum system availability and minimal latency across all supported frontier models.
              </p>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="pt-6 border-t border-white/10 mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-colors shadow-glow-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
