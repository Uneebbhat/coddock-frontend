import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export default function CommunityCardSkeleton() {
  return (
    <Card className="p-6 flex flex-col gap-6 md:flex-row md:items-center bg-background relative">
      {/* Time - top right */}
      <Skeleton className="absolute top-6 right-6 h-4 w-20 rounded" />

      <CardContent className="flex-1 flex flex-col gap-5 p-0">
        {/* Author row */}
        <div className="flex flex-col imd:tems-center gap-2 sm:flex-row sm:items-center sm:gap-3">
          <Skeleton className="w-9 h-9 rounded-full" />
          <div className="flex flex-col md:items-center sm:items-start">
            <Skeleton className="h-4 w-28 mb-1 rounded" /> {/* Name */}
            <Skeleton className="h-3 w-36 rounded" /> {/* Email */}
          </div>
        </div>

        {/* Title, description, tags */}
        <div className="flex w-full">
          <div className="flex flex-col gap-4 w-full">
            <Skeleton className="h-5 w-2/3 rounded" /> {/* Title */}
            <Skeleton className="h-4 w-full rounded" /> {/* Desc line 1 */}
            <Skeleton className="h-4 w-5/6 rounded" /> {/* Desc line 2 */}
            <Skeleton className="h-4 w-3/4 rounded" /> {/* Desc line 3 */}
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-1">
              <Skeleton className="h-6 w-16 rounded-full" />
              <Skeleton className="h-6 w-24 rounded-full" />
              <Skeleton className="h-6 w-12 rounded-full" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-2 mt-2 text-xs">
          <Skeleton className="h-8 w-24 rounded" />
          <Skeleton className="h-8 w-20 rounded" />
          <Skeleton className="h-8 w-20 rounded" />
        </div>
      </CardContent>
    </Card>
  );
}
