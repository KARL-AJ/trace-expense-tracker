# Trace Expense Tracker

A simple, personal expense tracker built with Next.js 14, React, Tailwind CSS, and Supabase. This MVP allows you to add and view expenses with a clean, responsive interface.

## Features

- ✅ Add new expenses with amount, category, date, and notes
- ✅ View all expenses in a clean, sortable list
- ✅ Responsive design optimized for mobile devices
- ✅ Progressive Web App (PWA) with offline capabilities
- ✅ Real-time data storage with Supabase

## Tech Stack

- **Frontend**: Next.js 14 (App Router), React, TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Supabase (PostgreSQL)
- **PWA**: next-pwa for service worker and manifest

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp env.example .env.local
```

Then edit `.env.local` with your actual Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Database Management

The database is already set up and ready to use. You can manage it using the provided scripts:

```bash
# Check database status
node scripts/db-manager.js status

# Insert sample data
node scripts/db-manager.js insert

# Show statistics
node scripts/db-manager.js stats

# Clear all data
node scripts/db-manager.js clear
```





## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy!

### Environment Variables for Production

Make sure to set these in your deployment platform:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Project Structure

```
├── app/***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***# Next.js 14 App Router
│   ├── api/***REMOVED******REMOVED******REMOVED***   # API routes
│   ├── expenses/***REMOVED******REMOVED***  # Expenses page
│   ├── globals.css***REMOVED******REMOVED***# Global styles
│   ├── layout.tsx***REMOVED******REMOVED*** # Root layout
│   └── page.tsx***REMOVED******REMOVED***   # Home page
├── components/***REMOVED******REMOVED******REMOVED***# React components
│   ├── ExpenseForm.tsx***REMOVED***# Add expense form
│   ├── ExpenseList.tsx***REMOVED***# Display expenses
│   └── Navigation.tsx***REMOVED*** # Navigation bar
├── lib/***REMOVED******REMOVED******REMOVED******REMOVED***   # Utility libraries
│   └── supabase.ts***REMOVED******REMOVED***# Supabase client
├── public/***REMOVED******REMOVED******REMOVED******REMOVED***# Static assets
│   ├── manifest.json***REMOVED***  # PWA manifest
│   └── service-worker.js  # Service worker
└── package.json***REMOVED******REMOVED***   # Dependencies
```

## Contributing

This is a personal MVP project. Feel free to fork and modify for your own use!

## License

MIT License - feel free to use this code for your personal projects.
