import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from "./filterSlice.js";
import teachersReducer from "./teacherSlice.js";
import authReducer from './authSlice.js';

export  const store = configureStore({
  reducer: {
      auth: authReducer,
    filters: filtersReducer,
    teachers: teachersReducer,
  },
});