import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import currencyReducer from "./slices/currencySlice";
import uiReducer from "./slices/uiSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    currency: currencyReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;