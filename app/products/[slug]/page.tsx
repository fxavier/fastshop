import { notFound } from "next/navigation";
import { AddToCart } from "@/components/products/add-to-cart";
import { ProductGallery } from "@/components/products/product-gallery";
import { ProductInfo } from "@/components/products/product-info";
import { getProduct } from "@/lib/api/products";

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProduct(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="container py-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <ProductGallery images={product.images} />
        <div className="space-y-6">
          <ProductInfo product={product} />
          <AddToCart product={product} />
        </div>
      </div>
    </div>
  );
}