// import { NextRequest, NextResponse } from "next/server";
// import Razorpay from "razorpay";
// import { createClient } from '@supabase/supabase-js';
// import crypto from 'crypto';

// const razorpay = new Razorpay({
//   key_id: process.env.NEXT_PUBLIC_RAZORPAY_LIVE_KEY!,
//   key_secret: process.env.RAZORPAY_SECRET_KEY,
// });

// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.SUPABASE_SERVICE_ROLE_KEY!
// );

// const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET!;

// export async function POST(req: NextRequest) {
//   const body = await req.text();
//   const signature = req.headers.get('x-razorpay-signature') as string;

//   try {
//     const expectedSignature = crypto
//       .createHmac('sha256', webhookSecret)
//       .update(body)
//       .digest('hex');

//     if (expectedSignature !== signature) {
//       throw new Error("Invalid webhook signature.");
//     }

//     const event = JSON.parse(body);

//     if (event.event === 'invoice.paid') {
//       const invoice = event.payload.invoice.entity;
//       const subscriptionId = invoice.subscription_id;
//       const customerEmail = invoice.customer_email; // Get the email from the invoice payload

//       if (subscriptionId && customerEmail) {
//         const updatedSubscription = await razorpay.subscriptions.fetch(subscriptionId);

//         if (updatedSubscription && updatedSubscription.current_start && updatedSubscription.current_end && updatedSubscription.charge_at) {

//           const { error: updateError } = await supabase
//             .from("users")
//             .update({
//               credits: 50,
//               subscription_id: subscriptionId, // We are now saving this for the first time
//               subscription_status: 'active',
//               subscription_start_date: new Date(updatedSubscription.start_at * 1000).toISOString(),
//               subscription_end_date: new Date(updatedSubscription.end_at * 1000).toISOString(),
//               current_start: new Date(updatedSubscription.current_start * 1000).toISOString(),
//               current_end: new Date(updatedSubscription.current_end * 1000).toISOString(),
//               charge_at: new Date(updatedSubscription.charge_at * 1000).toISOString(),
//             })
//             // 👇 THE FIX IS HERE: Find the user by their email instead of subscription_id
//             .eq("email", customerEmail);

//           if (updateError) {
//             console.error("Webhook Supabase update error:", updateError);
//           } else {
//             console.log(`Successfully updated subscription for user ${customerEmail} via webhook.`);
//           }
//         } else {
//           console.error(`Subscription ${subscriptionId} was missing date fields after payment.`);
//         }
//       }
//     }

//     return NextResponse.json({ status: 'received' }, { status: 200 });

//   } catch (error: any) {
//     console.error("Webhook Error:", error.message);
//     return new NextResponse(JSON.stringify({ error: error.message }), { status: 400 });
//   }
// }

// import { NextRequest, NextResponse } from "next/server";
// import Razorpay from "razorpay";
// import crypto from "crypto";
// import { createClient } from "@supabase/supabase-js";

// // Initialize Razorpay instance
// const razorpay = new Razorpay({
//   key_id: process.env.NEXT_PUBLIC_RAZORPAY_LIVE_KEY!,
//   key_secret: process.env.RAZORPAY_SECRET_KEY!,
// });

// // Initialize Supabase client (using Service Role Key)
// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.SUPABASE_SERVICE_ROLE_KEY!
// );

// // Webhook secret from Razorpay Dashboard
// const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET!;

// export async function POST(req: NextRequest) {
//   console.log("🔔 Webhook received!");

//   const body = await req.text();
//   const signature = req.headers.get("x-razorpay-signature") as string;

//   try {
//     // Verify Razorpay webhook signature
//     const expectedSignature = crypto
//       .createHmac("sha256", webhookSecret)
//       .update(body)
//       .digest("hex");

//     if (expectedSignature !== signature) {
//       console.error("❌ Invalid webhook signature");
//       return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
//     }

//     const event = JSON.parse(body);
//     console.log("📦 Event type:", event.event);

//     // --- STEP 1: Handle invoice-based events ---
//     if (event.event === "invoice.paid" || event.event === "payment.captured") {
//       const invoice =
//         event.payload.invoice?.entity || event.payload.payment?.entity;

//       if (!invoice) {
//         console.error("❌ Missing invoice entity");
//         return NextResponse.json({ error: "Missing invoice" }, { status: 400 });
//       }

//       const customerEmail =
//         invoice.customer_email ||
//         invoice.customer_details?.email ||
//         invoice.email;

//       if (!customerEmail) {
//         console.error("❌ No customer email found");
//         return NextResponse.json(
//           { error: "Missing customer email" },
//           { status: 400 }
//         );
//       }

//       console.log(`🔎 Looking up user by email: ${customerEmail}`);

//       const { data: foundUser, error: findError } = await supabase
//         .from("users")
//         .select("id, email")
//         .eq("email", customerEmail)
//         .single();

//       if (findError || !foundUser) {
//         console.error("❌ User not found:", findError || customerEmail);
//         return NextResponse.json({ error: "User not found" }, { status: 404 });
//       }

//       // Try fetching subscription details for more data
//       let subscriptionData = null;
//       if (invoice.subscription_id) {
//         try {
//           subscriptionData = await razorpay.subscriptions.fetch(
//             invoice.subscription_id
//           );
//           console.log("📡 Subscription fetched:", subscriptionData);
//         } catch (err) {
//           console.warn("⚠️ Could not fetch subscription details:", err);
//         }
//       }

//       const subscription_id =
//         invoice.subscription_id || subscriptionData?.id || null;
//       const subscription_start_date = subscriptionData?.start_at
//         ? new Date(subscriptionData.start_at * 1000).toISOString()
//         : null;
//       const subscription_end_date = subscriptionData?.end_at
//         ? new Date(subscriptionData.end_at * 1000).toISOString()
//         : null;
//       const current_start = subscriptionData?.current_start
//         ? new Date(subscriptionData.current_start * 1000).toISOString()
//         : null;
//       const current_end = subscriptionData?.current_end
//         ? new Date(subscriptionData.current_end * 1000).toISOString()
//         : null;
//       const charge_at = subscriptionData?.charge_at
//         ? new Date(subscriptionData.charge_at * 1000).toISOString()
//         : null;

//       // Update Supabase user record
//       const { error: updateError } = await supabase
//         .from("users")
//         .update({
//           subscription_id,
//           credits: 50, // Add free credits after payment
//           subscription_status: "active",
//           subscription_start_date,
//           subscription_end_date,
//           current_start,
//           current_end,
//           charge_at,
//         })
//         .eq("id", foundUser.id);

//       if (updateError) {
//         console.error("❌ Database update failed:", updateError);
//         return NextResponse.json(
//           { error: "Database update failed" },
//           { status: 500 }
//         );
//       }

//       console.log(`✅ Invoice processed successfully for ${customerEmail}`);
//     }

//     // --- STEP 2: Handle subscription-based events ---
//     const sub = event.payload?.subscription?.entity;

//     if (sub) {
//       const subscription_id = sub.id;
//       const subscription_start_date = sub.start_at
//         ? new Date(sub.start_at * 1000).toISOString()
//         : null;
//       const subscription_end_date = sub.end_at
//         ? new Date(sub.end_at * 1000).toISOString()
//         : null;
//       const current_start = sub.current_start
//         ? new Date(sub.current_start * 1000).toISOString()
//         : null;
//       const current_end = sub.current_end
//         ? new Date(sub.current_end * 1000).toISOString()
//         : null;
//       const charge_at = sub.charge_at
//         ? new Date(sub.charge_at * 1000).toISOString()
//         : null;

//       let subscription_status: string = "inactive";

//       switch (event.event) {
//         case "subscription.activated":
//         case "subscription.resumed":
//           subscription_status = "active";
//           break;
//         case "subscription.charged":
//           subscription_status = "active";
//           break;
//         case "subscription.paused":
//           subscription_status = "past_due";
//           break;
//         case "subscription.cancelled":
//           subscription_status = "canceled";
//           break;
//         case "subscription.completed":
//           subscription_status = "inactive";
//           break;
//         default:
//           subscription_status = "inactive";
//       }

//       console.log("🔁 Subscription update:", {
//         subscription_id,
//         subscription_status,
//         subscription_start_date,
//         subscription_end_date,
//         current_start,
//         current_end,
//         charge_at,
//       });

//       const { error: subUpdateError } = await supabase
//         .from("users")
//         .update({
//           subscription_status,
//           subscription_start_date,
//           subscription_end_date,
//           current_start,
//           current_end,
//           charge_at,
//           credits:
//             event.event === "subscription.charged"
//               ? 50 // Add new credits on renewal
//               : undefined,
//         })
//         .eq("subscription_id", subscription_id);

//       if (subUpdateError) {
//         console.error("❌ Failed to update subscription:", subUpdateError);
//         return NextResponse.json(
//           { error: "Subscription update failed" },
//           { status: 500 }
//         );
//       }

//       console.log(`✅ Subscription event processed: ${event.event}`);
//     }

//     // --- STEP 3: Return success ---
//     return NextResponse.json({ status: "Webhook processed" }, { status: 200 });
//   } catch (error: any) {
//     console.error("💥 Webhook crashed:", error.message);
//     return new NextResponse(
//       JSON.stringify({ error: error.message }),
//       { status: 400 }
//     );
//   }
// }

// import { NextRequest, NextResponse } from "next/server";
// import Razorpay from "razorpay";
// import crypto from "crypto";
// import { createClient } from "@supabase/supabase-js";

