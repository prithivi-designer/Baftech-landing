"use client";

import React from "react";
import { philosophyContent } from "@/lib/content";
import { Shield, Lightbulb, SlidersHorizontal, Sparkles } from "lucide-react";

export default function PhilosophySection() {
  const getIcon = (id: string) => {
    switch (id) {
      case "privacy":
        return <Shield className="w-6 h-6 text-white" />;
      case "intelligence":
        return <Lightbulb className="w-6 h-6 text-white" />;
      case "control":
        return <SlidersHorizontal className="w-6 h-6 text-white" />;
      default:
        return <Sparkles className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section id="approach" className="py-24 md:py-32 bg-black relative overflow-hidden border-t border-white/[0.08]">
      {/* Subtle Neutral Glow */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-white/[0.02] blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs font-mono text-white mb-4">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>{philosophyContent.title.toUpperCase()}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 font-urbanist">
            {philosophyContent.headline}
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 font-geist">
            {philosophyContent.intro}
          </p>
        </div>

        {/* 3 Principles Horizontal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {philosophyContent.principles.map((item, index) => (
            <div
              key={item.id}
              className="glass-panel glass-panel-hover p-8 md:p-10 rounded-3xl border border-white/15 flex flex-col justify-between relative group min-h-[260px]"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:border-white/40 transition-colors">
                    {getIcon(item.id)}
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 border border-white/20 text-zinc-300 font-medium">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors font-urbanist">
                  {item.title}
                </h3>

                <p className="text-zinc-200 text-sm sm:text-base leading-relaxed font-geist">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
