"use client";

import PageHeader from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Route } from "next";
import Link from "next/link";
import React, { useState, useEffect } from "react";

// ─── Thin outline SVG icons ───────────────────────────────────────────────────
const Icons: Record<string, React.FC> = {
  Dashboard: () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  Forum: () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  Roadmap: () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3h6l2 3-2 3H3z" />
      <path d="M9 6h12" />
      <path d="M15 13h6" />
      <path d="M3 18h6l2-3-2-3H3z" />
    </svg>
  ),
  Interview: () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M6 20v-2a6 6 0 0 1 12 0v2" />
    </svg>
  ),
  Coding: () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  AI: () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2a4 4 0 0 1 4 4v1h1a3 3 0 0 1 0 6h-1v1a4 4 0 0 1-8 0v-1H7a3 3 0 0 1 0-6h1V6a4 4 0 0 1 4-4z" />
    </svg>
  ),
  Company: () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21h18M9 21V7l6-4v18M9 12h6" />
    </svg>
  ),
  Gamification: () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 11h4M8 9v4" />
      <circle cx="15" cy="12" r="1" />
      <circle cx="18" cy="10" r="1" />
      <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
    </svg>
  ),
  Help: () => (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <circle cx="12" cy="17" r="0.5" fill="currentColor" />
    </svg>
  ),
  ChevronLeft: () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  ),
  ChevronRight: () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  ),
  Menu: () => (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </svg>
  ),
  X: () => (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
};

// ─── Nav data (mirrored from Codxflow image) ──────────────────────────────────
const navItems = [
  {
    group: "FOR LEARNING",
    items: [
      { icon: "Dashboard", label: "Dashboard", href: "/dashboard" },
      { icon: "Forum", label: "Community Forum", href: "/community-forum" },
      { icon: "Roadmap", label: "Learning Roadmaps", href: "/roadmaps" },
      { icon: "Interview", label: "Interview Prep", href: "/interview" },
      { icon: "Coding", label: "Coding Challenges", href: "/challenges" },
    ],
  },
  {
    group: "FOR WORK",
    items: [
      // { icon: "AI", label: "AI - Powered Tools", badge: "New", href: "/ai-tools" },
      { icon: "Company", label: "Company Insight", href: "/company" },
      { icon: "Gamification", label: "Gamification", href: "/gamification" },
    ],
  },
];

function useScreenSize() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1920,
  );

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

// ─── Sidebar NavItem component ────────────────────────────────────────────────
type NavItemType = {
  icon: string;
  label: string;
  href: string;
  badge?: React.ReactNode;
};

interface SidebarNavItemProps {
  item: NavItemType;
  isActive: boolean;
  collapsed?: boolean;
  onClick?: () => void;
  closeSidebar?: () => void; // Optional, only for mobile
  mobile?: boolean;
}

