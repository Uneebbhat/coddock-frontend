import { z } from "zod"

export const RoleEnum = z.enum([
  "STUDENT",
  "SELF_TAUGHT",
  "JUNIOR",
  "FREELANCER",
  "CAREER_SWITCHER",
  "OTHER"
]);

const WaitlistSchema = z.object({
  email: z
    .string({
      error: "Please enter your email address.",
    })
    .email("Please enter a valid email address."),
  role: RoleEnum.optional().or(z.literal("").transform(() => undefined)).refine(
    (val) => val === undefined || RoleEnum.options.includes(val),
    {
      message: "Please select a valid role.",
    }
  ),
});

export default WaitlistSchema