// const razorpay = new Razorpay({
//   key_id: process.env.NEXT_PUBLIC_RAZORPAY_LIVE_KEY!,
//   key_secret: process.env.RAZORPAY_SECRET_KEY!,
// });

// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.SUPABASE_SERVICE_ROLE_KEY!
// );

// const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET!;

// export async function POST(req: NextRequest) {
//   console.log("🔔 Webhook received!");
//   const body = await req.text();
//   const signature = req.headers.get("x-razorpay-signature") as string;

//   try {
//     // ✅ Verify webhook signature
//     const expectedSignature = crypto
//       .createHmac("sha256", webhookSecret)
//       .update(body)
//       .digest("hex");

//     if (expectedSignature !== signature) {
//       console.error("❌ Invalid webhook signature");
//       return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
//     }

//     const event = JSON.parse(body);
//     console.log("📦 Event type:", event.event);

//     // --- Handle Subscription Events ---
//     const sub = event.payload?.subscription?.entity;
//     if (sub) {
//       const subscription_id = sub.id;
//       const subscription_start_date = sub.start_at
//         ? new Date(sub.start_at * 1000).toISOString()
//         : null;
//       const subscription_end_date = sub.end_at
//         ? new Date(sub.end_at * 1000).toISOString()
//         : null;
//       const current_start = sub.current_start
//         ? new Date(sub.current_start * 1000).toISOString()
//         : null;
//       const current_end = sub.current_end
//         ? new Date(sub.current_end * 1000).toISOString()
//         : null;
//       const charge_at = sub.charge_at
//         ? new Date(sub.charge_at * 1000).toISOString()
//         : null;

//      let subscription_status: string;

// switch (event.event) {
//   case "subscription.authenticated":
//     subscription_status = "pending"; // or "inactive" if you prefer
//     break;

//   case "subscription.activated":
//   case "subscription.resumed":
//   case "subscription.charged":
//     subscription_status = "active";
//     break;

//   case "subscription.paused":
//     subscription_status = "past_due";
//     break;

//   case "subscription.cancelled":
//     subscription_status = "canceled";
//     break;

//   case "subscription.completed":
//     subscription_status = "inactive";
//     break;

//   default:
//     subscription_status = "inactive";
//     break;
// }

//       console.log("🔁 Subscription update:", {
//         subscription_id,
//         subscription_status,
//         subscription_start_date,
//         subscription_end_date,
//         current_start,
//         current_end,
//         charge_at,
//       });

//       const customerEmail =
//         sub.customer_notify === true
//           ? sub.notes?.customer_email || null
//           : null;

//       if (customerEmail) {
//         const { data: foundUser } = await supabase
//           .from("users")
//           .select("id")
//           .eq("email", customerEmail)
//           .single();

//         if (foundUser) {
//           const { error: updateError } = await supabase
//             .from("users")
//             .update({
//               subscription_id,
//               subscription_status,
//               subscription_start_date,
//               subscription_end_date,
//               current_start,
//               current_end,
//               charge_at,
//               credits: event.event === "subscription.charged" ? 50 : undefined,
//             })
//             .eq("id", foundUser.id);

//           if (updateError)
//             console.error("❌ Failed to update subscription:", updateError);
//           else console.log("✅ Subscription updated in Supabase!");
//         }
//       }
//     }

//     return NextResponse.json({ status: "Webhook processed" }, { status: 200 });
//   } catch (error: any) {
//     console.error("💥 Webhook crashed:", error.message);
//     return NextResponse.json({ error: error.message }, { status: 400 });
//   }
// }

///valid webhook code  ----------------------------------------

// import { NextRequest, NextResponse } from "next/server";
// import Razorpay from "razorpay";
// import crypto from "crypto";
// import { createClient } from "@supabase/supabase-js";

// const razorpay = new Razorpay({
//   key_id: process.env.NEXT_PUBLIC_RAZORPAY_LIVE_KEY!,
//   key_secret: process.env.RAZORPAY_SECRET_KEY!,
// });

// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.SUPABASE_SERVICE_ROLE_KEY!
// );

// const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET!;

// export async function POST(req: NextRequest) {
//   console.log("🔔 Webhook received!");
//   const body = await req.text();
//   const signature = req.headers.get("x-razorpay-signature") as string;

//   try {
//     // ✅ Verify webhook signature
//     const expectedSignature = crypto
//       .createHmac("sha256", webhookSecret)
//       .update(body)
//       .digest("hex");

//     if (expectedSignature !== signature) {
//       console.error("❌ Invalid webhook signature");
//       return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
//     }

//     const event = JSON.parse(body);
//     console.log("📦 Event type:", event.event);

//     // --- Handle Subscription Events ---
//     const sub = event.payload?.subscription?.entity;
//     if (sub) {
//       const subscription_id = sub.id;
//       const subscription_start_date = sub.start_at
//         ? new Date(sub.start_at * 1000).toISOString()
//         : null;
//       const subscription_end_date = sub.end_at
//         ? new Date(sub.end_at * 1000).toISOString()
//         : null;
//       const current_start = sub.current_start
//         ? new Date(sub.current_start * 1000).toISOString()
//         : null;
//       const current_end = sub.current_end
//         ? new Date(sub.current_end * 1000).toISOString()
//         : null;
//       const charge_at = sub.charge_at
//         ? new Date(sub.charge_at * 1000).toISOString()
//         : null;

//       // ✅ Determine subscription status
//       let subscription_status: string;

//       switch (event.event) {
//        case "subscription.authenticated":
//           subscription_status = "inactive"; // instead of "pending"
//           break;
//         case "subscription.activated":
//         case "subscription.resumed":
//         case "subscription.charged":
//           subscription_status = "active";
//           break;
//         case "subscription.paused":
//           subscription_status = "past_due";
//           break;
//         case "subscription.cancelled":
//           subscription_status = "canceled";
//           break;
//         case "subscription.completed":
//           subscription_status = "inactive";
//           break;
//         default:
//           subscription_status = "inactive";
//           break;
//       }

//       console.log("🔁 Subscription update:", {
//         subscription_id,
//         subscription_status,
//         subscription_start_date,
//         subscription_end_date,
//         current_start,
//         current_end,
//         charge_at,
//       });

//       // ✅ Find the user by email (stored in Razorpay notes or invoice)
//       const customerEmail =
//         sub.notes?.customer_email ||
//         sub.customer_email ||
//         sub.customer_details?.email ||
//         null;

//       if (!customerEmail) {
//         console.error("❌ No customer email found in webhook payload.");
//         return NextResponse.json(
//           { status: "missing_email" },
//           { status: 400 }
//         );
//       }

//       const { data: foundUser } = await supabase
//         .from("users")
//         .select("id, credits")
//         .eq("email", customerEmail)
//         .single();

//       if (foundUser) {
//         // ✅ Assign credits based on plan
//         let creditsToAdd = 0;
//         switch (sub.plan_id) {
//           case process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_STARTER:
//             creditsToAdd = 50;
//             break;
//           case process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_PRO:
//             creditsToAdd = 150;
//             break;
//           case process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_GROWTH:
//             creditsToAdd = 200;
//             break;
//           case process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_ENTERPRISE:
//             creditsToAdd = 250;
//             break;
//           default:
//             creditsToAdd = 0;
//             break;
//         }

//         const shouldAddCredits = event.event === "subscription.charged";
//         let updateData: any = {
//           subscription_id,
//           subscription_status,
//           subscription_start_date,
//           subscription_end_date,
//           current_start,
//           current_end,
//           charge_at,
//         };

//         if (shouldAddCredits) {
//           updateData.credits = creditsToAdd;
//           updateData.credits_max = creditsToAdd;
//         }

//         const { error: updateError } = await supabase
//           .from("users")
//           .update(updateData)
//           .eq("id", foundUser.id);

//         if (updateError)
//           console.error("❌ Failed to update subscription:", updateError);
//         else console.log("✅ Subscription & credits updated successfully!");
//       }
//     }

//     return NextResponse.json({ status: "Webhook processed" }, { status: 200 });
//   } catch (error: any) {
//     console.error("💥 Webhook crashed:", error.message);
//     return NextResponse.json({ error: error.message }, { status: 400 });
//   }
// }

//// final V2 code

// import { NextRequest, NextResponse } from "next/server";
// import Razorpay from "razorpay";
// import crypto from "crypto";
// import { createClient } from "@supabase/supabase-js";

// // ✅ Initialize Razorpay Client
// const razorpay = new Razorpay({
//   key_id: process.env.NEXT_PUBLIC_RAZORPAY_LIVE_KEY!,
//   key_secret: process.env.RAZORPAY_SECRET_KEY!,
// });

// // ✅ Initialize Supabase Admin Client
// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.SUPABASE_SERVICE_ROLE_KEY!
// );

// // ✅ Webhook Secret
// const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET!;

// export async function POST(req: NextRequest) {
//   console.log("🔔 Razorpay Webhook Triggered");
//   const body = await req.text();
//   const signature = req.headers.get("x-razorpay-signature") as string;

//   try {
//     // 🔐 Verify webhook signature
//     const expectedSignature = crypto
//       .createHmac("sha256", webhookSecret)
//       .update(body)
//       .digest("hex");

//     if (expectedSignature !== signature) {
//       console.error("❌ Invalid webhook signature");
//       return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
//     }

//     const event = JSON.parse(body);
//     console.log("📦 Event Type:", event.event);

