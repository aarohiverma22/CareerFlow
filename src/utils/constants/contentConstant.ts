//Signup

import {
  BriefcaseBusiness,
  CalendarDays,
  LayoutDashboard,
  Settings,
  User,
} from "lucide-react";

export const features = [
  "Track applications across 100+ job boards",
  "Automated interview scheduling & reminders",
  "AI-powered resume tailoring suggestions",
  "Visual pipeline of your career progress",
];

export const SIGNUP_CONTENT = {
  HEADING: "Land your dream job with precision.",
  SUB_HEADING:
    "Join thousands of professionals who organize their job search with JobTrack's intelligent pipeline management tools.",
  CREATE_HEADING: "Create your account",
  DESC: "Start your journey to a better career today.",
  HAVE_ACCOUNT: "Already have an account?",
};

// Sidenav
export const navItems = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Applications",
    path: "/applications",
    icon: BriefcaseBusiness,
  },
  {
    label: "Calendar",
    path: "/calendar",
    icon: CalendarDays,
  },
  {
    label: "Profile",
    path: "/profile",
    icon: User,
  },
  {
    label: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

//Footer
export const FOOTER = {
  FOOTER_TEXT:
    "© 2026 JobTrack Pro. All job data is encrypted and private to you.",
};
