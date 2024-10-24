"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TestDialog } from "./test-dialog";

interface ABTest {
  id: string;
  name: string;
  status: "running" | "completed" | "draft";
  variants: {
    id: string;
    name: string;
    traffic: number;
    conversions: number;
    revenue: number;
  }[];
  startDate: string;
  endDate: string;
}

const tests: ABTest[] = [
  {
    id: "1",
    name: "Product Page Layout Test",
    status: "running",
    variants: [
      {
        id: "a",
        name: "Control",
        traffic: 2500,
        conversions: 125,
        revenue: 12500,
      },
      {
        id: "b",
        name: "Variant B",
        traffic: 2500,
        conversions: 150,
        revenue: 15000,
      },
    ],
    startDate: "2024-03-01",
    endDate: "2024-03-31",
  },
];

export function TestManager() {
  const [activeTests, setActiveTests] = useState(tests);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">A/B Tests</h2>
          <p className="text-muted-foreground">
            Manage and monitor your A/B tests
          </p>
        </div>
        <TestDialog>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Test
          </Button>
        </TestDialog>
      </div>

      <div className="grid gap-6">
        {activeTests.map((test) => (
          <Card key={test.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>{test.name}</CardTitle>
                  <CardDescription>
                    {new Date(test.startDate).toLocaleDateString()} -{" "}
                    {new Date(test.endDate).toLocaleDateString()}
                  </CardDescription>
                </div>
                <Badge
                  variant={
                    test.status === "running"
                      ? "default"
                      : test.status === "completed"
                      ? "secondary"
                      : "outline"
                  }
                >
                  {test.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {test.variants.map((variant) => {
                  const conversionRate = (
                    (variant.conversions / variant.traffic) *
                    100
                  ).toFixed(2);

                  return (
                    <div key={variant.id} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{variant.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {conversionRate}% conversion rate
                        </span>
                      </div>
                      <Progress value={parseFloat(conversionRate)} />
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Traffic</p>
                          <p className="font-medium">{variant.traffic}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Conversions</p>
                          <p className="font-medium">{variant.conversions}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Revenue</p>
                          <p className="font-medium">${variant.revenue}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}