import { z } from "zod";

export const CustomerSegmentRuleSchema = z.object({
  id: z.string(),
  name: z.string(),
  conditions: z.array(
    z.object({
      field: z.enum([
        "totalSpent",
        "orderCount",
        "lastOrderDate",
        "registrationDate",
        "averageOrderValue",
      ]),
      operator: z.enum(["gt", "lt", "eq", "gte", "lte", "between"]),
      value: z.union([z.number(), z.string(), z.array(z.union([z.number(), z.string()]))]),
    })
  ),
  actions: z.array(
    z.object({
      type: z.enum(["tag", "discount", "email"]),
      value: z.string(),
    })
  ),
  isActive: z.boolean(),
});

export type CustomerSegmentRule = z.infer<typeof CustomerSegmentRuleSchema>;