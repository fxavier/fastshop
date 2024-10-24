"use client";

import { useEffect, useState } from "react";
import { Product } from "@/lib/types";

const mockProducts = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    slug: "premium-wireless-headphones",
    description: "High-quality wireless headphones with noise cancellation",
    price: 299.99,
    compareAtPrice: 349.99,
    categoryId: "electronics",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    ],
    attributes: {
      color: "Black",
      connectivity: "Bluetooth 5.0",
    },
    stock: 50,
    sku: "WH-1000XM4",
    currency: "USD",
  },
  // Add more mock products as needed
];

export function useProduct(productId: string) {
  const [data, setData] = useState<Product | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchProduct = async () => {
      try {
        // In a real app, this would be an API call
        const product = mockProducts.find((p) => p.id === productId);
        if (product) {
          setData(product);
        } else {
          throw new Error("Product not found");
        }
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  return { data, error, loading };
}