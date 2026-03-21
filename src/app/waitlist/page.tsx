"use client"

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import useCreateWaitlist from "@/features/waitlist/hooks/useCreateWaitlist";
import WaitlistForm from "@/features/waitlist/components/wiatlist-form";
import Header from "@/components/header";

export default function WaitlistPage() {
  const {
    submitted,
  } = useCreateWaitlist()

  return (
    <div className="relative min-h-dvh overflow-hidden bg-background text-foreground flex flex-col">
      {/* Background ambient glows */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 size-[400px] rounded-full bg-violet-500/8 blur-[100px]" />
        <div className="absolute top-1/2 right-0 size-[350px] rounded-full bg-sky-500/8 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="relative z-10 flex flex-1 items-center justify-center px-4 py-12 sm:px-6">
        <div className="w-full max-w-5xl">
          {!submitted ? (
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

              {/* Left — Copy */}
              <div className="motion-safe:cd-animate-slide-up">
                <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl motion-safe:cd-delay-1">
                  Be first in line when{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-300 via-sky-300 to-violet-300">
                    CodDock launches.
                  </span>
                </h1>

                <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg motion-safe:cd-delay-2">
                  Get notified the moment we go live, lock in early access, and be part
                  of the community shaping CodDock from day one.
                </p>
                <ul className="mt-8 space-y-3 motion-safe:cd-delay-3">
                  <WaitlistPerk
                    title="Early access"
                    description="Get in before the public launch and be among the first to use the platform."
                  />
                  <WaitlistPerk
                    title="Launch discount on Premium"
                    description="Waitlist members get an exclusive discount when Premium goes live."
                  />
                  <WaitlistPerk
                    title="Shape the product"
                    description="Your feedback as an early member directly influences what we build next."
                  />
                  <WaitlistPerk
                    title="Founding member status"
                    description="A permanent badge recognizing you as a founding member of the CodDock community."
                  />
                </ul>
              </div>

              <WaitlistForm />
            </div>
          ) : (
            /* Success state */
            <div className="flex flex-col items-center justify-center text-center max-w-xl mx-auto motion-safe:cd-animate-slide-up">
              <div className="flex size-16 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-400 mb-6">
                <CheckCircle2 className="size-7" />
              </div>

              <Badge
                variant="outline"
                className="mb-5 gap-1.5 rounded-full px-3 py-1 text-xs"
              >
                <span className="inline-block size-1.5 rounded-full bg-emerald-400" />
                You&apos;re on the list
              </Badge>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                You&apos;re in.{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-300 via-sky-300 to-violet-300">
                  Welcome to CodDock.
                </span>
              </h2>

              <p className="mt-4 text-base leading-7 text-muted-foreground">
                We&apos;ve saved your spot. You&apos;ll be among the first to know when
                CodDock launches along with your early access link.
              </p>

              <Button variant="outline" className="mt-8 rounded-full" asChild>
                <Link href="/">
                  <ArrowLeft className="size-3.5" />
                  Back to home
                </Link>
              </Button>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/70 bg-background/40 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-xs text-muted-foreground sm:px-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo-white.png" alt="CodDock" width={80} height={80} />
            <span>
              © {new Date().getFullYear()} CodDock — Built for Pakistani developers who are ready to grow.
            </span>
          </div>
          <Link className="hover:text-foreground transition-colors" href="/privacy-policy">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  );
}

function WaitlistPerk({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-indigo-400/15 text-indigo-400 text-[11px] font-bold border border-indigo-400/20">
        ✓
      </span>
      <div>
        <span className="text-sm font-medium text-foreground">{title}</span>
        <span className="text-sm text-muted-foreground"> — {description}</span>
      </div>
    </li>
  );
}