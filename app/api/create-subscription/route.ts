// // import { NextRequest, NextResponse } from "next/server";
// // import Razorpay from "razorpay";

// // export async function POST(req: NextRequest) {
// //   // const data = await req.json();

// //   const instance = new Razorpay({
// //     key_id: process.env.NEXT_PUBLIC_RAZORPAY_LIVE_KEY,
// //     key_secret: process.env.RAZORPAY_SECRET_KEY
// //   });

// //   const result= await instance.subscriptions.create({
// //   plan_id: process.env.RAZORPAY_PLAN_ID!,
// //   customer_notify: 1,
// //   quantity: 1,
// //   total_count: 12,
// //   addons: [
// //   ],
// //   notes: {
// //     key1: "value3",
// //     key2: "value2"
// //   }
// // })

// // return NextResponse.json(result);
// // }

// // import { NextResponse } from "next/server";
// // import Razorpay from "razorpay";

// // const instance = new Razorpay({
// //   key_id: process.env.NEXT_PUBLIC_RAZORPAY_LIVE_KEY!,
// //   key_secret: process.env.RAZORPAY_SECRET_KEY,
// // });

// // export async function POST() {
// //   try {
// //     const subscription = await instance.subscriptions.create({
// //       plan_id: process.env.RAZORPAY_PLAN_ID!,
// //       customer_notify: 1,
// //       quantity: 1,
// //       total_count: 12,
// //     });

// //     // This line already returns the full object, so no changes are needed.
// //     return NextResponse.json(subscription);

// //   } catch (error) {
// //     console.error("RAZORPAY SUBSCRIPTION CREATION ERROR:", error);
// //     const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
// //     return new NextResponse(
// //       JSON.stringify({ message: "Failed to create subscription.", error: errorMessage }),
// //       { status: 500 }
// //     );
// //   }
// // }

// //----------------------------------------------------------------------

// // import { NextRequest, NextResponse } from "next/server";
// // import Razorpay from "razorpay";

// // const razorpay = new Razorpay({
// //   key_id: process.env.NEXT_PUBLIC_RAZORPAY_LIVE_KEY!,
// //   key_secret: process.env.RAZORPAY_SECRET_KEY!,
// // });

// // export async function POST(req: NextRequest) {
// //   try {
// //     const { planId, email } = await req.json();

// //     if (!planId || !email) {
// //       return NextResponse.json(
// //         { message: "Missing planId or email" },
// //         { status: 400 },
// //       );
// //     }

// //     // Create a subscription with customer_notify enabled
// //     const subscription = await razorpay.subscriptions.create({
// //       plan_id: planId,
// //       total_count: 12, // 12 months
// //       quantity: 1,
// //       customer_notify: 1,
// //       notes: { customer_email: email },
// //     });

// //     return NextResponse.json(subscription);
// //   } catch (error: any) {
// //     console.error("RAZORPAY SUBSCRIPTION CREATION ERROR:", error);
// //     return NextResponse.json(
// //       {
// //         message: "Failed to create subscription.",
// //         error: error.message || "Unknown error",
// //       },
// //       { status: 500 },
// //     );
// //   }
// // }

// //---------------------------

// // import { NextRequest, NextResponse } from "next/server";
// // import Razorpay from "razorpay";
// // export async function POST(req: NextRequest) {
// //   const data = await req.json();
// //   var instance = new Razorpay({
// //     key_id: process.env.NEXT_PUBLIC_RAZORPAY_LIVE_KE,
// //     key_secret: process.env.RAZORPAY_SECRET_KEY,
// //   });

// //   // Create a subscription with customer_notify enabled
// //   const result = await instance.subscriptions.create({
// //     plan_id: "plan_RR6nvIrpvr5kE0",
// //     total_count: 12, // 12 months
// //     quantity: 1,
// //     customer_notify: 1,
// //     notes: { key1: "value1" },
// //   });

// //   return NextResponse.json(result);
// // }

// // import { NextRequest, NextResponse } from "next/server";
// // import Razorpay from "razorpay";

// // export const runtime = "nodejs";

