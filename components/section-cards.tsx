// import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"

// import { Badge } from "@/components/ui/badge"
// import {
//   Card,
//   CardAction,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"

// export function SectionCards() {
//   return (
//     <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
//       <Card className="@container/card">
//         <CardHeader>
//           <CardDescription>Total Revenue</CardDescription>
//           <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
//             $1,250.00
//           </CardTitle>
//           <CardAction>
//             <Badge variant="outline">
//               <IconTrendingUp />
//               +12.5%
//             </Badge>
//           </CardAction>
//         </CardHeader>
//         <CardFooter className="flex-col items-start gap-1.5 text-sm">
//           <div className="line-clamp-1 flex gap-2 font-medium">
//             Trending up this month <IconTrendingUp className="size-4" />
//           </div>
//           <div className="text-muted-foreground">
//             Visitors for the last 6 months
//           </div>
//         </CardFooter>
//       </Card>
//       <Card className="@container/card">
//         <CardHeader>
//           <CardDescription>New Customers</CardDescription>
//           <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
//             1,234
//           </CardTitle>
//           <CardAction>
//             <Badge variant="outline">
//               <IconTrendingDown />
//               -20%
//             </Badge>
//           </CardAction>
//         </CardHeader>
//         <CardFooter className="flex-col items-start gap-1.5 text-sm">
//           <div className="line-clamp-1 flex gap-2 font-medium">
//             Down 20% this period <IconTrendingDown className="size-4" />
//           </div>
//           <div className="text-muted-foreground">
//             Acquisition needs attention
//           </div>
//         </CardFooter>
//       </Card>
//       <Card className="@container/card">
//         <CardHeader>
//           <CardDescription>Active Accounts</CardDescription>
//           <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
//             45,678
//           </CardTitle>
//           <CardAction>
//             <Badge variant="outline">
//               <IconTrendingUp />
//               +12.5%
//             </Badge>
//           </CardAction>
//         </CardHeader>
//         <CardFooter className="flex-col items-start gap-1.5 text-sm">
//           <div className="line-clamp-1 flex gap-2 font-medium">
//             Strong user retention <IconTrendingUp className="size-4" />
//           </div>
//           <div className="text-muted-foreground">Engagement exceed targets</div>
//         </CardFooter>
//       </Card>
//       <Card className="@container/card">
//         <CardHeader>
//           <CardDescription>Growth Rate</CardDescription>
//           <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
//             4.5%
//           </CardTitle>
//           <CardAction>
//             <Badge variant="outline">
//               <IconTrendingUp />
//               +4.5%
//             </Badge>
//           </CardAction>
//         </CardHeader>
//         <CardFooter className="flex-col items-start gap-1.5 text-sm">
//           <div className="line-clamp-1 flex gap-2 font-medium">
//             Steady performance increase <IconTrendingUp className="size-4" />
//           </div>
//           <div className="text-muted-foreground">Meets growth projections</div>
//         </CardFooter>
//       </Card>
//     </div>
//   )
// }









// "use client"

// import { useEffect, useState } from "react"
// import { IconTrendingUp } from "@tabler/icons-react"
// import { Badge } from "@/components/ui/badge"
// import {
//   Card,
//   CardAction,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import { createClient } from "@/lib/client"
// import { useAuth } from "@/contexts/AuthContext"

// type Booking = {
//   duration: string | null
// }

