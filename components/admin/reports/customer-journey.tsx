"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface JourneyEvent {
  id: string;
  type: "view" | "cart" | "purchase" | "review";
  timestamp: string;
  details: string;
}

interface CustomerJourney {
  customerId: string;
  email: string;
  events: JourneyEvent[];
}

const mockJourney: CustomerJourney = {
  customerId: "1",
  email: "john@example.com",
  events: [
    {
      id: "1",
      type: "view",
      timestamp: "2024-03-15T10:00:00",
      details: "Viewed Premium Wireless Headphones",
    },
    {
      id: "2",
      type: "cart",
      timestamp: "2024-03-15T10:05:00",
      details: "Added Premium Wireless Headphones to cart",
    },
    {
      id: "3",
      type: "purchase",
      timestamp: "2024-03-15T10:15:00",
      details: "Purchased Premium Wireless Headphones",
    },
    {
      id: "4",
      type: "review",
      timestamp: "2024-03-20T14:30:00",
      details: "Reviewed Premium Wireless Headphones - 5 stars",
    },
  ],
};

export function CustomerJourney() {
  const [searchEmail, setSearchEmail] = useState("");
  const [journey, setJourney] = useState<CustomerJourney | null>(mockJourney);

  const handleSearch = () => {
    // In a real app, fetch customer journey data
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Customer Journey Map</h2>
        <p className="text-muted-foreground">
          Track customer interactions and touchpoints
        </p>
      </div>

      <div className="flex space-x-4">
        <Input
          placeholder="Search by email..."
          value={searchEmail}
          onChange={(e) => setSearchEmail(e.target.value)}
        />
        <Button onClick={handleSearch}>
          <Search className="mr-2 h-4 w-4" />
          Search
        </Button>
      </div>

      {journey && (
        <Card>
          <CardHeader>
            <CardTitle>Journey for {journey.email}</CardTitle>
            <CardDescription>Customer ID: {journey.customerId}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative space-y-6 pl-8 before:absolute before:left-4 before:top-0 before:h-full before:w-px before:bg-border">
              {journey.events.map((event) => (
                <div
                  key={event.id}
                  className="relative before:absolute before:-left-8 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-primary"
                >
                  <div className="space-y-1">
                    <p className="font-medium">{event.details}</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(event.timestamp).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}