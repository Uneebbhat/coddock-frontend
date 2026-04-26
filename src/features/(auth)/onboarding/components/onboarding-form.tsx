"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import useOnboarding, {
  IOnboardingFormData,
} from "../hooks/useOnboarding";

// ── Step data ──────────────────────────────────────────────────────

const roles = [
  {
    value: "student",
    title: "University / College Student",
    description: "I'm currently studying CS, IT, or a related field.",
  },
  {
    value: "self-taught",
    title: "Self-taught Developer",
    description: "I've been learning programming through online resources.",
  },
  {
    value: "junior",
    title: "Junior Developer",
    description: "I have 0–2 years of professional experience.",
  },
  {
    value: "freelancer",
    title: "Looking to Freelance",
    description: "I want to build skills and land my first client.",
  },
  {
    value: "career-switcher",
    title: "Switching Careers",
    description: "I'm transitioning into tech from a different field.",
  },
];

const interests = [
  {
    value: "frontend",
    title: "Frontend Development",
    description: "HTML, CSS, JavaScript, React, and Next.js.",
  },
  {
    value: "backend",
    title: "Backend Development",
    description: "Node.js, APIs, databases, and server-side logic.",
  },
  {
    value: "fullstack",
    title: "Full-stack Engineering",
    description: "Frontend and backend combined into complete apps.",
  },
  {
    value: "ai",
    title: "AI & Machine Learning",
    description: "Python, ML fundamentals, deep learning, and LLMs.",
  },
  {
    value: "freelancing",
    title: "Freelancing",
    description: "Portfolio building, proposals, clients, and platforms.",
  },
];

const timeCommitments = [
  {
    value: "less-than-5",
    title: "Less than 5 hours",
    description: "A light pace — I'll learn when I can.",
  },
  {
    value: "5-10",
    title: "5–10 hours per week",
    description: "A steady pace — a couple of hours most days.",
  },
  {
    value: "10-20",
    title: "10–20 hours per week",
    description: "A serious pace — I'm committed to moving fast.",
  },
  {
    value: "more-than-20",
    title: "More than 20 hours",
    description: "Full focus — this is my top priority right now.",
  },
];

const steps = [
  {
    step: 1,
    label: "Your background",
    title: "What best describes you?",
    subtitle:
      "This helps us understand where you're starting from so we can personalise your experience.",
    options: roles,
    key: "role" as const,
  },
  {
    step: 2,
    label: "Your interest",
    title: "What do you want to learn?",
    subtitle:
      "Pick the area you're most excited about. We'll recommend the right roadmap for you.",
    options: interests,
    key: "interest" as const,
  },
  {
    step: 3,
    label: "Your time",
    title: "How much time can you commit each week?",
    subtitle:
      "We'll use this to set realistic weekly goals and keep your progress on track.",
    options: timeCommitments,
    key: "timeCommitment" as const,
  },
];

type OnboardingData = {
  role: string;
  interest: string;
  timeCommitment: string;
};

export default function OnboardingForm() {
  const { loading, submitOnboarding } = useOnboarding();
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<OnboardingData>({
    role: "",
    interest: "",
    timeCommitment: "",
  });

  const step = steps[currentStep];
  const currentValue = data[step.key];
  const isLast = currentStep === steps.length - 1;
  const canContinue = currentValue !== "";

  function handleSelect(value: string) {
    setData((prev) => ({ ...prev, [step.key]: value }));
  }

  function handleBack() {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  }

  async function handleContinue() {
    if (!canContinue) return;

    if (!isLast) {
      setCurrentStep((prev) => prev + 1);
      return;
    }

    if (!data.role || !data.interest || !data.timeCommitment) {
      return;
    }

    await submitOnboarding(data as IOnboardingFormData);
  }

  return (
    <>
      <header className="px-6 py-5 flex items-center justify-between border-b border-border">
        <Link href={"/"}>
          <Image src="/logo-green.png" alt="CodDock" width={150} height={150} />
        </Link>
        <div className="flex items-center justify-between gap-6">
          <span className="text-sm text-muted-foreground">
            Step {currentStep + 1} of {steps.length}
          </span>
          <ModeToggle />
        </div>
      </header>

      {/* ── Progress bar ────────────────────────────────── */}
      <div className="h-1 bg-muted">
        <div
          className="h-full bg-[#c7f238] transition-all duration-500 ease-out"
          style={{
            width: `${((currentStep + 1) / steps.length) * 100}%`,
          }}
        />
      </div>

      {/* ── Main content ────────────────────────────────── */}
      <main className="flex-1 flex items-start justify-center px-4 py-12 sm:py-16">
        <div className="w-full max-w-lg space-y-8">
          {/* Step label */}
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {step.label}
            </p>
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
              {step.title}
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {step.subtitle}
            </p>
          </div>

          {/* Choice cards */}
          <RadioGroup
            value={currentValue}
            onValueChange={handleSelect}
            className="space-y-2"
          >
            {step.options.map((option) => (
              <FieldLabel
                key={option.value}
                htmlFor={option.value}
                className={`block cursor-pointer rounded-xl border transition-all duration-150 ${
                  currentValue === option.value
                    ? "border-foreground bg-accent shadow-sm"
                    : "border-border bg-card hover:border-muted-foreground/40 hover:bg-accent/50"
                }`}
              >
                <Field orientation="horizontal" className="px-4 py-3.5">
                  <FieldContent>
                    <FieldTitle
                      className={`text-sm font-medium ${
                        currentValue === option.value
                          ? "text-foreground"
                          : "text-foreground/80"
                      }`}
                    >
                      {option.title}
                    </FieldTitle>
                    <FieldDescription className="text-xs text-muted-foreground mt-0.5">
                      {option.description}
                    </FieldDescription>
                  </FieldContent>
                  <RadioGroupItem
                    value={option.value}
                    id={option.value}
                    className="shrink-0"
                  />
                </Field>
              </FieldLabel>
            ))}
          </RadioGroup>

          {/* Navigation */}
          <div className="flex items-center justify-between pt-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleBack}
              disabled={currentStep === 0}
              className="gap-2 text-muted-foreground rounded-full"
            >
              <ArrowLeft className="size-4" />
              Back
            </Button>

            <Button onClick={handleContinue} disabled={!canContinue || loading}>
              {loading
                ? "Setting up your account..."
                : isLast
                  ? "Go to my roadmap"
                  : "Continue"}
              {!loading && <ArrowRight className="size-4" />}
            </Button>
          </div>
        </div>
      </main>

      {/* ── Footer ──────────────────────────────────────── */}
      <footer className="px-6 py-4 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">
          You can update these preferences anytime from your profile settings.
        </p>
      </footer>
    </>
  );
}
