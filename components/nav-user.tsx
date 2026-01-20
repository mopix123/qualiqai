// "use client"

// import {
//   BadgeCheck,
//   Bell,
//   ChevronsUpDown,
//   CreditCard,
//   LogOut,
//   Sparkles,
// } from "lucide-react"

// import {
//   Avatar,
//   AvatarFallback,
//   AvatarImage,
// } from "@/components/ui/avatar"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import {
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   useSidebar,
// } from "@/components/ui/sidebar"
// import { IconLogout } from "@tabler/icons-react"
// import { useAuth } from "@/contexts/AuthContext"
// import { useRouter } from "next/navigation"
// import { createClient } from "@/lib/client";
// import Link from "next/link"


// export default function NavUser() {
//   const { user, signOut } = useAuth();
//   const router = useRouter();
//   const { isMobile } = useSidebar()
//    const supabase = createClient();


//   const handleLogout = async () =>{
//     await signOut();
//     router.push("/login")
//   };

//   if (!user) {
//     return null;
//   }

  

//   return (
//     <SidebarMenu>
//       <SidebarMenuItem>
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <SidebarMenuButton
//               size="lg"
//               className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
//             >
//               <Avatar className="h-8 w-8 rounded-lg">
//                 {/* <AvatarImage src={user.avatar} alt={user.email} /> */}
//                 <AvatarFallback className="rounded-lg">{user.user_metadata.full_name.slice(0, 2).toUpperCase()}</AvatarFallback>
//               </Avatar>
//               <div className="grid flex-1 text-left text-sm leading-tight">
//                 <span className="truncate font-medium">{user.user_metadata.full_name}</span>
//                 <span className="truncate text-xs">{user.email}</span>
//               </div>
//               <ChevronsUpDown className="ml-auto size-4" />
//             </SidebarMenuButton>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent
//             className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
//             side={isMobile ? "bottom" : "right"}
//             align="end"
//             sideOffset={4}
//           >
//             <DropdownMenuLabel className="p-0 font-normal">
//               <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
//                 <Avatar className="h-8 w-8 rounded-lg">
//                   {/* <AvatarImage src={user.avatar} alt={user.name} /> */}
//                   <AvatarFallback className="rounded-lg">{user.user_metadata.full_name.slice(0, 2).toUpperCase()}</AvatarFallback>
//                 </Avatar>
//                 <div className="grid flex-1 text-left text-sm leading-tight">
//                   {/* <span className="truncate font-medium">{user.name}</span> */}
//                   <span className="truncate text-xs">{user.email}</span>
//                 </div>
//               </div>
//             </DropdownMenuLabel>
//             <DropdownMenuSeparator />
//             <DropdownMenuGroup>
//              <Link href="/workspace/billing/">
//       <DropdownMenuItem>
//         <CreditCard className="mr-2 h-4 w-4" />
//         <span>Billing</span>
//       </DropdownMenuItem>
//     </Link>
//             </DropdownMenuGroup>
//             <DropdownMenuSeparator />
//               <DropdownMenuItem onClick={handleLogout}>
//               <IconLogout />
//               Log out
//             </DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       </SidebarMenuItem>
//     </SidebarMenu>
//   )
// }

















"use client";

import {
  ChevronsUpDown,
  CreditCard,
} from "lucide-react";

import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

import { IconLogout, IconReport } from "@tabler/icons-react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NavUser() {
  const { user, signOut } = useAuth();
  const router = useRouter();
  const { isMobile } = useSidebar();

  const handleLogout = async () => {
    await signOut();
    router.push("/login");
  };

  // Guard: auth not ready
  if (!user) {
    return null;
  }

  // ✅ SAFE NORMALIZATION
  const fullName =
    typeof user.user_metadata?.full_name === "string"
      ? user.user_metadata.full_name
      : "";

  const initials = fullName
    .trim()
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase() || "U";

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarFallback className="rounded-lg">
                  {initials}
                </AvatarFallback>
              </Avatar>

              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">
                  {fullName || "User"}
                </span>
                <span className="truncate text-xs">
                  {user.email}
                </span>
              </div>

              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className="min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarFallback className="rounded-lg">
                    {initials}
                  </AvatarFallback>
                </Avatar>

                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">
                    {fullName || "User"}
                  </span>
                  <span className="truncate text-xs">
                    {user.email}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              <Link href="/workspace/subscription">
                <DropdownMenuItem>
                  <IconReport className="mr-2 h-4 w-4" />
                  <span>Subscription</span>
                </DropdownMenuItem>
              </Link>
              <Link href="/workspace/billing">
                <DropdownMenuItem>
                  <CreditCard className="mr-2 h-4 w-4" />
                  <span>Billing</span>
                </DropdownMenuItem>
              </Link>
            </DropdownMenuGroup>


          
            <DropdownMenuSeparator />

            <DropdownMenuItem onClick={handleLogout}>
              <IconLogout className="mr-2 h-4 w-4" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
