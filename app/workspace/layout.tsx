// import { AppSidebar } from "@/components/app-sidebar";
// import { SidebarProvider } from "@/components/ui/sidebar";
// import { AuthProvider } from "@/contexts/AuthContext";

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <AuthProvider>
//       <SidebarProvider>
//         <AppSidebar />
//         {children}
//       </SidebarProvider>
//     </AuthProvider>
//   );
// }

import { AuthProvider } from "@/contexts/AuthContext";
import { SidebarClient } from "@/components/sidebar-client";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <SidebarClient>{children}</SidebarClient>
    </AuthProvider>
  );
}
