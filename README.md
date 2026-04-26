# CopilotAI — Real-Time AI Interview Assistant

A premium, production-ready landing page for a real-time AI interview assistant desktop application.

## 🚀 Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion 11
- **Icons**: Lucide React
- **Payments**: Stripe
- **Database**: Prisma + PostgreSQL (Supabase)

## 🛠 Setup Instructions

### 1. Clone and Install
```bash
git clone <repository-url>
cd copilotai-landing
npm install
```

### 2. Environment Variables
Create a `.env` file in the root directory and add the following:
```env
# Stripe
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...

# Database
DATABASE_URL="postgresql://postgres:[PASSWORD]@db.[PROJECT-ID].supabase.co:6543/postgres?pgbouncer=true"

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3. Database Integration (Prisma)
We use Prisma as the ORM. To sync the schema with your database:
```bash
# Push schema to database
npx prisma db push

# Generate client
npx prisma generate
```

### 4. Stripe Integration
The payment gateway is integrated via Stripe Checkout.
- API Route: `app/api/checkout/route.ts` handles session creation.
- Frontend: `components/Pricing.tsx` triggers the checkout flow.
- Success/Cancel: Redirects are handled within the single-page layout or custom routes.

## 💻 Development
```bash
npm run dev
```

## 🏗 Build for Production
```bash
npm run build
npm run start
```

## 📄 License
This project is licensed under a Proprietary License. All rights reserved.
