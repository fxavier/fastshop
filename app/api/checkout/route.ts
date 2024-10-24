import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import Stripe from "stripe";
import { CartItem } from "@/lib/types";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

export async function POST(request: Request) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await request.json();
    const { items } = body as { items: CartItem[] };

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: items.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.productId, // In real app, fetch product details
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout?canceled=true`,
      metadata: {
        userId,
      },
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error("Checkout error:", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}