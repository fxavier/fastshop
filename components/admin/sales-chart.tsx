"use client";

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { date: "Jan", revenue: 4000 },
  { date: "Feb", revenue: 3000 },
  { date: "Mar", revenue: 5000 },
  { date: "Apr", revenue: 4500 },
  { date: "May", revenue: 6000 },
  { date: "Jun", revenue: 5500 },
];

export function SalesChart() {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}