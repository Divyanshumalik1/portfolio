import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Divyanshu Malik — AI Software Engineer",
  description:
    "AI Software Engineer building multi-agent systems, hybrid RAG, LLM infrastructure and real-time computer vision. Currently at Amgen.",
  keywords: ["Divyanshu Malik", "AI Engineer", "RAG", "Agentic AI", "LLM", "Computer Vision", "Gaussian Splatting", "Portfolio"],
  authors: [{ name: "Divyanshu Malik" }],
  openGraph: {
    title: "Divyanshu Malik — AI Software Engineer",
    description: "Multi-agent systems, hybrid RAG, LLM infra and real-time surgical vision.",
    type: "website",
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#05010f",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
