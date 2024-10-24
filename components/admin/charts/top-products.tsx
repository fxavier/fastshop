"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  {
    name: "Wireless Headphones",
    sales: 145,
    revenue: 43355,
  },
  {
    name: "Smart Watch",
    sales: 123,
    revenue: 36777,
  },
  {
    name: "Laptop Pro",
    sales: 98,
    revenue: 127400,
  },
  {
    name: "Tablet Air",
    sales: 87,
    revenue: 43500,
  },
  {
    name: "Gaming Console",
    sales: 75,
    revenue: 37500,
  },
];

export function TopProducts() {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sales" fill="hsl(var(--primary))" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}