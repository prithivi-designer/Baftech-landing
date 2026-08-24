import React from "react";

export type GlassIconType =
  | "multi-model"
  | "chat"
  | "document"
  | "code"
  | "image"
  | "voice"
  | "web"
  | "agent"
  | "privacy"
  | "control"
  | "security"
  | "intelligence"
  | "accessibility"
  | "research"
  | "create"
  | "build"
  | "analyze"
  | "automate"
  | "apps"
  | "interface"
  | "encryption"
  | "tee";

interface GlassIconProps {
  type: GlassIconType | string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export const GlassIcon: React.FC<GlassIconProps> = ({
  type,
  size = "md",
  className = "",
}) => {
  const sizeMap = {
    sm: "w-8 h-8",
    md: "w-11 h-11",
    lg: "w-13 h-13",
    xl: "w-16 h-16",
  };

  const containerSizes = {
    sm: "w-8 h-8 rounded-xl",
    md: "w-11 h-11 rounded-2xl",
    lg: "w-13 h-13 rounded-2xl",
    xl: "w-16 h-16 rounded-3xl",
  };

  const svgSizes = {
    sm: 20,
    md: 28,
    lg: 34,
    xl: 42,
  };

  const currentSize = svgSizes[size] || 28;

  switch (type) {
    // 1. Multi-Model AI / Overlapping purple glass petals (Top-left in image)
    case "multi-model":
    case "ai-apps":
    case "apps":
      return (
        <div
          className={`relative flex items-center justify-center ${containerSizes[size]} bg-[#080512]/90 border border-purple-500/30 shadow-[0_0_20px_-3px_rgba(168,85,247,0.35),inset_0_1px_1px_rgba(255,255,255,0.2)] ${className}`}
        >
          <svg width={currentSize} height={currentSize} viewBox="0 0 48 48" fill="none">
            <defs>
              <linearGradient id="purpleGrad1" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                <stop stopColor="#c084fc" />
                <stop offset="1" stopColor="#7e22ce" />
              </linearGradient>
              <linearGradient id="purpleGrad2" x1="12" y1="12" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                <stop stopColor="#e879f9" />
                <stop offset="1" stopColor="#9333ea" />
              </linearGradient>
            </defs>
            <circle cx="20" cy="20" r="10" fill="url(#purpleGrad1)" fillOpacity="0.25" stroke="#c084fc" strokeWidth="1.5" />
            <circle cx="28" cy="20" r="10" fill="url(#purpleGrad2)" fillOpacity="0.25" stroke="#e879f9" strokeWidth="1.5" />
            <circle cx="20" cy="28" r="10" fill="url(#purpleGrad2)" fillOpacity="0.25" stroke="#c084fc" strokeWidth="1.5" />
            <circle cx="28" cy="28" r="10" fill="url(#purpleGrad1)" fillOpacity="0.25" stroke="#e879f9" strokeWidth="1.5" />
            <circle cx="24" cy="24" r="4.5" fill="#f5d0fe" fillOpacity="0.7" />
          </svg>
        </div>
      );

    // 2. AI Chat / Layered glowing cyan-blue chat bubbles (Top-right in image)
    case "ai-chat":
    case "chat":
    case "intelligent-interfaces":
    case "interface":
      return (
        <div
          className={`relative flex items-center justify-center ${containerSizes[size]} bg-[#030914]/90 border border-cyan-500/30 shadow-[0_0_20px_-3px_rgba(6,182,212,0.35),inset_0_1px_1px_rgba(255,255,255,0.2)] ${className}`}
        >
          <svg width={currentSize} height={currentSize} viewBox="0 0 48 48" fill="none">
            <defs>
              <linearGradient id="cyanGrad1" x1="8" y1="8" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                <stop stopColor="#38bdf8" />
                <stop offset="1" stopColor="#0284c7" />
              </linearGradient>
              <linearGradient id="cyanGrad2" x1="16" y1="16" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                <stop stopColor="#67e8f9" />
                <stop offset="1" stopColor="#0369a1" />
              </linearGradient>
            </defs>
            {/* Back bubble */}
            <rect
              x="10"
              y="10"
              width="22"
              height="18"
              rx="6"
              fill="url(#cyanGrad1)"
              fillOpacity="0.3"
              stroke="#38bdf8"
              strokeWidth="1.5"
            />
            {/* Front layered bubble */}
            <rect
              x="16"
              y="18"
              width="22"
              height="18"
              rx="6"
              fill="url(#cyanGrad2)"
              fillOpacity="0.45"
              stroke="#67e8f9"
              strokeWidth="1.75"
            />
          </svg>
        </div>
      );

    // 3. Privacy / Emerald concentric radar rings (Middle-left in image)
    case "privacy":
    case "privacy-ai":
    case "security":
    case "zero-retention":
      return (
        <div
          className={`relative flex items-center justify-center ${containerSizes[size]} bg-[#02100a]/90 border border-emerald-500/30 shadow-[0_0_20px_-3px_rgba(16,185,129,0.4),inset_0_1px_1px_rgba(255,255,255,0.2)] ${className}`}
        >
          <svg width={currentSize} height={currentSize} viewBox="0 0 48 48" fill="none">
            <defs>
              <radialGradient id="emeraldGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#34d399" stopOpacity="0.8" />
                <stop offset="60%" stopColor="#059669" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#064e3b" stopOpacity="0.1" />
              </radialGradient>
            </defs>
            <circle cx="24" cy="24" r="16" fill="url(#emeraldGrad)" stroke="#34d399" strokeWidth="1.75" />
            <circle cx="24" cy="24" r="10" stroke="#6ee7b7" strokeWidth="1.25" strokeOpacity="0.8" />
            <circle cx="24" cy="24" r="4.5" fill="#a7f3d0" />
          </svg>
        </div>
      );

    // 4. Document Analysis / Amber layered glowing wedge (Middle-center in image)
    case "document-analysis":
    case "document":
    case "analyze":
      return (
        <div
          className={`relative flex items-center justify-center ${containerSizes[size]} bg-[#120803]/90 border border-amber-500/30 shadow-[0_0_20px_-3px_rgba(245,158,11,0.35),inset_0_1px_1px_rgba(255,255,255,0.2)] ${className}`}
        >
          <svg width={currentSize} height={currentSize} viewBox="0 0 48 48" fill="none">
            <defs>
              <linearGradient id="amberGrad" x1="10" y1="10" x2="38" y2="38" gradientUnits="userSpaceOnUse">
                <stop stopColor="#fbbf24" />
                <stop offset="1" stopColor="#d97706" />
              </linearGradient>
            </defs>
            <circle cx="24" cy="24" r="15" fill="#291807" fillOpacity="0.6" stroke="#d97706" strokeWidth="1.25" strokeOpacity="0.6" />
            <path
              d="M24 24 L24 10 A14 14 0 0 1 38 24 Z"
              fill="url(#amberGrad)"
              fillOpacity="0.85"
              stroke="#fde68a"
              strokeWidth="1.5"
            />
            <circle cx="24" cy="24" r="2.5" fill="#fef3c7" />
          </svg>
        </div>
      );

    // 5. Code Generation / Build / Orange stacked neon layers (Middle-right in image)
    case "code-generation":
    case "code":
    case "build":
      return (
        <div
          className={`relative flex items-center justify-center ${containerSizes[size]} bg-[#120603]/90 border border-orange-500/30 shadow-[0_0_20px_-3px_rgba(249,115,22,0.35),inset_0_1px_1px_rgba(255,255,255,0.2)] ${className}`}
        >
          <svg width={currentSize} height={currentSize} viewBox="0 0 48 48" fill="none">
            <defs>
              <linearGradient id="orangeGrad" x1="12" y1="12" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                <stop stopColor="#fb923c" />
                <stop offset="1" stopColor="#ea580c" />
              </linearGradient>
            </defs>
            {/* Layer 1 (bottom) */}
            <path
              d="M12 28 L24 34 L36 28 L24 22 Z"
              fill="url(#orangeGrad)"
              fillOpacity="0.3"
              stroke="#ea580c"
              strokeWidth="1.5"
            />
            {/* Layer 2 (middle) */}
            <path
              d="M12 22 L24 28 L36 22 L24 16 Z"
              fill="url(#orangeGrad)"
              fillOpacity="0.5"
              stroke="#f97316"
              strokeWidth="1.5"
            />
            {/* Layer 3 (top) */}
            <path
              d="M12 16 L24 22 L36 16 L24 10 Z"
              fill="url(#orangeGrad)"
              fillOpacity="0.75"
              stroke="#fdba74"
              strokeWidth="1.75"
            />
          </svg>
        </div>
      );

    // 6. User Control / Client-Side / Cyan Avatar Silhouette (Bottom-left in image)
    case "control":
    case "client-control":
    case "accessibility":
      return (
        <div
          className={`relative flex items-center justify-center ${containerSizes[size]} bg-[#020b12]/90 border border-cyan-400/30 shadow-[0_0_20px_-3px_rgba(34,211,238,0.35),inset_0_1px_1px_rgba(255,255,255,0.2)] ${className}`}
        >
          <svg width={currentSize} height={currentSize} viewBox="0 0 48 48" fill="none">
            <defs>
              <linearGradient id="avatarGrad" x1="12" y1="10" x2="36" y2="38" gradientUnits="userSpaceOnUse">
                <stop stopColor="#22d3ee" />
                <stop offset="1" stopColor="#0284c7" />
              </linearGradient>
            </defs>
            {/* Head */}
            <circle
              cx="24"
              cy="16"
              r="6.5"
              fill="url(#avatarGrad)"
              fillOpacity="0.55"
              stroke="#67e8f9"
              strokeWidth="1.5"
            />
            {/* Shoulders */}
            <path
              d="M12 36 C12 28, 17 26, 24 26 C31 26, 36 28, 36 36 Z"
              fill="url(#avatarGrad)"
              fillOpacity="0.45"
              stroke="#22d3ee"
              strokeWidth="1.75"
            />
          </svg>
        </div>
      );

    // 7. Image Generation / Magenta neon squircle (Bottom-middle in image)
    case "image-generation":
    case "image":
    case "create":
      return (
        <div
          className={`relative flex items-center justify-center ${containerSizes[size]} bg-[#12020a]/90 border border-pink-500/30 shadow-[0_0_20px_-3px_rgba(236,72,153,0.35),inset_0_1px_1px_rgba(255,255,255,0.2)] ${className}`}
        >
          <svg width={currentSize} height={currentSize} viewBox="0 0 48 48" fill="none">
            <defs>
              <linearGradient id="pinkGrad" x1="10" y1="10" x2="38" y2="38" gradientUnits="userSpaceOnUse">
                <stop stopColor="#f472b6" />
                <stop offset="1" stopColor="#db2777" />
              </linearGradient>
            </defs>
            <rect
              x="11"
              y="11"
              width="26"
              height="26"
              rx="9"
              fill="url(#pinkGrad)"
              fillOpacity="0.4"
              stroke="#f472b6"
              strokeWidth="1.75"
            />
            <rect
              x="16"
              y="16"
              width="16"
              height="16"
              rx="5"
              stroke="#fbcfe8"
              strokeWidth="1.25"
              fill="none"
              strokeOpacity="0.8"
            />
          </svg>
        </div>
      );

    // 8. Real-Time Voice / Crossed glass pills with blue neon rim (Top-middle in image)
    case "realtime-voice":
    case "voice":
      return (
        <div
          className={`relative flex items-center justify-center ${containerSizes[size]} bg-[#040816]/90 border border-blue-500/30 shadow-[0_0_20px_-3px_rgba(59,130,246,0.35),inset_0_1px_1px_rgba(255,255,255,0.2)] ${className}`}
        >
          <svg width={currentSize} height={currentSize} viewBox="0 0 48 48" fill="none">
            <defs>
              <linearGradient id="blueCrossGrad" x1="10" y1="10" x2="38" y2="38" gradientUnits="userSpaceOnUse">
                <stop stopColor="#60a5fa" />
                <stop offset="1" stopColor="#2563eb" />
              </linearGradient>
            </defs>
            {/* Rotated pill 1 */}
            <rect
              x="14"
              y="19"
              width="20"
              height="10"
              rx="5"
              transform="rotate(45 24 24)"
              fill="url(#blueCrossGrad)"
              fillOpacity="0.35"
              stroke="#60a5fa"
              strokeWidth="1.5"
            />
            {/* Rotated pill 2 */}
            <rect
              x="14"
              y="19"
              width="20"
              height="10"
              rx="5"
              transform="rotate(-45 24 24)"
              fill="url(#blueCrossGrad)"
              fillOpacity="0.35"
              stroke="#93c5fd"
              strokeWidth="1.5"
            />
            <circle cx="24" cy="24" r="3.5" fill="#dbeafe" />
          </svg>
        </div>
      );

    // 9. Web Intelligence / Research / Lime-Gold Bookmark Glass (Bottom-right in image)
    case "web-intelligence":
    case "web":
    case "research":
    case "intelligence":
      return (
        <div
          className={`relative flex items-center justify-center ${containerSizes[size]} bg-[#091002]/90 border border-lime-500/30 shadow-[0_0_20px_-3px_rgba(132,204,22,0.35),inset_0_1px_1px_rgba(255,255,255,0.2)] ${className}`}
        >
          <svg width={currentSize} height={currentSize} viewBox="0 0 48 48" fill="none">
            <defs>
              <linearGradient id="limeGrad" x1="12" y1="8" x2="36" y2="40" gradientUnits="userSpaceOnUse">
                <stop stopColor="#a3e635" />
                <stop offset="1" stopColor="#65a30d" />
              </linearGradient>
            </defs>
            {/* Bookmark shape */}
            <path
              d="M14 10 C14 8, 16 8, 18 8 L30 8 C32 8, 34 8, 34 10 L34 38 L24 32 L14 38 Z"
              fill="url(#limeGrad)"
              fillOpacity="0.4"
              stroke="#bef264"
              strokeWidth="1.75"
            />
            <circle cx="24" cy="20" r="5" fill="#1a2e05" stroke="#d9f99d" strokeWidth="1.5" />
          </svg>
        </div>
      );

    // 10. AI Agents / Automate / Purple Nebula Spiral
    case "ai-agents":
    case "agent":
    case "automate":
      return (
        <div
          className={`relative flex items-center justify-center ${containerSizes[size]} bg-[#0c0414]/90 border border-fuchsia-500/30 shadow-[0_0_20px_-3px_rgba(217,70,239,0.35),inset_0_1px_1px_rgba(255,255,255,0.2)] ${className}`}
        >
          <svg width={currentSize} height={currentSize} viewBox="0 0 48 48" fill="none">
            <defs>
              <linearGradient id="fuchsiaGrad" x1="10" y1="10" x2="38" y2="38" gradientUnits="userSpaceOnUse">
                <stop stopColor="#e879f9" />
                <stop offset="1" stopColor="#a21caf" />
              </linearGradient>
            </defs>
            <circle cx="24" cy="24" r="14" fill="url(#fuchsiaGrad)" fillOpacity="0.3" stroke="#e879f9" strokeWidth="1.5" />
            <path
              d="M24 14 L27 21 L34 24 L27 27 L24 34 L21 27 L14 24 L21 21 Z"
              fill="#f5d0fe"
              fillOpacity="0.8"
              stroke="#fae8ff"
              strokeWidth="1"
            />
          </svg>
        </div>
      );

    // 11. Encryption / Lock Glass
    case "encryption":
      return (
        <div
          className={`relative flex items-center justify-center ${containerSizes[size]} bg-[#0b0416]/90 border border-violet-500/30 shadow-[0_0_20px_-3px_rgba(139,92,246,0.35),inset_0_1px_1px_rgba(255,255,255,0.2)] ${className}`}
        >
          <svg width={currentSize} height={currentSize} viewBox="0 0 48 48" fill="none">
            <rect x="13" y="20" width="22" height="18" rx="6" fill="#8b5cf6" fillOpacity="0.4" stroke="#a78bfa" strokeWidth="1.5" />
            <path d="M18 20 V15 C18 11.68 20.68 9 24 9 C27.32 9 30 11.68 30 15 V20" stroke="#c4b5fd" strokeWidth="1.75" strokeLinecap="round" />
            <circle cx="24" cy="29" r="2.5" fill="#ede9fe" />
          </svg>
        </div>
      );

    // 12. Confidential Computing / TEE Shield
    case "confidential-computing":
    case "tee":
    case "no-account":
      return (
        <div
          className={`relative flex items-center justify-center ${containerSizes[size]} bg-[#03120d]/90 border border-emerald-400/30 shadow-[0_0_20px_-3px_rgba(52,211,153,0.35),inset_0_1px_1px_rgba(255,255,255,0.2)] ${className}`}
        >
          <svg width={currentSize} height={currentSize} viewBox="0 0 48 48" fill="none">
            <path
              d="M24 8 L36 13 V23 C36 31 24 38 24 38 C24 38 12 31 12 23 V13 Z"
              fill="#10b981"
              fillOpacity="0.4"
              stroke="#34d399"
              strokeWidth="1.75"
            />
            <path d="M20 23 L23 26 L29 20" stroke="#a7f3d0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      );

    default:
      return (
        <div
          className={`relative flex items-center justify-center ${containerSizes[size]} bg-[#080512]/90 border border-purple-500/30 shadow-[0_0_20px_-3px_rgba(168,85,247,0.35),inset_0_1px_1px_rgba(255,255,255,0.2)] ${className}`}
        >
          <svg width={currentSize} height={currentSize} viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="14" fill="#a855f7" fillOpacity="0.35" stroke="#c084fc" strokeWidth="1.5" />
            <circle cx="24" cy="24" r="5" fill="#f3e8ff" />
          </svg>
        </div>
      );
  }
};

export default GlassIcon;
