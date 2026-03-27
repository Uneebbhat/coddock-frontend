"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Heart, MessageSquare } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { Route } from "next";

export default function CommunityCard() {
  const handleLikeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <Link
      href={"/community/post/1" as Route}
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
          <div className="flex flex-col items-center gap-5 w-full">
            <div className="flex flex-col gap-4 w-full">
              <h3 className="text-lg font-semibold">
                How to optimize React use Effect hooks?
              </h3>
              {/* Description */}
              <p className="text-sm text-muted-foreground line-clamp-2 w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut...
              </p>
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-1">
                <Button
                  variant="outline"
                  size="sm"
                  className="pointer-events-none bg-muted/40 text-xs px-2 py-0 min-h-0 h-6 border-none"
                >
                  Technical
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="pointer-events-none bg-muted/40 text-xs px-2 py-0 min-h-0 h-6 border-none"
                >
                  Dynamic programming
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="pointer-events-none bg-muted/40 text-xs px-2 py-0 min-h-0 h-6 border-none"
                >
                  OOP
                </Button>
              </div>
            </div>
            <div className="w-full h-[200px] flex items-center justify-center overflow-hidden rounded-md">
              <Image
                src="/card.png"
                alt="Card"
                fill={false}
                width={1200}
                height={300}
                className="w-full h-[300px] object-cover object-center rounded-md"
                style={{ background: "#f8f8f8" }}
              />
            </div>
          </div>
          {/* Stats */}
          <div className="flex flex-wrap gap-2 mt-2 text-muted-foreground text-xs">
            <Button variant={"ghost"}>
              <Eye />
              <span>536K View</span>
            </Button>
            <Button variant={"ghost"} onClick={handleLikeClick}>
              <Heart />
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
