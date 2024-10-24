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
import { Edit, Trash2 } from "lucide-react";
import { CouponDialog } from "./coupon-dialog";
import { DeleteDialog } from "@/components/admin/products/delete-dialog";

const coupons = [
  {
    id: "1",
    code: "SUMMER2024",
    discount: 20,
    type: "percentage",
    validFrom: "2024-06-01",
    validUntil: "2024-08-31",
    usageLimit: 100,
    usageCount: 45,
    status: "active",
  },
  // Add more coupons...
];

export function CouponsTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Code</TableHead>
            <TableHead>Discount</TableHead>
            <TableHead>Valid Period</TableHead>
            <TableHead>Usage</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {coupons.map((coupon) => (
            <TableRow key={coupon.id}>
              <TableCell className="font-medium">{coupon.code}</TableCell>
              <TableCell>
                {coupon.discount}
                {coupon.type === "percentage" ? "%" : "$"}
              </TableCell>
              <TableCell>
                {new Date(coupon.validFrom).toLocaleDateString()} -{" "}
                {new Date(coupon.validUntil).toLocaleDateString()}
              </TableCell>
              <TableCell>
                {coupon.usageCount} / {coupon.usageLimit}
              </TableCell>
              <TableCell>
                <Badge
                  variant={coupon.status === "active" ? "default" : "secondary"}
                >
                  {coupon.status}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <CouponDialog coupon={coupon}>
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </CouponDialog>
                  <DeleteDialog
                    title="Delete Coupon"
                    description="Are you sure you want to delete this coupon? This action cannot be undone."
                    onConfirm={() => {}}
                  >
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </DeleteDialog>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}