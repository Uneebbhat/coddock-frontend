import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MoreInfoDialog } from "./more-info-dialog";

export default function ProfilePage() {
  return (
    <>
      <div className="mx-auto w-full max-w-6xl py-8">
        <div className="grid gap-6">
          <Card className="overflow-hidden border-border/70 shadow-sm">
            <div className="h-44 w-full bg-linear-to-r from-[#0A66C2] via-[#0077B5] to-[#00A0DC]" />
            <CardContent className="relative px-5 pb-6 pt-0 md:px-8">
              <div className="-mt-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <Avatar className="size-28 border-4 border-background shadow-md">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback className="text-2xl">CD</AvatarFallback>
                </Avatar>
                <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
                  <MoreInfoDialog />
                  <Button className="w-full sm:w-auto">Edit profile</Button>
                </div>
              </div>

              <div className="mt-4 space-y-1">
                <h1 className="text-2xl font-semibold tracking-tight">User Name</h1>
                <p className="text-sm text-muted-foreground">
                  Full Stack Developer | React, Next.js, TypeScript
                </p>
                <p className="text-sm text-muted-foreground">
                  Lahore, Punjab, Pakistan . 500+ connections
                </p>
                <p className="text-sm font-medium text-[#0A66C2] dark:text-[#4EA1F3]">
                  email@example.com
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-3 text-xs text-muted-foreground">
                <span className="rounded-full bg-muted px-3 py-1.5">
                  Member since June 2018
                </span>
                <span className="rounded-full bg-muted px-3 py-1.5">
                  Open to opportunities
                </span>
                <span className="rounded-full bg-muted px-3 py-1.5">
                  12 profile views this week
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6 border-border/70 shadow-sm">
          <CardHeader className="border-b border-border/70">
            <CardTitle>About</CardTitle>
          </CardHeader>
          <CardContent className="pt-5">
            <p className="text-sm leading-6 text-muted-foreground">
              Passionate developer focused on building practical products and helping
              learners grow through real-world coding projects. This section can be
              used as your LinkedIn style summary.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
