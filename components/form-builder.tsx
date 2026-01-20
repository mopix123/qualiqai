








// "use client"

// import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardDescription,
//   CardAction,
// } from "@/components/ui/card"
// import { Label } from "@/components/ui/label"
// import {
//   Tabs,
//   TabsList,
//   TabsTrigger,
//   TabsContent,
// } from "@/components/ui/tabs"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
// import { useState } from "react"
// import { Input } from "./ui/input"
// import { CheckIcon, CopyIcon } from "lucide-react"

// export function Formbuilder() {
//     const [isCopied, setIsCopied] = useState(false)

//   const textToCopy = `
// "use client"

// import * as React from "react"
// import {
//   IconCheck,
//   IconCopy,
//   IconInfoCircle,
//   IconStar,
// } from "@tabler/icons-react"

// import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
// import {
//   InputGroup,
//   InputGroupAddon,
//   InputGroupButton,
//   InputGroupInput,
// } from "@/components/ui/input-group"
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover"

// export function InputGroupButtonExample() {
//   const { copyToClipboard, isCopied } = useCopyToClipboard()
//   const [isFavorite, setIsFavorite] = React.useState(false)

//   return (
//     <div className="grid w-full max-w-sm gap-6">
//       <InputGroup>
//         <InputGroupInput placeholder="https://x.com/shadcn" readOnly />
//         <InputGroupAddon align="inline-end">
//           <InputGroupButton
//             aria-label="Copy"
//             title="Copy"
//             size="icon-xs"
//             onClick={() => {
//               copyToClipboard("https://x.com/shadcn")
//             }}
//           >
//             {isCopied ? <IconCheck /> : <IconCopy />}
//           </InputGroupButton>
//         </InputGroupAddon>
//       </InputGroup>
//       <InputGroup className="[--radius:9999px]">
//         <Popover>
//           <PopoverTrigger asChild>
//             <InputGroupAddon>
//               <InputGroupButton variant="secondary" size="icon-xs">
//                 <IconInfoCircle />
//               </InputGroupButton>
//             </InputGroupAddon>
//           </PopoverTrigger>
//           <PopoverContent
//             align="start"
//             className="flex flex-col gap-1 rounded-xl text-sm"
//           >
//             <p className="font-medium">Your connection is not secure.</p>
//             <p>You should not enter any sensitive information on this site.</p>
//           </PopoverContent>
//         </Popover>
//         <InputGroupAddon className="text-muted-foreground pl-1.5">
//           https://
//         </InputGroupAddon>
//         <InputGroupInput id="input-secure-19" />
//         <InputGroupAddon align="inline-end">
//           <InputGroupButton
//             onClick={() => setIsFavorite(!isFavorite)}
//             size="icon-xs"
//           >
//             <IconStar
//               data-favorite={isFavorite}
//               className="data-[favorite=true]:fill-blue-600 data-[favorite=true]:stroke-blue-600"
//             />
//           </InputGroupButton>
//         </InputGroupAddon>
//       </InputGroup>
//       <InputGroup>
//         <InputGroupInput placeholder="Type to search..." />
//         <InputGroupAddon align="inline-end">
//           <InputGroupButton variant="secondary">Search</InputGroupButton>
//         </InputGroupAddon>
//       </InputGroup>
//     </div>
//   )
// }

// `

//   const copyToClipboard = async () => {
//     await navigator.clipboard.writeText(textToCopy)
//     setIsCopied(true)
//     setTimeout(() => setIsCopied(false), 2000)
//   }
    
//   return (
//     <div className="flex h-screen w-full flex-col gap-6"> {/* full height container */}
//       <Tabs defaultValue="outline" className="flex flex-1 flex-col">
//         {/* Header */}
//         <div className="flex items-center justify-between px-4 lg:px-6">
//           <Label htmlFor="view-selector" className="sr-only">
//             View
//           </Label>

//           {/* Mobile Dropdown */}
//           <Select defaultValue="outline">
//             <SelectTrigger className="flex w-fit lg:hidden" id="view-selector">
//               <SelectValue placeholder="Select a view" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="template">template</SelectItem>
//               <SelectItem value="past-performance">Past Performance</SelectItem>
//               <SelectItem value="key-personnel">Key Personnel</SelectItem>
//               <SelectItem value="focus-documents">Focus Documents</SelectItem>
//             </SelectContent>
//           </Select>

//           {/* Desktop Tabs */}
//           <TabsList className="hidden lg:flex">
//             <TabsTrigger value="template">Template</TabsTrigger>
//             <TabsTrigger value="past-performance">Past Performance</TabsTrigger>
//             <TabsTrigger value="key-personnel">Key Personnel</TabsTrigger>
//             <TabsTrigger value="focus-documents">Focus Documents</TabsTrigger>
//           </TabsList>
//         </div>

//         {/* Tabs Content */}
//         <div className="flex-1 overflow-hidden"> {/* ensures full height for tab area */}
//           <TabsContent
//             value="template"
//             className="flex w-full flex-wrap gap-4 overflow-auto p-4 lg:p-6"
//           >
//             {/* Total Leads Captured */}
//             <Card className="flex-1 min-w-[250px]">
//               <CardHeader>
//                 <CardTitle className="text-2xl font-semibold flex items-center justify-between">
//                  Contact Form #1
//                 </CardTitle>
//                 <CardDescription>Total Leads Captured</CardDescription>
//                  <div className="relative">
//       <pre className="w-full overflow-x-auto whitespace-pre-wrap rounded-lg border bg-muted p-2 text-sm text-muted-foreground leading-relaxed max-h-[400px] overflow-y-auto">
//         {textToCopy}
//       </pre>

