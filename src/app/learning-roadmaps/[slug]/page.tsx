import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import RoadmapHeader from "@/features/learning-roadmaps/components/roadmap-header";
import RoadmapContent from "@/features/learning-roadmaps/components/roadmap-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learning Roadmaps | CodDock",
  description:
    "Explore structured learning roadmaps for frontend, backend, full-stack, AI, and freelancing. Built for Pakistani developers who want a clear, step-by-step path from beginner to job-ready.",
  keywords: [
    "developer learning roadmaps",
    "coding roadmaps Pakistan",
    "frontend backend fullstack roadmap",
    "web development learning path",
    "AI machine learning roadmap",
    "freelancing roadmap for developers",
    "structured coding curriculum",
    "Pakistani developer career roadmap",
    "CodDock learning roadmaps",
    "learn programming step by step",
    "software development roadmap 2025",
    "beginner to professional developer path",
  ],
  authors: [{ name: "CodDock", url: "https://coddock.vercel.app" }],
  creator: "CodDock",
  publisher: "CodDock",
  metadataBase: new URL("https://coddock.vercel.app"),
  alternates: {
    canonical: "/learning-roadmaps",
  },
  openGraph: {
    title: "Learning Roadmaps | CodDock",
    description:
      "From frontend to AI — CodDock's structured roadmaps give Pakistani developers a clear, project-driven path to their first job or freelance client. Pick your track and start building.",
    url: "https://coddock.vercel.app/learning-roadmaps",
    siteName: "CodDock",
    images: [
      {
        url: "/hero-img.png",
        width: 1200,
        height: 630,
        alt: "CodDock Learning Roadmaps — Structured developer paths for Pakistani developers",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Learning Roadmaps | CodDock",
    description:
      "Structured, project-driven roadmaps for frontend, backend, AI, and freelancing — built for Pakistani developers ready to go from zero to hired.",
    images: ["/hero-img.png"],
    creator: "@coddock",
    site: "@coddock",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Education",
};

export default function LearningRoadmapsDetailPage() {
  return (
    <div className="space-y-8">
      {/* ── Back nav ─────────────────────────────────────── */}
      <Link
        href="/learning-roadmaps"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="size-4" />
        All Roadmaps
      </Link>

      {/* ── Header card ──────────────────────────────────── */}
      <RoadmapHeader />

      {/* ── Legend ───────────────────────────────────────── */}
      {/* <div className="flex items-center gap-3 text-xs text-muted-foreground flex-wrap">
        <span className="font-medium text-foreground">Legend:</span>
        {Object.entries(itemTypeMeta).map(([key, val]) => (
          <span
            key={key}
            className={`inline-flex items-center rounded-full border px-2.5 py-0.5 font-medium ${val.color}`}
          >
            {val.label}
          </span>
        ))}
      </div> */}

      {/* ── Topic tree ───────────────────────────────────── */}
      <RoadmapContent />

      {/* ── Bottom CTA ───────────────────────────────────── */}
      <div className="rounded-2xl border border-[#c7f238]/30 bg-[#c7f238]/5 p-6 text-center space-y-3">
        <p className="text-lg font-semibold tracking-tight">
          🎉 You&apos;ve completed the frontend development roadmap!
        </p>
        <p className="text-sm text-muted-foreground">
          Time to build your portfolio project and start applying. You&apos;ve
          got this.
        </p>
        <Button className="rounded-full bg-[#c7f238] text-gray-900 hover:brightness-95 mt-2">
          View next roadmap
        </Button>
      </div>
    </div>
  );
}
