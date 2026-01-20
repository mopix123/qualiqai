"use client"

import * as React from "react"
import { ChevronsUpDown, Funnel, Plus } from "lucide-react"
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string
    logo: React.ElementType
    plan: string
  }[]
}) {
  const { isMobile } = useSidebar()
  const [activeTeam, setActiveTeam] = React.useState(teams[0])

  if (!activeTeam) {
    return null
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            {/* <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                <Funnel className="size-5" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="text-md font-semibold">QualiQ AI</span>
                <span className="truncate text-xs">by Quantrox</span>
              </div>
            </SidebarMenuButton> */}
            
<SidebarMenuButton
  size="lg"
  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
>
  <div className=" text-sidebar-primary-foreground flex aspect-square size-8 rounded-lg overflow-hidden bg-transparent justify-center items-center">
    <Image
      src="/Logo_quliqai.png"
      alt="QualiQ AI Logo"
      width={50}
      height={50}
      className="object-contain"
    />
  </div>

  <div className="grid flex-1 text-left text-sm leading-tight">
    <span className="text-md font-semibold">QualiQ AI</span>
    <span className="truncate text-xs">by Quantrox</span>
  </div>
</SidebarMenuButton>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </SidebarMenuItem>
     
    </SidebarMenu>
  )
}
