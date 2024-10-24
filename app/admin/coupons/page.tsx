import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { CouponsTable } from "@/components/admin/coupons/coupons-table";
import { CouponDialog } from "@/components/admin/coupons/coupon-dialog";

export default function CouponsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Coupons</h1>
          <p className="text-muted-foreground">Manage discount coupons</p>
        </div>
        <CouponDialog>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Coupon
          </Button>
        </CouponDialog>
      </div>
      <CouponsTable />
    </div>
  );
}