//     // ─────────────────────────────
//     // 🧾 Handle INVOICE.PAID Event
//     // ─────────────────────────────
//     if (event.event === "invoice.paid") {
//       const invoice = event.payload.invoice?.entity;
//       const payment = event.payload.payment?.entity;
//       const subscriptionId = invoice?.subscription_id;
//       const customerEmail =
//         invoice?.customer_email ||
//         invoice?.customer_details?.email ||
//         invoice?.notes?.customer_email ||
//         null;

//       console.log("📄 Invoice:", invoice?.id);
//       console.log("📧 Customer Email:", customerEmail);
//       console.log("🔗 Subscription ID:", subscriptionId);

//       if (!customerEmail) {
//         console.error("❌ No customer email found in invoice payload.");
//         return NextResponse.json({ error: "missing_email" }, { status: 400 });
//       }

//       // ✅ Find user by email
//       const { data: user, error: userError } = await supabase
//         .from("users")
//         .select("id")
//         .eq("email", customerEmail)
//         .single();

//       if (userError || !user) {
//         console.error("❌ User not found:", userError);
//         return NextResponse.json(
//           { error: `User not found for ${customerEmail}` },
//           { status: 400 }
//         );
//       }

//       // ✅ Log invoice to `invoices` table
//       const { error: insertError } = await supabase.from("invoices").insert({
//         user_id: user.id,
//         razorpay_invoice_id: invoice.id,
//         razorpay_payment_id: payment?.id || null,
//         razorpay_subscription_id: subscriptionId,
//         status: invoice.status,
//         amount: invoice.amount,
//         short_url: invoice.short_url,
//         created_at: new Date().toISOString(),
//       });

//       if (insertError) {
//         console.error("❌ Failed to insert invoice:", insertError);
//       } else {
//         console.log(`✅ Invoice ${invoice.id} logged for user ${user.id}`);
//       }
//     }

//     // ─────────────────────────────
//     // 🔁 Handle SUBSCRIPTION Events
//     // ─────────────────────────────
//     const sub = event.payload?.subscription?.entity;
//     if (sub) {
//       const subscription_id = sub.id;
//       const subscription_start_date = sub.start_at
//         ? new Date(sub.start_at * 1000).toISOString()
//         : null;
//       const subscription_end_date = sub.end_at
//         ? new Date(sub.end_at * 1000).toISOString()
//         : null;
//       const current_start = sub.current_start
//         ? new Date(sub.current_start * 1000).toISOString()
//         : null;
//       const current_end = sub.current_end
//         ? new Date(sub.current_end * 1000).toISOString()
//         : null;
//       const charge_at = sub.charge_at
//         ? new Date(sub.charge_at * 1000).toISOString()
//         : null;

//       // Determine subscription status
//       let subscription_status: string;
//       switch (event.event) {
//         case "subscription.authenticated":
//           subscription_status = "inactive";
//           break;
//         case "subscription.activated":
//         case "subscription.resumed":
//         case "subscription.charged":
//           subscription_status = "active";
//           break;
//         case "subscription.paused":
//           subscription_status = "past_due";
//           break;
//         case "subscription.cancelled":
//           subscription_status = "canceled";
//           break;
//         case "subscription.completed":
//           subscription_status = "inactive";
//           break;
//         default:
//           subscription_status = "inactive";
//           break;
//       }

//       console.log("🔁 Subscription Update:", {
//         subscription_id,
//         subscription_status,
//       });

//       // ✅ Find customer email from subscription
//       const customerEmail =
//         sub.notes?.customer_email ||
//         sub.customer_email ||
//         sub.customer_details?.email ||
//         null;

//       if (!customerEmail) {
//         console.error("❌ Missing customer email in subscription payload");
//         return NextResponse.json(
//           { status: "missing_email" },
//           { status: 400 }
//         );
//       }

//       // ✅ Find the user
//       const { data: foundUser } = await supabase
//         .from("users")
//         .select("id, credits")
//         .eq("email", customerEmail)
//         .single();

//       if (foundUser) {
//         // Determine credits based on plan
//         let creditsToAdd = 0;
//         switch (sub.plan_id) {
//           case process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_STARTER:
//             creditsToAdd = 50;
//             break;
//           case process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_PRO:
//             creditsToAdd = 100;
//             break;
//           case process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_GROWTH:
//             creditsToAdd = 150;
//             break;
//           case process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_ENTERPRISE:
//             creditsToAdd = 200;
//             break;
//           default:
//             creditsToAdd = 0;
//         }

//         const shouldAddCredits = event.event === "subscription.charged";
//         const updateData: any = {
//           subscription_id,
//           subscription_status,
//           subscription_start_date,
//           subscription_end_date,
//           current_start,
//           current_end,
//           charge_at,
//         };

//         if (shouldAddCredits) {
//           updateData.credits = creditsToAdd;
//           updateData.credits_max = creditsToAdd;
//         }

//         const { error: updateError } = await supabase
//           .from("users")
//           .update(updateData)
//           .eq("id", foundUser.id);

//         if (updateError)
//           console.error("❌ Failed to update user subscription:", updateError);
//         else console.log("✅ Subscription & credits updated successfully!");
//       }
//     }

//     // ✅ Always send 200 OK to Razorpay
//     return NextResponse.json({ status: "Webhook processed" }, { status: 200 });
//   } catch (error: any) {
//     console.error("💥 Webhook crashed:", error.message);
//     return NextResponse.json({ error: error.message }, { status: 400 });
//   }
// }

// import { NextRequest, NextResponse } from "next/server";
// import Razorpay from "razorpay";
// import crypto from "crypto";
// import { createClient } from "@supabase/supabase-js";

// // ✅ Initialize Razorpay Client
// const razorpay = new Razorpay({
//   key_id: process.env.NEXT_PUBLIC_RAZORPAY_LIVE_KEY!,
//   key_secret: process.env.RAZORPAY_SECRET_KEY!,
// });

// // ✅ Initialize Supabase Admin Client
// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.SUPABASE_SERVICE_ROLE_KEY!,
// );

// // ✅ Webhook Secret
// const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET!;

// export async function POST(req: NextRequest) {
//   console.log("🔔 Razorpay Webhook Triggered");
//   const body = await req.text();
//   const signature = req.headers.get("x-razorpay-signature") as string;

//   try {
//     // 🔐 Verify webhook signature
//     const expectedSignature = crypto
//       .createHmac("sha256", webhookSecret)
//       .update(body)
//       .digest("hex");

//     if (expectedSignature !== signature) {
//       console.error("❌ Invalid webhook signature");
//       return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
//     }

//     const event = JSON.parse(body);
//     console.log("📦 Event Type:", event.event);

//     // ─────────────────────────────
//     // 🧾 Handle INVOICE.PAID Event
//     // ─────────────────────────────
//     if (event.event === "invoice.paid") {
//       const invoice = event.payload.invoice?.entity;
//       const payment = event.payload.payment?.entity;
//       const subscriptionId = invoice?.subscription_id;
//       const customerEmail =
//         invoice?.customer_email ||
//         invoice?.customer_details?.email ||
//         invoice?.notes?.customer_email ||
//         null;

//       console.log("📄 Invoice:", invoice?.id);
//       console.log("📧 Customer Email:", customerEmail);

//       if (!customerEmail) {
//         console.error("❌ No customer email found in invoice payload.");
//         return NextResponse.json({ error: "missing_email" }, { status: 400 });
//       }

//       const { data: user, error: userError } = await supabase
//         .from("users")
//         .select("id")
//         .eq("email", customerEmail)
//         .single();

//       if (userError || !user) {
//         console.error("❌ User not found:", userError);
//         return NextResponse.json(
//           { error: `User not found for ${customerEmail}` },
//           { status: 400 },
//         );
//       }

//       const { error: insertError } = await supabase.from("invoices").insert({
//         user_id: user.id,
//         razorpay_invoice_id: invoice.id,
//         razorpay_payment_id: payment?.id || null,
//         razorpay_subscription_id: subscriptionId,
//         status: invoice.status,
//         amount: invoice.amount,
//         short_url: invoice.short_url,
//         created_at: new Date().toISOString(),
//       });

//       if (insertError)
//         console.error("❌ Failed to insert invoice:", insertError);
//       else console.log(`✅ Invoice ${invoice.id} logged for user ${user.id}`);
//     }

//     // ─────────────────────────────
//     // 🔁 Handle SUBSCRIPTION Events
//     // ─────────────────────────────
//     const sub = event.payload?.subscription?.entity;
//     if (sub) {
//       const subscription_id = sub.id;
//       const subscription_start_date = sub.start_at
//         ? new Date(sub.start_at * 1000).toISOString()
//         : null;
//       const subscription_end_date = sub.end_at
//         ? new Date(sub.end_at * 1000).toISOString()
//         : null;
//       const current_start = sub.current_start
//         ? new Date(sub.current_start * 1000).toISOString()
//         : null;
//       const current_end = sub.current_end
//         ? new Date(sub.current_end * 1000).toISOString()
//         : null;
//       const charge_at = sub.charge_at
//         ? new Date(sub.charge_at * 1000).toISOString()
//         : null;

//       // Determine subscription status
//       let subscription_status: string;
//       switch (event.event) {
//         case "subscription.authenticated":
//           subscription_status = "inactive";
//           break;
//         case "subscription.activated":
//         case "subscription.resumed":
//         case "subscription.charged":
//           subscription_status = "active";
//           break;
//         case "subscription.paused":
//           subscription_status = "past_due";
//           break;
//         case "subscription.cancelled":
//           subscription_status = "canceled";
//           break;
//         case "subscription.completed":
//           subscription_status = "inactive";
//           break;
//         default:
//           subscription_status = "inactive";
//           break;
//       }

