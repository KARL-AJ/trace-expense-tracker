const { createClient } = require("@supabase/supabase-js");
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Missing environment variables!");
  console.error("Please ensure .env.local contains:");
  console.error("  NEXT_PUBLIC_SUPABASE_URL");
  console.error("  SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function dbManager() {
  const command = process.argv[2];
  
  switch (command) {
***REMOVED***case "status":
***REMOVED***  await checkStatus();
***REMOVED***  break;
***REMOVED***case "insert":
***REMOVED***  await insertSampleData();
***REMOVED***  break;
***REMOVED***case "clear":
***REMOVED***  await clearAllData();
***REMOVED***  break;
***REMOVED***case "stats":
***REMOVED***  await showStats();
***REMOVED***  break;
***REMOVED***default:
***REMOVED***  console.log("📋 Database Manager Commands:");
***REMOVED***  console.log("  node scripts/db-manager.js status  - Check database status");
***REMOVED***  console.log("  node scripts/db-manager.js insert  - Insert sample data");
***REMOVED***  console.log("  node scripts/db-manager.js clear   - Clear all data");
***REMOVED***  console.log("  node scripts/db-manager.js stats   - Show statistics");
  }
}

async function checkStatus() {
  console.log("🔍 Checking database status...");
  
  try {
***REMOVED***const { data, error } = await supabase
***REMOVED***  .from("expenses")
***REMOVED***  .select("*")
***REMOVED***  .limit(1);
***REMOVED***
***REMOVED***if (error) {
***REMOVED***  console.log("❌ Database error:", error.message);
***REMOVED***} else {
***REMOVED***  console.log("✅ Database is accessible");
***REMOVED***  console.log("📊 Table exists and is working");
***REMOVED***}
  } catch (error) {
***REMOVED***console.log("❌ Status check failed:", error.message);
  }
}

async function insertSampleData() {
  console.log("📝 Inserting sample data...");
  
  const sampleData = [
***REMOVED***{
***REMOVED***  amount: 25.5,
***REMOVED***  category: "Food",
***REMOVED***  expense_date: "2025-01-29",
***REMOVED***  notes: "Lunch at restaurant",
***REMOVED***},
***REMOVED***{
***REMOVED***  amount: 15.0,
***REMOVED***  category: "Transport",
***REMOVED***  expense_date: "2025-01-29",
***REMOVED***  notes: "Uber ride",
***REMOVED***},
***REMOVED***{
***REMOVED***  amount: 50.0,
***REMOVED***  category: "Shopping",
***REMOVED***  expense_date: "2025-01-28",
***REMOVED***  notes: "Groceries",
***REMOVED***},
***REMOVED***{
***REMOVED***  amount: 30.0,
***REMOVED***  category: "Entertainment",
***REMOVED***  expense_date: "2025-01-27",
***REMOVED***  notes: "Movie tickets",
***REMOVED***},
***REMOVED***{
***REMOVED***  amount: 120.0,
***REMOVED***  category: "Bills",
***REMOVED***  expense_date: "2025-01-26",
***REMOVED***  notes: "Electricity bill",
***REMOVED***},
  ];
  
  try {
***REMOVED***const { data, error } = await supabase
***REMOVED***  .from("expenses")
***REMOVED***  .insert(sampleData)
***REMOVED***  .select();
***REMOVED***
***REMOVED***if (error) {
***REMOVED***  console.log("❌ Failed to insert data:", error.message);
***REMOVED***} else {
***REMOVED***  console.log("✅ Sample data inserted successfully!");
***REMOVED***  console.log("📊 New records:", data.length);
***REMOVED***}
  } catch (error) {
***REMOVED***console.log("❌ Insert failed:", error.message);
  }
}

async function clearAllData() {
  console.log("🗑️  Clearing all data...");
  
  try {
***REMOVED***const { error } = await supabase
***REMOVED***  .from("expenses")
***REMOVED***  .delete()
***REMOVED***  .neq("id", "00000000-0000-0000-0000-000000000000"); // Delete all records
***REMOVED***
***REMOVED***if (error) {
***REMOVED***  console.log("❌ Failed to clear data:", error.message);
***REMOVED***} else {
***REMOVED***  console.log("✅ All data cleared successfully!");
***REMOVED***}
  } catch (error) {
***REMOVED***console.log("❌ Clear failed:", error.message);
  }
}

async function showStats() {
  console.log("📊 Getting database statistics...");
  
  try {
***REMOVED***const { data, error } = await supabase
***REMOVED***  .from("expenses")
***REMOVED***  .select("*")
***REMOVED***  .order("created_at", { ascending: false });
***REMOVED***
***REMOVED***if (error) {
***REMOVED***  console.log("❌ Failed to get stats:", error.message);
***REMOVED***} else {
***REMOVED***  console.log("📊 Database Statistics:");
***REMOVED***  console.log(`  Total records: ${data.length}`);
***REMOVED***  console.log(`  Total expenses: $${data.reduce((sum, record) => sum + record.amount, 0).toFixed(2)}`);
***REMOVED***  
***REMOVED***  // Category breakdown
***REMOVED***  const categories = {};
***REMOVED***  data.forEach(record => {
***REMOVED******REMOVED***categories[record.category] = (categories[record.category] || 0) + 1;
***REMOVED***  });
***REMOVED***  
***REMOVED***  console.log("  Categories:");
***REMOVED***  Object.entries(categories).forEach(([category, count]) => {
***REMOVED******REMOVED***console.log(`***REMOVED***${category}: ${count} records`);
***REMOVED***  });
***REMOVED***}
  } catch (error) {
***REMOVED***console.log("❌ Stats failed:", error.message);
  }
}

dbManager(); 