//       <button
//         onClick={copyToClipboard}
//         className="absolute top-3 right-3 rounded-md p-2 hover:bg-accent"
//         aria-label="Copy text"
//         title="Copy text"
//       >
//         {isCopied ? (
//           <CheckIcon className="h-4 w-4 text-white-200" />
//         ) : (
//           <CopyIcon className="h-4 w-4 text-muted-foreground" />
//         )}
//       </button>
//     </div>

               
//               </CardHeader>
//             </Card>



       
//           </TabsContent>

//           <TabsContent
//             value="past-performance"
//             className="flex h-full w-full flex-col items-center justify-center px-4 lg:px-6"
//           >
//             <div className="h-full w-full rounded-lg border border-dashed flex items-center justify-center text-muted-foreground">
//               Past Performance Content Area
//             </div>
//           </TabsContent>

//           <TabsContent
//             value="key-personnel"
//             className="flex h-full w-full flex-col items-center justify-center px-4 lg:px-6"
//           >
//             <div className="h-full w-full rounded-lg border border-dashed flex items-center justify-center text-muted-foreground">
//               Key Personnel Content Area
//             </div>
//           </TabsContent>

//           <TabsContent
//             value="focus-documents"
//             className="flex h-full w-full flex-col items-center justify-center px-4 lg:px-6"
//           >
//             <div className="h-full w-full rounded-lg border border-dashed flex items-center justify-center text-muted-foreground">
//               Focus Documents Content Area
//             </div>
//           </TabsContent>
//         </div>
//       </Tabs>
//     </div>
//   )
// }











// "use client"

// import { useEffect, useState } from "react"
// import { createClient } from "@supabase/supabase-js"
// import { CheckIcon, CopyIcon } from "lucide-react"

// import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardDescription,
// } from "@/components/ui/card"
// import { Label } from "@/components/ui/label"
// import {
//   Tabs,
//   TabsList,
//   TabsTrigger,
//   TabsContent,
// } from "@/components/ui/tabs"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
// import { useAuth } from "@/contexts/AuthContext"

// // ✅ Initialize Supabase Client
// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// )

// export function Formbuilder() {
//      const { user } = useAuth();
//   const [isCopied, setIsCopied] = useState(false)
//   const [formCode, setFormCode] = useState<string>("Loading...")
//   const [loading, setLoading] = useState(true)

//   // ✅ Fetch form code from Supabase
//   useEffect(() => {
//     const fetchFormCode = async () => {
//         if (!user) return;
//       setLoading(true);
//       try {
//         let query = supabase
//           .from("leadform")
//           .select("*")
//           .eq("user_id", user.id)
//           .order("id", { ascending: false })

//         const { data, error } = await query

//         if (error) throw error

//         if (data && data.length > 0) {
//           setFormCode(data[0].form_code || "No code found")
//         } else {
//           setFormCode("No forms found for this user.")
//         }
//       } catch (err: any) {
//         console.error("Error fetching form code:", err.message)
//         setFormCode("Error loading form code.")
//       } finally {
//         setLoading(false)
//       }
//     }

//     if (user?.id) {
//       fetchFormCode()
//     }
//   }, [user])

//   // ✅ Copy to clipboard
//   const copyToClipboard = async () => {
//     await navigator.clipboard.writeText(formCode)
//     setIsCopied(true)
//     setTimeout(() => setIsCopied(false), 2000)
//   }

//   return (
//     <div className="flex h-screen w-full flex-col gap-6">
//       <Tabs defaultValue="template" className="flex flex-1 flex-col">
//         {/* Header */}
//         <div className="flex items-center justify-between px-4 lg:px-6">
//           <Label htmlFor="view-selector" className="sr-only">
//             View
//           </Label>

//           {/* Mobile Dropdown */}
//           <Select defaultValue="template">
//             <SelectTrigger className="flex w-fit lg:hidden" id="view-selector">
//               <SelectValue placeholder="Select a view" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="template">Template</SelectItem>
//               <SelectItem value="past-performance">Past Performance</SelectItem>
//               <SelectItem value="key-personnel">Key Personnel</SelectItem>
//               <SelectItem value="focus-documents">Focus Documents</SelectItem>
//             </SelectContent>
//           </Select>

//           {/* Desktop Tabs */}
//           <TabsList className="hidden lg:flex">
//             <TabsTrigger value="template">Template</TabsTrigger>
//             <TabsTrigger value="past-performance">Past Performance</TabsTrigger>
//             <TabsTrigger value="key-personnel">Key Personnel</TabsTrigger>
//             <TabsTrigger value="focus-documents">Focus Documents</TabsTrigger>
//           </TabsList>
//         </div>

//         {/* Tabs Content */}
//         <div className="flex-1 overflow-hidden">
//           <TabsContent
//             value="template"
//             className="flex w-full flex-wrap gap-4 overflow-auto p-4 lg:p-6"
//           >
//             {/* Template Card */}
//             <Card className="flex-1 min-w-[250px]">
//               <CardHeader>
//                 <CardTitle className="text-2xl font-semibold flex items-center justify-between">
//                   Contact Form #1
//                 </CardTitle>
//                 <CardDescription>Form Embed Code</CardDescription>

