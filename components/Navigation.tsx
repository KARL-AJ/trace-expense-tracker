"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
***REMOVED***<nav className="bg-white shadow-sm border-b">
***REMOVED***  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
***REMOVED******REMOVED***<div className="flex justify-between h-16">
***REMOVED******REMOVED***  <div className="flex items-center">
***REMOVED******REMOVED******REMOVED***<h1 className="text-xl font-bold text-gray-900">
***REMOVED******REMOVED******REMOVED***  Trace Expense Tracker
***REMOVED******REMOVED******REMOVED***</h1>
***REMOVED******REMOVED***  </div>

***REMOVED******REMOVED***  <div className="flex items-center space-x-4">
***REMOVED******REMOVED******REMOVED***<Link
***REMOVED******REMOVED******REMOVED***  href="/"
***REMOVED******REMOVED******REMOVED***  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
***REMOVED******REMOVED******REMOVED******REMOVED***pathname === "/"
***REMOVED******REMOVED******REMOVED******REMOVED***  ? "bg-primary-100 text-primary-700"
***REMOVED******REMOVED******REMOVED******REMOVED***  : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
***REMOVED******REMOVED******REMOVED***  }`}
***REMOVED******REMOVED******REMOVED***>
***REMOVED******REMOVED******REMOVED***  Add Expense
***REMOVED******REMOVED******REMOVED***</Link>
***REMOVED******REMOVED******REMOVED***<Link
***REMOVED******REMOVED******REMOVED***  href="/expenses"
***REMOVED******REMOVED******REMOVED***  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
***REMOVED******REMOVED******REMOVED******REMOVED***pathname === "/expenses"
***REMOVED******REMOVED******REMOVED******REMOVED***  ? "bg-primary-100 text-primary-700"
***REMOVED******REMOVED******REMOVED******REMOVED***  : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
***REMOVED******REMOVED******REMOVED***  }`}
***REMOVED******REMOVED******REMOVED***>
***REMOVED******REMOVED******REMOVED***  View Expenses
***REMOVED******REMOVED******REMOVED***</Link>
***REMOVED******REMOVED***  </div>
***REMOVED******REMOVED***</div>
***REMOVED***  </div>
***REMOVED***</nav>
  );
}
