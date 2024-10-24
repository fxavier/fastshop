"use client";

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const funnelData = [
  {
    stage: "Product View",
    users: 10000,
    dropoff: "0%",
  },
  {
    stage: "Add to Cart",
    users: 3000,
    dropoff: "70%",
  },
  {
    stage: "Checkout",
    users: 1500,
    dropoff: "50%",
  },
  {
    stage: "Purchase",
    users: 1000,
    dropoff: "33%",
  },
];

export function FunnelAnalysis() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Conversion Funnel</CardTitle>
        <CardDescription>
          Track user progression through the purchase funnel
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={funnelData}>
              <XAxis dataKey="stage" />
              <YAxis />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="font-medium">Users:</div>
                          <div>{payload[0].value}</div>
                          <div className="font-medium">Dropoff:</div>
                          <div>{payload[0].payload.dropoff}</div>
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar dataKey="users" fill="hsl(var(--primary))" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}