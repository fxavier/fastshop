"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

interface AddressFormProps {
  onSubmit: (data: any) => void;
}

export function AddressForm({ onSubmit }: AddressFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    onSubmit({});
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="address-name">Address Name</Label>
        <Input id="address-name" placeholder="e.g., Home, Office" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="street">Street Address</Label>
        <Input id="street" required />
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
      <div className="flex items-center space-x-2">
        <Checkbox id="default" />
        <Label htmlFor="default">Set as default address</Label>
      </div>
      <Button type="submit" className="w-full">
        Save Address
      </Button>
    </form>
  );
}