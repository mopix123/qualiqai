// import { NextResponse } from "next/server";
// import Razorpay from "razorpay";
// import { createServerClient, type CookieOptions } from '@supabase/ssr';
// import { cookies } from 'next/headers';

// // Initialize Razorpay client
// const razorpay = new Razorpay({
//   key_id: process.env.NEXT_PUBLIC_RAZORPAY_LIVE_KEY!,
//   key_secret: process.env.RAZORPAY_SECRET_KEY,
// });

// export async function POST() {
//   // 👇 THE FIX IS HERE: 'await' is used to resolve the promise.
//   const cookieStore = await cookies();

//   const supabase = createServerClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//     {
//       cookies: {
//         get(name: string) {
//           return cookieStore.get(name)?.value;
//         },
//         set(name: string, value: string, options: CookieOptions) {
//           cookieStore.set(name, value, options);
//         },
//         remove(name: string, options: CookieOptions) {
//           cookieStore.set(name, '', options);
//         },
//       },
//     }
//   );

//   try {
//     // 1. Authenticate the user on the server
//     const { data: { user }, error: authError } = await supabase.auth.getUser();
//     if (authError || !user) {
//       return new NextResponse(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
//     }

//     // 2. Get the user's current subscription_id from your database
//     const { data: userData, error: userError } = await supabase
//       .from("users")
//       .select("subscription_id")
//       .eq("id", user.id)
//       .single();

//     if (userError || !userData?.subscription_id) {
//       throw new Error("No active subscription found to cancel.");
//     }

//     const subscriptionId = userData.subscription_id;

//     // 3. Call Razorpay to cancel the subscription
//     await razorpay.subscriptions.cancel(subscriptionId);

//     // 4. (Optional but Recommended) Update your database immediately
//     await supabase
//       .from("users")
//       .update({ subscription_status: 'canceled' })
//       .eq("id", user.id);

//     return NextResponse.json({ message: "Subscription cancelled successfully." });

//   } catch (error: any) {
//     console.error("SUBSCRIPTION CANCELLATION ERROR:", error);
//     return new NextResponse(
//       JSON.stringify({ error: "Failed to cancel subscription.", details: error.message }),
//       { status: 500 }
//     );
//   }
// }

// import { NextRequest, NextResponse } from "next/server";
// import Razorpay from "razorpay";
// import { createClient } from "@supabase/supabase-js";

// const razorpay = new Razorpay({
//   key_id: process.env.NEXT_PUBLIC_RAZORPAY_LIVE_KEY!,
//   key_secret: process.env.RAZORPAY_SECRET_KEY!,
// });

// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.SUPABASE_SERVICE_ROLE_KEY!
// );

// export async function POST(req: NextRequest) {
//   try {
//     const { userId } = await req.json();
//     if (!userId) {
//       return NextResponse.json({ error: "Missing userId" }, { status: 400 });
//     }

//     // Fetch user
//     const { data: user, error: userError } = await supabase
//       .from("users")
//       .select("subscription_id")
//       .eq("id", userId)
//       .single();

//     if (userError || !user?.subscription_id) {
//       return NextResponse.json(
//         { error: "Subscription not found" },
//         { status: 404 }
//       );
//     }

//     // Cancel on Razorpay
//     const canceled = await razorpay.subscriptions.cancel(user.subscription_id);
//     console.log("🛑 Razorpay subscription canceled:", canceled.id);

//     // Update Supabase
//     await supabase
//       .from("users")
//       .update({
//         subscription_status: "canceled",
//         subscription_end_date: new Date().toISOString(),
//         credits: 0,
//         credits_max: 0,
//       })
//       .eq("id", userId);

//     return NextResponse.json({
//       message: "Subscription canceled successfully",
//       subscription_id: canceled.id,
//     });
//   } catch (error: any) {
//     console.error("💥 Cancel API error:", error.message);
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }

