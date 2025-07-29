import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// Function to create the expenses table if it doesn't exist
async function ensureTableExists() {
  try {
***REMOVED***// Try to create the table (this will fail if it already exists, which is fine)
***REMOVED***await supabase.rpc('exec_sql', {
***REMOVED***  sql: `
***REMOVED******REMOVED***CREATE TABLE IF NOT EXISTS expenses (
***REMOVED******REMOVED***  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
***REMOVED******REMOVED***  amount NUMERIC(10, 2) NOT NULL,
***REMOVED******REMOVED***  category TEXT NOT NULL,
***REMOVED******REMOVED***  expense_date DATE NOT NULL,
***REMOVED******REMOVED***  notes TEXT,
***REMOVED******REMOVED***  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
***REMOVED******REMOVED***);
***REMOVED***  `
***REMOVED***});
  } catch (error) {
***REMOVED***// Table might already exist, which is fine
***REMOVED***console.log("Table creation attempted:", error);
  }
}

export async function GET() {
  try {
***REMOVED***// Ensure table exists before querying
***REMOVED***await ensureTableExists();
***REMOVED***
***REMOVED***const { data, error } = await supabase
***REMOVED***  .from("expenses")
***REMOVED***  .select("*")
***REMOVED***  .order("expense_date", { ascending: false });

***REMOVED***if (error) {
***REMOVED***  return NextResponse.json({ error: error.message }, { status: 500 });
***REMOVED***}

***REMOVED***return NextResponse.json(data);
  } catch (error) {
***REMOVED***return NextResponse.json(
***REMOVED***  { error: "Internal server error" },
***REMOVED***  { status: 500 }
***REMOVED***);
  }
}

export async function POST(request: NextRequest) {
  try {
***REMOVED***const body = await request.json();
***REMOVED***const { amount, category, expense_date, notes } = body;

***REMOVED***if (!amount || !category || !expense_date) {
***REMOVED***  return NextResponse.json(
***REMOVED******REMOVED***{ error: "Missing required fields" },
***REMOVED******REMOVED***{ status: 400 }
***REMOVED***  );
***REMOVED***}

***REMOVED***// Ensure table exists before inserting
***REMOVED***await ensureTableExists();

***REMOVED***const { data, error } = await supabase
***REMOVED***  .from("expenses")
***REMOVED***  .insert([
***REMOVED******REMOVED***{
***REMOVED******REMOVED***  amount: parseFloat(amount),
***REMOVED******REMOVED***  category,
***REMOVED******REMOVED***  expense_date,
***REMOVED******REMOVED***  notes: notes || null,
***REMOVED******REMOVED***},
***REMOVED***  ])
***REMOVED***  .select();

***REMOVED***if (error) {
***REMOVED***  return NextResponse.json({ error: error.message }, { status: 500 });
***REMOVED***}

***REMOVED***return NextResponse.json(data[0], { status: 201 });
  } catch (error) {
***REMOVED***return NextResponse.json(
***REMOVED***  { error: "Internal server error" },
***REMOVED***  { status: 500 }
***REMOVED***);
  }
}
