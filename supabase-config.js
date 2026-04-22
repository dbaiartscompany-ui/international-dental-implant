// ============================================================
// INTERNATIONAL DENTAL IMPLANT CENTER — SUPABASE CONFIG
// ============================================================
// REPLACE the two values below with your own from:
// Supabase Dashboard → Settings → API
// ============================================================

const SUPABASE_URL  = 'https://YOUR-PROJECT-REF.supabase.co';
const SUPABASE_ANON_KEY = 'YOUR-ANON-PUBLIC-KEY-HERE';

// ============================================================
// Initialize Supabase client (available globally as supabaseClient)
// ============================================================
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
