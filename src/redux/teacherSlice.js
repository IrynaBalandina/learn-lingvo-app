import { createSlice } from "@reduxjs/toolkit";
import { fetchTeachers } from "./operations.js";

const teachersSlice = createSlice({
  name: "teachers",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {
    toggleFavourite: (state, action) => {
      const teacherId = action.payload;
      const teacher = state.items.find(t => t.id === teacherId);
      if (teacher) {
        teacher.favourite = !teacher.favourite;
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTeachers.pending, state => {
        state.status = "loading";
      })
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload.map((item, index) => ({
          ...item,
          id: index,
          favourite: false
        }));
      })
      .addCase(fetchTeachers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  }
});

export const { toggleFavourite } = teachersSlice.actions;
export default teachersSlice.reducer;