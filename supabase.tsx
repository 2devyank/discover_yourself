import { createClient } from "@supabase/supabase-js";


export const supabase=createClient(
    'https://uhkmsfzpbtmaewocyogf.supabase.co',
   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVoa21zZnpwYnRtYWV3b2N5b2dmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODcwNzk1ODEsImV4cCI6MjAwMjY1NTU4MX0.4YtyO4uJLNqi1cqgDkY5Vk3g3NVLy-0gpQLXhZt1POw"
)