function SidebarNavItem({
  item,
  isActive,
  collapsed,
  onClick,
  closeSidebar,
  mobile,
}: SidebarNavItemProps) {
  const Icon = Icons[item.icon];
  const btnClass = cn(
    "w-full flex items-center gap-2.5 px-2 py-1.5 rounded-md text-sm transition-colors",
    isActive
      ? "bg-accent text-accent-foreground font-medium"
      : "text-muted-foreground hover:bg-accent/60 hover:text-foreground",
  );

  // On mobile, wrap Button with Link. On desktop, Link inside Button for accessibility and styling control.
  if (mobile) {
    return (
      <Button
        asChild
        variant="ghost"
        className={btnClass}
        onClick={closeSidebar}
      >
        <Link
          href={item.href as Route}
          title={item.label}
          onClick={() => {
            onClick?.();
            closeSidebar?.();
          }}
        >
          <span className="shrink-0 flex items-center justify-center w-4 h-4">
            {Icon && <Icon />}
          </span>
          <span className="flex-1 text-left truncate text-[13px]">
            {item.label}
          </span>
          {"badge" in item && item.badge ? (
            <Badge
              variant="secondary"
              className="text-[10px] px-1.5 py-0 h-4 font-semibold"
            >
              {item.badge}
            </Badge>
          ) : null}
        </Link>
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      className={btnClass}
      onClick={onClick}
      title={collapsed ? item.label : undefined}
    >
      <Link
        href={item.href as Route}
        tabIndex={-1}
        className="flex items-center flex-1 min-w-0"
        style={{ width: "100%" }}
        draggable={false}
        prefetch={false}
        // prevent focus ring by default, let Button handle accessibility
        aria-label={item.label}
      >
        <span className="shrink-0 flex items-center justify-center w-4 h-4">
          {Icon && <Icon />}
        </span>
        {!collapsed && (
          <>
            <span className="flex-1 text-left truncate text-[13px]">
              {item.label}
            </span>
            {"badge" in item && item.badge ? (
              <Badge
                variant="secondary"
                className="text-[10px] px-1.5 py-0 h-4 font-semibold"
              >
                {item.badge}
              </Badge>
            ) : null}
          </>
        )}
      </Link>
    </Button>
  );
}

// ─── Sidebar NavGroup component ───────────────────────────────────────────────
function SidebarNavGroup({
  group,
  items,
  activeNav,
  setActiveNav,
  collapsed,
  closeSidebar,
  mobile = false,
}: {
  group: string;
  items: NavItemType[];
  activeNav: string;
  setActiveNav: (label: string) => void;
  collapsed?: boolean;
  closeSidebar?: () => void;
  mobile?: boolean;
}) {
  return (
    <div>
      {!collapsed && (
        <p className="px-2 mb-1.5 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          {group}
        </p>
      )}
      <div className="space-y-0.5">
        {items.map((item) => (
          <SidebarNavItem
            key={item.label}
            item={item}
            isActive={activeNav === item.label}
            collapsed={collapsed}
            onClick={() => setActiveNav(item.label)}
            closeSidebar={closeSidebar}
            mobile={mobile}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Layout ───────────────────────────────────────────────────────────────────
export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [activeNav, setActiveNav] = useState("Dashboard");
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const width = useScreenSize();

  // Tablet width: collapse sidebar, Mobile width: sidebar hidden
  useEffect(() => {
    if (width < 768) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMobileSidebarOpen(false);
    }
    if (width >= 768 && width < 1024) {
      setCollapsed(true);
    } else if (width >= 1024) {
      setCollapsed(false);
    }
  }, [width]);

  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-background text-foreground">
      <PageHeader />

      {/* Mobile: Open sidebar button */}
      {isMobile && (
        <div className="fixed top-5 left-4 z-30">
          <Button
            variant="outline"
            size="icon"
            className="rounded-md border bg-background/70 backdrop-blur-md shadow-md"
            onClick={() => setMobileSidebarOpen(true)}
            aria-label="Open sidebar"
          >
            <Icons.Menu />
          </Button>
        </div>
      )}

      <div className="flex flex-1 overflow-hidden">
        {/* Mobile sidebar (hidden unless explicitly open) */}
        {isMobile ? (
          <div
            className={cn(
              "fixed inset-0 z-40 transition-all",
              mobileSidebarOpen ? "block" : "hidden",
            )}
          >
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setMobileSidebarOpen(false)}
            />
            {/* Sidebar content */}
            <aside
              className={cn(
                "relative z-50 h-full w-[230px] bg-background flex flex-col border-r transition-all duration-300 overflow-hidden shadow-xl",
                mobileSidebarOpen ? "translate-x-0" : "-translate-x-full",
              )}
            >
              {/* Close button */}
              <div className="px-2 pt-2 pb-2 flex justify-end">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-md border h-8 w-8"
                  onClick={() => setMobileSidebarOpen(false)}
                  aria-label="Close sidebar"
                >
                  <Icons.X />
                </Button>
              </div>
              {/* Nav groups */}
              <nav className="flex-1 overflow-y-auto py-3 px-2 space-y-4">
                {navItems.map((group) => (
                  <SidebarNavGroup
                    key={group.group}
                    group={group.group}
                    items={group.items}
                    activeNav={activeNav}
                    setActiveNav={(label) => {
                      setActiveNav(label);
                      setMobileSidebarOpen(false);
                    }}
                    mobile
                  />
                ))}
              </nav>
              {/* Sidebar footer: Collapse doesn't show on mobile */}
            </aside>
          </div>
        ) : (
          // Tablet and Desktop
          <aside
            className={cn(
              "shrink-0 flex flex-col border-r transition-all duration-300 overflow-hidden",
              collapsed ? "w-[52px]" : "w-[210px]",
              isTablet ? "min-w-[52px] max-w-[210px]" : "",
            )}
          >
            {/* Nav groups */}
            <nav className="flex-1 overflow-y-auto py-3 px-2 space-y-4">
              {navItems.map((group) => (
                <SidebarNavGroup
                  key={group.group}
                  group={group.group}
                  items={group.items}
                  activeNav={activeNav}
                  setActiveNav={setActiveNav}
                  collapsed={collapsed}
                />
              ))}
            </nav>

            {/* ── Sidebar footer: Collapse toggle ────────────────── */}
            <div
              className={cn(
                "border-t px-2 py-2 flex items-center",
                collapsed ? "justify-center" : "justify-between",
              )}
            >
              <Button
                variant="outline"
                onClick={() => setCollapsed(!collapsed)}
                className="h-7 w-7 rounded-md border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent/60 transition-colors"
                aria-label="Toggle sidebar"
              >
                {collapsed ? <Icons.ChevronRight /> : <Icons.ChevronLeft />}
              </Button>
            </div>
          </aside>
        )}

        {/* ── CONTENT ─────────────────────────────────────────────────────── */}
        <main className="flex-1 overflow-y-auto p-6 space-y-10">
          {children}
        </main>
      </div>
    </div>
  );
}
