"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Code2, MessageSquare, Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "@/components/mode-toggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Route } from "next";

const journeyItems: {
  title: string;
  href: string;
  description: string;
  icon: React.ReactNode;
}[] = [
  {
    title: "Learning Roadmaps",
    href: "/learning-roadmaps",
    description:
      "Follow structured career paths — frontend, backend, AI, and freelancing — with curated topics and projects at every stage.",
    icon: <BookOpen className="size-4 shrink-0 text-muted-foreground" />,
  },
  {
    title: "Coding Challenges",
    href: "/dashboard/challenges",
    description:
      "Sharpen your problem-solving with real programming challenges designed to prepare you for technical interviews.",
    icon: <Code2 className="size-4 shrink-0 text-muted-foreground" />,
  },
];

const communityItems: {
  title: string;
  href: string;
  description: string;
  icon: React.ReactNode;
}[] = [
  {
    title: "Community Forum",
    href: "/community-forum",
    description:
      "Ask questions, share knowledge, and collaborate with Pakistani developers on the same journey.",
    icon: <MessageSquare className="size-4 shrink-0 text-muted-foreground" />,
  },
  {
    title: "Developer Network",
    href: "/dashboard/network",
    description:
      "Connect with peers, find mentors, and grow your professional circle within the CodDock community.",
    icon: <Users className="size-4 shrink-0 text-muted-foreground" />,
  },
];

export default function PageHeader() {
  return (
    <>
      <header>
        <div className="flex items-center justify-between p-6 border-b">
          {/* Left */}
          <div className="flex items-center justify-between gap-10">
            {/* <MobileHeaderSheet /> */}
            <div className="hidden md:block">
              <Link href={"/"}>
                <Image
                  src={"/logo-green.png"}
                  alt="CodDock"
                  width={150}
                  height={150}
                  loading="lazy"
                />
              </Link>
            </div>
            <div>
              <NavigationMenu>
                <NavigationMenuItem className="hidden md:flex">
                  <NavigationMenuTrigger>
                    Start Your Journey
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-1 lg:w-[600px]">
                      {journeyItems.map((journey) => (
                        <ListItem
                          key={journey.title}
                          title={journey.title}
                          href={journey.href}
                          icon={journey.icon}
                        >
                          {journey.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem className="hidden md:flex">
                  <NavigationMenuTrigger>Community</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-1 lg:w-[600px]">
                      {communityItems.map((community) => (
                        <ListItem
                          key={community.title}
                          title={community.title}
                          href={community.href}
                          icon={community.icon}
                        >
                          {community.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenu>
            </div>
          </div>

          {/* Right */}
          <div>
            <div className="flex items-center gap-2 ml-2 sm:ml-4">
              <ModeToggle />

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-sm text-muted-foreground"
                  >
                    English (US)
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuGroup>
                    <DropdownMenuItem>English (US)</DropdownMenuItem>
                    <DropdownMenuItem>اردو</DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="size-8 cursor-pointer ring-2 ring-transparent transition hover:ring-border">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CD</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard">Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard">Settings</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive focus:text-destructive">
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

function ListItem({
  title,
  children,
  href,
  icon,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  href: string;
  icon?: React.ReactNode;
}) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href as Route}
          className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          {icon && <span className="mt-0.5">{icon}</span>}
          <div className="flex flex-col gap-0.5">
            <span className="text-sm font-medium leading-none">{title}</span>
            <span className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
              {children}
            </span>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
