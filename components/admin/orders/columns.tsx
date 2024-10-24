"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import Link from "next/link";

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "id",
    header: "Order ID",
    cell: ({ row }) => (
      <Link
        href={`/admin/orders/${row.getValue("id")}`}
        className="font-medium hover:underline"
      >
        {row.getValue("id")}
      </Link>
    ),
  },
  {
    accessorKey: "customer",
    header: "Customer",
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => new Date(row.getValue("date")).toLocaleDateString(),
  },
  {
    accessorKey: "total",
    header: "Total",
    cell: ({ row }) => formatCurrency(row.getValue("total")),
  },
  {
    accessorKey: "items",
    header: "Items",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status");
      return (
        <Badge
          variant={
            status === "shipped"
              ? "default"
              : status === "processing"
              ? "secondary"
              : "destructive"
          }
        >
          {status}
        </Badge>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <Button
        variant="ghost"
        size="sm"
        asChild
      >
        <Link href={`/admin/orders/${row.getValue("id")}`}>
          View Details
        </Link>
      </Button>
    ),
  },
];