"use client";

import React, { useState } from "react";
import Image from "next/image";
import { openChatCapabilities } from "@/lib/content";
import GlassIcon from "./GlassIcon";
import {
  Sparkles,
  Check,
  Copy,
  Volume2,
  Mic,
  Terminal,
  Search,
  ArrowRight,
} from "lucide-react";

export default function CapabilitiesPlayground() {
  const [activeTab, setActiveTab] = useState<string>("multi-model");
  const [selectedModel, setSelectedModel] = useState<string>("claude-3.5");
  const [copied, setCopied] = useState(false);
  const [voiceActive, setVoiceActive] = useState(false);

  const currentCapability =
    openChatCapabilities.find((c) => c.id === activeTab) || openChatCapabilities[0];

  const handleCopyCode = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="capabilities" className="py-24 md:py-32 bg-black relative overflow-hidden border-t border-white/10">
      {/* Subtle Neutral Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[600px] bg-indigo-500/[0.03] blur-[170px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>INTERACTIVE LAB</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-5 font-urbanist">
            OpenChat Capabilities
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 font-geist">
            Experience the eight foundational capabilities that elevate OpenChat from a simple chat interface into an autonomous work engine.
          </p>
        </div>

        {/* Playground Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Capability Nav Tabs */}
          <div className="lg:col-span-4 flex flex-col gap-2.5">
            <div className="text-xs uppercase font-mono tracking-wider text-zinc-400 px-3 mb-1 font-semibold">
              Select Capability
            </div>
            {openChatCapabilities.map((cap) => {
              const isActive = activeTab === cap.id;
              return (
                <button
                  key={cap.id}
                  onClick={() => setActiveTab(cap.id)}
                  className={`w-full text-left p-3.5 rounded-2xl transition-all duration-200 flex items-center justify-between border ${
                    isActive
                      ? "bg-white text-black border-white shadow-[0_0_30px_-5px_rgba(99,102,241,0.3)] translate-x-1"
                      : "bg-white/[0.03] border-white/15 text-white hover:bg-white/[0.06] hover:border-indigo-500/30"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <GlassIcon type={cap.id} size="sm" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-sm font-semibold ${
                            isActive ? "text-black font-bold" : "text-white"
                          }`}
                        >
                          {cap.title}
                        </span>
                        {cap.badge && (
                          <span
                            className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded-full ${
                              isActive
                                ? "bg-black text-white"
                                : "bg-indigo-500/15 text-indigo-300 border border-indigo-500/20"
                            }`}
                          >
                            {cap.badge}
                          </span>
                        )}
                      </div>
                      <p
                        className={`text-xs mt-0.5 line-clamp-1 font-geist ${
                          isActive ? "text-zinc-700 font-medium" : "text-zinc-400"
                        }`}
                      >
                        {cap.shortDesc}
                      </p>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform shrink-0 ${
                      isActive
                        ? "text-black translate-x-0.5"
                        : "text-zinc-400 opacity-60 group-hover:opacity-100"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Live Interactive Demo Canvas */}
          <div className="lg:col-span-8 glass-panel rounded-3xl p-6 sm:p-8 border border-white/15 relative overflow-hidden flex flex-col justify-between min-h-[580px] shadow-2xl bg-[#050505]">
            {/* Header info for currently active capability */}
            <div className="border-b border-white/15 pb-6 mb-6">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                <div className="flex items-center gap-3.5">
                  <GlassIcon type={currentCapability.id} size="md" />
                  <h3 className="text-2xl font-bold text-white font-urbanist">
                    {currentCapability.title}
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Module Active</span>
                </div>
              </div>
              <p className="text-sm text-zinc-300 font-geist leading-relaxed">
                {currentCapability.fullDesc}
              </p>
            </div>

            {/* Interactive Module Demos */}
            <div className="flex-1 flex flex-col justify-center">
              {/* 1. Multi-Model AI Demo */}
              {activeTab === "multi-model" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { id: "claude-3.5", name: "Claude 3.5 Sonnet", provider: "Anthropic", bestFor: "Coding & Logic", speed: "92 tps" },
                      { id: "gpt-4o", name: "GPT-4o", provider: "OpenAI", bestFor: "Multimodal & Vision", speed: "105 tps" },
                      { id: "gemini-1.5", name: "Gemini 1.5 Pro", provider: "Google", bestFor: "2M Token Context", speed: "88 tps" },
                      { id: "llama-3", name: "Llama 3.3 70B", provider: "Meta Open", bestFor: "Private Self-Host", speed: "115 tps" },
                    ].map((model) => (
                      <button
                        key={model.id}
                        onClick={() => setSelectedModel(model.id)}
                        className={`p-4 rounded-2xl border text-left transition-all ${
                          selectedModel === model.id
                            ? "bg-white text-black border-white shadow-[0_0_20px_rgba(99,102,241,0.25)]"
                            : "bg-white/[0.04] border-white/15 text-white hover:bg-white/[0.08] hover:border-indigo-500/30"
                        }`}
                      >
                        <div className={`text-xs font-mono mb-1 ${selectedModel === model.id ? "text-indigo-600 font-semibold" : "text-indigo-300"}`}>
                          {model.provider}
                        </div>
                        <div className={`text-sm font-bold mb-2 ${selectedModel === model.id ? "text-black" : "text-white"}`}>
                          {model.name}
                        </div>
                        <div className={`text-[11px] ${selectedModel === model.id ? "text-zinc-800 font-semibold" : "text-zinc-300"}`}>
                          {model.bestFor}
                        </div>
                        <div className={`text-[10px] font-mono mt-1 ${selectedModel === model.id ? "text-zinc-600" : "text-zinc-400"}`}>
                          {model.speed}
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="p-4 rounded-2xl bg-black border border-white/15 space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between text-zinc-300">
                      <span>Live Model Session:</span>
                      <span className="text-indigo-300 font-bold">{selectedModel.toUpperCase()}</span>
                    </div>
                    <div className="flex items-center justify-between text-zinc-300">
                      <span>Zero-Retention Privacy Mode:</span>
                      <span className="text-emerald-400 font-semibold">ENFORCED (Ephemeral Socket)</span>
                    </div>
                    <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-indigo-500 to-cyan-400 h-full w-4/5 animate-pulse" />
                    </div>
                  </div>
                </div>
              )}

              {/* 2. AI Chat Demo */}
              {activeTab === "ai-chat" && (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/15 space-y-3.5">
                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full bg-indigo-500/20 text-indigo-300 flex items-center justify-center text-xs font-mono font-bold shrink-0 border border-indigo-500/30">
                        U
                      </div>
                      <div className="text-sm text-white font-medium">
                        Synthesize the primary benefits of privacy-by-design AI architectures for enterprise deployment.
                      </div>
                    </div>

                    <div className="flex items-start gap-3 pt-3 border-t border-white/10">
                      <div className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center text-xs font-bold font-mono shrink-0 shadow-sm">
                        OC
                      </div>
                      <div className="text-sm text-zinc-200 leading-relaxed font-geist">
                        <p className="mb-2 text-white font-semibold">
                          Privacy-first AI architectures provide three decisive operational advantages:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-zinc-300 text-xs sm:text-sm">
                          <li><strong className="text-white">Zero Liability Surface:</strong> Confidential workloads are not retained in server databases.</li>
                          <li><strong className="text-white">TEE Isolation:</strong> Compute memory is hardware-encrypted, preventing third-party introspection.</li>
                          <li><strong className="text-white">Client Sovereignty:</strong> Keys and session state remain in user browser storage.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 3. Document Analysis Demo */}
              {activeTab === "document-analysis" && (
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-amber-500/30 rounded-2xl p-6 text-center hover:border-amber-500/50 transition-colors bg-amber-500/[0.02]">
                    <div className="flex justify-center mb-3">
                      <GlassIcon type="document" size="lg" />
                    </div>
                    <div className="text-sm font-bold text-white">Annual_Q3_Strategic_Financials.pdf</div>
                    <div className="text-xs text-zinc-300 mt-1">Parsed 142 pages • 8 tables extracted • Confidential TEE Mode</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-black border border-white/15 space-y-2">
                    <div className="text-xs font-mono font-bold text-amber-400">AUTOMATED EXTRACTED INSIGHTS:</div>
                    <div className="text-xs text-zinc-200 leading-relaxed">
                      Revenue expanded by +34% YoY with gross margins strengthening to 78.4%. R&D allocations targeted AI infrastructure acceleration.
                    </div>
                  </div>
                </div>
              )}

              {/* 4. Code Generation Demo */}
              {activeTab === "code-generation" && (
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between px-4 py-2.5 bg-black rounded-t-xl border-t border-x border-white/15">
                    <div className="flex items-center gap-2 text-white font-semibold">
                      <Terminal className="w-4 h-4 text-emerald-400" />
                      <span>secure_pipeline.ts</span>
                    </div>
                    <button
                      onClick={() => handleCopyCode(`import { createTEEContext } from '@baftech/core';\n\nexport async function executePrivateInference(prompt: string) {\n  const session = await createTEEContext({ retention: 0, encrypt: 'AES-256-GCM' });\n  return await session.infer(prompt);\n}`)}
                      className="flex items-center gap-1.5 text-[11px] text-white px-3 py-1 rounded-md bg-white/15 hover:bg-white/25 border border-white/20 font-medium transition-colors"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? "Copied!" : "Copy Code"}</span>
                    </button>
                  </div>
                  <pre className="p-4 bg-[#080808] rounded-b-xl border border-white/15 text-zinc-200 overflow-x-auto leading-relaxed">
                    <code>{`import { createTEEContext } from '@baftech/core';

export async function executePrivateInference(prompt: string) {
  // Initialize zero-knowledge enclave session
  const session = await createTEEContext({
    retention: 0,
    encryption: 'AES-256-GCM',
    hardwareShield: 'Intel-SGX'
  });

  const response = await session.infer({
    model: 'claude-3.5-sonnet',
    input: prompt
  });

  return response.stream();
}`}</code>
                  </pre>
                </div>
              )}

              {/* 5. Image Generation Demo */}
              {activeTab === "image-generation" && (
                <div className="space-y-4">
                  <div className="p-3.5 bg-black rounded-2xl border border-white/15 flex items-center justify-between text-xs">
                    <span className="text-pink-400 font-mono font-semibold">Prompt:</span>
                    <span className="text-white font-medium truncate max-w-xs sm:max-w-md">
                      "Futuristic holographic AI interface with deep obsidian glass architecture"
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-pink-500/15 text-pink-300 text-[10px] font-mono border border-pink-500/30 font-semibold">
                      4K Ultra
                    </span>
                  </div>

                  <div className="relative w-full h-56 rounded-2xl overflow-hidden border border-white/15">
                    <Image
                      src="/images/ai-generation-preview.jpg"
                      alt="AI Image Generation Preview"
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/85 backdrop-blur-md text-[11px] text-white border border-white/20 font-semibold font-mono">
                      Visual Generator Engine v2.4
                    </div>
                  </div>
                </div>
              )}

              {/* 6. Real-Time Voice Demo */}
              {activeTab === "realtime-voice" && (
                <div className="space-y-6 text-center py-4">
                  <div className="flex items-center justify-center gap-1.5 h-16">
                    {[40, 75, 30, 90, 60, 100, 45, 80, 50, 95, 35, 70].map((h, i) => (
                      <div
                        key={i}
                        className="w-1.5 rounded-full transition-all duration-300"
                        style={{
                          height: voiceActive ? `${h}%` : "15%",
                          opacity: voiceActive ? 1 : 0.4,
                          background: voiceActive ? "linear-gradient(180deg, #818cf8 0%, #c084fc 100%)" : "#ffffff",
                        }}
                      />
                    ))}
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={() => setVoiceActive(!voiceActive)}
                      className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-all ${
                        voiceActive
                          ? "bg-violet-600 text-white shadow-[0_0_25px_rgba(139,92,246,0.5)] border border-violet-400"
                          : "bg-white text-black hover:bg-zinc-200 shadow-glow"
                      }`}
                    >
                      {voiceActive ? <Volume2 className="w-4 h-4 animate-pulse" /> : <Mic className="w-4 h-4" />}
                      <span>{voiceActive ? "Listening (Click to Mute)" : "Test Live Voice Conversation"}</span>
                    </button>
                    <p className="text-xs text-zinc-300 font-medium">
                      Bidirectional real-time audio with &lt;240ms human conversational latency.
                    </p>
                  </div>
                </div>
              )}

              {/* 7. Web Intelligence Demo */}
              {activeTab === "web-intelligence" && (
                <div className="space-y-3">
                  <div className="p-3.5 bg-black rounded-2xl border border-white/15 flex items-center gap-2 text-xs">
                    <Search className="w-4 h-4 text-sky-400 shrink-0" />
                    <span className="text-white font-medium truncate">
                      "Latest advances in confidential AI computing"
                    </span>
                  </div>

                  <div className="space-y-2">
                    {[
                      { source: "nature.com/articles", title: "Hardware-Enforced Privacy Enclaves in Multi-Tenant LLM Serving", confidence: "99.4%" },
                      { source: "arxiv.org/abs/2602", title: "Zero-Knowledge Proofs for Verifiable Foundation Model Queries", confidence: "98.7%" },
                    ].map((cit, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-white/[0.04] border border-white/15 flex items-center justify-between text-xs hover:border-sky-500/30 transition-colors">
                        <div>
                          <div className="text-white font-semibold">{cit.title}</div>
                          <div className="text-sky-300 font-mono text-[10px] mt-0.5">{cit.source}</div>
                        </div>
                        <span className="px-2.5 py-1 rounded-full bg-sky-500/15 text-sky-300 font-mono text-[10px] border border-sky-500/25 font-bold">
                          {cit.confidence}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 8. AI Agents Demo */}
              {activeTab === "ai-agents" && (
                <div className="space-y-4">
                  <div className="space-y-2.5">
                    {[
                      { step: 1, title: "Objective Formulation", desc: "Parsed user goal: Competitive AI Market Intelligence Report", status: "Done" },
                      { step: 2, title: "Parallel Source Crawling", desc: "Scraped 24 real-time sources across technical benchmarks", status: "Done" },
                      { step: 3, title: "Cross-Model Verification", desc: "Synthesizing output using Claude 3.5 & GPT-4o consensus", status: "Running" },
                      { step: 4, title: "Artifact Assembly", desc: "Generating interactive summary dashboard & export", status: "Queued" },
                    ].map((st) => (
                      <div
                        key={st.step}
                        className={`p-3.5 rounded-2xl border flex items-center justify-between text-xs transition-all ${
                          st.status === "Running"
                            ? "bg-purple-500/15 border-purple-500/40 text-white shadow-[0_0_20px_rgba(168,85,247,0.2)]"
                            : st.status === "Done"
                            ? "bg-white/[0.05] border-white/15 text-white"
                            : "bg-white/[0.02] border-white/10 text-zinc-400"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono font-bold ${
                            st.status === "Done" ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30" : st.status === "Running" ? "bg-purple-500 text-white" : "bg-white/10 text-zinc-400"
                          }`}>
                            {st.step}
                          </span>
                          <div>
                            <div className="font-bold text-white">{st.title}</div>
                            <div className="text-[11px] text-zinc-300">{st.desc}</div>
                          </div>
                        </div>
                        <span className={`font-mono text-[10px] px-2.5 py-0.5 rounded-full font-semibold ${
                          st.status === "Done" ? "text-emerald-300 bg-emerald-500/15 border border-emerald-500/30" : st.status === "Running" ? "text-purple-300 bg-purple-500/25 border border-purple-500/40 animate-pulse" : "text-zinc-500"
                        }`}>
                          {st.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Feature Status Footer */}
            <div className="pt-6 mt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-mono text-zinc-400 font-medium">Capability 0{openChatCapabilities.findIndex(c => c.id === currentCapability.id) + 1} of 0{openChatCapabilities.length}</span>
              <span className="text-xs text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1 rounded-full font-geist font-medium">
                {currentCapability.title}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
