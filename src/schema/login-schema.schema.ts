import z from "zod";

const LoginSchema = z.object({
  email: z
    .string({
      error: "Email is required"
    })
    .email({
      message: "Please enter a valid email address"
    }),
  password: z.string({
    error: "Password is required"
  }).min(8, {
    error: "Password must be at least 8 characters long"
  }).max(100, {
    error: "Password must be under 100 characters"
  })
})

export default LoginSchema