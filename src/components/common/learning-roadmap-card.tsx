import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

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
              <Button className="w-full md:w-auto">
                <Link href={`/learning-roadmaps/${"frontend"}`}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
