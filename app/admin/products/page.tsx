import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { ProductsTable } from "@/components/admin/products/products-table";
import { ProductDialog } from "@/components/admin/products/product-dialog";

export default function ProductsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Products</h1>
          <p className="text-muted-foreground">Manage your product catalog</p>
        </div>
        <ProductDialog>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Product
          </Button>
        </ProductDialog>
      </div>
      <ProductsTable />
    </div>
  );
}