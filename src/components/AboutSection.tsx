"use client";

import React from "react";
import { aboutContent } from "@/lib/content";
import { ShieldCheck, Zap, Lock, Cpu, Sparkles, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-black border-t border-white/[0.08] overflow-hidden">
      {/* Subtle Neutral Glow */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-white/[0.02] blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Story */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs font-mono text-white w-fit mb-6">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>ABOUT BAFTECH</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-[1.15] mb-6">
              {aboutContent.subtitle}
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-zinc-300 font-geist leading-relaxed">
              {aboutContent.paragraphs.map((p, idx) => (
                <p key={idx} className="text-zinc-300/90">
                  {p}
                </p>
              ))}
            </div>

            {/* Quick check highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-8 pt-8 border-t border-white/10">
              <div className="flex items-center gap-2.5 text-sm text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span>Zero compulsory retention</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span>Client-side key security</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span>Multi-modal intelligence</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span>Confidential compute ready</span>
              </div>
            </div>
          </div>

          {/* Right Column: Stat Cards Bento */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutContent.stats.map((stat, i) => (
              <div
                key={i}
                className="glass-panel glass-panel-hover p-6 rounded-3xl flex flex-col justify-between h-[200px] border border-white/15"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-mono tracking-wider text-zinc-300 font-semibold">
                    {stat.label}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center">
                    {i === 0 && <Lock className="w-4 h-4 text-white" />}
                    {i === 1 && <Zap className="w-4 h-4 text-white" />}
                    {i === 2 && <Cpu className="w-4 h-4 text-white" />}
                    {i === 3 && <ShieldCheck className="w-4 h-4 text-white" />}
                  </div>
                </div>

                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-2 tracking-tight font-urbanist">
                    {stat.value}
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 font-geist">
                    {stat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
