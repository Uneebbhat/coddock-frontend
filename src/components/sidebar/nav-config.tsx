import {
  LayoutDashboard,
  MessageSquare,
  Map,
  UserCheck,
  Code2,
  Sparkles,
  Building2,
  Trophy,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  icon: LucideIcon;
  label: string;
  href: string;
  badge?: string;
};

export type NavGroup = {
  group: string;
  items: NavItem[];
};

export const NAV_ITEMS: NavGroup[] = [
  {
    group: "FOR LEARNING",
    items: [
      { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
      { icon: MessageSquare, label: "Community Forum", href: "/forum" },
      { icon: Map, label: "Learning Roadmaps", href: "/roadmaps" },
      { icon: UserCheck, label: "Interview Prep", href: "/interview" },
      { icon: Code2, label: "Coding Challenges", href: "/challenges" },
    ],
  },
  {
    group: "FOR WORK",
    items: [
      {
        icon: Sparkles,
        label: "AI - Powered Tools",
        href: "/ai-tools",
        badge: "New",
      },
      { icon: Building2, label: "Company Insight", href: "/company" },
      { icon: Trophy, label: "Gamification", href: "/gamification" },
    ],
  },
];
