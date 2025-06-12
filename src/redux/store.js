import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from "./filterSlice.js";
import teachersReducer from "./teacherSlice.js";

export  const store = configureStore({
  reducer: {
    filters: filtersReducer,
    teachers: teachersReducer,
  },
});