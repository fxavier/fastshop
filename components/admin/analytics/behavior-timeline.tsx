"use client";

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { time: "00:00", pageViews: 120, addToCart: 8, purchases: 2 },
  { time: "03:00", pageViews: 80, addToCart: 5, purchases: 1 },
  { time: "06:00", pageViews: 150, addToCart: 12, purchases: 4 },
  { time: "09:00", pageViews: 300, addToCart: 25, purchases: 8 },
  { time: "12:00", pageViews: 450, addToCart: 38, purchases: 12 },
  { time: "15:00", pageViews: 400, addToCart: 32, purchases: 10 },
  { time: "18:00", pageViews: 380, addToCart: 30, purchases: 9 },
  { time: "21:00", pageViews: 250, addToCart: 20, purchases: 6 },
];

export function BehaviorTimeline() {
  return (
    <div className="h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="pageViews"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="addToCart"
            stroke="hsl(var(--secondary))"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="purchases"
            stroke="hsl(var(--accent))"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}