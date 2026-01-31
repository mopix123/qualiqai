"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/client";

export default function PostLoginPage() {
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();

      // if (data.session) {
      //   router.replace("/workspace/dashboard?welcome=true");
      // }
      if (data.session) {
        router.replace("/workspace/dashboard");
      }
    };

    checkSession();
  }, [router, supabase]);

  return (
    <div className="flex h-screen items-center justify-center text-sm text-muted-foreground">
      Signing you in...
    </div>
  );
}
