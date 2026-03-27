"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Route } from "next";
import Link from "next/link";
import { type NavItem } from "./nav-config";

interface SidebarNavItemProps {
  item: NavItem;
  isActive: boolean;
  collapsed?: boolean;
  onClick?: () => void;
}

export function SidebarNavItem({
  item,
  isActive,
  collapsed = false,
  onClick,
}: SidebarNavItemProps) {
  const Icon = item.icon;

  return (
    <Link
      href={item.href as Route}
      onClick={onClick}
      title={collapsed ? item.label : undefined}
      className={cn(
        "flex items-center gap-2.5 px-2 py-1.5 rounded-md text-[13px] transition-colors",
        "w-full",
        isActive
          ? "bg-accent text-accent-foreground font-medium"
          : "text-muted-foreground hover:bg-accent/60 hover:text-foreground",
      )}
    >
      <Icon size={16} strokeWidth={1.6} className="shrink-0" />

      {!collapsed && (
        <>
          <span className="flex-1 truncate">{item.label}</span>
          {item.badge && (
            <Badge
              variant="secondary"
              className="text-[10px] px-1.5 py-0 h-4 font-semibold"
            >
              {item.badge}
            </Badge>
          )}
        </>
      )}
    </Link>
  );
}
