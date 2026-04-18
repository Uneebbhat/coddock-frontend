import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, ThumbsUp, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "../ui/badge";

export default function CommunityCard() {
  return (
    <Link
      href={"/community-forum/1"}
      className="block"
      tabIndex={0}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Card className="p-6 flex flex-col gap-6 md:flex-row md:items-center bg-background relative">
        {/* Time - top right */}
        <span className="absolute top-6 right-6 text-muted-foreground text-sm md:text-xs">
          5 hours ago
        </span>
        <CardContent className="flex-1 flex flex-col gap-5 p-0">
          {/* Author */}
          {/* On small screens, stack vertically; on md+, row */}
          <div className="flex flex-col imd:tems-center gap-2 sm:flex-row sm:items-center sm:gap-3">
            <Avatar className="w-9 h-9">
              <AvatarImage src="/avatar-animated.png" alt="Theresa Webb" />
              <AvatarFallback>TW</AvatarFallback>
            </Avatar>
            <div className="flex flex-col md:items-center sm:items-start">
              <span className="font-semibold text-base">Theresa Webb</span>
              <span className="text-muted-foreground text-sm md:text-xs">
                username@email.com
              </span>
            </div>
          </div>
          {/* Title */}
          <div className="flex w-full">
            <div className="flex flex-col gap-4 w-full">
              <h3 className="text-lg font-semibold">
                How to optimize React use Effect hooks?
              </h3>
              {/* Description */}
              <p className="text-sm text-muted-foreground w-full line-clamp-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellendus totam quia neque dolorem. Beatae quo accusantium
                excepturi incidunt ratione error. Neque incidunt cum eius fuga
                dolorum! Nesciunt tempore autem, molestiae, libero reiciendis
                natus, in dolor facilis dicta aut corporis. Consequuntur impedit
                consequatur debitis, veniam recusandae ipsa. Velit alias
                voluptatibus ipsum cum magni perspiciatis totam? Excepturi
                repellat optio delectus dolores ipsum alias? Reprehenderit
                sapiente beatae ratione nisi ut velit! Quia nihil quos, dicta
                consectetur facere reiciendis libero officia, perspiciatis
                necessitatibus ipsum modi laudantium assumenda corporis quisquam
                mollitia rem magnam vitae molestiae voluptates alias? Debitis
                natus aliquam commodi molestiae, impedit saepe voluptate!
              </p>
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-1">
                <Badge variant="outline">Technical</Badge>
                <Badge variant="outline">Dynamic programming</Badge>
                <Badge variant="outline">OOP</Badge>
              </div>
            </div>
            {/* Removed image section */}
          </div>
          {/* Stats */}
          <div className="flex flex-wrap gap-2 mt-2 text-muted-foreground text-xs">
            <Button variant={"ghost"}>
              <Eye />
              <span>536K View</span>
            </Button>
            <Button variant={"ghost"}>
              <ThumbsUp />
              <span>9.622 Like</span>
            </Button>
            <Button variant={"ghost"}>
              <MessageSquare />
              <span>185 Reply</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