//       console.log("🔁 Subscription Update:", {
//         subscription_id,
//         subscription_status,
//       });

//       // ✅ Get customer email
//       const customerEmail =
//         sub.notes?.customer_email ||
//         sub.customer_email ||
//         sub.customer_details?.email ||
//         null;

//       if (!customerEmail) {
//         console.error("❌ Missing customer email in subscription payload");
//         return NextResponse.json({ status: "missing_email" }, { status: 400 });
//       }

//       const { data: foundUser } = await supabase
//         .from("users")
//         .select("id, credits")
//         .eq("email", customerEmail)
//         .single();

//       if (foundUser) {
//         // Determine credits per plan
//         let creditsToAdd = 0;
//         switch (sub.plan_id) {
//           case process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_STARTER:
//             creditsToAdd = 50;
//             break;
//           case process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_PRO:
//             creditsToAdd = 150;
//             break;
//           case process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_GROWTH:
//             creditsToAdd = 200;
//             break;
//           case process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_ENTERPRISE:
//             creditsToAdd = 250;
//             break;
//           default:
//             creditsToAdd = 0;
//         }

//         // Prepare update
//         const shouldAddCredits = event.event === "subscription.charged";
//         const updateData: any = {
//           subscription_id,
//           subscription_status,
//           subscription_start_date,
//           subscription_end_date,
//           current_start,
//           current_end,
//           charge_at,
//         };

//         if (shouldAddCredits) {
//           updateData.credits = creditsToAdd;
//           updateData.credits_max = creditsToAdd;
//         }

//         // If canceled — set credits to 0
//         if (event.event === "subscription.cancelled") {
//           updateData.credits = 0;
//           updateData.credits_max = 0;
//         }

//         const { error: updateError } = await supabase
//           .from("users")
//           .update(updateData)
//           .eq("id", foundUser.id);

//         if (updateError)
//           console.error("❌ Failed to update user subscription:", updateError);
//         else console.log("✅ Subscription & credits updated successfully!");
//       }
//     }

//     // ✅ Always send 200 OK
//     return NextResponse.json({ status: "Webhook processed" }, { status: 200 });
//   } catch (error: any) {
//     console.error("💥 Webhook crashed:", error.message);
//     return NextResponse.json({ error: error.message }, { status: 400 });
//   }
// }

// import { NextRequest, NextResponse } from "next/server";
// import Razorpay from "razorpay";
// import crypto from "crypto";
// import { createClient } from "@supabase/supabase-js";

// // ✅ Initialize Razorpay Client
// const razorpay = new Razorpay({
//   key_id: process.env.NEXT_PUBLIC_RAZORPAY_LIVE_KEY!,
//   key_secret: process.env.RAZORPAY_SECRET_KEY!,
// });

// // ✅ Initialize Supabase Admin Client
// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.SUPABASE_SERVICE_ROLE_KEY!
// );

// // ✅ Webhook Secret
// const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET!;

// export async function POST(req: NextRequest) {
//   console.log("🔔 Razorpay Webhook Triggered");
//   const body = await req.text();
//   const signature = req.headers.get("x-razorpay-signature") as string;

//   try {
//     // 🔐 Verify webhook signature
//     const expectedSignature = crypto
//       .createHmac("sha256", webhookSecret)
//       .update(body)
//       .digest("hex");

//     if (expectedSignature !== signature) {
//       console.error("❌ Invalid webhook signature");
//       return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
//     }

//     const event = JSON.parse(body);
//     console.log("📦 Event Type:", event.event);

//     // ─────────────────────────────
//     // 🧾 Handle INVOICE.PAID Event
//     // ─────────────────────────────
//     if (event.event === "invoice.paid") {
//       const invoice = event.payload.invoice?.entity;
//       const payment = event.payload.payment?.entity;
//       const subscriptionId = invoice?.subscription_id;
//       const customerEmail =
//         invoice?.customer_email ||
//         invoice?.customer_details?.email ||
//         invoice?.notes?.customer_email ||
//         null;

//       console.log("📄 Invoice:", invoice?.id);
//       console.log("📧 Customer Email:", customerEmail);

//       if (!customerEmail) {
//         console.error("❌ No customer email found in invoice payload.");
//         return NextResponse.json({ error: "missing_email" }, { status: 400 });
//       }

//       const { data: user, error: userError } = await supabase
//         .from("users")
//         .select("id")
//         .eq("email", customerEmail)
//         .single();

//       if (userError || !user) {
//         console.error("❌ User not found:", userError);
//         return NextResponse.json(
//           { error: `User not found for ${customerEmail}` },
//           { status: 400 }
//         );
//       }

//       const { error: insertError } = await supabase.from("invoices").insert({
//         user_id: user.id,
//         razorpay_invoice_id: invoice.id,
//         razorpay_payment_id: payment?.id || null,
//         razorpay_subscription_id: subscriptionId,
//         status: invoice.status,
//         amount: invoice.amount,
//         short_url: invoice.short_url,
//         created_at: new Date().toISOString(),
//       });

//       if (insertError)
//         console.error("❌ Failed to insert invoice:", insertError);
//       else console.log(`✅ Invoice ${invoice.id} logged for user ${user.id}`);
//     }

//     // ─────────────────────────────
//     // 🔁 Handle SUBSCRIPTION Events
//     // ─────────────────────────────
//     const sub = event.payload?.subscription?.entity;
//     if (sub) {
//       const subscription_id = sub.id;
//       const subscription_start_date = sub.start_at
//         ? new Date(sub.start_at * 1000).toISOString()
//         : null;
//       const subscription_end_date = sub.charge_at
//         ? new Date(sub.charge_at * 1000).toISOString()
//         : null;
//       const charge_at = sub.charge_at ? new Date(sub.charge_at * 1000).toISOString() : null;

//       // Determine subscription status
//       let subscription_status: string;
//   switch (event.event) {
//     case "subscription.activated":
//     case "subscription.resumed":
//     case "subscription.charged":
//       subscription_status = "active";
//       break;

//     case "subscription.paused":
//       subscription_status = "past_due";
//       break;

//     case "subscription.cancelled":
//       subscription_status = "canceled";
//       break;

//     default:
//       subscription_status = "inactive";
//   }

//       console.log("🔁 Subscription Update:", {
//         subscription_id,
//         subscription_status,
//       });

//       // ✅ Get customer email
//       const customerEmail =
//         sub.notes?.customer_email ||
//         sub.customer_email ||
//         sub.customer_details?.email ||
//         null;

//       if (!customerEmail) {
//         console.error("❌ Missing customer email in subscription payload");
//         return NextResponse.json({ status: "missing_email" }, { status: 400 });
//       }

//       const { data: foundUser } = await supabase
//         .from("users")
//         .select("id, credits")
//         .eq("email", customerEmail)
//         .single();

//       if (foundUser) {
//         // Determine credits per plan and plan name
//         let creditsToAdd = 0;
//         let plan_name = "Free";

//         switch (sub.plan_id) {
//           case process.env.RAZORPAY_PLAN_ID_STARTER:
//             creditsToAdd = 50;
//             plan_name = "Starter";
//             break;
//           case process.env.RAZORPAY_PLAN_ID_PRO:
//             creditsToAdd = 150;
//             plan_name = "Pro";
//             break;
//           case process.env.RAZORPAY_PLAN_ID_GROWTH:
//             creditsToAdd = 200;
//             plan_name = "Growth";
//             break;
//           default:
//             creditsToAdd = 0;
//             plan_name = "Free";
//         }

//         // Prepare update object
//         const shouldAddCredits = event.event === "subscription.charged";
//         const updateData: any = {
//           subscription_id,
//           subscription_status,
//           subscription_start_date,
//           subscription_end_date,
//           charge_at,
//           plan_id: sub.plan_id, // ✅ Save plan_id
//           plan_name, // ✅ Save plan_name
//         };

//         if (shouldAddCredits) {
//           updateData.credits = creditsToAdd;
//           updateData.credits_max = creditsToAdd;
//         }

//         // If canceled — reset credits
//         if (event.event === "subscription.cancelled") {
//           updateData.credits = 0;
//           updateData.credits_max = 0;
//         }

//         const { error: updateError } = await supabase
//           .from("users")
//           .update(updateData)
//           .eq("id", foundUser.id);

//         if (updateError)
//           console.error("❌ Failed to update user subscription:", updateError);
//         else console.log("✅ Subscription, plan, and credits updated successfully!");
//       }
//     }

//     // ✅ Always send 200 OK
//     return NextResponse.json({ status: "Webhook processed" }, { status: 200 });
//   } catch (error: any) {
//     console.error("💥 Webhook crashed:", error.message);
//     return NextResponse.json({ error: error.message }, { status: 400 });
//   }
// }

//----------------------------------------------------------------------------------------------------------

// import { NextRequest, NextResponse } from "next/server";
// import Razorpay from "razorpay";
// import crypto from "crypto";
// import { createClient } from "@supabase/supabase-js";

// /* ───────────────────────────────────────────── */
// /* Razorpay Client (not strictly required here) */
// /* ───────────────────────────────────────────── */
// const razorpay = new Razorpay({
//   key_id: process.env.NEXT_PUBLIC_RAZORPAY_LIVE_KEY!,
//   key_secret: process.env.RAZORPAY_SECRET_KEY!,
// });

