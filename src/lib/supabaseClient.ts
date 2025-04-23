
import { createClient } from '@supabase/supabase-js';

// Environment variables should be set after connecting to Supabase in Lovable
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials not found. Please set environment variables.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type GearSubmission = {
  gear_type: string;
  society: string;
  phone: string;
};
