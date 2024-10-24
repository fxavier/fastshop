"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomerDetails } from "./customer-details";
import { CustomerOrders } from "./customer-orders";

interface CustomerDialogProps {
  children: React.ReactNode;
  customer: any;
}

export function CustomerDialog({ children, customer }: CustomerDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Customer Details</DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="details">
          <TabsList>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
          </TabsList>
          <TabsContent value="details">
            <CustomerDetails customer={customer} />
          </TabsContent>
          <TabsContent value="orders">
            <CustomerOrders customerId={customer.id} />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}