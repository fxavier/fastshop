"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { Badge } from "@/components/ui/badge";

const data = [
  { name: "New", value: 30, color: "hsl(var(--chart-1))" },
  { name: "Regular", value: 45, color: "hsl(var(--chart-2))" },
  { name: "VIP", value: 25, color: "hsl(var(--chart-3))" },
];

export function CustomerSegments() {
  return (
    <div className="flex items-center justify-between">
      <div className="h-[200px] w-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="space-y-2">
        {data.map((segment) => (
          <div key={segment.name} className="flex items-center space-x-2">
            <div
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: segment.color }}
            />
            <span>{segment.name}</span>
            <Badge variant="secondary">{segment.value}%</Badge>
          </div>
        ))}
      </div>
    </div>
  );
}