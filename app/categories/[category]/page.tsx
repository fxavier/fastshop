import { notFound } from "next/navigation";
import { ProductGrid } from "@/components/product-grid";
import { CategoryHeader } from "@/components/category-header";
import { ProductFilters } from "@/components/product-filters";
import { getProducts, getCategory } from "@/lib/api/products";

interface CategoryPageProps {
  params: {
    category: string;
  };
  searchParams: {
    sort?: string;
    price?: string;
    attributes?: string;
  };
}

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const category = await getCategory(params.category);
  
  if (!category) {
    notFound();
  }

  const products = await getProducts({
    categoryId: category.id,
    sort: searchParams.sort,
    price: searchParams.price,
    attributes: searchParams.attributes,
  });

  return (
    <div className="container py-8">
      <CategoryHeader category={category} />
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-4">
        <aside className="hidden lg:block">
          <ProductFilters />
        </aside>
        <div className="lg:col-span-3">
          <ProductGrid products={products} />
        </div>
      </div>
    </div>
  );
}