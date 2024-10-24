import { Package, Truck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { OrderStatus } from "@/lib/types";

interface OrderTrackingProps {
  status: OrderStatus;
  trackingNumber?: string;
  carrier?: string;
}

export function OrderTracking({
  status,
  trackingNumber,
  carrier,
}: OrderTrackingProps) {
  const getTrackingUrl = () => {
    switch (carrier?.toLowerCase()) {
      case "ups":
        return `https://www.ups.com/track?tracknum=${trackingNumber}`;
      case "fedex":
        return `https://www.fedex.com/fedextrack/?trknbr=${trackingNumber}`;
      case "usps":
        return `https://tools.usps.com/go/TrackConfirmAction?tLabels=${trackingNumber}`;
      default:
        return "#";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Package className="h-5 w-5" />
          <span>Tracking Information</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Status</p>
              <p className="text-sm capitalize text-muted-foreground">
                {status}
              </p>
            </div>
            {status === "shipped" && (
              <Truck className="h-8 w-8 text-primary" />
            )}
          </div>

          {trackingNumber && carrier && (
            <>
              <div>
                <p className="font-medium">Tracking Number</p>
                <p className="text-sm text-muted-foreground">
                  {trackingNumber}
                </p>
              </div>
              <div>
                <p className="font-medium">Carrier</p>
                <p className="text-sm text-muted-foreground">{carrier}</p>
              </div>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => window.open(getTrackingUrl(), "_blank")}
              >
                Track Package
              </Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
}