import RoadmapCard from "@/components/common/roadmap-card";
import { Card, CardContent } from "@/components/ui/card";
import { Metadata, Route } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Learning Roadmaps — CodDock",
  description:
    "Pick a path, follow the steps, and build real projects at every stage. CodDock's structured learning roadmaps take Pakistani developers from beginner to job-ready — frontend, backend, AI, and freelancing.",

  keywords: [
    "developer learning roadmap Pakistan",
    "frontend development roadmap",
    "backend development roadmap",
    "how to learn programming Pakistan",
    "coding roadmap for beginners",
    "web development learning path",
    "AI development roadmap",
    "freelancing roadmap Pakistan",
    "CodDock roadmaps",
    "structured programming course Pakistan",
    "learn to code step by step",
    "junior developer roadmap",
  ],

  metadataBase: new URL("https://coddock.vercel.app"),

  alternates: {
    canonical: "/learning-roadmaps",
  },

  openGraph: {
    title: "Learning Roadmaps — CodDock",
    description:
      "No more guessing what to learn next. CodDock gives you structured roadmaps for frontend, backend, AI, and freelancing — with curated resources and real projects at every step.",
    url: "https://coddock.vercel.app/learning-roadmaps",
    siteName: "CodDock",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-roadmaps.png",
        width: 1200,
        height: 630,
        alt: "CodDock Learning Roadmaps — Structured paths from beginner to job-ready",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Learning Roadmaps — CodDock",
    description:
      "No more guessing what to learn next. CodDock gives you structured roadmaps for frontend, backend, AI, and freelancing — with curated resources and real projects at every step.",
    images: ["/og-learning-roadmaps.png"],
    creator: "@coddock",
    site: "@coddock",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function LearningRoadmapsPage() {
  return (
    <>
      <section className="w-full rounded-md overflow-hidden relative bg-linear-to-r from-[#c7f238] via-[#d7f97c] to-[#e5fbc4]">
        <div className="relative z-10 flex items-center justify-between px-4 md:px-8 py-6 md:py-8">
          <div>
            <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-semibold mb-1">
              Learning Roadmaps
            </h2>
            <p className="text-white/80 text-xs md:text-sm">
              Pick a path, follow the steps, and build real projects at every
              stage — no more guessing what to learn next.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col gap-5">
          <RoadmapCard />
          <RoadmapCard />
        </div>
      </section>
    </>
  );
}
