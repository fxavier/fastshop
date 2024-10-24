"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

interface PaymentMethodFormProps {
  onSubmit: (data: any) => void;
}

export function PaymentMethodForm({ onSubmit }: PaymentMethodFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    onSubmit({});
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="card-number">Card Number</Label>
        <Input id="card-number" placeholder="1234 5678 9012 3456" required />
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="space-y-2">
          <Label htmlFor="expiry-month">Expiry Month</Label>
          <Input id="expiry-month" placeholder="MM" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="expiry-year">Expiry Year</Label>
          <Input id="expiry-year" placeholder="YY" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="cvc">CVC</Label>
          <Input id="cvc" placeholder="123" required />
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="default" />
        <Label htmlFor="default">Set as default payment method</Label>
      </div>
      <Button type="submit" className="w-full">
        Save Payment Method
      </Button>
    </form>
  );
}