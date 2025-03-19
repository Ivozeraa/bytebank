import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://pwavrkuwlesyuwutojhm.supabase.co";
const SERVICE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB3YXZya3V3bGVzeXV3dXRvamhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIzMjQzNzcsImV4cCI6MjA1NzkwMDM3N30.fHxUt1VVQauGnWT45oUP5S41RjtidfFm1fUs9QKaKpk";

export const supabase = createClient(SUPABASE_URL, SERVICE_KEY);
