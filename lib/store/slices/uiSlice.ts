import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UiState {
  theme: "light" | "dark";
  sidebarOpen: boolean;
  searchQuery: string;
  activeFilters: Record<string, string[]>;
}

const initialState: UiState = {
  theme: "light",
  sidebarOpen: false,
  searchQuery: "",
  activeFilters: {},
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<"light" | "dark">) => {
      state.theme = action.payload;
    },
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    updateFilters: (
      state,
      action: PayloadAction<{ key: string; values: string[] }>
    ) => {
      state.activeFilters[action.payload.key] = action.payload.values;
    },
    clearFilters: (state) => {
      state.activeFilters = {};
    },
  },
});

export const {
  setTheme,
  toggleSidebar,
  setSearchQuery,
  updateFilters,
  clearFilters,
} = uiSlice.actions;

export default uiSlice.reducer;