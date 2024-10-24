"use client";

import { useState } from "react";
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
import { ProductDialog } from "./product-dialog";
import { DeleteDialog } from "./delete-dialog";
import { formatCurrency } from "@/lib/utils";
import Image from "next/image";

const products = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    price: 299.99,
    stock: 50,
    status: "active",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    ],
  },
  // Add more products...
];

export function ProductsTable() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>
                <div className="relative h-10 w-10 overflow-hidden rounded">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </TableCell>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell>{formatCurrency(product.price)}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell>
                <Badge
                  variant={product.status === "active" ? "default" : "secondary"}
                >
                  {product.status}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <ProductDialog product={product}>
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </ProductDialog>
                  <DeleteDialog
                    title="Delete Product"
                    description="Are you sure you want to delete this product? This action cannot be undone."
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