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
      <div className="glass-panel w-full max-w-2xl max-h-[85vh] rounded-3xl p-6 sm:p-8 border border-white/15 flex flex-col justify-between shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-6">
          <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
            {type === "privacy" ? <ShieldCheck className="w-6 h-6" /> : <FileText className="w-6 h-6" />}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">
              {type === "privacy" ? "Privacy Policy & Zero-Retention Charter" : "Terms of Service"}
            </h3>
            <p className="text-xs text-zinc-400 font-mono">
              Last updated: January 2026 • {siteConfig.registeredName}
            </p>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto space-y-4 pr-2 text-sm text-zinc-300 font-geist leading-relaxed">
          {type === "privacy" ? (
            <>
              <h4 className="text-white font-semibold">1. Zero-Retention Principle</h4>
              <p>
                BAFtech is architected so that prompt inputs, document uploads, and conversational outputs are processed in volatile, ephemeral execution memory. We do not persist conversation histories in long-term databases.
              </p>

              <h4 className="text-white font-semibold">2. Hardware Isolation (TEE)</h4>
              <p>
                Workloads executed via confidential computing hardware enclaves (Trusted Execution Environments) are cryptographically shielded from host operating systems and cloud administrators.
              </p>

              <h4 className="text-white font-semibold">3. No Model Training on User Data</h4>
              <p>
                Your interactions are never harvested, licensed, or used to fine-tune foundation models. Your data remains strictly your sovereign intellectual asset.
              </p>

              <h4 className="text-white font-semibold">4. Client-Side Control & Purge</h4>
              <p>
                All conversational state resides inside your local browser session storage. You can irreversibly clear and purge your session cache at any time with a single click.
              </p>
            </>
          ) : (
            <>
              <h4 className="text-white font-semibold">1. Acceptance of Terms</h4>
              <p>
                By accessing or using BAFtech platforms and the OpenChat interface, you agree to adhere to these Terms of Service. If you disagree, you must cease usage immediately.
              </p>

              <h4 className="text-white font-semibold">2. Responsible AI Usage</h4>
              <p>
                Users agree not to utilize BAFtech services to generate malicious software, engage in unauthorized vulnerability scanning, bypass security controls, or produce unlawful material.
              </p>

              <h4 className="text-white font-semibold">3. Intellectual Property</h4>
              <p>
                You retain full copyright and ownership rights to all prompt inputs and generated outputs produced via OpenChat to the maximum extent permitted by applicable laws.
              </p>

              <h4 className="text-white font-semibold">4. Disclaimer of Warranties</h4>
              <p>
                Services are provided on an "as is" and "as available" basis. AI-generated outputs should be reviewed and verified by qualified professionals prior to critical deployment.
              </p>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="pt-6 mt-6 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-white text-black font-medium text-xs hover:bg-white/90 transition-colors"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
}
