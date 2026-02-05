// import { useState } from "react";
// import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
// import { Badge } from "./ui/badge";
// import { IconCalendarWeek, IconTrendingUp } from "@tabler/icons-react";

// export default function PricingBlack() {
//   const [users, setUsers] = useState(1500);
//   const [billing, setBilling] = useState("monthly");

//   const getPlanIndex = () => {
//     if (users <= 600) return 0;
//     if (users <= 1000) return 1;
//     if (users <= 2000) return 2;
//     return 3;
//   };

//   const activePlan = getPlanIndex();

//   return (
//     <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs">
//     <Card className="@container/card">
//         <CardHeader>
//            <CardTitle className="text-xl font-bold tabular-nums @[250px]/card:text-3xl">
//             Strater plan
//           </CardTitle>
//           <CardTitle className="text-xl font-semibold tabular-nums @[250px]/card:text-2xl">
//             400/650 min
//           </CardTitle>
//           <CardAction>
//             <Badge variant="outline">
//               <IconTrendingUp />
//               Active
//             </Badge>
//           </CardAction>
//         </CardHeader>
//         <CardFooter className="flex-col items-start gap-1.5 text-sm">
//           <div className="line-clamp-1 flex gap-2 font-medium">
//              <IconCalendarWeek  className="size-4" /> Expired subscription - 25/12/2025
//           </div>
//           <div className="text-muted-foreground">
//             Visitors for the last 6 months
//           </div>
//         </CardFooter>
//       </Card>
//       </div>
//   );
// }

// "use client";

// import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./ui/card";
// import { Button } from "./ui/button";

// export default function PricingBlack() {
//   const plans = [
//     {
//       name: "Starter Plan",
//       price: "$225/Month",
//       features: [
//         "Up to 300 call minutes per month",
//         "24/7 AI call coverage",
//         "Up to 5 staff members",
//         "Booking, rescheduling & cancellation",
//         "Zoho Booking integration",
//         "Call tracking dashboard",
//         "Dedicated support",
//         "No call reminders",
//       ],
//     },
//     {
//       name: "Pro Plan",
//       price: "$600/Month",
//       features: [
//         "Up to 800 call minutes per month",
//         "24/7 AI call coverage",
//         "Up to 10 staff members",
//         "Booking, rescheduling & cancellation",
//         "Zoho Booking integration",
//         "Call tracking dashboard",
//         "Dedicated support",
//         "No call reminders",
//       ],
//     },
//     {
//       name: "Growth Plan",
//       price: "$1,800/Month",
//       features: [
//         "Up to 2,400 call minutes per month",
//         "24/7 AI call coverage",
//         "Up to 15 staff members",
//         "Booking, rescheduling & cancellation",
//         "Zoho Booking integration",
//         "Call tracking dashboard",
//         "Dedicated support",
//         "Automated call reminders",
//       ],
//     },
//     {
//       name: "Enterprise Plan",
//       price: "$2,700/Month",
//       features: [
//         "Up to 3,600 call minutes per month",
//         "24/7 AI call coverage",
//         "Up to 25 staff members",
//         "Booking, rescheduling & cancellation",
//         "Zoho Booking integration",
//         "Call tracking dashboard",
//         "Dedicated support",
//         "Automated call reminders",
//       ],
//     },
//   ];

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
//       {plans.map((plan, index) => (
//         <Card
//           key={index}
//           className="flex flex-col justify-between border border-purple-600 shadow-md rounded-2xl bg-black text-white"
//         >
//           <CardHeader>
//             <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
//             <p className="text-green-400 text-xl font-semibold">{plan.price}</p>
//           </CardHeader>

//           <CardContent>
//             <ul className="space-y-2 mt-4 text-sm text-gray-300">
//               {plan.features.map((feature, i) => (
//                 <li key={i} className="flex items-start gap-2">
//                   <span className="text-green-400">✔</span>
//                   {feature}
//                 </li>
//               ))}
//             </ul>
//           </CardContent>

//           <CardFooter>
//             <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold">
//               Get Started
//             </Button>
//           </CardFooter>
//         </Card>
//       ))}
//     </div>
//   );
// }

// "use client";

// import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./ui/card";
// import { Button } from "./ui/button";
// import { IconCircleCheckFilled, IconCircleX } from "@tabler/icons-react";
// import { Progress } from "@/components/ui/progress"
// import { Badge } from "@/components/ui/badge"

// export default function PricingWhite() {

//   const isActive = true
//   const usedMinutes = 700
//   const totalMinutes = 1400
//   const percentage = (usedMinutes / totalMinutes) * 100
//   const plans = [
//     {
//       name: "Starter Plan",
//       price: "$225 / Month",
//       features: [
//         { text: "Up to 300 call minutes per month", included: true },
//         { text: "24/7 AI call coverage", included: true },
//         { text: "Up to 5 staff members", included: true },
//         { text: "Booking, rescheduling & cancellation", included: true },
//         { text: "Zoho Booking integration", included: true },
//         { text: "Call tracking dashboard", included: true },
//         { text: "Dedicated support", included: true }, // ❌
//         { text: "No call reminders", included: false }, // ❌
//       ],
//       button: "Contact us",
//       featured: false,
//     },
//     {
//       name: "Pro Plan",
//       price: "$600 / Month",
//       features: [
//         { text: "Up to 800 call minutes per month", included: true },
//         { text: "24/7 AI call coverage", included: true },
//         { text: "Up to 10 staff members", included: true },
//         { text: "Booking, rescheduling & cancellation", included: true },
//         { text: "Zoho Booking integration", included: true },
//         { text: "Call tracking dashboard", included: true },
//         { text: "Dedicated support", included: true },
//         { text: "No call reminders", included: false },
//       ],
//       button: "Contact us",
//       featured: false,
//     },
//     {
//       name: "Growth Plan",
//       price: "$1,800 / Month",
//       features: [
//         { text: "Up to 2,400 call minutes per month", included: true },
//         { text: "24/7 AI call coverage", included: true },
//         { text: "Up to 15 staff members", included: true },
//         { text: "Booking, rescheduling & cancellation", included: true },
//         { text: "Zoho Booking integration", included: true },
//         { text: "Call tracking dashboard", included: true },
//         { text: "Dedicated support", included: true },
//         { text: "Automated call reminders", included: true },
//       ],
//       button: "Contact us",
//       featured: false,
//     },
//     {
//       name: "Enterprise Plan",
//       price: "$2,700 / Month",
//       features: [
//         { text: "Up to 3,600 call minutes per month", included: true },
//         { text: "24/7 AI call coverage", included: true },
//         { text: "Up to 25 staff members", included: true },
//         { text: "Booking, rescheduling & cancellation", included: true },
//         { text: "Zoho Booking integration", included: true },
//         { text: "Call tracking dashboard", included: true },
//         { text: "Dedicated support", included: true },
//         { text: "Automated call reminders", included: true },
//       ],
//       button: "Contact us",
//       featured: false,
//     },
//   ];

//   return (
//     <div className="w-full flex flex-col items-right py-6 gap-6">
//       {/* <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 max-w-7xl w-full"><Card>
//         <CardHeader>
//               <CardTitle className="text-2xl font-bold">dgdfg</CardTitle>
//               <p
//                 className={"text-xl font-semibold text-gray-900"}
//               >
//                 sdfs
//               </p>
//             </CardHeader>
//         </Card></div> */}
//         <div className="grid grid-cols-1 gap-6 max-w-7xl w-full">
//       <Card className="bg-violet-500 text-white rounded-2xl shadow-md">
//         <CardContent className="">
//           {/* Status */}
//           <div className="flex items-center mb-4">
//             <Badge
//               variant="outline"
//               className={`rounded-full px-3 py-1 text-sm font-medium flex items-center gap-2 ${
//                 isActive
//                   ? "bg-white/20 text-white border-none"
//                   : "bg-gray-400/30 text-gray-200 border-none"
//               }`}
//             >
//               <span
//                 className={`w-2.5 h-2.5 rounded-full ${
//                   isActive ? "bg-green-400" : "bg-red-500"
//                 }`}
//               />
//               {isActive ? "Active" : "Deactive"}
//             </Badge>
//           </div>

//           {/* Plan Title */}
//           <h2 className="text-4xl font-bold">Strater Plan</h2>
//           <p className="text-md opacity-80">
//             Your plan expired on 12/8/2026
//           </p>

//           {/* Progress */}
//           <div className="mt-6">
//             <Progress
//               value={percentage}
//               className="[&>div]:bg-white h-2 bg-white/20"
//             />
//             <p className="mt-2 text-md font-medium ">
//               {usedMinutes}/{totalMinutes} min
//             </p>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full">
//         {plans.map((plan, index) => (
//           <Card
//             key={index}
//             className={`flex flex-col justify-between rounded-2xl shadow-lg border ${
//               plan.featured
//                 ? "bg-indigo-900 text-white border-indigo-900 scale-105"
//                 : "bg-white text-gray-900"
//             }`}
//           >
//             <CardHeader>
//               <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
//               <p
//                 className={`text-xl font-semibold ${
//                   plan.featured ? "text-white" : "text-gray-900"
//                 }`}
//               >
//                 {plan.price}
//               </p>
//             </CardHeader>

//             <CardContent>
//               <ul className="space-y-3 mt-4 text-sm">
//                 {plan.features.map((feature, i) => (
//                   <li key={i} className="flex items-start gap-2">
//                     {feature.included ? (
//                       <IconCircleCheckFilled
//                         className={`size-4 ${
//                           plan.featured ? "text-green-300" : "text-green-600"
//                         }`}
//                       />
//                     ) : (
//                       <IconCircleX
//                         className={`size-4 ${
//                           plan.featured ? "text-red-300" : "text-red-600"
//                         }`}
//                       />
//                     )}
//                     {feature.text}
//                   </li>
//                 ))}
//               </ul>
//             </CardContent>

//             <CardFooter>
//               <Button
//                 className={`w-full font-semibold ${
//                   plan.featured
//                     ? "bg-violet-500 hover:bg-violet-600 text-white"
//                     : "bg-violet-500 hover:bg-violet-600 text-white"
//                 }`}
//               >
//                 {plan.button}
//               </Button>
//             </CardFooter>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Progress } from "@/components/ui/progress";
// import { createClient } from "@/lib/client"; // ✅ adjust path if needed
// import { useAuth } from "@/contexts/AuthContext"; // ✅ adjust path if needed
// import { IconCircleCheckFilled, IconCircleX } from "@tabler/icons-react";
// import { Button } from "./ui/button";

// // Appointment type adjusted to match your DB (with spaces)
// type Appointment = {
//   id: number;
//   user_id: string;
//   duration?: number;
//   email?: string;
//   "payment status"?: string;
//   "start date"?: string;
//   "end date"?: string;
//   "monthly calls"?: number;
//   "use call"?: number;
//   "pricing plan"?: string;
// };

