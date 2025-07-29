import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Expense {
  id: string;
  amount: number;
  category: string;
  expense_date: string;
  notes?: string;
  created_at: string;
}

export interface CreateExpenseData {
  amount: number;
  category: string;
  expense_date: string;
  notes?: string;
}
