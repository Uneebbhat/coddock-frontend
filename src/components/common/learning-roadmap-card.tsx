import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "../ui/button";

export default function LearningRoadmapCard() {
  return (
    <>
      <Card>
        <CardContent className="space-y-5">
          {/* Make content stack on small screens and row on md+ */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-5">
            <div className="space-y-2 flex-1">
              <CardTitle>Frontend Developer Roadmap</CardTitle>
              <CardDescription>
                Launch your career as a frontend developer with this immersive
                path. Created in collaboration with Mozilla MDN, ensuring that
                you&apos;ll learn the latest best practices for modern web
                development, and stand out from other job applicants.
              </CardDescription>
            </div>
            {/* Button below on mobile, inline on md+ */}
            <div className="mt-4 md:mt-0 md:ml-4 shrink-0 flex justify-start md:justify-end">
              <Button className="w-full md:w-auto">Get Started</Button>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <AvatarGroup className="grayscale">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://github.com/maxleiter.png"
                  alt="@maxleiter"
                />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://github.com/evilrabbit.png"
                  alt="@evilrabbit"
                />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
            </AvatarGroup>
            <span className="text-sm text-muted-foreground sm:ml-2">
              200+ Participants
            </span>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