// export default function PricingWhite() {
//   const { user } = useAuth();
//   const [appointment, setAppointment] = useState<Appointment | null>(null);
//   const [loading, setLoading] = useState(true);
//   const plans = [
//     {
//       name: "Starter Plan",
//       price: "$225 / Month",
//       features: [
//         { text: "Up to 300 call minutes per month", included: true },
//         { text: "24/7 AI call coverage", included: true },
//         { text: "Up to 5 staff members", included: true },
//         { text: "Booking, rescheduling & cancellation", included: true },
//         { text: "Zoho Booking integration", included: true },
//         { text: "Call tracking dashboard", included: true },
//         { text: "Dedicated support", included: true }, // ❌
//         { text: "No call reminders", included: false }, // ❌
//       ],
//       button: "Contact us",
//       featured: false,
//     },
//     {
//       name: "Pro Plan",
//       price: "$600 / Month",
//       features: [
//         { text: "Up to 800 call minutes per month", included: true },
//         { text: "24/7 AI call coverage", included: true },
//         { text: "Up to 10 staff members", included: true },
//         { text: "Booking, rescheduling & cancellation", included: true },
//         { text: "Zoho Booking integration", included: true },
//         { text: "Call tracking dashboard", included: true },
//         { text: "Dedicated support", included: true },
//         { text: "No call reminders", included: false },
//       ],
//       button: "Contact us",
//       featured: false,
//     },
//     {
//       name: "Growth Plan",
//       price: "$1,800 / Month",
//       features: [
//         { text: "Up to 2,400 call minutes per month", included: true },
//         { text: "24/7 AI call coverage", included: true },
//         { text: "Up to 15 staff members", included: true },
//         { text: "Booking, rescheduling & cancellation", included: true },
//         { text: "Zoho Booking integration", included: true },
//         { text: "Call tracking dashboard", included: true },
//         { text: "Dedicated support", included: true },
//         { text: "Automated call reminders", included: true },
//       ],
//       button: "Contact us",
//       featured: false,
//     },
//     {
//       name: "Enterprise Plan",
//       price: "$2,700 / Month",
//       features: [
//         { text: "Up to 3,600 call minutes per month", included: true },
//         { text: "24/7 AI call coverage", included: true },
//         { text: "Up to 25 staff members", included: true },
//         { text: "Booking, rescheduling & cancellation", included: true },
//         { text: "Zoho Booking integration", included: true },
//         { text: "Call tracking dashboard", included: true },
//         { text: "Dedicated support", included: true },
//         { text: "Automated call reminders", included: true },
//       ],
//       button: "Contact us",
//       featured: false,
//     },
//   ];

//   useEffect(() => {
//     async function fetchAppointment() {
//       if (!user) return;
//       setLoading(true);

//       const supabase = createClient();
//       const { data, error } = await supabase
//         .from("appointments")
//         .select("*")
//         .eq("user_id", user.id) // ✅ make sure user_id exists in your table
//         .order("id", { ascending: false })
//         .limit(1)
//         .single();

//       if (error) {
//         console.error("Error fetching appointment:", error);
//         setAppointment(null);
//       } else {
//         console.log("Fetched appointment:", data); // debug
//         setAppointment(data as Appointment);
//       }

//       setLoading(false);
//     }

//     fetchAppointment();
//   }, [user]);

//   if (loading) return <p className="text-white">Loading...</p>;
//   if (!appointment) return <p className="text-white">No plan data found.</p>;

//   // ✅ Safe handling
//   const status = appointment["payment status"]?.toLowerCase() || "";
//   const isActive = status === "active";

//   const plan = appointment["pricing plan"] || "";

//   const usedMinutes = appointment["use call"] || 0;
//   const totalMinutes = appointment["monthly calls"] || 1;
//   const percentage = Math.min((usedMinutes / totalMinutes) * 100, 100);

//   const expiry = appointment["end date"]
//     ? new Date(appointment["end date"]).toLocaleDateString()
//     : "N/A";

//   return (
//     <div className="w-full flex flex-col items-start py-6 gap-6">
//       <div className="grid grid-cols-1 gap-6 max-w-7xl w-full">
//         <Card className="bg-violet-500 text-white rounded-2xl shadow-md">
//           <CardContent className="p-6">
//             {/* Status Badge */}
//             <div className="flex items-center mb-4">
//               <Badge
//                 variant="outline"
//                 className={`rounded-full px-3 py-1 text-sm font-medium flex items-center gap-2 ${
//                   isActive
//                     ? "bg-white/20 text-white border-none"
//                     : "bg-gray-400/30 text-gray-200 border-none"
//                 }`}
//               >
//                 <span
//                   className={`w-2.5 h-2.5 rounded-full ${
//                     isActive ? "bg-green-400" : "bg-red-500"
//                   }`}
//                 />
//                 {isActive ? "Active" : "Inactive"}
//               </Badge>
//             </div>

//             {/* Plan Info */}
//             <h2 className="text-4xl font-bold">{plan}</h2>
//             <p className="text-md opacity-80">Your plan expires on {expiry}</p>

//             {/* Progress */}
//             <div className="mt-6">
//               <Progress
//                 value={percentage}
//                 className="[&>div]:bg-white h-2 bg-white/20"
//               />
//               <p className="mt-2 text-md font-medium">
//                 {usedMinutes}/{totalMinutes} min used
//               </p>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full">
//        {plans.map((plan, index) => (
//           <Card
//             key={index}
//             className={`flex flex-col justify-between rounded-2xl shadow-lg border ${
//               plan.featured
//                 ? "bg-indigo-900 text-white border-indigo-900 scale-105"
//                 : "bg-white text-gray-900"
//             }`}
//           >
//             <CardHeader>
//               <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
//               <p
//                 className={`text-xl font-semibold ${
//                   plan.featured ? "text-white" : "text-gray-900"
//                 }`}
//               >
//                 {plan.price}
//               </p>
//             </CardHeader>

//             <CardContent>
//               <ul className="space-y-3 mt-4 text-sm">
//                 {plan.features.map((feature, i) => (
//                   <li key={i} className="flex items-start gap-2">
//                     {feature.included ? (
//                       <IconCircleCheckFilled
//                         className={`size-4 ${
//                           plan.featured ? "text-green-300" : "text-green-600"
//                         }`}
//                       />
//                     ) : (
//                       <IconCircleX
//                         className={`size-4 ${
//                           plan.featured ? "text-red-300" : "text-red-600"
//                         }`}
//                       />
//                     )}
//                     {feature.text}
//                   </li>
//                 ))}
//               </ul>
//             </CardContent>

//             <CardFooter>
//               <Button
//                 className={`w-full font-semibold ${
//                   plan.featured
//                     ? "bg-violet-500 hover:bg-violet-600 text-white"
//                     : "bg-violet-500 hover:bg-violet-600 text-white"
//                 }`}
//               >
//                 {plan.button}
//               </Button>
//             </CardFooter>
//           </Card>
//         ))}
//       </div>
//     </div>

//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "./ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Progress } from "@/components/ui/progress";
// import { Skeleton } from "@/components/ui/skeleton"; // ✅ skeleton import
// import { createClient } from "@/lib/client";
// import { useAuth } from "@/contexts/AuthContext";
// import { IconCircleCheckFilled, IconCircleX } from "@tabler/icons-react";
// import { Button } from "./ui/button";
// import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
// // import ContactUsSheet from "./contact_us";

// // Appointment type adjusted to match your DB (with spaces)
// type Appointment = {
//   id: number;
//   user_id: string;
//   duration?: number;
//   email?: string;
//   "payment status"?: string;
//   "start date"?: string;
//   "end date"?: string;
//   "monthly calls"?: number;
//   "use call"?: number;
//   "pricing plan"?: string;
// };

// export default function PricingWhite() {
//   const { user } = useAuth();
//   const [appointment, setAppointment] = useState<Appointment | null>(null);
//   const [loading, setLoading] = useState(true);

//   const plans = [
//     {
//       name: "Starter Plan",
//       price: "$225 / Month",
//       features: [
//         { text: "Up to 300 call minutes per month", included: true },
//         { text: "24/7 AI call coverage", included: true },
//         { text: "Up to 5 staff members", included: true },
//         { text: "Booking, rescheduling & cancellation", included: true },
//         { text: "Zoho Booking integration", included: true },
//         { text: "Call tracking dashboard", included: true },
//         { text: "Dedicated support", included: true },
//         { text: "No call reminders", included: false },
//       ],
//       button: "Contact us",
//       featured: false,
//     },
//     {
//       name: "Pro Plan",
//       price: "$600 / Month",
//       features: [
//         { text: "Up to 800 call minutes per month", included: true },
//         { text: "24/7 AI call coverage", included: true },
//         { text: "Up to 10 staff members", included: true },
//         { text: "Booking, rescheduling & cancellation", included: true },
//         { text: "Zoho Booking integration", included: true },
//         { text: "Call tracking dashboard", included: true },
//         { text: "Dedicated support", included: true },
//         { text: "No call reminders", included: false },
//       ],
//       button: "Contact us",
//       featured: false,
//     },
//     {
//       name: "Growth Plan",
//       price: "$1,800 / Month",
//       features: [
//         { text: "Up to 2,400 call minutes per month", included: true },
//         { text: "24/7 AI call coverage", included: true },
//         { text: "Up to 15 staff members", included: true },
//         { text: "Booking, rescheduling & cancellation", included: true },
//         { text: "Zoho Booking integration", included: true },
//         { text: "Call tracking dashboard", included: true },
//         { text: "Dedicated support", included: true },
//         { text: "Automated call reminders", included: true },
//       ],
//       button: "Contact us",
//       featured: false,
//     },
//     {
//       name: "Enterprise Plan",
//       price: "$2,700 / Month",
//       features: [
//         { text: "Up to 3,600 call minutes per month", included: true },
//         { text: "24/7 AI call coverage", included: true },
//         { text: "Up to 25 staff members", included: true },
//         { text: "Booking, rescheduling & cancellation", included: true },
//         { text: "Zoho Booking integration", included: true },
//         { text: "Call tracking dashboard", included: true },
//         { text: "Dedicated support", included: true },
//         { text: "Automated call reminders", included: true },
//       ],
//       button: "Contact us",
//       featured: false,
//     },
//   ];

//   useEffect(() => {
//     async function fetchAppointment() {
//       if (!user) return;
//       setLoading(true);

//       const supabase = createClient();
//       const { data, error } = await supabase
//         .from("appointments")
//         .select("*")
//         .eq("user_id", user.id)
//         .order("id", { ascending: false })
//         .limit(1)
//         .single();

//       if (error) {
//         // console.error("Error fetching appointment:", error);
//         setAppointment(null);
//       } else {
//         // console.log("Fetched appointment:", data); // debug
//         setAppointment(data as Appointment);
//       }

//       setLoading(false);
//     }

//     fetchAppointment();
//   }, [user]);

//   if (loading) {
//     // ✅ Skeleton while loading
//     return (
//       <div className="w-full flex flex-col items-start py-6 gap-6">
//         <div className="grid grid-cols-1 gap-6 max-w-7xl w-full">
//           <Card className="bg-violet-500 text-white rounded-2xl shadow-md">
//             <CardContent className="p-6 space-y-4">
//               <Skeleton className="h-8 w-24 rounded-full bg-white/20" />
//               <Skeleton className="h-10 w-40 bg-white/30" />
//               <Skeleton className="h-4 w-60 bg-white/20" />
//               <Skeleton className="h-2 w-full bg-white/20" />
//             </CardContent>
//           </Card>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full">
//           {Array.from({ length: 4 }).map((_, i) => (
//             <Card key={i} className="rounded-2xl shadow-lg p-4 space-y-3">
//               <Skeleton className="h-6 w-32 bg-gray-200" />
//               <Skeleton className="h-6 w-20 bg-gray-200" />
//               <Skeleton className="h-32 w-full bg-gray-200" />
//               <Skeleton className="h-10 w-full bg-gray-300 rounded-lg" />
//             </Card>
//           ))}
//         </div>
//       </div>
//     );
//   }

//   if (!appointment) return <p className="text-white">No plan data found.</p>;

//   const status = appointment["payment status"]?.toLowerCase() || "";
//   const isActive = status === "active";
//   const plan = appointment["pricing plan"] || "";

//   const usedMinutes = appointment["use call"] || 0;
//   const totalMinutes = appointment["monthly calls"] || 1;
//   const percentage = Math.min((usedMinutes / totalMinutes) * 100, 100);

//   const expiry = appointment["end date"]
//     ? new Date(appointment["end date"]).toLocaleDateString()
//     : "N/A";

