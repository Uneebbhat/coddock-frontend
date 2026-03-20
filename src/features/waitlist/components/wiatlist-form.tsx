"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import useCreateWaitlist from "../hooks/useCreateWaitlist";
import { Spinner } from "@/components/ui/spinner";

export default function WaitlistForm() {
  const {
    formData,
    loading,
    handleOnChange,
    handleOnSubmit
  } = useCreateWaitlist()

  return (
    <>
      <div className="relative motion-safe:cd-animate-slide-up motion-safe:cd-delay-2">
        <div className="absolute -inset-4 rounded-[2.5rem] bg-linear-to-tr from-indigo-500/10 via-sky-500/10 to-violet-500/10 blur-2xl" />

        <Card className="relative bg-card/50 backdrop-blur shadow-2xl shadow-black/40 rounded-[2rem] border-border">
          <CardHeader>
            <CardTitle className="text-lg tracking-tight">Reserve your spot</CardTitle>
            <CardDescription>Takes 20 seconds. No spam, ever.</CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleOnSubmit} className="space-y-5">

              {/* Email */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="email"
                  className="text-xs uppercase tracking-wider text-muted-foreground"
                >
                  Email address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleOnChange}
                  required
                  name="email"
                  className="rounded-xl bg-background/60 backdrop-blur focus-visible:ring-indigo-400/30 focus-visible:border-indigo-400/60"
                />
              </div>

              <Button
                disabled={loading}
                className="w-full rounded-full"
                size="lg"
              >
                {loading ? (
                  <>
                    <Spinner />
                    Reserving your spot…
                  </>
                ) : (
                  "Join the waitlist →"
                )}
              </Button>

              <p className="text-center text-[11px] text-muted-foreground/60">
                No spam. No credit card. Unsubscribe anytime.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
