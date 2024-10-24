"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ShippingForm() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="address">Street Address</Label>
        <Input id="address" required />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="city">City</Label>
          <Input id="city" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="state">State</Label>
          <Input id="state" required />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="postal-code">Postal Code</Label>
          <Input id="postal-code" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="country">Country</Label>
          <Input id="country" required />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" type="tel" required />
      </div>
    </div>
  );
}