// /* ───────────────────────────────────────────── */
// /* Supabase Admin Client                         */
// /* ───────────────────────────────────────────── */
// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.SUPABASE_SERVICE_ROLE_KEY!,
// );

// /* ───────────────────────────────────────────── */
// /* Webhook Secret                                */
// /* ───────────────────────────────────────────── */
// const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET!;

// /* ───────────────────────────────────────────── */
// /* POST Handler                                  */
// /* ───────────────────────────────────────────── */
// export async function POST(req: NextRequest) {
//   const body = await req.text();
//   const signature = req.headers.get("x-razorpay-signature") as string;

//   try {
//     /* ───────── Verify Signature ───────── */
//     const expectedSignature = crypto
//       .createHmac("sha256", webhookSecret)
//       .update(body)
//       .digest("hex");

//     if (expectedSignature !== signature) {
//       console.error("❌ Invalid Razorpay webhook signature");
//       return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
//     }

//     const event = JSON.parse(body);
//     console.log("🔔 Razorpay Event:", event.event);

//     /* ───────────────────────────────────────── */
//     /* Handle INVOICE.PAID (First & Renewal Pay) */
//     /* ───────────────────────────────────────── */
//     const invoice = event.payload?.invoice?.entity;
//     const payment = event.payload?.payment?.entity;

//     /* ───────────────────────────────────────── */
//     /* Handle SUBSCRIPTION Payload               */
//     /* ───────────────────────────────────────── */
//     const sub = event.payload?.subscription?.entity;

//     /* ───────── Extract Email SAFELY ───────── */
//     const customerEmail =
//       invoice?.customer_email ||
//       invoice?.customer_details?.email ||
//       invoice?.notes?.customer_email ||
//       sub?.notes?.customer_email ||
//       sub?.customer_email ||
//       sub?.customer_details?.email ||
//       null;

//     if (!customerEmail) {
//       console.error("❌ Customer email not found");
//       return NextResponse.json({ error: "missing_email" }, { status: 400 });
//     }

//     /* ───────── Fetch User ───────── */
//     const { data: user, error: userError } = await supabase
//       .from("users")
//       .select("id")
//       .eq("email", customerEmail)
//       .single();

//     if (userError || !user) {
//       console.error("❌ User not found:", customerEmail);
//       return NextResponse.json({ error: "user_not_found" }, { status: 400 });
//     }

//     /* ───────── Determine Plan ID ───────── */
//     const planId = sub?.plan_id || invoice?.line_items?.[0]?.plan_id || null;

//     /* ───────── Determine Plan & Credits ───────── */
//     let creditsToAdd = 0;
//     let plan_name = "Free";

//     switch (planId) {
//       case process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_STARTER:
//         creditsToAdd = 50;
//         plan_name = "Starter";
//         break;
//       case process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_PRO:
//         creditsToAdd = 150;
//         plan_name = "Pro";
//         break;
//       case process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_GROWTH:
//         creditsToAdd = 200;
//         plan_name = "Growth";
//         break;
//     }

//     /* ───────── Subscription Status ───────── */
//     let subscription_status = "NULL";

//     switch (event.event) {
//       case "subscription.activated":
//       case "subscription.resumed":
//       case "subscription.charged":
//         subscription_status = "active";
//         break;
//       case "subscription.paused":
//         subscription_status = "past_due";
//         break;
//       case "subscription.cancelled":
//         subscription_status = "canceled";
//         break;
//       case "subscription.completed":
//         subscription_status = "inactive";
//         break;
//     }

//     /* ───────── Dates (NO current_start/end) ───────── */
//     const subscription_start_date = sub?.start_at
//       ? new Date(sub.start_at * 1000).toISOString()
//       : null;

//     const subscription_end_date = sub?.charge_at
//       ? new Date(sub.charge_at * 1000).toISOString()
//       : null;

//     /* ───────── Add Credits On Payment ───────── */
//     const shouldAddCredits =
//       event.event === "invoice.paid" || event.event === "subscription.charged";

//     console.log("💰 Credit Logic:", {
//       event: event.event,
//       shouldAddCredits,
//       planId,
//       creditsToAdd,
//     });

//     /* ───────── Update User ───────── */
//     const updateData: any = {
//       subscription_id: sub?.id || invoice?.subscription_id || null,
//       subscription_status,
//       subscription_start_date,
//       subscription_end_date,
//       plan_id: planId,
//       plan_name,
//     };

//     if (shouldAddCredits && creditsToAdd > 0) {
//       updateData.credits = creditsToAdd;
//       updateData.credits_max = creditsToAdd;
//     }

//     if (event.event === "subscription.cancelled") {
//       updateData.credits = 0;
//       updateData.credits_max = 0;
//     }

//     const { error: updateError } = await supabase
//       .from("users")
//       .update(updateData)
//       .eq("id", user.id);

//     if (updateError) {
//       console.error("❌ Failed to update user:", updateError);
//     } else {
//       console.log("✅ User subscription updated");
//     }

//     /* ───────── Log Invoice ───────── */
//     if (event.event === "invoice.paid" && invoice) {
//       await supabase.from("invoices").insert({
//         user_id: user.id,
//         razorpay_invoice_id: invoice.id,
//         razorpay_payment_id: payment?.id || null,
//         razorpay_subscription_id: invoice.subscription_id,
//         status: invoice.status,
//         amount: invoice.amount,
//         short_url: invoice.short_url,
//         created_at: new Date().toISOString(),
//       });
//     }

//     return NextResponse.json({ status: "success" }, { status: 200 });
//   } catch (error: any) {
//     console.error("💥 Webhook Error:", error.message);
//     return NextResponse.json({ error: error.message }, { status: 400 });
//   }
// }

//-----------------------------------

// import { NextRequest, NextResponse } from "next/server";
// import crypto from "crypto";
// import { createClient } from "@supabase/supabase-js";

// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.SUPABASE_SERVICE_ROLE_KEY!,
// );

// const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET!;

// export async function POST(req: NextRequest) {
//   const body = await req.text();
//   const signature = req.headers.get("x-razorpay-signature") as string;

//   /* ───────── Verify Signature ───────── */
//   const expectedSignature = crypto
//     .createHmac("sha256", webhookSecret)
//     .update(body)
//     .digest("hex");

//   if (expectedSignature !== signature) {
//     return NextResponse.json({ error: "invalid_signature" }, { status: 400 });
//   }

//   try {
//     const event = JSON.parse(body);
//     console.log("🔔 Event:", event.event);

//     const subscription =
//       event.payload?.subscription?.entity ||
//       event.payload?.invoice?.entity ||
//       null;

//     const subscriptionId = subscription?.id || subscription?.subscription_id;

//     if (!subscriptionId) {
//       return NextResponse.json({ status: "ignored" }, { status: 200 });
//     }

//     /* ───────── GET USER FROM SUPABASE ───────── */
//     const { data: user, error } = await supabase
//       .from("users")
//       .select("id, email, credits, credits_max")
//       .eq("subscription_id", subscriptionId)
//       .single();

//     if (error || !user) {
//       console.warn("User not found for subscription:", subscriptionId);
//       return NextResponse.json({ status: "ignored" }, { status: 200 });
//     }

//     console.log("✅ USER EMAIL:", user.email);

//     /* ───────── PLAN LOGIC ───────── */
//     let creditsToAdd = 0;

//     switch (subscription?.plan_id) {
//       case process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_STARTER:
//         creditsToAdd = 50;
//         break;
//       case process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_PRO:
//         creditsToAdd = 150;
//         break;
//       case process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_GROWTH:
//         creditsToAdd = 200;
//         break;
//     }

//     /* ───────── CREDIT ONLY ON PAYMENT ───────── */
//     if (
//       event.event === "invoice.paid" ||
//       event.event === "subscription.charged"
//     ) {
//       await supabase
//         .from("users")
//         .update({
//           credits: creditsToAdd,
//           credits_max: creditsToAdd,
//           subscription_status: "active",
//         })
//         .eq("id", user.id);
//     }

//     if (event.event === "subscription.cancelled") {
//       await supabase
//         .from("users")
//         .update({
//           credits: 0,
//           credits_max: 0,
//           subscription_status: "canceled",
//         })
//         .eq("id", user.id);
//     }

//     return NextResponse.json({ status: "success" }, { status: 200 });
//   } catch (err: any) {
//     console.error("Webhook error:", err.message);
//     return NextResponse.json({ status: "ok" }, { status: 200 });
//   }
// }

// ------------------                  ---------------------

// import { NextRequest, NextResponse } from "next/server";
// import Razorpay from "razorpay";
// import crypto from "crypto";
// import { createClient } from "@supabase/supabase-js";

// /* ───────────────────────────────────────────── */
// /* Razorpay Client (not strictly required here) */
// /* ───────────────────────────────────────────── */
// const razorpay = new Razorpay({
//   key_id: process.env.NEXT_PUBLIC_RAZORPAY_LIVE_KEY!,
//   key_secret: process.env.RAZORPAY_SECRET_KEY!,
// });

// /* ───────────────────────────────────────────── */
// /* Supabase Admin Client                         */
// /* ───────────────────────────────────────────── */
// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.SUPABASE_SERVICE_ROLE_KEY!,
// );

// /* ───────────────────────────────────────────── */
// /* Webhook Secret                                */
// /* ───────────────────────────────────────────── */
// const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET!;

// /* ───────────────────────────────────────────── */
// /* POST Handler                                  */
// /* ───────────────────────────────────────────── */
// export async function POST(req: NextRequest) {
//   const body = await req.text();
//   const signature = req.headers.get("x-razorpay-signature") as string;

