import {createClient} from '@supabase/supabase-js'


const supabaseUrl ="https://chkxozluryenaapjktur.supabase.co";

// const supabaseKey = process.env.VITE_SUPABASE_KEY;
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNoa3hvemx1cnllbmFhcGprdHVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQyMjQyMTQsImV4cCI6MjAxOTgwMDIxNH0.JTFwQpfpQBEwNObEkGsSVcbFDMsz-8xvYasVxQ8DUJg";

export const supabase = createClient(supabaseUrl,supabaseKey);

export const auth = supabase.auth;