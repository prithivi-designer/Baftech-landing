export interface CapabilityItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  tag: string;
  iconName: string;
  demoType: "chat" | "models" | "doc" | "code" | "image" | "voice" | "web" | "agent";
  badge?: string;
  highlights: string[];
}

export interface WhatWeBuildItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
  stats: string;
}

export interface PrivacyPillar {
  id: string;
  title: string;
  description: string;
  icon: string;
  technicalDetail: string;
}

export interface WorkflowPillar {
  id: string;
  title: string;
  action: string;
  description: string;
  icon: string;
  tags: string[];
}

export interface PhilosophyPrinciple {
  id: string;
  title: string;
  description: string;
  metric: string;
  quote: string;
}

export const siteConfig = {
  name: "BAFtech",
  tagline: "Building AI Products for the Next Generation",
  description:
    "BAFtech is an AI technology company building intelligent products that make advanced AI more accessible, private, and useful for everyday users and businesses.",
  heroSubtext:
    "We develop AI-powered products designed around privacy, accessibility, and user control, turning advanced AI infrastructure into simple, usable experiences.",
  url: "https://baftech.xyz",
  email: "support@baftech.xyz",
  registeredName: "BAFtech Technologies Inc.",
  registeredAddress: "Global AI Infrastructure & Technology Lab",
  copyrightYear: 2026,
};

export const openChatDetails = {
  name: "OpenChat",
  headline: "Private AI. Powerful Models. One Interface.",
  description:
    "OpenChat is a privacy-focused generative AI platform that gives users access to powerful AI capabilities through a single conversational interface. Users can ask questions, create content, write and understand code, analyze documents, generate images, interact through voice, access real-time information, and work with AI agents.",
  subtext:
    "OpenChat is designed around user privacy and control, providing a powerful AI experience without requiring users to surrender ownership of their conversations and data.",
  figmaText:
    "a generative AI platform that enables users to create content, answer questions, generate code, analyze documents, and automate workflows through natural language conversations powered by large language models.",
};

export const aboutContent = {
  title: "About BAFtech",
  subtitle: "Building Practical AI Products",
  paragraphs: [
    "BAFtech develops AI-powered products designed around privacy, accessibility, and user control.",
    "Our focus is on creating intelligent applications that help people interact with AI naturally across research, content creation, coding, document analysis, image generation, voice interactions, and automated workflows.",
    "We build products that turn advanced AI infrastructure into simple, usable experiences.",
  ],
  stats: [
    { label: "Data Retention", value: "0%", desc: "Zero persistent storage of user conversations" },
    { label: "Access Friction", value: "Instant", desc: "No compulsory account required to start" },
    { label: "Model Agnostic", value: "Multi-LLM", desc: "Access leading models in one unified UI" },
    { label: "Hardware Security", value: "TEE / Encrypted", desc: "Confidential computing hardware enclave" },
  ],
};

export const whatWeBuildItems: WhatWeBuildItem[] = [
  {
    id: "ai-apps",
    title: "AI Applications",
    description:
      "Intelligent applications designed to make advanced AI capabilities accessible through simple user experiences.",
    icon: "Sparkles",
    gradient: "from-blue-500/20 to-indigo-500/20",
    stats: "Simplicity First",
  },
  {
    id: "ai-agents",
    title: "AI Agents",
    description:
      "AI-powered agents capable of assisting with research, content, workflows, analysis, and other everyday tasks.",
    icon: "Bot",
    gradient: "from-purple-500/20 to-pink-500/20",
    stats: "Autonomous Execution",
  },
  {
    id: "privacy-ai",
    title: "Privacy-Focused AI",
    description:
      "AI experiences designed with privacy, data protection, and greater user control at their core.",
    icon: "ShieldCheck",
    gradient: "from-emerald-500/20 to-cyan-500/20",
    stats: "Zero-Knowledge Arch",
  },
  {
    id: "intelligent-interfaces",
    title: "Intelligent Interfaces",
    description:
      "Conversational and multimodal interfaces that allow users to interact with AI through text, documents, images, and voice.",
    icon: "Layers",
    gradient: "from-amber-500/20 to-rose-500/20",
    stats: "Multimodal Native",
  },
];

