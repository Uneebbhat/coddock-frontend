import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Send, ThumbsUp } from "lucide-react";

const comments = [
  {
    id: "1",
    author: { name: "Ahmed Raza", username: "ahmed_raza", avatar: "" },
    content:
      "Great post! I usually wrap expensive calculations inside useMemo and only use useEffect for actual side effects like API calls. Helped me cut re-renders by almost 40% in a recent project.",
    createdAt: "2 hours ago",
    likes: 12,
  },
  {
    id: "2",
    author: { name: "Fatima Khan", username: "fatimak", avatar: "" },
    content:
      "One thing I'd add — always clean up your effects. If you're setting up a subscription or a timer inside useEffect, return a cleanup function or you'll get memory leaks.",
    createdAt: "5 hours ago",
    likes: 8,
  },
  {
    id: "3",
    author: { name: "Zubair Ali", username: "zubair_dev", avatar: "" },
    content:
      "The dependency array is where most people go wrong. ESLint's exhaustive-deps rule is your best friend here — enable it and follow what it tells you.",
    createdAt: "1 day ago",
    likes: 21,
  },
];

export default function PostComments() {
  return (
    <>
      <div className="space-y-6">
        <h2 className="text-lg font-semibold tracking-tight">
          Replies{" "}
          <span className="text-muted-foreground font-normal text-base">
            ({comments.length})
          </span>
        </h2>

        {/* Write a reply */}
        <div className="flex gap-3">
          <Avatar className="size-8 shrink-0 mt-1">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>ME</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-2">
            <Textarea
              placeholder="Write a reply..."
              className="resize-none rounded-xl text-sm min-h-[80px]"
            />
            <div className="flex justify-end">
              <Button>
                <Send className="size-3.5" />
                Post reply
              </Button>
            </div>
          </div>
        </div>

        <Separator />

        {/* Comment list */}
        <div className="space-y-6">
          {comments.map((comment) => (
            <div key={comment.id} className="flex gap-3">
              <Avatar className="size-8 shrink-0 mt-0.5">
                <AvatarImage src={comment.author.avatar} />
                <AvatarFallback>{comment.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-2">
                {/* Comment header */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-medium">
                    {comment.author.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    @{comment.author.username}
                  </span>
                  <span className="text-xs text-muted-foreground">·</span>
                  <span className="text-xs text-muted-foreground">
                    {comment.createdAt}
                  </span>
                </div>
                {/* Comment body */}
                <p className="text-sm leading-6 text-muted-foreground">
                  {comment.content}
                </p>
                {/* Comment actions */}
                <div className="flex items-center gap-3">
                  <Button variant={"ghost"}>
                    <ThumbsUp className="size-3.5" />
                    {comment.likes}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
