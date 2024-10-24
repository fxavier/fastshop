"use client";

import Image from "next/image";
import { Minus, Plus, X } from "lucide-react";
import { useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";
import { updateQuantity, removeItem } from "@/lib/store/slices/cartSlice";
import { CartItem as CartItemType } from "@/lib/types";
import { useProduct } from "@/hooks/use-product";

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const dispatch = useDispatch();
  const { data: product } = useProduct(item.productId);

  if (!product) return null;

  const handleUpdateQuantity = (newQuantity: number) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ productId: item.productId, quantity: newQuantity }));
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <div className="relative h-16 w-16 overflow-hidden rounded">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1 space-y-1">
        <h4 className="text-sm font-medium">{product.name}</h4>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            className="h-6 w-6"
            onClick={() => handleUpdateQuantity(item.quantity - 1)}
          >
            <Minus className="h-3 w-3" />
          </Button>
          <span className="w-8 text-center">{item.quantity}</span>
          <Button
            variant="outline"
            size="icon"
            className="h-6 w-6"
            onClick={() => handleUpdateQuantity(item.quantity + 1)}
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>
      </div>
      <div className="space-y-1 text-right">
        <div className="text-sm font-medium">
          ${(item.price * item.quantity).toFixed(2)}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6"
          onClick={() => dispatch(removeItem(item.productId))}
        >
          <X className="h-3 w-3" />
        </Button>
      </div>
    </div>
  );
}