//                 {/* Code Display */}
//                 <div className="relative">
//                   <pre className="w-full overflow-x-auto whitespace-pre-wrap rounded-lg border bg-muted p-2 text-sm text-muted-foreground leading-relaxed max-h-[400px] overflow-y-auto">
//                     {loading ? "Loading..." : formCode}
//                   </pre>

//                   <button
//                     onClick={copyToClipboard}
//                     className="absolute top-3 right-3 rounded-md p-2 hover:bg-accent"
//                     aria-label="Copy text"
//                     title="Copy text"
//                   >
//                     {isCopied ? (
//                       <CheckIcon className="h-4 w-4 text-green-500" />
//                     ) : (
//                       <CopyIcon className="h-4 w-4 text-muted-foreground" />
//                     )}
//                   </button>
//                 </div>
//               </CardHeader>
//             </Card>
//           </TabsContent>

//           <TabsContent
//             value="past-performance"
//             className="flex h-full w-full flex-col items-center justify-center px-4 lg:px-6"
//           >
//             <div className="h-full w-full rounded-lg border border-dashed flex items-center justify-center text-muted-foreground">
//               Past Performance Content Area
//             </div>
//           </TabsContent>

//           <TabsContent
//             value="key-personnel"
//             className="flex h-full w-full flex-col items-center justify-center px-4 lg:px-6"
//           >
//             <div className="h-full w-full rounded-lg border border-dashed flex items-center justify-center text-muted-foreground">
//               Key Personnel Content Area
//             </div>
//           </TabsContent>

//           <TabsContent
//             value="focus-documents"
//             className="flex h-full w-full flex-col items-center justify-center px-4 lg:px-6"
//           >
//             <div className="h-full w-full rounded-lg border border-dashed flex items-center justify-center text-muted-foreground">
//               Focus Documents Content Area
//             </div>
//           </TabsContent>
//         </div>
//       </Tabs>
//     </div>
//   )
// }















// "use client"

// import { useEffect, useState } from "react"
// import { createClient } from "@/lib/client"
// import { useAuth } from "@/contexts/AuthContext"
// import { CheckIcon, CopyIcon } from "lucide-react"

// import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardDescription,
// } from "@/components/ui/card"
// import { Label } from "@/components/ui/label"
// import {
//   Tabs,
//   TabsList,
//   TabsTrigger,
//   TabsContent,
// } from "@/components/ui/tabs"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"

// export default function Formbuilder() {
//   const { user } = useAuth()
//   const [isCopied, setIsCopied] = useState(false)
//   const [formCode, setFormCode] = useState<string>("Loading...")
//   const [loading, setLoading] = useState(true)

//   const supabase = createClient()

//   // ✅ Fetch form code from Supabase
//   useEffect(() => {
//     const fetchFormCode = async () => {
//       if (!user?.id) return

//       setLoading(true)
//       try {
//         const { data, error } = await supabase
//           .from("formbuilder")
//           .select("*")
//           .eq("user_id", user.id)
//           .order("id", { ascending: false })

//         if (error) throw error

//         if (data && data.length > 0) {
//           setFormCode(data[0].form_code || "No code found")
//         } else {
//           setFormCode("No forms found for this user.")
//         }
//       } catch (err: any) {
//         console.error("Error fetching form code:", err.message)
//         setFormCode("Error loading form code.")
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchFormCode()
//   }, [user])

//   // ✅ Copy to clipboard
//   const copyToClipboard = async () => {
//     await navigator.clipboard.writeText(formCode)
//     setIsCopied(true)
//     setTimeout(() => setIsCopied(false), 2000)
//   }

//   return (
//     <div className="flex h-screen w-full flex-col gap-6">
//       <Tabs defaultValue="template" className="flex flex-1 flex-col">
//         {/* Header */}
//         <div className="flex items-center justify-between px-4 lg:px-6">
//           <Label htmlFor="view-selector" className="sr-only">
//             View
//           </Label>

//           {/* Mobile Dropdown */}
//           <Select defaultValue="template">
//             <SelectTrigger className="flex w-fit lg:hidden" id="view-selector">
//               <SelectValue placeholder="Select a view" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="template">Template</SelectItem>
//               <SelectItem value="past-performance">Past Performance</SelectItem>
//               <SelectItem value="key-personnel">Key Personnel</SelectItem>
//               <SelectItem value="focus-documents">Focus Documents</SelectItem>
//             </SelectContent>
//           </Select>

//           {/* Desktop Tabs */}
//           <TabsList className="hidden lg:flex">
//             <TabsTrigger value="template">Template</TabsTrigger>
//             <TabsTrigger value="past-performance">Past Performance</TabsTrigger>
//             <TabsTrigger value="key-personnel">Key Personnel</TabsTrigger>
//             <TabsTrigger value="focus-documents">Focus Documents</TabsTrigger>
//           </TabsList>
//         </div>

//         {/* Tabs Content */}
//         <div className="flex-1 overflow-hidden">
//           <TabsContent
//             value="template"
//             className="flex w-full flex-wrap gap-4 overflow-auto p-4 lg:p-6"
//           >
//             {/* Template Card */}
//             <Card className="flex-1 min-w-[250px]">
//               <CardHeader>
//                 <CardTitle className="text-2xl font-semibold flex items-center justify-between">
//                   Contact Form #1
//                 </CardTitle>
//                 <CardDescription>Form Embed Code</CardDescription>

