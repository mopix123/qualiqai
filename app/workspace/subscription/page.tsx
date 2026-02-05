// "use client"
// import { AppSidebar } from "@/components/app-sidebar"
// import { SiteHeader } from "@/components/site-header"
// import {
//   SidebarInset,
//   SidebarProvider,
// } from "@/components/ui/sidebar"
// import axios from 'axios';
// import { Button } from "@/components/ui/button"
// import { useAuth } from "@/contexts/AuthContext"
// // import { ChartAreaInteractive } from "@/components/chart-area-interactive"
// // import SubscriptionCalculator from "@/components/usage-biiling-data"
// import PricingBlack from "@/components/usage-biiling-data"
// import { useEffect } from "react";

// export default function Page() {
//   const { user } = useAuth();

//   useEffect(() => {
//   const script = document.createElement("script");

//   script.src = "https://checkout.razorpay.com/v1/checkout.js";
//   script.async = true;
//   script.onload = () => console.log(true); // Ensure script is
//   document.body.appendChild(script);

//   return () => {
//     document.body.removeChild(script);
//   };
// }, []);

//   const GeneratesubScriptionId=async()=>{
//     const result = await axios.post('/api/create-subscription');
//     console.log(result.data);
//     MakePayment(result?.data?.id)
//   }

//   const MakePayment=(subscriptionsId:string)=>{
//     let options={
//       key:process.env?.NEXT_PUBLIC_RAZORPAY_LIVE_KEY,
//       subscription_id:subscriptionsId,
//       name:"Quantrox",
//       description:"",
//       handler:function(resp:any){
//         console.log(resp.razorpay_payment_id);
//         // console.log(resp);
//         if(resp?.razorpay_payment_id)
//         {

//         }
//       },
//       "prefill":{
//         email:user?.email,
//       }
//     };

//     //@ts-ignore
//     const rzp=new window.Razorpay(options);
//     rzp.open()
//   }

// //   const MakePayment = (subscriptionsId: string) => {
// //   // Ensure the Razorpay script has loaded before creating an instance

// //   const options = {
// //     key: process.env.NEXT_PUBLIC_RAZORPAY_LIVE_KEY, // Corrected: Added NEXT_PUBLIC_ prefix
// //     subscription_id: subscriptionsId,                // Corrected: 'i' is now lowercase
// //     name: "Quantrox",
// //     description: "AI Lead Qualifier Subscription",
// //     handler: function (resp: any) {
// //       console.log("Payment successful:", resp);
// //       alert(`Payment successful! Payment ID: ${resp.razorpay_payment_id}`);
// //       // Here you would typically call another API to verify the subscription payment on your backend
// //     },
// //     prefill: {
// //       email: user?.email,
// //     }
// //   };

// //   //@ts-ignore
// //   const rzp = new window.Razorpay(options);
// //   rzp.open();
// // }

//   return (
//       <SidebarInset>
//         <SiteHeader />
//         <div className="flex flex-1 flex-col">
//           <div className="@container/main flex flex-1 flex-col gap-2 px-5 py-5">
//             {/* <SubscriptionCalculator/> */}
//             <PricingBlack/>
//             <Button onClick={GeneratesubScriptionId}>Button</Button>
//           </div>
//         </div>
//       </SidebarInset>
//   )
// }

// "use client"

// import { useEffect } from "react";
// import { useAuth } from "@/contexts/AuthContext";
// import { createClient } from "@/lib/client"; // 👈 1. Import Supabase client
// import axios from 'axios';

// import { SiteHeader } from "@/components/site-header";
// import { SidebarInset } from "@/components/ui/sidebar";
// import { Button } from "@/components/ui/button";
// import PricingBlack from "@/components/usage-biiling-data";

// // You need to declare the Razorpay property on the Window object for TypeScript
// declare global {
//   interface Window {
//     Razorpay: any;
//   }
// }

// export default function SubscriptionPage() {
//   const { user } = useAuth();
//   const supabase = createClient(); // 👈 2. Create the Supabase client instance

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.async = true;
//     document.body.appendChild(script);
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   // 👇 3. New function to update your Supabase table
//   const saveSubscriptionDetails = async (paymentId: string, subscriptionId: string) => {
//     if (!user) {
//       alert("User not found. Cannot save subscription details.");
//       return;
//     }
//     try {
//       const { data, error } = await supabase
//         .from("users")
//         .update({
//           order_id: paymentId,
//           subscription_id: subscriptionId,
//           credits: 50, // Set credits to 50 as requested
//         })
//         .eq("id", user.id); // Ensures you only update the logged-in user

