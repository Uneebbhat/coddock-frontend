"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { Eye, EyeOff } from "lucide-react"
import useTogglePassword from "@/hooks/useTogglePassword"

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { showPassword, handleTogglePassword } = useTogglePassword()

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form>
        <FieldGroup>
          <div className="flex flex-col items-center gap-2 text-center">
            <ModeToggle />
            <h1 className="text-xl font-bold">Welcome to CodDock</h1>
            <FieldDescription>
              Already have an account? <Link href="/">Sign in</Link>
            </FieldDescription>
          </div>
          <Field>
            <FieldLabel htmlFor="name">Name</FieldLabel>
            <Input
              id="name"
              type="name"
              placeholder="John Doe"
              required
              name="name"
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              type="email"
              placeholder="johndoe@example.com"
              required
              name="email"
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                name="password"
              />

              {
                showPassword ? <EyeOff className="absolute top-2 right-2 w-5 h-5 cursor-pointer" onClick={handleTogglePassword} /> : <Eye className="absolute top-2 right-2 w-5 h-5 cursor-pointer" onClick={handleTogglePassword} />
              }
            </div>
          </Field>
          <Field>
            <Button>Create Account</Button>
          </Field>
          <FieldSeparator>Or</FieldSeparator>
          <Field>
            <Button variant="outline" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                  fill="currentColor"
                />
              </svg>
              Continue with Google
            </Button>
          </Field>
        </FieldGroup>
      </form>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <Link href="/terms">Terms of Service</Link>{" "}
        and <Link href="/privacy-policy">Privacy Policy</Link>.
      </FieldDescription>
    </div>
  )
}
