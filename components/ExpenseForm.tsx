"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const categories = [
  "Food",
  "Transport",
  "Utilities",
  "Shopping",
  "Entertainment",
  "Bills",
  "Other",
];

export default function ExpenseForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
***REMOVED***amount: "",
***REMOVED***category: "Food",
***REMOVED***expense_date: new Date().toISOString().split("T")[0],
***REMOVED***notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
***REMOVED***e.preventDefault();
***REMOVED***setIsSubmitting(true);
***REMOVED***setError("");

***REMOVED***try {
***REMOVED***  const response = await fetch("/api/expenses", {
***REMOVED******REMOVED***method: "POST",
***REMOVED******REMOVED***headers: {
***REMOVED******REMOVED***  "Content-Type": "application/json",
***REMOVED******REMOVED***},
***REMOVED******REMOVED***body: JSON.stringify(formData),
***REMOVED***  });

***REMOVED***  if (!response.ok) {
***REMOVED******REMOVED***const errorData = await response.json();
***REMOVED******REMOVED***throw new Error(errorData.error || "Failed to save expense");
***REMOVED***  }

***REMOVED***  // Reset form
***REMOVED***  setFormData({
***REMOVED******REMOVED***amount: "",
***REMOVED******REMOVED***category: "Food",
***REMOVED******REMOVED***expense_date: new Date().toISOString().split("T")[0],
***REMOVED******REMOVED***notes: "",
***REMOVED***  });

***REMOVED***  // Refresh the page to show updated data
***REMOVED***  router.refresh();
***REMOVED***} catch (err) {
***REMOVED***  setError(err instanceof Error ? err.message : "Failed to save expense");
***REMOVED***} finally {
***REMOVED***  setIsSubmitting(false);
***REMOVED***}
  };

  const handleInputChange = (
***REMOVED***e: React.ChangeEvent<
***REMOVED***  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
***REMOVED***>
  ) => {
***REMOVED***const { name, value } = e.target;
***REMOVED***setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
***REMOVED***<div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
***REMOVED***  <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Expense</h2>

***REMOVED***  {error && (
***REMOVED******REMOVED***<div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
***REMOVED******REMOVED***  {error}
***REMOVED******REMOVED***</div>
***REMOVED***  )}

***REMOVED***  <form onSubmit={handleSubmit} className="space-y-4">
***REMOVED******REMOVED***<div>
***REMOVED******REMOVED***  <label
***REMOVED******REMOVED******REMOVED***htmlFor="amount"
***REMOVED******REMOVED******REMOVED***className="block text-sm font-medium text-gray-700 mb-1"
***REMOVED******REMOVED***  >
***REMOVED******REMOVED******REMOVED***Amount *
***REMOVED******REMOVED***  </label>
***REMOVED******REMOVED***  <input
***REMOVED******REMOVED******REMOVED***type="number"
***REMOVED******REMOVED******REMOVED***id="amount"
***REMOVED******REMOVED******REMOVED***name="amount"
***REMOVED******REMOVED******REMOVED***value={formData.amount}
***REMOVED******REMOVED******REMOVED***onChange={handleInputChange}
***REMOVED******REMOVED******REMOVED***step="0.01"
***REMOVED******REMOVED******REMOVED***min="0"
***REMOVED******REMOVED******REMOVED***required
***REMOVED******REMOVED******REMOVED***className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
***REMOVED******REMOVED******REMOVED***placeholder="0.00"
***REMOVED******REMOVED***  />
***REMOVED******REMOVED***</div>

***REMOVED******REMOVED***<div>
***REMOVED******REMOVED***  <label
***REMOVED******REMOVED******REMOVED***htmlFor="category"
***REMOVED******REMOVED******REMOVED***className="block text-sm font-medium text-gray-700 mb-1"
***REMOVED******REMOVED***  >
***REMOVED******REMOVED******REMOVED***Category *
***REMOVED******REMOVED***  </label>
***REMOVED******REMOVED***  <select
***REMOVED******REMOVED******REMOVED***id="category"
***REMOVED******REMOVED******REMOVED***name="category"
***REMOVED******REMOVED******REMOVED***value={formData.category}
***REMOVED******REMOVED******REMOVED***onChange={handleInputChange}
***REMOVED******REMOVED******REMOVED***required
***REMOVED******REMOVED******REMOVED***className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
***REMOVED******REMOVED***  >
***REMOVED******REMOVED******REMOVED***{categories.map((category) => (
***REMOVED******REMOVED******REMOVED***  <option key={category} value={category}>
***REMOVED******REMOVED******REMOVED******REMOVED***{category}
***REMOVED******REMOVED******REMOVED***  </option>
***REMOVED******REMOVED******REMOVED***))}
***REMOVED******REMOVED***  </select>
***REMOVED******REMOVED***</div>

***REMOVED******REMOVED***<div>
***REMOVED******REMOVED***  <label
***REMOVED******REMOVED******REMOVED***htmlFor="expense_date"
***REMOVED******REMOVED******REMOVED***className="block text-sm font-medium text-gray-700 mb-1"
***REMOVED******REMOVED***  >
***REMOVED******REMOVED******REMOVED***Date *
***REMOVED******REMOVED***  </label>
***REMOVED******REMOVED***  <input
***REMOVED******REMOVED******REMOVED***type="date"
***REMOVED******REMOVED******REMOVED***id="expense_date"
***REMOVED******REMOVED******REMOVED***name="expense_date"
***REMOVED******REMOVED******REMOVED***value={formData.expense_date}
***REMOVED******REMOVED******REMOVED***onChange={handleInputChange}
***REMOVED******REMOVED******REMOVED***required
***REMOVED******REMOVED******REMOVED***className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
***REMOVED******REMOVED***  />
***REMOVED******REMOVED***</div>

***REMOVED******REMOVED***<div>
***REMOVED******REMOVED***  <label
***REMOVED******REMOVED******REMOVED***htmlFor="notes"
***REMOVED******REMOVED******REMOVED***className="block text-sm font-medium text-gray-700 mb-1"
***REMOVED******REMOVED***  >
***REMOVED******REMOVED******REMOVED***Description/Notes
***REMOVED******REMOVED***  </label>
***REMOVED******REMOVED***  <textarea
***REMOVED******REMOVED******REMOVED***id="notes"
***REMOVED******REMOVED******REMOVED***name="notes"
***REMOVED******REMOVED******REMOVED***value={formData.notes}
***REMOVED******REMOVED******REMOVED***onChange={handleInputChange}
***REMOVED******REMOVED******REMOVED***rows={3}
***REMOVED******REMOVED******REMOVED***className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
***REMOVED******REMOVED******REMOVED***placeholder="Optional description..."
***REMOVED******REMOVED***  />
***REMOVED******REMOVED***</div>

***REMOVED******REMOVED***<button
***REMOVED******REMOVED***  type="submit"
***REMOVED******REMOVED***  disabled={isSubmitting}
***REMOVED******REMOVED***  className="w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
***REMOVED******REMOVED***>
***REMOVED******REMOVED***  {isSubmitting ? "Saving..." : "Save Expense"}
***REMOVED******REMOVED***</button>
***REMOVED***  </form>
***REMOVED***</div>
  );
}
