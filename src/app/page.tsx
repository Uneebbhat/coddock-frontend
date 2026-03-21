import Link from "next/link";
import { FeatureCard } from "@/features/home/components/feature-card";
import { Faq } from "@/features/home/components/faq";
import { HeroImage } from "@/features/home/components/hero-img";
import { Metric } from "@/features/home/components/metric";
import { MiniCard } from "@/features/home/components/mini-card";
import { PriceCard } from "@/features/home/components/price-card";
import { SectionHeading } from "@/features/home/components/section-heading";
import Image from "next/image";
import Header from "@/components/header";

export default function HomePage() {
  return (
    <div className="relative min-h-dvh overflow-hidden bg-background text-foreground">
      <Header />

      <main className="relative z-10">
        {/* HERO SECTION */}
        <section className="relative w-full overflow-hidden min-h-[660px] flex items-center justify-center px-4 pt-14 pb-10 sm:px-6 sm:pt-20 sm:pb-16">
          {/* Hero background image */}
          <div
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            aria-hidden="true"
          >
            <div className="w-full h-full">
              <HeroImageBackground />
            </div>
            <div className="absolute inset-0 bg-linear-to-b from-background/70 via-background/80 to-background/90" />
          </div>

          {/* Hero body */}
          <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-3 py-1 text-xs text-muted-foreground backdrop-blur mx-auto motion-safe:cd-animate-slide-up motion-safe:cd-delay-1">
              <span className="inline-block size-1.5 rounded-full bg-emerald-400" />
              Built for Pakistani developers — Learn, Grow, and Earn.
            </div>

            <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl motion-safe:cd-animate-slide-up motion-safe:cd-delay-2">
              From random tutorials to a career that pays.{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-300 via-sky-300 to-violet-300">
                Your full developer journey, in one place.
              </span>
            </h1>

            <p className="mt-4 max-w-xl mx-auto text-pretty text-base leading-7 text-muted-foreground sm:text-lg motion-safe:cd-animate-slide-up motion-safe:cd-delay-3">
              CodDock is the developer ecosystem built for Pakistan. Follow structured
              roadmaps, sharpen your skills with real challenges, prep for interviews,
              connect with a community, and land your first freelance client or remote
              job — all in one place.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center justify-center motion-safe:cd-animate-slide-up motion-safe:cd-delay-4">
              <Link
                href="/waitlist"
                className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm shadow-black/25 transition hover:opacity-90"
              >
                Join the waitlist
              </Link>
              <Link
                href="#features"
                className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-background/40 px-6 text-sm font-semibold text-foreground backdrop-blur transition hover:bg-background/70"
              >
                Explore the platform
              </Link>
            </div>

            <dl className="mt-8 grid grid-cols-3 gap-4 rounded-3xl border border-border bg-card/40 p-4 backdrop-blur sm:p-5 mx-auto w-full max-w-lg motion-safe:cd-animate-slide-up motion-safe:cd-delay-5">
              <Stat label="Learn" value="Structured" />
              <Stat label="Grow" value="Measurable" />
              <Stat label="Earn" value="Real Income" />
            </dl>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground">
              <Pill>CS students</Pill>
              <Pill>Self-taught developers</Pill>
              <Pill>Freelancers</Pill>
              <Pill>Junior engineers</Pill>
              <Pill>Career switchers</Pill>
            </div>
          </div>
        </section>
        {/* End HERO SECTION */}

        {/* FEATURES SECTION */}
        <section
          id="features"
          className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 cd-cv-auto"
        >
          <SectionHeading
            eyebrow="Platform Features"
            title="Everything a Pakistani developer needs to go from zero to hired."
            subtitle="Stop piecing things together across YouTube, WhatsApp groups, and random blogs. CodDock brings structure, practice, community, and income — all under one roof."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Structured Roadmaps"
              description="Follow career-specific learning paths — frontend, backend, AI, and freelancing — with curated topics, projects, and resources at every stage."
              badge="Learn"
            />
            <FeatureCard
              title="Coding Challenges"
              description="Practice real programming problems that sharpen your logic and prepare you for technical interviews at Pakistani and international companies."
              badge="Practice"
            />
            <FeatureCard
              title="Interview Preparation"
              description="Access company-specific interview insights, technical question banks, and preparation guides tailored to the Pakistani job market."
              badge="Get Hired"
            />
            <FeatureCard
              title="AI-Powered Tools"
              description="Generate your resume, get portfolio feedback, discover what to learn next, and write winning freelance proposals — all powered by AI."
              badge="AI Tools"
            />
            <FeatureCard
              title="Developer Community"
              description="Ask questions, share knowledge, and collaborate with a growing community of Pakistani developers who are on the same journey."
              badge="Community"
            />
            <FeatureCard
              title="Company Insights"
              description="Explore hiring processes, salary ranges, tech stacks, and real interview experiences at top Pakistani tech companies before you apply."
              badge="Earn"
            />
          </div>
        </section>

        {/* DASHBOARD SECTION */}
        <section
          id="dashboard"
          className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 cd-cv-auto"
        >
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <SectionHeading
                eyebrow="Progress Dashboard"
                title="Track your journey. Earn your way. Stay consistent."
                subtitle="Your dashboard shows exactly where you are, what you've built, and what's standing between you and your first job or freelance client."
                align="left"
              />

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <MiniCard
                  title="Step tracking"
                  description="Always know what you've completed and exactly what comes next."
                />
                <MiniCard
                  title="Gamification"
                  description="Earn points, badges, and achievements as you learn, build, and grow."
                />
                <MiniCard
                  title="Portfolio milestones"
                  description="Ship real projects at key checkpoints and build a portfolio that proves your skills."
                />
                <MiniCard
                  title="Weekly goals"
                  description="Stay on track with achievable weekly targets so progress never stalls."
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
                  <Metric label="XP earned" value="840" hint="points total" />
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
                      Next milestone: &quot;Build a full-stack app with auth & deployment&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING SECTION */}
        <section
          id="pricing"
          className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 cd-cv-auto"
        >
          <SectionHeading
            eyebrow="Pricing"
            title="Start free. Unlock everything when we launch."
            subtitle="CodDock is free to get started. Premium is coming soon — join the waitlist now to get early access and a launch discount."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-2 mx-auto">
            <PriceCard
              title="Free"
              price="$0"
              description="A genuinely useful starting point — structured learning, real tools, and community access at no cost."
              features={[
                "Structured learning roadmaps",
                "Step-by-step progress tracking",
                "Basic coding challenges",
                "Community forum access",
                "Progress dashboard",
                "XP & achievement badges",
                "Streak tracking & weekly goal planning",
                "Freelance proposal writer (standard AI model)",
                "Pakistani company insights — hiring processes & tech stacks",
                "Basic interview prep resources",
              ]}
              cta={{ label: "Join the waitlist", href: "/waitlist" }}
            />

            <PriceCard
              featured
              title="Premium"
              price="$10"
              description="Unlock the full power of CodDock — advanced AI, deeper insights, and everything built to get you hired or freelancing faster."
              features={[
                "Everything in Free",
                "AI resume builder",
                "AI portfolio feedback",
                "Freelance proposal writer (advanced AI model)",
                "AI-powered learning recommendations",
                "Full interview prep library with company-specific questions",
                "Pakistani company insights — salaries, interview experiences & culture",
                "Advanced coding challenges",
                "Priority community support",
              ]}
              cta={{ label: "Join the waitlist", href: "/waitlist" }}
            // footnote="Coming soon — waitlist gets early access"
            />
          </div>
        </section>

        {/* FAQ SECTION */}
        <section
          id="faq"
          className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 cd-cv-auto"
        >
          <SectionHeading
            eyebrow="FAQ"
            title="Questions, answered."
            subtitle="CodDock is built for Pakistani developers who are serious about moving forward."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <Faq
              q="Who is CodDock built for?"
              a="CodDock is built for Pakistani university students, self-taught developers, junior engineers, and anyone looking to break into freelancing or land their first remote job. Whether you're writing your first line of code or looking to sharpen your skills, CodDock gives you a clear path forward."
            />

            <Faq
              q="What&apos;s included in the MVP?"
              a="The MVP includes user accounts, structured career roadmaps, step-by-step progression tracking, and a dashboard to monitor your learning journey. More features — including AI tools, coding challenges, and community forums — are coming in future updates."
            />

            <Faq
              q="How does CodDock help me start freelancing?"
              a="CodDock includes a dedicated freelancing roadmap and AI-powered tools for writing proposals, building your portfolio, and positioning yourself for clients. Company insights also help you understand what skills are in demand in the Pakistani market."
            />

            <Faq
              q="Will CodDock cover Pakistani tech companies specifically?"
              a="Yes. A core part of the platform is Company Insights — covering hiring processes, salary ranges, interview experiences, and tech stacks at Pakistani companies. This is designed to give local developers an edge that generic global platforms simply don&apos;t offer."
            />

            <Faq
              q="What roadmaps will be available?"
              a="Planned roadmaps include Frontend Development, Backend Development, Full-stack Engineering, AI & Machine Learning, and Freelancing. Each roadmap includes topics, real-world projects, and curated resources so you always know what to build next."
            />

            <Faq
              q="Can I suggest features or roadmaps?"
              a="Absolutely. Early users will have a direct channel to share feedback, suggest roadmap topics, and shape the platform. CodDock is being built with the Pakistani developer community at the center of every decision."
            />
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20 cd-cv-auto">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-linear-to-r from-indigo-500/15 via-sky-500/10 to-violet-500/15 p-8 backdrop-blur sm:p-10">
            <div className="absolute inset-0 opacity-40">
              <div className="absolute -top-24 -left-24 size-72 rounded-full bg-indigo-400/20 blur-3xl" />
              <div className="absolute -bottom-24 -right-24 size-72 rounded-full bg-violet-400/20 blur-3xl" />
            </div>
            <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <p className="text-sm font-semibold tracking-tight">
                  Pakistan&apos;s developer ecosystem starts here.
                </p>
                <p className="mt-1 max-w-xl text-sm text-muted-foreground">
                  Create your account, pick a roadmap, and take the first step toward
                  learning, growing, and earning as a developer.
                </p>
              </div>
              <Link
                href="/waitlist"
                className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm shadow-black/25 transition hover:opacity-90"
              >
                Join the waitlist — it&apos;s free
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-border/70 bg-background/40 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-sm text-muted-foreground sm:px-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <div>
              <Image src={"/logo-white.png"} alt="CodDock" width={100} height={100} />
            </div>
            <span>© {new Date().getFullYear()} CodDock — Built for Pakistani developers who are ready to grow.</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link className="hover:text-foreground" href="#features">
              Features
            </Link>
            <Link className="hover:text-foreground" href="#pricing">
              Pricing
            </Link>
            <Link className="hover:text-foreground" href="#faq">
              FAQ
            </Link>
            <Link className="hover:text-foreground" href="/privacy-policy">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HeroImageBackground() {
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