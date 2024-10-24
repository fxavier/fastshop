"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Package, ShoppingCart, Users } from "lucide-react";

const stats = [
  {
    name: "Total Revenue",
    value: "$45,231.89",
    icon: DollarSign,
    change: "+20.1%",
  },
  {
    name: "Orders",
    value: "356",
    icon: ShoppingCart,
    change: "+12.5%",
  },
  {
    name: "Products",
    value: "145",
    icon: Package,
    change: "+8.2%",
  },
  {
    name: "Customers",
    value: "2,103",
    icon: Users,
    change: "+15.3%",
  },
];

export function AdminStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.name}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.name}
              </CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-emerald-500">{stat.change}</span> from last month
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}