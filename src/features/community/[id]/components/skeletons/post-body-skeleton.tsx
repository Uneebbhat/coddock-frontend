import { Skeleton } from "@/components/ui/skeleton";

export default function PostBodySkeleton() {
  return (
    <>
      {/* Cover image skeleton */}
      <div className="w-full h-64 sm:h-80 relative rounded-2xl overflow-hidden bg-muted mb-7">
        <Skeleton className="absolute inset-0 w-full h-full rounded-2xl" />
      </div>

      <div className="space-y-6">
        {/* Tags skeleton */}
        <div className="flex flex-wrap gap-2">
          <Skeleton className="h-7 w-20 rounded-full" />
          <Skeleton className="h-7 w-32 rounded-full" />
          <Skeleton className="h-7 w-16 rounded-full" />
        </div>

        {/* Title skeleton */}
        <Skeleton className="h-9 w-3/5 rounded" />

        {/* Author row skeleton */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <Skeleton className="size-9 rounded-full" />
            <div>
              <Skeleton className="h-4 w-24 mb-1 rounded" /> {/* Name */}
              <Skeleton className="h-3 w-36 rounded" /> {/* Username/email */}
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Skeleton className="size-4 rounded" /> {/* Clock icon */}
            <Skeleton className="h-3 w-20 rounded" /> {/* Date */}
          </div>
        </div>

        {/* Stats row skeleton */}
        <div className="flex items-center gap-5 text-sm border-y border-border py-3">
          <Skeleton className="h-5 w-24 rounded" />
          <Skeleton className="h-5 w-20 rounded" />
          <Skeleton className="h-5 w-20 rounded" />
        </div>

        {/* Body prose skeleton */}
        <div className="space-y-3 mt-7">
          <Skeleton className="h-4 w-full rounded" />
          <Skeleton className="h-4 w-11/12 rounded" />
          <Skeleton className="h-4 w-10/12 rounded" />
          <Skeleton className="h-4 w-3/5 rounded" />
          <Skeleton className="h-4 w-full rounded" />
          <Skeleton className="h-4 w-9/12 rounded" />
        </div>

        {/* Action bar skeleton */}
        <div className="flex items-center justify-between flex-wrap gap-3 pt-2">
          <div className="flex items-center gap-2">
            <Skeleton className="h-9 w-28 rounded-full" />
          </div>
        </div>
      </div>
    </>
  );
}
