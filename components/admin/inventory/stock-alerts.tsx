"use client";

import { AlertCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface StockAlert {
  id: string;
  productId: string;
  productName: string;
  currentStock: number;
  threshold: number;
  status: "critical" | "low" | "reorder";
}

const stockAlerts: StockAlert[] = [
  {
    id: "1",
    productId: "1",
    productName: "Premium Wireless Headphones",
    currentStock: 5,
    threshold: 10,
    status: "critical",
  },
  {
    id: "2",
    productId: "2",
    productName: "Smart Watch Series X",
    currentStock: 12,
    threshold: 15,
    status: "low",
  },
];

export function StockAlerts() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Stock Alerts</CardTitle>
            <CardDescription>
              Products that need attention
            </CardDescription>
          </div>
          <AlertCircle className="h-5 w-5 text-destructive" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {stockAlerts.map((alert) => (
            <div
              key={alert.id}
              className="flex items-center justify-between rounded-lg border p-4"
            >
              <div>
                <h4 className="font-medium">{alert.productName}</h4>
                <p className="text-sm text-muted-foreground">
                  Current stock: {alert.currentStock} / Threshold:{" "}
                  {alert.threshold}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Badge
                  variant={
                    alert.status === "critical"
                      ? "destructive"
                      : alert.status === "low"
                      ? "secondary"
                      : "default"
                  }
                >
                  {alert.status}
                </Badge>
                <Button size="sm">Reorder</Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}