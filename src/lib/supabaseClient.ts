import { createClient } from '@supabase/supabase-js';

// Environment variables should be set after connecting to Supabase in Lovable
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Export the type for the form submission
export type GearSubmission = {
  gear_type: string;
  society: string;
  phone: string;
  goodasnewgear: string;
};

// Check if credentials are available
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials not found. Please set environment variables.');
}

// Create a mock client for development when credentials are missing
// This prevents the app from crashing but won't actually connect to Supabase

console.log("Supabase URL:", supabaseUrl);
console.log("Supabase Key:", supabaseAnonKey ? '[KEY PRESENT]' : '[KEY MISSING]');

export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : {
      from: () => ({
        insert: async () => ({ 
          error: new Error('Supabase not configured. Set environment variables.'),
          data: null
        })
      })
    } as unknown as ReturnType<typeof createClient>;
