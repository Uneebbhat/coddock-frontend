import { Metadata } from "next";
import CommunityCard from "@/components/common/community-card";
import CreatePostForm from "@/features/community/components/create-post-form";
import { Suspense } from "react";
import CreatePostFormSkeleton from "@/features/community/components/skeletons/create-post-form-skeleton";
import CommunityCardSkeleton from "@/components/skeletons/community-card-skeleton";

export const metadata: Metadata = {
  title: "Community Forum — CodDock",
  description:
    "Ask questions, share knowledge, and grow alongside fellow Pakistani developers. The CodDock Community Forum is where developers at every stage connect, collaborate, and learn together.",

  keywords: [
    "developer community Pakistan",
    "coding forum Pakistan",
    "programming questions answers",
    "Pakistani developers community",
    "CodDock forum",
    "web development community",
    "learn programming together",
    "developer discussion board",
  ],

  metadataBase: new URL("https://coddock.vercel.app"),

  alternates: {
    canonical: "/community-forum",
  },

  openGraph: {
    title: "Community Forum — CodDock",
    description:
      "Join the CodDock Community Forum. Ask questions, share your work, and grow with a community of developers building their careers in Pakistan.",
    url: "https://coddock.vercel.app/community-forum",
    siteName: "CodDock",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-community.png",
        width: 1200,
        height: 630,
        alt: "CodDock Community Forum — Connect, learn, and grow with Pakistani developers",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Community Forum — CodDock",
    description:
      "Join the CodDock Community Forum. Ask questions, share your work, and grow with a community of developers building their careers in Pakistan.",
    images: ["/og-community.png"],
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

export default function CommunityForumPage() {
  return (
    <>
      <section className="w-full rounded-md overflow-hidden relative bg-linear-to-r from-[#c7f238] via-[#d7f97c] to-[#e5fbc4]">
        <div className="relative z-10 flex items-center justify-between px-4 md:px-8 py-6 md:py-8">
          <div>
            <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-semibold mb-1">
              Community Forum
            </h2>
            <p className="text-white/80 text-xs md:text-sm">
              Ask questions, get answers, and grow with fellow developers.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div>
          {/* Create Post */}
          <Suspense fallback={<CreatePostFormSkeleton />}>
            <CreatePostForm />
          </Suspense>
          {/* Community Feed */}
          <div className="flex flex-col gap-5 mt-8">
            <Suspense fallback={<CommunityCardSkeleton />}>
              <CommunityCard />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
