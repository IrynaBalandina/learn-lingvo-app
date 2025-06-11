import { createSlice } from "@reduxjs/toolkit";
import { fetchTeachers } from "./operations.js";

const teachersSlice = createSlice({
  name: "teachers",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeachers.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchTeachers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default teachersSlice.reducer;