//                 {/* Code Display */}
//                 <div className="relative">
//                   <pre className="w-full overflow-x-auto whitespace-pre-wrap rounded-lg border bg-muted p-2 text-sm text-muted-foreground leading-relaxed max-h-[400px] overflow-y-auto">
//                     {loading ? "Loading..." : formCode}
//                   </pre>

//                   <button
//                     onClick={copyToClipboard}
//                     className="absolute top-3 right-3 rounded-md p-2 hover:bg-accent"
//                     aria-label="Copy text"
//                     title="Copy text"
//                   >
//                     {isCopied ? (
//                       <CheckIcon className="h-4 w-4 text-green-500" />
//                     ) : (
//                       <CopyIcon className="h-4 w-4 text-muted-foreground" />
//                     )}
//                   </button>
//                 </div>
//               </CardHeader>
//             </Card>
//           </TabsContent>

//           {/* Other tabs */}
//           <TabsContent
//             value="past-performance"
//             className="flex h-full w-full flex-col items-center justify-center px-4 lg:px-6"
//           >
//             <div className="h-full w-full rounded-lg border border-dashed flex items-center justify-center text-muted-foreground">
//               Past Performance Content Area
//             </div>
//           </TabsContent>

//           <TabsContent
//             value="key-personnel"
//             className="flex h-full w-full flex-col items-center justify-center px-4 lg:px-6"
//           >
//             <div className="h-full w-full rounded-lg border border-dashed flex items-center justify-center text-muted-foreground">
//               Key Personnel Content Area
//             </div>
//           </TabsContent>

//           <TabsContent
//             value="focus-documents"
//             className="flex h-full w-full flex-col items-center justify-center px-4 lg:px-6"
//           >
//             <div className="h-full w-full rounded-lg border border-dashed flex items-center justify-center text-muted-foreground">
//               Focus Documents Content Area
//             </div>
//           </TabsContent>
//         </div>
//       </Tabs>
//     </div>
//   )
// }
















// "use client"

// import { useEffect, useState } from "react"
// import { createClient } from "@/lib/client"
// import { useAuth } from "@/contexts/AuthContext"
// import { CheckIcon, CopyIcon } from "lucide-react"

// import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardDescription,
// } from "@/components/ui/card"
// import { Label } from "@/components/ui/label"
// import {
//   Tabs,
//   TabsList,
//   TabsTrigger,
//   TabsContent,
// } from "@/components/ui/tabs"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
// import { Skeleton } from "@/components/ui/skeleton"

// export default function Formbuilder() {
//   const { user } = useAuth()
//   const [isCopied, setIsCopied] = useState(false)
//   const [formCode, setFormCode] = useState<string>("")
//   const [loading, setLoading] = useState(true)

//   const supabase = createClient()

//   // ✅ Fetch form code from Supabase
//   useEffect(() => {
//     const fetchFormCode = async () => {
//       if (!user?.id) return
//       setLoading(true)

//       try {
//         const { data, error } = await supabase
//           .from("formbuilder")
//           .select("*")
//           .eq("user_id", user.id)
//           .order("id", { ascending: false })

//         if (error) throw error

//         if (data && data.length > 0) {
//           setFormCode(data[0].form_code || "No code found")
//         } else {
//           setFormCode("No forms found for this user.")
//         }
//       } catch (err: any) {
//         console.error("Error fetching form code:", err.message)
//         setFormCode("Error loading form code.")
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchFormCode()
//   }, [user])

//   // ✅ Copy to clipboard
//   const copyToClipboard = async () => {
//     await navigator.clipboard.writeText(formCode)
//     setIsCopied(true)
//     setTimeout(() => setIsCopied(false), 2000)
//   }

//   return (
//     <div className="flex h-screen w-full flex-col gap-6">
//       <Tabs defaultValue="template" className="flex flex-1 flex-col">
//         {/* Header */}
//         <div className="flex items-center justify-between px-4 lg:px-6">
//           <Label htmlFor="view-selector" className="sr-only">
//             View
//           </Label>

//           {/* Mobile Dropdown */}
//           <Select defaultValue="template">
//             <SelectTrigger className="flex w-fit lg:hidden" id="view-selector">
//               <SelectValue placeholder="Select a view" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="template">Template</SelectItem>
//               <SelectItem value="past-performance">Past Performance</SelectItem>
//               <SelectItem value="key-personnel">Key Personnel</SelectItem>
//               <SelectItem value="focus-documents">Focus Documents</SelectItem>
//             </SelectContent>
//           </Select>

//           {/* Desktop Tabs */}
//           <TabsList className="hidden lg:flex">
//             <TabsTrigger value="template">Template</TabsTrigger>
//             <TabsTrigger value="past-performance">Past Performance</TabsTrigger>
//             <TabsTrigger value="key-personnel">Key Personnel</TabsTrigger>
//             <TabsTrigger value="focus-documents">Focus Documents</TabsTrigger>
//           </TabsList>
//         </div>

