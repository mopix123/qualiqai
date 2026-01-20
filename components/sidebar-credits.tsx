// import {
//   Card,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"

// export function SidebarCredits() {
//   return (
//     <Card className="gap-2 py-4 shadow-none">
//       <CardHeader className="px-4">
//         <CardTitle className="text-sm">Subscribe to our newsletter</CardTitle>
//         <CardDescription>
//           Opt-in to receive updates and news about the sidebar.
//         </CardDescription>
//       </CardHeader>
//       {/* The CardContent containing the form and button has been removed */}
//     </Card>
//   )
// }












// "use client";

// import { useEffect, useState, useCallback } from "react";
// import { useAuth } from "@/contexts/AuthContext";
// import { createClient } from "@/lib/client";

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Progress } from "@/components/ui/progress";
// import { Skeleton } from "@/components/ui/skeleton";

// export function SidebarCredits() {
//   const { user } = useAuth();
//   const supabase = createClient();

//   // State to hold the credits info
//   const [creditsInfo, setCreditsInfo] = useState<{ credits: number; credits_max: number } | null>(null);
//   const [loading, setLoading] = useState(true);

//   const fetchUserCredits = useCallback(async () => {
//     // If there's no user, we can't fetch anything.
//     if (!user) {
//       setLoading(false);
//       return;
//     }

//     setLoading(true);
//     try {
//       // Fetch 'credits' and 'credits_max' for the currently logged-in user
//       const { data, error } = await supabase
//         .from("users") // Fetches from the 'users' table
//         .select("credits, credits_max")
//         .eq("id", user.id)
//         .single(); // .single() is best for fetching one row

//       if (error) {
//         console.error("Error fetching user credits:", error);
//         throw error;
//       }

//       if (data) {
//         setCreditsInfo(data);
//       }
//     } catch (error) {
//       // Handle potential errors, e.g., show a toast notification
//     } finally {
//       setLoading(false);
//     }
//   }, [user, supabase]);

//   // Run the fetch function when the component mounts or the user changes
//   useEffect(() => {
//     fetchUserCredits();
//   }, [fetchUserCredits]);

//   // Calculate the progress percentage, preventing division by zero
//   const progressValue = creditsInfo?.credits_max
//     ? (creditsInfo.credits / creditsInfo.credits_max) * 100
//     : 0;

//   return (
//     <Card className="gap-2 py-4 shadow-none">
//       <CardHeader className="px-4">
//         <CardTitle className="text-sm">Call Minutes Usage</CardTitle>
//       </CardHeader>
//       <CardContent className="px-4">
//         {loading ? (
//           // --- Skeleton Loader while data is being fetched ---
//           <div className="space-y-2">
//             <Skeleton className="h-4 w-3/4" />
//             <Skeleton className="h-2 w-full" />
//           </div>
//         ) : creditsInfo ? (
//           // --- Actual Data once loaded ---
//           <div className="space-y-2">
//             <p className="text-sm font-medium text-muted-foreground">
//               {creditsInfo.credits} / {creditsInfo.credits_max} Minutes Used
//             </p>
//             <Progress value={progressValue} className="h-2" />
//           </div>
//         ) : (
//           // --- Fallback if no data is found ---
//           <p className="text-sm text-muted-foreground">
//             Credit information not available.
//           </p>
//         )}
//       </CardContent>
//     </Card>
//   );
// }











"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { createClient } from "@/lib/client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";

type CreditsInfo = {
  credits: number;
  credits_max: number;
};

export function SidebarCredits() {
  const { user } = useAuth();
  const supabase = createClient();

  const [creditsInfo, setCreditsInfo] = useState<CreditsInfo | null>(null);
  const [loading, setLoading] = useState(true);

  /* ───────── Fetch credits ───────── */
  const fetchCredits = async () => {
    if (!user) return;

    const { data, error } = await supabase
      .from("users")
      .select("credits, credits_max")
      .eq("id", user.id)
      .single();

    if (!error && data) {
      setCreditsInfo(data);
      setLoading(false);
    }
  };

  /* ───────── Initial load ───────── */
  useEffect(() => {
    fetchCredits();
  }, [user]);

  /* ───────── Realtime (best effort) ───────── */
  useEffect(() => {
    if (!user) return;

    const channel = supabase
      .channel(`credits-${user.id}`)
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "users",
          filter: `id=eq.${user.id}`,
        },
        (payload) => {
          const updated = payload.new as CreditsInfo;
          setCreditsInfo({
            credits: updated.credits,
            credits_max: updated.credits_max,
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [user]);

  /* ───────── Polling fallback (5 sec) ───────── */
  useEffect(() => {
    if (!user) return;

    const interval = setInterval(fetchCredits, 5000);

    return () => clearInterval(interval);
  }, [user]);

  /* ───────── Progress calc ───────── */
  const progress =
    creditsInfo && creditsInfo.credits_max > 0
      ? (creditsInfo.credits / creditsInfo.credits_max) * 100
      : 0;

  /* ───────── UI ───────── */
  return (
    <Card className="gap-2 py-4 shadow-none">
      <CardHeader className="px-4 pb-2">
        <CardTitle className="text-sm">Call Minutes Usage</CardTitle>
      </CardHeader>

      <CardContent className="px-4">
        {loading ? (
          <div className="space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-2 w-full" />
          </div>
        ) : creditsInfo ? (
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">
              {creditsInfo.credits} / {creditsInfo.credits_max} Minutes Used
            </p>
            <Progress value={progress} className="h-2" />
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">
            Credit information not available.
          </p>
        )}
      </CardContent>
    </Card>
  );
}