//   return (
//     <div className="w-full flex flex-col items-start py-6 gap-6">
//       {/* Active Plan */}
//       <div className="grid grid-cols-1 gap-6 max-w-7xl w-full">
//         <Card className="bg-violet-500 text-white rounded-2xl shadow-md">
//           <CardContent className="p-6">
//             {/* Status Badge */}
//             <div className="flex items-center mb-4">
//               <Badge
//                 variant="outline"
//                 className={`rounded-full px-3 py-1 text-sm font-medium flex items-center gap-2 ${
//                   isActive
//                     ? "bg-white/20 text-white border-none"
//                     : "bg-gray-400/30 text-gray-200 border-none"
//                 }`}
//               >
//                 <span
//                   className={`w-2.5 h-2.5 rounded-full ${
//                     isActive ? "bg-green-400" : "bg-red-500"
//                   }`}
//                 />
//                 {isActive ? "Active" : "Inactive"}
//               </Badge>
//             </div>

//             {/* Plan Info */}
//             <h2 className="text-4xl font-bold">{plan}</h2>
//             <p className="text-md opacity-80">Your plan expires on {expiry}</p>

//             {/* Progress */}
//             <div className="mt-6">
//               <Progress
//                 value={percentage}
//                 className="[&>div]:bg-white h-2 bg-white/20"
//               />
//               <p className="mt-2 text-md font-medium">
//                 {usedMinutes}/{totalMinutes} min used
//               </p>
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Pricing Plans */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full">
//         {plans.map((plan, index) => (
//           <Card
//             key={index}
//             className={`flex flex-col justify-between rounded-2xl shadow-lg border ${
//               plan.featured
//                 ? "bg-indigo-900 text-white border-indigo-900 scale-105"
//                 : "bg-white text-gray-900"
//             }`}
//           >
//             <CardHeader>
//               <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
//               <p
//                 className={`text-xl font-semibold ${
//                   plan.featured ? "text-white" : "text-gray-900"
//                 }`}
//               >
//                 {plan.price}
//               </p>
//             </CardHeader>

//             <CardContent>
//               <ul className="space-y-3 mt-4 text-sm">
//                 {plan.features.map((feature, i) => (
//                   <li key={i} className="flex items-start gap-2">
//                     {feature.included ? (
//                       <IconCircleCheckFilled
//                         className={`size-4 ${
//                           plan.featured ? "text-green-300" : "text-green-600"
//                         }`}
//                       />
//                     ) : (
//                       <IconCircleX
//                         className={`size-4 ${
//                           plan.featured ? "text-red-300" : "text-red-600"
//                         }`}
//                       />
//                     )}
//                     {feature.text}
//                   </li>
//                 ))}
//               </ul>
//             </CardContent>

//             <CardFooter>
//               <Sheet>
//                 <SheetTrigger className="w-full">
//               <Button
//                 className={`w-full font-semibold ${
//                   plan.featured
//                     ? "bg-violet-500 hover:bg-violet-600 text-white"
//                     : "bg-violet-500 hover:bg-violet-600 text-white"
//                 }`}
//               >
//                 {plan.button}
//               </Button></SheetTrigger>
//                 <SheetContent>
//                    <SheetHeader>
//                    <SheetTitle>Are you absolutely sure?</SheetTitle>
//                    <SheetDescription>
//                      This action cannot be undone. This will permanently delete your account
//                       and remove your data from our servers.
//                   </SheetDescription>
//                 </SheetHeader>
//              </SheetContent>
//              </Sheet>
//             </CardFooter>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
// import { IconCircleCheckFilled, IconCircleX } from "@tabler/icons-react";
// import { useAuth } from "@/contexts/AuthContext";
// import { toast } from "sonner";
// import axios from "axios";
// import { useRouter } from "next/navigation";

// declare global {
//   interface Window {
//     Razorpay: any;
//   }
// }

// export default function PricingPlans() {
//   const { user } = useAuth();
//   const router = useRouter();
//   const [isLoading, setIsLoading] = useState(false);

//   const plans = [
//     {
//       id: "starter_plan",
//       name: "Starter Plan",
//       price: "$225 / Month",
//       razorpayPlanId: process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_STARTER, // from your Razorpay dashboard
//       features: [
//         { text: "Up to 300 call minutes per month", included: true },
//         { text: "24/7 AI call coverage", included: true },
//         { text: "Up to 5 staff members", included: true },
//         { text: "Booking, rescheduling & cancellation", included: true },
//         { text: "Zoho Booking integration", included: true },
//         { text: "Call tracking dashboard", included: true },
//         { text: "Dedicated support", included: true },
//         { text: "No call reminders", included: false },
//       ],
//     },
//     {
//       id: "pro_plan",
//       name: "Pro Plan",
//       price: "$600 / Month",
//       razorpayPlanId: process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_PRO,
//       features: [
//         { text: "Up to 800 call minutes per month", included: true },
//         { text: "24/7 AI call coverage", included: true },
//         { text: "Up to 10 staff members", included: true },
//         { text: "Booking, rescheduling & cancellation", included: true },
//         { text: "Zoho Booking integration", included: true },
//         { text: "Call tracking dashboard", included: true },
//         { text: "Dedicated support", included: true },
//         { text: "No call reminders", included: false },
//       ],
//     },
//     {
//       id: "growth_plan",
//       name: "Growth Plan",
//       price: "$1800 / Month",
//       razorpayPlanId: process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_GROWTH,
//       features: [
//         { text: "Up to 2,400 call minutes per month", included: true },
//         { text: "24/7 AI call coverage", included: true },
//         { text: "Up to 15 staff members", included: true },
//         { text: "Booking, rescheduling & cancellation", included: true },
//         { text: "Zoho Booking integration", included: true },
//         { text: "Call tracking dashboard", included: true },
//         { text: "Dedicated support", included: true },
//         { text: "Automated call reminders", included: true },
//       ],
//     },
//     {
//       id: "enterprise_plan",
//       name: "Enterprise Plan",
//       price: "$2700 / Month",
//       razorpayPlanId: process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_ENTERPRISE,
//       features: [
//         { text: "Up to 3,600 call minutes per month", included: true },
//         { text: "24/7 AI call coverage", included: true },
//         { text: "Up to 25 staff members", included: true },
//         { text: "Booking, rescheduling & cancellation", included: true },
//         { text: "Zoho Booking integration", included: true },
//         { text: "Call tracking dashboard", included: true },
//         { text: "Dedicated support", included: true },
//         { text: "Automated call reminders", included: true },
//       ],
//     },
//   ];

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.async = true;
//     document.body.appendChild(script);
//     return () => {
//       const razorpayScript = document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]');
//       if (razorpayScript) document.body.removeChild(razorpayScript);
//     };
//   }, []);

//   const startSubscription = async (razorpayPlanId: string) => {
//     if (!user) {
//       toast.error("Please log in to subscribe.");
//       return;
//     }
//     setIsLoading(true);

//     try {
//       // 🔹 Create subscription in backend
//       const { data } = await axios.post("/api/create-subscription", {
//         planId: razorpayPlanId,
//         email: user.email,
//       });

//       if (!data?.id) throw new Error("Invalid subscription response");

//       const rzp = new window.Razorpay({
//         key: process.env.NEXT_PUBLIC_RAZORPAY_LIVE_KEY,
//         subscription_id: data.id,
//         name: "Quantrox AI",
//         description: "Monthly Subscription Plan",
//         handler: function (response: any) {
//           if (response?.razorpay_payment_id) {
//             toast.success("Payment successful! Redirecting...");
//             router.push("/workspace/dashboard");
//           }
//         },
//         prefill: {
//           email: user?.email,
//           name: user?.user_metadata?.full_name || "User",
//         },
//         theme: { color: "#7C3AED" },
//       });

//       rzp.open();
//     } catch (error: any) {
//       console.error(error);
//       toast.error("Subscription failed", {
//         description: error.message || "Please try again.",
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto py-10">
//       {plans.map((plan) => (
//         <Card key={plan.id} className="rounded-2xl shadow-lg border bg-white text-gray-900 flex flex-col justify-between">
//           <CardHeader>
//             <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
//             <p className="text-xl font-semibold">{plan.price}</p>
//           </CardHeader>

//           <CardContent>
//             <ul className="space-y-3 mt-4 text-sm">
//               {plan.features.map((feature, i) => (
//                 <li key={i} className="flex items-start gap-2">
//                   {feature.included ? (
//                     <IconCircleCheckFilled className="size-4 text-green-600" />
//                   ) : (
//                     <IconCircleX className="size-4 text-red-600" />
//                   )}
//                   {feature.text}
//                 </li>
//               ))}
//             </ul>
//           </CardContent>

//           <CardFooter>
//             <Button
//               className="w-full bg-violet-600 hover:bg-violet-700 text-white"
//               disabled={isLoading}
//               onClick={() => startSubscription(plan.razorpayPlanId!)}
//             >
//               {isLoading ? "Processing..." : "Subscribe"}
//             </Button>
//           </CardFooter>
//         </Card>
//       ))}
//     </div>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
// import { IconCircleCheckFilled, IconCircleX } from "@tabler/icons-react";
// import { useAuth } from "@/contexts/AuthContext";
// import { toast } from "sonner";
// import axios from "axios";
// import { useRouter } from "next/navigation";

// declare global {
//   interface Window {
//     Razorpay: any;
//   }
// }

// export default function PricingPlans() {
//   const { user } = useAuth();
//   const router = useRouter();
//   const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

//   const plans = [
//     {
//       id: "starter_plan",
//       name: "Starter Plan",
//       price: "$225 / Month",
//       razorpayPlanId: process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_STARTER,
//       features: [
//         { text: "Up to 300 call minutes per month", included: true },
//         { text: "24/7 AI call coverage", included: true },
//         { text: "Up to 5 staff members", included: true },
//         { text: "Booking, rescheduling & cancellation", included: true },
//         { text: "Zoho Booking integration", included: true },
//         { text: "Call tracking dashboard", included: true },
//         { text: "Dedicated support", included: true },
//         { text: "No call reminders", included: false },
//       ],
//     },
//     {
//       id: "pro_plan",
//       name: "Pro Plan",
//       price: "$600 / Month",
//       razorpayPlanId: process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_PRO,
//       features: [
//         { text: "Up to 800 call minutes per month", included: true },
//         { text: "24/7 AI call coverage", included: true },
//         { text: "Up to 10 staff members", included: true },
//         { text: "Booking, rescheduling & cancellation", included: true },
//         { text: "Zoho Booking integration", included: true },
//         { text: "Call tracking dashboard", included: true },
//         { text: "Dedicated support", included: true },
//         { text: "No call reminders", included: false },
//       ],
//     },
//     {
//       id: "growth_plan",
//       name: "Growth Plan",
//       price: "$1800 / Month",
//       razorpayPlanId: process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_GROWTH,
//       features: [
//         { text: "Up to 2,400 call minutes per month", included: true },
//         { text: "24/7 AI call coverage", included: true },
//         { text: "Up to 15 staff members", included: true },
//         { text: "Booking, rescheduling & cancellation", included: true },
//         { text: "Zoho Booking integration", included: true },
//         { text: "Call tracking dashboard", included: true },
//         { text: "Dedicated support", included: true },
//         { text: "Automated call reminders", included: true },
//       ],
//     },
//     {
//       id: "enterprise_plan",
//       name: "Enterprise Plan",
//       price: "$2700 / Month",
//       razorpayPlanId: process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_ENTERPRISE,
//       features: [
//         { text: "Up to 3,600 call minutes per month", included: true },
//         { text: "24/7 AI call coverage", included: true },
//         { text: "Up to 25 staff members", included: true },
//         { text: "Booking, rescheduling & cancellation", included: true },
//         { text: "Zoho Booking integration", included: true },
//         { text: "Call tracking dashboard", included: true },
//         { text: "Dedicated support", included: true },
//         { text: "Automated call reminders", included: true },
//       ],
//     },
//   ];

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.async = true;
//     document.body.appendChild(script);
//     return () => {
//       const razorpayScript = document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]');
//       if (razorpayScript) document.body.removeChild(razorpayScript);
//     };
//   }, []);

