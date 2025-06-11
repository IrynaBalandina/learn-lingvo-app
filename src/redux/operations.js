import { ref, get } from "firebase/database";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { database } from "../firebase";

export const fetchTeachers = createAsyncThunk("teachers/fetchAll", async () => {
  const dbRef = ref(database, "/");
  const snapshot = await get(dbRef);

  if (!snapshot.exists()) {
    throw new Error("No data found");
  }

  const data = snapshot.val();


  return Object.values(data);
});