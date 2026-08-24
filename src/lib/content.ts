// Exact content from BAFtech - Website Content.txt

export interface CapabilityItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  badge?: string;
}

export interface WhatWeBuildItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PrivacyPillar {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface WorkflowPillar {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PhilosophyPrinciple {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const siteConfig = {
  name: "BAFtech",
  tagline: "Building AI Products for the Next Generation",
  headline: "Building AI Products for the Next Generation",
  description:
    "BAFtech is an AI technology company building intelligent products that make advanced AI more accessible, private, and useful for everyday users and businesses.",
  cta: "Explore Our Products",
  url: "https://baftech.xyz",
  email: "support@baftech.xyz",
  registeredName: "BAFtech",
  registeredAddress: "Global AI Infrastructure & Technology Lab",
};

export const aboutContent = {
  title: "About BAFtech",
  subtitle: "Building Practical AI Products",
  paragraphs: [
    "BAFtech develops AI-powered products designed around privacy, accessibility, and user control.",
    "Our focus is on creating intelligent applications that help people interact with AI naturally across research, content creation, coding, document analysis, image generation, voice interactions, and automated workflows.",
    "We build products that turn advanced AI infrastructure into simple, usable experiences.",
  ],
  companyDetails: {
    description:
      "BAFtech is an AI technology company focused on developing intelligent software products and AI-powered applications.",
    website: "baftech.xyz",
    businessEmail: "support@baftech.xyz",
  },
};

export const whatWeBuildItems: WhatWeBuildItem[] = [
  {
    id: "ai-apps",
    title: "AI Applications",
    description:
      "Intelligent applications designed to make advanced AI capabilities accessible through simple user experiences.",
    icon: "Boxes",
  },
  {
    id: "ai-agents",
    title: "AI Agents",
    description:
      "AI-powered agents capable of assisting with research, content, workflows, analysis, and other everyday tasks.",
    icon: "Bot",
  },
  {
    id: "privacy-ai",
    title: "Privacy-Focused AI",
    description:
      "AI experiences designed with privacy, data protection, and greater user control at their core.",
    icon: "ShieldCheck",
  },
  {
    id: "intelligent-interfaces",
    title: "Intelligent Interfaces",
    description:
      "Conversational and multimodal interfaces that allow users to interact with AI through text, documents, images, and voice.",
    icon: "LayoutTemplate",
  },
];

export const openChatDetails = {
  sectionTitle: "Our Products",
  name: "OpenChat",
  headline: "Private AI. Powerful Models. One Interface.",
  paragraphs: [
    "OpenChat is a privacy-focused generative AI platform that gives users access to powerful AI capabilities through a single conversational interface.",
    "Users can ask questions, create content, write and understand code, analyze documents, generate images, interact through voice, access real-time information, and work with AI agents.",
    "OpenChat is designed around user privacy and control, providing a powerful AI experience without requiring users to surrender ownership of their conversations and data.",
  ],
  figmaText:
    "a generative AI platform that enables users to create content, answer questions, generate code, analyze documents, and automate workflows through natural language conversations powered by large language models.",
  cta: "Explore OpenChat",
};

export const openChatCapabilities: CapabilityItem[] = [
  {
    id: "multi-model",
    title: "Multi-Model AI",
    shortDesc:
      "Access multiple AI models from one interface and use the model best suited to the task.",
    fullDesc:
      "Access multiple AI models from one interface and use the model best suited to the task.",
    iconName: "Cpu",
  },
  {
    id: "ai-chat",
    title: "AI Chat",
    shortDesc:
      "Ask questions, explore ideas, research topics, summarize information, and work through complex tasks using natural language.",
    fullDesc:
      "Ask questions, explore ideas, research topics, summarize information, and work through complex tasks using natural language.",
    iconName: "MessageSquare",
  },
  {
    id: "document-analysis",
    title: "Document Analysis",
    shortDesc:
      "Upload and analyze documents, extract information, summarize content, and ask questions about files directly through chat.",
    fullDesc:
      "Upload and analyze documents, extract information, summarize content, and ask questions about files directly through chat.",
    iconName: "FileText",
  },
  {
    id: "code-generation",
    title: "Code Generation",
    shortDesc:
      "Generate, explain, debug, and improve code through conversational AI.",
    fullDesc:
      "Generate, explain, debug, and improve code through conversational AI.",
    iconName: "Code2",
  },
  {
    id: "image-generation",
    title: "Image Generation",
    shortDesc:
      "Turn natural-language prompts into AI-generated images directly within OpenChat.",
    fullDesc:
      "Turn natural-language prompts into AI-generated images directly within OpenChat.",
    iconName: "Image",
  },
  {
    id: "realtime-voice",
    title: "Real-Time Voice",
    shortDesc:
      "Interact with AI through natural voice conversations for faster and more intuitive communication.",
    fullDesc:
      "Interact with AI through natural voice conversations for faster and more intuitive communication.",
    iconName: "Mic",
  },
  {
    id: "web-intelligence",
    title: "Web Intelligence",
    shortDesc:
      "Use real-time web information when current context is required instead of relying solely on a model's existing knowledge.",
    fullDesc:
      "Use real-time web information when current context is required instead of relying solely on a model's existing knowledge.",
    iconName: "Globe",
  },
  {
    id: "ai-agents",
    title: "AI Agents",
    shortDesc:
      "Use intelligent agents capable of handling multi-step tasks and workflows.",
    fullDesc:
      "Use intelligent agents capable of handling multi-step tasks and workflows.",
    iconName: "Sparkle",
  },
];

export const privacySectionContent = {
  title: "Privacy by Design",
  headline: "Your Conversations Should Remain Yours",
  subtitle:
    "OpenChat is designed with privacy and user control as fundamental product principles.",
  pillars: [
    {
      id: "zero-retention",
      title: "Zero Data Retention",
      description:
        "OpenChat is designed so conversations are not retained beyond what is required to provide the service.",
      icon: "ShieldAlert",
    },
    {
      id: "encryption",
      title: "Encryption",
      description:
        "Sensitive interactions and user data are protected through encryption.",
      icon: "Lock",
    },
    {
      id: "client-control",
      title: "Client-Side Control",
      description:
        "OpenChat gives users greater control over their conversations and data instead of treating user interactions as data to be collected indefinitely.",
      icon: "Sliders",
    },
    {
      id: "confidential-computing",
      title: "Confidential Computing",
      description:
        "Trusted Execution Environment (TEE) technology can be used for supported workloads to provide additional protection while AI requests are being processed.",
      icon: "Cpu",
    },
    {
      id: "no-account",
      title: "No Account Required to Start",
      description:
        "Users can begin interacting with OpenChat without being forced through a traditional account creation process.",
      icon: "UserCheck",
    },
  ],
};

export const workflowsContent = {
  title: "Built for More Than Chat",
  subtitle:
    "OpenChat combines conversational AI with tools that allow users to move from asking a question to completing actual work.",
  items: [
    {
      id: "research",
      title: "Research",
      description: "Find, understand, and synthesize information.",
      icon: "Search",
    },
    {
      id: "create",
      title: "Create",
      description:
        "Generate content, ideas, images, and other creative outputs.",
      icon: "Palette",
    },
    {
      id: "build",
      title: "Build",
      description: "Write, understand, debug, and improve code.",
      icon: "Cpu",
    },
    {
      id: "analyze",
      title: "Analyze",
      description: "Work with documents, information, and complex topics.",
      icon: "BarChart3",
    },
    {
      id: "automate",
      title: "Automate",
      description: "Use AI agents to assist with multi-step workflows.",
      icon: "Zap",
    },
  ],
};

export const philosophyContent = {
  title: "Our Approach",
  headline: "Useful AI Without Compromising User Control",
  intro:
    "We believe AI products should be powerful without requiring users to give up control of their data. BAFtech is building AI experiences around three principles:",
  principles: [
    {
      id: "privacy",
      title: "Privacy",
      description:
        "Design systems that minimize unnecessary collection and retention of user data.",
      icon: "Shield",
    },
    {
      id: "intelligence",
      title: "Intelligence",
      description:
        "Give users access to capable AI models and tools for real-world tasks.",
      icon: "Lightbulb",
    },
    {
      id: "control",
      title: "Control",
      description:
        "Give users greater visibility and control over how they interact with AI.",
      icon: "SlidersHorizontal",
    },
  ],
};

export const contactContent = {
  title: "Get in Touch",
  description:
    "Have a question about BAFtech, our products, partnerships, or business enquiries?",
  generalEnquiriesLabel: "General Enquiries",
  email: "support@baftech.xyz",
};

export const footerContent = {
  brand: "BAFtech",
  tagline:
    "Building intelligent AI products with privacy, accessibility, and user control at their core.",
  columns: [
    {
      title: "Company",
      links: [
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Products",
      links: [{ name: "OpenChat", href: "#openchat" }],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#privacy-policy" },
        { name: "Terms of Service", href: "#terms-of-service" },
      ],
    },
  ],
  copyright: "© BAFtech. All rights reserved.",
};
