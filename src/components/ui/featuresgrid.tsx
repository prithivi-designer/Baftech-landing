import React from "react";
import { cn } from "@/lib/utils";
import { Terminal, Database, Network, ShieldCheck } from "lucide-react";

export const Component = ({ className }: { className?: string }) => {
  return (
    <section
      id="privacy"
      className={cn(
        "relative w-full bg-black py-24 font-sans text-white sm:py-32 selection:bg-white selection:text-black border-t border-white/10",
        className
      )}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-white/[0.15] bg-white/[0.04] px-4 py-1.5 text-xs font-mono font-medium uppercase tracking-widest text-zinc-300">
            Privacy by Design
          </div>
          <h2 className="mb-4 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl font-urbanist">
            Your Conversations Should <br className="hidden sm:block" />
            <span className="text-zinc-500">Remain Yours.</span>
          </h2>
          <p className="max-w-2xl text-balance text-base text-zinc-300 sm:text-lg font-geist">
            OpenChat is architected with privacy and user control as fundamental product primitives—not an afterthought. No data retention, no hidden telemetry.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
          {/* Feature 1: Large Card (Performance & Zero Retention) */}
          <div className="group flex min-h-[320px] flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.12] bg-[#050505] transition-all duration-300 hover:border-white/[0.25] hover:bg-[#080808] md:col-span-2 shadow-2xl">
            <div className="relative flex flex-1 items-center justify-center p-6 sm:p-8">
              {/* Minimalist Terminal UI Mock */}
              <div className="w-full max-w-md overflow-hidden rounded-xl border border-white/[0.12] bg-black font-mono text-[11px] leading-relaxed text-zinc-400 sm:text-xs shadow-xl">
                <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-2.5 bg-zinc-950">
                  <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-white/[0.2]" />
                    <div className="h-2.5 w-2.5 rounded-full bg-white/[0.2]" />
                    <div className="h-2.5 w-2.5 rounded-full bg-white/[0.2]" />
                  </div>
                  <span className="text-[10px] text-zinc-500 font-mono">confidential-enclave.sh</span>
                </div>
                <div className="p-4 space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-white font-semibold">tee_enclave_init --retention=0</span>
                    <span className="text-white font-mono">[OK]</span>
                  </div>
                  <div className="flex justify-between text-zinc-400">
                    <span>allocating hardware memory...</span>
                    <span className="text-zinc-200">isolated</span>
                  </div>
                  <div className="flex justify-between text-zinc-400">
                    <span>ephemeral socket connection...</span>
                    <span className="text-zinc-200">encrypted</span>
                  </div>
                  <div className="flex justify-between text-zinc-400">
                    <span>server-side log retention...</span>
                    <span className="text-white font-bold">0% (DISABLED)</span>
                  </div>
                  <div className="mt-3 flex items-center gap-2 border-t border-white/[0.08] pt-3 text-white font-medium">
                    <span className="flex h-2 w-2 rounded-full bg-white animate-pulse" />
                    Zero Compulsory Retention Active (AMD SEV-SNP Enclave)
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-white/[0.08] bg-white/[0.02] p-6">
              <div className="mb-2 flex items-center gap-2.5 text-white">
                <div className="p-1.5 rounded-lg bg-white/10 border border-white/15">
                  <Terminal className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-base font-bold font-urbanist">Zero Compulsory Retention</h3>
              </div>
              <p className="text-sm text-zinc-300 font-geist leading-relaxed">
                All prompt processing runs in isolated memory enclaves and is automatically purged upon socket closure. Zero persistent chat databases.
              </p>
            </div>
          </div>

          {/* Feature 2: Small Card (Database / Client State) */}
          <div className="group flex min-h-[320px] flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.12] bg-[#050505] transition-all duration-300 hover:border-white/[0.25] hover:bg-[#080808] shadow-2xl">
            <div className="flex flex-1 items-center justify-center p-6 sm:p-8">
              {/* Minimalist Data Structure Mock */}
              <div className="flex flex-col gap-2.5 w-full max-w-[220px]">
                {[
                  { label: "Local Vault", status: "Client-Only" },
                  { label: "Session Keys", status: "IndexedDB" },
                  { label: "Model History", status: "Encrypted" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex h-9 w-full items-center justify-between rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 font-mono text-xs text-zinc-300"
                  >
                    <span className="text-white text-[11px] font-medium">{item.label}</span>
                    <span className="text-[10px] text-zinc-400 px-2 py-0.5 rounded bg-white/10 border border-white/10">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t border-white/[0.08] bg-white/[0.02] p-6">
              <div className="mb-2 flex items-center gap-2.5 text-white">
                <div className="p-1.5 rounded-lg bg-white/10 border border-white/15">
                  <Database className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-base font-bold font-urbanist">Client-Side Sovereignty</h3>
              </div>
              <p className="text-sm text-zinc-300 font-geist leading-relaxed">
                Your history, keys, and preferences remain in your browser storage. You retain unilateral control.
              </p>
            </div>
          </div>

          {/* Feature 3: Small Card (Security / Zero Trust) */}
          <div className="group flex min-h-[320px] flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.12] bg-[#050505] transition-all duration-300 hover:border-white/[0.25] hover:bg-[#080808] shadow-2xl">
            <div className="flex flex-1 items-center justify-center p-6 sm:p-8">
              {/* Minimalist Auth Key Mock */}
              <div className="w-full max-w-[220px] break-all font-mono text-[11px] leading-relaxed text-zinc-400 bg-black p-4 rounded-xl border border-white/[0.12]">
                <div className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1 font-semibold">
                  Zero-Knowledge Auth
                </div>
                <span className="text-white font-bold">baf_priv_</span>
                9f82a4d310e7b...
                <div className="h-px w-full bg-white/[0.1] my-2.5" />
                <div className="text-[10px] text-zinc-300 flex items-center justify-between">
                  <span>AES-256-GCM</span>
                  <span className="text-white font-bold">SHA-384</span>
                </div>
              </div>
            </div>
            <div className="border-t border-white/[0.08] bg-white/[0.02] p-6">
              <div className="mb-2 flex items-center gap-2.5 text-white">
                <div className="p-1.5 rounded-lg bg-white/10 border border-white/15">
                  <ShieldCheck className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-base font-bold font-urbanist">Hardware-Enforced Enclaves</h3>
              </div>
              <p className="text-sm text-zinc-300 font-geist leading-relaxed">
                Confidential compute isolates execution from the underlying operating system and cloud providers.
              </p>
            </div>
          </div>

          {/* Feature 4: Large Card (API / Webhooks) */}
          <div className="group flex min-h-[320px] flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.12] bg-[#050505] transition-all duration-300 hover:border-white/[0.25] hover:bg-[#080808] md:col-span-2 shadow-2xl">
            <div className="relative flex flex-1 items-center justify-center p-6 sm:p-8">
              {/* Minimalist Webhook/API Mock */}
              <div className="flex w-full max-w-md flex-col gap-3 font-mono text-xs">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 items-center rounded-lg border border-white/[0.15] bg-white/10 px-3 font-mono text-xs text-white font-bold">
                    POST
                  </div>
                  <div className="flex-1 rounded-lg border border-white/[0.12] bg-black px-3.5 py-2 font-mono text-xs text-zinc-300 truncate">
                    api.baftech.xyz/v1/confidential/stream
                  </div>
                </div>
                <div className="pl-[24px]">
                  <div className="h-4 border-l-2 border-dashed border-white/20" />
                </div>
                <div className="flex items-center justify-between rounded-lg border border-white/[0.12] bg-black px-4 py-3 font-mono text-xs text-zinc-300">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-white" />
                    <span>{`{ "retention": 0, "status": "stream_purged" }`}</span>
                  </div>
                  <span className="text-white font-bold bg-white/10 px-2 py-0.5 rounded border border-white/15">
                    200 OK
                  </span>
                </div>
              </div>
            </div>
            <div className="border-t border-white/[0.08] bg-white/[0.02] p-6">
              <div className="mb-2 flex items-center gap-2.5 text-white">
                <div className="p-1.5 rounded-lg bg-white/10 border border-white/15">
                  <Network className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-base font-bold font-urbanist">Anonymous Unified Gateway</h3>
              </div>
              <p className="text-sm text-zinc-300 font-geist leading-relaxed">
                Route queries to multiple frontier models (Claude, GPT-4o, Gemini) without creating accounts with each individual AI provider.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const FeaturesGrid = Component;
export default Component;
