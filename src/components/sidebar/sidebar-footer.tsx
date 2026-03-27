"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, HelpCircle } from "lucide-react";

interface SidebarFooterProps {
  collapsed: boolean;
  onToggle: () => void;
}

export function SidebarFooter({ collapsed, onToggle }: SidebarFooterProps) {
  return (
    <div
      className={cn(
        "border-t px-2 py-2 flex items-center",
        collapsed ? "justify-center" : "justify-between",
      )}
    >
      {!collapsed && (
        <Button
          variant="ghost"
          size="sm"
          className="gap-2 text-muted-foreground hover:text-foreground text-[13px] px-2"
        >
          <HelpCircle size={15} strokeWidth={1.6} />
          Help
        </Button>
      )}

      <Button
        variant="outline"
        size="icon"
        className="h-7 w-7"
        onClick={onToggle}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {collapsed ? (
          <ChevronRight size={14} strokeWidth={2} />
        ) : (
          <ChevronLeft size={14} strokeWidth={2} />
        )}
      </Button>
    </div>
  );
}
