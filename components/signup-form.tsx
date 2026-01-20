// "use client"

// import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { useState } from "react"
// import { useRouter } from "next/navigation"
// import { createClient } from "@/lib/client"
// import Link from "next/link"

// export default function SignUpForm() {
//   const [fullName, setFullName] = useState("")
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [message, setMessage] = useState("")
//   const [isSuccess, setIsSuccess] = useState(false)
//   const [loading, setLoading] = useState(false)

//   const supabase = createClient()
//   const router = useRouter()

//   async function handleSignUp(event: React.FormEvent) {
//     event.preventDefault()
//     setLoading(true)
//     setMessage("")
//     setIsSuccess(false)

//     try {
//       const { error } = await supabase.auth.signUp({
//         email,
//         password,
//         options: {
//           // Pass user's full name to be stored in the 'raw_user_meta_data'
//           data: {
//             full_name: fullName,
//           },
//         },
//       })

//       if (error) throw error

//       setIsSuccess(true)
//       setMessage("Success! Please check your email to verify your account.")
//       // Optionally, you can reset the form fields here
//       // setFullName(""); setEmail(""); setPassword("");

//     } catch (err: any) {
//       setIsSuccess(false)
//       setMessage(err.message || "Sign up failed. Please try again.")
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div className={cn("flex flex-col gap-6")}>
//       <Card className="overflow-hidden p-0">
//         <CardContent className="grid p-0">
//           <form className="p-6 md:p-8" onSubmit={handleSignUp}>
//             <div className="flex flex-col gap-6">
//               <div className="flex flex-col items-center text-center">
//                 <h1 className="text-2xl font-bold">Create an account</h1>
//                 <p className="text-muted-foreground text-balance">
//                   Enter your information to get started
//                 </p>
//               </div>

//               {message && (
//                 <div
//                   className={cn(
//                     "rounded-md p-4",
//                     isSuccess
//                       ? "bg-green-50 border border-green-200"
//                       : "bg-red-50 border border-red-200"
//                   )}
//                 >
//                   <p
//                     className={cn(
//                       "text-sm",
//                       isSuccess ? "text-green-600" : "text-red-600"
//                     )}
//                   >
//                     {message}
//                   </p>
//                 </div>
//               )}

//               <div className="grid gap-3">
//                 <Label htmlFor="fullName">Full Name</Label>
//                 <Input
//                   id="fullName"
//                   type="text"
//                   placeholder="John Doe"
//                   required
//                   value={fullName}
//                   onChange={(e) => setFullName(e.target.value)}
//                 />
//               </div>

//               <div className="grid gap-3">
//                 <Label htmlFor="email">Email</Label>
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="m@example.com"
//                   required
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>

//               <div className="grid gap-3">
//                 <Label htmlFor="password">Password</Label>
//                 <Input
//                   id="password"
//                   type="password"
//                   required
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>

//               <Button type="submit" className="w-full" disabled={loading}>
//                 {loading ? "Creating account..." : "Create Account"}
//               </Button>

//               <div className="mt-4 text-center text-sm">
//                 Already have an account?{" "}
//                 <Link href="/login" className="underline">
//                   Sign in
//                 </Link>
//               </div>
//             </div>
//           </form>

//           <div className="bg-muted relative hidden md:block">
//             <img
//               src="/placeholder.svg"
//               alt="Image"
//               className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
//             />
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }

// "use client"

// import { useState } from "react"
// import { createClient } from "@/lib/client"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Card, CardContent } from "@/components/ui/card"
// import Link from "next/link"
// import { cn } from "@/lib/utils"

// export default function SignUpForm() {
//   const [fullName, setFullName] = useState("")
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [message, setMessage] = useState("")
//   const [isSuccess, setIsSuccess] = useState(false)
//   const [loading, setLoading] = useState(false)

//   const supabase = createClient()

//   async function handleSignUp(event: React.FormEvent) {
//     event.preventDefault()
//     setLoading(true)
//     setMessage("")
//     setIsSuccess(false)