//   try {
//     /* ───────── Verify Signature ───────── */
//     const expectedSignature = crypto
//       .createHmac("sha256", webhookSecret)
//       .update(body)
//       .digest("hex");

//     if (expectedSignature !== signature) {
//       console.error("❌ Invalid Razorpay webhook signature");
//       return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
//     }

//     const event = JSON.parse(body);
//     console.log("🔔 Razorpay Event:", event.event);

//     /* ───────────────────────────────────────── */
//     /* Handle INVOICE.PAID (First & Renewal Pay) */
//     /* ───────────────────────────────────────── */
//     const invoice = event.payload?.invoice?.entity;
//     const payment = event.payload?.payment?.entity;

//     /* ───────────────────────────────────────── */
//     /* Handle SUBSCRIPTION Payload               */
//     /* ───────────────────────────────────────── */
//     const sub = event.payload?.subscription?.entity;

//     /* ───────── Extract Email SAFELY ───────── */
//     const customerEmail =
//       invoice?.customer_email ||
//       invoice?.customer_details?.email ||
//       invoice?.notes?.customer_email ||
//       sub?.notes?.customer_email ||
//       sub?.customer_email ||
//       sub?.customer_details?.email ||
//       null;

//     if (!customerEmail) {
//       console.error("❌ Customer email not found");
//       return NextResponse.json({ error: "missing_email" }, { status: 400 });
//     }

//     /* ───────── Fetch User ───────── */
//     const { data: user, error: userError } = await supabase
//       .from("users")
//       .select("id")
//       .eq("email", customerEmail)
//       .single();

//     if (userError || !user) {
//       console.error("❌ User not found:", customerEmail);
//       return NextResponse.json({ error: "user_not_found" }, { status: 400 });
//     }

//     /* ───────── Determine Plan ID ───────── */
//     const planId = sub?.plan_id || invoice?.line_items?.[0]?.plan_id || null;

//     /* ───────── Determine Plan & Credits ───────── */
//     let creditsToAdd = 0;
//     let plan_name = "Free";

//     switch (planId) {
//       case process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_STARTER:
//         creditsToAdd = 50;
//         plan_name = "Starter";
//         break;
//       case process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_PRO:
//         creditsToAdd = 150;
//         plan_name = "Pro";
//         break;
//       case process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_GROWTH:
//         creditsToAdd = 200;
//         plan_name = "Growth";
//         break;
//     }

//     /* ───────── Subscription Status ───────── */
//     let subscription_status = "NULL";

//     switch (event.event) {
//       case "subscription.activated":
//       case "subscription.resumed":
//       case "subscription.charged":
//         subscription_status = "active";
//         break;
//       case "subscription.paused":
//         subscription_status = "past_due";
//         break;
//       case "subscription.cancelled":
//         subscription_status = "canceled";
//         break;
//       case "subscription.completed":
//         subscription_status = "inactive";
//         break;
//     }

//     /* ───────── Dates (NO current_start/end) ───────── */
//     const subscription_start_date = sub?.start_at
//       ? new Date(sub.start_at * 1000).toISOString()
//       : null;

//     const subscription_end_date = sub?.charge_at
//       ? new Date(sub.charge_at * 1000).toISOString()
//       : null;

//     /* ───────── Add Credits On Payment ───────── */
//     const shouldAddCredits =
//       event.event === "invoice.paid" || event.event === "subscription.charged";

//     console.log("💰 Credit Logic:", {
//       event: event.event,
//       shouldAddCredits,
//       planId,
//       creditsToAdd,
//     });

//     /* ───────── Update User ───────── */
//     const updateData: any = {
//       subscription_id: sub?.id || invoice?.subscription_id || null,
//       subscription_status,
//       subscription_start_date,
//       subscription_end_date,
//       plan_id: planId,
//       plan_name,
//     };

//     if (shouldAddCredits && creditsToAdd > 0) {
//       updateData.credits = creditsToAdd;
//       updateData.credits_max = creditsToAdd;
//     }

//     if (event.event === "subscription.cancelled") {
//       updateData.credits = 0;
//       updateData.credits_max = 0;
//     }

//     const { error: updateError } = await supabase
//       .from("users")
//       .update(updateData)
//       .eq("id", user.id);

//     if (updateError) {
//       console.error("❌ Failed to update user:", updateError);
//     } else {
//       console.log("✅ User subscription updated");
//     }

//     /* ───────── Log Invoice ───────── */
//     if (event.event === "invoice.paid" && invoice) {
//       await supabase.from("invoices").insert({
//         user_id: user.id,
//         razorpay_invoice_id: invoice.id,
//         razorpay_payment_id: payment?.id || null,
//         razorpay_subscription_id: invoice.subscription_id,
//         status: invoice.status,
//         amount: invoice.amount,
//         short_url: invoice.short_url,
//         created_at: new Date().toISOString(),
//       });
//     }

//     return NextResponse.json({ status: "success" }, { status: 200 });
//   } catch (error: any) {
//     console.error("💥 Webhook Error:", error.message);
//     return NextResponse.json({ error: error.message }, { status: 400 });
//   }
// }

// import { NextRequest, NextResponse } from "next/server";
// import crypto from "crypto";
// import { createClient } from "@supabase/supabase-js";

// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.SUPABASE_SERVICE_ROLE_KEY!,
// );

// const WEBHOOK_SECRET = process.env.RAZORPAY_WEBHOOK_SECRET!;

// export async function POST(req: NextRequest) {
//   const body = await req.text();
//   const signature = req.headers.get("x-razorpay-signature") || "";

//   /* ───── Verify Signature ───── */
//   const expectedSignature = crypto
//     .createHmac("sha256", WEBHOOK_SECRET)
//     .update(body)
//     .digest("hex");

//   if (expectedSignature !== signature) {
//     console.error("Invalid webhook signature");
//     return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
//   }

//   const event = JSON.parse(body);
//   console.log("Webhook Event:", event.event);

//   /* =====================================================
//      INVOICE.PAID  ✅ (FIRST + EVERY MONTH RENEWAL)
//      ===================================================== */
//   if (event.event === "invoice.paid") {
//     const invoice = event.payload.invoice.entity;

//     const email =
//       invoice.customer_email ||
//       invoice.customer_details?.email ||
//       invoice.notes?.customer_email;

//     if (!email) {
//       return NextResponse.json({ error: "Email not found" }, { status: 400 });
//     }

//     const { data: user } = await supabase
//       .from("users")
//       .select("id, credits")
//       .eq("email", email)
//       .single();

//     if (!user) {
//       return NextResponse.json({ error: "User not found" }, { status: 400 });
//     }

//     const planId = invoice.line_items?.[0]?.plan_id;

//     let creditsToAdd = 0;
//     let plan_name = "Free";

//     switch (planId) {
//       case process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_STARTER:
//         creditsToAdd = 50;
//         plan_name = "Starter";
//         break;
//       case process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_PRO:
//         creditsToAdd = 150;
//         plan_name = "Pro";
//         break;
//       case process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_GROWTH:
//         creditsToAdd = 200;
//         plan_name = "Growth";
//         break;
//     }

//     await supabase
//       .from("users")
//       .update({
//         subscription_id: invoice.subscription_id,
//         subscription_status: "active",
//         plan_id: planId,
//         plan_name,
//         credits: (user.credits || 0) + creditsToAdd, // ✅ increment
//         credits_max: creditsToAdd,
//         subscription_start_date: new Date(
//           invoice.period_start * 1000,
//         ).toISOString(),
//         subscription_end_date: new Date(
//           invoice.period_end * 1000,
//         ).toISOString(),
//       })
//       .eq("id", user.id);

//     await supabase.from("invoices").insert({
//       user_id: user.id,
//       razorpay_invoice_id: invoice.id,
//       razorpay_subscription_id: invoice.subscription_id,
//       amount: invoice.amount,
//       status: invoice.status,
//       created_at: new Date().toISOString(),
//     });

//     return NextResponse.json({ success: true });
//   }
//   const IGNORE_EVENTS = [
//     "payment.failed",
//     "payment.authorized",
//     "payment.captured",
//     "subscription.charged",
//   ];

//   if (IGNORE_EVENTS.includes(event.event)) {
//     console.log("Ignored Razorpay event:", event.event);
//     return NextResponse.json({ status: "ignored" }, { status: 200 });
//   }
//   /* =====================================================
//      SUBSCRIPTION CANCELLED
//      ===================================================== */
//   if (event.event === "subscription.cancelled") {
//     const sub = event.payload.subscription.entity;

//     await supabase
//       .from("users")
//       .update({
//         subscription_status: "canceled",
//       })
//       .eq("subscription_id", sub.id);

//     return NextResponse.json({ success: true });
//   }
//   if (event.event === "invoice.expired") {
//     const invoice = event.payload.invoice.entity;

//     await supabase
//       .from("users")
//       .update({
//         subscription_status: "past_due",
//       })
//       .eq("subscription_id", invoice.subscription_id);

//     console.log("Subscription marked past_due:", invoice.subscription_id);
//     return NextResponse.json({ success: true });
//   }
//   /* =====================================================
//      SUBSCRIPTION PAUSED / RESUMED
//      ===================================================== */
//   if (event.event === "subscription.paused") {
//     const sub = event.payload.subscription.entity;

//     await supabase
//       .from("users")
//       .update({
//         subscription_status: "paused",
//       })
//       .eq("subscription_id", sub.id);

//     return NextResponse.json({ success: true });
//   }

