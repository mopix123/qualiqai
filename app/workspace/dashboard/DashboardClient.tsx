"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import CallsData from "@/components/calls-data";
import { LeadStatsCards } from "@/components/section-cards";
import WelcomeVideoDialog from "@/components/WelcomeVideoDialog";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";

export default function DashboardClient() {
  const searchParams = useSearchParams();
  const showWelcome = searchParams.get("welcome") === "true";

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem("welcome_seen");
    if (showWelcome && !seen) {
      setOpen(true);
    }
  }, [showWelcome]);

  return (
    <>
      <WelcomeVideoDialog open={open} onClose={() => setOpen(false)} />

      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem />
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="p-8">
          <div className="pb-8">
            <h3 className="text-2xl font-medium">Dashboard</h3>
          </div>

          <div className="@container/main flex flex-1 flex-col gap-2">
            <LeadStatsCards />
            <div className="py-2">
              <CallsData />
            </div>
          </div>
        </div>
      </SidebarInset>
    </>
  );
}
