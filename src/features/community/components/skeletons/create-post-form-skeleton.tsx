import { Skeleton } from "@/components/ui/skeleton";

export default function CreatePostFormSkeleton() {
  return (
    <div className="rounded-md shadow-sm border p-4 flex flex-col gap-4">
      {/* Top: Avatar + username + textarea skeleton */}
      <div className="flex items-start gap-3">
        <Skeleton className="size-8 mt-1 rounded-full" /> {/* Avatar */}
        <div className="w-full">
          <Skeleton className="h-4 w-20 mb-2 rounded" /> {/* Username */}
          <Skeleton className="h-[50px] w-full rounded" /> {/* Textarea */}
        </div>
      </div>
      {/* Bottom: two button skeletons */}
      <div className="flex justify-between items-center">
        <Skeleton className="h-7 w-28 rounded" /> {/* Image/Video button */}
        <Skeleton className="h-7 w-16 rounded" /> {/* Post button */}
      </div>
    </div>
  );
}
