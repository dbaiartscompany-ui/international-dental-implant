// ============================================================
// INTERNATIONAL DENTAL IMPLANT CENTER — SUPABASE CONFIG
// ============================================================

const SUPABASE_URL  = 'https://xpnmntcmzcszclbutgsu.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhwbm1udGNtemNzemNsYnV0Z3N1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY4NTI3MDMsImV4cCI6MjA5MjQyODcwM30.ipSJMxiR63i-BBTKXaDboSeF_VUdXVkdq0x5dSvnAPI';

// ============================================================
// Initialize Supabase client (available globally as supabaseClient)
// ============================================================
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
