// "use client";

// import { useEffect, useState, useCallback } from "react";
// import { useAuth } from "@/contexts/AuthContext";
// import { createClient } from "@/lib/client";
// import axios from "axios";
// import { toast } from "sonner";

// // --- UI Components ---
// // Added Skeleton to the imports
// import { Skeleton } from "@/components/ui/skeleton";
// import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardDescription,
//   CardContent,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
// import { Badge } from "@/components/ui/badge";
// import { Separator } from "@/components/ui/separator";
// import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb";

// // --- Interfaces ---
// interface UserSubscription {
//   subscription_status: "active" | "inactive" | "trialing" | "canceled" | "past_due";
//   current_end: string | null;
//   credits: number | null;
//   credits_max: number | null;
// }

// interface BillingRecord {
//   id: number;
//   razorpay_invoice_id: string;
//   status: string;
//   amount: number;
//   created_at: string;
//   short_url: string;
// }

// export default function BillingPage() {
//   // --- State ---
//   const { user } = useAuth();
//   const supabase = createClient();
//   const [subscription, setSubscription] = useState<UserSubscription | null>(null);
//   const [loadingSubscription, setLoadingSubscription] = useState(true);
//   const [isCancelling, setIsCancelling] = useState(false);
//   const [history, setHistory] = useState<BillingRecord[]>([]);
//   const [loadingHistory, setLoadingHistory] = useState(true);
//   const [errorHistory, setErrorHistory] = useState<string | null>(null);

//   // --- Data Fetching and Handlers (No changes here) ---
//   const fetchSubscriptionStatus = useCallback(async () => {
//     if (!user) return;
//     setLoadingSubscription(true);
//     try {
//       const { data, error } = await supabase
//         .from("users")
//         .select("subscription_status, current_end, credits, credits_max")
//         .eq("id", user.id)
//         .single();
//       if (error) throw error;
//       setSubscription(data);
//     } catch (err: any) {
//       toast.error("Failed to load subscription status", {
//         description: err.message,
//       });
//     } finally {
//       setLoadingSubscription(false);
//     }
//   }, [user, supabase]);

//   useEffect(() => {
//     fetchSubscriptionStatus();
//   }, [fetchSubscriptionStatus]);

//   const handleCancelSubscription = async () => {
//     if (!user?.id) return;
//     setIsCancelling(true);
//     try {
//       await axios.post("/api/subscriptions/cancel", { userId: user.id });
//       toast.success("Subscription Canceled", {
//         description: "Your subscription will remain active until the end of the current billing period.",
//       });
//       setSubscription((prev) =>
//         prev ? { ...prev, subscription_status: "canceled" } : prev
//       );
//     } catch (err: any) {
//       toast.error("Cancellation Failed", {
//         description: err.response?.data?.error || "An error occurred.",
//       });
//     } finally {
//       setIsCancelling(false);
//     }
//   };

//   const getStatusText = (status?: string) => {
//     switch (status) {
//       case "active": return "Active";
//       case "canceled": return "Canceled";
//       case "past_due": return "Past Due";
//       default: return "Inactive";
//     }
//   };

//   useEffect(() => {
//     const fetchBillingHistory = async () => {
//       try {
//         const { data } = await axios.get<BillingRecord[]>('/api/billing/history');
//         setHistory(data);
//       } catch (err: any) {
//         console.error("Failed to fetch billing history:", err);
//         setErrorHistory(err.response?.data?.error || "An error occurred while fetching your history.");
//       } finally {
//         setLoadingHistory(false);
//       }
//     };
//     fetchBillingHistory();
//   }, []);

//   // --- JSX with Skeleton Loaders ---
//   return (
//     <SidebarInset>
//       <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
//         <div className="flex items-center gap-2 px-4">
//           <SidebarTrigger className="-ml-1" />
//           <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
//           <Breadcrumb>
//             <BreadcrumbList>
//               <BreadcrumbItem>
//                 <BreadcrumbPage>Billing</BreadcrumbPage>
//               </BreadcrumbItem>
//             </BreadcrumbList>
//           </Breadcrumb>
//         </div>
//       </header>

