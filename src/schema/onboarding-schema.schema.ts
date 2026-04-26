import z from "zod";

export const OnboardingRoleEnum = z.enum(
  ["student", "self-taught", "junior", "freelancer", "career-switcher"],
  {
    error: "Please select what best describes you.",
  },
);

export const OnboardingInterestEnum = z.enum(
  ["frontend", "backend", "fullstack", "ai", "freelancing"],
  {
    error: "Please select what you want to learn.",
  },
);

export const OnboardingTimeCommitmentEnum = z.enum(
  ["less-than-5", "5-10", "10-20", "more-than-20"],
  {
    error: "Please select your weekly time commitment.",
  },
);

const OnboardingSchema = z.object({
  role: OnboardingRoleEnum,
  interest: OnboardingInterestEnum,
  timeCommitment: OnboardingTimeCommitmentEnum,
});

export default OnboardingSchema;