//     try {
//       const { error } = await supabase.auth.signUp({
//         email,
//         password,
//         options: {
//           // This 'data' object sends metadata that our SQL trigger can access.
//           data: {
//             full_name: fullName,
//           },
//         },
//       })

//       if (error) throw error

//       setIsSuccess(true)
//       setMessage("Success! Please check your email to verify your account.")

//     } catch (err: any) {
//       setIsSuccess(false)
//       setMessage(err.message || "Sign up failed. Please try again.")
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <Card>
//       <CardContent className="p-6 md:p-8">
//         <form onSubmit={handleSignUp}>
//           <div className="flex flex-col gap-6">
//             <div className="text-center">
//               <h1 className="text-2xl font-bold">Create an account</h1>
//               <p className="text-muted-foreground">Enter your details to get started</p>
//             </div>

//             {message && (
//               <div className={cn("rounded-md p-3 text-center", isSuccess ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800")}>
//                 <p className="text-sm">{message}</p>
//               </div>
//             )}

//             <div className="grid gap-2">
//               <Label htmlFor="fullName">Full Name</Label>
//               <Input
//                 id="fullName" type="text" placeholder="John Doe" required
//                 value={fullName} onChange={(e) => setFullName(e.target.value)}
//               />
//             </div>

//             <div className="grid gap-2">
//               <Label htmlFor="email">Email</Label>
//               <Input
//                 id="email" type="email" placeholder="m@example.com" required
//                 value={email} onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>

//             <div className="grid gap-2">
//               <Label htmlFor="password">Password</Label>
//               <Input
//                 id="password" type="password" required
//                 value={password} onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>

//             <Button type="submit" className="w-full" disabled={loading}>
//               {loading ? "Creating account..." : "Create Account"}
//             </Button>

//             <div className="mt-4 text-center text-sm">
//               Already have an account?{" "}
//               <Link href="/login" className="underline">
//                 Sign in
//               </Link>
//             </div>
//           </div>
//         </form>
//       </CardContent>
//     </Card>
//   )
// }

"use client";

import { useState } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { createClient } from "@/lib/client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { FaGoogle } from "react-icons/fa";

export default function SignUpForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const supabase = createClient();

  async function handleSignUp(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    setMessage("");
    setIsSuccess(false);

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      });

      if (error) throw error;

      setIsSuccess(true);
      setMessage("Success! Please check your email to verify your account.");
    } catch (err: any) {
      setIsSuccess(false);
      setMessage(err.message || "Sign up failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }
  async function handleGoogleLogin() {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) throw error;
    } catch (err: any) {
      setMessage(err.message || "Google login failed. Please try again.");
    }
  }

  return (
    <form
      onSubmit={handleSignUp}
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <FieldGroup>
        {/* Header */}
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="text-muted-foreground text-sm">
            Get started with QualiQ AI
          </p>
        </div>

        {/* Message */}
        {message && (
          <div
            className={cn(
              "rounded-md p-3 text-sm text-center",
              isSuccess
                ? "bg-green-50 border border-green-200 text-green-700"
                : "bg-red-50 border border-red-200 text-red-600"
            )}
          >
            {message}
          </div>
        )}

        {/* Full Name */}
        <Field>
          <FieldLabel htmlFor="fullName">Full Name</FieldLabel>
          <Input
            id="fullName"
            type="text"
            placeholder="John Doe"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </Field>

        {/* Email */}
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Field>

        {/* Password */}
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Field>

        {/* Submit */}
        <Field>
          <Button type="submit" disabled={loading}>
            {loading ? "Creating account..." : "Create Account"}
          </Button>
        </Field>

        {/* Divider */}
        <FieldSeparator>Or continue with</FieldSeparator>

        {/* Footer */}
        <Field>
          <Button
            variant="outline"
            type="button"
            className="gap-2"
            onClick={handleGoogleLogin}
          >
            <FaGoogle className="w-4 h-4" />
            Login with Google
          </Button>
          <FieldDescription className="text-center">
            Already have an account?{" "}
            <Link href="/login" className="underline underline-offset-4">
              Sign in
            </Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