//         {/* Tabs Content */}
//         <div className="flex-1 overflow-hidden">
//           <TabsContent
//             value="template"
//             className="flex w-full flex-wrap gap-4 overflow-auto p-4 lg:p-6"
//           >
//             {/* Template Card */}
//             <Card className="flex-1 min-w-[250px]">
//               <CardHeader>
//                 <CardTitle className="text-2xl font-semibold flex items-center justify-between">
//                   Contact Form #1
//                 </CardTitle>
//                 <CardDescription>Form Embed Code</CardDescription>

//                 {/* Code Display */}
//                 <div className="relative">
//                   {loading ? (
//                     <div className="space-y-2 p-2">
//                       <Skeleton className="h-5 w-[80%]" />
//                       <Skeleton className="h-5 w-[90%]" />
//                       <Skeleton className="h-5 w-[85%]" />
//                       <Skeleton className="h-5 w-[70%]" />
//                       <Skeleton className="h-5 w-[95%]" />
//                       <Skeleton className="h-5 w-[88%]" />
//                       <Skeleton className="h-5 w-[92%]" />
//                       <Skeleton className="h-5 w-[80%]" />
//                     </div>
//                   ) : (
//                     <pre className="w-full overflow-x-auto whitespace-pre-wrap rounded-lg border bg-muted p-2 text-sm text-muted-foreground leading-relaxed max-h-[400px] overflow-y-auto">
//                       {formCode}
//                     </pre>
//                   )}

//                   {!loading && (
//                     <button
//                       onClick={copyToClipboard}
//                       className="absolute top-3 right-3 rounded-md p-2 hover:bg-accent"
//                       aria-label="Copy text"
//                       title="Copy text"
//                     >
//                       {isCopied ? (
//                         <CheckIcon className="h-4 w-4 text-green-500" />
//                       ) : (
//                         <CopyIcon className="h-4 w-4 text-muted-foreground" />
//                       )}
//                     </button>
//                   )}
//                 </div>
//               </CardHeader>
//             </Card>
//           </TabsContent>

//           {/* Other tabs */}
//           <TabsContent
//             value="past-performance"
//             className="flex h-full w-full flex-col items-center justify-center px-4 lg:px-6"
//           >
//             <div className="h-full w-full rounded-lg border border-dashed flex items-center justify-center text-muted-foreground">
//               Past Performance Content Area
//             </div>
//           </TabsContent>

//           <TabsContent
//             value="key-personnel"
//             className="flex h-full w-full flex-col items-center justify-center px-4 lg:px-6"
//           >
//             <div className="h-full w-full rounded-lg border border-dashed flex items-center justify-center text-muted-foreground">
//               Key Personnel Content Area
//             </div>
//           </TabsContent>

//           <TabsContent
//             value="focus-documents"
//             className="flex h-full w-full flex-col items-center justify-center px-4 lg:px-6"
//           >
//             <div className="h-full w-full rounded-lg border border-dashed flex items-center justify-center text-muted-foreground">
//               Focus Documents Content Area
//             </div>
//           </TabsContent>
//         </div>
//       </Tabs>
//     </div>
//   )
// }
















// "use client"

// import { useEffect, useState } from "react"
// import { createClient } from "@/lib/client"
// import { useAuth } from "@/contexts/AuthContext"
// import { CheckIcon, CopyIcon } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardDescription,
// } from "@/components/ui/card"
// import { Label } from "@/components/ui/label"
// import {
//   Tabs,
//   TabsList,
//   TabsTrigger,
//   TabsContent,
// } from "@/components/ui/tabs"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
// import { Skeleton } from "@/components/ui/skeleton"

// export default function Formbuilder() {
//   const { user } = useAuth()
//   const [forms, setForms] = useState<any[]>([])
//   const [loading, setLoading] = useState(true)
//   const [copiedId, setCopiedId] = useState<string | null>(null)

//   const supabase = createClient()

//   // ✅ Fetch all forms for this user
//   useEffect(() => {
//     const fetchForms = async () => {
//       if (!user?.id) return
//       setLoading(true)

//       try {
//         const { data, error } = await supabase
//           .from("formbuilder")
//           .select("id, form_id, form_code")
//           .eq("user_id", user.id)
//           .order("id", { ascending: false })

//         if (error) throw error
//         setForms(data || [])
//       } catch (err: any) {
//         console.error("Error fetching forms:", err.message)
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchForms()
//   }, [user])

//   // ✅ Copy to clipboard
//   const copyToClipboard = async (text: string, formId: string) => {
//     await navigator.clipboard.writeText(text)
//     setCopiedId(formId)
//     setTimeout(() => setCopiedId(null), 2000)
//   }

//   return (
//     <div className="flex h-screen w-full flex-col gap-6">
//       <Tabs defaultValue="template" className="flex flex-1 flex-col">
//         {/* Header */}
//         <div className="flex items-center justify-between px-4 lg:px-6">
//           <Label htmlFor="view-selector" className="sr-only">
//             View
//           </Label>

//           {/* Mobile Dropdown */}
//           <Select defaultValue="template">
//             <SelectTrigger className="flex w-fit lg:hidden" id="view-selector">
//               <SelectValue placeholder="Select a view" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="template">Template</SelectItem>
//               <SelectItem value="past-performance">Past Performance</SelectItem>
//               <SelectItem value="key-personnel">Key Personnel</SelectItem>
//               <SelectItem value="focus-documents">Focus Documents</SelectItem>
//             </SelectContent>
//           </Select>