//       if (error) throw error;

//       alert("Subscription successful! 50 credits have been added to your account.");
//       // You can optionally redirect the user to their dashboard here
//       // router.push("/workspace/dashboard");

//     } catch (error: any) {
//       console.error("Error saving subscription to Supabase:", error);
//       alert(`Error saving your subscription details: ${error.message}`);
//     }
//   };

//   const generateSubscription = async () => {
//     try {
//       const { data } = await axios.post('/api/create-subscription');
//       if (data?.id) {
//         makePayment(data.id);
//       } else {
//         throw new Error("Invalid subscription ID received from server.");
//       }
//     } catch (error) {
//       console.error("Error generating subscription:", error);
//       alert("Could not start the subscription process. Please try again.");
//     }
//   };

//   const makePayment = (subscriptionId: string) => {
//     if (!window.Razorpay) return alert("Razorpay SDK not loaded. Please check your connection.");

//     const options = {
//       key: process.env.NEXT_PUBLIC_RAZORPAY_LIVE_KEY,
//       subscription_id: subscriptionId,
//       name: "Quantrox AI",
//       description: "Subscription Payment",
//       handler: function (response: any) {
//         // 👇 4. Call the save function after a successful payment
//         if (response?.razorpay_payment_id) {
//           console.log("Payment successful:", response);
//           saveSubscriptionDetails(response.razorpay_payment_id, subscriptionId);
//         } else {
//           alert("Payment failed. Please try again.");
//         }
//       },
//       prefill: {
//         email: user?.email,
//         name: user?.user_metadata?.full_name,
//       },
//       theme: {
//         color: "#4F46E5" // Example theme color
//       }
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.open();
//   };

//   return (
//     <SidebarInset>
//       <SiteHeader />
//       <div className="flex flex-1 flex-col p-6">
//         <div className="mx-auto w-full max-w-4xl">
//           <PricingBlack />
//           <div className="mt-8 flex justify-center">
//             <Button onClick={generateSubscription} size="lg">
//               Subscribe Now
//             </Button>
//           </div>
//         </div>
//       </div>
//     </SidebarInset>
//   );
// }

// "use client"

// import { useEffect, useState } from "react";
// import { useAuth } from "@/contexts/AuthContext";
// import { createClient } from "@/lib/client";
// import axios from 'axios';

// import { SiteHeader } from "@/components/site-header";
// import { SidebarInset } from "@/components/ui/sidebar";
// import { Button } from "@/components/ui/button";
// import PricingBlack from "@/components/usage-biiling-data";

// // Type for the subscription object returned from your API
// interface RazorpaySubscription {
//   id: string;
//   start_at: number; // Unix timestamp in seconds
//   end_at: number;   // Unix timestamp in seconds
//   // Add any other properties you need from the subscription object
// }

// declare global {
//   interface Window {
//     Razorpay: any;
//   }
// }

// export default function SubscriptionPage() {
//   const { user } = useAuth();
//   const supabase = createClient();

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.async = true;
//     document.body.appendChild(script);
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   // 👇 Updated to accept the full subscription object
//   const saveSubscriptionDetails = async (paymentId: string, subscription: RazorpaySubscription) => {
//     if (!user) {
//       alert("User not found. Cannot save subscription details.");
//       return;
//     }
//     try {
//       const { data, error } = await supabase
//         .from("users")
//         .update({
//           // 👇 All new fields are included here
//           order_id: paymentId,
//           subscription_id: subscription.id,
//           credits: 50,
//           subscription_status: 'active',
//           // Convert Razorpay's Unix timestamps (seconds) to ISO strings for Supabase
//           subscription_start_date: new Date(subscription.start_at * 1000).toISOString(),
//           subscription_end_date: new Date(subscription.end_at * 1000).toISOString(),
//         })
//         .eq("id", user.id);

//       if (error) throw error;

//       alert("Subscription successful! Your account has been updated.");

//     } catch (error: any) {
//       console.error("Error saving subscription to Supabase:", error);
//       alert(`Error saving your subscription details: ${error.message}`);
//     }
//   };

//   // 👇 Updated to pass the full subscription object
//   const generateSubscription = async () => {
//     try {
//       const { data: subscription } = await axios.post<RazorpaySubscription>('/api/create-subscription');
//       if (subscription?.id) {
//         makePayment(subscription);
//       } else {
//         throw new Error("Invalid subscription object received from server.");
//       }
//     } catch (error) {
//       console.error("Error generating subscription:", error);
//       alert("Could not start the subscription process. Please try again.");
//     }
//   };

