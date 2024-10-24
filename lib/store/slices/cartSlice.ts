import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "@/lib/types";

interface CartState {
  items: CartItem[];
  couponCode: string | null;
  isOpen: boolean;
}

const initialState: CartState = {
  items: [],
  couponCode: null,
  isOpen: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.productId === action.payload.productId
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (item) => item.productId !== action.payload
      );
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ productId: string; quantity: number }>
    ) => {
      const item = state.items.find(
        (item) => item.productId === action.payload.productId
      );
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    applyCoupon: (state, action: PayloadAction<string>) => {
      state.couponCode = action.payload;
    },
    clearCart: (state) => {
      state.items = [];
      state.couponCode = null;
    },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const {
  addItem,
  removeItem,
  updateQuantity,
  applyCoupon,
  clearCart,
  toggleCart,
} = cartSlice.actions;

export default cartSlice.reducer;