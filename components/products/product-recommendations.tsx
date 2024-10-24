"use client";

import { useEffect, useState } from "react";
import { ProductCard } from "@/components/product-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Product } from "@/lib/types";

interface ProductRecommendationsProps {
  currentProductId: string;
  userId?: string;
}

export function ProductRecommendations({
  currentProductId,
  userId,
}: ProductRecommendationsProps) {
  const [recommendations, setRecommendations] = useState<{
    similar: Product[];
    complementary: Product[];
    personalized: Product[];
  }>({
    similar: [],
    complementary: [],
    personalized: [],
  });

  useEffect(() => {
    // In a real app, fetch recommendations from API
    const fetchRecommendations = async () => {
      // Mock data for demonstration
      const mockRecommendations = {
        similar: [
          // ... similar products
        ],
        complementary: [
          // ... complementary products
        ],
        personalized: userId
          ? [
              // ... personalized recommendations
            ]
          : [],
      };
      setRecommendations(mockRecommendations);
    };

    fetchRecommendations();
  }, [currentProductId, userId]);

  return (
    <div className="space-y-6">
      <Tabs defaultValue="similar">
        <TabsList>
          <TabsTrigger value="similar">Similar Products</TabsTrigger>
          <TabsTrigger value="complementary">Frequently Bought Together</TabsTrigger>
          {userId && <TabsTrigger value="personalized">Recommended for You</TabsTrigger>}
        </TabsList>

        <TabsContent value="similar">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {recommendations.similar.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="complementary">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {recommendations.complementary.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>

        {userId && (
          <TabsContent value="personalized">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {recommendations.personalized.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
}