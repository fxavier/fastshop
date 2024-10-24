"use client";

import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { addItem } from "@/lib/store/slices/cartSlice";
import type { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addItem({
        productId: product.id,
        quantity: 1,
        price: product.price,
      })
    );
  };

  return (
    <Card className="group overflow-hidden rounded-lg">
      <Link href={`/products/${product.slug}`}>
        <div className="aspect-square overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            width={500}
            height={500}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-xl font-bold">
              ${product.price.toFixed(2)}
            </p>
            {product.compareAtPrice && (
              <p className="text-sm text-muted-foreground line-through">
                ${product.compareAtPrice.toFixed(2)}
              </p>
            )}
          </div>
        </CardContent>
      </Link>
      <CardFooter className="p-4">
        <Button onClick={handleAddToCart} className="w-full">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}