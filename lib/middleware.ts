import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { pathname } = request.nextUrl;

  // Pages allowed without login
  const publicPages = [
    "/login",
    "/forgot-password",
    "/reset-password",
    "/signup",
    "/api/webhooks/razorpay",
    "/auth/callback",
    "/auth/post-login",
  ];

  if (!user) {
    // If user is not logged in and tries to access any page NOT public → redirect to /login
    if (!publicPages.includes(pathname)) {
      const url = request.nextUrl.clone();
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }
  } else {
    // If user is logged in and visits /login, /forgot-password, or /reset-password → redirect to dashboard
    if (publicPages.includes(pathname)) {
      const url = request.nextUrl.clone();
      url.pathname = "/workspace/dashboard";
      return NextResponse.redirect(url);
    }
  }

  return supabaseResponse;
}

//////    right code subscribe and unscription user

// import { createServerClient } from '@supabase/ssr'
// import { NextResponse, type NextRequest } from 'next/server'

// export async function updateSession(request: NextRequest) {
//   let supabaseResponse = NextResponse.next({
//     request,
//   })

//   const supabase = createServerClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//     {
//       cookies: {
//         getAll() {
//           return request.cookies.getAll()
//         },
//         setAll(cookiesToSet) {
//           cookiesToSet.forEach(({ name, value, options }) =>
//             request.cookies.set(name, value)
//           )
//           supabaseResponse = NextResponse.next({
//             request,
//           })
//           cookiesToSet.forEach(({ name, value, options }) =>
//             supabaseResponse.cookies.set(name, value, options)
//           )
//         },
//       },
//     }
//   )

//   const {
//     data: { user },
//   } = await supabase.auth.getUser()

//   const { pathname } = request.nextUrl

//   // --- Define your application's routes ---
//   const publicPages = ['/login', '/signup', '/forgot-password', '/reset-password']
//   const subscriptionPage = '/workspace/subscription' // The page for unsubscribed users

//   // --- Logic for Unauthenticated Users ---
//   if (!user) {
//     // Allow access to public pages and the Razorpay webhook API
//     if (publicPages.includes(pathname) || pathname.startsWith('/api/webhooks')) {
//       return supabaseResponse
//     }
//     // For all other pages, redirect to login
//     return NextResponse.redirect(new URL('/login', request.url))
//   }

//   // --- Logic for Authenticated Users ---
//   if (user) {
//     // 1. Fetch user's subscription status from your database
//     const { data: userData, error } = await supabase
//       .from('users') // Assumes you have a 'users' table
//       .select('subscription_status')
//       .eq('id', user.id)
//       .single()

//     // Handle potential error during fetch, though unlikely
//     if (error && error.code !== 'PGRST116') { // PGRST116 means no rows found, which is a valid state
//         console.error("Middleware DB Error:", error.message);
//         // Decide what to do in case of a DB error, maybe redirect to an error page or login
//         return NextResponse.redirect(new URL('/login', request.url));
//     }

//     const isSubscribed = userData?.subscription_status === 'active';

//     // 2. Apply rules based on subscription status
//     if (isSubscribed) {
//       // If a subscribed user tries to access a public login/signup page OR the subscription page,
//       // redirect them to their dashboard.
//       if (publicPages.includes(pathname) || pathname === subscriptionPage) {
//         return NextResponse.redirect(new URL('/workspace/dashboard', request.url))
//       }
//     } else {
//       // If a user is NOT subscribed, they can ONLY access the subscription page.
//       // Force redirect them to the subscription page from anywhere else.
//       if (pathname !== subscriptionPage) {
//         return NextResponse.redirect(new URL(subscriptionPage, request.url))
//       }
//     }
//   }

//   return supabaseResponse
// }

// import { createServerClient } from '@supabase/ssr'
// import { NextResponse, type NextRequest } from 'next/server'

// export async function updateSession(request: NextRequest) {
//   let supabaseResponse = NextResponse.next({
//     request,
//   })

//   const supabase = createServerClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//     {
//       cookies: {
//         getAll() {
//           return request.cookies.getAll()
//         },
//         setAll(cookiesToSet) {
//           cookiesToSet.forEach(({ name, value, options }) =>
//             request.cookies.set(name, value)
//           )
//           supabaseResponse = NextResponse.next({
//             request,
//           })
//           cookiesToSet.forEach(({ name, value, options }) =>
//             supabaseResponse.cookies.set(name, value, options)
//           )
//         },
//       },
//     }
//   )

