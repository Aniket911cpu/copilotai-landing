# 💳 Stripe Setup Guide

This guide covers configuring Stripe Checkout and Webhooks for CopilotAI subscriptions.

## 1. Get API Keys
1. Create an account at [Stripe](https://stripe.com/).
2. Go to the **Developers > API keys** dashboard.
3. Toggle "Test mode" on (top right) for local development.
4. Copy your **Publishable key** (`pk_test_...`) and **Secret key** (`sk_test_...`) into your `.env.local` file:

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."
```

## 2. Create Products
1. Go to the **Products** dashboard.
2. Click **Add product**.
3. Create the **PRO** plan:
   - Name: CopilotAI PRO
   - Pricing Model: Standard pricing
   - Price: $29.00
   - Billing period: Monthly
4. Click **Save product**.
5. On the product page, under the **Pricing** section, copy the **API ID** (it starts with `price_...`).
6. Add this to your `.env.local`:
   `NEXT_PUBLIC_STRIPE_PRO_PRICE_ID="price_123..."`
7. Repeat the process for the **ELITE** plan ($99/mo) and add its ID:
   `NEXT_PUBLIC_STRIPE_ELITE_PRICE_ID="price_456..."`

## 3. Local Webhook Testing
Stripe needs a way to tell your local server when a payment is successful. We use the Stripe CLI for this.

1. Install the [Stripe CLI](https://stripe.com/docs/stripe-cli).
2. Login to the CLI:
   ```bash
   stripe login
   ```
3. Start forwarding webhooks to your local Next.js server:
   ```bash
   stripe listen --forward-to localhost:3000/api/checkout
   ```
4. The terminal will output a webhook signing secret (starts with `whsec_...`). Copy this and add it to your `.env.local`:
   ```env
   STRIPE_WEBHOOK_SECRET="whsec_..."
   ```

## 4. Production Webhooks
When deploying to production (e.g., Vercel):
1. In the Stripe Dashboard, go to **Developers > Webhooks**.
2. Click **Add an endpoint**.
3. Set the Endpoint URL to your live site: `https://yourdomain.com/api/checkout`
4. Select the events you want to listen to. At a minimum, select:
   - `checkout.session.completed`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
5. Click **Add endpoint**.
6. Reveal the Signing Secret for this new endpoint and add it as `STRIPE_WEBHOOK_SECRET` in your Vercel Environment Variables.

## 5. Customer Portal Setup
To allow users to manage/cancel their subscriptions:
1. Go to **Settings > Customer portal** in Stripe.
2. Configure the settings (allow cancellations, updates, etc.).
3. Save the configuration. CopilotAI's code will automatically direct users to this portal when they click "Manage Subscription" in the Account dashboard.
