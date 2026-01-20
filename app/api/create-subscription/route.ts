// import { NextRequest, NextResponse } from "next/server";
// import Razorpay from "razorpay";


// export async function POST(req: NextRequest) {
//   // const data = await req.json();

//   const instance = new Razorpay({
//     key_id: process.env.NEXT_PUBLIC_RAZORPAY_LIVE_KEY,
//     key_secret: process.env.RAZORPAY_SECRET_KEY
//   });

//   const result= await instance.subscriptions.create({
//   plan_id: process.env.RAZORPAY_PLAN_ID!,
//   customer_notify: 1,
//   quantity: 1,
//   total_count: 12,
//   addons: [
//   ],
//   notes: {
//     key1: "value3",
//     key2: "value2"
//   }
// })

// return NextResponse.json(result);
// }




// import { NextResponse } from "next/server";
// import Razorpay from "razorpay";

// const instance = new Razorpay({
//   key_id: process.env.NEXT_PUBLIC_RAZORPAY_LIVE_KEY!,
//   key_secret: process.env.RAZORPAY_SECRET_KEY,
// });

// export async function POST() {
//   try {
//     const subscription = await instance.subscriptions.create({
//       plan_id: process.env.RAZORPAY_PLAN_ID!,
//       customer_notify: 1,
//       quantity: 1,
//       total_count: 12,
//     });

//     // This line already returns the full object, so no changes are needed.
//     return NextResponse.json(subscription);

//   } catch (error) {
//     console.error("RAZORPAY SUBSCRIPTION CREATION ERROR:", error);
//     const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
//     return new NextResponse(
//       JSON.stringify({ message: "Failed to create subscription.", error: errorMessage }),
//       { status: 500 }
//     );
//   }
// }













import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_LIVE_KEY!,
  key_secret: process.env.RAZORPAY_SECRET_KEY!,
});

export async function POST(req: NextRequest) {
  try {
    const { planId, email } = await req.json();

    if (!planId || !email) {
      return NextResponse.json(
        { message: "Missing planId or email" },
        { status: 400 }
      );
    }

    // Create a subscription with customer_notify enabled
    const subscription = await razorpay.subscriptions.create({
      plan_id: planId,
      total_count: 12, // 12 months
      quantity: 1,
      customer_notify: 1,
      notes: { customer_email: email },
    });

    return NextResponse.json(subscription);
  } catch (error: any) {
    console.error("RAZORPAY SUBSCRIPTION CREATION ERROR:", error);
    return NextResponse.json(
      {
        message: "Failed to create subscription.",
        error: error.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}














// // app/api/create-subscription/route.ts
// import { NextRequest, NextResponse } from "next/server";

// /**
//  * Safe route: initializes Razorpay inside the handler (lazy).
//  * - Returns a 500 JSON with a clear message if env vars are missing
//  * - Avoids throwing during module import (so Next build won't fail)
//  */

// // Helper to create Razorpay client lazily
// function createRazorpayClient() {
//   const keyId = process.env.RAZORPAY_LIVE_KEY;
//   const keySecret = process.env.RAZORPAY_SECRET_KEY;

//   // If neither key_id nor oauth token present, return null for caller to handle
//   if (!keyId || !keySecret) {
//     return null;
//   }

//   // require here to avoid import-time side effects
//   // eslint-disable-next-line @typescript-eslint/no-var-requires
//   const Razorpay = require("razorpay");

//   return new Razorpay({
//     key_id: keyId,
//     key_secret: keySecret,
//   });
// }

// export async function POST(req: NextRequest) {
//   // Parse input
//   let body: any;
//   try {
//     body = await req.json();
//   } catch (err) {
//     return NextResponse.json({ message: "Invalid JSON body" }, { status: 400 });
//   }

//   const { planId, email } = body ?? {};

//   if (!planId || !email) {
//     return NextResponse.json(
//       { message: "Missing planId or email" },
//       { status: 400 }
//     );
//   }

//   // Validate env and create client inside handler
//   const client = createRazorpayClient();
//   if (!client) {
//     // clear non-sensitive error for developer / build logs
//     console.error(
//       "Razorpay credentials missing. Set RAZORPAY_LIVE_KEY and RAZORPAY_SECRET_KEY"
//     );
//     return NextResponse.json(
//       {
//         message:
//           "Server misconfigured: payment credentials are missing. Please set RAZORPAY_LIVE_KEY and RAZORPAY_SECRET_KEY.",
//       },
//       { status: 500 }
//     );
//   }

//   try {
//     const subscription = await client.subscriptions.create({
//       plan_id: planId,
//       total_count: 12, // 12 months
//       quantity: 1,
//       customer_notify: 1,
//       notes: { customer_email: email },
//     });

//     console.log("🆕 Subscription created:", subscription?.id);
//     return NextResponse.json(subscription);
//   } catch (error: any) {
//     console.error("❌ RAZORPAY SUBSCRIPTION CREATION ERROR:", error);
//     return NextResponse.json(
//       {
//         message: "Failed to create subscription.",
//         error: error?.message ?? "Unknown error",
//       },
//       { status: 500 }
//     );
//   }
// }


