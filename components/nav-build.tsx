// "use client"

// import {
//   IconDots,
//   IconFolder,
//   IconShare3,
//   IconTrash,
//   type Icon,
// } from "@tabler/icons-react"

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import {
//   SidebarGroup,
//   SidebarGroupLabel,
//   SidebarMenu,
//   SidebarMenuAction,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   useSidebar,
// } from "@/components/ui/sidebar"

// export function NavDocuments({
//   items,
// }: {
//   items: {
//     name: string
//     url: string
//     icon: Icon
//   }[]
// }) {
//   const { isMobile } = useSidebar()

//   return (
//     <SidebarGroup className="group-data-[collapsible=icon]:hidden">
//       <SidebarGroupLabel className="text-sm">Build</SidebarGroupLabel>
//       <SidebarMenu>
//         {items.map((item) => (
//           <SidebarMenuItem key={item.name}>
//             <SidebarMenuButton asChild>
//               <a href={item.url}>
//                 <item.icon />
//                 <span>{item.name}</span>
//               </a>
//             </SidebarMenuButton>

//           </SidebarMenuItem>
//         ))}
//         <SidebarMenuItem>
//           <SidebarMenuButton className="text-sidebar-foreground/70">
//             <IconDots className="text-sidebar-foreground/70" />
//             <span>More</span>
//           </SidebarMenuButton>
//         </SidebarMenuItem>
//       </SidebarMenu>
//     </SidebarGroup>
//   )
// }

// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { type Icon } from "@tabler/icons-react";
// import {
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
// } from "@/components/ui/sidebar";

// export function NavBuild({
//   items,
// }: {
//   items: {
//     name: string;
//     url: string;
//     icon?: Icon;
//   }[];
// }) {
//   const pathname = usePathname();

//   return (
//     <SidebarGroup>
//       <SidebarGroupContent className="flex flex-col">
//         <SidebarGroupLabel className="text-md">Build</SidebarGroupLabel>
//         <SidebarMenu>
//           {items.map((item) => {
//             const isActive =
//               item.url !== "#" && pathname.startsWith(item.url);

//             return (
//               <SidebarMenuItem key={item.name}>
//                 <Link href={item.url} passHref>
//                   <SidebarMenuButton
//                     tooltip={item.name}
//                   className={`flex items-center gap-2 transition-colors duration-200
//   ${isActive ? "bg-primary text-white hover:bg-primary/40" : "hover:bg-primary/40 hover:text-white"}
// `}

//                   >
//                     {item.icon && <item.icon />}
//                     <span>{item.name}</span>
//                   </SidebarMenuButton>
//                 </Link>
//               </SidebarMenuItem>
//             );
//           })}
//         </SidebarMenu>
//       </SidebarGroupContent>
//     </SidebarGroup>
//   );
// }

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentType } from "react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavBuild({
  items,
}: {
  items: {
    name: string;
    url: string;
    icon?: ComponentType<{ className?: string }>;
  }[];
}) {
  const pathname = usePathname();

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col">
        <SidebarGroupLabel className="text-md">Build</SidebarGroupLabel>

        <SidebarMenu>
          {items.map((item) => {
            const isActive = item.url !== "#" && pathname.startsWith(item.url);

            return (
              <SidebarMenuItem key={item.name}>
                <Link href={item.url}>
                  <SidebarMenuButton
                    tooltip={item.name}
                    className={`flex items-center gap-2 transition-colors duration-200
                      ${
                        isActive
                          ? "bg-primary text-white hover:bg-primary/40"
                          : "hover:bg-primary/40 hover:text-white"
                      }
                    `}
                  >
                    {item.icon && <item.icon className="h-4 w-4" />}
                    <span>{item.name}</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
