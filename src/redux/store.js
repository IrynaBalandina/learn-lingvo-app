import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from "./filterSlice.js";
import teachersReducer from "./teacherSlice.js";
import authReducer from './authSlice.js';
import modalReducer from './modalSlice.js';

export  const store = configureStore({
  reducer: {
      auth: authReducer,
      modal:modalReducer,
    filters: filtersReducer,
    teachers: teachersReducer,
  },
});