//           {/* Desktop Tabs */}
//           <TabsList className="hidden lg:flex">
//             <TabsTrigger value="template">Template</TabsTrigger>
//             <TabsTrigger value="past-performance">Past Performance</TabsTrigger>
//             <TabsTrigger value="key-personnel">Key Personnel</TabsTrigger>
//             <TabsTrigger value="focus-documents">Focus Documents</TabsTrigger>
//           </TabsList>
//         </div>

//         {/* Tabs Content */}
//         <div className="flex-1 overflow-hidden">
//           {/* ✅ Template Tab: Show all forms */}
//           <TabsContent
//             value="template"
//             className="flex w-full flex-wrap gap-4 overflow-auto p-4 lg:p-6"
//           >
//             {loading ? (
//               <div className="space-y-2 p-2 w-full">
//                 <Skeleton className="h-5 w-[80%]" />
//                 <Skeleton className="h-5 w-[90%]" />
//                 <Skeleton className="h-5 w-[85%]" />
//                 <Skeleton className="h-5 w-[70%]" />
//                 <Skeleton className="h-5 w-[95%]" />
//                 <Skeleton className="h-5 w-[88%]" />
//                 <Skeleton className="h-5 w-[92%]" />
//               </div>
//             ) : forms.length === 0 ? (
//               <div className="text-muted-foreground text-center w-full">
//                 No forms found for this user.
//               </div>
//             ) : (
//               forms.map((form) => (
//                 <Card
//                   key={form.id}
//                   className="flex-1 min-w-[250px] relative"
//                 >
//                   <CardHeader>
//                     <CardTitle className="text-2xl font-semibold flex items-center justify-between">
//                       {form.form_id}
//                     </CardTitle>
//                     <CardDescription>Form Embed Code</CardDescription>

//                     <div className="relative">
//                       <pre className="w-full overflow-x-auto whitespace-pre-wrap rounded-lg border bg-muted p-2 text-sm text-muted-foreground leading-relaxed max-h-[400px] overflow-y-auto">
//                         {form.form_code}
//                       </pre>

//                       <button
//                         onClick={() =>
//                           copyToClipboard(form.form_code, form.form_id)
//                         }
//                         className="absolute top-3 right-3 rounded-md p-2 hover:bg-accent"
//                         aria-label="Copy text"
//                         title="Copy text"
//                       >
//                         {copiedId === form.form_id ? (
//                           <CheckIcon className="h-4 w-4 text-green-500" />
//                         ) : (
//                           <CopyIcon className="h-4 w-4 text-muted-foreground" />
//                         )}
//                       </button>
//                     </div>
//                   </CardHeader>
//                 </Card>
//               ))
//             )}
//           </TabsContent>

//           {/* Other tabs */}
//           <TabsContent
//             value="past-performance"
//             className="flex h-full w-full flex-col items-center justify-center px-4 lg:px-6"
//           >
//             <div className="h-full w-full rounded-lg border border-dashed flex items-center justify-center text-muted-foreground">
//               Past Performance Content Area
//             </div>
//           </TabsContent>

//           <TabsContent
//             value="key-personnel"
//             className="flex h-full w-full flex-col items-center justify-center px-4 lg:px-6"
//           >
//             <div className="h-full w-full rounded-lg border border-dashed flex items-center justify-center text-muted-foreground">
//               Key Personnel Content Area
//             </div>
//           </TabsContent>

//           <TabsContent
//             value="focus-documents"
//             className="flex h-full w-full flex-col items-center justify-center px-4 lg:px-6"
//           >
//             <div className="h-full w-full rounded-lg border border-dashed flex items-center justify-center text-muted-foreground">
//               Focus Documents Content Area
//             </div>
//           </TabsContent>
//         </div>
//       </Tabs>
//     </div>
//   )
// }











// "use client"

// import { useEffect, useState } from "react"
// import { createClient } from "@/lib/client"
// import { useAuth } from "@/contexts/AuthContext"
// import { CheckIcon, CopyIcon, Edit } from "lucide-react"
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardDescription,
// } from "@/components/ui/card"
// import { Label } from "@/components/ui/label"
// import {
//   Tabs,
//   TabsList,
//   TabsTrigger,
//   TabsContent,
// } from "@/components/ui/tabs"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
// import { Skeleton } from "@/components/ui/skeleton"
// import { Button } from "./ui/button"
// import { Input } from "./ui/input"
// import { Switch } from "@/components/ui/switch"


// export default function Formbuilder() {
//   const { user } = useAuth()
//   const [forms, setForms] = useState<any[]>([])
//   const [loading, setLoading] = useState(true)
//   const [copiedId, setCopiedId] = useState<string | null>(null)

//   const supabase = createClient()

  

//   // ✅ Fetch all forms for this user
//   useEffect(() => {
//     const fetchForms = async () => {
//       if (!user?.id) return
//       setLoading(true)

//       try {
//         const { data, error } = await supabase
//           .from("formbuilder")
//           .select("id, form_id, form_code")
//           .eq("user_id", user.id)
//           .order("id", { ascending: false })

//         if (error) throw error
//         setForms(data || [])
//       } catch (err: any) {
//         console.error("Error fetching forms:", err.message)
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchForms()
//   }, [user])

