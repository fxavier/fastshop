"use client";

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  {
    pair: "Headphones + Case",
    frequency: 85,
  },
  {
    pair: "Watch + Band",
    frequency: 72,
  },
  {
    pair: "Phone + Charger",
    frequency: 68,
  },
  {
    pair: "Laptop + Mouse",
    frequency: 65,
  },
  {
    pair: "Camera + Lens",
    frequency: 45,
  },
];

export function ProductAffinityChart() {
  return (
    <div className="h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="pair" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="frequency" fill="hsl(var(--primary))" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}