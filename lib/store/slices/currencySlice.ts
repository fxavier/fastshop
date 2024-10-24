import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CurrencyState {
  current: string;
  rates: Record<string, number>;
}

const initialState: CurrencyState = {
  current: "USD",
  rates: {
    USD: 1,
    EUR: 0.85,
    GBP: 0.73,
  },
};

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setCurrency: (state, action: PayloadAction<string>) => {
      state.current = action.payload;
    },
    updateRates: (state, action: PayloadAction<Record<string, number>>) => {
      state.rates = action.payload;
    },
  },
});

export const { setCurrency, updateRates } = currencySlice.actions;

export default currencySlice.reducer;