// "use client";

// import { Button } from "@/components/ui/button";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { Card } from "@/components/ui/card";
// import { MessageCircle, Mail, Phone, CircleQuestionMark } from "lucide-react";

// export default function SupportWidget() {
//   return (
//     <div className="">
//       <Popover>
//         <PopoverTrigger asChild>
//           <Button className="">
//             Get help
//             <CircleQuestionMark className="h-6 w-6" />
//           </Button>
//         </PopoverTrigger>

//         <PopoverContent
//           align="start"
//           side="top"
//           className="w-[400px] p-0 rounded-xl shadow-xl"
//         >
//           <Card className="p-4 rounded-xl border">
//             {/* Header */}
//             <div className="mb-3">
//               <h2 className="text-sm font-semibold pb-2">
//                 Need help with your first payment?
//               </h2>
//               <div>
//                 <a
//                   href="mailto:support@qualiqai.com"
//                   className="flex items-center gap-2"
//                 >
//                   <Mail className="h-5 w-5" />
//                   support@qualiqai.com
//                 </a>
//               </div>
//             </div>

//             <hr className="" />

//             <p className="text-sm text-center text-muted-foreground">
//               Available Monday to Friday 10 AM to 7 PM IST
//             </p>
//           </Card>
//         </PopoverContent>
//       </Popover>
//     </div>
//   );
// }

"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Card } from "@/components/ui/card";
import { Mail, CircleQuestionMark, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function SupportWidget() {
  const email = "support@qualiqai.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button>
            Get help
            <CircleQuestionMark className="h-6 w-6" />
          </Button>
        </PopoverTrigger>

        <PopoverContent
          align="start"
          side="top"
          className="w-[400px] p-0 rounded-xl shadow-xl"
        >
          <Card className="p-4 rounded-xl border">
            {/* Header */}
            <div className="">
              <h2 className="text-sm font-normal pb-2">
                If you are facing any issues or need any kind of assistance,
                please feel free to reach out to us at the email below.
              </h2>

              <div className="flex items-center justify-between gap-2">
                {/* Email */}
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 text-sm font-medium"
                >
                  <Mail className="h-4 w-4" />
                  {email}
                </a>

                {/* Copy Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleCopy}
                  className="h-8 w-8"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-green-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
            <hr />
            <p className="text-sm text-center text-muted-foreground">
              Available Monday to Friday, 10 AM – 7 PM IST (UTC +5:30)
            </p>
          </Card>
        </PopoverContent>
      </Popover>
    </div>
  );
}