//   const startSubscription = async (razorpayPlanId: string, planId: string) => {
//     if (!user) {
//       toast.error("Please log in to subscribe.");
//       return;
//     }

//     setLoadingPlan(planId);

//     try {
//       const { data } = await axios.post("/api/create-subscription", {
//         planId: razorpayPlanId,
//         email: user.email,
//       });

//       if (!data?.id) throw new Error("Invalid subscription response");

//       const rzp = new window.Razorpay({
//         key: process.env.NEXT_PUBLIC_RAZORPAY_LIVE_KEY,
//         subscription_id: data.id,
//         name: "Quantrox AI",
//         description: "Monthly Subscription Plan",
//         handler: function (response: any) {
//           if (response?.razorpay_payment_id) {
//             toast.success("Payment successful! Redirecting...");
//             router.push("/workspace/dashboard");
//           }
//         },
//         prefill: {
//           email: user?.email,
//           name: user?.user_metadata?.full_name || "User",
//         },
//         theme: { color: "#7C3AED" },
//       });

//       rzp.open();
//     } catch (error: any) {
//       console.error(error);
//       toast.error("Subscription failed", {
//         description: error.message || "Please try again.",
//       });
//     } finally {
//       setLoadingPlan(null);
//     }
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto py-10">
//       {plans.map((plan) => (
//         <Card
//           key={plan.id}
//           className="rounded-2xl shadow-lg border bg-white text-gray-900 flex flex-col justify-between"
//         >
//           <CardHeader>
//             <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
//             <p className="text-xl font-semibold">{plan.price}</p>
//           </CardHeader>

//           <CardContent>
//             <ul className="space-y-3 mt-4 text-sm">
//               {plan.features.map((feature, i) => (
//                 <li key={i} className="flex items-start gap-2">
//                   {feature.included ? (
//                     <IconCircleCheckFilled className="size-4 text-green-600" />
//                   ) : (
//                     <IconCircleX className="size-4 text-red-600" />
//                   )}
//                   {feature.text}
//                 </li>
//               ))}
//             </ul>
//           </CardContent>

//           <CardFooter>
//             <Button
//               className="w-full bg-violet-600 hover:bg-violet-700 text-white"
//               disabled={loadingPlan === plan.id}
//               onClick={() => startSubscription(plan.razorpayPlanId!, plan.id)}
//             >
//               {loadingPlan === plan.id ? "Processing..." : "Subscribe"}
//             </Button>
//           </CardFooter>
//         </Card>
//       ))}
//     </div>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { IconCircleCheckFilled, IconCircleX } from "@tabler/icons-react";
// import { useAuth } from "@/contexts/AuthContext";
// import { toast } from "sonner";
// import axios from "axios";
// import { useRouter } from "next/navigation";

// declare global {
//   interface Window {
//     Razorpay: any;
//   }
// }

// export default function PricingPlans() {
//   const { user } = useAuth();
//   const router = useRouter();
//   const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

//   const plans = [
//     {
//       id: "starter_plan",
//       name: "Starter Plan",
//       price: "$225 / Month",
//       razorpayPlanId: process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_STARTER,
//       features: [
//         { text: "Up to 300 call minutes per month", included: true },
//         { text: "24/7 AI call coverage", included: true },
//         { text: "Up to 5 staff members", included: true },
//         { text: "Booking, rescheduling & cancellation", included: true },
//         { text: "Zoho Booking integration", included: true },
//         { text: "Call tracking dashboard", included: true },
//         { text: "Dedicated support", included: true },
//         { text: "No call reminders", included: false },
//       ],
//     },
//     {
//       id: "pro_plan",
//       name: "Pro Plan",
//       price: "$600 / Month",
//       razorpayPlanId: process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_PRO,
//       features: [
//         { text: "Up to 800 call minutes per month", included: true },
//         { text: "24/7 AI call coverage", included: true },
//         { text: "Up to 10 staff members", included: true },
//         { text: "Booking, rescheduling & cancellation", included: true },
//         { text: "Zoho Booking integration", included: true },
//         { text: "Call tracking dashboard", included: true },
//         { text: "Dedicated support", included: true },
//         { text: "No call reminders", included: false },
//       ],
//     },
//     {
//       id: "growth_plan",
//       name: "Growth Plan",
//       price: "$1800 / Month",
//       razorpayPlanId: process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_GROWTH,
//       features: [
//         { text: "Up to 2,400 call minutes per month", included: true },
//         { text: "24/7 AI call coverage", included: true },
//         { text: "Up to 15 staff members", included: true },
//         { text: "Booking, rescheduling & cancellation", included: true },
//         { text: "Zoho Booking integration", included: true },
//         { text: "Call tracking dashboard", included: true },
//         { text: "Dedicated support", included: true },
//         { text: "Automated call reminders", included: true },
//       ],
//     },
//     {
//       id: "enterprise_plan",
//       name: "Enterprise Plan",
//       price: "$2700 / Month",
//       razorpayPlanId: process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_ENTERPRISE,
//       features: [
//         { text: "Up to 3,600 call minutes per month", included: true },
//         { text: "24/7 AI call coverage", included: true },
//         { text: "Up to 25 staff members", included: true },
//         { text: "Booking, rescheduling & cancellation", included: true },
//         { text: "Zoho Booking integration", included: true },
//         { text: "Call tracking dashboard", included: true },
//         { text: "Dedicated support", included: true },
//         { text: "Automated call reminders", included: true },
//       ],
//     },
//   ];

//   // Load Razorpay checkout script once
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.async = true;
//     document.body.appendChild(script);
//     return () => {
//       const razorpayScript = document.querySelector(
//         'script[src="https://checkout.razorpay.com/v1/checkout.js"]'
//       );
//       if (razorpayScript) document.body.removeChild(razorpayScript);
//     };
//   }, []);

//   // Start Razorpay subscription process
//   const startSubscription = async (razorpayPlanId: string, planId: string) => {
//     if (!user) {
//       toast.error("Please log in to subscribe.");
//       return;
//     }

//     setLoadingPlan(planId);

//     try {
//       const { data } = await axios.post("/api/create-subscription", {
//         planId: razorpayPlanId,
//         email: user.email,
//       });

//       if (!data?.id) throw new Error("Invalid subscription response");

//       const rzp = new window.Razorpay({
//         key: process.env.NEXT_PUBLIC_RAZORPAY_LIVE_KEY,
//         subscription_id: data.id,
//         name: "Quantrox AI",
//         description: "Monthly Subscription Plan",
//         handler: function (response: any) {
//           if (response?.razorpay_payment_id) {
//             toast.success("Payment successful! Redirecting...");
//             router.push("/workspace/dashboard");
//           }
//         },
//         prefill: {
//           email: user?.email,
//           name: user?.user_metadata?.full_name || "User",
//         },
//         theme: { color: "#5B45FF" }, // your primary color
//       });

//       rzp.open();
//     } catch (error: any) {
//       console.error(error);
//       toast.error("Subscription failed", {
//         description: error.message || "Please try again.",
//       });
//     } finally {
//       setLoadingPlan(null);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#0B0B12] text-white py-20 px-6 flex justify-center">
//       <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {plans.map((plan) => (
//           <Card
//             key={plan.id}
//             className="flex flex-col justify-between rounded-2xl border border-[#2E2A4B] bg-gradient-to-b from-[#0F0C24] to-[#1A1446] p-8 text-left shadow-md transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(91,69,255,0.6)]"
//           >
//             <div>
//               <h2 className="text-2xl font-semibold mb-2">{plan.name}</h2>
//               <p className="text-gray-300 text-lg mb-6">{plan.price}</p>

//               <ul className="space-y-3 text-sm text-gray-200">
//                 {plan.features.map((feature, i) => (
//                   <li key={i} className="flex items-center gap-2">
//                     {feature.included ? (
//                       <IconCircleCheckFilled className="size-4 text-[#5B45FF]" />
//                     ) : (
//                       <IconCircleX className="size-4 text-gray-500" />
//                     )}
//                     <span>{feature.text}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="mt-8">
//               <Button
//                 className="w-full bg-[#5B45FF] hover:bg-[#6048FF] text-white font-medium py-2 rounded-lg"
//                 disabled={loadingPlan === plan.id}
//                 onClick={() => startSubscription(plan.razorpayPlanId!, plan.id)}
//               >
//                 {loadingPlan === plan.id ? "Processing..." : "Subscribe"}
//               </Button>
//             </div>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { IconCircleCheckFilled, IconCircleX } from "@tabler/icons-react";
// import { useAuth } from "@/contexts/AuthContext";
// import { toast } from "sonner";
// import axios from "axios";
// import { useRouter } from "next/navigation";

// declare global {
//   interface Window {
//     Razorpay: any;
//   }
// }

// export default function PricingPlans() {
//   const { user } = useAuth();
//   const router = useRouter();
//   const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

//   const plans = [
//     {
//       id: "starter_plan",
//       name: "Starter Plan",
//       price: "$225 / Month",
//       razorpayPlanId: process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_STARTER,
//       features: [
//         { text: "Up to 300 call minutes per month", included: true },
//         { text: "24/7 AI call coverage", included: true },
//         { text: "Up to 5 staff members", included: true },
//         { text: "Booking, rescheduling & cancellation", included: true },
//         { text: "Zoho Booking integration", included: true },
//         { text: "Call tracking dashboard", included: true },
//         { text: "Dedicated support", included: true },
//         { text: "No call reminders", included: false },
//       ],
//     },
//     {
//       id: "pro_plan",
//       name: "Pro Plan",
//       price: "$600 / Month",
//       razorpayPlanId: process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_PRO,
//       features: [
//         { text: "Up to 800 call minutes per month", included: true },
//         { text: "24/7 AI call coverage", included: true },
//         { text: "Up to 10 staff members", included: true },
//         { text: "Booking, rescheduling & cancellation", included: true },
//         { text: "Zoho Booking integration", included: true },
//         { text: "Call tracking dashboard", included: true },
//         { text: "Dedicated support", included: true },
//         { text: "No call reminders", included: false },
//       ],
//     },
//     {
//       id: "growth_plan",
//       name: "Growth Plan",
//       price: "$1800 / Month",
//       razorpayPlanId: process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_GROWTH,
//       features: [
//         { text: "Up to 2,400 call minutes per month", included: true },
//         { text: "24/7 AI call coverage", included: true },
//         { text: "Up to 15 staff members", included: true },
//         { text: "Booking, rescheduling & cancellation", included: true },
//         { text: "Zoho Booking integration", included: true },
//         { text: "Call tracking dashboard", included: true },
//         { text: "Dedicated support", included: true },
//         { text: "Automated call reminders", included: true },
//       ],
//     },
//     {
//       id: "enterprise_plan",
//       name: "Enterprise Plan",
//       price: "$2700 / Month",
//       razorpayPlanId: process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_ENTERPRISE,
//       features: [
//         { text: "Up to 3,600 call minutes per month", included: true },
//         { text: "24/7 AI call coverage", included: true },
//         { text: "Up to 25 staff members", included: true },
//         { text: "Booking, rescheduling & cancellation", included: true },
//         { text: "Zoho Booking integration", included: true },
//         { text: "Call tracking dashboard", included: true },
//         { text: "Dedicated support", included: true },
//         { text: "Automated call reminders", included: true },
//       ],
//     },
//   ];

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.async = true;
//     document.body.appendChild(script);
//     return () => {
//       const razorpayScript = document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]');
//       if (razorpayScript) document.body.removeChild(razorpayScript);
//     };
//   }, []);

