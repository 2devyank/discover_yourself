import { createClient } from "@supabase/supabase-js";


export const supabase=createClient(
    process.env.SUPABASE_PROJECT_URL as string,
  process.env.API_KEY as string,
)