//   // ✅ Copy to clipboard
//   const copyToClipboard = async (text: string, formId: string) => {
//     await navigator.clipboard.writeText(text)
//     setCopiedId(formId)
//     setTimeout(() => setCopiedId(null), 2000)
//   }

//   return (
//     <div className="flex h-screen w-full flex-col gap-6">
//       <Tabs defaultValue="template" className="flex flex-1 flex-col">
//         {/* Header */}
//         <div className="flex items-center justify-between px-4 lg:px-6">
//           <Label htmlFor="view-selector" className="sr-only">
//             View
//           </Label>

//           {/* Mobile Dropdown */}
//           <Select defaultValue="template">
//             <SelectTrigger className="flex w-fit lg:hidden" id="view-selector">
//               <SelectValue placeholder="Select a view" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="template">Template</SelectItem>
//               <SelectItem value="past-performance">Past Performance</SelectItem>
//               <SelectItem value="key-personnel">Key Personnel</SelectItem>
//               <SelectItem value="focus-documents">Focus Documents</SelectItem>
//             </SelectContent>
//           </Select>

//           {/* Desktop Tabs */}
//           <TabsList className="hidden lg:flex">
//             <TabsTrigger value="template">Template</TabsTrigger>
//             <TabsTrigger value="Webhook">Webhook</TabsTrigger>
//             <TabsTrigger value="key-personnel">Key Personnel</TabsTrigger>
//             <TabsTrigger value="focus-documents">Focus Documents</TabsTrigger>
//           </TabsList>
//         </div>

//         {/* Tabs Content */}
//         <div className="flex-1 overflow-hidden">
//           {/* ✅ Template Tab: Show all forms */}
//           <TabsContent
//             value="template"
//             className="overflow-auto p-4 lg:p-6"
//           >
//             {loading ? (
//               <div className="space-y-2 p-2 w-full">
//                 <Skeleton className="h-5 w-[80%]" />
//                 <Skeleton className="h-5 w-[90%]" />
//                 <Skeleton className="h-5 w-[85%]" />
//                 <Skeleton className="h-5 w-[70%]" />
//                 <Skeleton className="h-5 w-[95%]" />
//               </div>
//             ) : forms.length === 0 ? (
//               <div className="text-muted-foreground text-center w-[200px]">
//                 No forms found for this user.
//               </div>
//             ) : (
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
//                 {forms.map((form) => (
//                   <Card
//                     key={form.id}
//                     className="relative flex flex-col justify-between"
//                   >
//                     <CardHeader>
//                       <CardTitle className="text-xl font-semibold flex items-center justify-between">
//                         {form.form_id}
//                       </CardTitle>
//                       <CardDescription>Form Embed Code</CardDescription>

//                       <div className="relative mt-2">
//                         <pre className="w-full overflow-x-auto whitespace-pre-wrap rounded-lg border bg-muted p-2 text-sm text-muted-foreground leading-relaxed max-h-[400px] overflow-y-auto">
//                           {form.form_code}
//                         </pre>

//                         <button
//                           onClick={() =>
//                             copyToClipboard(form.form_code, form.form_id)
//                           }
//                           className="absolute top-3 right-3 rounded-md p-2 hover:bg-accent"
//                           aria-label="Copy text"
//                           title="Copy text"
//                         >
//                           {copiedId === form.form_id ? (
//                             <CheckIcon className="h-4 w-4 text-green-500" />
//                           ) : (
//                             <CopyIcon className="h-4 w-4 text-muted-foreground" />
//                           )}
//                         </button>
//                       </div>
//                     </CardHeader>
//                   </Card>
//                 ))}
//               </div>
//             )}
//           </TabsContent>

//           {/* Other tabs */}
//           <TabsContent
//             value="Webhook"
//             className="overflow-auto p-4 lg:p-6"
//           >
//            <div className="w-full mx-auto p-6 border rounded-xl shadow-sm bg-accent">
//       <h2 className="text-lg font-semibold mb-4">Webhooks</h2>

//       <div className="space-y-4">

//           <div
//             className="border rounded-lg p-4 flex flex-col gap-3"
//           >
//             <div className="text-sm text-gray-700 font-medium">
//             </div>

//           </div>
//       </div>
//     </div>
//           </TabsContent>

//           <TabsContent
//             value="Webhook"
//             className="flex h-full w-full flex-col items-center justify-center px-4 lg:px-6"
//           >
//             <div className="h-full w-full rounded-lg border border-dashed flex items-center justify-center text-muted-foreground">
//               Key Personnel Content Area
//             </div>
//           </TabsContent>

//           <TabsContent
//             value="focus-documents"
//             className="flex h-full w-full flex-col items-center justify-center px-4 lg:px-6"
//           >
//             <div className="h-full w-full rounded-lg border border-dashed flex items-center justify-center text-muted-foreground">
//               Focus Documents Content Area
//             </div>
//           </TabsContent>
//         </div>
//       </Tabs>
//     </div>
//   )
// }














// "use client";

// import { useEffect, useState } from "react";
// import { createClient } from "@/lib/client";
// import { useAuth } from "@/contexts/AuthContext";
// import { CheckIcon, CopyIcon } from "lucide-react";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardDescription,
// } from "@/components/ui/card";
// import { Label } from "@/components/ui/label";
// import {
//   Tabs,
//   TabsList,
//   TabsTrigger,
//   TabsContent,
// } from "@/components/ui/tabs";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Skeleton } from "@/components/ui/skeleton";
// import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "./ui/input-group";
// import { IconCheck, IconCopy } from "@tabler/icons-react";
// import WebhookTab from "./webhook-call";

