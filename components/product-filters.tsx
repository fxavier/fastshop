"use client";

import { useRouter, useSearchParams } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const priceRanges = [
  { label: "Under $100", value: "0-100" },
  { label: "$100 - $500", value: "100-500" },
  { label: "$500 - $1000", value: "500-1000" },
  { label: "Over $1000", value: "1000-999999" },
];

const sortOptions = [
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Name: A to Z", value: "name-asc" },
  { label: "Name: Z to A", value: "name-desc" },
];

export function ProductFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateFilters = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="space-y-6">
      <div>
        <Label>Sort By</Label>
        <Select
          value={searchParams.get("sort") || ""}
          onValueChange={(value) => updateFilters("sort", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select..." />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Accordion type="single" collapsible>
        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {priceRanges.map((range) => (
                <div key={range.value} className="flex items-center space-x-2">
                  <Checkbox
                    id={range.value}
                    checked={searchParams.get("price") === range.value}
                    onCheckedChange={() =>
                      updateFilters(
                        "price",
                        searchParams.get("price") === range.value
                          ? ""
                          : range.value
                      )
                    }
                  />
                  <Label htmlFor={range.value}>{range.label}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}