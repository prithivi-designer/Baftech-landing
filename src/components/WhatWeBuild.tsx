"use client";

import React from "react";
import { whatWeBuildItems } from "@/lib/content";
import GlassIcon from "./GlassIcon";
import { Sparkles } from "lucide-react";

export default function WhatWeBuild() {
  const getGlassType = (id: string) => {
    switch (id) {
      case "ai-apps":
        return "apps";
      case "ai-agents":
        return "automate";
      case "privacy-ai":
        return "privacy";
      case "intelligent-interfaces":
        return "interface";
      default:
        return "apps";
    }
  };

  return (
    <section id="what-we-build" className="py-24 md:py-32 bg-black relative overflow-hidden border-t border-white/[0.08]">
      {/* Subtle Neutral Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-violet-500/[0.03] blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-mono text-violet-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span>WHAT WE BUILD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-5 font-urbanist">
            What We Build
          </h2>
        </div>

        {/* 4 Pillars Bento Grid with 3D Frosted Glass Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whatWeBuildItems.map((item, index) => {
            const glassType = getGlassType(item.id);
            return (
              <div
                key={item.id}
                className="glass-panel glass-panel-hover p-8 md:p-10 rounded-3xl relative overflow-hidden group flex flex-col justify-between min-h-[260px] border border-white/15 hover:border-white/30"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <GlassIcon type={glassType} size="lg" />
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 border border-white/20 text-zinc-300 font-medium">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors font-urbanist">
                    {item.title}
                  </h3>

                  <p className="text-zinc-200 text-base leading-relaxed font-geist">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
