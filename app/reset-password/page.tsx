// "use client"

// import { useState } from "react"
// import { useRouter } from "next/navigation"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { createClient } from "@/lib/client"

// export default function ResetPassword() {
//   const supabase = createClient()
//   const router = useRouter()

//   const [password, setPassword] = useState("")
//   const [confirmPassword, setConfirmPassword] = useState("")
//   const [message, setMessage] = useState("")
//   const [loading, setLoading] = useState(false)

//   async function handleReset(e: React.FormEvent) {
//     e.preventDefault()

//     if (password !== confirmPassword) {
//       setMessage("Passwords do not match.")
//       return
//     }

//     setLoading(true)

//     const { error } = await supabase.auth.updateUser({ password })

//     if (error) {
//       setMessage(error.message)
//     } else {
//       setMessage("Password updated successfully! Redirecting to login...")
//       setTimeout(() => {
//         router.push("/workspace/dashboard") // redirect to login page
//       }, 2000)
//     }

//     setLoading(false)
//   }

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <form onSubmit={handleReset} className="w-96 p-6 border rounded-md shadow-md space-y-4">
//         <h1 className="text-xl font-bold">Reset Password</h1>

//         {message && (
//           <p className="text-sm text-red-600">
//             {message}
//           </p>
//         )}

//         <div className="grid gap-2">
//           <Label htmlFor="password">New Password</Label>
//           <Input
//             id="password"
//             type="password"
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>

//         <div className="grid gap-2">
//           <Label htmlFor="confirmPassword">Confirm Password</Label>
//           <Input
//             id="confirmPassword"
//             type="password"
//             required
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           />
//         </div>

//         <Button type="submit" className="w-full" disabled={loading}>
//           {loading ? "Updating..." : "Update Password"}
//         </Button>
//       </form>
//     </div>
//   )
// }















// "use client"

// import { useState } from "react"
// import { useRouter } from "next/navigation"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { createClient } from "@/lib/client"
// import { Eye, EyeOff } from "lucide-react"

// export default function ResetPassword() {
//   const supabase = createClient()
//   const router = useRouter()

//   const [password, setPassword] = useState("")
//   const [confirmPassword, setConfirmPassword] = useState("")
//   const [message, setMessage] = useState("")
//   const [loading, setLoading] = useState(false)

//   // 👁️ password visibility toggles
//   const [showPassword, setShowPassword] = useState(false)
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false)

//   async function handleReset(e: React.FormEvent) {
//     e.preventDefault()

//     if (password !== confirmPassword) {
//       setMessage("Passwords do not match.")
//       return
//     }

//     setLoading(true)

//     const { error } = await supabase.auth.updateUser({ password })

//     if (error) {
//       setMessage(error.message)
//     } else {
//       setMessage("Password updated successfully! Redirecting to dashboard...")
//       setTimeout(() => {
//         router.push("/workspace/dashboard")
//       }, 2000)
//     }

//     setLoading(false)
//   }

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <form
//         onSubmit={handleReset}
//         className="w-96 p-6 border rounded-md shadow-md space-y-4"
//       >
//         <h1 className="text-xl font-bold">Reset Password</h1>

//         {message && <p className="text-sm text-red-600">{message}</p>}

//        {/* New Password */}
// <div className="grid gap-2 relative">
//   <Label htmlFor="password">New Password</Label>
//   <div className="relative">
//     <Input
//       id="password"
//       type={showPassword ? "text" : "password"}
//       required
//       value={password}
//       onChange={(e) => setPassword(e.target.value)}
//       className="pr-10" // add padding so text doesn't overlap icon
//     />
//     <button
//       type="button"
//       onClick={() => setShowPassword(!showPassword)}
//       className="absolute inset-y-0 right-3 flex items-center text-gray-500"
//     >
//       {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//     </button>
//   </div>
// </div>

// {/* Confirm Password */}
// <div className="grid gap-2 relative">
//   <Label htmlFor="confirmPassword">Confirm Password</Label>
//   <div className="relative">
//     <Input
//       id="confirmPassword"
//       type={showConfirmPassword ? "text" : "password"}
//       required
//       value={confirmPassword}
//       onChange={(e) => setConfirmPassword(e.target.value)}
//       className="pr-10"
//     />
//     <button
//       type="button"
//       onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//       className="absolute inset-y-0 right-3 flex items-center text-gray-500"
//     >
//       {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//     </button>
//   </div>
// </div>


//         <Button type="submit" className="w-full" disabled={loading}>
//           {loading ? "Updating..." : "Update Password"}
//         </Button>
//       </form>
//     </div>
//   )
// }









"use client"

import { JSX, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { createClient } from "@/lib/client"
import { Eye, EyeOff, AlertCircle, CheckCircle2 } from "lucide-react"

// 🔔 Reusable AlertBox
function AlertBox({
  type,
  message,
}: {
  type: "success" | "error"
  message: string
}) {
  const baseStyle =
    "flex items-center p-3 mb-4 text-sm rounded-lg border"

  const styles: Record<string, string> = {
    success:
      "text-green-700 bg-green-50 border-green-300 dark:text-green-400 dark:bg-green-900/30 dark:border-green-800",
    error:
      "text-red-700 bg-red-50 border-red-300 dark:text-red-400 dark:bg-red-900/30 dark:border-red-800",
  }

  const icons: Record<string, JSX.Element> = {
    success: <CheckCircle2 className="w-5 h-5 mr-2" />,
    error: <AlertCircle className="w-5 h-5 mr-2" />,
  }

  return (
    <div className={`${baseStyle} ${styles[type]}`} role="alert">
      {icons[type]}
      <span>{message}</span>
    </div>
  )
}

export default function ResetPassword() {
  const supabase = createClient()
  const router = useRouter()

  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [message, setMessage] = useState<{
    type: "success" | "error"
    text: string
  } | null>(null)
  const [loading, setLoading] = useState(false)

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  async function handleReset(e: React.FormEvent) {
    e.preventDefault()

    if (password !== confirmPassword) {
      setMessage({ type: "error", text: "Passwords do not match." })
      return
    }

    setLoading(true)

    const { error } = await supabase.auth.updateUser({ password })

    if (error) {
      setMessage({ type: "error", text: error.message })
    } else {
      setMessage({
        type: "success",
        text: "Password updated successfully! Redirecting to dashboard...",
      })
      setTimeout(() => {
        router.push("/workspace/dashboard")
      }, 2000)
    }

    setLoading(false)
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleReset}
        className="w-96 p-6 border rounded-md shadow-md space-y-4"
      >
        <h1 className="text-xl font-bold">Reset Password</h1>

        {/* ✅ Show alert if message exists */}
        {message && <AlertBox type={message.type} message={message.text} />}

        {/* New Password */}
        <div className="grid gap-2 relative">
          <Label htmlFor="password">New Password</Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="grid gap-2 relative">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <div className="relative">
            <Input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="pr-10"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500"
            >
              {showConfirmPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
          </div>
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Updating..." : "Update Password"}
        </Button>
      </form>
    </div>
  )
}
