import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ldwmhuavgjpuihqeenqk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxkd21odWF2Z2pwdWlocWVlbnFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYzODAxNDQsImV4cCI6MjAyMTk1NjE0NH0.YYe8cF4gTjGPaTj9nvLVoyiCPFvCBMFc90-5e5hFUhs";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
