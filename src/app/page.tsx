"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import WhatWeBuild from "@/components/WhatWeBuild";
import OpenChatHero from "@/components/OpenChatHero";
import CapabilitiesPlayground from "@/components/CapabilitiesPlayground";
import PrivacySection from "@/components/PrivacySection";
import WorkflowsSection from "@/components/WorkflowsSection";
import PhilosophySection from "@/components/PhilosophySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import LegalModal from "@/components/LegalModal";

export default function Home() {
  const [legalModalType, setLegalModalType] = useState<"privacy" | "terms" | null>(null);

  return (
    <main className="min-h-screen bg-black text-white relative selection:bg-white selection:text-black">
      {/* Navigation Header */}
      <Navbar />

      {/* 1. Brand Hero */}
      <Hero />

      {/* 2. About BAFtech */}
      <AboutSection />

      {/* 3. What We Build */}
      <WhatWeBuild />

      {/* 4. Our Products: OpenChat */}
      <OpenChatHero />

      {/* 5. OpenChat Capabilities */}
      <CapabilitiesPlayground />

      {/* 6. Privacy by Design */}
      <PrivacySection />

      {/* 7. Built for More Than Chat */}
      <WorkflowsSection />

      {/* 8. Our Approach */}
      <PhilosophySection />

      {/* 9. Get in Touch */}
      <ContactSection />

      {/* 10. Footer */}
      <Footer onOpenLegal={(type) => setLegalModalType(type)} />

      {/* Legal Dialog Modals */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </main>
  );
}
