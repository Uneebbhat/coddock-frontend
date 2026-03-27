"use client";

import { type NavGroup } from "./nav-config";
import { SidebarNavItem } from "./sidebar-nav-items";

interface SidebarNavGroupProps {
  group: NavGroup;
  activeNav: string;
  onNavChange: (label: string) => void;
  collapsed?: boolean;
}

export function SidebarNavGroup({
  group,
  activeNav,
  onNavChange,
  collapsed = false,
}: SidebarNavGroupProps) {
  return (
    <div>
      {!collapsed && (
        <p className="px-2 mb-1.5 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          {group.group}
        </p>
      )}
      <div className="space-y-0.5">
        {group.items.map((item) => (
          <SidebarNavItem
            key={item.label}
            item={item}
            isActive={activeNav === item.label}
            collapsed={collapsed}
            onClick={() => onNavChange(item.label)}
          />
        ))}
      </div>
    </div>
  );
}