//   const {
//     data: { user },
//   } = await supabase.auth.getUser()

//   const { pathname } = request.nextUrl

//   // --- Define your application's routes ---
//   const publicPages = ['/login', '/signup', '/forgot-password', '/reset-password']
//   const subscriptionPage = '/workspace/subscription' // The page for unsubscribed users

//   // --- Logic for Unauthenticated Users ---
//   if (!user) {
//     if (publicPages.includes(pathname) || pathname.startsWith('/api/webhooks')) {
//       return supabaseResponse
//     }
//     return NextResponse.redirect(new URL('/login', request.url))
//   }

//   // --- Logic for Authenticated Users ---
//   if (user) {
//     const { data: userData, error } = await supabase
//       .from('users')
//       .select('subscription_status')
//       .eq('id', user.id)
//       .single()

//     if (error && error.code !== 'PGRST116') {
//       console.error("Middleware DB Error:", error.message);
//       return NextResponse.redirect(new URL('/login', request.url));
//     }

//     const isSubscribed = userData?.subscription_status === 'active';

//     // 2. Apply rules based on subscription status
//     if (isSubscribed) {
//       // **THE FIX IS HERE:**
//       // If a subscribed user tries to access a public login/signup page, redirect them.
//       // They are now ALLOWED to access their subscription page.
//       if (publicPages.includes(pathname)) {
//         return NextResponse.redirect(new URL('/workspace/dashboard', request.url))
//       }
//     } else {
//       // If a user is NOT subscribed, they can ONLY access the subscription page.
//       // Force redirect them to the subscription page from anywhere else.
//       if (pathname !== subscriptionPage) {
//         return NextResponse.redirect(new URL(subscriptionPage, request.url))
//       }
//     }
//   }

//   return supabaseResponse
// }

// import { createServerClient } from '@supabase/ssr'
// import { NextResponse, type NextRequest } from 'next/server'

// export async function updateSession(request: NextRequest) {
//   let supabaseResponse = NextResponse.next({
//     request,
//   })

//   const supabase = createServerClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//     {
//       cookies: {
//         getAll() {
//           return request.cookies.getAll()
//         },
//         setAll(cookiesToSet) {
//           cookiesToSet.forEach(({ name, value, options }) =>
//             request.cookies.set(name, value)
//           )
//           supabaseResponse = NextResponse.next({
//             request,
//           })
//           cookiesToSet.forEach(({ name, value, options }) =>
//             supabaseResponse.cookies.set(name, value, options)
//           )
//         },
//       },
//     }
//   )

//   const {
//     data: { user },
//   } = await supabase.auth.getUser()

//   const { pathname } = request.nextUrl

//   const publicPages = ['/login', '/signup', '/forgot-password', '/reset-password']
//   const subscriptionPage = '/workspace/subscription'

//   if (!user) {
//     if (publicPages.includes(pathname) || pathname.startsWith('/api/webhooks')) {
//       return supabaseResponse
//     }
//     return NextResponse.redirect(new URL('/login', request.url))
//   }

//   if (user) {
//     const { data: userData, error } = await supabase
//       .from('users')
//       .select('subscription_status')
//       .eq('id', user.id)
//       .single()

//     if (error && error.code !== 'PGRST116') {
//       console.error("Middleware DB Error:", error.message);
//       return NextResponse.redirect(new URL('/login', request.url));
//     }

//     const isSubscribed = userData?.subscription_status === 'active';

//     if (isSubscribed) {
//       if (publicPages.includes(pathname) || pathname === subscriptionPage) {
//         return NextResponse.redirect(new URL('/workspace/dashboard', request.url))
//       }
//     } else {
//       // 👇 **THIS IS THE MODIFIED SECTION** 👇
//       // An array of pages that unsubscribed users are allowed to access.
//       const unsubscribedAllowedPages = [
//         '/workspace/subscription',
//         '/workspace/billing'
//       ];

//       // If the user is not subscribed and the page is NOT in the allowed list,
//       // redirect them to the main subscription page.
//       if (!unsubscribedAllowedPages.includes(pathname)) {
//         return NextResponse.redirect(new URL(subscriptionPage, request.url))
//       }
//     }
//   }

//   return supabaseResponse
// }
