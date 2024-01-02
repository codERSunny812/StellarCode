import {createClient} from '@supabase/supabase-js'


const supabaseUrl ="https://ejokulkdhyizpsdqoqmw.supabase.co";

// const supabaseKey = process.env.VITE_SUPABASE_KEY;
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqb2t1bGtkaHlpenBzZHFvcW13Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMxMDI2NTYsImV4cCI6MjAxODY3ODY1Nn0.roANMN1iznXCa5sesq1uYpHj-D0mwwbvcd11PqrbbME";

export const supabase = createClient(supabaseUrl,supabaseKey);

export const auth = supabase.auth;