"use client";

import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Plus, CreditCard } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PaymentMethodForm } from "./payment-method-form";

interface PaymentMethod {
  id: string;
  type: "card";
  last4: string;
  brand: string;
  expiryMonth: number;
  expiryYear: number;
  isDefault: boolean;
}

const mockPaymentMethods: PaymentMethod[] = [
  {
    id: "1",
    type: "card",
    last4: "4242",
    brand: "visa",
    expiryMonth: 12,
    expiryYear: 2024,
    isDefault: true,
  },
];

export function PaymentMethods() {
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>(
    mockPaymentMethods
  );
  const [selectedMethod, setSelectedMethod] = useState<string>(
    paymentMethods.find((p) => p.isDefault)?.id || ""
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Payment Methods</h3>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Add Payment Method
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Payment Method</DialogTitle>
            </DialogHeader>
            <PaymentMethodForm onSubmit={() => {}} />
          </DialogContent>
        </Dialog>
      </div>

      <RadioGroup value={selectedMethod} onValueChange={setSelectedMethod}>
        <div className="space-y-4">
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              className="flex items-start space-x-4 rounded-lg border p-4"
            >
              <RadioGroupItem value={method.id} id={method.id} />
              <div className="flex-1">
                <Label htmlFor={method.id} className="font-medium">
                  <div className="flex items-center space-x-2">
                    <CreditCard className="h-4 w-4" />
                    <span>
                      {method.brand.toUpperCase()} ending in {method.last4}
                    </span>
                    {method.isDefault && (
                      <span className="text-sm text-muted-foreground">
                        (Default)
                      </span>
                    )}
                  </div>
                </Label>
                <p className="text-sm text-muted-foreground">
                  Expires {method.expiryMonth}/{method.expiryYear}
                </p>
              </div>
            </div>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
}