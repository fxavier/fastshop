"use client";

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const periods = {
  "7d": [
    { date: "Mon", revenue: 4000, orders: 24 },
    { date: "Tue", revenue: 3500, orders: 21 },
    { date: "Wed", revenue: 5000, orders: 32 },
    { date: "Thu", revenue: 4500, orders: 28 },
    { date: "Fri", revenue: 6000, orders: 35 },
    { date: "Sat", revenue: 5500, orders: 31 },
    { date: "Sun", revenue: 4800, orders: 29 },
  ],
  "30d": Array.from({ length: 30 }, (_, i) => ({
    date: `Day ${i + 1}`,
    revenue: Math.floor(Math.random() * 3000) + 3000,
    orders: Math.floor(Math.random() * 20) + 20,
  })),
  "90d": Array.from({ length: 90 }, (_, i) => ({
    date: `Day ${i + 1}`,
    revenue: Math.floor(Math.random() * 4000) + 3000,
    orders: Math.floor(Math.random() * 25) + 20,
  })),
};

export function RevenueChart() {
  const [period, setPeriod] = useState<keyof typeof periods>("7d");

  return (
    <div className="space-y-4">
      <Tabs value={period} onValueChange={(v) => setPeriod(v as keyof typeof periods)}>
        <TabsList>
          <TabsTrigger value="7d">7 days</TabsTrigger>
          <TabsTrigger value="30d">30 days</TabsTrigger>
          <TabsTrigger value="90d">90 days</TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={periods[period]}>
            <XAxis dataKey="date" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="revenue"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="orders"
              stroke="hsl(var(--secondary))"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}