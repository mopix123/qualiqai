"use client";

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import CallsData from "@/components/calls-data";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import SupportWidget from "@/components/support-widget";

export default function calls() {
  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 border-b-1 justify-between pr-2">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <SupportWidget />
      </header>
      <div className="p-8">
        <div className="pb-8">
          <h3 className="text-2xl font-medium">Call Logs</h3>
        </div>
        <CallsData />
      </div>
    </SidebarInset>
  );
}
