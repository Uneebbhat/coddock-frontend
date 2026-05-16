"use client";

import { Github, Instagram, Linkedin, Youtube } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const socials = [
  { label: "GitHub", icon: Github, placeholder: "https://github.com/username" },
  {
    label: "LinkedIn",
    icon: Linkedin,
    placeholder: "https://linkedin.com/in/username",
  },
  {
    label: "Youtube",
    icon: Youtube,
    placeholder: "https://youtube.com/@username",
  },
  {
    label: "Instagram",
    icon: Instagram,
    placeholder: "https://instagram.com/username",
  },
];

export function MoreInfoDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full sm:w-auto">
          More info
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>More info</DialogTitle>
          <DialogDescription>
            Add your social links and other public profile URLs.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 space-y-3">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <div
                key={social.label}
                className="rounded-xl border border-border/70 bg-muted/30 p-3"
              >
                <div className="mb-2 flex items-center gap-2">
                  <span className="inline-flex size-8 items-center justify-center rounded-lg bg-background ring-1 ring-border/70">
                    <Icon className="size-4" />
                  </span>
                  <p className="text-sm font-medium">{social.label}</p>
                </div>
                <Input type="url" placeholder={social.placeholder} />
              </div>
            );
          })}
        </div>

        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