//       <div className="min-h-screen flex justify-start">
//         <main className="p-4 md:p-6 space-y-6 w-5xl">
//           {/* Section 1: Manage Subscription with Skeleton */}
//           <Card>
//             <CardHeader>
//               <CardTitle>Manage Subscription</CardTitle>
//               <CardDescription>
//                 View your current plan details, credits, and manage your subscription.
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               {loadingSubscription ? (
//                 // --- Subscription Skeleton ---
//                 <div className="space-y-4">
//                   <div className="flex justify-between items-center p-4 border rounded-lg">
//                     <div className="space-y-2">
//                       <Skeleton className="h-5 w-[150px]" />
//                       <Skeleton className="h-4 w-[100px]" />
//                     </div>
//                     <Skeleton className="h-4 w-[120px]" />
//                   </div>
//                   <Skeleton className="h-10 w-full" />
//                 </div>
//               ) : subscription ? (
//                 // --- Actual Subscription Content ---
//                 <div className="space-y-4">
//                   <div className="flex justify-between items-center p-4 border rounded-lg">
//                     <div>
//                       <p className="font-semibold">Your Plan Status</p>
//                       <p className="text-muted-foreground capitalize">
//                         {getStatusText(subscription.subscription_status)}
//                       </p>
//                       {subscription.credits !== null && (
//                         <p className="text-sm text-muted-foreground mt-1">
//                           Credits: {subscription.credits} / {subscription.credits_max ?? 0}
//                         </p>
//                       )}
//                     </div>
//                     {subscription.subscription_status === "active" && subscription.current_end && (
//                       <p className="text-sm text-muted-foreground">
//                         Renews on {new Date(subscription.current_end).toLocaleDateString("en-US")}
//                       </p>
//                     )}
//                     {subscription.subscription_status === "canceled" && subscription.current_end && (
//                       <p className="text-sm text-muted-foreground">
//                         Expires on {new Date(subscription.current_end).toLocaleDateString("en-US")}
//                       </p>
//                     )}
//                   </div>
//                   {subscription.subscription_status === "active" && (
//                     <Button
//                       variant="destructive"
//                       onClick={handleCancelSubscription}
//                       disabled={isCancelling}
//                       className="w-full"
//                     >
//                       {isCancelling ? "Cancelling..." : "Cancel Subscription"}
//                     </Button>
//                   )}
//                   {subscription.subscription_status === "canceled" && (
//                     <p className="text-sm text-center text-muted-foreground pt-4">
//                       Your subscription has been canceled.
//                     </p>
//                   )}
//                   <Button
//                     variant="outline"
//                     onClick={fetchSubscriptionStatus}
//                     className="w-full mt-3"
//                   >
//                     Refresh Subscription Details
//                   </Button>
//                 </div>
//               ) : (
//                 <p className="text-muted-foreground text-center">No subscription data found.</p>
//               )}
//             </CardContent>
//           </Card>

//           {/* Section 2: Invoice History with Skeleton */}
//           <Card>
//             <CardHeader>
//               <CardTitle>Invoice History</CardTitle>
//               <CardDescription>A record of all your past payments.</CardDescription>
//             </CardHeader>
//             <CardContent>
//               {errorHistory && <p className="text-center text-red-500">{errorHistory}</p>}

//               {!errorHistory && (
//                 <Table>
//                   <TableHeader>
//                     <TableRow>
//                       <TableHead>Invoice #</TableHead>
//                       <TableHead>Date</TableHead>
//                       <TableHead>Status</TableHead>
//                       <TableHead className="text-right">Amount</TableHead>
//                       <TableHead className="text-right">Action</TableHead>
//                     </TableRow>
//                   </TableHeader>
//                   <TableBody>
//                     {loadingHistory ? (
//                       // --- Table Skeleton Rows ---
//                       [...Array(3)].map((_, i) => (
//                         <TableRow key={i}>
//                           <TableCell><Skeleton className="h-4 w-24" /></TableCell>
//                           <TableCell><Skeleton className="h-4 w-24" /></TableCell>
//                           <TableCell><Skeleton className="h-6 w-16 rounded-full" /></TableCell>
//                           <TableCell className="text-right"><Skeleton className="h-4 w-16 ml-auto" /></TableCell>
//                           <TableCell className="text-right"><Skeleton className="h-9 w-[105px] ml-auto" /></TableCell>
//                         </TableRow>
//                       ))
//                     ) : history.length > 0 ? (
//                       // --- Actual Table Content ---
//                       history.map((record) => (
//                         <TableRow key={record.id}>
//                           <TableCell className="font-medium">
//                             {`INV-${record.id.toString().padStart(4, '0')}`}
//                           </TableCell>
//                           <TableCell>{new Date(record.created_at).toLocaleDateString('en-US')}</TableCell>
//                           <TableCell>
//                             <Badge variant={record.status === 'paid' || record.status === 'captured' ? 'default' : 'secondary'}>
//                               {record.status}
//                             </Badge>
//                           </TableCell>
//                           <TableCell className="text-right">
//                             ${(record.amount / 100).toFixed(2)}
//                           </TableCell>
//                           <TableCell className="text-right">
//                             <Button asChild variant="outline" size="sm">
//                               <a href={record.short_url} target="_blank" rel="noopener noreferrer">
//                                 View Invoice
//                               </a>
//                             </Button>
//                           </TableCell>
//                         </TableRow>
//                       ))
//                     ) : (
//                       <TableRow>
//                         <TableCell colSpan={5} className="text-center">No billing history found.</TableCell>
//                       </TableRow>
//                     )}
//                   </TableBody>
//                 </Table>
//               )}
//             </CardContent>
//           </Card>
//         </main>
//       </div>
//     </SidebarInset>
//   );
// }

"use client";

import { useEffect, useState, useCallback } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { createClient } from "@/lib/client";
import axios from "axios";
import { toast } from "sonner";

// --- UI Components ---
import { Skeleton } from "@/components/ui/skeleton";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

// New imports (Dialog + Progress)
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { IconAlertTriangle } from "@tabler/icons-react";
import SupportWidget from "@/components/support-widget";

// --- Interfaces ---
interface UserSubscription {
  subscription_status:
    | "active"
    | "inactive"
    | "trialing"
    | "canceled"
    | "past_due";
  subscription_end_date: string | null;
  credits: number | null;
  credits_max: number | null;
  plan_id?: string | null;
  plan_name?: string | null;
}

interface BillingRecord {
  id: number;
  razorpay_invoice_id: string;
  status: string;
  amount: number;
  created_at: string;
  short_url: string;
}

export default function BillingPage() {
  // --- State ---
  const { user } = useAuth();
  const supabase = createClient();
  const [subscription, setSubscription] = useState<UserSubscription | null>(
    null,
  );
  const [loadingSubscription, setLoadingSubscription] = useState(true);
  const [isCancelling, setIsCancelling] = useState(false);
  const [history, setHistory] = useState<BillingRecord[]>([]);
  const [loadingHistory, setLoadingHistory] = useState(true);
  const [errorHistory, setErrorHistory] = useState<string | null>(null);

  // Dialog state for cancel confirmation
  const [openCancelDialog, setOpenCancelDialog] = useState(false);

  // --- Data Fetching and Handlers ---
  const fetchSubscriptionStatus = useCallback(async () => {
    if (!user) return;
    setLoadingSubscription(true);
    try {
      // include plan_id / plan_name if present in your users table
      const { data, error } = await supabase
        .from("users")
        .select(
          "subscription_status, subscription_end_date, credits, credits_max, plan_id, plan_name",
        )
        .eq("id", user.id)
        .single();

      if (error) throw error;
      setSubscription(data);
    } catch (err: any) {
      toast.error("Failed to load subscription status", {
        description: err.message,
      });
    } finally {
      setLoadingSubscription(false);
    }
  }, [user, supabase]);

  useEffect(() => {
    fetchSubscriptionStatus();
  }, [fetchSubscriptionStatus]);

  const handleCancelSubscription = async () => {
    if (!user?.id) return;
    setIsCancelling(true);
    try {
      await axios.post("/api/subscriptions/cancel", { userId: user.id });
      toast.success("Subscription Canceled", {
        description:
          "Your subscription will remain active until the end of the current billing period.",
      });

      // Optimistically update the UI
      setSubscription((prev) =>
        prev ? { ...prev, subscription_status: "canceled" } : prev,
      );

      // close dialog after success
      setOpenCancelDialog(false);
    } catch (err: any) {
      toast.error("Cancellation Failed", {
        description: err.response?.data?.error || "An error occurred.",
      });
    } finally {
      setIsCancelling(false);
    }
  };

  const getStatusText = (status?: string) => {
    switch (status) {
      case "active":
        return "Active";
      case "canceled":
        return "Canceled";
      case "past_due":
        return "Past Due";
      default:
        return "Inactive";
    }
  };

  useEffect(() => {
    const fetchBillingHistory = async () => {
      try {
        const { data } = await axios.get<BillingRecord[]>(
          "/api/billing/history",
        );
        setHistory(data);
      } catch (err: any) {
        console.error("Failed to fetch billing history:", err);
        setErrorHistory(
          err.response?.data?.error ||
            "An error occurred while fetching your history.",
        );
      } finally {
        setLoadingHistory(false);
      }
    };
    fetchBillingHistory();
  }, []);

  // --- Helpers for credits/progress display ---
  const credits = subscription?.credits ?? null;
  const creditsMax = subscription?.credits_max ?? null;
  const progressValue =
    credits !== null && creditsMax && creditsMax > 0
      ? Math.min(100, Math.round((credits / creditsMax) * 100))
      : 0;

  // Plan name fallback
  const planDisplayName =
    subscription?.plan_name ||
    (subscription?.plan_id ? subscription.plan_id : "Your Plan");

  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b justify-between pr-2">
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
        <SupportWidget />
      </header>

      <div className="p-8">
        <div className="pb-8">
          <h3 className="text-2xl font-medium">Billing</h3>
        </div>
        <div className="min-h-screen flex justify-start">
          <main className=" space-y-6 w-5xl">
            {/* Section 1: Manage Subscription */}
            <Card>
              <CardHeader>
                <CardTitle>Manage Subscription</CardTitle>
                <CardDescription>
                  View your current plan details, credits, and manage your
                  subscription.
                </CardDescription>
              </CardHeader>

              <CardContent>
                {/* Loading skeleton */}
                {loadingSubscription ? (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 border rounded-lg">
                      <div className="space-y-2">
                        <Skeleton className="h-5 w-[160px]" />
                        <Skeleton className="h-4 w-[120px]" />
                      </div>
                      <Skeleton className="h-8 w-[140px]" />
                    </div>

                    <div className="p-4 border rounded-lg space-y-3">
                      <Skeleton className="h-4 w-1/3" />
                      <Skeleton className="h-3 w-full" />
                      <Skeleton className="h-3 w-full" />
                    </div>

                    <Skeleton className="h-10 w-full" />
                  </div>
                ) : subscription ? (
                  <div className="space-y-4">
                    {/* Plan header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4 border rounded-lg">
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Active Plan
                        </p>
                        <p className="text-xl font-semibold">
                          {planDisplayName}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Status:{" "}
                          <span className="capitalize">
                            {getStatusText(subscription.subscription_status)}
                          </span>
                        </p>
                      </div>

                      <div className="text-right">
                        {/* Renew / expiry info */}
                        {subscription.subscription_status === "active" &&
                          subscription.subscription_end_date && (
                            <p className="text-sm text-muted-foreground">
                              Renews on{" "}
                              <span className="font-medium">
                                {new Date(
                                  subscription.subscription_end_date,
                                ).toLocaleDateString("en-US")}
                              </span>
                            </p>
                          )}

                        {subscription.subscription_status === "canceled" &&
                          subscription.subscription_end_date && (
                            <p className="text-sm text-muted-foreground">
                              Expires on{" "}
                              <span className="font-medium">
                                {new Date(
                                  subscription.subscription_end_date,
                                ).toLocaleDateString("en-US")}
                              </span>
                            </p>
                          )}

                        {/* Cancel button */}
                        {subscription.subscription_status === "active" && (
                          <div className="mt-3">
                            <Button
                              variant="outline"
                              onClick={() => setOpenCancelDialog(true)}
                              disabled={isCancelling}
                            >
                              {isCancelling
                                ? "Cancelling..."
                                : "Cancel Subscription"}
                            </Button>
                          </div>
                        )}

                        {/* If canceled, show a small note */}
                        {subscription.subscription_status === "canceled" && (
                          <p className="text-sm text-muted-foreground mt-3">
                            Your subscription is canceled. All remaining credits
                            are lost.
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Credits progress */}
                    <div className="p-4 border rounded-lg space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">
                            {credits !== null && creditsMax !== null
                              ? `${credits} / ${creditsMax} Minutes Used`
                              : "Credit information not available."}
                          </p>
                        </div>

                        <div className="text-sm text-muted-foreground">
                          {/* show percentage */}
                          {credits !== null && creditsMax !== null ? (
                            <span className="font-medium">
                              {progressValue}%
                            </span>
                          ) : null}
                        </div>
                      </div>

                      {/* Progress bar (uses shadcn Progress) */}
                      {credits !== null && creditsMax !== null ? (
                        <Progress value={progressValue} className="h-2" />
                      ) : (
                        <p className="text-sm text-muted-foreground">
                          Credit information not available.
                        </p>
                      )}
                    </div>

                    {/* Manual refresh */}
                    {/* <div className="flex gap-3">
                    <Button variant="outline" onClick={fetchSubscriptionStatus}>
                      Refresh Subscription Details
                    </Button>
                    <Button
                      variant="ghost"
                      onClick={() => {
                        // quick re-fetch history + subscription
                        fetchSubscriptionStatus();
                        setLoadingHistory(true);
                        axios.get("/api/billing/history")
                          .then(({ data }) => setHistory(data))
                          .catch((e) => console.error(e))
                          .finally(() => setLoadingHistory(false));
                      }}
                    >
                      Refresh All
                    </Button>
                  </div> */}
                  </div>
                ) : (
                  <p className="text-muted-foreground text-center">
                    No subscription data found.
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Cancel Confirmation Dialog */}
            <Dialog open={openCancelDialog} onOpenChange={setOpenCancelDialog}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-3">
                    <span className="text-rose-500">
                      <IconAlertTriangle />
                    </span>
                    Cancel Subscription
                  </DialogTitle>
                  <DialogDescription>
                    Canceling will permanently delete all remaining credits.
                    Please use your credits before canceling. This action cannot
                    be undone.
                  </DialogDescription>
                </DialogHeader>

                {/* Image + copy */}

                <DialogFooter className="flex items-center justify-end gap-2">
                  <Button
                    variant="outline"
                    onClick={() => setOpenCancelDialog(false)}
                  >
                    Keep Subscription
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={handleCancelSubscription}
                    disabled={isCancelling}
                  >
                    {isCancelling ? "Cancelling..." : "Confirm Cancel"}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            {/* Section 2: Invoice History */}
            <Card>
              <CardHeader>
                <CardTitle>Invoice History</CardTitle>
                <CardDescription>
                  A record of all your past payments.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {errorHistory && (
                  <p className="text-center text-red-500">{errorHistory}</p>
                )}

                {!errorHistory && (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Invoice #</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {loadingHistory ? (
                        // --- Table Skeleton Rows ---
                        [...Array(3)].map((_, i) => (
                          <TableRow key={i}>
                            <TableCell>
                              <Skeleton className="h-4 w-24" />
                            </TableCell>
                            <TableCell>
                              <Skeleton className="h-4 w-24" />
                            </TableCell>
                            <TableCell>
                              <Skeleton className="h-6 w-16 rounded-full" />
                            </TableCell>
                            <TableCell className="text-right">
                              <Skeleton className="h-4 w-16 ml-auto" />
                            </TableCell>
                            <TableCell className="text-right">
                              <Skeleton className="h-9 w-[105px] ml-auto" />
                            </TableCell>
                          </TableRow>
                        ))
                      ) : history.length > 0 ? (
                        // --- Actual Table Content ---
                        history.map((record) => (
                          <TableRow key={record.id}>
                            <TableCell className="font-medium">
                              {`INV-${record.id.toString().padStart(4, "0")}`}
                            </TableCell>
                            <TableCell>
                              {new Date(record.created_at).toLocaleDateString(
                                "en-US",
                              )}
                            </TableCell>
                            <TableCell>
                              <Badge
                                variant={
                                  record.status === "paid" ||
                                  record.status === "captured"
                                    ? "default"
                                    : "secondary"
                                }
                              >
                                {record.status}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              ${record.amount.toFixed(2)}
                            </TableCell>
                            <TableCell className="text-right">
                              <Button asChild variant="outline" size="sm">
                                <a
                                  href={record.short_url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  View Invoice
                                </a>
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={5} className="text-center">
                            No billing history found.
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </SidebarInset>
  );
}
