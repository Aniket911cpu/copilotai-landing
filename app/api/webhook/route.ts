import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { db } from "@/lib/firebase";
import { doc, updateDoc, setDoc } from "firebase/firestore";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get("Stripe-Signature") as string;

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error: any) {
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 });
  }

  const session = event.data.object as any;

  if (event.type === "checkout.session.completed") {
    const subscription = await stripe.subscriptions.retrieve(
      session.subscription as string
    );

    if (!session?.metadata?.userId) {
      // In a real app, you might want to find user by email or stripe customer id
      // For now, we expect userId in metadata
      console.warn("No userId in session metadata");
    } else {
      const userRef = doc(db, "users", session.metadata.userId);
      await updateDoc(userRef, {
        stripeSubscriptionId: subscription.id,
        stripeCustomerId: subscription.customer as string,
        plan: session.metadata.planName || "PRO",
        isActive: true,
      });
    }
  }

  if (event.type === "invoice.payment_succeeded") {
    const subscription = await stripe.subscriptions.retrieve(
      session.subscription as string
    );

    // Update the subscription status in your database
    // This is useful for recurring payments
  }

  return new NextResponse(null, { status: 200 });
}
