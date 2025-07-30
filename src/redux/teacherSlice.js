import { createSlice } from "@reduxjs/toolkit";
import { fetchTeachers } from "./operations.js";


const saveFavouritesToLocalStorage = (items) => {
  const favIds = items
    .filter(t => t.favourite)
    .map(t => String(t.id));
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
const teacherId = String(action.payload);
const teacher = state.items.find(t => String(t.id) === teacherId);

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

        let favourites = [];
        try {
          const parsed = JSON.parse(localStorage.getItem('favourites'));
          favourites = Array.isArray(parsed) ? parsed.map(String) : [];
        } catch {
          favourites = [];
        }


        state.items = action.payload.map((item, index) => {
          const itemId = String(item.id ?? index);
          return {
            ...item,
            id: itemId,
            favourite: favourites.includes(itemId),
          };
        });
      })
      .addCase(fetchTeachers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { toggleFavourite } = teachersSlice.actions;
export default teachersSlice.reducer;