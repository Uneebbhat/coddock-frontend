import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function LearningRoadmapCardSkeleton() {
  return (
    <Card>
      <CardContent className="space-y-5">
        {/* Mimic layout: flex stack on mobile, row on md+ */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-5">
          {/* Title and description */}
          <div className="space-y-2 flex-1">
            <Skeleton className="h-6 w-60 mb-2" /> {/* CardTitle skeleton */}
            <Skeleton className="h-4 w-full max-w-[420px]" />{" "}
            {/* CardDescription skeleton line 1 */}
            <Skeleton className="h-4 w-full max-w-[320px]" />{" "}
            {/* CardDescription skeleton line 2 */}
            <Skeleton className="h-4 w-full max-w-[220px]" />{" "}
            {/* CardDescription skeleton line 3 */}
          </div>
          {/* Get Started Button skeleton */}
          <div className="mt-4 md:mt-0 md:ml-4 shrink-0 flex justify-start md:justify-end">
            <Skeleton className="h-10 w-full md:w-32 rounded-md" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
