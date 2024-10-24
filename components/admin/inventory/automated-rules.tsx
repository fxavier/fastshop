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
import { Switch } from "@/components/ui/switch";

interface AutomatedRule {
  id: string;
  name: string;
  condition: {
    type: "stock" | "sales" | "time";
    operator: "lt" | "gt" | "eq";
    value: number;
  };
  action: {
    type: "reorder" | "notify" | "adjust_price";
    value: number;
  };
  isActive: boolean;
}

const initialRules: AutomatedRule[] = [
  {
    id: "1",
    name: "Low Stock Reorder",
    condition: {
      type: "stock",
      operator: "lt",
      value: 10,
    },
    action: {
      type: "reorder",
      value: 50,
    },
    isActive: true,
  },
  {
    id: "2",
    name: "High Demand Price Adjustment",
    condition: {
      type: "sales",
      operator: "gt",
      value: 100,
    },
    action: {
      type: "adjust_price",
      value: 10, // Increase price by 10%
    },
    isActive: true,
  },
];

export function AutomatedRules() {
  const [rules, setRules] = useState(initialRules);

  const toggleRule = (ruleId: string) => {
    setRules((prev) =>
      prev.map((rule) =>
        rule.id === ruleId ? { ...rule, isActive: !rule.isActive } : rule
      )
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Automated Rules</h2>
          <p className="text-muted-foreground">
            Configure automated inventory management rules
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Rule
        </Button>
      </div>

      <div className="grid gap-6">
        {rules.map((rule) => (
          <Card key={rule.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>{rule.name}</CardTitle>
                  <CardDescription>
                    When {rule.condition.type} is{" "}
                    {rule.condition.operator === "lt"
                      ? "less than"
                      : rule.condition.operator === "gt"
                      ? "greater than"
                      : "equal to"}{" "}
                    {rule.condition.value}
                  </CardDescription>
                </div>
                <Switch
                  checked={rule.isActive}
                  onCheckedChange={() => toggleRule(rule.id)}
                />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                Action:{" "}
                {rule.action.type === "reorder"
                  ? `Automatically reorder ${rule.action.value} units`
                  : rule.action.type === "adjust_price"
                  ? `Adjust price by ${rule.action.value}%`
                  : `Send notification`}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}