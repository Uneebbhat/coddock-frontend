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
  Pencil,
} from "lucide-react";

export type NavItem = {
  icon: LucideIcon;
  label: string;
  href: string;
  badge?: string;
  matchExact?: boolean;
  matchPrefix?: boolean;
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
      {
        icon: MessageSquare,
        label: "Community Forum",
        href: "/community-forum",
        matchExact: true,
      },
      {
        icon: MessageSquare,
        label: "Forum Post",
        href: "/community-forum/",
        matchPrefix: true,
      },
      {
        icon: Pencil,
        label: "New Forum Post",
        href: "/community-form",
      },
      { icon: Map, label: "Learning Roadmaps", href: "/roadmaps" },
      { icon: UserCheck, label: "Interview Prep", href: "/interview" },
      { icon: Code2, label: "Coding Challenges", href: "/challenges" },
    ],
  },
  {
    group: "OTHERS",
    items: [
      {
        icon: Sparkles,
        label: "AI Tools",
        href: "/ai-tools",
        badge: "New",
      },
      { icon: Building2, label: "Company Insight", href: "/company" },
      { icon: Trophy, label: "Gamification", href: "/gamification" },
    ],
  },
];