//   if (event.event === "subscription.resumed") {
//     const sub = event.payload.subscription.entity;

//     await supabase
//       .from("users")
//       .update({
//         subscription_status: "active",
//       })
//       .eq("subscription_id", sub.id);

//     return NextResponse.json({ success: true });
//   }

//   return NextResponse.json({ status: "ignored" });
// }

// import { NextRequest, NextResponse } from "next/server";
// import Razorpay from "razorpay";
// import crypto from "crypto";
// import { createClient } from "@supabase/supabase-js";

// /* ───────────────────────────────────────────── */
// /* Razorpay Client (not strictly required here) */
// /* ───────────────────────────────────────────── */
// const razorpay = new Razorpay({
//   key_id: process.env.NEXT_PUBLIC_RAZORPAY_LIVE_KEY!,
//   key_secret: process.env.RAZORPAY_SECRET_KEY!,
// });

// /* ───────────────────────────────────────────── */
// /* Supabase Admin Client                         */
// /* ───────────────────────────────────────────── */
// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.SUPABASE_SERVICE_ROLE_KEY!,
// );

// /* ───────────────────────────────────────────── */
// /* Webhook Secret                                */
// /* ───────────────────────────────────────────── */
// const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET!;

// /* ───────────────────────────────────────────── */
// /* POST Handler                                  */
// /* ───────────────────────────────────────────── */
// export async function POST(req: NextRequest) {
//   const body = await req.text();
//   const signature = req.headers.get("x-razorpay-signature") as string;

//   try {
//     /* ───────── Verify Signature ───────── */
//     const expectedSignature = crypto
//       .createHmac("sha256", webhookSecret)
//       .update(body)
//       .digest("hex");

//     if (expectedSignature !== signature) {
//       console.error("❌ Invalid Razorpay webhook signature");
//       return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
//     }

//     const event = JSON.parse(body);
//     console.log("🔔 Razorpay Event:", event.event);

//     /* ───────────────────────────────────────── */
//     /* Handle INVOICE.PAID (First & Renewal Pay) */
//     /* ───────────────────────────────────────── */
//     const invoice = event.payload?.invoice?.entity;
//     const payment = event.payload?.payment?.entity;

//     /* ───────────────────────────────────────── */
//     /* Handle SUBSCRIPTION Payload               */
//     /* ───────────────────────────────────────── */
//     const sub = event.payload?.subscription?.entity;

//     /* ───────── Extract Email SAFELY ───────── */
//     const customerEmail =
//       invoice?.customer_email ||
//       invoice?.customer_details?.email ||
//       invoice?.notes?.customer_email ||
//       sub?.notes?.customer_email ||
//       sub?.customer_email ||
//       sub?.customer_details?.email ||
//       null;

//     if (!customerEmail) {
//       console.error("❌ Customer email not found");
//       return NextResponse.json({ error: "missing_email" }, { status: 400 });
//     }

//     /* ───────── Fetch User ───────── */
//     const { data: user, error: userError } = await supabase
//       .from("users")
//       .select("id")
//       .eq("email", customerEmail)
//       .single();

//     if (userError || !user) {
//       console.error("❌ User not found:", customerEmail);
//       return NextResponse.json({ error: "user_not_found" }, { status: 400 });
//     }

//     /* ───────── Determine Plan ID ───────── */
//     const planId = sub?.plan_id || invoice?.line_items?.[0]?.plan_id || null;

//     /* ───────── Determine Plan & Credits ───────── */
//     let creditsToAdd = 0;
//     let plan_name = "Free";

//     switch (planId) {
//       case process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_STARTER:
//         creditsToAdd = 50;
//         plan_name = "Starter";
//         break;
//       case process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_PRO:
//         creditsToAdd = 150;
//         plan_name = "Pro";
//         break;
//       case process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_GROWTH:
//         creditsToAdd = 200;
//         plan_name = "Growth";
//         break;
//     }

//     /* ───────── Subscription Status ───────── */
//     let subscription_status = "NULL";

//     switch (event.event) {
//       case "subscription.activated":
//       case "subscription.resumed":
//       case "subscription.charged":
//         subscription_status = "active";
//         break;
//       case "subscription.paused":
//         subscription_status = "past_due";
//         break;
//       case "subscription.cancelled":
//         subscription_status = "canceled";
//         break;
//       case "subscription.completed":
//         subscription_status = "inactive";
//         break;
//     }

//     /* ───────── Dates (NO current_start/end) ───────── */
//     const subscription_start_date = sub?.start_at
//       ? new Date(sub.start_at * 1000).toISOString()
//       : null;

//     const subscription_end_date = sub?.charge_at
//       ? new Date(sub.charge_at * 1000).toISOString()
//       : null;

//     /* ───────── Add Credits On Payment ───────── */
//     const shouldAddCredits =
//       event.event === "invoice.paid" || event.event === "subscription.charged";

//     console.log("💰 Credit Logic:", {
//       event: event.event,
//       shouldAddCredits,
//       planId,
//       creditsToAdd,
//     });

//     /* ───────── Update User ───────── */
//     const updateData: any = {
//       subscription_id: sub?.id || invoice?.subscription_id || null,
//       subscription_status,
//       subscription_start_date,
//       subscription_end_date,
//       plan_id: planId,
//       plan_name,
//     };

//     if (shouldAddCredits && creditsToAdd > 0) {
//       updateData.credits = creditsToAdd;
//       updateData.credits_max = creditsToAdd;
//     }

//     if (event.event === "subscription.cancelled") {
//       updateData.credits = 0;
//       updateData.credits_max = 0;
//     }

//     const { error: updateError } = await supabase
//       .from("users")
//       .update(updateData)
//       .eq("id", user.id);

//     if (updateError) {
//       console.error("❌ Failed to update user:", updateError);
//     } else {
//       console.log("✅ User subscription updated");
//     }

//     /* ───────── Log Invoice ───────── */
//     if (event.event === "invoice.paid" && invoice) {
//       await supabase.from("invoices").insert({
//         user_id: user.id,
//         razorpay_invoice_id: invoice.id,
//         razorpay_payment_id: payment?.id || null,
//         razorpay_subscription_id: invoice.subscription_id,
//         status: invoice.status,
//         amount: invoice.amount,
//         short_url: invoice.short_url,
//         created_at: new Date().toISOString(),
//       });
//     }

//     return NextResponse.json({ status: "success" }, { status: 200 });
//   } catch (error: any) {
//     console.error("💥 Webhook Error:", error.message);
//     return NextResponse.json({ error: error.message }, { status: 400 });
//   }
// }

// import { supabase } from "@/lib/supabaseClient";
// import crypto from "crypto";
// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   const body = await req.text();
//   const signature = req.headers.get("x-razorpay-signature")!;

//   const expectedSignature = crypto
//     .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
//     .update(body)
//     .digest("hex");

//   if (signature !== expectedSignature) {
//     return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
//   }

//   const event = JSON.parse(body);

//   if (event.event === "subscription.activated") {
//     await supabase
//       .from("subscriptions")
//       .update({ status: "active" })
//       .eq("razorpay_subscription_id", event.payload.subscription.entity.id);
//   }

//   return NextResponse.json({ success: true });
// }

// import { NextRequest, NextResponse } from "next/server";
// import Razorpay from "razorpay";
// import crypto from "crypto";
// import { createClient } from "@supabase/supabase-js";

// // ✅ Initialize Razorpay Client
// const razorpay = new Razorpay({
//   key_id: process.env.NEXT_PUBLIC_RAZORPAY_LIVE_KEY!,
//   key_secret: process.env.RAZORPAY_SECRET_KEY!,
// });

// // ✅ Initialize Supabase Admin Client
// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.SUPABASE_SERVICE_ROLE_KEY!,
// );

// // ✅ Webhook Secret
// const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET!;

// export async function POST(req: NextRequest) {
//   console.log("🔔 Razorpay Webhook Triggered");
//   const body = await req.text();
//   const signature = req.headers.get("x-razorpay-signature") as string;

//   try {
//     // 🔐 Verify webhook signature
//     const expectedSignature = crypto
//       .createHmac("sha256", webhookSecret)
//       .update(body)
//       .digest("hex");

//     if (expectedSignature !== signature) {
//       console.error("❌ Invalid webhook signature");
//       return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
//     }

//     const event = JSON.parse(body);
//     console.log("📦 Event Type:", event.event);

//     // ─────────────────────────────
//     // 🧾 Handle INVOICE.PAID Event
//     // ─────────────────────────────
//     if (event.event === "invoice.paid") {
//       const invoice = event.payload.invoice?.entity;
//       const payment = event.payload.payment?.entity;
//       const subscriptionId = invoice?.subscription_id;
//       const customerEmail =
//         invoice?.customer_email ||
//         invoice?.customer_details?.email ||
//         invoice?.notes?.customer_email ||
//         null;

//       console.log("📄 Invoice:", invoice?.id);
//       console.log("📧 Customer Email:", customerEmail);

//       if (!customerEmail) {
//         console.error("❌ No customer email found in invoice payload.");
//         return NextResponse.json({ error: "missing_email" }, { status: 400 });
//       }

//       const { data: user, error: userError } = await supabase
//         .from("users")
//         .select("id")
//         .eq("email", customerEmail)
//         .single();

//       if (userError || !user) {
//         console.error("❌ User not found:", userError);
//         return NextResponse.json(
//           { error: `User not found for ${customerEmail}` },
//           { status: 400 },
//         );
//       }