//   const startSubscription = async (razorpayPlanId: string, planId: string) => {
//     if (!user) {
//       toast.error("Please log in to subscribe.");
//       return;
//     }
//     setLoadingPlan(planId);
//     try {
//       const { data } = await axios.post("/api/create-subscription", {
//         planId: razorpayPlanId,
//         email: user.email,
//       });

//       if (!data?.id) throw new Error("Invalid subscription response");

//       const rzp = new window.Razorpay({
//         key: process.env.NEXT_PUBLIC_RAZORPAY_LIVE_KEY,
//         subscription_id: data.id,
//         name: "Quantrox AI",
//         description: "Monthly Subscription Plan",
//         handler: function (response: any) {
//           if (response?.razorpay_payment_id) {
//             toast.success("Payment successful! Redirecting...");
//             router.push("/workspace/dashboard");
//           }
//         },
//         prefill: {
//           email: user?.email,
//           name: user?.user_metadata?.full_name || "User",
//         },
//         // 👇 The Razorpay theme color requires a hex code
//         theme: { color: "#ff2056" },
//       });

//       rzp.open();
//     } catch (error: any) {
//       console.error(error);
//       toast.error("Subscription failed", { description: error.message || "Please try again." });
//     } finally {
//       setLoadingPlan(null);
//     }
//   };

//   return (
//     <div className="min-h-screen text-white py-20 px-6 flex justify-start">
//       <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {plans.map((plan) => (
//           <Card
//             key={plan.id}
//             // 👇 The card border and background gradient have been updated
//             className="flex flex-col justify-between rounded-2xl border border-[#4B2A34] bg-gradient-to-b from-[#0f0a0b] to-[#31171f] p-8 text-left shadow-md transition-all duration-300 hover:shadow-[0_0_40px_-10px_lab(56%_80_32_/_0.6)]"
//           >
//             <div>
//               <h2 className="text-2xl font-semibold mb-2">{plan.name}</h2>
//               <p className="text-gray-300 text-lg mb-6">{plan.price}</p>
//               <ul className="space-y-3 text-sm text-gray-200">
//                 {plan.features.map((feature, i) => (
//                   <li key={i} className="flex items-center gap-2">
//                     {feature.included ? (
//                       // 👇 The checkmark icon now uses the text-primary class
//                       <IconCircleCheckFilled className="size-4 text-primary" />
//                     ) : (
//                       <IconCircleX className="size-4 text-gray-500" />
//                     )}
//                     <span>{feature.text}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="mt-8">
//               <Button
//                 // 👇 The button now uses the bg-primary and hover:bg-primary-dark classes
//                 className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-2 rounded-lg"
//                 disabled={loadingPlan === plan.id}
//                 onClick={() => startSubscription(plan.razorpayPlanId!, plan.id)}
//               >
//                 {loadingPlan === plan.id ? "Processing..." : "Subscribe"}
//               </Button>
//             </div>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }

//////     right code ----------------------------

// "use client";

// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { IconCircleCheckFilled, IconCircleX } from "@tabler/icons-react";
// import { useAuth } from "@/contexts/AuthContext";
// import { toast } from "sonner";
// import axios from "axios";
// import { useRouter } from "next/navigation";

// declare global {
//   interface Window {
//     Razorpay: any;
//   }
// }

// export default function PricingPlans() {
//   const { user } = useAuth();
//   const router = useRouter();
//   const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

//   const plans = [
//     {
//       id: "starter_plan",
//       name: "Starter Plan",
//       price: "$225 / Month",
//       razorpayPlanId: process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_STARTER,
//       features: [
//         { text: "Up to 300 call minutes per month", included: true },
//         { text: "24/7 AI call coverage", included: true },
//         { text: "Up to 5 staff members", included: true },
//         { text: "Booking, rescheduling & cancellation", included: true },
//         { text: "Zoho Booking integration", included: true },
//         { text: "Call tracking dashboard", included: true },
//         { text: "Dedicated support", included: true },
//         { text: "No call reminders", included: false },
//       ],
//     },
//     {
//       id: "pro_plan",
//       name: "Pro Plan",
//       price: "$600 / Month",
//       razorpayPlanId: process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_PRO,
//       features: [
//         { text: "Up to 800 call minutes per month", included: true },
//         { text: "24/7 AI call coverage", included: true },
//         { text: "Up to 10 staff members", included: true },
//         { text: "Booking, rescheduling & cancellation", included: true },
//         { text: "Zoho Booking integration", included: true },
//         { text: "Call tracking dashboard", included: true },
//         { text: "Dedicated support", included: true },
//         { text: "No call reminders", included: false },
//       ],
//     },
//     {
//       id: "growth_plan",
//       name: "Growth Plan",
//       price: "$1800 / Month",
//       razorpayPlanId: process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_GROWTH,
//       features: [
//         { text: "Up to 2,400 call minutes per month", included: true },
//         { text: "24/7 AI call coverage", included: true },
//         { text: "Up to 15 staff members", included: true },
//         { text: "Booking, rescheduling & cancellation", included: true },
//         { text: "Zoho Booking integration", included: true },
//         { text: "Call tracking dashboard", included: true },
//         { text: "Dedicated support", included: true },
//         { text: "Automated call reminders", included: true },
//       ],
//     },
//     {
//       id: "enterprise_plan",
//       name: "Enterprise Plan",
//       price: "$2700 / Month",
//       razorpayPlanId: process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_ENTERPRISE,
//       features: [
//         { text: "Up to 3,600 call minutes per month", included: true },
//         { text: "24/7 AI call coverage", included: true },
//         { text: "Up to 25 staff members", included: true },
//         { text: "Booking, rescheduling & cancellation", included: true },
//         { text: "Zoho Booking integration", included: true },
//         { text: "Call tracking dashboard", included: true },
//         { text: "Dedicated support", included: true },
//         { text: "Automated call reminders", included: true },
//       ],
//     },
//   ];

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.async = true;
//     document.body.appendChild(script);
//     return () => {
//       const razorpayScript = document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]');
//       if (razorpayScript) document.body.removeChild(razorpayScript);
//     };
//   }, []);

//   const startSubscription = async (razorpayPlanId: string, planId: string) => {
//     if (!user) {
//       toast.error("Please log in to subscribe.");
//       return;
//     }
//     setLoadingPlan(planId);
//     try {
//       const { data } = await axios.post("/api/create-subscription", {
//         planId: razorpayPlanId,
//         email: user.email,
//       });

//       if (!data?.id) throw new Error("Invalid subscription response");

//       const rzp = new window.Razorpay({
//         key: process.env.NEXT_PUBLIC_RAZORPAY_LIVE_KEY,
//         subscription_id: data.id,
//         name: "Quantrox AI",
//         description: "Monthly Subscription Plan",
//         handler: function (response: any) {
//           if (response?.razorpay_payment_id) {
//             toast.success("Payment successful! Redirecting...");
//             router.push("/workspace/dashboard");
//           }
//         },
//         prefill: {
//           email: user?.email,
//           name: user?.user_metadata?.full_name || "User",
//         },
//         theme: { color: "#ff2056" },
//       });

//       rzp.open();
//     } catch (error: any) {
//       console.error(error);
//       toast.error("Subscription failed", { description: error.message || "Please try again." });
//     } finally {
//       setLoadingPlan(null);
//     }
//   };

//   return (
//     <div className="min-h-screen text-white px-6 flex-col justify-start">
//        <div className="mb-10 text-center md:text-left"> {/* Added mb-10 for spacing */}
//       <h1 className="text-4xl font-bold mb-2">QualiQ AI</h1> {/* Larger heading */}
//       <p className="text-gray-400 text-lg">Select the plan that best fits your team's need.</p>
//     </div>
//       <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {plans.map((plan) => (
//           <Card
//             key={plan.id}
//             className="flex flex-col justify-between rounded-2xl border border-[#4B2A34] bg-gradient-to-b from-[#0f0a0b] to-[#31171f] p-8 text-left shadow-md transition-all duration-300 hover:shadow-[0_0_40px_-10px_lab(56%_80_32_/_0.6)]"
//           >
//             <div>
//               <h2 className="text-2xl font-semibold mb-2">{plan.name}</h2>
//               <p className="text-gray-300 text-lg mb-6">{plan.price}</p>
//               <ul className="space-y-3 text-sm text-gray-200">
//                 {plan.features.map((feature, i) => (
//                   <li key={i} className="flex items-center gap-2">
//                     {feature.included ? (
//                       <IconCircleCheckFilled className="size-4 text-primary" />
//                     ) : (
//                       <IconCircleX className="size-4 text-gray-500" />
//                     )}
//                     <span>{feature.text}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="mt-48">
//               <Button
//                 className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-2 rounded-lg"
//                 disabled={loadingPlan === plan.id}
//                 onClick={() => startSubscription(plan.razorpayPlanId!, plan.id)}
//               >
//                 {loadingPlan === plan.id ? "Processing..." : `Subscribe to ${plan.name.split(' ')[0]}`}
//               </Button>
//             </div>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useState, useCallback } from "react";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { IconCircleCheckFilled, IconCircleX } from "@tabler/icons-react";
// import { useAuth } from "@/contexts/AuthContext";
// import { toast } from "sonner";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import { createClient } from "@/lib/client";

// declare global {
//   interface Window {
//     Razorpay: any;
//   }
// }

// export default function PricingPlans() {
//   const { user } = useAuth();
//   const router = useRouter();
//   const supabase = createClient();
//   const [loadingPlan, setLoadingPlan] = useState<string | null>(null);
//   const [subscription, setSubscription] = useState<any>(null);
//   const [loadingSubscription, setLoadingSubscription] = useState(false);

//   const plans = [
//     {
//       id: "starter_plan",
//       name: "Starter Plan",
//       price: "$225 / Month",
//       razorpayPlanId: process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_STARTER,
//       features: [
//         { text: "Up to 300 call minutes per month", included: true },
//         { text: "24/7 AI call coverage", included: true },
//         { text: "Up to 5 staff members", included: true },
//         { text: "Booking, rescheduling & cancellation", included: true },
//         { text: "Zoho Booking integration", included: true },
//         { text: "Call tracking dashboard", included: true },
//         { text: "Dedicated support", included: true },
//         { text: "No call reminders", included: false },
//       ],
//     },
//     {
//       id: "pro_plan",
//       name: "Pro Plan",
//       price: "$600 / Month",
//       razorpayPlanId: process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_PRO,
//       features: [
//         { text: "Up to 800 call minutes per month", included: true },
//         { text: "24/7 AI call coverage", included: true },
//         { text: "Up to 10 staff members", included: true },
//         { text: "Booking, rescheduling & cancellation", included: true },
//         { text: "Zoho Booking integration", included: true },
//         { text: "Call tracking dashboard", included: true },
//         { text: "Dedicated support", included: true },
//         { text: "No call reminders", included: false },
//       ],
//     },
//     {
//       id: "growth_plan",
//       name: "Growth Plan",
//       price: "$1800 / Month",
//       razorpayPlanId: process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_GROWTH,
//       features: [
//         { text: "Up to 2,400 call minutes per month", included: true },
//         { text: "24/7 AI call coverage", included: true },
//         { text: "Up to 15 staff members", included: true },
//         { text: "Booking, rescheduling & cancellation", included: true },
//         { text: "Zoho Booking integration", included: true },
//         { text: "Call tracking dashboard", included: true },
//         { text: "Dedicated support", included: true },
//         { text: "Automated call reminders", included: true },
//       ],
//     },
//     {
//       id: "enterprise_plan",
//       name: "Enterprise Plan",
//       price: "$2700 / Month",
//       razorpayPlanId: process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_ENTERPRISE,
//       features: [
//         { text: "Up to 3,600 call minutes per month", included: true },
//         { text: "24/7 AI call coverage", included: true },
//         { text: "Up to 25 staff members", included: true },
//         { text: "Booking, rescheduling & cancellation", included: true },
//         { text: "Zoho Booking integration", included: true },
//         { text: "Call tracking dashboard", included: true },
//         { text: "Dedicated support", included: true },
//         { text: "Automated call reminders", included: true },
//       ],
//     },
//   ];

