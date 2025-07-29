"use client";

import { useEffect, useState } from "react";
import { Expense } from "@/lib/supabase";

export default function ExpenseList() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
***REMOVED***fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
***REMOVED***try {
***REMOVED***  const response = await fetch("/api/expenses");
***REMOVED***  if (!response.ok) {
***REMOVED******REMOVED***throw new Error("Failed to fetch expenses");
***REMOVED***  }
***REMOVED***  const data = await response.json();
***REMOVED***  setExpenses(data);
***REMOVED***} catch (err) {
***REMOVED***  setError(err instanceof Error ? err.message : "Failed to fetch expenses");
***REMOVED***} finally {
***REMOVED***  setLoading(false);
***REMOVED***}
  };

  const formatDate = (dateString: string) => {
***REMOVED***return new Date(dateString).toLocaleDateString("en-US", {
***REMOVED***  year: "numeric",
***REMOVED***  month: "short",
***REMOVED***  day: "numeric",
***REMOVED***});
  };

  const formatAmount = (amount: number) => {
***REMOVED***return new Intl.NumberFormat("en-US", {
***REMOVED***  style: "currency",
***REMOVED***  currency: "USD",
***REMOVED***}).format(amount);
  };

  const getCategoryColor = (category: string) => {
***REMOVED***const colors = {
***REMOVED***  Food: "bg-green-100 text-green-800",
***REMOVED***  Transport: "bg-blue-100 text-blue-800",
***REMOVED***  Utilities: "bg-yellow-100 text-yellow-800",
***REMOVED***  Shopping: "bg-purple-100 text-purple-800",
***REMOVED***  Entertainment: "bg-pink-100 text-pink-800",
***REMOVED***  Bills: "bg-red-100 text-red-800",
***REMOVED***  Other: "bg-gray-100 text-gray-800",
***REMOVED***};
***REMOVED***return colors[category as keyof typeof colors] || colors.Other;
  };

  if (loading) {
***REMOVED***return (
***REMOVED***  <div className="max-w-4xl mx-auto p-6">
***REMOVED******REMOVED***<div className="text-center">
***REMOVED******REMOVED***  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
***REMOVED******REMOVED***  <p className="mt-4 text-gray-600">Loading expenses...</p>
***REMOVED******REMOVED***</div>
***REMOVED***  </div>
***REMOVED***);
  }

  if (error) {
***REMOVED***return (
***REMOVED***  <div className="max-w-4xl mx-auto p-6">
***REMOVED******REMOVED***<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
***REMOVED******REMOVED***  {error}
***REMOVED******REMOVED***</div>
***REMOVED***  </div>
***REMOVED***);
  }

  return (
***REMOVED***<div className="max-w-4xl mx-auto p-6">
***REMOVED***  <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Expenses</h2>

***REMOVED***  {expenses.length === 0 ? (
***REMOVED******REMOVED***<div className="text-center py-12">
***REMOVED******REMOVED***  <div className="text-gray-400 text-6xl mb-4">💰</div>
***REMOVED******REMOVED***  <h3 className="text-xl font-semibold text-gray-600 mb-2">
***REMOVED******REMOVED******REMOVED***No expenses yet
***REMOVED******REMOVED***  </h3>
***REMOVED******REMOVED***  <p className="text-gray-500">
***REMOVED******REMOVED******REMOVED***Add your first expense to get started!
***REMOVED******REMOVED***  </p>
***REMOVED******REMOVED***</div>
***REMOVED***  ) : (
***REMOVED******REMOVED***<div className="bg-white rounded-lg shadow overflow-hidden">
***REMOVED******REMOVED***  <div className="overflow-x-auto">
***REMOVED******REMOVED******REMOVED***<table className="min-w-full divide-y divide-gray-200">
***REMOVED******REMOVED******REMOVED***  <thead className="bg-gray-50">
***REMOVED******REMOVED******REMOVED******REMOVED***<tr>
***REMOVED******REMOVED******REMOVED******REMOVED***  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***Date
***REMOVED******REMOVED******REMOVED******REMOVED***  </th>
***REMOVED******REMOVED******REMOVED******REMOVED***  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***Category
***REMOVED******REMOVED******REMOVED******REMOVED***  </th>
***REMOVED******REMOVED******REMOVED******REMOVED***  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***Description
***REMOVED******REMOVED******REMOVED******REMOVED***  </th>
***REMOVED******REMOVED******REMOVED******REMOVED***  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***Amount
***REMOVED******REMOVED******REMOVED******REMOVED***  </th>
***REMOVED******REMOVED******REMOVED******REMOVED***</tr>
***REMOVED******REMOVED******REMOVED***  </thead>
***REMOVED******REMOVED******REMOVED***  <tbody className="bg-white divide-y divide-gray-200">
***REMOVED******REMOVED******REMOVED******REMOVED***{expenses.map((expense) => (
***REMOVED******REMOVED******REMOVED******REMOVED***  <tr key={expense.id} className="hover:bg-gray-50">
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***  {formatDate(expense.expense_date)}
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***</td>
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***<td className="px-6 py-4 whitespace-nowrap">
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***  <span
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getCategoryColor(
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***  expense.category
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***)}`}
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***  >
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***{expense.category}
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***  </span>
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***</td>
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***<td className="px-6 py-4 text-sm text-gray-900">
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***  {expense.notes || "-"}
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***</td>
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-right">
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***  {formatAmount(expense.amount)}
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***</td>
***REMOVED******REMOVED******REMOVED******REMOVED***  </tr>
***REMOVED******REMOVED******REMOVED******REMOVED***))}
***REMOVED******REMOVED******REMOVED***  </tbody>
***REMOVED******REMOVED******REMOVED***</table>
***REMOVED******REMOVED***  </div>

***REMOVED******REMOVED***  <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
***REMOVED******REMOVED******REMOVED***<div className="flex justify-between items-center">
***REMOVED******REMOVED******REMOVED***  <span className="text-sm font-medium text-gray-700">
***REMOVED******REMOVED******REMOVED******REMOVED***Total Expenses:
***REMOVED******REMOVED******REMOVED***  </span>
***REMOVED******REMOVED******REMOVED***  <span className="text-lg font-bold text-gray-900">
***REMOVED******REMOVED******REMOVED******REMOVED***{formatAmount(
***REMOVED******REMOVED******REMOVED******REMOVED***  expenses.reduce((sum, expense) => sum + expense.amount, 0)
***REMOVED******REMOVED******REMOVED******REMOVED***)}
***REMOVED******REMOVED******REMOVED***  </span>
***REMOVED******REMOVED******REMOVED***</div>
***REMOVED******REMOVED***  </div>
***REMOVED******REMOVED***</div>
***REMOVED***  )}
***REMOVED***</div>
  );
}
