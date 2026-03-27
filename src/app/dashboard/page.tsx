import { Button } from "@/components/ui/button";
import CommunityCard from "@/components/common/community-card";
import type { Metadata } from "next";
import LearningRoadmapCard from "@/components/common/learning-roadmap-card";

export const metadata: Metadata = {
  title: "Dashboard | Manage Your Developer Activity",
  description:
    "Access your personalized developer dashboard to manage posts, track activity, monitor discussions, and stay updated with your community interactions.",
  keywords: [
    "developer dashboard",
    "user dashboard",
    "manage posts",
    "track activity",
    "developer profile",
    "dashboard analytics",
    "community activity",
    "developer platform",
  ],
  openGraph: {
    title: "Developer Dashboard | Manage Your Activity",
    description:
      "View and manage your posts, track engagement, and stay connected with your developer activity in one centralized dashboard.",
    url: "https://coddock.vercel.app/dashboard",
    type: "website",
    siteName: "DevConnect",
    images: [
      {
        url: "/og/dashboard.png",
        width: 1200,
        height: 630,
        alt: "Developer Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Developer Dashboard | Manage Your Activity",
    description:
      "Monitor your developer activity, manage posts, and stay updated with your interactions in your personalized dashboard.",
    images: ["/og/dashboard.png"],
  },
};

export default function DashboardPage() {
  return (
    <>
      {/* Community Forum Section */}
      <section>
        <div className="space-y-6">
          {/* Heading */}
          <div className="space-y-2">
            <h2 className="text-2xl md:text-4xl font-semibold">
              Community Forum
            </h2>
            <p className="text-muted-foreground">
              Manage your activity, track your contributions, and stay connected
              with your developer journey
            </p>
          </div>

          {/* Card grid (now using Card component) */}
          <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-6">
            <CommunityCard />
            <CommunityCard />
          </div>
          <div className="w-full flex justify-center">
            <Button variant={"link"}>View all</Button>
          </div>
        </div>
      </section>

      {/* Learning Roadmap Section */}
      <section>
        <div className="space-y-6">
          {/* Heading */}
          <div className="space-y-2">
            <h2 className="text-2xl md:text-4xl font-semibold">
              Learning Roadmaps
            </h2>
            <p className="text-muted-foreground">
              Unsure where to begin your learning journey? Explore these
              expert-curated roadmaps to get started with confidence.
            </p>
          </div>

          {/* Learning Roadmap Cards */}
          <div className="space-y-4">
            <LearningRoadmapCard />
            <LearningRoadmapCard />
            <LearningRoadmapCard />
            <LearningRoadmapCard />
          </div>
        </div>
      </section>
    </>
  );
}