export const openChatCapabilities: CapabilityItem[] = [
  {
    id: "multi-model",
    title: "Multi-Model AI",
    shortDesc: "Access multiple AI models from one interface and use the model best suited to the task.",
    fullDesc:
      "Seamlessly switch between top-tier frontier models such as Claude 3.5 Sonnet, GPT-4o, Gemini 1.5 Pro, and open-weight models like Llama 3. Select the best reasoning engine tailored specifically for your task.",
    tag: "Orchestration",
    iconName: "Cpu",
    demoType: "models",
    badge: "Smart Routing",
    highlights: ["Frontier Model Selection", "Instant Zero-Lag Switching", "Domain-Specific Model Optimizations"],
  },
  {
    id: "ai-chat",
    title: "AI Chat",
    shortDesc: "Ask questions, explore ideas, research topics, summarize information, and work through complex tasks using natural language.",
    fullDesc:
      "A fluid, natural language workspace designed for deep exploration, creative drafting, brainstorming, and synthesizing complex information in real time.",
    tag: "Core Intelligence",
    iconName: "MessageSquare",
    demoType: "chat",
    badge: "Ultra Low Latency",
    highlights: ["Natural Context Memory", "Markdown & Math Formatting", "Custom System Directives"],
  },
  {
    id: "document-analysis",
    title: "Document Analysis",
    shortDesc: "Upload and analyze documents, extract information, summarize content, and ask questions about files directly through chat.",
    fullDesc:
      "Drag and drop PDFs, spreadsheets, research papers, and text documents. OpenChat parses full documents locally and performs high-speed semantic retrieval without exposing your data.",
    tag: "File Intelligence",
    iconName: "FileText",
    demoType: "doc",
    badge: "PDF / DOC / CSV",
    highlights: ["Deep Citation Extraction", "Cross-Table Data Synthesis", "Confidential Local Parsing"],
  },
  {
    id: "code-generation",
    title: "Code Generation",
    shortDesc: "Generate, explain, debug, and improve code through conversational AI.",
    fullDesc:
      "Built for developers and technical builders. Generate full-stack code, refactor legacy scripts, debug intricate stack traces, and write tests across TypeScript, Python, Rust, Go, and SQL.",
    tag: "Developer Suite",
    iconName: "Code2",
    demoType: "code",
    badge: "Polyglot IDE",
    highlights: ["Syntax Highlighted Output", "One-Click Clipboard Copy", "Refactor & Optimization Suggestions"],
  },
  {
    id: "image-generation",
    title: "Image Generation",
    shortDesc: "Turn natural-language prompts into AI-generated images directly within OpenChat.",
    fullDesc:
      "Transform visual concepts and descriptive prompts into hyper-detailed 4K artworks, UI concept mockups, infographics, and marketing assets inside your chat stream.",
    tag: "Visual Synthesis",
    iconName: "Image",
    demoType: "image",
    badge: "High Resolution",
    highlights: ["Photorealistic & Vector Modes", "Aspect Ratio Customization", "Iterative Image Inpainting"],
  },
  {
    id: "realtime-voice",
    title: "Real-Time Voice",
    shortDesc: "Interact with AI through natural voice conversations for faster and more intuitive communication.",
    fullDesc:
      "Talk directly to OpenChat with human-grade conversational cadence, realistic vocal inflection, and instantaneous bidirectional audio processing for hands-free productivity.",
    tag: "Audio Stream",
    iconName: "Mic",
    demoType: "voice",
    badge: "Human Cadence",
    highlights: ["Instant Speech-to-Text", "Expressive Voice Synthesis", "Hands-free Workflow Control"],
  },
  {
    id: "web-intelligence",
    title: "Web Intelligence",
    shortDesc: "Use real-time web information when current context is required instead of relying solely on a model's existing knowledge.",
    fullDesc:
      "Break through training cutoff dates. OpenChat searches live internet sources, synthesizes relevant articles, and cites accurate sources with clickable references.",
    tag: "Live Data",
    iconName: "Globe",
    demoType: "web",
    badge: "Live Sources",
    highlights: ["Real-time Source Verification", "Live Market & News Scraping", "Fact Checking Pipeline"],
  },
  {
    id: "ai-agents",
    title: "AI Agents",
    shortDesc: "Use intelligent agents capable of handling multi-step tasks and workflows.",
    fullDesc:
      "Delegate complex, asynchronous tasks to autonomous agents that break goals down into structured sub-steps, search for data, execute tools, and deliver finalized deliverables.",
    tag: "Automation",
    iconName: "Sparkle",
    demoType: "agent",
    badge: "Autonomous",
    highlights: ["Multi-Step Planning", "Self-Correcting Reasoning", "Tool & API Chaining"],
  },
];

