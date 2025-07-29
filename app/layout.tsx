import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trace Expense Tracker",
  description: "A simple personal expense tracker",
  themeColor: "#0ea5e9",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
***REMOVED***<html lang="en">
***REMOVED***  <head>
***REMOVED******REMOVED***<meta name="theme-color" content="#0ea5e9" />
***REMOVED***  </head>
***REMOVED***  <body className={inter.className}>{children}</body>
***REMOVED***</html>
  );
}