//   // 🧠 Load Razorpay script
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.async = true;
//     document.body.appendChild(script);
//     return () => {
//       const razorpayScript = document.querySelector(
//         'script[src="https://checkout.razorpay.com/v1/checkout.js"]'
//       );
//       if (razorpayScript) document.body.removeChild(razorpayScript);
//     };
//   }, []);

//   // 🧾 Fetch subscription info from Supabase
//   const fetchSubscriptionStatus = useCallback(async () => {
//     if (!user) return;
//     setLoadingSubscription(true);
//     try {
//       const { data, error } = await supabase
//         .from("users")
//         .select("subscription_status, current_plan, current_end, credits, credits_max")
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

//   const startSubscription = async (razorpayPlanId: string, planId: string) => {
//     if (!user) {
//       toast.error("Please log in to subscribe.");
//       return;
//     }
//     setLoadingPlan(planId);
//     try {
//       const { data } = await axios.post("/api/create-subscription", {
//         planId: razorpayPlanId,
//         email: user.email,
//       });

//       if (!data?.id) throw new Error("Invalid subscription response");

//       const rzp = new window.Razorpay({
//         key: process.env.NEXT_PUBLIC_RAZORPAY_LIVE_KEY,
//         subscription_id: data.id,
//         name: "QualiQ AI",
//         description: "Monthly Subscription Plan",
//         handler: async function (response: any) {
//           if (response?.razorpay_payment_id) {
//             toast.success("Payment successful! Updating plan...");
//             // ✅ Update Supabase with new plan
//             await supabase
//               .from("users")
//               .update({
//                 subscription_status: "active",
//                 current_plan: razorpayPlanId,
//               })
//               .eq("id", user.id);
//             fetchSubscriptionStatus();
//             router.push("/workspace/dashboard");
//           }
//         },
//         prefill: {
//           email: user?.email,
//           name: user?.user_metadata?.full_name || "User",
//         },
//         theme: { color: "#ff2056" },
//       });

//       rzp.open();
//     } catch (error: any) {
//       console.error(error);
//       toast.error("Subscription failed", {
//         description: error.message || "Please try again.",
//       });
//     } finally {
//       setLoadingPlan(null);
//     }
//   };

//   return (
//     <div className="min-h-screen text-white px-6 flex-col justify-start">
//       <div className="mb-10 text-center md:text-left">
//         <h1 className="text-4xl font-bold mb-2">QualiQ AI</h1>
//         <p className="text-gray-400 text-lg">
//           Select the plan that best fits your team's need.
//         </p>
//       </div>

//       <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {plans.map((plan) => {
//           const isActive =
//             subscription?.subscription_status === "active" &&
//             subscription?.current_plan === plan.razorpayPlanId;

//           return (
//             <Card
//               key={plan.id}
//               className="flex flex-col justify-between rounded-2xl border border-[#4B2A34] bg-gradient-to-b from-[#0f0a0b] to-[#31171f] p-8 text-left shadow-md transition-all duration-300 hover:shadow-[0_0_40px_-10px_lab(56%_80_32_/_0.6)]"
//             >
//               <div>
//                 <h2 className="text-2xl font-semibold mb-2">{plan.name}</h2>
//                 <p className="text-gray-300 text-lg mb-6">{plan.price}</p>
//                 <ul className="space-y-3 text-sm text-gray-200">
//                   {plan.features.map((feature, i) => (
//                     <li key={i} className="flex items-center gap-2">
//                       {feature.included ? (
//                         <IconCircleCheckFilled className="size-4 text-primary" />
//                       ) : (
//                         <IconCircleX className="size-4 text-gray-500" />
//                       )}
//                       <span>{feature.text}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="mt-48">
//                 {isActive ? (
//                   <Button
//                     disabled
//                     className="w-full bg-gray-600 text-white font-medium py-2 rounded-lg cursor-not-allowed"
//                   >
//                     Active Plan
//                   </Button>
//                 ) : (
//                   <Button
//                     className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-2 rounded-lg"
//                     disabled={loadingPlan === plan.id || loadingSubscription}
//                     onClick={() =>
//                       startSubscription(plan.razorpayPlanId!, plan.id)
//                     }
//                   >
//                     {loadingPlan === plan.id
//                       ? "Processing..."
//                       : `Subscribe to ${plan.name.split(" ")[0]}`}
//                   </Button>
//                 )}
//               </div>
//             </Card>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useState, useCallback } from "react";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { IconCircleCheckFilled, IconCircleX } from "@tabler/icons-react";
// import { useAuth } from "@/contexts/AuthContext";
// import { toast } from "sonner";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import { createClient } from "@/lib/client";

// declare global {
//   interface Window {
//     Razorpay: any;
//   }
// }

// export default function PricingPlans() {
//   const { user } = useAuth();
//   const router = useRouter();
//   const supabase = createClient();
//   const [loadingPlan, setLoadingPlan] = useState<string | null>(null);
//   const [subscription, setSubscription] = useState<any>(null);
//   const [loadingSubscription, setLoadingSubscription] = useState(false);

//   const plans = [
//     {
//       id: "starter_plan",
//       name: "Starter Plan",
//       price: "$55 / Month",
//       razorpayPlanId: process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_STARTER,
//       features: [
//         { text: "75 minutes of calls per month", included: true },
//         { text: "24/7 AI call coverage", included: true },
//         { text: "Real-time call logs", included: true },
//         { text: "Prospect insights with recordings", included: true },
//         { text: "AI summaries & lead scores", included: true },
//         { text: "Call performance analytics", included: true },
//         { text: "Call follow-up", included: true },
//         { text: "24/7 technical support", included: true },
//       ],
//     },
//     {
//       id: "pro_plan",
//       name: "Pro Plan",
//       price: "$120 / Month",
//       razorpayPlanId: process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_PRO,
//       features: [
//         { text: "160 minutes of calls per month", included: true },
//         { text: "24/7 AI call coverage", included: true },
//         { text: "Real-time call logs", included: true },
//         { text: "Prospect insights with recordings", included: true },
//         { text: "AI summaries & lead scores", included: true },
//         { text: "Call performance analytics", included: true },
//         { text: "Call follow-up", included: true },
//         { text: "24/7 technical support", included: true },
//       ],
//     },
//     {
//       id: "growth_plan",
//       name: "Growth Plan",
//       price: "$225 / Month",
//       razorpayPlanId: process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_GROWTH,
//       features: [
//         { text: "300 minutes of calls per month", included: true },
//         { text: "24/7 AI call coverage", included: true },
//         { text: "Real-time call logs", included: true },
//         { text: "Prospect insights with recordings", included: true },
//         { text: "AI summaries & lead scores", included: true },
//         { text: "Call performance analytics", included: true },
//         { text: "Call follow-up", included: true },
//         { text: "24/7 technical support", included: true },
//       ],
//     },
//     // {
//     //   id: "enterprise_plan",
//     //   name: "Enterprise Plan",
//     //   price: "$2700 / Month",
//     //   razorpayPlanId: process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_ENTERPRISE,
//     //   features: [
//     //     { text: "Up to 3,600 call minutes per month", included: true },
//     //     { text: "24/7 AI call coverage", included: true },
//     //     { text: "Up to 25 staff members", included: true },
//     //     { text: "Booking, rescheduling & cancellation", included: true },
//     //     { text: "Zoho Booking integration", included: true },
//     //     { text: "Call tracking dashboard", included: true },
//     //     { text: "Dedicated support", included: true },
//     //     { text: "Automated call reminders", included: true },
//     //   ],
//     // },
//   ];

//   // 🧠 Load Razorpay script
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.async = true;
//     document.body.appendChild(script);
//     return () => {
//       const razorpayScript = document.querySelector(
//         'script[src="https://checkout.razorpay.com/v1/checkout.js"]'
//       );
//       if (razorpayScript) document.body.removeChild(razorpayScript);
//     };
//   }, []);

//   // 🧾 Fetch subscription info from Supabase
//   const fetchSubscriptionStatus = useCallback(async () => {
//     if (!user) return;
//     setLoadingSubscription(true);
//     try {
//       const { data, error } = await supabase
//         .from("users")
//         .select("subscription_status, plan_id, credits, credits_max")
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

//   const startSubscription = async (razorpayPlanId: string, planId: string) => {
//     if (!user) {
//       toast.error("Please log in to subscribe.");
//       return;
//     }
//     setLoadingPlan(planId);
//     try {
//       const { data } = await axios.post("/api/create-subscription", {
//         planId: razorpayPlanId,
//         email: user.email,
//       });

//       if (!data?.id) throw new Error("Invalid subscription response");

//       const rzp = new window.Razorpay({
//         key: process.env.NEXT_PUBLIC_RAZORPAY_LIVE_KEY,
//         subscription_id: data.id,
//         name: "QualiQ AI",
//         description: "Monthly Subscription Plan",
//         handler: async function (response: any) {
//           if (response?.razorpay_payment_id) {
//             toast.success("Payment successful! Updating plan...");
//             // ✅ Update Supabase with new plan
//             await supabase
//               .from("users")
//               .update({
//                 subscription_status: "active",
//                 plan_id: razorpayPlanId,
//               })
//               .eq("id", user.id);
//             fetchSubscriptionStatus();
//             router.push("/workspace/dashboard");
//           }
//         },
//         prefill: {
//           email: user?.email,
//           name: user?.user_metadata?.full_name || "User",
//         },
//         theme: { color: "#ff2056" },
//       });

//       rzp.open();
//     } catch (error: any) {
//       console.error(error);
//       toast.error("Subscription failed", {
//         description: error.message || "Please try again.",
//       });
//     } finally {
//       setLoadingPlan(null);
//     }
//   };

//   return (
//     <div className="min-h-screen text-white px-6 flex-col justify-start">
//       <div className="mb-10 text-center md:text-left">
//         <h1 className="text-4xl font-bold mb-2">QualiQ AI</h1>
//         <p className="text-gray-400 text-lg">
//           Select the plan that best fits your needs.
//         </p>
//       </div>

//       <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {plans.map((plan) => {
//           const isActive =
//             subscription?.subscription_status === "active" &&
//             subscription?.plan_id === plan.razorpayPlanId;

//           return (
//             <Card
//               key={plan.id}
//               className="flex flex-col justify-between rounded-2xl border border-[#4B2A34] bg-gradient-to-b from-[#0f0a0b] to-[#31171f] p-8 text-left shadow-md transition-all duration-300 hover:shadow-[0_0_40px_-10px_lab(56%_80_32_/_0.6)]"
//             >
//               <div>
//                 <h2 className="text-2xl font-semibold mb-2">{plan.name}</h2>
//                 <p className="text-gray-300 text-lg mb-6">{plan.price}</p>
//                 <ul className="space-y-3 text-sm text-gray-200">
//                   {plan.features.map((feature, i) => (
//                     <li key={i} className="flex items-center gap-2">
//                       {feature.included ? (
//                         <IconCircleCheckFilled className="size-4 text-primary" />
//                       ) : (
//                         <IconCircleX className="size-4 text-gray-500" />
//                       )}
//                       <span>{feature.text}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="mt-48">
//                 {isActive ? (
//                   <Button
//                     disabled
//                     className="w-full bg-gray-600 text-white font-medium py-2 rounded-lg cursor-not-allowed"
//                   >
//                     Active Plan
//                   </Button>
//                 ) : (
//                   <Button
//                     className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-2 rounded-lg"
//                     disabled={loadingPlan === plan.id || loadingSubscription}
//                     onClick={() =>
//                       startSubscription(plan.razorpayPlanId!, plan.id)
//                     }
//                   >
//                     {loadingPlan === plan.id
//                       ? "Processing..."
//                       : `Subscribe to ${plan.name.split(" ")[0]}`}
//                   </Button>
//                 )}
//               </div>
//             </Card>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useState, useCallback } from "react";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { IconCircleCheckFilled, IconCircleX } from "@tabler/icons-react";
// import { useAuth } from "@/contexts/AuthContext";
// import { toast } from "sonner";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import { createClient } from "@/lib/client";

