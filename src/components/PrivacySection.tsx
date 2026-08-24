"use client";

import React from "react";
import { FeaturesGrid } from "@/components/ui/featuresgrid";
import { Check, X } from "lucide-react";

export default function PrivacySection() {
  const comparisonRows = [
    { feature: "Mandatory Account & Phone Verification", standard: "Mandatory", openChat: "None Required" },
    { feature: "Server Conversation Retention", standard: "Indefinite by Default", openChat: "Zero Persistent Retention" },
    { feature: "Model Training on User Prompts", standard: "Opt-Out Only / Common", openChat: "Strictly Prohibited" },
    { feature: "Confidential Compute (TEE Hardware Enclaves)", standard: "Rare / Enterprise Only", openChat: "Native Architectural Standard" },
    { feature: "Client-Side Cryptographic Deletion", standard: "Partial / Soft Delete", openChat: "Irreversible Instant Purge" },
    { feature: "Multi-Model Choice Without Multi-Subscriptions", standard: "Single Provider Lock-In", openChat: "Unified Multi-Model Gateway" },
  ];

  return (
    <div id="privacy" className="relative w-full bg-black">
      {/* Bento Grid Platform Capabilities */}
      <FeaturesGrid />

      {/* Comparison Matrix Container */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 pb-24 sm:pb-32 -mt-8">
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/15 shadow-2xl bg-[#050505]">
          <div className="max-w-2xl mb-8">
            <h3 className="text-2xl font-bold text-white mb-2 font-urbanist">
              How OpenChat Compares
            </h3>
            <p className="text-sm text-zinc-300 font-geist">
              A direct architectural comparison between conventional AI platforms and BAFtech OpenChat.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/20 text-xs font-mono uppercase tracking-wider text-zinc-300">
                  <th className="pb-4 font-semibold">Security Dimension</th>
                  <th className="pb-4 font-semibold text-zinc-400">Standard AI Platforms</th>
                  <th className="pb-4 font-semibold text-white">BAFtech OpenChat</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 font-geist">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.04] transition-colors">
                    <td className="py-4 text-white font-semibold pr-4">{row.feature}</td>
                    <td className="py-4 text-zinc-400 flex items-center gap-2 pr-4 font-medium">
                      <X className="w-4 h-4 text-zinc-400 shrink-0" />
                      <span>{row.standard}</span>
                    </td>
                    <td className="py-4 text-white font-bold">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-white shrink-0" />
                        <span>{row.openChat}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
