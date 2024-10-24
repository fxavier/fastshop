"use client";

import { useState, useEffect } from "react";
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

interface Order {
  id: string;
  date: string;
  total: number;
  status: "pending" | "processing" | "completed" | "cancelled";
  items: Array<{
    id: string;
    name: string;
    quantity: number;
    price: number;
  }>;
}

interface OrderHistoryProps {
  userId: string;
}

export function OrderHistory({ userId }: OrderHistoryProps) {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, fetch orders from API
    const fetchOrders = async () => {
      try {
        // Mock data for demonstration
        const mockOrders: Order[] = [
          {
            id: "ORD-001",
            date: "2024-03-15",
            total: 599.98,
            status: "completed",
            items: [
              {
                id: "1",
                name: "Premium Wireless Headphones",
                quantity: 2,
                price: 299.99,
              },
            ],
          },
          // Add more mock orders as needed
        ];
        setOrders(mockOrders);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [userId]);

  if (loading) {
    return <div>Loading orders...</div>;
  }

  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{new Date(order.date).toLocaleDateString()}</TableCell>
              <TableCell>{formatCurrency(order.total)}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    order.status === "completed"
                      ? "default"
                      : order.status === "processing"
                      ? "secondary"
                      : "destructive"
                  }
                >
                  {order.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}