import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import { createClient } from "@supabase/supabase-js";

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_LIVE_KEY!,
  key_secret: process.env.RAZORPAY_SECRET_KEY!,
});

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userId } = body; // frontend should send userId

    if (!userId) {
      return NextResponse.json({ error: "Missing userId" }, { status: 400 });
    }

    // ✅ Get the user's current subscription_id
    const { data: user, error: userError } = await supabase
      .from("users")
      .select("subscription_id")
      .eq("id", userId)
      .single();

    if (userError || !user?.subscription_id) {
      return NextResponse.json(
        { error: "User subscription not found" },
        { status: 404 },
      );
    }

    // ✅ Cancel the subscription in Razorpay
    const subscription = await razorpay.subscriptions.cancel(
      user.subscription_id,
    );

    console.log("✅ Subscription canceled:", subscription.id);

    // ✅ Update user's subscription status in Supabase
    const { error: updateError } = await supabase
      .from("users")
      .update({
        subscription_status: "canceled",
      })
      .eq("id", userId);

    if (updateError) {
      console.error("❌ Failed to update user:", updateError);
      return NextResponse.json(
        { error: "Database update failed" },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Subscription canceled successfully",
    });
  } catch (error: any) {
    console.error("💥 Cancel subscription error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// import { NextResponse } from "next/server";
// import type { SupabaseClient } from "@supabase/supabase-js";

// /**
//  * Razorpay Cancel Subscription API
//  * --------------------------------
//  * - Safe (no build-time crashes)
//  * - Uses Razorpay key + secret
//  * - Cancels subscription and updates Supabase
//  * - No OAuth token handling (removed)
//  */

// function createRazorpayClient() {
//   const keyId = process.env.RAZORPAY_LIVE_KEY;
//   const keySecret = process.env.RAZORPAY_SECRET_KEY;

//   if (!keyId || !keySecret) {
//     console.error("❌ Razorpay credentials missing.");
//     return null;
//   }

//   // eslint-disable-next-line @typescript-eslint/no-var-requires
//   const Razorpay = require("razorpay");

//   return new Razorpay({
//     key_id: keyId,
//     key_secret: keySecret,
//   });
// }

// function createSupabaseAdmin(): SupabaseClient | null {
//   const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
//   const serviceKey =
//     process.env.SUPABASE_SERVICE_ROLE_KEY ||
//     process.env.NEXT_PRIVATE_SUPABASE_SERVICE_ROLE_KEY;

//   if (!url || !serviceKey) {
//     console.error("❌ Missing Supabase URL or Service Role Key.");
//     return null;
//   }

//   // eslint-disable-next-line @typescript-eslint/no-var-requires
//   const { createClient } = require("@supabase/supabase-js");
//   return createClient(url, serviceKey);
// }

// export async function POST(req: Request) {
//   try {
//     const { userId } = await req.json();

//     if (!userId) {
//       return NextResponse.json({ error: "Missing userId" }, { status: 400 });
//     }

//     // ✅ Lazy init clients
//     const razorpay = createRazorpayClient();
//     if (!razorpay) {
//       return NextResponse.json(
//         { error: "Server misconfiguration: Razorpay credentials missing." },
//         { status: 500 }
//       );
//     }

//     const supabase = createSupabaseAdmin();
//     if (!supabase) {
//       return NextResponse.json(
//         {
//           error:
//             "Server misconfiguration: Supabase credentials missing (URL or service key).",
//         },
//         { status: 500 }
//       );
//     }

//     // ✅ Get user subscription_id
//     const { data: user, error: userError } = await supabase
//       .from("users")
//       .select("subscription_id")
//       .eq("id", userId)
//       .single();

//     if (userError || !user?.subscription_id) {
//       return NextResponse.json(
//         { error: "No active subscription found for this user." },
//         { status: 404 }
//       );
//     }

//     // ✅ Cancel subscription on Razorpay
//     const canceled = await razorpay.subscriptions.cancel(user.subscription_id);

//     console.log("✅ Subscription canceled:", canceled.id);

//     // ✅ Update Supabase user record
//     const { error: updateError } = await supabase
//       .from("users")
//       .update({ subscription_status: "canceled" })
//       .eq("id", userId);

//     if (updateError) {
//       console.error("❌ Failed to update user:", updateError);
//       return NextResponse.json(
//         { error: "Database update failed." },
//         { status: 500 }
//       );
//     }

//     return NextResponse.json({
//       success: true,
//       message: "Subscription canceled successfully.",
//     });
//   } catch (error: any) {
//     console.error("💥 Cancel subscription error:", error);
//     return NextResponse.json(
//       {
//         error: "Failed to cancel subscription.",
//         detail: error.message || "Unknown error",
//       },
//       { status: 500 }
//     );
//   }
// }
