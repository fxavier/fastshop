import { notFound } from "next/navigation";
import { OrderDetails } from "@/components/orders/order-details";
import { OrderTimeline } from "@/components/orders/order-timeline";
import { OrderTracking } from "@/components/orders/order-tracking";

async function getOrder(orderId: string) {
  // Mock data for demonstration
  return {
    id: orderId,
    status: "shipped",
    trackingNumber: "1Z999AA1234567890",
    carrier: "UPS",
    createdAt: new Date("2024-03-15"),
    updatedAt: new Date("2024-03-16"),
    items: [
      {
        productId: "1",
        quantity: 2,
        price: 299.99,
      },
    ],
    total: 599.98,
    shippingAddress: {
      name: "John Doe",
      street: "123 Main St",
      city: "New York",
      state: "NY",
      postalCode: "10001",
      country: "United States",
    },
  };
}

export default async function OrderPage({
  params,
}: {
  params: { id: string };
}) {
  const order = await getOrder(params.id);

  if (!order) {
    notFound();
  }

  return (
    <div className="container py-8">
      <h1 className="mb-8 text-3xl font-bold">Order #{order.id}</h1>
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <OrderDetails order={order} />
        </div>
        <div className="space-y-8">
          <OrderTracking
            status={order.status}
            trackingNumber={order.trackingNumber}
            carrier={order.carrier}
          />
          <OrderTimeline order={order} />
        </div>
      </div>
    </div>
  );
}