//   // 👇 Updated to accept the full subscription object
//   const makePayment = (subscription: RazorpaySubscription) => {
//     if (!window.Razorpay) return alert("Razorpay SDK not loaded.");

//     const options = {
//       key: process.env.NEXT_PUBLIC_RAZORPAY_LIVE_KEY,
//       subscription_id: subscription.id, // 👈 Use the ID from the object
//       name: "Quantrox AI",
//       description: "Subscription Payment",
//       handler: function (response: any) {
//         if (response?.razorpay_payment_id) {
//           console.log("Payment successful:", response);
//           // Pass the full subscription object to the save function
//           saveSubscriptionDetails(response.razorpay_payment_id, subscription);
//         } else {
//           alert("Payment failed. Please try again.");
//         }
//       },
//       prefill: {
//         email: user?.email,
//         name: user?.user_metadata?.full_name,
//       },
//       theme: {
//         color: "#4F46E5"
//       }
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.open();
//   };

//   return (
//     <SidebarInset>
//       <SiteHeader />
//       <div className="flex flex-1 flex-col p-6">
//         <div className="mx-auto w-full max-w-4xl">
//           <PricingBlack />
//           <div className="mt-8 flex justify-center">
//             <Button onClick={generateSubscription} size="lg">
//               Subscribe Now
//             </Button>
//           </div>
//         </div>
//       </div>
//     </SidebarInset>
//   );
// }

// "use client"

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { useAuth } from "@/contexts/AuthContext";
// import { createClient } from "@/lib/client";
// import axios from 'axios';

// import { SiteHeader } from "@/components/site-header";
// import { SidebarInset } from "@/components/ui/sidebar";
// import { Button } from "@/components/ui/button";
// import PricingBlack from "@/components/usage-biiling-data";

// // Type for the subscription object returned from Razorpay
// interface RazorpaySubscription {
//   id: string;
//   start_at: number; // Unix timestamp in seconds
//   end_at: number;   // Unix timestamp in seconds
// }

// // Declare the Razorpay property on the Window object for TypeScript
// declare global {
//   interface Window {
//     Razorpay: any;
//   }
// }

// export default function SubscriptionPage() {
//   const { user } = useAuth();
//   const supabase = createClient();
//   const router = useRouter();
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       // Clean up the script when the component unmounts
//       const razorpayScript = document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]');
//       if (razorpayScript) {
//         document.body.removeChild(razorpayScript);
//       }
//     };
//   }, []);

//   const saveSubscriptionDetails = async (paymentId: string, subscriptionId: string) => {
//     if (!user) return alert("User not authenticated.");
//     setIsLoading(true);

//     try {
//       // 1. After payment, fetch the latest subscription data to get correct dates
//       const { data: updatedSubscription } = await axios.get<RazorpaySubscription>(
//         `/api/subscriptions/${subscriptionId}`
//       );

//       if (!updatedSubscription?.start_at || !updatedSubscription?.end_at) {
//         throw new Error("Failed to retrieve subscription start and end dates from Razorpay.");
//       }

//       // 2. Use the fresh data to update your Supabase table
//       const { error: updateError } = await supabase
//         .from("users")
//         .update({
//           order_id: paymentId,
//           subscription_id: subscriptionId,
//           credits: 50,
//           subscription_status: 'active',
//           subscription_start_date: new Date(updatedSubscription.start_at * 1000).toISOString(),
//           subscription_end_date: new Date(updatedSubscription.end_at * 1000).toISOString(),
//         })
//         .eq("id", user.id);

//       if (updateError) throw updateError;

//       alert("Subscription successful! Your account has been updated.");
//       router.push('/workspace/dashboard'); // Redirect to dashboard

//     } catch (error: any) {
//       console.error("Error saving subscription details:", error);
//       alert(`Error: ${error.message}`);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const makePayment = (subscriptionId: string) => {
//     if (!window.Razorpay) {
//       alert("Razorpay SDK not loaded. Please check your internet connection and try again.");
//       setIsLoading(false);
//       return;
//     }

