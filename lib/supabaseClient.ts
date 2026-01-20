import { createClient } from "@supabase/supabase-js";

// ✅ Initialize Supabase client for server-side (using Service Role key)
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);
