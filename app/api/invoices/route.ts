// import { NextRequest, NextResponse } from "next/server";
// import Razorpay from "razorpay";

// // Initialize Razorpay instance with your secret key
// const instance = new Razorpay({
//   key_id: process.env.NEXT_PUBLIC_RAZORPAY_LIVE_KEY!,
//   key_secret: process.env.RAZORPAY_SECRET_KEY,
// });

// export async function GET(req: NextRequest) {
//   // Get the subscription_id from the query parameters
//   const { searchParams } = new URL(req.url);
//   const subscription_id = searchParams.get("subscription_id");

//   if (!subscription_id) {
//     return new NextResponse(
//       JSON.stringify({ message: "Subscription ID is required." }),
//       { status: 400 }
//     );
//   }

//   try {
//     // Fetch all invoices for the given subscription ID from Razorpay
//     const invoices = await instance.invoices.all({
//       subscription_id: subscription_id,
//     });

    

//     return NextResponse.json(invoices);

//   } catch (error) {
//     console.error("RAZORPAY INVOICE ERROR:", error);
//     const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
//     return new NextResponse(
//       JSON.stringify({ message: "Failed to fetch invoices.", error: errorMessage }),
//       { status: 500 }
//     );
//   }
// }















import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { cookies } from 'next/headers';

// Initialize Razorpay instance
const instance = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_LIVE_KEY!,
  key_secret: process.env.RAZORPAY_SECRET_KEY,
});

export async function GET() {
  const cookieStore = await cookies();

  // Create a Supabase client
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) { return cookieStore.get(name)?.value; },
        set(name: string, value: string, options: CookieOptions) { cookieStore.set(name, value, options); },
        remove(name: string, options: CookieOptions) { cookieStore.set(name, '', options); },
      },
    }
  );

  try {
    // 1. Authenticate the user
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return new NextResponse(JSON.stringify({ message: "Unauthorized" }), { status: 401 });
    }

    // 2. Get the user's subscription_id from your database
    const { data: userData, error: userError } = await supabase
      .from("users")
      .select("subscription_id")
      .eq("id", user.id)
      .single();

    if (userError || !userData?.subscription_id) {
      throw new Error("No active subscription found for this user.");
    }
    
    const subscriptionId = userData.subscription_id;

    // 3. Fetch all invoices for that specific subscription ID from Razorpay
    // 👇 THE FIX IS HERE
    const invoices = await instance.invoices.all({
      subscription_id: subscriptionId,
    });

    return NextResponse.json(invoices);

  } catch (error) {
    console.error("RAZORPAY INVOICE FETCH ERROR:", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return new NextResponse(
      JSON.stringify({ message: "Failed to fetch invoices.", error: errorMessage }),
      { status: 500 }
    );
  }
}












// import { NextResponse } from "next/server";
// import { createServerClient, type CookieOptions } from "@supabase/ssr";
// import { cookies } from "next/headers";

// /**
//  * ✅ Razorpay Invoice Route
//  * - Lazy initializes Razorpay (prevents build crash)
//  * - Authenticates via Supabase cookies or Authorization header
//  * - Fetches user's subscription_id from DB
//  * - Retrieves invoices from Razorpay
//  */

// function createRazorpayClient() {
//   const keyId = process.env.RAZORPAY_LIVE_KEY;
//   const keySecret = process.env.RAZORPAY_SECRET_KEY;

//   if (!keyId || !keySecret) {
//     console.error("❌ Razorpay credentials missing.");
//     return null;
//   }

//   // require inside function — avoids import-time error
//   // eslint-disable-next-line @typescript-eslint/no-var-requires
//   const Razorpay = require("razorpay");
//   return new Razorpay({
//     key_id: keyId,
//     key_secret: keySecret,
//   });
// }

// export async function GET(req: Request) {
//   // ✅ FIX: no `await` here
//   const cookieStore = cookies();

//   // ✅ Initialize Supabase Server Client
//   const supabase = createServerClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//     {
//       cookies: {
//         async get(name: string) {
//           return (await cookieStore).get(name)?.value;
//         },
//         // No-op for setting cookies in API routes
//         set(name: string, value: string, options: CookieOptions) {},
//         remove(name: string, options: CookieOptions) {},
//       },
//     }
//   );

//   // ✅ Optional: Accept Bearer token (Authorization header)
//   const authHeader = req.headers.get("authorization") || "";
//   const maybeToken = authHeader.startsWith("Bearer ")
//     ? authHeader.split(" ")[1]
//     : null;

//   if (maybeToken) {
//     try {
//       // @ts-ignore — supabase type doesn't expose setAuth
//       await (supabase.auth as any).setAuth(maybeToken);
//     } catch (err) {
//       console.error("Invalid bearer token:", err);
//       return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
//     }
//   }

//   // ✅ Create Razorpay instance lazily
//   const razorpay = createRazorpayClient();
//   if (!razorpay) {
//     return NextResponse.json(
//       {
//         message:
//           "Server misconfiguration: Missing RAZORPAY_LIVE_KEY or RAZORPAY_SECRET_KEY.",
//       },
//       { status: 500 }
//     );
//   }

//   try {
//     // 1️⃣ Authenticate user
//     const {
//       data: { user },
//       error: authError,
//     } = await supabase.auth.getUser();

//     if (authError || !user) {
//       return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
//     }

//     // 2️⃣ Get subscription_id from DB
//     const { data: userData, error: userError } = await supabase
//       .from("users")
//       .select("subscription_id")
//       .eq("id", user.id)
//       .single();

//     if (userError || !userData?.subscription_id) {
//       return NextResponse.json(
//         { message: "No active subscription found for this user." },
//         { status: 404 }
//       );
//     }

//     const subscriptionId = userData.subscription_id;

//     // 3️⃣ Fetch invoices for subscription
//     const invoices = await razorpay.invoices.all({
//       subscription_id: subscriptionId,
//     });

//     return NextResponse.json(invoices);
//   } catch (error: any) {
//     console.error("❌ RAZORPAY INVOICE FETCH ERROR:", error);
//     return NextResponse.json(
//       {
//         message: "Failed to fetch invoices.",
//         error: error?.message || "Unknown error",
//       },
//       { status: 500 }
//     );
//   }
// }
