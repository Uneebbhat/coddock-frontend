import Link from "next/link";
import { FeatureCard } from "@/features/home/components/feature-card";
import { Faq } from "@/features/home/components/faq";
import { HeroImage } from "@/features/home/components/hero-img";
import { Metric } from "@/features/home/components/metric";
import { MiniCard } from "@/features/home/components/mini-card";
import { PriceCard } from "@/features/home/components/price-card";
import { SectionHeading } from "@/features/home/components/section-heading";

export default function HomePage() {
  return (
    <div className="relative min-h-dvh overflow-hidden bg-background text-foreground">
      <header className="relative z-10 motion-safe:cd-animate-slide-up">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-sm shadow-black/30">
              <span className="text-sm font-semibold tracking-tight">CD</span>
            </div>
            <span className="text-sm font-semibold tracking-tight">CodDock</span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <Link className="hover:text-foreground" href="#roadmaps">
              Roadmaps
            </Link>
            <Link className="hover:text-foreground" href="#dashboard">
              Progress
            </Link>
            <Link className="hover:text-foreground" href="#pricing">
              Pricing
            </Link>
            <Link className="hover:text-foreground" href="#faq">
              FAQ
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden rounded-full border border-border bg-background/40 px-4 py-2 text-sm font-medium text-foreground backdrop-blur transition hover:bg-background/70 sm:inline-flex"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm shadow-black/25 transition hover:opacity-90"
            >
              Get started
            </Link>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        {/* HERO SECTION REWRITE */}
        <section className="relative w-full overflow-hidden min-h-[660px] flex items-center justify-center px-4 pt-14 pb-10 sm:px-6 sm:pt-20 sm:pb-16">
          {/* Hero background image */}
          <div
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            aria-hidden="true"
          >
            {/* The background */}
            <div className="w-full h-full">
              <HeroImageBackground />
            </div>
            <div className="absolute inset-0 bg-linear-to-b from-background/70 via-background/80 to-background/90" />
          </div>
          {/* Hero body */}
          <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-3 py-1 text-xs text-muted-foreground backdrop-blur mx-auto motion-safe:cd-animate-slide-up motion-safe:cd-delay-1">
              <span className="inline-block size-1.5 rounded-full bg-emerald-400" />
              MVP: Structured roadmaps + real progress tracking
            </div>

            <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl motion-safe:cd-animate-slide-up motion-safe:cd-delay-2">
              Stop guessing what to learn. Build real skills.{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-300 via-sky-300 to-violet-300">
                Become a developer who ships.
              </span>
            </h1>

            <p className="mt-4 max-w-xl mx-auto text-pretty text-base leading-7 text-muted-foreground sm:text-lg motion-safe:cd-animate-slide-up motion-safe:cd-delay-3">
              CodDock gives you a clear path from beginner to job-ready developer.
              Follow structured roadmaps, complete real-world steps, and turn your
              learning into a portfolio that actually matters.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center justify-center motion-safe:cd-animate-slide-up motion-safe:cd-delay-4">
              <Link
                href="/signup"
                className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm shadow-black/25 transition hover:opacity-90"
              >
                Start your journey
              </Link>
              <Link
                href="#roadmaps"
                className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-background/40 px-6 text-sm font-semibold text-foreground backdrop-blur transition hover:bg-background/70"
              >
                View roadmaps
              </Link>
            </div>

            <dl className="mt-8 grid grid-cols-3 gap-4 rounded-3xl border border-border bg-card/40 p-4 backdrop-blur sm:p-5 mx-auto w-full max-w-lg motion-safe:cd-animate-slide-up motion-safe:cd-delay-5">
              <Stat label="Roadmaps" value="Structured" />
              <Stat label="Progress" value="Measurable" />
              <Stat label="Outcome" value="Portfolio-ready" />
            </dl>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground">
              <Pill>Students</Pill>
              <Pill>Self-taught developers</Pill>
              <Pill>Career switchers</Pill>
              <Pill>Project-based learning</Pill>
            </div>
          </div>
        </section>
        {/* End HERO SECTION REWRITE */}

        <section
          id="roadmaps"
          className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 cd-cv-auto"
        >
          <SectionHeading
            eyebrow="Roadmaps"
            title="No more random tutorials. Follow a clear path."
            subtitle="Every roadmap is designed to take you from fundamentals to real-world projects—step by step, without confusion."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Frontend Foundations"
              description="Master HTML, CSS, and JavaScript, then move into React and Next.js with real projects at every stage."
              badge="Beginner"
            />
            <FeatureCard
              title="Backend Foundations"
              description="Learn APIs, databases, authentication, and deployment by building production-ready systems."
              badge="Beginner"
            />
            <FeatureCard
              title="Full-stack Builder"
              description="Combine frontend and backend skills to ship complete applications with clean architecture."
              badge="Intermediate"
            />
            <FeatureCard
              title="DSA for Interviews"
              description="Prepare for technical interviews with structured practice and consistent progression."
              badge="Focused"
            />
            <FeatureCard
              title="Career Readiness"
              description="Turn your skills into opportunities with guided steps for resumes, projects, and interviews."
              badge="Outcome"
            />
            <FeatureCard
              title="Portfolio Sprint"
              description="Transform your learning into polished projects that you can confidently showcase."
              badge="Build"
            />
          </div>
        </section>

        <section
          id="dashboard"
          className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 cd-cv-auto"
        >
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <SectionHeading
                eyebrow="Progress dashboard"
                title="See your progress. Stay consistent. Keep moving forward."
                subtitle="Track every step you complete, build momentum, and stay focused on what actually matters."
                align="left"
              />

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <MiniCard
                  title="Step tracking"
                  description="Know exactly what you've completed and what&apos;s next."
                />
                <MiniCard
                  title="Streaks"
                  description="Build daily consistency and maintain momentum."
                />
                <MiniCard
                  title="Milestones"
                  description="Reach key checkpoints by shipping real projects."
                />
                <MiniCard
                  title="Weekly goals"
                  description="Stay focused with clear, achievable weekly targets."
                />
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-linear-to-tr from-indigo-500/10 via-sky-500/10 to-violet-500/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-card/50 shadow-2xl shadow-black/40 backdrop-blur">
                <div className="border-b border-border px-5 py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold tracking-tight">
                        Your dashboard
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Example preview (MVP)
                      </p>
                    </div>
                    <div className="rounded-full border border-border bg-background/40 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
                      Week 3
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 p-5 sm:grid-cols-2">
                  <Metric label="Steps completed" value="24" hint="+6 this week" />
                  <Metric label="Current streak" value="5" hint="days" />
                  <Metric label="Milestones" value="2" hint="projects shipped" />
                  <Metric label="Next up" value="APIs" hint="REST fundamentals" />
                </div>

                <div className="px-5 pb-6">
                  <div className="rounded-2xl border border-border bg-background/40 p-4 backdrop-blur">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold tracking-tight">
                        Roadmap progress
                      </p>
                      <p className="text-xs text-muted-foreground">62%</p>
                    </div>
                    <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div className="h-full w-[62%] rounded-full bg-linear-to-r from-indigo-400 via-sky-400 to-violet-400" />
                    </div>
                    <p className="mt-3 text-xs text-muted-foreground">
                      Next milestone: “Build a CRUD app with auth”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 cd-cv-auto"
        >
          <SectionHeading
            eyebrow="Pricing"
            title="Start for free. Upgrade when you’re serious."
            subtitle="Get access to structured learning at no cost. Unlock advanced tools as you grow."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <PriceCard
              title="Free"
              price="$0"
              description="Explore structured roadmaps and start building your foundation."
              features={[
                "Access to roadmaps",
                "Step-by-step tracking",
                "Basic progress dashboard",
              ]}
              cta={{ label: "Start for free", href: "/signup" }}
            />

            <PriceCard
              featured
              title="Pro"
              price="$10"
              description="Stay consistent and accelerate your growth with advanced tracking tools."
              features={[
                "Everything in Free",
                "Weekly goal planning",
                "Streak tracking",
                "Project milestones",
              ]}
              cta={{ label: "Upgrade to Pro", href: "/signup" }}
              footnote="Coming soon"
            />

            <PriceCard
              title="Teams"
              price="$20"
              description="Perfect for learning groups, bootcamps, and communities."
              features={[
                "Shared roadmaps",
                "Group progress tracking",
                "Admin tools",
              ]}
              cta={{ label: "Contact us", href: "/contact" }}
              footnote="Planned for later"
            />
          </div>
        </section>

        <section
          id="faq"
          className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 cd-cv-auto"
        >
          <SectionHeading
            eyebrow="FAQ"
            title="Answers, quickly."
            subtitle="We&apos;re building CodDock for clarity and momentum."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <Faq
              q="Is CodDock only for beginners?"
              a="No. CodDock is designed for beginners, self-taught developers, and early-career engineers. Whether you're starting from scratch or refining your skills, the platform helps you move forward with structure."
            />

            <Faq
              q="What&apos;s included in the MVP?"
              a="The MVP includes user accounts, structured roadmaps, step-by-step progression, and a dashboard to track your learning journey."
            />

            <Faq
              q="Will more features be added later?"
              a="Yes. Future updates will include coding challenges, community features, and AI-powered tools. Right now, the focus is on building a strong core experience."
            />

            <Faq
              q="Can I suggest a roadmap?"
              a="Yes. We plan to introduce a roadmap submission system. Early users will also be able to share feedback directly."
            />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20 cd-cv-auto">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-linear-to-r from-indigo-500/15 via-sky-500/10 to-violet-500/15 p-8 backdrop-blur sm:p-10">
            <div className="absolute inset-0 opacity-40">
              <div className="absolute -top-24 -left-24 size-72 rounded-full bg-indigo-400/20 blur-3xl" />
              <div className="absolute -bottom-24 -right-24 size-72 rounded-full bg-violet-400/20 blur-3xl" />
            </div>
            <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <p className="text-sm font-semibold tracking-tight">
                  Ready to start your roadmap?
                </p>
                <p className="mt-1 max-w-xl text-sm text-muted-foreground">
                  Create your account, pick a roadmap, and start tracking steps
                  today.
                </p>
              </div>
              <Link
                href="/signup"
                className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm shadow-black/25 transition hover:opacity-90"
              >
                Create account
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-border/70 bg-background/40 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-sm text-muted-foreground sm:px-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <div className="grid size-8 place-items-center rounded-xl bg-primary text-primary-foreground">
              <span className="text-xs font-semibold tracking-tight">CD</span>
            </div>
            <span>© {new Date().getFullYear()} CodDock — Built for developers who want direction, not noise.</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link className="hover:text-foreground" href="#roadmaps">
              Roadmaps
            </Link>
            <Link className="hover:text-foreground" href="#pricing">
              Pricing
            </Link>
            <Link className="hover:text-foreground" href="#faq">
              FAQ
            </Link>
            <Link className="hover:text-foreground" href="/privacy">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Helper to use HeroImage as background
function HeroImageBackground() {
  // This function wraps HeroImage in a way that it will stretch and cover the background responsively
  // If HeroImage is an img, you might refactor to use absolute/fill for background
  // Otherwise, treat as block-level component
  return (
    <div className="absolute inset-0 w-full h-full">
      <div className="w-full h-full object-cover">
        <HeroImage />
      </div>
      <div className="absolute inset-0 bg-background/70"></div>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-background/40 px-3 py-1 backdrop-blur">
      {children}
    </span>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-background/30 px-3 py-3 text-center backdrop-blur">
      <dt className="text-[11px] uppercase tracking-wider text-muted-foreground">
        {label}
      </dt>
      <dd className="mt-1 text-sm font-semibold tracking-tight">{value}</dd>
    </div>
  );
}
