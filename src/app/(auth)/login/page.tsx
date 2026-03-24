import { LoginForm } from "@/features/(auth)/login/components/login-form"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login to your account — CodDock",
  description:
    "Access your CodDock account to continue your developer journey, track your progress, and stay on your roadmap.",

  metadataBase: new URL("https://coddock.vercel.app"),

  alternates: {
    canonical: "/login",
  },

  applicationName: "CodDock",
  category: "education",
  creator: "@coddock",
  referrer: "origin-when-cross-origin",

  openGraph: {
    title: "Login to your account — CodDock",
    description:
      "Sign in to CodDock and continue your journey with structured roadmaps and real-world projects.",
    url: "https://coddock.vercel.app/login",
    siteName: "CodDock",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "https://coddock.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "CodDock — Developer ecosystem platform",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Login to your account — CodDock",
    description:
      "Sign in to CodDock and continue your developer journey with structured learning and real projects.",
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

export default function LoginPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  )
}
