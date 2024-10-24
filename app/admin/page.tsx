import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AdminStats } from "@/components/admin/admin-stats";
import { RevenueChart } from "@/components/admin/charts/revenue-chart";
import { CustomerSegments } from "@/components/admin/charts/customer-segments";
import { TopProducts } from "@/components/admin/charts/top-products";
import { SalesOverview } from "@/components/admin/charts/sales-overview";
import { RecentOrders } from "@/components/admin/recent-orders";

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <AdminStats />
      
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <RevenueChart />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Customer Segments</CardTitle>
          </CardHeader>
          <CardContent>
            <CustomerSegments />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Top Products</CardTitle>
          </CardHeader>
          <CardContent>
            <TopProducts />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Sales by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <SalesOverview />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <RecentOrders />
        </CardContent>
      </Card>
    </div>
  );
}