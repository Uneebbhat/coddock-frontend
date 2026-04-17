"use client";

import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { FloatingPaths } from "@/components/floating-paths";
import {
  ChevronLeftIcon,
  AtSignIcon,
  LockIcon,
  User,
  Eye,
  EyeOff,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import useSignup from "../hooks/useSignup";
import useTogglePassword from "@/hooks/useTogglePassword";
import { Spinner } from "@/components/ui/spinner";
import { Separator } from "@/components/ui/separator";

export function SignupAuthPage() {
  const { showPassword, handleTogglePassword } = useTogglePassword();
  const { formData, loading, handleOnChange, handleOnSubmit } = useSignup();

  return (
    <main className="relative md:h-screen md:overflow-hidden lg:grid lg:grid-cols-2">
      <div className="relative hidden h-full flex-col border-r bg-secondary p-10 lg:flex dark:bg-secondary/20">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-background" />
        <Image src={"/logo-white.png"} alt="CodDock" width={150} height={150} />

        <div className="z-10 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-xl">
              &ldquo;This Platform has helped me to save time and serve my
              clients faster than ever before.&rdquo;
            </p>
            <footer className="font-mono font-semibold text-sm">
              ~ Ali Hassan
            </footer>
          </blockquote>
        </div>
        <div className="absolute inset-0">
          <FloatingPaths position={1} />
          <FloatingPaths position={-1} />
        </div>
      </div>
      <div className="relative flex min-h-screen flex-col justify-center px-8">
        {/* Top Shades */}
        <div
          aria-hidden
          className="absolute inset-0 isolate -z-10 opacity-60 contain-strict"
        >
          <div className="absolute top-0 right-0 h-320 w-140 -translate-y-87.5 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,--theme(--color-foreground/.06)_0,hsla(0,0%,55%,.02)_50%,--theme(--color-foreground/.01)_80%)]" />
          <div className="absolute top-0 right-0 h-320 w-60 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="absolute top-0 right-0 h-320 w-60 -translate-y-87.5 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)]" />
        </div>
        <Button asChild className="absolute top-7 left-5" variant="ghost">
          <Link href="/">
            <ChevronLeftIcon data-icon="inline-start" />
            Home
          </Link>
        </Button>

        <div className="mx-auto space-y-8 sm:w-sm">
          <Image
            src={"/logo-white.png"}
            alt="CodDock"
            width={150}
            height={150}
          />
          <div className="flex flex-col space-y-1">
            <h1 className="font-bold text-2xl tracking-wide">
              Create your account
            </h1>
            <p className="text-base text-muted-foreground">
              Sign up and start your journey with CodDock.
            </p>
          </div>
          {/* <div className="space-y-2">
            <Button className="w-full">
              <GoogleIcon data-icon="inline-start" />
              Continue with Google
            </Button>
          </div> */}

          {/* <AuthDivider>OR</AuthDivider> */}

          <form className="space-y-4" onSubmit={handleOnSubmit}>
            <p className="text-start text-muted-foreground text-xs">
              Enter your credentials to create your account
            </p>
            <InputGroup>
              <InputGroupInput
                id="name"
                type="name"
                placeholder="John Doe"
                required
                name="name"
                onChange={handleOnChange}
                value={formData.name}
              />
              <InputGroupAddon align="inline-start">
                <User />
              </InputGroupAddon>
            </InputGroup>

            <InputGroup>
              <InputGroupInput
                id="email"
                type="email"
                placeholder="johndoe@example.com"
                required
                name="email"
                onChange={handleOnChange}
                value={formData.email}
              />
              <InputGroupAddon align="inline-start">
                <AtSignIcon />
              </InputGroupAddon>
            </InputGroup>

            <InputGroup>
              <InputGroupInput
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                name="password"
                onChange={handleOnChange}
                value={formData.password}
              />
              {showPassword ? (
                <EyeOff
                  className="absolute top-2 right-2 w-5 h-5 cursor-pointer"
                  onClick={handleTogglePassword}
                />
              ) : (
                <Eye
                  className="absolute top-2 right-2 w-5 h-5 cursor-pointer"
                  onClick={handleTogglePassword}
                />
              )}
              <InputGroupAddon align="inline-start">
                <LockIcon />
              </InputGroupAddon>
            </InputGroup>

            <Button
              disabled={
                loading ||
                !formData.name ||
                !formData.email ||
                !formData.password
              }
              className="w-full"
            >
              {loading ? (
                <>
                  <Spinner />
                  Signup
                </>
              ) : (
                "Signup"
              )}
            </Button>
          </form>

          <Separator />

          <p className="text-center">
            Already have an account?{" "}
            <Link href={"/login"} className="underline">
              Login
            </Link>
          </p>

          <p className="mt-8 text-muted-foreground text-sm">
            By clicking continue, you agree to our{" "}
            <Link
              className="underline underline-offset-4 hover:text-primary"
              href={"/terms"}
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              className="underline underline-offset-4 hover:text-primary"
              href={"/privacy-policy"}
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  );
}

// const GoogleIcon = (props: React.ComponentProps<"svg">) => (
//   <svg
//     fill="currentColor"
//     viewBox="0 0 24 24"
//     xmlns="http://www.w3.org/2000/svg"
//     {...props}
//   >
//     <g>
//       <path d="M12.479,14.265v-3.279h11.049c0.108,0.571,0.164,1.247,0.164,1.979c0,2.46-0.672,5.502-2.84,7.669   C18.744,22.829,16.051,24,12.483,24C5.869,24,0.308,18.613,0.308,12S5.869,0,12.483,0c3.659,0,6.265,1.436,8.223,3.307L18.392,5.62   c-1.404-1.317-3.307-2.341-5.913-2.341C7.65,3.279,3.873,7.171,3.873,12s3.777,8.721,8.606,8.721c3.132,0,4.916-1.258,6.059-2.401   c0.927-0.927,1.537-2.251,1.777-4.059L12.479,14.265z" />
//     </g>
//   </svg>
// );