//     const options = {
//       key: process.env.NEXT_PUBLIC_RAZORPAY_LIVE_KEY,
//       subscription_id: subscriptionId,
//       name: "Quantrox AI",
//       description: "Subscription Payment",
//       handler: function (response: any) {
//         if (response?.razorpay_payment_id) {
//           saveSubscriptionDetails(response.razorpay_payment_id, subscriptionId);
//         } else {
//           alert("Payment failed. Please try again.");
//           setIsLoading(false);
//         }
//       },
//       modal: {
//         ondismiss: function() {
//           console.log('Checkout form closed.');
//           setIsLoading(false); // Re-enable the button if the user closes the popup
//         }
//       },
//       prefill: {
//         email: user?.email,
//         name: user?.user_metadata?.full_name,
//       },
//       theme: {
//         color: "#4F46E5"
//       }
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.open();
//   };

//   const generateSubscription = async () => {
//     setIsLoading(true);
//     try {
//       const { data: subscription } = await axios.post('/api/create-subscription');
//       if (subscription?.id) {
//         makePayment(subscription.id);
//       } else {
//         throw new Error("Invalid subscription ID received from server.");
//       }
//     } catch (error) {
//       console.error("Error generating subscription:", error);
//       alert("Could not start the subscription process. Please try again.");
//       setIsLoading(false);
//     }
//   };

//   return (
//     <SidebarInset>
//       <SiteHeader />
//       <div className="flex flex-1 flex-col p-6">
//         <div className="mx-auto w-full max-w-4xl">
//           <PricingBlack />
//           <div className="mt-8 flex justify-center">
//             <Button onClick={generateSubscription} size="lg" disabled={isLoading}>
//               {isLoading ? 'Processing...' : 'Subscribe Now'}
//             </Button>
//           </div>
//         </div>
//       </div>
//     </SidebarInset>
//   );
// }

// "use client"

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { useAuth } from "@/contexts/AuthContext";
// import { createClient } from "@/lib/client";
// import axios from 'axios';
// import { toast } from "sonner"; // 👈 Import toast

// import { SiteHeader } from "@/components/site-header";
// import { SidebarInset } from "@/components/ui/sidebar";
// import { Button } from "@/components/ui/button";
// import PricingBlack from "@/components/usage-biiling-data";

// interface RazorpaySubscription {
//   id: string;
//   start_at: number;
//   end_at: number;
//   current_start: number;
//   current_end: number;
//   charge_at: number;
// }

// declare global {
//   interface Window {
//     Razorpay: any;
//   }
// }

// export default function SubscriptionPage() {
//   const { user } = useAuth();
//   const supabase = createClient();
//   const router = useRouter();
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       const razorpayScript = document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]');
//       if (razorpayScript) {
//         document.body.removeChild(razorpayScript);
//       }
//     };
//   }, []);

//   const saveSubscriptionDetails = async (paymentId: string, subscriptionId: string) => {
//     if (!user) {
//       toast.error("User not authenticated."); // 👈 Replaced alert
//       return;
//     }
//     setIsLoading(true);

//     try {
//       const { data: updatedSubscription } = await axios.get<RazorpaySubscription>(
//         `/api/subscriptions/${subscriptionId}`
//       );

//       if (!updatedSubscription?.start_at || !updatedSubscription?.end_at) {
//         throw new Error("Failed to retrieve subscription start and end dates from Razorpay.");
//       }

//       const { error: updateError } = await supabase
//         .from("users")
//         .update({
//           order_id: paymentId,
//           subscription_id: subscriptionId,
//           credits: 50,
//           subscription_status: 'active',
//           subscription_start_date: new Date(updatedSubscription.start_at * 1000).toISOString(),
//           subscription_end_date: new Date(updatedSubscription.end_at * 1000).toISOString(),
//           current_start: new Date(updatedSubscription.current_start * 1000).toISOString(),
//           current_end: new Date(updatedSubscription.current_end * 1000).toISOString(),
//           charge_at: new Date(updatedSubscription.charge_at * 1000).toISOString(),
//         })
//         .eq("id", user.id);

//       if (updateError) throw updateError;

//       toast.success("Subscription successful!", { // 👈 Replaced alert
//         description: "Your account has been updated and 50 credits were added.",
//       });
//       router.push('/workspace/dashboard');

