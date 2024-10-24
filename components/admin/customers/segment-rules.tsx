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
import { SegmentRuleDialog } from "./segment-rule-dialog";
import type { CustomerSegmentRule } from "@/lib/types/customer";

const initialRules: CustomerSegmentRule[] = [
  {
    id: "1",
    name: "VIP Customers",
    conditions: [
      {
        field: "totalSpent",
        operator: "gt",
        value: 1000,
      },
      {
        field: "orderCount",
        operator: "gte",
        value: 5,
      },
    ],
    actions: [
      {
        type: "tag",
        value: "vip",
      },
      {
        type: "discount",
        value: "VIP10",
      },
    ],
    isActive: true,
  },
  {
    id: "2",
    name: "At-Risk Customers",
    conditions: [
      {
        field: "lastOrderDate",
        operator: "lt",
        value: "90",
      },
    ],
    actions: [
      {
        type: "tag",
        value: "at-risk",
      },
      {
        type: "email",
        value: "winback",
      },
    ],
    isActive: true,
  },
];

export function SegmentRules() {
  const [rules, setRules] = useState<CustomerSegmentRule[]>(initialRules);

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
          <h2 className="text-2xl font-bold">Segment Rules</h2>
          <p className="text-muted-foreground">
            Automatically segment customers based on their behavior
          </p>
        </div>
        <SegmentRuleDialog>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Rule
          </Button>
        </SegmentRuleDialog>
      </div>

      <div className="grid gap-6">
        {rules.map((rule) => (
          <Card key={rule.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>{rule.name}</CardTitle>
                  <CardDescription>
                    {rule.conditions.length} conditions,{" "}
                    {rule.actions.length} actions
                  </CardDescription>
                </div>
                <Switch
                  checked={rule.isActive}
                  onCheckedChange={() => toggleRule(rule.id)}
                />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Conditions</h4>
                  <ul className="mt-2 space-y-2">
                    {rule.conditions.map((condition, index) => (
                      <li key={index} className="text-sm text-muted-foreground">
                        {condition.field}{" "}
                        {condition.operator === "gt" ? "greater than" : "less than"}{" "}
                        {condition.value}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium">Actions</h4>
                  <ul className="mt-2 space-y-2">
                    {rule.actions.map((action, index) => (
                      <li key={index} className="text-sm text-muted-foreground">
                        {action.type === "tag"
                          ? `Add tag: ${action.value}`
                          : action.type === "discount"
                          ? `Apply discount: ${action.value}`
                          : `Send email: ${action.value}`}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}