"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { addItem } from "@/lib/store/slices/cartSlice";
import { Product } from "@/lib/types";
import { toast } from "sonner";

interface AddToCartProps {
  product: Product;
}

export function AddToCart({ product }: AddToCartProps) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addItem({
        productId: product.id,
        quantity,
        price: product.price,
      })
    );
    toast.success("Added to cart");
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <Button
          variant="outline"
          size="icon"
          onClick={() => quantity > 1 && setQuantity(quantity - 1)}
          disabled={quantity <= 1}
        >
          <Minus className="h-4 w-4" />
        </Button>
        <span className="w-12 text-center text-lg">{quantity}</span>
        <Button
          variant="outline"
          size="icon"
          onClick={() => quantity < product.stock && setQuantity(quantity + 1)}
          disabled={quantity >= product.stock}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      <Button
        className="w-full"
        size="lg"
        onClick={handleAddToCart}
        disabled={product.stock === 0}
      >
        <ShoppingCart className="mr-2 h-5 w-5" />
        Add to Cart
      </Button>
    </div>
  );
}