// import { IconCloud, IconFolderCode } from "@tabler/icons-react";

// import { Button } from "@/components/ui/button";
// import {
//   Empty,
//   EmptyContent,
//   EmptyDescription,
//   EmptyHeader,
//   EmptyMedia,
//   EmptyTitle,
// } from "@/components/ui/empty";
// import { ArrowUpRightIcon, Bot } from "lucide-react";
// import { SheetContentass } from "./sheetcontentass";
// import { useState } from "react";

// export function EmptyOutline() {
//   const [sheetOpen, setSheetOpen] = useState(true);

//   return (
//     <Empty className="border border-dashed">
//       <EmptyHeader>
//         <EmptyMedia variant="icon">
//           <Bot />
//         </EmptyMedia>
//         <EmptyTitle>No Assistant yet</EmptyTitle>
//         <EmptyDescription>
//           You haven&apos;t created an assistant yet. Get started by creating
//           your assistant. Create assistant
//         </EmptyDescription>
//       </EmptyHeader>
//       <EmptyContent>
//         <SheetContentass />
//       </EmptyContent>
//       <Button
//         variant="link"
//         asChild
//         className="text-muted-foreground cursor-pointer"
//         size="sm"
//       >
//         <a href="/workspace/videotutorials">
//           Video tutorials <ArrowUpRightIcon />
//         </a>
//       </Button>
//     </Empty>
//   );
// }

"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/client";
import { toast } from "sonner";

import { Bot, ArrowUpRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { SheetContentass } from "./sheetcontentass";

/* ---------------- TYPES ---------------- */

type Subscription = {
  subscription_status: "active" | "inactive" | string;
  plan_id: string | null;
  credits: number;
  credits_max: number;
};

/* ---------------- COMPONENT ---------------- */

export function EmptyOutline() {
  const supabase = createClient();
  const router = useRouter();

  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [loading, setLoading] = useState(true);

  /* -------- FETCH SUBSCRIPTION STATUS -------- */

  const fetchSubscriptionStatus = useCallback(async () => {
    try {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("users")
        .select("subscription_status, plan_id, credits, credits_max")
        .eq("id", user.id)
        .single();

      if (error) throw error;

      setSubscription(data);
    } catch (err: any) {
      toast.error("Failed to load subscription", {
        description: err.message,
      });
    } finally {
      setLoading(false);
    }
  }, [supabase]);

  useEffect(() => {
    fetchSubscriptionStatus();
  }, [fetchSubscriptionStatus]);

  /* ---------------- LOADING UI ---------------- */

  if (loading) {
    return (
      <Empty className="border border-dashed">
        <EmptyHeader>
          <EmptyTitle>Loading…</EmptyTitle>
          <EmptyDescription>Checking your subscription status</EmptyDescription>
        </EmptyHeader>
      </Empty>
    );
  }

  const isActive = subscription?.subscription_status === "active";

  /* ---------------- MAIN UI ---------------- */

  return (
    <div className="flex h-full min-h-[70vh] border-1 rounded-lg justify-center items-center from-muted/50 to-background bg-gradient-to-b from-30%">
      <Empty className="from-muted/50 to-background h-full  from-30%">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Bot />
          </EmptyMedia>

          <EmptyTitle>No Assistant yet</EmptyTitle>

          <EmptyDescription>
            {isActive
              ? "You haven't created an assistant yet. Get started by creating your assistant. Create assistant"
              : "Your subscription is currently inactive. Choose a plan to create an assistant."}
          </EmptyDescription>
        </EmptyHeader>

        <EmptyContent>
          {isActive ? (
            <SheetContentass />
          ) : (
            <Button
              size="lg"
              onClick={() => router.push("/workspace/subscription")}
            >
              Choose a Plan
            </Button>
          )}
        </EmptyContent>

        <Button
          variant="link"
          asChild
          className="text-muted-foreground"
          size="sm"
        >
          <a
            href="/workspace/videotutorials"
            target="_blank"
            rel="noopener noreferrer"
          >
            Video tutorials <ArrowUpRightIcon />
          </a>
        </Button>
      </Empty>
    </div>
  );
}
