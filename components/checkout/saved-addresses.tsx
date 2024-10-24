"use client";

import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AddressForm } from "./address-form";

interface Address {
  id: string;
  name: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  isDefault: boolean;
}

const mockAddresses: Address[] = [
  {
    id: "1",
    name: "Home",
    street: "123 Main St",
    city: "New York",
    state: "NY",
    postalCode: "10001",
    country: "United States",
    isDefault: true,
  },
  {
    id: "2",
    name: "Office",
    street: "456 Business Ave",
    city: "New York",
    state: "NY",
    postalCode: "10002",
    country: "United States",
    isDefault: false,
  },
];

export function SavedAddresses() {
  const [addresses, setAddresses] = useState<Address[]>(mockAddresses);
  const [selectedAddress, setSelectedAddress] = useState<string>(
    addresses.find((a) => a.isDefault)?.id || ""
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Saved Addresses</h3>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Add Address
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Address</DialogTitle>
            </DialogHeader>
            <AddressForm onSubmit={() => {}} />
          </DialogContent>
        </Dialog>
      </div>

      <RadioGroup value={selectedAddress} onValueChange={setSelectedAddress}>
        <div className="space-y-4">
          {addresses.map((address) => (
            <div
              key={address.id}
              className="flex items-start space-x-4 rounded-lg border p-4"
            >
              <RadioGroupItem value={address.id} id={address.id} />
              <div className="flex-1">
                <Label htmlFor={address.id} className="font-medium">
                  {address.name}
                  {address.isDefault && (
                    <span className="ml-2 text-sm text-muted-foreground">
                      (Default)
                    </span>
                  )}
                </Label>
                <p className="text-sm text-muted-foreground">
                  {address.street}
                  <br />
                  {address.city}, {address.state} {address.postalCode}
                  <br />
                  {address.country}
                </p>
              </div>
            </div>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
}