export const privacyPillars: PrivacyPillar[] = [
  {
    id: "zero-retention",
    title: "Zero Data Retention",
    description: "OpenChat is designed so conversations are not retained beyond what is required to provide the service.",
    icon: "ShieldAlert",
    technicalDetail: "Ephemeral memory buffers with automated zero-overwrite garbage collection.",
  },
  {
    id: "encryption",
    title: "Encryption",
    description: "Sensitive interactions and user data are protected through state-of-the-art encryption protocols.",
    icon: "Lock",
    technicalDetail: "TLS 1.3 in transit and AES-GCM-256 with user-managed ephemeral keys.",
  },
  {
    id: "client-control",
    title: "Client-Side Control",
    description: "OpenChat gives users greater control over their conversations and data instead of treating user interactions as data to be collected indefinitely.",
    icon: "Sliders",
    technicalDetail: "Local browser storage state with 1-click irreversible data purge.",
  },
  {
    id: "confidential-compute",
    title: "Confidential Computing",
    description: "Trusted Execution Environment (TEE) technology can be used for supported workloads to provide additional protection while AI requests are being processed.",
    icon: "Cpu",
    technicalDetail: "Hardware-enforced memory isolation preventing host OS & cloud provider snooping.",
  },
  {
    id: "no-account",
    title: "No Account Required to Start",
    description: "Users can begin interacting with OpenChat without being forced through a traditional account creation process.",
    icon: "UserCheck",
    technicalDetail: "Anonymous cryptographic session handshake without email or phone harvesting.",
  },
];

export const workflowPillars: WorkflowPillar[] = [
  {
    id: "research",
    title: "Research",
    action: "Find, understand, and synthesize information.",
    description: "Dig into academic literature, technical documentation, and deep topic synthesis with automated summaries.",
    icon: "Search",
    tags: ["Deep Search", "Topic Mapping", "Fact Synthesizer"],
  },
  {
    id: "create",
    title: "Create",
    action: "Generate content, ideas, images, and other creative outputs.",
    description: "Draft engaging articles, marketing copy, video storyboards, and design visual concepts effortlessly.",
    icon: "PenTool",
    tags: ["Copywriting", "Ideation", "Visual Prompts"],
  },
  {
    id: "build",
    title: "Build",
    action: "Write, understand, debug, and improve code.",
    description: "Transform natural language logic into production-ready software components, backend APIs, and algorithms.",
    icon: "Terminal",
    tags: ["Full-Stack", "Architecture", "Debugging"],
  },
  {
    id: "analyze",
    title: "Analyze",
    action: "Work with documents, information, and complex topics.",
    description: "Extract numerical tables, examine contract clauses, and detect hidden patterns in massive document sets.",
    icon: "BarChart3",
    tags: ["Data Extraction", "Contract Audit", "CSV Parsing"],
  },
  {
    id: "automate",
    title: "Automate",
    action: "Use AI agents to assist with multi-step workflows.",
    description: "Chain together multi-step operations from data ingestion to final email/report delivery.",
    icon: "GitFork",
    tags: ["Autonomous Loops", "API Webhooks", "Task Chains"],
  },
];

export const philosophyPrinciples: PhilosophyPrinciple[] = [
  {
    id: "privacy",
    title: "Privacy",
    description: "Design systems that minimize unnecessary collection and retention of user data.",
    metric: "0-Retention",
    quote: "User interactions are confidential intellectual property, not training fodder.",
  },
  {
    id: "intelligence",
    title: "Intelligence",
    description: "Give users access to capable AI models and tools for real-world tasks.",
    metric: "Frontier SOTA",
    quote: "Unrestricted access to the highest-performing neural reasoning engines on the market.",
  },
  {
    id: "control",
    title: "Control",
    description: "Give users greater visibility and control over how they interact with AI.",
    metric: "User-Owned",
    quote: "Granular oversight of every prompt, context payload, model choice, and output artifact.",
  },
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "What We Build", href: "#what-we-build" },
  { name: "OpenChat", href: "#openchat" },
  { name: "Capabilities", href: "#capabilities" },
  { name: "Privacy", href: "#privacy" },
  { name: "Workflows", href: "#workflows" },
  { name: "Approach", href: "#approach" },
  { name: "Contact", href: "#contact" },
];