// declare global {
//   interface Window {
//     Razorpay: any;
//   }
// }

// export default function PricingPlans() {
//   const { user } = useAuth();
//   const router = useRouter();
//   const supabase = createClient();
//   const [loadingPlan, setLoadingPlan] = useState<string | null>(null);
//   const [subscription, setSubscription] = useState<any>(null);
//   const [loadingSubscription, setLoadingSubscription] = useState(false);

//   // Success modal states
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const [countdown, setCountdown] = useState<number>(20);

//   const plans = [
//     {
//       id: "starter_plan",
//       name: "Starter Plan",
//       price: "$55 / Month",
//       razorpayPlanId: process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_STARTER,
//       features: [
//         { text: "75 minutes of calls per month", included: true },
//         { text: "24/7 AI call coverage", included: true },
//         { text: "Real-time call logs", included: true },
//         { text: "Prospect insights with recordings", included: true },
//         { text: "AI summaries & lead scores", included: true },
//         { text: "Call performance analytics", included: true },
//         { text: "Call follow-up", included: true },
//         { text: "24/7 technical support", included: true },
//       ],
//     },
//     {
//       id: "pro_plan",
//       name: "Pro Plan",
//       price: "$120 / Month",
//       razorpayPlanId: process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_PRO,
//       features: [
//         { text: "160 minutes of calls per month", included: true },
//         { text: "24/7 AI call coverage", included: true },
//         { text: "Real-time call logs", included: true },
//         { text: "Prospect insights with recordings", included: true },
//         { text: "AI summaries & lead scores", included: true },
//         { text: "Call performance analytics", included: true },
//         { text: "Call follow-up", included: true },
//         { text: "24/7 technical support", included: true },
//       ],
//     },
//     {
//       id: "growth_plan",
//       name: "Growth Plan",
//       price: "$225 / Month",
//       razorpayPlanId: process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_GROWTH,
//       features: [
//         { text: "300 minutes of calls per month", included: true },
//         { text: "24/7 AI call coverage", included: true },
//         { text: "Real-time call logs", included: true },
//         { text: "Prospect insights with recordings", included: true },
//         { text: "AI summaries & lead scores", included: true },
//         { text: "Call performance analytics", included: true },
//         { text: "Call follow-up", included: true },
//         { text: "24/7 technical support", included: true },
//       ],
//     },
//   ];

//   // 🧠 Load Razorpay script
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.async = true;
//     document.body.appendChild(script);
//     return () => {
//       const razorpayScript = document.querySelector(
//         'script[src="https://checkout.razorpay.com/v1/checkout.js"]'
//       );
//       if (razorpayScript) document.body.removeChild(razorpayScript);
//     };
//   }, []);

//   // 🧾 Fetch subscription info from Supabase
//   const fetchSubscriptionStatus = useCallback(async () => {
//     if (!user) return;
//     setLoadingSubscription(true);
//     try {
//       const { data, error } = await supabase
//         .from("users")
//         .select("subscription_status, plan_id, credits, credits_max")
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

//   // Success modal countdown effect
//   useEffect(() => {
//     if (!showSuccessModal) return;
//     setCountdown(20);
//     const iv = window.setInterval(() => {
//       setCountdown((c) => {
//         if (c <= 1) {
//           clearInterval(iv);
//           // At end of countdown, re-fetch subscription status and navigate
//           fetchSubscriptionStatus();
//           setTimeout(() => {
//             setShowSuccessModal(false);
//             router.push("/workspace/dashboard");
//           }, 400); // slight delay for UX
//           return 0;
//         }
//         return c - 1;
//       });
//     }, 1000);

//     return () => clearInterval(iv);
//   }, [showSuccessModal, fetchSubscriptionStatus, router]);

//   const startSubscription = async (razorpayPlanId: string, planId: string) => {
//     if (!user) {
//       toast.error("Please log in to subscribe.");
//       return;
//     }
//     setLoadingPlan(planId);
//     try {
//       const { data } = await axios.post("/api/create-subscription", {
//         planId: razorpayPlanId,
//         email: user.email,
//       });

//       if (!data?.id) throw new Error("Invalid subscription response");

//       const rzp = new window.Razorpay({
//         key: process.env.NEXT_PUBLIC_RAZORPAY_LIVE_KEY,
//         subscription_id: data.id,
//         name: "QualiQ AI",
//         description: "Monthly Subscription Plan",
//         handler: async function (response: any) {
//           if (response?.razorpay_payment_id) {
//             // show toast immediately
//             toast.success("Payment successful! Updating plan...");

//             // Optimistically set active on Supabase while webhooks catch up
//             try {
//               await supabase
//                 .from("users")
//                 .update({
//                   subscription_status: "active",
//                   plan_id: razorpayPlanId,
//                 })
//                 .eq("id", user.id);
//             } catch (err) {
//               // Non-fatal: we'll still show modal and re-fetch later
//               console.error("Optimistic update failed", err);
//             }

//             // Show the success modal + 20s countdown
//             setShowSuccessModal(true);

//             // Optionally immediate refresh of local state so UI reflects active plan
//             fetchSubscriptionStatus();
//             // Don't navigate right away — wait for countdown to finish for UX
//           }
//         },
//         prefill: {
//           email: user?.email,
//           name: user?.user_metadata?.full_name || "User",
//         },
//         theme: { color: "#ff2056" },
//       });

//       rzp.open();
//     } catch (error: any) {
//       console.error(error);
//       toast.error("Subscription failed", {
//         description: error.message || "Please try again.",
//       });
//     } finally {
//       setLoadingPlan(null);
//     }
//   };

//   return (
//     <div className="min-h-screen text-white px-6 flex-col justify-start">
//       <div className="mb-10 text-center md:text-left">
//         <h1 className="text-4xl font-bold mb-2">QualiQ AI</h1>
//         <p className="text-gray-400 text-lg">
//           Select the plan that best fits your needs.
//         </p>
//       </div>

//       <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {plans.map((plan) => {
//           const isActive =
//             subscription?.subscription_status === "active" &&
//             subscription?.plan_id === plan.razorpayPlanId;

//           return (
//             <Card
//               key={plan.id}
//               className="flex flex-col justify-between rounded-2xl border border-[#4B2A34] bg-gradient-to-b from-[#0f0a0b] to-[#31171f] p-8 text-left shadow-md transition-all duration-300 hover:shadow-[0_0_40px_-10px_lab(56%_80_32_/_0.6)]"
//             >
//               <div>
//                 <h2 className="text-2xl font-semibold mb-2">{plan.name}</h2>
//                 <p className="text-gray-300 text-lg mb-6">{plan.price}</p>
//                 <ul className="space-y-3 text-sm text-gray-200">
//                   {plan.features.map((feature, i) => (
//                     <li key={i} className="flex items-center gap-2">
//                       {feature.included ? (
//                         <IconCircleCheckFilled className="size-4 text-primary" />
//                       ) : (
//                         <IconCircleX className="size-4 text-gray-500" />
//                       )}
//                       <span>{feature.text}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="mt-48">
//                 {isActive ? (
//                   <Button
//                     disabled
//                     className="w-full bg-gray-600 text-white font-medium py-2 rounded-lg cursor-not-allowed"
//                   >
//                     Active Plan
//                   </Button>
//                 ) : (
//                   <Button
//                     className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-2 rounded-lg"
//                     disabled={loadingPlan === plan.id || loadingSubscription}
//                     onClick={() =>
//                       startSubscription(plan.razorpayPlanId!, plan.id)
//                     }
//                   >
//                     {loadingPlan === plan.id
//                       ? "Processing..."
//                       : `Subscribe to ${plan.name.split(" ")[0]}`}
//                   </Button>
//                 )}
//               </div>
//             </Card>
//           );
//         })}
//       </div>

//       {/* Success Modal (animated check + countdown) */}
//       {showSuccessModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center">
//           {/* backdrop */}
//           <div
//             className="absolute inset-0 bg-black/70 backdrop-blur-sm"
//             onClick={() => {
//               /* clicking backdrop won't close — keep modal until countdown finishes */
//             }}
//           />

//           <div className="relative z-10 w-[min(520px,90%)] mx-auto rounded-2xl bg-gradient-to-b from-[#0f0a0b] to-[#2b1216] p-8 shadow-2xl border border-[#4B2A34]">
//             {/* Animated check circle */}
//             <div className="flex flex-col items-center gap-6">
//               <div className="relative">
//                 {/* Circle + SVG check animation */}
//                 <svg
//                   className="w-28 h-28"
//                   viewBox="0 0 120 120"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <defs>
//                     <linearGradient id="g" x1="0" x2="1">
//                       <stop offset="0%" stopColor="#ff7aa2" />
//                       <stop offset="100%" stopColor="#ff2056" />
//                     </linearGradient>
//                   </defs>

//                   <circle
//                     cx="60"
//                     cy="60"
//                     r="50"
//                     stroke="url(#g)"
//                     strokeWidth="6"
//                     strokeLinecap="round"
//                     className="animate-spin-slow"
//                     style={{ opacity: 0.12 }}
//                   />
//                   {/* ring stroke-draw */}
//                   <circle
//                     cx="60"
//                     cy="60"
//                     r="46"
//                     stroke="url(#g)"
//                     strokeWidth="4"
//                     strokeLinecap="round"
//                     strokeDasharray="289"
//                     strokeDashoffset="289"
//                     className="stroke-animate"
//                     transform="rotate(-90 60 60)"
//                   />
//                   <path
//                     d="M40 62 L54 76 L80 48"
//                     stroke="white"
//                     strokeWidth="6"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     fill="none"
//                     strokeDasharray="120"
//                     strokeDashoffset="120"
//                     className="check-animate"
//                   />
//                 </svg>

//                 {/* little confetti burst (pure css) */}
//                 <div className="absolute -right-4 -top-4 space-y-1">
//                   <span className="block w-2 h-2 rounded-full bg-[#ffd700] animate-pulse-slow" />
//                   <span className="block w-1.5 h-1.5 rounded-full bg-[#7afcff] animate-bounce-delay" />
//                 </div>
//               </div>

//               <div className="text-center">
//                 <h3 className="text-2xl font-semibold">Payment successful!</h3>
//                 <p className="text-sm text-gray-300 mt-2">
//                   We activated your subscription. Waiting for the backend
//                   webhook to finish processing — showing a short countdown.
//                 </p>
//               </div>

//               <div className="flex flex-col items-center gap-1">
//                 <div className="text-sm text-gray-300">
//                   <span className="font-medium text-white">{countdown}s</span>{" "}
//                   subscription activated
//                 </div>

