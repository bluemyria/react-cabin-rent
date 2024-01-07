import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://aopzjafvxfcolonrtfdv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFvcHpqYWZ2eGZjb2xvbnJ0ZmR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQzMDMzNzksImV4cCI6MjAxOTg3OTM3OX0.EHoZUi30SXe_-YQvB4bvPnGk7XUzZLtxBkXrynfLGNM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
