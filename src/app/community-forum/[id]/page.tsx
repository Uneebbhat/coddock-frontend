import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import PostBody from "@/features/community/[id]/components/post-body";
import PostComments from "@/features/community/[id]/components/post-comments";
import { Suspense } from "react";
import PostBodySkeleton from "@/features/community/[id]/components/skeletons/post-body-skeleton";
import PostCommentsSkeleton from "@/features/community/[id]/components/skeletons/post-comments-skeleton";

/**
 * Page displaying details for a single community forum post, including its content and replies.
 */

export default function CommunityForumDetailPage() {
  return (
    <section>
      <div className="space-y-8">
        {/* Back to forum overview */}
        <Link
          href="/community-forum"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="size-4" />
          Back to Community Forum
        </Link>

        {/* Post content: cover image, details, actions */}
        <Suspense fallback={<PostBodySkeleton />}>
          <PostBody />
        </Suspense>

        <Separator />

        {/* List of comments and reply UI */}
        <Suspense fallback={<PostCommentsSkeleton />}>
          <PostComments />
        </Suspense>
      </div>
    </section>
  );
}
