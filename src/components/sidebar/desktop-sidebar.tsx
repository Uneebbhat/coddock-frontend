"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { NAV_ITEMS } from "./nav-config";
import { SidebarFooter } from "./sidebar-footer";
import { SidebarNavGroup } from "./sidebar-nav-group";

export function DesktopSidebar() {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [activeNav, setActiveNav] = useState<string>("Dashboard");

  return (
    <aside
      className={cn(
        "hidden md:flex shrink-0 flex-col border-r transition-all duration-300 overflow-hidden",
        collapsed ? "w-[52px]" : "lg:w-[210px] md:w-[52px]",
      )}
    >
      <nav className="flex-1 overflow-y-auto py-3 px-2 space-y-4">
        {NAV_ITEMS.map((group) => (
          <SidebarNavGroup
            key={group.group}
            group={group}
            activeNav={activeNav}
            onNavChange={setActiveNav}
            collapsed={collapsed}
          />
        ))}
      </nav>

      <SidebarFooter
        collapsed={collapsed}
        onToggle={() => setCollapsed((prev) => !prev)}
      />
    </aside>
  );
}
