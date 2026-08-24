import React from "react";
import { cn } from "@/lib/utils";
import { privacySectionContent } from "@/lib/content";
import { Terminal, Database, Shield, Lock, UserCheck } from "lucide-react";

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
            {privacySectionContent.title.toUpperCase()}
          </div>
          <h2 className="mb-4 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl font-urbanist">
            Your Conversations Should <br className="hidden sm:block" />
            <span className="text-zinc-500">Remain Yours</span>
          </h2>
          <p className="max-w-2xl text-balance text-base text-zinc-300 sm:text-lg font-geist">
            {privacySectionContent.subtitle}
          </p>
        </div>

        {/* Bento Grid Layout - Exact 5 Items from Website Content Document */}
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
          {/* Feature 1: Zero Data Retention (Large Card) */}
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
                  <span className="text-[10px] text-zinc-500 font-mono">retention_policy.sh</span>
                </div>
                <div className="p-4 space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-white font-semibold">service_session --mode=ephemeral</span>
                    <span className="text-white font-mono">[OK]</span>
                  </div>
                  <div className="flex justify-between text-zinc-400">
                    <span>conversation persistence...</span>
                    <span className="text-white font-bold">0% (PURGED)</span>
                  </div>
                  <div className="flex justify-between text-zinc-400">
                    <span>retention beyond active service...</span>
                    <span className="text-zinc-300">none</span>
                  </div>
                  <div className="mt-3 flex items-center gap-2 border-t border-white/[0.08] pt-3 text-white font-medium">
                    <span className="flex h-2 w-2 rounded-full bg-white animate-pulse" />
                    Zero Data Retention Enforced
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-white/[0.08] bg-white/[0.02] p-6">
              <div className="mb-2 flex items-center gap-2.5 text-white">
                <div className="p-1.5 rounded-lg bg-white/10 border border-white/15">
                  <Terminal className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-base font-bold font-urbanist">{privacySectionContent.pillars[0].title}</h3>
              </div>
              <p className="text-sm text-zinc-300 font-geist leading-relaxed">
                {privacySectionContent.pillars[0].description}
              </p>
            </div>
          </div>

          {/* Feature 2: Encryption (Small Card) */}
          <div className="group flex min-h-[320px] flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.12] bg-[#050505] transition-all duration-300 hover:border-white/[0.25] hover:bg-[#080808] shadow-2xl">
            <div className="flex flex-1 items-center justify-center p-6 sm:p-8">
              <div className="w-full max-w-[220px] break-all font-mono text-[11px] leading-relaxed text-zinc-400 bg-black p-4 rounded-xl border border-white/[0.12]">
                <div className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1 font-semibold">
                  Protected Payload
                </div>
                <span className="text-white font-bold">enc_stream_</span>
                7a3f890b21...
                <div className="h-px w-full bg-white/[0.1] my-2.5" />
                <div className="text-[10px] text-zinc-300 flex items-center justify-between">
                  <span>AES-256-GCM</span>
                  <span className="text-white font-bold">Encrypted</span>
                </div>
              </div>
            </div>
            <div className="border-t border-white/[0.08] bg-white/[0.02] p-6">
              <div className="mb-2 flex items-center gap-2.5 text-white">
                <div className="p-1.5 rounded-lg bg-white/10 border border-white/15">
                  <Lock className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-base font-bold font-urbanist">{privacySectionContent.pillars[1].title}</h3>
              </div>
              <p className="text-sm text-zinc-300 font-geist leading-relaxed">
                {privacySectionContent.pillars[1].description}
              </p>
            </div>
          </div>

          {/* Feature 3: Client-Side Control (Small Card) */}
          <div className="group flex min-h-[320px] flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.12] bg-[#050505] transition-all duration-300 hover:border-white/[0.25] hover:bg-[#080808] shadow-2xl">
            <div className="flex flex-1 items-center justify-center p-6 sm:p-8">
              <div className="flex flex-col gap-2.5 w-full max-w-[220px]">
                {[
                  { label: "User Data Control", status: "Active" },
                  { label: "Indefinite Collection", status: "Disabled" },
                  { label: "Conversation Keys", status: "User-Owned" },
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
                <h3 className="text-base font-bold font-urbanist">{privacySectionContent.pillars[2].title}</h3>
              </div>
              <p className="text-sm text-zinc-300 font-geist leading-relaxed">
                {privacySectionContent.pillars[2].description}
              </p>
            </div>
          </div>

          {/* Feature 4 & 5: Confidential Computing & No Account Required (Large Card) */}
          <div className="group flex min-h-[320px] flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.12] bg-[#050505] transition-all duration-300 hover:border-white/[0.25] hover:bg-[#080808] md:col-span-2 shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 sm:p-8 flex-1 items-center">
              <div className="p-4 rounded-xl bg-black border border-white/[0.12] space-y-2">
                <div className="flex items-center gap-2 text-white text-xs font-mono font-semibold">
                  <Shield className="w-4 h-4 text-white" />
                  <span>Trusted Execution Environment (TEE)</span>
                </div>
                <p className="text-xs text-zinc-300 font-geist leading-relaxed">
                  Additional protection while AI requests are processed in hardware-isolated memory enclaves.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black border border-white/[0.12] space-y-2">
                <div className="flex items-center gap-2 text-white text-xs font-mono font-semibold">
                  <UserCheck className="w-4 h-4 text-white" />
                  <span>Frictionless Start</span>
                </div>
                <p className="text-xs text-zinc-300 font-geist leading-relaxed">
                  Direct access without traditional forced account creation workflows.
                </p>
              </div>
            </div>
            <div className="border-t border-white/[0.08] bg-white/[0.02] p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-base font-bold font-urbanist text-white mb-1.5">{privacySectionContent.pillars[3].title}</h3>
                <p className="text-sm text-zinc-300 font-geist leading-relaxed">
                  {privacySectionContent.pillars[3].description}
                </p>
              </div>
              <div>
                <h3 className="text-base font-bold font-urbanist text-white mb-1.5">{privacySectionContent.pillars[4].title}</h3>
                <p className="text-sm text-zinc-300 font-geist leading-relaxed">
                  {privacySectionContent.pillars[4].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const FeaturesGrid = Component;
export default Component;