// // const razorpay = new Razorpay({
// //   key_id: process.env.NEXT_PUBLIC_RAZORPAY_LIVE_KEY!,
// //   key_secret: process.env.RAZORPAY_SECRET_KEY!,
// // });

// // export async function POST(req: NextRequest) {
// //   try {
// //     const { planId, email } = await req.json();

// //     if (!planId || !email) {
// //       return NextResponse.json(
// //         { message: "Missing planId or email" },
// //         { status: 400 },
// //       );
// //     }

// //     const subscription = await razorpay.subscriptions.create({
// //       plan_id: planId,
// //       total_count: 12,
// //       quantity: 1,
// //       customer_notify: 1,
// //       notes: { customer_email: email },
// //     });

// //     // 🔥 THIS IS THE FIX

// //     return NextResponse.json({
// //       subscription_id: subscription.id,
// //     });
// //   } catch (error: any) {
// //     console.error("RAZORPAY SUBSCRIPTION CREATION ERROR:", error);
// //     return NextResponse.json(
// //       { message: "Failed to create subscription" },
// //       { status: 500 },
// //     );
// //   }
// // }

// // import { NextRequest, NextResponse } from "next/server";
// // import Razorpay from "razorpay";

// // export const runtime = "nodejs";

// // const razorpay = new Razorpay({
// //   key_id: process.env.NEXT_PUBLIC_RAZORPAY_LIVE_KEY!,
// //   key_secret: process.env.RAZORPAY_SECRET_KEY!,
// // });

// // export async function POST(req: NextRequest) {
// //   const { planId, email } = await req.json();

// //   if (!planId || !email) {
// //     return NextResponse.json({ error: "missing_data" }, { status: 400 });
// //   }

// //   const subscription = await razorpay.subscriptions.create({
// //     plan_id: planId,
// //     total_count: 12,
// //     customer_notify: 1,
// //     notes: { customer_email: email },
// //   });

// //   // 🔥 Razorpay Checkout NEEDS ONLY THIS
// //   return NextResponse.json({
// //     subscription_id: subscription.id,
// //   });
// // }

// import { NextRequest, NextResponse } from "next/server";
// import Razorpay from "razorpay";

// const razorpay = new Razorpay({
//   key_id: process.env.NEXT_PUBLIC_RAZORPAY_LIVE_KEY!,
//   key_secret: process.env.RAZORPAY_SECRET_KEY!,
// });

// export async function POST(req: NextRequest) {
//   try {
//     const { planId, email } = await req.json();

//     if (!planId || !email) {
//       return NextResponse.json(
//         { message: "Missing planId or email" },
//         { status: 400 },
//       );
//     }

//     // Create a subscription with customer_notify enabled
//     const subscription = await razorpay.subscriptions.create({
//       plan_id: planId,
//       total_count: 12, // 12 months
//       quantity: 1,
//       customer_notify: 1,
//       notes: { customer_email: email },
//     });

//     return NextResponse.json(subscription);
//   } catch (error: any) {
//     console.error("RAZORPAY SUBSCRIPTION CREATION ERROR:", error);
//     return NextResponse.json(
//       {
//         message: "Failed to create subscription.",
//         error: error.message || "Unknown error",
//       },
//       { status: 500 },
//     );
//   }
// }

export const runtime = "nodejs";

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
        { status: 400 },
      );
    }

    // 🔥 THIS LINE actually calls Razorpay
    const subscription = await razorpay.subscriptions.create({
      plan_id: planId,
      total_count: 12,
      quantity: 1,
      customer_notify: 1,
      notes: { customer_email: email },
    });

    // ✅ PUT THE LOG **RIGHT HERE**
    // console.log("✅ Subscription created:", subscription);

    // ⬇️ then return it
    return NextResponse.json(subscription);
  } catch (error: any) {
    console.error("❌ RAZORPAY SUBSCRIPTION CREATION ERROR:", error);
    return NextResponse.json(
      {
        message: "Failed to create subscription",
        error: error?.error?.description || error.message,
      },
      { status: 500 },
    );
  }
}
