import OnboardingForm from "@/features/(auth)/onboarding/components/onboarding-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complete your profile — CodDock",
  description:
    "Set up your CodDock onboarding to personalize your developer journey, get roadmap recommendations, and tailor your learning experience from day one.",

  keywords: [
    "CodDock onboarding",
    "developer onboarding",
    "complete profile",
    "personalized learning path",
    "developer roadmap setup",
    "coding journey setup",
    "onboarding form",
    "developer profile setup",
  ],

  metadataBase: new URL("https://coddock.vercel.app"),

  alternates: {
    canonical: "/onboarding",
  },

  applicationName: "CodDock",
  category: "education",
  creator: "@coddock",
  referrer: "origin-when-cross-origin",

  openGraph: {
    title: "Complete your profile — CodDock",
    description:
      "Finish onboarding on CodDock to get personalized roadmap guidance and a tailored developer learning experience.",
    url: "https://coddock.vercel.app/onboarding",
    siteName: "CodDock",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "https://coddock.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "CodDock — Complete your onboarding",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Complete your profile — CodDock",
    description:
      "Finish your CodDock onboarding to personalize your roadmap and learning journey.",
    images: ["https://coddock.vercel.app/og-image.png"],
    creator: "@coddock",
    site: "@coddock",
  },

  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function OnboardingPage() {
  return (
    <div className="min-h-dvh bg-background text-foreground flex flex-col">
      <OnboardingForm />
    </div>
  );
}
