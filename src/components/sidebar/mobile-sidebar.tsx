"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { NAV_ITEMS } from "./nav-config";
import { SidebarNavGroup } from "./sidebar-nav-group";

export function MobileSidebar() {
  const [open, setOpen] = useState<boolean>(false);
  const [activeNav, setActiveNav] = useState<string>("Dashboard");

  return (
    <>
      {/* Hamburger trigger — only visible on mobile */}
      <Button
        variant="outline"
        size="icon"
        className="md:hidden fixed top-[14px] left-4 z-30 h-8 w-8 bg-background/80 backdrop-blur-sm shadow-sm"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        <Menu size={18} />
      </Button>

      {/* Sheet drawer */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-[230px] p-0 flex flex-col">
          <SheetTitle className="sr-only">Navigation</SheetTitle>

          <nav className="flex-1 overflow-y-auto py-4 px-2 space-y-4">
            {NAV_ITEMS.map((group) => (
              <SidebarNavGroup
                key={group.group}
                group={group}
                activeNav={activeNav}
                onNavChange={(label) => {
                  setActiveNav(label);
                  setOpen(false);
                }}
              />
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}
