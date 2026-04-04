import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { BookOpen, Clock, Star, Users } from "lucide-react";

export default function RoadmapHeader() {
  return (
    <>
      <div className="rounded-2xl border border-border bg-card p-6 space-y-5">
        {/* Top row */}
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="secondary">Beginner</Badge>
              <Badge variant="outline" className="gap-1">
                <Clock className="size-3" />
                6–9 months
              </Badge>
            </div>
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Frontend Development
            </h1>
            <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
              A step-by-step guide to becoming a modern frontend developer.
              Follow each topic in order, complete the projects, and build a
              portfolio that proves your skills.
            </p>
          </div>
          {/* <div className="flex items-center gap-2 shrink-0">
            <Button
              variant="ghost"
              size="sm"
              className="gap-1.5 text-muted-foreground"
            >
              <Bookmark className="size-4" />
              Save
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="gap-1.5 text-muted-foreground"
            >
              <Share2 className="size-4" />
              Share
            </Button>
          </div> */}
        </div>

        {/* Stats strip */}
        <div className="flex items-center gap-6 text-sm text-muted-foreground flex-wrap">
          <span className="flex items-center gap-1.5">
            <Users className="size-4" />
            12.4K enrolled
          </span>
          <span className="flex items-center gap-1.5">
            <Star className="size-4 fill-amber-400 text-amber-400" />
            4.8 rating
          </span>
          <span className="flex items-center gap-1.5">
            <BookOpen className="size-4" />
            37 topics
          </span>
        </div>

        <Separator />

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium">Your progress</span>
            <span className="text-muted-foreground">0 / 37 completed</span>
          </div>
          <Progress value={0} className="h-2" />
          <p className="text-xs text-muted-foreground">
            Start checking off topics as you learn them.
          </p>
        </div>
      </div>
    </>
  );
}
