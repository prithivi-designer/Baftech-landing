"use client";

import React from "react";
import { workflowsContent } from "@/lib/content";
import GlassIcon from "./GlassIcon";
import { Sparkles } from "lucide-react";

export default function WorkflowsSection() {
  const getGlassType = (id: string) => {
    switch (id) {
      case "research":
        return "research";
      case "create":
        return "create";
      case "build":
        return "build";
      case "analyze":
        return "analyze";
      case "automate":
        return "automate";
      default:
        return "research";
    }
  };

  return (
    <section id="workflows" className="py-24 md:py-32 bg-black relative overflow-hidden border-t border-white/[0.08]">
      {/* Subtle Neutral Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-sky-500/[0.02] blur-[170px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-mono text-sky-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>ACTIONABLE WORKFLOWS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 font-urbanist">
            {workflowsContent.title}
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 font-geist">
            {workflowsContent.subtitle}
          </p>
        </div>

        {/* 5 Workflows Grid with 3D Frosted Glass Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflowsContent.items.map((wf, idx) => {
            const glassType = getGlassType(wf.id);
            return (
              <div
                key={wf.id}
                className={`glass-panel glass-panel-hover p-8 rounded-3xl border border-white/15 flex flex-col justify-between group min-h-[220px] ${
                  idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <GlassIcon type={glassType} size="lg" />
                    <span className="text-xs font-mono text-zinc-400 font-medium">0{idx + 1}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-white transition-colors font-urbanist">
                    {wf.title}
                  </h3>

                  <p className="text-sm text-zinc-300 font-geist leading-relaxed">
                    {wf.description}
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
