"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/utils";

interface InventoryItem {
  id: string;
  name: string;
  sku: string;
  stock: number;
  threshold: number;
  value: number;
  status: "in-stock" | "low-stock" | "out-of-stock";
}

const inventory: InventoryItem[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    sku: "WH-1000XM4",
    stock: 50,
    threshold: 10,
    value: 14999.50,
    status: "in-stock",
  },
  {
    id: "2",
    name: "Smart Watch Series X",
    sku: "SW-X44",
    stock: 5,
    threshold: 15,
    value: 1999.95,
    status: "low-stock",
  },
];

export function InventoryReport() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Inventory Report</h2>
        <p className="text-muted-foreground">
          Current inventory status and value
        </p>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>SKU</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Value</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inventory.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.sku}</TableCell>
                <TableCell>
                  {item.stock}{" "}
                  {item.stock <= item.threshold && (
                    <span className="text-sm text-muted-foreground">
                      (Below threshold: {item.threshold})
                    </span>
                  )}
                </TableCell>
                <TableCell>{formatCurrency(item.value)}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      item.status === "in-stock"
                        ? "default"
                        : item.status === "low-stock"
                        ? "secondary"
                        : "destructive"
                    }
                  >
                    {item.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}