// export default function Formbuilder() {
//   const { user } = useAuth();
//   const [forms, setForms] = useState<any[]>([]);
//   const [webhooks, setWebhooks] = useState<any[]>([]);
//   const [loadingForms, setLoadingForms] = useState(true);
//   const [loadingHooks, setLoadingHooks] = useState(true);
//   const [copiedId, setCopiedId] = useState<string | null>(null);
//   const [isCopied, setIsCopied] = useState(false);

//   const supabase = createClient();

//   // ✅ Fetch all forms for this user
//   useEffect(() => {
//     const fetchForms = async () => {
//       if (!user?.id) return;
//       setLoadingForms(true);

//       try {
//         const { data, error } = await supabase
//           .from("formbuilder")
//           .select("id, form_id, form_code")
//           .eq("user_id", user.id)
//           .order("id", { ascending: false });

//         if (error) throw error;
//         setForms(data || []);
//       } catch (err: any) {
//         console.error("Error fetching forms:", err.message);
//       } finally {
//         setLoadingForms(false);
//       }
//     };

//     fetchForms();
//   }, [user]);

//   // ✅ Fetch webhooks from Supabase
//   useEffect(() => {
//     const fetchWebhooks = async () => {
//       if (!user?.id) return;
//       setLoadingHooks(true);

//       try {
//         const { data, error } = await supabase
//           .from("formbuilder")
//           .select("id, webhook_url")
//           .eq("user_id", user.id)
//           .order("id", { ascending: false });

//         if (error) throw error;
//         setWebhooks(data || []);
//       } catch (err: any) {
//         console.error("Error fetching webhooks:", err.message);
//       } finally {
//         setLoadingHooks(false);
//       }
//     };

//     fetchWebhooks();
//   }, [user]);

//   // ✅ Copy to clipboard helper
//   const copyToClipboard = async (text: string, formId: string) => {
//     await navigator.clipboard.writeText(text);
//     setCopiedId(formId);
//     setTimeout(() => setCopiedId(null), 2000);
//   };

//   return (
//     <div className="flex h-screen w-full flex-col gap-6">
//       <Tabs defaultValue="template" className="flex flex-1 flex-col">
//         {/* Header */}
//         <div className="flex items-center justify-between px-4 lg:px-6">
//           <Label htmlFor="view-selector" className="sr-only">
//             View
//           </Label>

//           {/* Mobile Dropdown */}
//           <Select defaultValue="template">
//             <SelectTrigger className="flex w-fit lg:hidden" id="view-selector">
//               <SelectValue placeholder="Select a view" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="template">Template</SelectItem>
//               <SelectItem value="Webhook">Webhook</SelectItem>
//             </SelectContent>
//           </Select>

//           {/* Desktop Tabs */}
//           <TabsList className="hidden lg:flex">
//             <TabsTrigger value="template">Template</TabsTrigger>
//             <TabsTrigger value="Webhook">Webhook</TabsTrigger>
//           </TabsList>
//         </div>

//         {/* Tabs Content */}
//         <div className="flex-1 overflow-hidden">
//           {/* ✅ Template Tab */}
//           <TabsContent value="template" className="overflow-auto p-4 lg:p-6">
//             {loadingForms ? (
//               <div className="space-y-2 p-2 w-full">
//                 <Skeleton className="h-5 w-[80%]" />
//                 <Skeleton className="h-5 w-[90%]" />
//                 <Skeleton className="h-5 w-[85%]" />
//               </div>
//             ) : forms.length === 0 ? (
//               <div className="text-muted-foreground text-center w-[200px]">
//                 No forms found for this user.
//               </div>
//             ) : (
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
//                 {forms.map((form) => (
//                   <Card
//                     key={form.id}
//                     className="relative flex flex-col justify-between"
//                   >
//                     <CardHeader>
//                       <CardTitle className="text-xl font-semibold flex items-center justify-between">
//                         {form.form_id}
//                       </CardTitle>
//                       <CardDescription>Form Embed Code</CardDescription>

//                       <div className="relative mt-2">
//                         <pre className="w-full overflow-x-auto whitespace-pre-wrap rounded-lg border bg-muted p-2 text-sm text-muted-foreground leading-relaxed max-h-[400px] overflow-y-auto">
//                           {form.form_code}
//                         </pre>

//                         <button
//                           onClick={() =>
//                             copyToClipboard(form.form_code, form.form_id)
//                           }
//                           className="absolute top-3 right-3 rounded-md p-2 hover:bg-accent"
//                           aria-label="Copy text"
//                           title="Copy text"
//                         >
//                           {copiedId === form.form_id ? (
//                             <CheckIcon className="h-4 w-4 text-green-500" />
//                           ) : (
//                             <CopyIcon className="h-4 w-4 text-muted-foreground" />
//                           )}
//                         </button>
//                       </div>
//                     </CardHeader>
//                   </Card>
//                 ))}
//               </div>
//             )}
//           </TabsContent>
// <TabsContent value="Webhook" className="overflow-auto p-4 lg:p-6">
//   <WebhookTab />
// </TabsContent>

//         </div>
//       </Tabs>
//     </div>
//   );
// }
