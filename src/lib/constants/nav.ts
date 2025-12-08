import type { IconType } from "react-icons";
import { GoCommentDiscussion } from "react-icons/go";
import { IoDocumentTextOutline } from "react-icons/io5";
import {
  MdCheckBox,
  MdOutlineChecklist,
  MdPeople,
  MdSecurity,
} from "react-icons/md";
import type { UserRole } from "~/features/user/constants";

export interface NavConfig {
  admin: NavSection[];
  shared: NavSection[];
  user: NavSection[];
}

export interface NavItem {
  badge?: string;
  description?: string;
  href: string;
  icon: IconType;
  label: string;
}

export interface NavSection {
  items: NavItem[];
  title: string;
}

// Navigation configuration
export const navConfig: NavConfig = {
  // Admin-specific navigation
  admin: [
    {
      items: [
        {
          description: "Admin overview",
          href: "/dashboard",
          icon: MdSecurity,
          label: "Dashboard",
        },
        {
          description: "User management",
          href: "/users",
          icon: MdPeople,
          label: "Users",
        },
      ],
      title: "Admin",
    },
    {
      items: [
        {
          description: "View user tasks",
          href: "/user-tasks",
          icon: MdCheckBox,
          label: "All Tasks",
        },
      ],
      title: "User",
    },
  ],

  // Shared navigation - visible to all authenticated users
  shared: [],

  // User-specific navigation
  user: [
    {
      items: [
        {
          description: "Manage your business plans.",
          href: "/business-plans",
          icon: MdOutlineChecklist,
          label: "Business Plans",
        },
        {
          description: "Manage your resumes.",
          href: "/my-resume",
          icon: IoDocumentTextOutline,
          label: "My Resume",
        },
        {
          description: "Manage your presentations.",
          href: "/presentations",
          icon: GoCommentDiscussion,
          label: "Presentations",
        },
      ],
      title: "Navigations",
    },
  ],
};

// Helper function to get navigation items based on role
export function getNavigation(role: UserRole): NavSection[] {
  const sections: NavSection[] = [...navConfig.shared];

  if (role === "ADMIN") {
    sections.push(...navConfig.admin);
  } else if (role === "USER") {
    sections.push(...navConfig.user);
  }

  return sections;
}
