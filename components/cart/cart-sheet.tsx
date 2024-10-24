"use client";

import { useSelector, useDispatch } from "react-redux";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CartItem } from "./cart-item";
import { toggleCart } from "@/lib/store/slices/cartSlice";
import { RootState } from "@/lib/store";
import { useRouter } from "next/navigation";

export function CartSheet() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { items, isOpen } = useSelector((state: RootState) => state.cart);
  
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    dispatch(toggleCart());
    router.push("/checkout");
  };

  return (
    <Sheet open={isOpen} onOpenChange={() => dispatch(toggleCart())}>
      <SheetContent className="flex w-full flex-col sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Shopping Cart ({items.length})</SheetTitle>
        </SheetHeader>

        {items.length > 0 ? (
          <>
            <ScrollArea className="flex-1 pr-4">
              <div className="space-y-4 py-4">
                {items.map((item) => (
                  <CartItem key={item.productId} item={item} />
                ))}
              </div>
            </ScrollArea>
            <div className="space-y-4 border-t pt-4">
              <div className="flex items-center justify-between text-base">
                <span>Total</span>
                <span className="font-semibold">${total.toFixed(2)}</span>
              </div>
              <Button onClick={handleCheckout} className="w-full">
                Proceed to Checkout
              </Button>
            </div>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-2">
            <span className="text-muted-foreground">Your cart is empty</span>
            <Button variant="outline" onClick={() => dispatch(toggleCart())}>
              Continue Shopping
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}