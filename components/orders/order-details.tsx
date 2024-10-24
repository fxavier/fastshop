"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { useProduct } from "@/hooks/use-product";
import type { Order } from "@/lib/types";

interface OrderDetailsProps {
  order: Order;
}

export function OrderDetails({ order }: OrderDetailsProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Items</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {order.items.map((item) => (
              <OrderItem key={item.productId} item={item} />
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Shipping Address</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-1">
            <p className="font-medium">{order.shippingAddress.name}</p>
            <p className="text-sm text-muted-foreground">
              {order.shippingAddress.street}
              <br />
              {order.shippingAddress.city}, {order.shippingAddress.state}{" "}
              {order.shippingAddress.postalCode}
              <br />
              {order.shippingAddress.country}
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Order Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{formatCurrency(order.total)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>{formatCurrency(10)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>{formatCurrency(order.total * 0.1)}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>{formatCurrency(order.total * 1.1 + 10)}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function OrderItem({ item }: { item: Order["items"][0] }) {
  const { data: product } = useProduct(item.productId);

  if (!product) return null;

  return (
    <div className="flex items-center space-x-4">
      <div className="relative h-16 w-16 overflow-hidden rounded">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1">
        <h4 className="font-medium">{product.name}</h4>
        <p className="text-sm text-muted-foreground">
          Quantity: {item.quantity}
        </p>
      </div>
      <div className="text-right">
        <p className="font-medium">{formatCurrency(item.price * item.quantity)}</p>
        <p className="text-sm text-muted-foreground">
          {formatCurrency(item.price)} each
        </p>
      </div>
    </div>
  );
}