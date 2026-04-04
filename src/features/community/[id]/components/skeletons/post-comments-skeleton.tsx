import { Skeleton } from "@/components/ui/skeleton";

export default function PostCommentsSkeleton() {
  return (
    <div className="space-y-6">
      {/* Replies title */}
      <div className="flex items-center gap-2">
        <Skeleton className="h-6 w-28 rounded" />
        <Skeleton className="h-5 w-10 rounded" />
      </div>

      {/* Write a reply */}
      <div className="flex gap-3">
        <Skeleton className="size-8 rounded-full mt-1 shrink-0" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-20 w-full rounded-xl" />
          <div className="flex justify-end">
            <Skeleton className="h-8 w-24 rounded" />
          </div>
        </div>
      </div>

      <Skeleton className="h-5 w-full rounded" />

      {/* Comments list skeleton */}
      <div className="space-y-6">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex gap-3">
            <Skeleton className="size-8 rounded-full mt-0.5 shrink-0" />
            <div className="flex-1 space-y-2">
              {/* Comment header */}
              <div className="flex items-center gap-2 flex-wrap">
                <Skeleton className="h-4 w-20 rounded" />
                <Skeleton className="h-3 w-14 rounded" />
                <Skeleton className="h-3 w-4 rounded" />
                <Skeleton className="h-3 w-16 rounded" />
              </div>
              {/* Comment body */}
              <div className="space-y-2">
                <Skeleton className="h-4 w-4/5 rounded" />
                <Skeleton className="h-4 w-3/5 rounded" />
              </div>
              {/* Comment actions */}
              <div className="flex gap-3">
                <Skeleton className="h-7 w-14 rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
