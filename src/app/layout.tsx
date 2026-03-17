import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "CodDock – Developer Roadmaps, Project-Based Learning & Progress Tracking",
    template: "%s | CodDock",
  },

  description:
    "CodDock is a structured learning platform for developers. Follow step-by-step roadmaps, build real-world projects, track your progress, and create a job-ready portfolio faster.",

  keywords: [
    "developer roadmap",
    "learn coding",
    "coding roadmap platform",
    "project based learning coding",
    "developer portfolio builder",
    "learn web development",
    "frontend roadmap",
    "backend roadmap",
    "full stack developer learning path",
    "coding progress tracker",
  ],

  authors: [{ name: "CodDock" }],
  creator: "CodDock",
  publisher: "CodDock",

  metadataBase: new URL("https://coddock.com"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "CodDock - Learn Coding with Structured Roadmaps",
    description:
      "Follow developer roadmaps, build real projects, and track your progress to become job-ready faster.",
    url: "https://coddock.com",
    siteName: "CodDock",
    images: [
      {
        url: "/og-image.png", // create this later
        width: 1200,
        height: 630,
        alt: "CodDock - Developer Learning Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "CodDock - Developer Roadmaps & Learning Platform",
    description:
      "Structured roadmaps, real projects, and progress tracking to help you become a job-ready developer.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable, "dark")}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
