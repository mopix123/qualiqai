// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { createClient } from "@/lib/client"

// export default function ForgotPassword() {
//   const supabase = createClient()
//   const [email, setEmail] = useState("")
//   const [message, setMessage] = useState("")
//   const [loading, setLoading] = useState(false)

//   async function handleResetPassword(e: React.FormEvent) {
//     e.preventDefault()
//     setLoading(true)

//     const { error } = await supabase.auth.resetPasswordForEmail(email, {
//       redirectTo: `${window.location.origin}/reset-password`,
//     })

//     if (error) {
//       setMessage(error.message)
//     } else {
//       setMessage("Check your email for the password reset link.")
//     }

//     setLoading(false)
//   }

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <form onSubmit={handleResetPassword} className="w-96 p-6 border rounded-md shadow-md space-y-4">
//         <h1 className="text-xl font-bold">Forgot Password</h1>
//         <Label htmlFor="email">Email</Label>
//         <Input
//           id="email"
//           type="email"
//           placeholder="m@example.com"
//           required
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <Button type="submit" className="w-full" disabled={loading}>
//           {loading ? "Sending..." : "Send Reset Link"}
//         </Button>
//         {message && <p className="text-sm text-muted-foreground">{message}</p>}
//       </form>
//     </div>
//   )
// }

"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createClient } from "@/lib/client";

export default function ForgotPasswordPage() {
  const supabase = createClient();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleResetPassword(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Check your email for the password reset link.");
    }

    setLoading(false);
  }

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      {/* LEFT SIDE */}
      <div className="flex flex-col gap-4 p-6 md:p-10">
        {/* LOGO */}
        <div className="flex justify-center gap-2 md:justify-start">
          <a
            href="https://qualiqai.com/"
            className="flex items-center gap-2 font-medium text-2xl"
          >
            <div className="flex size-8 items-center justify-center">
              <Image
                src="/Logo_quliqai.png"
                alt="QualiQ AI Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            QualiQ AI
          </a>
        </div>

        {/* FORM */}
        <div className="flex flex-1 items-center justify-center">
          <form
            onSubmit={handleResetPassword}
            className="w-full max-w-sm space-y-4 border rounded-md p-6 shadow-sm"
          >
            <h1 className="text-2xl font-bold">Forgot Password</h1>
            <p className="text-sm text-muted-foreground">
              Enter your email and we’ll send you a reset link.
            </p>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Sending..." : "Send Reset Link"}
            </Button>

            {message && (
              <p className="text-sm text-muted-foreground">{message}</p>
            )}
          </form>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="bg-muted relative hidden lg:block">
        <img
          src="/loginandsignup.png"
          alt="Forgot password background"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.5]"
        />
      </div>
    </div>
  );
}
