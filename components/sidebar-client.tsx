"use client";

import dynamic from "next/dynamic";
import { SidebarProvider } from "@/components/ui/sidebar";

// Client-only sidebar (Radix-safe)
const AppSidebar = dynamic(
  () => import("@/components/app-sidebar").then((m) => m.AppSidebar),
  { ssr: false }
);

export function SidebarClient({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      {children}
    </SidebarProvider>
  );
}
