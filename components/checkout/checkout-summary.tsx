"use client";

import { useSelector } from "react-redux";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { RootState } from "@/lib/store";
import { formatCurrency } from "@/lib/utils";

export function CheckoutSummary() {
  const { items } = useSelector((state: RootState) => state.cart);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 10; // Fixed shipping cost for demo
  const tax = subtotal * 0.1; // 10% tax rate for demo
  const total = subtotal + shipping + tax;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          {items.map((item) => (
            <div key={item.productId} className="flex justify-between text-sm">
              <span>{item.productId} × {item.quantity}</span>
              <span>{formatCurrency(item.price * item.quantity)}</span>
            </div>
          ))}
        </div>
        <Separator />
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>{formatCurrency(subtotal)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>{formatCurrency(shipping)}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span>{formatCurrency(tax)}</span>
          </div>
        </div>
        <Separator />
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>{formatCurrency(total)}</span>
        </div>
      </CardContent>
    </Card>
  );
}