//     } catch (error: any) {
//       console.error("Error saving subscription details:", error);
//       toast.error("Error saving subscription", { description: error.message }); // 👈 Replaced alert
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const makePayment = (subscriptionId: string) => {
//     if (!window.Razorpay) {
//       toast.error("Razorpay SDK not loaded.", { description: "Please check your internet connection." }); // 👈 Replaced alert
//       setIsLoading(false);
//       return;
//     }

//     const options = {
//       key: process.env.NEXT_PUBLIC_RAZORPAY_LIVE_KEY,
//       subscription_id: subscriptionId,
//       name: "Quantrox AI",
//       description: "Subscription Payment",
//       handler: function (response: any) {
//         if (response?.razorpay_payment_id) {
//           saveSubscriptionDetails(response.razorpay_payment_id, subscriptionId);
//         } else {
//           toast.error("Payment failed", { description: "Please try again." }); // 👈 Replaced alert
//           setIsLoading(false);
//         }
//       },
//       modal: {
//         ondismiss: function() {
//           console.log('Checkout form closed.');
//           setIsLoading(false);
//         }
//       },
//       prefill: {
//         email: user?.email,
//         name: user?.user_metadata?.full_name,
//       },
//       theme: {
//         color: "#4F46E5"
//       }
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.open();
//   };

//   const generateSubscription = async () => {
//     setIsLoading(true);

//     try {
//       const { data: subscription } = await axios.post('/api/create-subscription');
//       if (subscription?.id) {
//         makePayment(subscription.id);
//       } else {
//         throw new Error("Invalid subscription ID received from server.");
//       }
//     } catch (error) {
//       console.error("Error generating subscription:", error);
//       toast.error("Could not start subscription", { description: "Please try again." }); // 👈 Replaced alert
//       setIsLoading(false);
//     }
//   };

//   return (
//     <SidebarInset>
//       <SiteHeader />
//       <div className="flex flex-1 flex-col p-6">
//         <div className="mx-auto w-full max-w-4xl">
//           <PricingBlack />
//           <div className="mt-8 flex justify-center">
//             <Button onClick={generateSubscription} size="lg" disabled={isLoading}>
//               {isLoading ? 'Processing...' : 'Subscribe Now'}
//             </Button>
//           </div>
//         </div>
//       </div>
//     </SidebarInset>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import axios from "axios";
import { toast } from "sonner";

import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import PricingBlack from "@/components/usage-biiling-data";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import SupportWidget from "@/components/support-widget";

// declare global {
//   interface Window {
//     Razorpay: any;
//   }
// }

export default function SubscriptionPage() {
  // const { user } = useAuth();
  // const router = useRouter();
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://checkout.razorpay.com/v1/checkout.js";
  //   script.async = true;
  //   document.body.appendChild(script);

  //   return () => {
  //     const razorpayScript = document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]');
  //     if (razorpayScript) {
  //       document.body.removeChild(razorpayScript);
  //     }
  //   };
  // }, []);

  // const makePayment = (subscriptionId: string) => {
  //   if (!window.Razorpay) {
  //     toast.error("Razorpay SDK not loaded.");
  //     setIsLoading(false);
  //     return;
  //   }

  //   const options = {
  //     key: process.env.NEXT_PUBLIC_RAZORPAY_LIVE_KEY,
  //     subscription_id: subscriptionId,
  //     name: "Quantrox AI",
  //     handler: function (response: any) {
  //       if (response?.razorpay_payment_id) {
  //         toast.success("Payment successful!", {
  //           description: "Your subscription is being activated. You will be redirected shortly.",
  //         });
  //         // Simply redirect. The webhook will handle the database update.
  //         router.push('/workspace/dashboard');
  //       } else {
  //         toast.error("Payment failed", { description: "Please try again." });
  //         setIsLoading(false);
  //       }
  //     },
  //     modal: {
  //       ondismiss: function() {
  //         setIsLoading(false);
  //       }
  //     },
  //     prefill: {
  //       email: user?.email,
  //       name: user?.user_metadata.full_name,
  //     }
  //   };

  //   const rzp = new window.Razorpay(options);
  //   rzp.open();
  // };

  // const generateSubscription = async () => {
  //   setIsLoading(true);
  //   try {
  //     const { data: subscription } = await axios.post('/api/create-subscription');
  //     if (subscription?.id) {
  //       makePayment(subscription.id);
  //     } else {
  //       throw new Error("Invalid subscription ID received from server.");
  //     }
  //   } catch (error) {
  //     toast.error("Could not start subscription", { description: "Please try again." });
  //     setIsLoading(false);
  //   }
  // };

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
          <h3 className="text-2xl font-medium">Subscription</h3>
        </div>

        <div className="@container/main flex flex-1 flex-col gap-2">
          <PricingBlack />
        </div>
      </div>
    </SidebarInset>
  );
}
