# 🚀 CopilotAI Comprehensive Setup Guide

This document is intended for core engineering team members deploying or running the CopilotAI web application locally. It covers the full integration stack: Next.js, Firebase Auth/Firestore, Stripe Payments, and Prisma.

## 📋 Prerequisites
Before you begin, ensure you have the following installed and configured:
- **Node.js**: v18.17.0 or strictly higher.
- **npm**: v9 or higher.
- **Git**: For version control.
- **Stripe CLI**: (Optional but recommended) for local webhook testing.
- **Firebase Account**: Access to the CopilotAI Google Cloud / Firebase project.

---

## 🛠 1. Local Environment Initialization

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd copilotai-landing
   ```

2. **Install Node modules:**
   ```bash
   npm install
   ```

---

## 🔑 2. Environment Variables & API Keys

Create a `.env.local` file in the root directory. **Never commit this file to version control.**

```env
# ==========================================
# 💳 STRIPE CONFIGURATION
# ==========================================
# Secret key from Stripe Dashboard (Developers -> API Keys)
STRIPE_SECRET_KEY=sk_test_...

# Webhook secret (Generated via Stripe CLI or Dashboard Webhooks section)
STRIPE_WEBHOOK_SECRET=whsec_...

# Public key for frontend elements
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...

# Product Price IDs (Create products in Stripe Dashboard)
NEXT_PUBLIC_STRIPE_PRO_PRICE_ID=price_1P...
NEXT_PUBLIC_STRIPE_ELITE_PRICE_ID=price_1Q...

# ==========================================
# 🔥 FIREBASE CONFIGURATION
# ==========================================
# Get these from Firebase Console -> Project Settings -> General -> Web App
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSy...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=copilotai-xyz.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=copilotai-xyz
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=copilotai-xyz.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abcdef
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-ABCDEF

# ==========================================
# 🗄 DATABASE CONFIGURATION (Prisma)
# ==========================================
# Connection string (e.g., Supabase Transaction pooler)
DATABASE_URL="postgresql://postgres:[PASSWORD]@db.[PROJECT-ID].supabase.co:6543/postgres?pgbouncer=true"
# Direct connection for Prisma migrations
DIRECT_URL="postgresql://postgres:[PASSWORD]@db.[PROJECT-ID].supabase.co:5432/postgres"

# ==========================================
# 🌐 APP CONFIGURATION
# ==========================================
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## 💳 3. Stripe Setup & Testing

To test payments locally, you must forward Stripe webhooks to your local server so the database updates when a subscription is purchased.

1. **Login to Stripe CLI:**
   ```bash
   stripe login
   ```
2. **Listen for Webhooks:**
   ```bash
   stripe listen --forward-to localhost:3000/api/checkout
   ```
3. Copy the `whsec_...` secret output by the command above and place it in your `.env.local` under `STRIPE_WEBHOOK_SECRET`.

---

## 🗄 4. Database Initialization (Prisma)

If your task involves modifying the relational schema or you are setting up a fresh local DB instance:

1. **Push schema to the database (Warning: can cause data loss in dev if schemas conflict):**
   ```bash
   npx prisma db push
   ```
2. **Generate the local Prisma Client:**
   ```bash
   npx prisma generate
   ```

---

## 🏃 5. Development Workflow

Start the Next.js development server:
```bash
npm run dev
```
The application will be available at [http://localhost:3000](http://localhost:3000).

### Common Tasks
- **Linting**: Run `npm run lint` before committing to catch generic errors.
- **Adding Images**: Ensure any external domains used for `next/image` are added to the `remotePatterns` array in `next.config.mjs`.

---

## 📦 6. Deployment Protocol

When deploying to Vercel or similar platforms:
1. Ensure all variables from `.env.local` are added to the production environment settings.
2. Ensure `NEXT_PUBLIC_APP_URL` is updated to the live domain (e.g., `https://copilotai.com`).
3. Update the Firebase "Authorized Domains" list in the Firebase Console (Authentication section) to include your live domain, otherwise, user logins will fail.
4. Add the live webhook endpoint to the Stripe Dashboard and update the production `STRIPE_WEBHOOK_SECRET`.
