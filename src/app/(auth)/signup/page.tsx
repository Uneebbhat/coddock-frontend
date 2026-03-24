import { SignupForm } from "@/features/(auth)/signup/components/signup-form"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create your account — CodDock",
  description:
    "Join CodDock and start your developer journey today. Follow structured roadmaps, track your progress, and build the skills you need to land your first job or freelance client.",

  metadataBase: new URL("https://coddock.vercel.app"),

  alternates: {
    canonical: "/signup",
  },

  applicationName: "CodDock",
  category: "education",
  creator: "@coddock",
  referrer: "origin-when-cross-origin",

  openGraph: {
    title: "Create your account — CodDock",
    description:
      "Join CodDock and start your developer journey. Structured roadmaps, real projects, and everything you need to go from learning to earning.",
    url: "https://coddock.vercel.app/signup",
    siteName: "CodDock",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "https://coddock.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "CodDock — The developer ecosystem built for Pakistan",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Create your account — CodDock",
    description:
      "Join CodDock and start your developer journey. Structured roadmaps, real projects, and everything you need to go from learning to earning.",
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

export default function SignupPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SignupForm />
      </div>
    </div>
  )
}
