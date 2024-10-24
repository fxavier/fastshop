import { CustomersTable } from "@/components/admin/customers/customers-table";

export default function CustomersPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Customers</h1>
        <p className="text-muted-foreground">Manage your customers</p>
      </div>
      <CustomersTable />
    </div>
  );
}