"use client";

import { Product } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
          {product.compareAtPrice && (
            <span className="text-lg text-muted-foreground line-through">
              ${product.compareAtPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>

      <p className="text-muted-foreground">{product.description}</p>

      <div className="space-y-2">
        <h3 className="font-semibold">Specifications</h3>
        <div className="grid gap-2">
          {Object.entries(product.attributes).map(([key, value]) => (
            <div key={key} className="flex justify-between">
              <span className="text-muted-foreground">{key}</span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Badge variant={product.stock > 0 ? "default" : "destructive"}>
          {product.stock > 0 ? "In Stock" : "Out of Stock"}
        </Badge>
        <Badge variant="outline">SKU: {product.sku}</Badge>
      </div>
    </div>
  );
}