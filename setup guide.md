# 🚀 CopilotAI Setup Guide

This guide will walk you through setting up the CopilotAI landing page and its integrated services (Firebase & Stripe).

## 📋 Prerequisites
- **Node.js**: v18.17 or later
- **npm**: v9 or later
- **Firebase Account**: [Sign up here](https://console.firebase.google.com/)
- **Stripe Account**: [Sign up here](https://dashboard.stripe.com/)
- **PostgreSQL Database**: (Optional, if using Prisma) [Supabase](https://supabase.com/) is recommended.

---

## 🛠 1. Local Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd copilotai-landing

# Install dependencies
npm install
```

---

## 🔑 2. Environment Configuration

Create a `.env` file in the root directory. Use the template below:

```env
# --- STRIPE ---
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...

# --- FIREBASE (Client Side) ---
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=...

# --- DATABASE (Optional) ---
DATABASE_URL="postgresql://user:password@localhost:5432/copilotai"

# --- APP ---
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### How to get Firebase Keys:
1. Go to [Firebase Console](https://console.firebase.google.com/).
2. Create a new project.
3. Add a "Web App" to your project.
4. Copy the `firebaseConfig` values into your `.env` file.
5. Enable **Authentication** (Email/Password, Google, GitHub).
6. Enable **Cloud Firestore** and **Storage**.

### How to get Stripe Keys:
1. Go to [Stripe Dashboard](https://dashboard.stripe.com/test/apikeys).
2. Copy your **Secret Key** and **Publishable Key**.
3. Create a **Subscription Product** in the Products section.
4. Copy the **Price IDs** for your Pro and Elite plans and update them in `components/Pricing.tsx`.

---

## 🗄 3. Database Initialization (Prisma)

If you intend to use the local PostgreSQL database alongside Firebase:

```bash
# Push the schema to your database
npx prisma db push

# Generate the Prisma client
npx prisma generate
```

---

## 🏃 4. Running the Project

### Development Mode
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm run start
```

---

## 📦 5. Deployment (Vercel)

1. Push your code to GitHub.
2. Import the project in [Vercel](https://vercel.com/new).
3. Add all environment variables from your `.env` file to Vercel's Project Settings.
4. Deploy!

---

## 🤝 6. Troubleshooting

- **Image Errors**: If images don't load, ensure the domain is added to the `images.remotePatterns` array in `next.config.js`.
- **Firebase Auth Errors**: Ensure that the "Authorized Domains" list in Firebase Authentication includes your deployment URL (e.g., `yourapp.vercel.app`).
- **Stripe Checkout**: Ensure your `NEXT_PUBLIC_APP_URL` is correctly set to your production URL in production.

---

**Proprietary License** © 2026 CopilotAI. All rights reserved.
