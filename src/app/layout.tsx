import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://baftech.xyz"),
  title: "BAFtech | Building AI Products for the Next Generation",
  description:
    "BAFtech is an AI technology company building intelligent products that make advanced AI more accessible, private, and useful for everyday users and businesses. Discover OpenChat, our privacy-first generative AI platform.",
  keywords: [
    "BAFtech",
    "OpenChat",
    "Privacy AI",
    "Generative AI",
    "Confidential Computing",
    "Multi-Model AI",
    "AI Agents",
    "Zero Retention AI",
  ],
  authors: [{ name: "BAFtech" }],
  openGraph: {
    title: "BAFtech | Building AI Products for the Next Generation",
    description:
      "Intelligent AI products designed around privacy, accessibility, and user control. Explore OpenChat and practical AI tools.",
    url: "https://baftech.xyz",
    siteName: "BAFtech",
    images: [
      {
        url: "/images/desktop.png",
        width: 1200,
        height: 630,
        alt: "BAFtech OpenChat Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BAFtech | Building AI Products for the Next Generation",
    description:
      "Privacy-focused AI platforms and intelligent multimodal applications by BAFtech.",
    images: ["/images/desktop.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-black text-white antialiased selection:bg-zinc-800 selection:text-white min-h-screen font-geist">
        {children}
      </body>
    </html>
  );
}
