import { DataTable } from "@/components/admin/orders/data-table";
import { columns } from "@/components/admin/orders/columns";

const orders = [
  {
    id: "ORD-001",
    customer: "John Doe",
    date: "2024-03-15",
    total: 599.98,
    status: "shipped",
    items: 2,
  },
  {
    id: "ORD-002",
    customer: "Jane Smith",
    date: "2024-03-14",
    total: 299.99,
    status: "processing",
    items: 1,
  },
  // Add more orders...
];

export default function OrdersPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Orders</h1>
        <p className="text-muted-foreground">Manage customer orders</p>
      </div>
      <DataTable columns={columns} data={orders} />
    </div>
  );
}