//       const { error: insertError } = await supabase.from("invoices").insert({
//         user_id: user.id,
//         razorpay_invoice_id: invoice.id,
//         razorpay_payment_id: payment?.id || null,
//         razorpay_subscription_id: subscriptionId,
//         status: invoice.status,
//         amount: invoice.amount,
//         short_url: invoice.short_url,
//         created_at: new Date().toISOString(),
//       });

//       if (insertError)
//         console.error("❌ Failed to insert invoice:", insertError);
//       else console.log(`✅ Invoice ${invoice.id} logged for user ${user.id}`);
//     }

//     // ─────────────────────────────
//     // 🔁 Handle SUBSCRIPTION Events
//     // ─────────────────────────────
//     const sub = event.payload?.subscription?.entity;
//     if (sub) {
//       const subscription_id = sub.id;
//       const subscription_start_date = sub.start_at
//         ? new Date(sub.start_at * 1000).toISOString()
//         : null;
//       const subscription_end_date = sub.charge_at
//         ? new Date(sub.charge_at * 1000).toISOString()
//         : null;
//       const charge_at = sub.charge_at
//         ? new Date(sub.charge_at * 1000).toISOString()
//         : null;

//       // Determine subscription status
//       let subscription_status: string;
//       switch (event.event) {
//         case "subscription.activated":
//         case "subscription.resumed":
//         case "subscription.charged":
//           subscription_status = "active";
//           break;

//         case "subscription.paused":
//           subscription_status = "past_due";
//           break;

//         case "subscription.cancelled":
//           subscription_status = "canceled";
//           break;

//         default:
//           subscription_status = "inactive";
//       }

//       console.log("🔁 Subscription Update:", {
//         subscription_id,
//         subscription_status,
//       });

//       // ✅ Get customer email
//       const customerEmail =
//         sub.notes?.customer_email ||
//         sub.customer_email ||
//         sub.customer_details?.email ||
//         null;

//       if (!customerEmail) {
//         console.error("❌ Missing customer email in subscription payload");
//         return NextResponse.json({ status: "missing_email" }, { status: 400 });
//       }

//       const { data: foundUser } = await supabase
//         .from("users")
//         .select("id, credits")
//         .eq("email", customerEmail)
//         .single();

//       if (foundUser) {
//         // Determine credits per plan and plan name
//         let creditsToAdd = 0;
//         let plan_name = "Free";

//         switch (sub.plan_id) {
//           case process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_STARTER:
//             creditsToAdd = 50;
//             plan_name = "Starter";
//             break;
//           case process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_PRO:
//             creditsToAdd = 150;
//             plan_name = "Pro";
//             break;
//           case process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_GROWTH:
//             creditsToAdd = 200;
//             plan_name = "Growth";
//             break;
//           default:
//             creditsToAdd = 0;
//             plan_name = "Free";
//         }

//         // Prepare update object
//         const shouldAddCredits = event.event === "subscription.charged";
//         const updateData: any = {
//           subscription_id,
//           subscription_status,
//           subscription_start_date,
//           subscription_end_date,
//           charge_at,
//           plan_id: sub.plan_id, // ✅ Save plan_id
//           plan_name, // ✅ Save plan_name
//         };

//         if (shouldAddCredits) {
//           updateData.credits = creditsToAdd;
//           updateData.credits_max = creditsToAdd;
//         }

//         // If canceled — reset credits
//         if (event.event === "subscription.cancelled") {
//           updateData.credits = 0;
//           updateData.credits_max = 0;
//         }

//         const { error: updateError } = await supabase
//           .from("users")
//           .update(updateData)
//           .eq("id", foundUser.id);

//         if (updateError)
//           console.error("❌ Failed to update user subscription:", updateError);
//         else
//           console.log(
//             "✅ Subscription, plan, and credits updated successfully!",
//           );
//       }
//     }

//     // ✅ Always send 200 OK
//     return NextResponse.json({ status: "Webhook processed" }, { status: 200 });
//   } catch (error: any) {
//     console.error("💥 Webhook crashed:", error.message);
//     return NextResponse.json({ error: error.message }, { status: 400 });
//   }
// }

import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";
import crypto from "crypto";
import { createClient } from "@supabase/supabase-js";

/* ───────────────────────────────────────────── */
/* Razorpay Client (not strictly required here) */
/* ───────────────────────────────────────────── */
const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_LIVE_KEY!,
  key_secret: process.env.RAZORPAY_SECRET_KEY!,
});

/* ───────────────────────────────────────────── */
/* Supabase Admin Client                         */
/* ───────────────────────────────────────────── */
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

/* ───────────────────────────────────────────── */
/* Webhook Secret                                */
/* ───────────────────────────────────────────── */
const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET!;

/* ───────────────────────────────────────────── */
/* POST Handler                                  */
/* ───────────────────────────────────────────── */
export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get("x-razorpay-signature") as string;

  try {
    /* ───────── Verify Signature ───────── */
    const expectedSignature = crypto
      .createHmac("sha256", webhookSecret)
      .update(body)
      .digest("hex");

    if (expectedSignature !== signature) {
      console.error("❌ Invalid Razorpay webhook signature");
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    const event = JSON.parse(body);
    // console.log("🔔 Razorpay Event:", event.event);

    /* ───────────────────────────────────────── */
    /* Handle INVOICE.PAID (First & Renewal Pay) */
    /* ───────────────────────────────────────── */
    const invoice = event.payload?.invoice?.entity;
    const payment = event.payload?.payment?.entity;

    /* ───────────────────────────────────────── */
    /* Handle SUBSCRIPTION Payload               */
    /* ───────────────────────────────────────── */
    const sub = event.payload?.subscription?.entity;

    /* ───────── Extract Email SAFELY ───────── */
    const customerEmail =
      invoice?.customer_email ||
      invoice?.customer_details?.email ||
      invoice?.notes?.customer_email ||
      sub?.notes?.customer_email ||
      sub?.customer_email ||
      sub?.customer_details?.email ||
      null;

    if (!customerEmail) {
      console.error(" Customer email not found");
      return NextResponse.json({ error: "missing_email" }, { status: 400 });
    }

    /* ───────── Fetch User ───────── */
    const { data: user, error: userError } = await supabase
      .from("users")
      .select("id")
      .eq("email", customerEmail)
      .single();

    if (userError || !user) {
      console.error(" User not found:", customerEmail);
      return NextResponse.json({ error: "user_not_found" }, { status: 400 });
    }

    /* ───────── Determine Plan ID ───────── */
    const planId = sub?.plan_id || invoice?.line_items?.[0]?.plan_id || null;

    /* ───────── Determine Plan & Credits ───────── */
    let creditsToAdd = 0;
    let plan_name = "Free";

    switch (planId) {
      case process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_STARTER:
        creditsToAdd = 35;
        plan_name = "Starter";
        break;
      case process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_PRO:
        creditsToAdd = 150;
        plan_name = "Pro";
        break;
      case process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID_GROWTH:
        creditsToAdd = 600;
        plan_name = "Growth";
        break;
    }

    /* ───────── Subscription Status ───────── */
    let subscription_status = "NULL";

    switch (event.event) {
      case "subscription.activated":
      case "subscription.resumed":
      case "subscription.charged":
        subscription_status = "active";
        break;
      case "subscription.paused":
        subscription_status = "past_due";
        break;
      case "subscription.cancelled":
        subscription_status = "canceled";
        break;
      case "subscription.completed":
        subscription_status = "inactive";
        break;
    }

    /* ───────── Dates (NO current_start/end) ───────── */
    const subscription_start_date = sub?.start_at
      ? new Date(sub.start_at * 1000).toISOString()
      : null;

    const subscription_end_date = sub?.charge_at
      ? new Date(sub.charge_at * 1000).toISOString()
      : null;

    /* ───────── Add Credits On Payment ───────── */
    const shouldAddCredits =
      event.event === "invoice.paid" || event.event === "subscription.charged";

    // console.log("💰 Credit Logic:", {
    //   event: event.event,
    //   shouldAddCredits,
    //   planId,
    //   creditsToAdd,
    // });

    /* ───────── Update User ───────── */
    const updateData: any = {
      subscription_id: sub?.id || invoice?.subscription_id || null,
      subscription_status,
      subscription_start_date,
      subscription_end_date,
      plan_id: planId,
      plan_name,
    };

    if (shouldAddCredits && creditsToAdd > 0) {
      updateData.credits = creditsToAdd;
      updateData.credits_max = creditsToAdd;
    }

    if (event.event === "subscription.cancelled") {
      updateData.credits = 0;
      updateData.credits_max = 0;
    }

    const { error: updateError } = await supabase
      .from("users")
      .update(updateData)
      .eq("id", user.id);

    if (updateError) {
      console.error(" Failed to update user:", updateError);
    } else {
      console.log(" User subscription updated");
    }

    /* ───────── Log Invoice ───────── */
    if (
      (event.event === "invoice.paid" ||
        event.event === "subscription.charged") &&
      invoice
    ) {
      const { error } = await supabase.from("invoices").insert({
        user_id: user.id,
        razorpay_invoice_id: invoice.id,
        razorpay_payment_id: payment?.id || null,
        razorpay_subscription_id: invoice.subscription_id,
        status: invoice.status,
        amount: invoice.amount / 100,
        short_url: invoice.short_url,
      });

      if (error) {
        console.error("❌ Invoice insert error:", error);
      } else {
        console.log("✅ Invoice saved");
      }
    }

    return NextResponse.json({ status: "success" }, { status: 200 });
  } catch (error: any) {
    console.error("💥 Webhook Error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
