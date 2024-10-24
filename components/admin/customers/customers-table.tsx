"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye } from "lucide-react";
import { CustomerDialog } from "./customer-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const customers = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    orders: 5,
    totalSpent: 1499.95,
    status: "active",
    imageUrl: "https://api.dicebear.com/7.x/avatars/svg?seed=john",
  },
  // Add more customers...
];

export function CustomersTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Customer</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Orders</TableHead>
            <TableHead>Total Spent</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {customers.map((customer) => (
            <TableRow key={customer.id}>
              <TableCell>
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={customer.imageUrl} />
                    <AvatarFallback>
                      {customer.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <span className="font-medium">{customer.name}</span>
                </div>
              </TableCell>
              <TableCell>{customer.email}</TableCell>
              <TableCell>{customer.orders}</TableCell>
              <TableCell>${customer.totalSpent.toFixed(2)}</TableCell>
              <TableCell>
                <Badge
                  variant={customer.status === "active" ? "default" : "secondary"}
                >
                  {customer.status}
                </Badge>
              </TableCell>
              <TableCell>
                <CustomerDialog customer={customer}>
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                </CustomerDialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}