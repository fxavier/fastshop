import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import type { Order } from "@/lib/types";

interface OrderTimelineProps {
  order: Order;
}

export function OrderTimeline({ order }: OrderTimelineProps) {
  const events = [
    {
      date: order.createdAt,
      title: "Order Placed",
      description: "Your order has been confirmed",
    },
    {
      date: new Date(order.createdAt.getTime() + 24 * 60 * 60 * 1000),
      title: "Processing",
      description: "Your order is being processed",
    },
    order.status === "shipped" && {
      date: order.updatedAt,
      title: "Shipped",
      description: `Your order has been shipped via ${order.carrier}`,
    },
  ].filter(Boolean);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {events.map((event, index) => (
            <div key={index} className="flex gap-4">
              <div className="relative flex flex-col items-center">
                <div className="h-2 w-2 rounded-full bg-primary" />
                {index !== events.length - 1 && (
                  <div className="h-full w-px bg-border" />
                )}
              </div>
              <div className="flex-1 pb-4">
                <p className="font-medium">{event.title}</p>
                <p className="text-sm text-muted-foreground">
                  {event.description}
                </p>
                <p className="text-sm text-muted-foreground">
                  {format(event.date, "PPp")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}