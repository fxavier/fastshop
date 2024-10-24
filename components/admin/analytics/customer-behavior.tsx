"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BehaviorTimeline } from "./behavior-timeline";
import { BehaviorHeatmap } from "./behavior-heatmap";
import { ProductAffinityChart } from "./product-affinity-chart";

export function CustomerBehavior() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Customer Behavior Analysis</h2>
        <p className="text-muted-foreground">
          Understand how customers interact with your store
        </p>
      </div>

      <Tabs defaultValue="timeline">
        <TabsList>
          <TabsTrigger value="timeline">Activity Timeline</TabsTrigger>
          <TabsTrigger value="heatmap">Browsing Patterns</TabsTrigger>
          <TabsTrigger value="affinity">Product Affinity</TabsTrigger>
        </TabsList>

        <TabsContent value="timeline">
          <Card>
            <CardHeader>
              <CardTitle>Customer Activity Timeline</CardTitle>
              <CardDescription>
                Track customer interactions over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <BehaviorTimeline />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="heatmap">
          <Card>
            <CardHeader>
              <CardTitle>Browsing Patterns</CardTitle>
              <CardDescription>
                Visualize how customers navigate your store
              </CardDescription>
            </CardHeader>
            <CardContent>
              <BehaviorHeatmap />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="affinity">
          <Card>
            <CardHeader>
              <CardTitle>Product Affinity Analysis</CardTitle>
              <CardDescription>
                Discover which products are often purchased together
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ProductAffinityChart />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}