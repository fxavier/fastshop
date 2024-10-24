"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown } from "lucide-react";

interface BulkOperationsProps {
  selectedIds: string[];
  onUpdateStock: (amount: number) => void;
  onUpdatePrice: (percentage: number) => void;
  onDelete: () => void;
}

export function BulkOperations({
  selectedIds,
  onUpdateStock,
  onUpdatePrice,
  onDelete,
}: BulkOperationsProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" disabled={selectedIds.length === 0}>
          Bulk Actions
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem onClick={() => onUpdateStock(10)}>
          Increase Stock (+10)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onUpdateStock(-10)}>
          Decrease Stock (-10)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onUpdatePrice(10)}>
          Increase Price (+10%)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onUpdatePrice(-10)}>
          Decrease Price (-10%)
        </DropdownMenuItem>
        <DropdownMenuItem
          className="text-destructive"
          onClick={onDelete}
        >
          Delete Selected
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}