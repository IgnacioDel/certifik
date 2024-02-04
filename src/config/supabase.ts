//import dotenv from "dotenv";
//import { createClient } from "@supabase/supabase-js";

//dotenv.config();

//const supabase = createClient(
//  process.env.SUPABASE_URL,
//  process.env.SUPA_KEY
//);

//export default supabase;

import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

dotenv.config();

// const supabaseUrl = process.env.PUBLIC_SUPABASE_URL
// const supabaseKey = process.env.SUPABASE_KEY
// const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVheGV5cWV3cmJxamJxYXFmbHJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg0NDI2NTcsImV4cCI6MjAxNDAxODY1N30.SAU-LAUY7DwHmNfxf1CNZSpwu0FAJxyzbRgoyEDZEKs"

//export const supabase = createClient(supabaseUrl, supabaseKey)

const supabase = createClient(
  "https://mnnbyrdnpuienzscjzjk.supabase.co",
  supabaseKey
);

export default supabase;
