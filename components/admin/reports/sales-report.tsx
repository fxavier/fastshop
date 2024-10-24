"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DateRangePicker } from "@/components/ui/date-range-picker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SalesChart } from "../charts/sales-chart";

export function SalesReport() {
  const [dateRange, setDateRange] = useState<[Date, Date]>([
    new Date(new Date().setDate(new Date().getDate() - 30)),
    new Date(),
  ]);
  const [groupBy, setGroupBy] = useState("day");

  const downloadReport = () => {
    // Implementation for downloading report
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Sales Report</h2>
          <p className="text-muted-foreground">
            Analyze your sales performance
          </p>
        </div>
        <Button onClick={downloadReport}>
          <Download className="mr-2 h-4 w-4" />
          Download Report
        </Button>
      </div>

      <div className="flex items-center space-x-4">
        <DateRangePicker
          value={dateRange}
          onChange={setDateRange}
        />
        <Select value={groupBy} onValueChange={setGroupBy}>
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="day">Daily</SelectItem>
            <SelectItem value="week">Weekly</SelectItem>
            <SelectItem value="month">Monthly</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Total Sales</CardTitle>
            <CardDescription>For selected period</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-emerald-500">↑ 12.5%</span> vs. previous
              period
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Orders</CardTitle>
            <CardDescription>Total orders</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">356</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-emerald-500">↑ 8.2%</span> vs. previous
              period
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Average Order Value</CardTitle>
            <CardDescription>Per order</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$127.05</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-emerald-500">↑ 3.8%</span> vs. previous
              period
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Sales Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <SalesChart />
        </CardContent>
      </Card>
    </div>
  );
}