//                 {/* small progress bar */}
//                 <div className="w-48 h-2 bg-white/10 rounded-full overflow-hidden">
//                   <div
//                     className="h-full bg-gradient-to-r from-[#ff7aa2] to-[#ff2056] transition-all"
//                     style={{
//                       width: `${(countdown / 20) * 100}%`,
//                       transition: "width 0.9s linear",
//                     }}
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="mt-6 text-center">
//               <p className="text-xs text-gray-400">
//                 If you don't see the updated credits immediately, they'll arrive
//                 via webhook — refreshing now and again will show them.
//               </p>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ===== Styles for simple animations (tailwind + custom) ===== */}
//       <style jsx>{`
//         /* stroke draw animation */
//         .stroke-animate {
//           animation: draw 700ms ease-out forwards;
//         }
//         .check-animate {
//           animation: draw-check 500ms 350ms ease-out forwards;
//         }
//         @keyframes draw {
//           from {
//             stroke-dashoffset: 289;
//           }
//           to {
//             stroke-dashoffset: 0;
//           }
//         }
//         @keyframes draw-check {
//           from {
//             stroke-dashoffset: 120;
//           }
//           to {
//             stroke-dashoffset: 0;
//           }
//         }
//         /* slow spin subtle */
//         .animate-spin-slow {
//           animation: spin 6s linear infinite;
//         }
//         @keyframes spin {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }
//         /* pulses / slight bounce delays */
//         .animate-pulse-slow {
//           animation: pulse 1.6s infinite;
//         }
//         .animate-bounce-delay {
//           animation: bounce 1.2s infinite 0.2s;
//         }
//         @keyframes pulse {
//           0% {
//             transform: scale(1);
//             opacity: 1;
//           }
//           50% {
//             transform: scale(1.2);
//             opacity: 0.6;
//           }
//           100% {
//             transform: scale(1);
//             opacity: 1;
//           }
//         }
//         @keyframes bounce {
//           0%,
//           100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-6px);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

"use client";

import { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { IconCircleCheckFilled, IconCircleX } from "@tabler/icons-react";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import axios from "axios";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/client";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const COUNTDOWN_START = 5; // 5 seconds only

export default function PricingPlans() {
  const { user } = useAuth();
  const router = useRouter();
  const supabase = createClient();
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);
  const [subscription, setSubscription] = useState<any>(null);
  const [loadingSubscription, setLoadingSubscription] = useState(false);

  // Success modal states
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [countdown, setCountdown] = useState<number>(COUNTDOWN_START);

  const plans = [
    {
      id: "basic Plan",
      name: "Basic Plan",
      price: "$14 / Month",
      razorpayPlanId: process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_STARTER,
      features: [
        { text: "35 minutes of calls per month", included: true },
        { text: "Auto meeting scheduling (limited)", included: true },
        { text: "24/7 AI call coverage", included: true },
        { text: "Real-time call logs", included: true },
        { text: "Prospect insights with recordings", included: true },
        { text: "AI summaries & lead scores", included: true },
        { text: "Call performance analytics", included: true },
        { text: "Call follow-up", included: true },
        { text: "24/7 technical support", included: true },
      ],
    },
    {
      id: "pro_plan",
      name: "Pro Plan",
      price: "$60 / Month",
      razorpayPlanId: process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_PRO,
      features: [
        { text: "150 minutes of calls per month", included: true },
        { text: "Auto meeting scheduling (limited)", included: true },
        { text: "24/7 AI call coverage", included: true },
        { text: "Real-time call logs", included: true },
        { text: "Prospect insights with recordings", included: true },
        { text: "AI summaries & lead scores", included: true },
        { text: "Call performance analytics", included: true },
        { text: "Call follow-up", included: true },
        { text: "24/7 technical support", included: true },
      ],
    },
    {
      id: "growth_plan",
      name: "Growth Plan",
      price: "$240 / Month",
      razorpayPlanId: process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_GROWTH,
      features: [
        { text: "600 minutes of calls per month", included: true },
        { text: "Auto meeting scheduling (limited)", included: true },
        { text: "24/7 AI call coverage", included: true },
        { text: "Real-time call logs", included: true },
        { text: "Prospect insights with recordings", included: true },
        { text: "AI summaries & lead scores", included: true },
        { text: "Call performance analytics", included: true },
        { text: "Call follow-up", included: true },
        { text: "24/7 technical support", included: true },
      ],
    },
  ];

  // 🧠 Load Razorpay script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      const razorpayScript = document.querySelector(
        'script[src="https://checkout.razorpay.com/v1/checkout.js"]',
      );
      if (razorpayScript) document.body.removeChild(razorpayScript);
    };
  }, []);

  // 🧾 Fetch subscription info from Supabase
  const fetchSubscriptionStatus = useCallback(async () => {
    if (!user) return;
    setLoadingSubscription(true);
    try {
      const { data, error } = await supabase
        .from("users")
        .select("subscription_status, plan_id, credits, credits_max")
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

  // Countdown effect: decrement each second while modal shown
  useEffect(() => {
    if (!showSuccessModal) return;

    // Reset countdown to full start value when modal opens
    setCountdown(COUNTDOWN_START);

    const intervalId = window.setInterval(() => {
      setCountdown((c) => {
        const next = c - 1;
        if (next <= 0) {
          clearInterval(intervalId);
          // Final fetch + close + navigate
          (async () => {
            try {
              await fetchSubscriptionStatus();
            } catch (e) {
              // ignore: fetchSubscriptionStatus handles errors
            } finally {
              // small delay to let UI update
              setTimeout(() => {
                setShowSuccessModal(false);
                router.push("/workspace/dashboard");
              }, 400);
            }
          })();
          return 0;
        }
        return next;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [showSuccessModal, fetchSubscriptionStatus, router]);

  const startSubscription = async (razorpayPlanId: string, planId: string) => {
    if (!user) {
      toast.error("Please log in to subscribe.");
      return;
    }
    setLoadingPlan(planId);
    try {
      const { data } = await axios.post("/api/create-subscription", {
        planId: razorpayPlanId,
        email: user.email,
      });

      if (!data?.id) throw new Error("Invalid subscription response");

      const rzp = new window.Razorpay({
        key: process.env.NEXT_PUBLIC_RAZORPAY_LIVE_KEY,
        subscription_id: data.id,
        name: "QualiQ AI",
        description: "Monthly Subscription Plan",
        handler: async function (response: any) {
          if (response?.razorpay_payment_id) {
            // show toast immediately
            toast.success("Payment successful! Updating plan...");

            // Optimistically set active on Supabase while webhooks catch up
            try {
              await supabase
                .from("users")
                .update({
                  subscription_status: "active",
                  plan_id: razorpayPlanId,
                })
                .eq("id", user.id);
            } catch (err) {
              // Non-fatal: we'll still show modal and re-fetch later
              console.error("Optimistic update failed", err);
            }

            // Show the success modal + 75s countdown
            setShowSuccessModal(true);

            // Refresh local state immediately so UI reflects active plan
            fetchSubscriptionStatus();
            // Navigation will happen after countdown completes
          }
        },
        prefill: {
          email: user?.email,
          name: user?.user_metadata?.full_name || "User",
        },
        theme: { color: "#ff2056" },
      });

      rzp.open();
    } catch (error: any) {
      console.error(error);
      toast.error("Subscription failed", {
        description: error.message || "Please try again.",
      });
    } finally {
      setLoadingPlan(null);
    }
  };

  const formatTime = (secs: number) => `${Math.max(secs, 0)} sec`;

  return (
    <div className="min-h-screen text-white flex-col justify-start">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan) => {
          const isActive =
            subscription?.subscription_status === "active" &&
            subscription?.plan_id === plan.razorpayPlanId;

          return (
            <Card
              key={plan.id}
              className="flex flex-col justify-between rounded-2xl border border-[#4B2A34] bg-gradient-to-b from-[#0f0a0b] to-[#31171f] p-8 text-left shadow-md transition-all duration-300 hover:shadow-[0_0_40px_-10px_lab(56%_80_32_/_0.6)]"
            >
              <div>
                <h2 className="text-2xl font-semibold mb-2">{plan.name}</h2>
                <p className="text-gray-300 text-lg mb-6">{plan.price}</p>
                <ul className="space-y-3 text-sm text-gray-200">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      {feature.included ? (
                        <IconCircleCheckFilled className="size-4 text-primary" />
                      ) : (
                        <IconCircleX className="size-4 text-gray-500" />
                      )}
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-48">
                {isActive ? (
                  <Button
                    disabled
                    className="w-full bg-gray-600 text-white font-medium py-2 rounded-lg cursor-not-allowed"
                  >
                    Active Plan
                  </Button>
                ) : (
                  <Button
                    className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-2 rounded-lg cursor-pointer"
                    disabled={loadingPlan === plan.id || loadingSubscription}
                    onClick={() =>
                      startSubscription(plan.razorpayPlanId!, plan.id)
                    }
                  >
                    {loadingPlan === plan.id
                      ? "Processing..."
                      : `Subscribe to ${plan.name.split(" ")[0]}`}
                  </Button>
                )}
              </div>
            </Card>
          );
        })}
      </div>

      {/* Success Modal (animated check + countdown 1:15 = 75s) */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => {
              /* clicking backdrop won't close — keep modal until countdown finishes */
            }}
          />

          <div className="relative z-10 w-[min(640px,92%)] mx-auto rounded-2xl bg-gradient-to-b from-[#0f0a0b] to-[#2b1216] p-8 shadow-2xl border border-[#4B2A34]">
            {/* Animated check circle */}
            <div className="flex flex-col items-center gap-6">
              <div className="relative">
                {/* Circle + SVG check animation */}
                <svg
                  className="w-28 h-28"
                  viewBox="0 0 120 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="g" x1="0" x2="1">
                      <stop offset="0%" stopColor="#ff7aa2" />
                      <stop offset="100%" stopColor="#ff2056" />
                    </linearGradient>
                  </defs>

                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="url(#g)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    className="animate-spin-slow"
                    style={{ opacity: 0.12 }}
                  />
                  {/* ring stroke-draw */}
                  <circle
                    cx="60"
                    cy="60"
                    r="46"
                    stroke="url(#g)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="289"
                    strokeDashoffset="289"
                    className="stroke-animate"
                    transform="rotate(-90 60 60)"
                  />
                  <path
                    d="M40 62 L54 76 L80 48"
                    stroke="white"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    strokeDasharray="120"
                    strokeDashoffset="120"
                    className="check-animate"
                  />
                </svg>

                {/* small confetti dots for subtle effect */}
                <div className="absolute -right-4 -top-4 space-y-1">
                  <span className="block w-2 h-2 rounded-full bg-[#ffd700] animate-pulse-slow" />
                  <span className="block w-1.5 h-1.5 rounded-full bg-[#7afcff] animate-bounce-delay" />
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-semibold">Payment successful!</h3>
                <p className="text-sm text-gray-300 mt-2">
                  We activated your subscription. Backend webhook may take a bit
                  to finalize credits — showing a short countdown.
                </p>
              </div>

              <div className="flex flex-col items-center gap-3 w-full">
                <div className="text-sm text-gray-300">
                  <span className="font-medium text-white">
                    {formatTime(countdown)}
                  </span>{" "}
                  subscription activated
                </div>

                {/* Progress bar: a fill that smoothly shrinks over COUNTDOWN_START seconds */}
                <div className="w-64 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#ff7aa2] to-[#ff2056] progress-fill"
                    style={{
                      // the CSS animation is applied dynamically to run over COUNTDOWN_START seconds
                      animation: `shrink ${COUNTDOWN_START}s linear forwards`,
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-xs text-gray-400">
                If you don't see updated credits immediately, they'll arrive via
                webhook — we'll re-check once the countdown finishes.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ===== Styles for animations / progress bar ===== */}
      <style jsx>{`
        /* stroke draw animation */
        .stroke-animate {
          animation: draw 700ms ease-out forwards;
        }
        .check-animate {
          animation: draw-check 500ms 350ms ease-out forwards;
        }
        @keyframes draw {
          from {
            stroke-dashoffset: 289;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        @keyframes draw-check {
          from {
            stroke-dashoffset: 120;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        /* slow spin subtle */
        .animate-spin-slow {
          animation: spin 6s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        /* pulses / slight bounce delays */
        .animate-pulse-slow {
          animation: pulse 1.6s infinite;
        }
        .animate-bounce-delay {
          animation: bounce 1.2s infinite 0.2s;
        }
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.6;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        /* Progress bar shrink animation (100% -> 0%) */
        @keyframes shrink {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }
      `}</style>
    </div>
  );
}
