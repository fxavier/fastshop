"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const timeRanges = ["Last 24 Hours", "Last 7 Days", "Last 30 Days"];
const pageTypes = ["Product Pages", "Category Pages", "Checkout Flow"];

interface HeatmapCell {
  x: number;
  y: number;
  value: number;
}

const generateHeatmapData = (): HeatmapCell[] => {
  const data: HeatmapCell[] = [];
  for (let x = 0; x < 24; x++) {
    for (let y = 0; y < 7; y++) {
      data.push({
        x,
        y,
        value: Math.floor(Math.random() * 100),
      });
    }
  }
  return data;
};

export function BehaviorHeatmap() {
  const [timeRange, setTimeRange] = useState(timeRanges[0]);
  const [pageType, setPageType] = useState(pageTypes[0]);
  const data = generateHeatmapData();

  return (
    <div className="space-y-4">
      <div className="flex space-x-4">
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {timeRanges.map((range) => (
              <SelectItem key={range} value={range}>
                {range}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={pageType} onValueChange={setPageType}>
          <SelectTrigger className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {pageTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-24 gap-1">
        {data.map((cell, index) => (
          <div
            key={index}
            className="aspect-square rounded"
            style={{
              backgroundColor: `hsl(var(--primary) / ${cell.value}%)`,
            }}
            title={`Value: ${cell.value}`}
          />
        ))}
      </div>

      <div className="flex justify-between text-sm text-muted-foreground">
        <span>Less Active</span>
        <span>More Active</span>
      </div>
    </div>
  );
}