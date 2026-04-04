import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import { Route } from "next";

export default function RoadmapCard() {
  return (
    <>
      <Link
        href={"/learning-roadmaps/frontend-developer-roadmap" as Route}
        className="block"
        tabIndex={0}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Card className="p-6">
          <CardContent className="flex-1 flex flex-col gap-5 p-0">
            <div className="flex w-full">
              <div className="flex flex-col gap-4 w-full">
                <h3 className="text-lg font-semibold">
                  Frontend Developer Roadmap
                </h3>
                {/* Description */}
                <p className="text-sm text-muted-foreground w-full line-clamp-3">
                  Start your journey into frontend development with a
                  comprehensive, step-by-step roadmap. Master HTML, CSS, and
                  JavaScript fundamentals, then progress to frameworks like
                  React and Next.js. This path features hands-on mini-projects,
                  real-world use cases, and resources curated for developers in
                  Pakistan. Each stage is designed to build job-ready skills —
                  from UI/UX basics to API integration and deployment.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </>
  );
}
