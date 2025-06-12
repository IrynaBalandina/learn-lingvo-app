import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  languages: [],
  levels: [],
  priceRange: [0, 100],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters(state, action) {
      return { ...state, ...action.payload };
    },
    clearFilters() {
      return initialState;
    },
  },
});

export const { setFilters, clearFilters } = filtersSlice.actions;
export default filtersSlice.reducer;