"use client";

import * as React from "react";
import {
  AlignHorizontalJustifyEnd,
  AudioLines,
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  LayoutDashboard,
  Map,
  PieChart,
  Settings2,
  SquarePlay,
  SquareTerminal,
  User,
} from "lucide-react";

import {
  IconChartBar,
  IconFileTypography,
  IconDashboard,
  IconReport,
  IconUsers,
  IconDatabase,
  IconFileWord,
} from "@tabler/icons-react";

import { NavMain } from "@/components/nav-main";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import NavUser from "./nav-user";
import { SidebarCredits } from "./sidebar-credits";
import { NavBuild } from "./nav-build";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: LayoutDashboard,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/workspace/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Insights",
      url: "/workspace/Insights",
      icon: IconChartBar,
    },
    {
      title: "Call Logs",
      url: "/workspace/call_log",
      icon: IconUsers,
    },
  ],
  build: [
    { name: "Assistant", url: "/workspace/assistants", icon: User },
    { name: "Voice Libary", url: "/workspace/voice_libary", icon: AudioLines },
    {
      name: "Video Tutorials",
      url: "/workspace/videotutorials",
      icon: SquarePlay,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavBuild items={data.build} />

        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <SidebarCredits />
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
