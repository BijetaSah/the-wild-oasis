import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://jraqynzrmiveshpkajtg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpyYXF5bnpybWl2ZXNocGthanRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ2NjU0NTIsImV4cCI6MjA4MDI0MTQ1Mn0.X6Jvj1R1rJgzqsFEEmkrrovHGC67vN8gY2B7ftt1NVc";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
