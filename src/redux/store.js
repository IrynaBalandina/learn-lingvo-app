import { configureStore } from '@reduxjs/toolkit';
import teachersReducer from './teacherSlice.js';

export const store = configureStore({
  reducer: {
    teachers: teachersReducer,
  },
});