// export function SectionCards() {
//   const { user } = useAuth()
//   const [totalDuration, setTotalDuration] = useState(0)
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     async function fetchTotalDuration() {
//       if (!user) return
//       setLoading(true)

//       const supabase = createClient()

//       const { data, error } = await supabase
//         .from("bookings")
//         .select("duration")
//         .eq("user_id", user.id)

//       if (error) {
//         console.error(error)
//         setTotalDuration(0)
//       } else if (data) {
//         const total = data.reduce((sum, item) => {
//           if (!item.duration) return sum
//           const minutes = parseInt(item.duration.replace(" mins", "").trim(), 10)
//           return sum + (isNaN(minutes) ? 0 : minutes)
//         }, 0)
//         setTotalDuration(total)
//       }

//       setLoading(false)
//     }

//     fetchTotalDuration()
//   }, [user])

//   return (
//     <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
//       <Card className="@container/card">
//         <CardHeader>
//           <CardDescription>Total Call Duration (All Time)</CardDescription>
//           <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
//             {loading ? "Loading..." : `${totalDuration} min`}
//           </CardTitle>
//           <CardAction>
//             <Badge variant="outline">
//               <IconTrendingUp />
//               All time
//             </Badge>
//           </CardAction>
//         </CardHeader>
//         <CardFooter className="flex-col items-start gap-1.5 text-sm">
//           <div className="line-clamp-1 flex gap-2 font-medium">
//             Sum of all call durations <IconTrendingUp className="size-4" />
//           </div>
//           <div className="text-muted-foreground">
//             For user: {user?.email || "Unknown"}
//           </div>
//         </CardFooter>
//       </Card>
//     </div>
//   )
// }








// "use client";

// import { useEffect, useState } from "react";
// import { IconTrendingUp } from "@tabler/icons-react";
// import { Badge } from "@/components/ui/badge";
// import {
//   Card, CardAction, CardDescription, CardFooter,
//   CardHeader, CardTitle,
// } from "@/components/ui/card";
// import { createClient } from "@/lib/client";
// import { useAuth } from "@/contexts/AuthContext";

// type Booking = {
//   status: string | null;
// };

// export function SectionCards() {
//   const { user } = useAuth();
//   const [cancelledCount, setcancelledCount] = useState(0);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchcancelledCount() {
//       if (!user) return;
//       setLoading(true);

//       const supabase = createClient();

//       // Fetch all confirmed bookings for this user
//       const { data, error } = await supabase
//         .from("bookings")
//         .select("status")
//         .eq("user_id", user.id)
//         .eq("status", "cancelled");

//       if (!error && data) {
//         setcancelledCount(data.length);
//       } else {
//         console.error(error);
//         setcancelledCount(0);
//       }

//       setLoading(false);
//     }

//     fetchcancelledCount();
//   }, [user]);

//   return (
//     <div className="grid grid-cols-1 gap-4 px-4 lg:px-6">
//       <Card className="@container/card">
//         <CardHeader>
//           <CardDescription>Total cancelled Appointments</CardDescription>
//           <CardTitle className="text-2xl font-semibold">
//             {loading ? "Loading..." : cancelledCount}
//           </CardTitle>
//           <CardAction>
//             <Badge variant="outline">
//               <IconTrendingUp />
//             </Badge>
//           </CardAction>
//         </CardHeader>
//         <CardFooter className="flex-col items-start gap-1.5 text-sm">
//           <div className="flex gap-2 font-medium">
//             All-time confirmed appointments <IconTrendingUp className="size-4" />
//           </div>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// }







// "use client";

// import { useEffect, useState } from "react";
// import { IconTrendingUp } from "@tabler/icons-react";
// import { Badge } from "@/components/ui/badge";
// import {
//   Card, CardAction, CardDescription, CardFooter,
//   CardHeader, CardTitle,
// } from "@/components/ui/card";
// import { createClient } from "@/lib/client";
// import { useAuth } from "@/contexts/AuthContext";
// import { Skeleton } from "./ui/skeleton";

// type Booking = {
//   duration: string | null;
//   status: string | null;
// };

// export function SectionCards() {
//   const { user } = useAuth();
//   const [totalDuration, setTotalDuration] = useState(0);
//   const [cancelledCount, setCancelledCount] = useState(0);
//   const [rescheduledCount, setrescheduledCount] = useState(0);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchData() {
//       if (!user) return;
//       setLoading(true);

//       const supabase = createClient();

//       const { data, error } = await supabase
//         .from("bookings")
//         .select("duration, status")
//         .eq("user_id", user.id);

//       if (!error && data) {
//         // Calculate total call duration (all time)
//         const total = data.reduce((sum, item) => {
//           if (!item.duration) return sum;
//           const minutes = parseInt(item.duration.replace(" mins", "").trim(), 10);
//           return sum + (isNaN(minutes) ? 0 : minutes);
//         }, 0);
//         setTotalDuration(total);

//         // Count cancelled appointments
//         const cancelled = data.filter(item => item.status === "cancelled").length;
//         setCancelledCount(cancelled);

//         const rescheduled = data.filter(item => item.status === "rescheduled").length;
//         setrescheduledCount(rescheduled);
//       } else {
//         console.error(error);
//         setTotalDuration(0);
//         setCancelledCount(0);
//         setrescheduledCount(0);
//       }

//       setLoading(false);
//     }

//     fetchData();
//   }, [user]);

//   return (
//     <div className="grid grid-cols-1 gap-4 px-4 lg:px-6 @xl/main:grid-cols-4">
//       {/* Total Call Duration */}
//       <Card className="@container/card">
//         <CardHeader>
//           <CardDescription>Total Call Duration (All Time)</CardDescription>
//           <CardTitle className="text-2xl font-semibold">
//             {loading ? (
//             <Skeleton className="h-8 w-[120px]" /> // Skeleton for number
//           ) : (
//             `${totalDuration} min`
//           )}
//           </CardTitle>
//           <CardAction>
//             <Badge variant="outline">
//               <IconTrendingUp />
//               All time
//             </Badge>
//           </CardAction>
//         </CardHeader>
//         <CardFooter className="flex-col items-start gap-1.5 text-sm">
//           <div className="flex gap-2 font-medium">
//             Sum of all call durations <IconTrendingUp className="size-4" />
//           </div>
//         </CardFooter>
//       </Card>

//       {/* Total Cancelled Appointments */}
//       <Card className="@container/card">
//         <CardHeader>
//           <CardDescription>Total Cancelled Appointments</CardDescription>
//           <CardTitle className="text-2xl font-semibold">
//   {loading ? <Skeleton className="h-8 w-[120px]" /> : cancelledCount}
// </CardTitle>
//           <CardAction>
//             <Badge variant="outline">
//               <IconTrendingUp />
//               All time
//             </Badge>
//           </CardAction>
//         </CardHeader>
//         <CardFooter className="flex-col items-start gap-1.5 text-sm">
//           <div className="flex gap-2 font-medium">
//             All-time cancelled appointments <IconTrendingUp className="size-4" />
//           </div>
//         </CardFooter>
//       </Card>


//       <Card className="@container/card">
//         <CardHeader>
//           <CardDescription>Total Rescheduled Appointments</CardDescription>
//           <CardTitle className="text-2xl font-semibold">
//              {loading ? <Skeleton className="h-8 w-[120px]" /> : rescheduledCount}
//           </CardTitle>
//           <CardAction>
//             <Badge variant="outline">
//               <IconTrendingUp />
//               All time
//             </Badge>
//           </CardAction>
//         </CardHeader>
//         <CardFooter className="flex-col items-start gap-1.5 text-sm">
//           <div className="flex gap-2 font-medium">
//             All-time rescheduled appointments <IconTrendingUp className="size-4" />
//           </div>
//         </CardFooter>
//       </Card>


//       <Card className="@container/card">
//         <CardHeader>
//           <CardDescription>Total Cancelled Appointments</CardDescription>
//           <CardTitle className="text-2xl font-semibold">
//             {loading ? <Skeleton className="h-8 w-[120px]" /> : rescheduledCount}
//           </CardTitle>
//           <CardAction>
//             <Badge variant="outline">
//               <IconTrendingUp />
//               All time
//             </Badge>
//           </CardAction>
//         </CardHeader>
//         <CardFooter className="flex-col items-start gap-1.5 text-sm">
//           <div className="flex gap-2 font-medium">
//             All-time cancelled appointments <IconTrendingUp className="size-4" />
//           </div>
//         </CardFooter>
//       </Card>


      
//     </div>
//   );
// }






// "use client";

// import { useEffect, useState } from "react";
// import { IconTrendingUp } from "@tabler/icons-react";
// import { Badge } from "@/components/ui/badge";
// import {
//   Card,
//   CardAction,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { createClient } from "@/lib/client";
// import { useAuth } from "@/contexts/AuthContext";
// import { Skeleton } from "./ui/skeleton";

// type Booking = {
//   duration: string | null;
//   status: string | null;
//   created_at: string; // make sure your "bookings" table has this field
// };

// export function SectionCards() {
//   const { user } = useAuth();
//   const [totalCalls, setTotalCalls] = useState(0);
//   const [totalDuration, setTotalDuration] = useState(0);
//   const [appointmentsBooked, setAppointmentsBooked] = useState(0);
//   const [successRate, setSuccessRate] = useState(0);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchData() {
//       if (!user) return;
//       setLoading(true);

//       const supabase = createClient();

//       // get date for last 30 days
//       const thirtyDaysAgo = new Date();
//       thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

//       const { data, error } = await supabase
//         .from("bookings")
//         .select("duration, status, created_at")
//         .eq("user_id", user.id)
//         .gte("created_at", thirtyDaysAgo.toISOString());

//       if (!error && data) {
//         // total calls = sum of all call durations > 0
//         const calls = data.filter((item) => {
//           if (!item.duration) return false;
//           const minutes = parseInt(item.duration.replace(" mins", "").trim(), 10);
//           return !isNaN(minutes) && minutes > 0;
//         }).length;
//         setTotalCalls(calls);

//         // total appointments booked (exclude cancelled & rescheduled)
//         const appointments = data.filter(
//           (item) => item.status !== "cancelled" && item.status !== "rescheduled"
//         ).length;
//         setAppointmentsBooked(appointments);

//         // success rate %
//         const rate = calls > 0 ? Math.round((appointments / calls) * 100) : 0;
//         setSuccessRate(rate);
//       } else {
//         console.error(error);
//         setTotalCalls(0);
//         setAppointmentsBooked(0);
//         setSuccessRate(0);
//       }

//       setLoading(false);
//     }

//     fetchData();
//   }, [user]);

//   return (
//     <div className="grid grid-cols-1 gap-4 px-4 lg:px-6 @xl/main:grid-cols-4">
//       <Card className="@container/card">
//         <CardHeader>
//           <CardDescription>Total Call Duration (All Time)</CardDescription>
//           <CardTitle className="text-2xl font-semibold">
//             {loading ? (
//             <Skeleton className="h-8 w-[120px]" /> // Skeleton for number
//           ) : (
//             `${totalDuration} min`
//           )}
//           </CardTitle>
//           <CardAction>
//             <Badge variant="outline">
//               <IconTrendingUp />
//               All time
//             </Badge>
//           </CardAction>
//         </CardHeader>
//         <CardFooter className="flex-col items-start gap-1.5 text-sm">
//           <div className="flex gap-2 font-medium">
//             Sum of all call durations <IconTrendingUp className="size-4" />
//           </div>
//         </CardFooter>
//       </Card>
//       {/* Total Number of Calls */}
//       <Card className="@container/card">
//         <CardHeader>
//           <CardDescription>Total Number of Calls (Last 30 Days)</CardDescription>
//           <CardTitle className="text-2xl font-semibold">
//             {loading ? <Skeleton className="h-8 w-[120px]" /> : totalCalls}
//           </CardTitle>
//           <CardAction>
//             <Badge variant="outline">
//               <IconTrendingUp />
//               Last 30 Days
//             </Badge>
//           </CardAction>
//         </CardHeader>
//         <CardFooter className="flex-col items-start gap-1.5 text-sm">
//           <div className="flex gap-2 font-medium">
//             Number of calls attended <IconTrendingUp className="size-4" />
//           </div>
//         </CardFooter>
//       </Card>

//       {/* Total Appointments Booked */}
//       <Card className="@container/card">
//         <CardHeader>
//           <CardDescription>Total Appointments Booked (Last 30 Days)</CardDescription>
//           <CardTitle className="text-2xl font-semibold">
//             {loading ? <Skeleton className="h-8 w-[120px]" /> : appointmentsBooked}
//           </CardTitle>
//           <CardAction>
//             <Badge variant="outline">
//               <IconTrendingUp />
//               Last 30 Days
//             </Badge>
//           </CardAction>
//         </CardHeader>
//         <CardFooter className="flex-col items-start gap-1.5 text-sm">
//           <div className="flex gap-2 font-medium">
//             Appointments booked successfully <IconTrendingUp className="size-4" />
//           </div>
//         </CardFooter>
//       </Card>

//       {/* Appointment Success Rate */}
//       <Card className="@container/card">
//         <CardHeader>
//           <CardDescription>Appointment Success Rate (%)</CardDescription>
//           <CardTitle className="text-2xl font-semibold">
//             {loading ? <Skeleton className="h-8 w-[120px]" /> : `${successRate}%`}
//           </CardTitle>
//           <CardAction>
//             <Badge variant="outline">
//               <IconTrendingUp />
//               Last 30 Days
//             </Badge>
//           </CardAction>
//         </CardHeader>
//         <CardFooter className="flex-col items-start gap-1.5 text-sm">
//           <div className="flex gap-2 font-medium">
//             Appointments ÷ Calls <IconTrendingUp className="size-4" />
//           </div>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// }














// "use client";

// import { useEffect, useState } from "react";
// import { IconTrendingUp } from "@tabler/icons-react";
// import { Badge } from "@/components/ui/badge";
// import {
//   Card,
//   CardAction,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { createClient } from "@/lib/client";
// import { useAuth } from "@/contexts/AuthContext";
// import { Skeleton } from "./ui/skeleton";

// type Booking = {
//   booking_id: string | null;
//   duration: string | null;
//   created_at: string;
// };

// function parseMinutes(duration: string | null): number {
//   if (!duration) return 0;
//   const match = duration.match(/\d+/); // grab first number
//   return match ? parseInt(match[0], 10) : 0;
// }

// export function SectionCards() {
//   const { user } = useAuth();
//   const [totalCalls, setTotalCalls] = useState(0);
//   const [totalDuration, setTotalDuration] = useState(0);
//   const [appointmentsBooked, setAppointmentsBooked] = useState(0);
//   const [successRate, setSuccessRate] = useState(0);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchData() {
//       if (!user) return;
//       setLoading(true);

//       const supabase = createClient();

//       // ✅ fetch all-time data (no date filter)
//       const { data, error } = await supabase
//         .from("bookings")
//         .select("booking_id, duration, created_at")
//         .eq("user_id", user.id);

//       if (error) {
//         console.error("Supabase error:", error);
//         setLoading(false);
//         return;
//       }

//       if (data && data.length > 0) {
//         // Total Calls = count rows where duration > 0
//         const calls = data.filter((item) => parseMinutes(item.duration) > 0).length;
//         setTotalCalls(calls);

//         // Total Call Duration
//         const durationSum = data.reduce((sum, item) => sum + parseMinutes(item.duration), 0);
//         setTotalDuration(durationSum);

//         // Total Appointments Booked (booking_id not null/empty)
//         const appointments = data.filter(
//           (item) => item.booking_id && item.booking_id.trim() !== ""
//         ).length;
//         setAppointmentsBooked(appointments);

//         // Success Rate = appointments ÷ calls
//         const rate = calls > 0 ? Math.round((appointments / calls) * 100) : 0;
//         setSuccessRate(rate);
//       }

//       setLoading(false);
//     }

//     fetchData();
//   }, [user]);

//   return (
//     <div className="grid grid-cols-1 gap-4 px-4 lg:px-6 @xl/main:grid-cols-4">
//       {/* Appointment Success Rate */}
//       <Card className="@container/card">
//         <CardHeader>
//           <CardDescription>Appointment Success Rate (%)</CardDescription>
//           <CardTitle className="text-2xl font-semibold">
//             {loading ? <Skeleton className="h-8 w-[120px]" /> : `${successRate}%`}
//           </CardTitle>
//           <CardAction>
//             <Badge variant="outline">
//               <IconTrendingUp />
//               All Time
//             </Badge>
//           </CardAction>
//         </CardHeader>
//       </Card>

//       {/* Total Appointments Booked */}
//       <Card className="@container/card">
//         <CardHeader>
//           <CardDescription>Total Appointments Booked</CardDescription>
//           <CardTitle className="text-2xl font-semibold">
//             {loading ? <Skeleton className="h-8 w-[120px]" /> : appointmentsBooked}
//           </CardTitle>
//           <CardAction>
//             <Badge variant="outline">
//               <IconTrendingUp />
//               All Time
//             </Badge>
//           </CardAction>
//         </CardHeader>
//       </Card>

//       {/* Total Calls */}
//       <Card className="@container/card">
//         <CardHeader>
//           <CardDescription>Total Number of Calls</CardDescription>
//           <CardTitle className="text-2xl font-semibold">
//             {loading ? <Skeleton className="h-8 w-[120px]" /> : totalCalls}
//           </CardTitle>
//           <CardAction>
//             <Badge variant="outline">
//               <IconTrendingUp />
//               All Time
//             </Badge>
//           </CardAction>
//         </CardHeader>
//       </Card>

//       {/* Total Duration */}
//       <Card className="@container/card">
//         <CardHeader>
//           <CardDescription>Total Minutes of Calls</CardDescription>
//           <CardTitle className="text-2xl font-semibold">
//             {loading ? (
//               <Skeleton className="h-8 w-[120px]" />
//             ) : (
//               `${totalDuration} min`
//             )}
//           </CardTitle>
//           <CardAction>
//             <Badge variant="outline">
//               <IconTrendingUp />
//               All Time
//             </Badge>
//           </CardAction>
//         </CardHeader>
//       </Card>
//     </div>
//   );
// }




//final vertion for all time--------------[backup]
//--------------------------------------


// "use client";

// import { useEffect, useState } from "react";
// import { IconTrendingUp } from "@tabler/icons-react";
// import { Badge } from "@/components/ui/badge";
// import {
//   Card,
//   CardAction,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { createClient } from "@/lib/client";
// import { useAuth } from "@/contexts/AuthContext";
// import { Skeleton } from "./ui/skeleton";

// type Booking = {
//   booking_id: string | null;
//   duration: string | null;
//   status: string | null;
//   booked_on: string;
// };

// function parseMinutes(duration: string | null): number {
//   if (!duration) return 0;
//   const match = duration.match(/\d+/);
//   return match ? parseInt(match[0], 10) : 0;
// }

// export function SectionCards() {
//   const { user } = useAuth();
//   const [totalCalls, setTotalCalls] = useState(0);
//   const [totalDuration, setTotalDuration] = useState(0);
//   const [appointmentsBooked, setAppointmentsBooked] = useState(0);
//   const [successRate, setSuccessRate] = useState(0);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchData() {
//       if (!user) return;
//       setLoading(true);

//       const supabase = createClient();
//       const { data, error } = await supabase
//         .from("bookings")
//         .select("booking_id, duration, status, booked_on")
//         .eq("user_id", user.id);

//       if (error || !data) {
//         console.error("Supabase error:", error);
//         setLoading(false);
//         return;
//       }

//       // ✅ All-time stats
//       const calls = data.filter((item) => parseMinutes(item.duration) > 0);
//       const totalCalls = calls.length;
//       const totalDuration = calls.reduce(
//         (sum, item) => sum + parseMinutes(item.duration),
//         0
//       );

//       const appointments = data.filter(
//         (item) => item.booking_id && item.booking_id.trim() !== ""
//       );
//       const totalAppointments = appointments.length;

//       // Success Rate = appointments ÷ calls
//       const rate =
//         totalCalls > 0 ? Math.round((totalAppointments / totalCalls) * 100) : 0;

//       setTotalCalls(totalCalls);
//       setTotalDuration(totalDuration);
//       setAppointmentsBooked(totalAppointments);
//       setSuccessRate(rate);

//       setLoading(false);
//     }

//     fetchData();
//   }, [user]);

//   return (
//     <div className="grid grid-cols-1 gap-4 px-4 lg:px-6 @xl/main:grid-cols-4">


//       {/* Total Calls */}
//       <Card className="@container/card">
//         <CardHeader>
//           <CardDescription>Total Number of Calls</CardDescription>
//           <CardTitle className="text-2xl font-semibold">
//             {loading ? <Skeleton className="h-8 w-[120px]" /> : totalCalls}
//           </CardTitle>
//           <CardAction>
//             <Badge variant="outline">
//               <IconTrendingUp /> All Time
//             </Badge>
//           </CardAction>
//         </CardHeader>
//       </Card>

//       {/* Total Appointments */}
//       <Card className="@container/card">
//         <CardHeader>
//           <CardDescription>Total Appointments Booked</CardDescription>
//           <CardTitle className="text-2xl font-semibold">
//             {loading ? <Skeleton className="h-8 w-[120px]" /> : appointmentsBooked}
//           </CardTitle>
//           <CardAction>
//             <Badge variant="outline">
//               <IconTrendingUp /> All Time
//             </Badge>
//           </CardAction>
//         </CardHeader>
//       </Card>


//        {/* Appointment Success Rate */}
//       <Card className="@container/card">
//         <CardHeader>
//           <CardDescription>Appointment Success Rate (%)</CardDescription>
//           <CardTitle className="text-2xl font-semibold">
//             {loading ? <Skeleton className="h-8 w-[120px]" /> : `${successRate}%`}
//           </CardTitle>
//           <CardAction>
//             <Badge variant="outline">
//               <IconTrendingUp /> All Time
//             </Badge>
//           </CardAction>
//         </CardHeader>
//       </Card>

//       {/* Total Duration */}
//       <Card className="@container/card">
//         <CardHeader>
//           <CardDescription>Total Minutes of Calls</CardDescription>
//           <CardTitle className="text-2xl font-semibold">
//             {loading ? <Skeleton className="h-8 w-[120px]" /> : `${totalDuration} min`}
//           </CardTitle>
//           <CardAction>
//             <Badge variant="outline">
//               <IconTrendingUp /> All Time
//             </Badge>
//           </CardAction>
//         </CardHeader>
//       </Card>
//     </div>
//   );
// }













// "use client";

// import { useEffect, useState } from "react";
// import { IconCalendarWeek, IconTrendingUp } from "@tabler/icons-react";
// import { Badge } from "@/components/ui/badge";
// import {
//   Card,
//   CardAction,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { createClient } from "@/lib/client";
// import { useAuth } from "@/contexts/AuthContext";
// import { Skeleton } from "./ui/skeleton";

// type Booking = {
//   booking_id: string | null;
//   duration: string | null;
//   status: string | null;
//   booked_on: string;
// };

// function parseMinutes(duration: string | null): number {
//   if (!duration) return 0;
//   const match = duration.match(/\d+/);
//   return match ? parseInt(match[0], 10) : 0;
// }

// export function SectionCards() {
//   const { user } = useAuth();
//   const [totalCalls, setTotalCalls] = useState(0);
//   const [totalDuration, setTotalDuration] = useState(0);
//   const [appointmentsBooked, setAppointmentsBooked] = useState(0);
//   const [successRate, setSuccessRate] = useState(0);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchData() {
//       if (!user) return;
//       setLoading(true);

//       const supabase = createClient();

//       // calculate date 30 days ago
//       const today = new Date();
//       const thirtyDaysAgo = new Date();
//       thirtyDaysAgo.setDate(today.getDate() - 30);

//       // fetch last 30 days
//       const { data, error } = await supabase
//         .from("bookings")
//         .select("booking_id, duration, status, booked_on")
//         .eq("user_id", user.id)
//         .gte("booked_on", thirtyDaysAgo.toISOString());

//       if (error || !data) {
//         console.error("Supabase error:", error);
//         setLoading(false);
//         return;
//       }

//       // ✅ 30-day stats
//       const calls = data.filter((item) => parseMinutes(item.duration) > 0);
//       const totalCalls = calls.length;
//       const totalDuration = calls.reduce(
//         (sum, item) => sum + parseMinutes(item.duration),
//         0
//       );

//       const appointments = data.filter(
//         (item) => item.booking_id && item.booking_id.trim() !== ""
//       );
//       const totalAppointments = appointments.length;

//       // Success Rate = appointments ÷ calls
//       const rate =
//         totalCalls > 0 ? Math.round((totalAppointments / totalCalls) * 100) : 0;

//       setTotalCalls(totalCalls);
//       setTotalDuration(totalDuration);
//       setAppointmentsBooked(totalAppointments);
//       setSuccessRate(rate);

//       setLoading(false);
//     }

//     fetchData();
//   }, [user]);

//   return (
//     <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">

//        {/* Total Calls */}
//       <Card className="@container/card">
//         <CardHeader>
//           <CardDescription>Total Number of Calls</CardDescription>
//           <CardTitle className="text-2xl font-semibold">
//             {loading ? <Skeleton className="h-8 w-[120px]" /> : totalCalls}
//           </CardTitle>
//           <CardAction>
//             <Badge variant="outline">
//               <IconCalendarWeek />30 Days
//             </Badge>
//           </CardAction>
//         </CardHeader>
//       </Card>

//       {/* Total Appointments */}
//       <Card className="@container/card">
//         <CardHeader>
//           <CardDescription>Total Appointments Booked</CardDescription>
//           <CardTitle className="text-2xl font-semibold">
//             {loading ? <Skeleton className="h-8 w-[120px]" /> : appointmentsBooked}
//           </CardTitle>
//           <CardAction>
//             <Badge variant="outline">
//               <IconCalendarWeek />30 Days
//             </Badge>
//           </CardAction>
//         </CardHeader>
//       </Card>


//       {/* Appointment Success Rate */}
//       <Card className="@container/card">
//         <CardHeader>
//           <CardDescription>Appointment Success Rate (%)</CardDescription>
//           <CardTitle className="text-2xl font-semibold">
//             {loading ? <Skeleton className="h-8 w-[120px]" /> : `${successRate}%`}
//           </CardTitle>
//           <CardAction>
//             <Badge variant="outline">
//               <IconCalendarWeek />30 Days
//             </Badge>
//           </CardAction>
//         </CardHeader>
//       </Card>

//       {/* Total Duration */}
//       <Card className="@container/card">
//         <CardHeader>
//           <CardDescription>Total Minutes of Calls</CardDescription>
//           <CardTitle className="text-2xl font-semibold">
//             {loading ? <Skeleton className="h-8 w-[120px]" /> : `${totalDuration} min`}
//           </CardTitle>
//           <CardAction>
//             <Badge variant="outline">
//               <IconCalendarWeek />30 Days
//             </Badge>
//           </CardAction>
//         </CardHeader>
//       </Card>
//     </div>
//   );
// }



















// "use client";

// import { useEffect, useState } from "react";
// import { IconCalendarWeek } from "@tabler/icons-react";
// import { Badge } from "@/components/ui/badge";
// import {
//   Card,
//   CardAction,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { createClient } from "@/lib/client";
// import { useAuth } from "@/contexts/AuthContext";
// import { Skeleton } from "@/components/ui/skeleton";

// type LeadForm = {
//   id: number;
//   created_at: string;
//   assistants_id: string;
//   phone_numbers_id: string;
//   customer_name: string;
//   customer_email: string;
//   customer_massage: string;
//   customer_number: string;
//   user_id: string;
//   form_id: string;
//   status: string;
//   call_summary: string;
//   call_id: string;
//   call_started: string;
//   call_ended: string;
//   call_recording: string;
//   call_endedreason: string;
//   messages: string;
//   form_submission: string;
//   call_duration: string;
// };

// export function LeadStatsCards() {
//   const { user } = useAuth();
//   const [totalLeads, setTotalLeads] = useState(0);
//   const [successfulCalls, setSuccessfulCalls] = useState(0);
//   const [failedCalls, setFailedCalls] = useState(0);
//   const [successRate, setSuccessRate] = useState(0);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchLeadStats() {
//       if (!user) return;
//       setLoading(true);

//       const supabase = createClient();

//       // Fetch all leads for this user
//       const { data, error } = await supabase
//         .from("leadform")
//         .select("*")
//         .eq("user_id", user.id)
//         .order("id", { ascending: false });

//       if (error || !data) {
//         console.error("Supabase error:", error);
//         setLoading(false);
//         return;
//       }

//       // ✅ Total Leads Captured — both name and number must exist
//       const validLeads = data.filter(
//         (lead) =>
//           lead.customer_name?.trim() !== "" &&
//           lead.customer_number?.trim() !== ""
//       );
//       const totalLeads = validLeads.length;

//       // ✅ Successful Calls — call_id exists
//       const successfulCalls = data.filter(
//         (lead) => lead.call_id && lead.call_id.trim() !== ""
//       ).length;

//       // ✅ Failed Calls — call_id missing
//       const failedCalls = data.filter(
//         (lead) => !lead.call_id || lead.call_id.trim() === ""
//       ).length;

//       // ✅ Success Rate (%)
//       const totalCalls = successfulCalls + failedCalls;
//       const successRate =
//         totalCalls > 0 ? Math.round((successfulCalls / totalCalls) * 100) : 0;

//       // Set states
//       setTotalLeads(totalLeads);
//       setSuccessfulCalls(successfulCalls);
//       setFailedCalls(failedCalls);
//       setSuccessRate(successRate);
//       setLoading(false);
//     }

//     fetchLeadStats();
//   }, [user]);

//   return (
//     <div className="grid grid-cols-1 gap-4 px-4 lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card *:data-[slot=card]:shadow-xs">
      
//       {/* Total Leads Captured */}
//       <Card className="@container/card">
//         <CardHeader>
//           <CardDescription>Total Leads Captured</CardDescription>
//           <CardTitle className="text-2xl font-semibold">
//             {loading ? <Skeleton className="h-8 w-[120px]" /> : totalLeads}
//           </CardTitle>
//           <CardAction>
//             <Badge variant="outline">
//               <IconCalendarWeek />All Time
//             </Badge>
//           </CardAction>
//         </CardHeader>
//       </Card>

//       {/* Successful Calls */}
//       <Card className="@container/card">
//         <CardHeader>
//           <CardDescription>Successful Calls</CardDescription>
//           <CardTitle className="text-2xl font-semibold">
//             {loading ? <Skeleton className="h-8 w-[120px]" /> : successfulCalls}
//           </CardTitle>
//           <CardAction>
//             <Badge variant="outline">
//               <IconCalendarWeek />All Time
//             </Badge>
//           </CardAction>
//         </CardHeader>
//       </Card>

//       {/* Failed Calls */}
//       <Card className="@container/card">
//         <CardHeader>
//           <CardDescription>Failed Calls</CardDescription>
//           <CardTitle className="text-2xl font-semibold">
//             {loading ? <Skeleton className="h-8 w-[120px]" /> : failedCalls}
//           </CardTitle>
//           <CardAction>
//             <Badge variant="outline">
//               <IconCalendarWeek />All Time
//             </Badge>
//           </CardAction>
//         </CardHeader>
//       </Card>

//       {/* Success Rate */}
//       <Card className="@container/card">
//         <CardHeader>
//           <CardDescription>Success Rate (%)</CardDescription>
//           <CardTitle className="text-2xl font-semibold">
//             {loading ? (
//               <Skeleton className="h-8 w-[120px]" />
//             ) : (
//               `${successRate}%`
//             )}
//           </CardTitle>
//           <CardAction>
//             <Badge variant="outline">
//               <IconCalendarWeek />All Time
//             </Badge>
//           </CardAction>
//         </CardHeader>
//       </Card>
//     </div>
//   );
// }



















// "use client";

// import { useEffect, useState } from "react";
// import { IconArrowUpRight, IconArrowDownRight, IconCalendarWeek, IconTrendingUp } from "@tabler/icons-react";
// import { Badge } from "@/components/ui/badge";
// import {
//   Card,
//   CardAction,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { createClient } from "@/lib/client";
// import { useAuth } from "@/contexts/AuthContext";
// import { Skeleton } from "@/components/ui/skeleton";
// import { TrendingUp } from "lucide-react";

// type LeadForm = {
//   id: number;
//   created_at: string;
//   customer_name: string;
//   customer_number: string;
//   call_id: string;
//   user_id: string;
// };

// export function LeadStatsCards() {
//   const { user } = useAuth();
//   const [stats, setStats] = useState({
//     totalLeads: 0,
//     successfulCalls: 0,
//     failedCalls: 0,
//     successRate: 0,
//   });

//   const [percentChange, setPercentChange] = useState({
//     totalLeads: 0,
//     successfulCalls: 0,
//     failedCalls: 0,
//     successRate: 0,
//   });

//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchLeadStats() {
//       if (!user) return;
//       setLoading(true);

//       const supabase = createClient();

//       const today = new Date();
//       const thirtyDaysAgo = new Date();
//       const sixtyDaysAgo = new Date();

//       thirtyDaysAgo.setDate(today.getDate() - 30);
//       sixtyDaysAgo.setDate(today.getDate() - 60);

//       // ✅ Fetch current 30 days
//       const { data: currentData, error: currentError } = await supabase
//         .from("leadform")
//         .select("*")
//         .eq("user_id", user.id)
//         .gte("created_at", thirtyDaysAgo.toISOString())
//         .lte("created_at", today.toISOString());

//       // ✅ Fetch previous 30 days
//       const { data: prevData, error: prevError } = await supabase
//         .from("leadform")
//         .select("*")
//         .eq("user_id", user.id)
//         .gte("created_at", sixtyDaysAgo.toISOString())
//         .lt("created_at", thirtyDaysAgo.toISOString());

//       if (currentError || prevError) {
//         console.error("Supabase error:", currentError || prevError);
//         setLoading(false);
//         return;
//       }

//       const calcStats = (data: LeadForm[]) => {
//         const totalLeads = data.filter(
//           (lead) =>
//             lead.customer_name?.trim() !== "" &&
//             lead.customer_number?.trim() !== ""
//         ).length;

//         const successfulCalls = data.filter(
//           (lead) => lead.call_id && lead.call_id.trim() !== ""
//         ).length;

//         const failedCalls = data.filter(
//           (lead) => !lead.call_id || lead.call_id.trim() === ""
//         ).length;

//         const totalCalls = successfulCalls + failedCalls;
//         const successRate =
//           totalCalls > 0 ? Math.round((successfulCalls / totalCalls) * 100) : 0;

//         return { totalLeads, successfulCalls, failedCalls, successRate };
//       };

//       const currentStats = calcStats(currentData || []);
//       const previousStats = calcStats(prevData || []);

//       const calcChange = (current: number, prev: number) => {
//         if (prev === 0) return current > 0 ? 100 : 0;
//         return Math.round(((current - prev) / prev) * 100);
//       };

//       setStats(currentStats);
//       setPercentChange({
//         totalLeads: calcChange(currentStats.totalLeads, previousStats.totalLeads),
//         successfulCalls: calcChange(currentStats.successfulCalls, previousStats.successfulCalls),
//         failedCalls: calcChange(currentStats.failedCalls, previousStats.failedCalls),
//         successRate: calcChange(currentStats.successRate, previousStats.successRate),
//       });

//       setLoading(false);
//     }

//     fetchLeadStats();
//   }, [user]);

//   const renderBadge = (value: number) => {
//     const isPositive = value >= 0;
//     const Icon = isPositive ? TrendingUp : IconArrowDownRight;
//     const color = isPositive ? "text-green-500" : "text-red-500";
//     return (
//       <Badge variant="outline" className="flex items-center gap-1">
//         <Icon className={`${color} w-4 h-4`} />
//         <span className={color}>{Math.abs(value)}%</span>
//       </Badge>
//     );
//   };

//   return (
//     <div className="grid grid-cols-1 gap-4 px-4 lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card *:data-[slot=card]:shadow-xs">
//       {/* Total Leads Captured */}
//       <Card className="@container/card">
//         <CardHeader>
//           <CardDescription>Total Leads Captured</CardDescription>
//           <CardTitle className="text-2xl font-semibold flex items-center justify-between">
//             {loading ? (
//               <Skeleton className="h-8 w-[120px]" />
//             ) : (
//               <>
//                 {stats.totalLeads}
//               </>
//             )}
//           </CardTitle>
//           <CardAction>
//              {loading ? (
//               <Skeleton className="h-5 w-[65px]" />
//             ) : (
//               <>
//                 {renderBadge(percentChange.totalLeads)}
//               </>
//             )}
//             {/* <Badge variant="secondary">
//               <IconCalendarWeek className="w-4 h-4 mr-1" />
//               Last 30 Days
//             </Badge> */}
//           </CardAction>
//         </CardHeader>
//          <CardFooter className="flex-col items-start gap-1.5 text-sm">
//           <div className="line-clamp-1 flex gap-2 font-medium">
//             Trending up this month <IconTrendingUp className="size-4" />
//           </div>
//           <div className="text-muted-foreground">
//             Form fill up for the last 1 months
//           </div>
//         </CardFooter>
//       </Card>

//       {/* Successful Calls */}
//       <Card className="@container/card">
//         <CardHeader>
//           <CardDescription>Successful Calls</CardDescription>
//           <CardTitle className="text-2xl font-semibold flex items-center justify-between">
//             {loading ? (
//               <Skeleton className="h-8 w-[120px]" />
//             ) : (
//               <>
//                 {stats.successfulCalls}
//                 {renderBadge(percentChange.successfulCalls)}
//               </>
//             )}
//           </CardTitle>
//           <CardAction>
//             <Badge variant="secondary">
//               <IconCalendarWeek className="w-4 h-4 mr-1" />
//               Last 30 Days
//             </Badge>
//           </CardAction>
//         </CardHeader>
//       </Card>

//       {/* Failed Calls */}
//       <Card className="@container/card">
//         <CardHeader>
//           <CardDescription>Failed Calls</CardDescription>
//           <CardTitle className="text-2xl font-semibold flex items-center justify-between">
//             {loading ? (
//               <Skeleton className="h-8 w-[120px]" />
//             ) : (
//               <>
//                 {stats.failedCalls}
//                 {renderBadge(percentChange.failedCalls)}
//               </>
//             )}
//           </CardTitle>
//           <CardAction>
//             <Badge variant="secondary">
//               <IconCalendarWeek className="w-4 h-4 mr-1" />
//               Last 30 Days
//             </Badge>
//           </CardAction>
//         </CardHeader>
//       </Card>

//       {/* Success Rate */}
//       <Card className="@container/card">
//         <CardHeader>
//           <CardDescription>Success Rate (%)</CardDescription>
//           <CardTitle className="text-2xl font-semibold flex items-center justify-between">
//             {loading ? (
//               <Skeleton className="h-8 w-[120px]" />
//             ) : (
//               <>
//                 {stats.successRate}%
//                 {renderBadge(percentChange.successRate)}
//               </>
//             )}
//           </CardTitle>
//           <CardAction>
//             <Badge variant="secondary">
//               <IconCalendarWeek className="w-4 h-4 mr-1" />
//               Last 30 Days
//             </Badge>
//           </CardAction>
//         </CardHeader>
//       </Card>
//     </div>
//   );
// }





"use client";

import { useEffect, useState } from "react";
import {
  IconArrowDownRight,
  IconCalendarWeek,
  IconTrendingUp,
} from "@tabler/icons-react";
import { TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createClient } from "@/lib/client";
import { useAuth } from "@/contexts/AuthContext";
import { Skeleton } from "@/components/ui/skeleton";

type LeadForm = {
  id: number;
  created_at: string; // ✅ use created_at
  customer_name: string;
  customer_number: string;
  call_id: string;
  user_id: string;
};

export function LeadStatsCards() {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    totalLeads: 0,
    successfulCalls: 0,
    failedCalls: 0,
    successRate: 0,
  });

  const [percentChange, setPercentChange] = useState({
    totalLeads: 0,
    successfulCalls: 0,
    failedCalls: 0,
    successRate: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLeadStats() {
      if (!user) return;
      setLoading(true);

      const supabase = createClient();

      const today = new Date();
      const thirtyDaysAgo = new Date();
      const sixtyDaysAgo = new Date();

      thirtyDaysAgo.setDate(today.getDate() - 30);
      sixtyDaysAgo.setDate(today.getDate() - 60);

      // ✅ Fetch current 30 days (based on created_at)
      const { data: currentData, error: currentError } = await supabase
        .from("leadform")
        .select("*")
        .eq("user_id", user.id)
        .gte("created_at", thirtyDaysAgo.toISOString())
        .lte("created_at", today.toISOString());

      // ✅ Fetch previous 30 days (based on created_at)
      const { data: prevData, error: prevError } = await supabase
        .from("leadform")
        .select("*")
        .eq("user_id", user.id)
        .gte("created_at", sixtyDaysAgo.toISOString())
        .lt("created_at", thirtyDaysAgo.toISOString());

      if (currentError || prevError) {
        console.error("Supabase error:", currentError || prevError);
        setLoading(false);
        return;
      }

      const calcStats = (data: LeadForm[]) => {
        const totalLeads = data.filter(
          (lead) =>
            lead.customer_name?.trim() !== "" &&
            lead.customer_number?.trim() !== ""
        ).length;

        const successfulCalls = data.filter(
          (lead) => lead.call_id && lead.call_id.trim() !== ""
        ).length;

        const failedCalls = data.filter(
          (lead) => !lead.call_id || lead.call_id.trim() === ""
        ).length;

        const totalCalls = successfulCalls + failedCalls;
        const successRate =
          totalCalls > 0 ? Math.round((successfulCalls / totalCalls) * 100) : 0;

        return { totalLeads, successfulCalls, failedCalls, successRate };
      };

      const currentStats = calcStats(currentData || []);
      const previousStats = calcStats(prevData || []);

      const calcChange = (current: number, prev: number) => {
        if (prev === 0) return current > 0 ? 100 : 0;
        return Math.round(((current - prev) / prev) * 100);
      };

      setStats(currentStats);
      setPercentChange({
        totalLeads: calcChange(currentStats.totalLeads, previousStats.totalLeads),
        successfulCalls: calcChange(
          currentStats.successfulCalls,
          previousStats.successfulCalls
        ),
        failedCalls: calcChange(currentStats.failedCalls, previousStats.failedCalls),
        successRate: calcChange(currentStats.successRate, previousStats.successRate),
      });

      setLoading(false);
    }

    fetchLeadStats();
  }, [user]);

  const renderBadge = (value: number) => {
    const isPositive = value >= 0;
    const Icon = isPositive ? TrendingUp : IconArrowDownRight;
    const color = isPositive ? "text-green-500" : "text-red-500";
    return (
      <Badge variant="outline" className="flex items-center gap-1">
        <Icon className={`${color} w-4 h-4`} />
        <span className={color}>{Math.abs(value)}%</span>
      </Badge>
    );
  };

  const renderFooter = (isPositive: boolean, text: string) => (
    <CardFooter className="flex-col items-start gap-1.5 text-sm">
      <div className="line-clamp-1 flex gap-2 font-medium">
        {isPositive ? "Up 30 days" : "Down 30 days"}
        <IconTrendingUp
          className={`size-4 ${isPositive ? "text-green-500" : "text-red-500"}`}
        />
      </div>
      <div className="text-muted-foreground">{text}</div>
    </CardFooter>
  );

  return (
    <div className="grid grid-cols-1 gap-4 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card *:data-[slot=card]:shadow-xs">
      {/* Total Leads Captured */}
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Total Leads Captured</CardDescription>
          <CardTitle className="text-2xl font-semibold flex items-center justify-between">
            {loading ? <Skeleton className="h-8 w-[120px]" /> : stats.totalLeads}
          </CardTitle>
          <CardAction>
            {loading ? (
              <Skeleton className="h-5 w-[65px]" />
            ) : (
              renderBadge(percentChange.totalLeads)
            )}
          </CardAction>
        </CardHeader>
        {renderFooter(percentChange.totalLeads >= 0, "Visitors who filled out the contact form.")}
      </Card>

      {/* Successful Calls */}
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Successful Calls</CardDescription>
          <CardTitle className="text-2xl font-semibold flex items-center justify-between">
            {loading ? <Skeleton className="h-8 w-[120px]" /> : stats.successfulCalls}
          </CardTitle>
          <CardAction>
            {loading ? (
              <Skeleton className="h-5 w-[65px]" />
            ) : (
              renderBadge(percentChange.successfulCalls)
            )}
          </CardAction>
        </CardHeader>
        {renderFooter(
          percentChange.successfulCalls >= 0,
          "Calls answered by interested prospects."
        )}
      </Card>

      {/* Failed Calls */}
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Failed Calls</CardDescription>
          <CardTitle className="text-2xl font-semibold flex items-center justify-between">
            {loading ? <Skeleton className="h-8 w-[120px]" /> : stats.failedCalls}
          </CardTitle>
          <CardAction>
            {loading ? (
              <Skeleton className="h-5 w-[65px]" />
            ) : (
              renderBadge(percentChange.failedCalls)
            )}
          </CardAction>
        </CardHeader>
        {renderFooter(
          percentChange.failedCalls <= 0,
          "Calls not answered by interested prospects."
        )}
      </Card>

      {/* Success Rate */}
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Success Rate (%)</CardDescription>
          <CardTitle className="text-2xl font-semibold flex items-center justify-between">
            {loading ? (
              <Skeleton className="h-8 w-[120px]" />
            ) : (
              `${stats.successRate}%`
            )}
          </CardTitle>
          <CardAction>
            {loading ? (
              <Skeleton className="h-5 w-[65px]" />
            ) : (
              renderBadge(percentChange.successRate)
            )}
          </CardAction>
        </CardHeader>
        {renderFooter(
          percentChange.successRate >= 0,
          "Percentage of successful calls out of total attempts."
        )}
      </Card>
    </div>
  );
}
