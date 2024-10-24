import { z } from "zod";

// Existing schemas...
export const OrderStatusSchema = z.enum([
  "pending",
  "processing",
  "shipped",
  "delivered",
  "cancelled",
]);

export const OrderSchema = z.object({
  id: z.string(),
  userId: z.string(),
  items: z.array(
    z.object({
      productId: z.string(),
      quantity: z.number().int().positive(),
      price: z.number().positive(),
    })
  ),
  status: OrderStatusSchema,
  shippingAddress: z.object({
    name: z.string(),
    street: z.string(),
    city: z.string(),
    state: z.string(),
    postalCode: z.string(),
    country: z.string(),
  }),
  trackingNumber: z.string().optional(),
  carrier: z.string().optional(),
  total: z.number().positive(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Order = z.infer<typeof OrderSchema>;
export type OrderStatus = z.infer<typeof OrderStatusSchema>;