import { createSlice } from "@reduxjs/toolkit";
import { fetchTeachers } from "./operations.js";

const saveFavouritesToLocalStorage = (items) => {
  const favIds = items.filter(t => t.favourite).map(t => t.id);
  localStorage.setItem('favourites', JSON.stringify(favIds));
};

const teachersSlice = createSlice({
  name: "teachers",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {
    toggleFavourite: (state, action) => {
      const teacher = state.items.find(t => t.id === action.payload);
      if (teacher) {
        teacher.favourite = !teacher.favourite;
        saveFavouritesToLocalStorage(state.items);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeachers.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.status = "succeeded";

        const favourites = JSON.parse(localStorage.getItem('favourites')) || [];

        state.items = action.payload.map((item, index) => ({
          ...item,
          id: index,
          favourite: favourites.includes(index),
        }));
      })
      .addCase(fetchTeachers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { toggleFavourite } = teachersSlice.actions;
export default teachersSlice.reducer;