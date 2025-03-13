import {createClient} from '@supabase/supabase-js'


const supabaseUrl ="https://wzscjhbwyjjkmifogzaf.supabase.co";

// const supabaseKey = process.env.VITE_SUPABASE_KEY;
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6c2NqaGJ3eWpqa21pZm9nemFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4ODczODAsImV4cCI6MjA1NzQ2MzM4MH0.EUkjdqmVEpGrpTwyO2KnGAcRQo2amgAlV2ZsD9BgfzU";

export const supabase = createClient(supabaseUrl,supabaseKey);

export const auth = supabase.auth;