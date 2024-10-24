"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Electronics", value: 45, color: "hsl(var(--chart-1))" },
  { name: "Fashion", value: 25, color: "hsl(var(--chart-2))" },
  { name: "Home", value: 20, color: "hsl(var(--chart-3))" },
  { name: "Sports", value: 10, color: "hsl(var(--chart-4))" },
];

export function SalesOverview() {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            dataKey="value"
            label={({ name, percent }) =>
              `${name} ${(percent * 100).toFixed(0)}%`
            }
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}