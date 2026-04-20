import type { Metadata } from "next";
import { Fraunces, Geist, JetBrains_Mono } from "next/font/google";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
  variable: "--font-display",
});

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "David Challoner — Authorization, Reliability, Agentic AI",
  description:
    "Tech Lead on Access SRE at Google. Chapter author of The Site Reliability Workbook. Building at the edges of authorization, data governance, and agentic AI.",
  openGraph: {
    title: "David Challoner",
    description:
      "Authorization · Reliability · Agentic AI. Access SRE at Google.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${geist.variable} ${mono.variable}`}
    >
      <body className="min-h-screen grain fibers">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
