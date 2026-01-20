"use client"
import AnalyticsDashboard from "@/components/analytics-chart-area-interactive"
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, } from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar"


export default function analytic() {
  return (
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 border-b-1">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
         <div className="p-8">
                  <div className="pb-8">
                  <h3 className="text-2xl font-medium">Insights</h3>
                  </div>
                <AnalyticsDashboard/>
                </div>
      </SidebarInset>
  )
}




// grid grid-cols-1 gap-4 px-4 lg:px-6 @xl/main:grid-cols-4