import { Button } from "@/components/ui/button";
import { ThumbsUp, MessageSquare, Clock, Eye } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";

export default function PostBody() {
  return (
    <>
      <div className="w-full h-64 sm:h-80 relative rounded-2xl overflow-hidden bg-muted">
        <Image
          src="/card.png"
          alt="How to optimize React useEffect hooks"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      {/* ── Main content ─────────────────────────────────── */}
      <div className="space-y-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Technical</Badge>
          <Badge variant="secondary">Dynamic programming</Badge>
          <Badge variant="secondary">OOP</Badge>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-semibold leading-snug tracking-tight">
          How to optimize React useEffect hooks?
        </h1>

        {/* Author row */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <Link href={"/"}>
              <HoverCard>
                <HoverCardTrigger className="flex items-center gap-3">
                  {" "}
                  <Avatar className="size-9">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>VN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium leading-none">Vincent</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      @vincent · username@kemail.com
                    </p>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="p-4 flex items-center gap-4 pointer-events-none">
                  <Avatar className="size-10">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>VN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold">Vincent</p>
                    <p className="text-xs text-muted-foreground">
                      Full Stack Developer. Passionate about modern web and open
                      source.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </Link>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="size-3.5" />
            <span>19 Oct 2025</span>
          </div>
        </div>

        {/* Stats row */}
        <div className="flex items-center gap-5 text-sm text-muted-foreground border-y border-border py-3">
          <span className="flex items-center gap-1.5">
            <Eye className="size-4" />
            536K views
          </span>
          <span className="flex items-center gap-1.5">
            <ThumbsUp className="size-4" />
            9,022 likes
          </span>
          <span className="flex items-center gap-1.5">
            <MessageSquare className="size-4" />
            185 replies
          </span>
        </div>

        {/* Body */}
        <div className="prose prose-gray dark:prose-invert max-w-none text-sm leading-7 text-muted-foreground">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            ullam ad molestiae tenetur! Fugiat exercitationem esse consequatur
            et amet soluta. Doloribus, nihil. Officiis, explicabo. Aperiam
            assumenda dignissimos numquam veritatis non porro commodi.
          </p>
          <p>
            Obcaecati, ex? Quibusdam officia aliquam sunt ducimus aspernatur
            quisquam velit voluptas quidem enim officiis possimus nostrum
            commodi eveniet recusandae, nesciunt quos quasi exercitationem neque
            quia nihil in cum et. Praesentium ut nam ad cumque laborum,
            excepturi eius accusamus minima, nisi libero, fuga doloribus ea!
          </p>
          <p>
            Dolor saepe accusamus non cumque, iure maiores ratione doloribus
            obcaecati ut minus sed enim labore architecto eius ipsam atque
            libero eos optio quasi commodi officiis temporibus nemo unde
            placeat. Nesciunt sunt necessitatibus voluptatibus quo est debitis
            quod error dicta optio porro saepe magnam quae assumenda,
            consectetur ratione accusantium dolorem nulla reprehenderit.
          </p>
        </div>

        {/* Action bar */}
        <div className="flex items-center justify-between flex-wrap gap-3 pt-2">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2 rounded-full">
              <ThumbsUp className="size-4" />
              Like
              <span className="text-muted-foreground">9,022</span>
            </Button>
          </div>
          {/* <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="gap-2 text-muted-foreground rounded-full"
              >
                <Bookmark className="size-4" />
                Save
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="gap-2 text-muted-foreground rounded-full"
              >
                <Share2 className="size-4" />
                Share
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="gap-2 text-muted-foreground rounded-full"
              >
                <Flag className="size-4" />
                Report
              </Button>
            </div> */}
        </div>
      </div>
    </>
  );
}
