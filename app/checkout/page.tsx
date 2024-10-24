"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { loadStripe } from "@stripe/stripe-js";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { RootState } from "@/lib/store";
import { CheckoutSummary } from "@/components/checkout/checkout-summary";
import { ShippingForm } from "@/components/checkout/shipping-form";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function CheckoutPage() {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const cart = useSelector((state: RootState) => state.cart);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (isLoaded && !user) {
      router.push("/sign-in?redirect=/checkout");
    }
  }, [isLoaded, user, router]);

  if (!isLoaded || !user) {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: cart.items,
          email: user.primaryEmailAddress?.emailAddress,
        }),
      });

      const { sessionId } = await response.json();
      const stripe = await stripePromise;
      await stripe?.redirectToCheckout({ sessionId });
    } catch (error) {
      console.error("Checkout error:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="container py-8">
      <h1 className="mb-8 text-3xl font-bold">Checkout</h1>
      <div className="grid gap-8 lg:grid-cols-2">
        <form onSubmit={handleSubmit} className="space-y-8">
          <ShippingForm />
          <Button type="submit" className="w-full" disabled={isProcessing}>
            {isProcessing ? "Processing..." : "Complete Purchase"}
          </Button>
        </form>
        <div>
          <CheckoutSummary />
        </div>
      </div>
    </div>
  );
}